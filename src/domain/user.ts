import Post from "./post";

export default class User {
    private name: string;
    private email: string;
    private password: string;
    private posts: Post[];
    private ratedPosts: Map<string, Post>;

    constructor(name: string, email: string, password: string, posts: Post[], ratedPosts: Map<string, Post>) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.posts = posts;
        this.ratedPosts = ratedPosts;
    }

    deconstruct() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            posts: this.posts,
            ratedPosts: this.ratedPosts
        }
    }
}
