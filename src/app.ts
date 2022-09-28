import http from "http";
import express from "express";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes";

const LISTEN_PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

app.get("/", async (req, res, next) => res.send("hello from preview-img"));

app.use("/image", imageRoutes);

const main = () => {
  console.log("app started.");

  server.listen(LISTEN_PORT, () => {
    console.log("preview-img service started on *:" + LISTEN_PORT);
  });
};

main();
