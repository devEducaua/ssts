import { Context } from "hono";
import UserService from "../services/userService";
import User from "../domain/user";

export default class UserController {
    private service;

    constructor() {
        this.service = new UserService();
    }

    async getAll(c: Context) {
        const users = await this.service.getAll();
        c.json(users);
    }

    async getOne(c: Context) {
        const user = await this.service.getOne(c.req.param("userId"));
        c.json(user);
    }

    async create(c: Context) {
        const { name, email, password } = await c.req.json();

        const user = new User(name, email, password, [], new Map());

        await this.service.create(user);

        c.status(201);
        c.json({ User: "created"});
    }

    async update(c: Context) {
        const { name, email, password, posts, ratedPosts } = await c.req.json();
        const id = c.req.param("id");

        const user = new User(name, email, password, posts, ratedPosts);
        await this.service.update(user, id);

        c.json({ User: "updated" });
    }

    async delete(c: Context) {
        const id = c.req.param("id");
        await this.service.delete(id);

        c.json({ User: "deleted" });
    }
}
