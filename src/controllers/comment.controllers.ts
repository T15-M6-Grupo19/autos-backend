import { Request, Response } from "express";
import { CreateCommentService } from "../services/comment/createComment.service";

const createCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.token.id;
  const adId = req.params.id;
  const { comment_text } = req.body;

  return res
    .status(201)
    .json(await CreateCommentService(adId, userId, comment_text));
};

export { createCommentController };
