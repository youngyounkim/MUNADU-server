import { Request, Response } from "express";
import Comments from "../model/Comments";

export const martialList = async (req: Request, res: Response) => {
  try {
    const commentsData = await Comments.findAll({
      where: { Martials_id: req.params.martialid },
    });
    res.status(200).json({ data: commentsData, message: "ok" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
export const userList = async (req: Request, res: Response) => {
  try {
    const commentsData = await Comments.findAll({
      where: { Users_id: req.params.userid },
    });
    res.status(200).json({ data: commentsData, message: "ok" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
export const create = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const deleteComment = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log(e);
  }
};
export const update = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
