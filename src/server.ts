require("dotenv").config();
import express from "express";
import { bookRouter } from "./modules/book/routes";

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use("/", bookRouter);
app.use("/:id", bookRouter);
app.use("/available-books", bookRouter);

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
