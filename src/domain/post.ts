
export default class Post {
    private title: string;
    private body: string;
    private userId: string;
    private rate: number;

    constructor(title: string, body: string, userId: string, rate: number) {
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.rate = rate;
    }

    deconstruct() {
        return {
            title: this.title,
            body: this.body,
            userId: this.userId,
            rate: this.rate,
        }
    }
}
