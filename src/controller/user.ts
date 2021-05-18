import { Request, Response } from "express";
import Users from "../model/Users";

import {
  createSalt,
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  createhashedPassword,
} from "./auth";


export const userId = async (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log(e.message);
  }
};
export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(403).send("Invalid user email or password");
    }
    const userData = await Users.findOne({
      where: {
        email,
      },
    });
    if (userData) {
      const hashedPsw = createhashedPassword(password, userData.salt);
      if (hashedPsw !== userData.password) {
        res.status(403).send("Invalid user password");
      }
      const accessToken = generateAccessToken({
        id: userData.id,
        email: userData.email,
      });
      const refreshToken = generateRefreshToken({
        id: userData.id,
        email: userData.email,
      });
      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, 200, accessToken);
    } else {
      res.status(403).send("Invalid user email");
    }
  } catch (e) {
    res.status(403).send("Invalid user email or password");
  }
};

export const signout = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, password, email } = req.body;
    if (!email || !password || !name) {
      res.status(422).send("insufficient parameters supplied");
    }

    const isUser = await Users.findOne({
      where: { email },
    });

    if (isUser) {
      res.status(409).send("email exists");
    }
    const salt = createSalt();
    const newUser = await Users.create({
      salt,
      email,
      name,
      password: createhashedPassword(password, salt),
      img: 0,
      address: "null",
    });
    res.status(201).send({ data: { id: newUser.id }, massege: "ok" });
  } catch (err) {
    res.status(422).send("insufficient parameters supplied");
  }
};

export const edit = (req: Request, res: Response) => {
  try {
    res.status(200).send("working...");
  } catch (e) {
    console.log("error...");
  }
};
