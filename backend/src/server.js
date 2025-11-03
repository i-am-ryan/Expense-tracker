import express from 'express';
import dotenv from "dotenv";
import { initDB } from './config/db.js';
import transactionsRoute from './routes/transactionsRoute.js';
import ratelimit from './config/upstash.js';

import job from './config/cron.js';

dotenv.config();

const app = express();
if(process.env.NODE_ENV === "production") job.start();

//middleware to parse json bodies. middleware is a function that runs in the middle between the request and the response.
app.use(ratelimit);
app.use(express.json());


const PORT = process.env.PORT || 5001;

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "Server is healthy" });
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running on PORT:", PORT);
    });
});