import { NextFunction, Request, Response } from "express";
import { dbConnect } from "../db/dbConnect";
import { DbImageDataDocument } from "../db/documents/DbImageDocument";
import { ImageData } from "../model/ImageData";

export const imageController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolId = req.params.poolId;
      await dbConnect();
      const data: ImageData | null = await DbImageDataDocument.findOne<ImageData>({ poolId }).exec();
      return res.status(200).send(`<img src="${data?.image}" />`);
    } catch (error) {
      console.log("error", error);
      return res.status(501).send({ success: false, message: error, data: undefined });
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolId = req.params.poolId;
      const data = req.body;
      await dbConnect();
      await DbImageDataDocument.deleteOne({ poolId });
      await DbImageDataDocument.insertMany([data]);
      return res.status(200).send({
        success: true,
        message: "success",
        data,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(501).send({ success: false, message: error, data: undefined });
    }
  },
};
