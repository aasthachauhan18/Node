import EventEmitter from "events";
import fs from "fs";

const requestEmitter = new EventEmitter();

requestEmitter.on("requestLogged", (url) => {
  const log = `Request received for: ${url}\n`;
  fs.appendFileSync("logs.txt", log);
});

export default requestEmitter;
