import { Hono } from 'hono'
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = new Hono().basePath("api");

app.route('/', userRoutes);
app.route('/', postRoutes);


export default {
    port: 6969,
    fetch: app.fetch
}
