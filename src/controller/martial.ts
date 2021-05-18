import { Request, Response } from "express";

export const info = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const list = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const bookmark = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const rank = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log(e);
  }
};
