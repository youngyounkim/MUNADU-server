import { Request, Response } from "express";
import Users from "../model/Users";

export const userId = async (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
    await Users.bulkCreate([
      {
        name: "kimcoding",
        email: "kimcoding@codestates.com",
        password: "1234",
        img: "image",
        address: "codestates",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "parkhacker",
        email: "parkhacker@codestates.com",
        password: "1234",
        img: "image",
        address: "codestates",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
