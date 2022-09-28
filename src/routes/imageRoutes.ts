import { Router } from "express";
import { imageController } from "../controllers/imageController";

const imageRoutes = Router();

imageRoutes.route("/:poolId").get(imageController.get);
imageRoutes.route("/:poolId").get(imageController.post);

export default imageRoutes;
