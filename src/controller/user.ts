import { Request, Response } from "express";
import Users from "../model/Users";
import { generateAccessToken, generateRefreshToken } from "./auth";

export const userId = async (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log(e.message);
  }
};
export const signin = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const signout = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
export const signup = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log(e);
  }
};
export const edit = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
