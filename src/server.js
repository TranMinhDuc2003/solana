import express from 'express'
import connectDB from './ultils/conectDB.js';
import cors from 'cors';
import { PORT } from './ultils/env.js';
import router from './router/index.js';
import { errorCommon, errorNotFound } from './ultils/errors.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(errorNotFound,errorCommon)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
