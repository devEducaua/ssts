import { Hono, Context } from "hono";
import PostController from "../controllers/postController";

const router = new Hono();
const cont = new PostController();

router.basePath("/users/:userId/");

router
    .get('/', async (c: Context) => {
        await cont.getAll(c);
    })
    .post(async (c: Context) => {
        await cont.create(c);
    })

router
    .patch('/:postId', async (c: Context) => {
        await cont.update(c);
    })

    .get(async (c: Context) => {
        await cont.getOne(c);
    })

    .delete(async (c: Context) => {
        await cont.delete(c);
    })

export default router;
