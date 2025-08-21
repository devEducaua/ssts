import pool from "../db";
import User from "../domain/user";

export default class UserService {
    // login() {
    //     // TODO: implement login
    // }
    async getAll() {
        const result = await pool.query("SELECT * FROM users");
        return { data: result };
    }

    async getOne(id: string) {
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return user;
    }

    async create(user: User) {
        const { name, email, password, posts, ratedPosts } = user.deconstruct();        
        await pool.query("INSERT INTO users (name, email, password, posts, ratedPosts) VALUES ($1, $2, $3, $4, $5)", [name, email, password, posts, ratedPosts]);
    }

    async update(user: User, id: string) {
        const { name, email, password, posts, ratedPosts } = user.deconstruct();        
        await pool.query("UPDATE users SET name=$1, email=$2, password=$3, posts=$4, ratedPosts=$5 WHERE id = $6", [name, email, password, posts, ratedPosts, id]);
    }

    async delete(id: string) {
        await pool.query("DELETE FROM users WHERE id = $1", [id]);
    }
}
