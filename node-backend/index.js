import express from "express";

import { config } from "dotenv";
config();

import healthRouter from "./routes/health.route.js";
import shortenerRouter from "./routes/shortener.route.js";
import { redisClient } from "./cache/redis.client.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(healthRouter);
app.use(shortenerRouter);

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);

  redisClient
    .connect()
    .then(() => {
      console.log("Connected to Redis");
    })
    .catch((err) => {
      console.error("Could not connect to Redis", err);
    });
});
