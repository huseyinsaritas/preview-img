import { Schema, model, models, Model } from "mongoose";

export interface DbImageData {
  poolId: string;
  image: string;
}

const DbImageDataSchema = new Schema<DbImageData>(
  {
    poolId: { type: String },
    image: { type: String },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

export const DbImageDataDocument = (models.DbImageData as Model<DbImageData, {}, {}, {}>) || model("DbImageData", DbImageDataSchema, "images");
