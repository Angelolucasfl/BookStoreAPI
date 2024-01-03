require("dotenv").config();
import express from "express";
import { bookRouter } from "./modules/book/routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/v1", bookRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}/api-docs`);
});
