import express from "express";
const app = express();

app.use(express.json());

// ================== Pages ==================

import recipesRouter from "./routers/recipesRouter.js";

app.use(recipesRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server is running on localhost:", PORT);
});
