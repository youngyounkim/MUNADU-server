import { Request, Response } from "express";
import { fileURLToPath } from "url";
import { isAuthorized } from "./auth";
import Reviews from "../model/Reviews";

export const martialList = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const userList = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
interface CreateProps {
  period: number;
  comment: string;
  score: number;
  practicality: number;
  muscle: number;
  difficulty: number;
  intensity: number;
  injury: number;
  Martial_id?: number;
  Users_id?: number;
}
export const create = async (req: Request, res: Response) => {
  if (!isAuthorized(req)) {
    res.status(403).send("Invalid Access Token");
    return;
  }
  try {
    const {
      period,
      comment,
      score,
      practicality,
      muscle,
      difficulty,
      intensity,
      injury,
      Martials_id,
      Users_id,
    } = req.body;
    let data = await Reviews.create({
      period: period,
      comment: comment,
      score: score,
      practicality: practicality,
      muscle: muscle,
      difficulty: difficulty,
      intensity: intensity,
      injury: injury,
      Martials_id: Martials_id,
      Users_id: Users_id,
    });
    res.status(201).json({
      data: { Reviews_id: data.id },
      message: "ok",
    });
  } catch (e) {
    res.status(404).json({
      message: "Not Found",
    });
  }
};
export const deleteReview = (req: Request, res: Response) => {
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
