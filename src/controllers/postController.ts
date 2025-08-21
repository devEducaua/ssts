import { Context } from "hono";
import Post from "../domain/post";
import UserService from "../services/userService";

export default class PostController {
    private service;

    constructor() { this.service = new UserService() }

    async getAll(c: Context) {
        const posts = await this.service.getAll();
        c.json(posts);
    }

    async getOne(c: Context) {
        const post = await this.service.getOne(c.req.param("postId"));
        c.json(post);
    }

    async create(c: Context) {
        const { title, body, rate } = await c.req.json();
        const userId = c.req.param("userId");

        const post = new Post(title, body, userId, rate);

        await this.service.create(post);

        c.status(201);
        c.json({ Post: "created" });
    }

    async update(c: Context) {
        const postId = c.req.param("postId");
        const userId = c.req.param("userId");
        const { title, body, rate } = await c.req.json();

        const post = new Post(title, body, userId, rate);

        await this.service.update(post, postId);

        c.json({ Post: `${postId} updated`});
    }

    async delete(c: Context) {
        const id = c.req.param("postId");

        await this.service.delete(id);

        c.status(204);
        c.json({ Post: `${id} deleted`});
    }
}
