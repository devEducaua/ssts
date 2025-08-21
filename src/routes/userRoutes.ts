import { Hono, Context } from "hono";
import UserController from "../controllers/userController";

const router = new Hono();
const cont = new UserController();

router.basePath("/users");

router
    .get('/', async (c: Context) => {
        await cont.getAll(c);
    })
    .post(async (c: Context) => {
        await cont.create(c);
    })

router
    .patch('/:userId', async (c: Context) => {
        await cont.update(c);
    })

    .get(async (c: Context) => {
        await cont.getOne(c);
    })

    .delete(async (c: Context) => {
        await cont.delete(c);
    })

export default router;
