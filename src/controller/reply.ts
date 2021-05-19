import { Request, Response } from "express";
import Reviews_Replies from "../model/Reviews_Replies";

export const reviewList = (req: Request, res: Response) => {
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

// ? 리뷰에 새로운 댓글을 생성
export const create = async (req: Request, res: Response) => {
  // if (!isAuthorized(req)) {
  //   res.status(403).json({message: "Invalid Access Token"});
  //   return;
  // }
  try {
    const { comment, userId, reviewId } = req.body;
    const data = await Reviews_Replies.create({
      comment: comment,
      Users_id: userId,
      Reviews_id: reviewId,
    });
    res.status(201).json({ data: data, message: "ok" });
  } catch (err) {
    console.log(`err`, err);
    res.status(404).json({
      message: "Not Found",
    });
  }
};

// ? 리뷰에 있는 댓글 삭제.
export const deleteReply = async (req: Request, res: Response) => {
  // if (!isAuthorized(req)) {
  //   res.status(403).json({message: "Invalid Access Token"});
  //   return;
  // }
  try {
    const { replyId } = req.body;
    const data = await Reviews_Replies.destroy({
      where: { id: replyId },
    });
    res.status(200).json({ message: "ok" });
  } catch (err) {
    console.log(`err`, err);
    res.status(404).json({
      message: "Not Found",
    });
  }
};

// ? 리뷰에 있는 댓글 수정
export const update = async (req: Request, res: Response) => {
  // if (!isAuthorized(req)) {
  //   res.status(403).json({message: "Invalid Access Token"});
  //   return;
  // }
  try {
    const { comment, replyId } = req.body;
    const data = await Reviews_Replies.update(
      {
        comment: comment,
      },
      {
        where: { id: replyId },
      }
    );
    res.status(201).json({ message: "ok" });
  } catch (err) {
    console.log(`err`, err);
    res.status(404).json({
      message: "Not Found",
    });
  }
};
