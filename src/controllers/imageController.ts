import { NextFunction, Request, Response } from "express";

export const imageController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).send();
    } catch (error) {
      console.log("error", error);
      return res.status(501).send({ status: false, error });
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).send();
    } catch (error) {
      console.log("error", error);
      return res.status(501).send({ status: false, error });
    }
  },
};
