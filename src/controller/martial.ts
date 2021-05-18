import { Request, Response } from "express";
import Martials from "../model/Martials";

export const info = async (req: Request, res: Response) => {
  try {
    const MartialData = await Martials.findAll();

    res.status(200).send({ data: MartialData, message: "ok" });
  } catch (e) {
    res.status(404).send({ message: "Not Found" });
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
