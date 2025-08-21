import pool from "../db";
import Post from "../domain/post";

export default class PostService {

    async getAll() {
        const posts = await pool.query("SELECT * FROM posts");
        return { data: posts };
    }

    async getOne(id: string) {
        const post = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
        return post;
    }

    async create(post: Post) {
        const { title, body, userId, rate } = post.deconstruct();
        await pool.query("INSERT INTO posts (title, body, userId, rate) VALUES ($1, $2, $3, $4)", [title, body, userId, rate]);
    }

    async update(post: Post, id: string) {
        const { title, body, userId, rate } = post.deconstruct();
        await pool.query("UPDATE posts SET title=$1, body=$2, userId=$3, rate=$4 WHERE id = $5", [title, body, userId, rate, id]);
    }

    async delete(id: string) {
        await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    }
}
