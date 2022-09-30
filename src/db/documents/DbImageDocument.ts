import { Schema, model, models, Model } from "mongoose";
import { ImageData } from "../../model/ImageData";

const DbImageDataSchema = new Schema<ImageData>(
  {
    poolId: { type: String },
    image: { type: String },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export const DbImageDataDocument = (models.DbImageData as Model<ImageData, {}, {}>) || model("DbImageData", DbImageDataSchema, "images");
