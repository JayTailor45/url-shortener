import express from "express";

import healthRouter from "./routes/health.route.js";
import shortenerRouter from "./routes/shortener.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(healthRouter);
app.use(shortenerRouter);

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
