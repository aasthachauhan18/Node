import url from "url";
import fs from "fs";
import requestEmitter from "../events/requestEvents.js";

export function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  requestEmitter.emit("requestLogged", pathname);

  if (pathname === "/") {
    const html = fs.readFileSync("./views/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  else if (pathname === "/api/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "User data fetched",
        user: query.name || "Guest",
        role: query.role || "Viewer"
      })
    );
  }

  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
}
