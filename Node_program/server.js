import http from "http";
import { handleRequest } from "./routes/handler.js";

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
