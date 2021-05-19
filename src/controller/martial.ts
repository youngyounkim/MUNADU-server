import { Request, Response } from "express";
import { truncate } from "fs";
import Martials from "../model/Martials";
import Reviews from "../model/Reviews";
import Users from "../model/Users";
import Users_Martials from "../model/Users_Martials";
import { isAuthorized } from "./auth";
import sequelize, { Op } from "sequelize";

export const info = async (req: Request, res: Response) => {
  try {
    const MartialData = await Martials.findAll();
    res.status(200).json({ data: MartialData, message: "ok" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
export const bookmark = async (req: Request, res: Response) => {
  if (!isAuthorized(req)) {
    res.status(403).send({ message: "Invalid Access Token" });
  }
  try {
    const userMatialData = await Users.findOne({
      where: { id: req.params.userid },
      include: {
        model: Martials,
        through: { attributes: [] },
      },
    });

    const result = userMatialData?.martials.map((el) =>
      el.get({ plain: true })
    );

    res.status(200).json({ data: result, message: "ok" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
export const bookmarkCreate = async (req: Request, res: Response) => {
  if (!isAuthorized(req)) {
    res.status(403).send({ message: "Invalid Access Token" });
  }
  try {
    const { Users_id, Martials_id } = req.body;
    const createData = await Users_Martials.create({
      Users_id,
      Martials_id,
    });
    res.status(201).send({ message: "Created" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
export const rank = async (req: Request, res: Response) => {
  try {
    const averageData = await Reviews.findAll({
      attributes: [
        "Martials_id",
        [sequelize.fn("AVG", sequelize.col("score")), "scoreAvg"],
      ],
      group: ["Martials_id"],
      order: [[sequelize.fn("AVG", sequelize.col("score")), "DESC"]],
    });

    const ranked = averageData.slice(0, 3).map((el: any) => el.Martials_id);
    const resultData = await Martials.findAll({
      where: {
        [Op.or]: [{ id: ranked[0] }, { id: ranked[1] }, { id: ranked[2] }],
      },
    });
    res.status(200).send({ data: resultData, message: "ok" });
  } catch (e) {
    res.status(404).json({ message: "Not Found" });
  }
};
