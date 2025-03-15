import { Elysia } from "elysia";
import route0 from "./routes/index.html";

const app = new Elysia()
  .get("/", route0)
  .listen(3000, ({url}) => console.log(`Listening on ${url}`));
