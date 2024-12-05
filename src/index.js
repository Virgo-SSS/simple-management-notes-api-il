import express, { json } from 'express';
import 'dotenv/config'
import routesV1 from './routes/v1.js';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors({
    origin: '*',
}))
app.use('/' , routesV1);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000} and ready to accept requests!`);
});