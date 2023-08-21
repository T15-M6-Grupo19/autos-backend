import { Request, Response } from "express";
import { CreateCommentService } from "../services/comment/createComment.service";
import { updateCommentService } from "../services/comment/updateComment.service";
import { getCommentByIdService } from "../services/comment/getCommentById.service";
import { getCommentsService } from "../services/comment/getComments.service";
import { deleteCommentService } from "../services/comment/deleteComment.service";

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

const updateCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { comment_text } = req.body;
  const commentId = req.params.id;
  return res
    .status(200)
    .json(await updateCommentService(commentId, comment_text));
};

const getCommentByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  return res.status(200).json(await getCommentByIdService(id));
};

const getCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(await getCommentsService());
};

const deleteCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const userID = res.locals.user.id;

  return res.status(200).json(await deleteCommentService(id, userID));
};

export {
  createCommentController,
  updateCommentController,
  getCommentByIdController,
  getCommentsController,
  deleteCommentController,
};
