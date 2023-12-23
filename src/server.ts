require("dotenv").config();
import express from "express";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
