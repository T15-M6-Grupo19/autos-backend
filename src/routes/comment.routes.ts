import { Router } from "express";
import {
  createCommentController,
  deleteCommentController,
  getCommentByIdController,
  getCommentsController,
  updateCommentController,
} from "../controllers/comment.controllers";
import { VerifyUserMiddleware } from "../middlewares/ensureIsUserById.middleware";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { isOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const commentRoutes: Router = Router();

commentRoutes.post(
  "/:id",
  ensureTokenIsValidMW,
  VerifyUserMiddleware,
  createCommentController
);

commentRoutes.patch(
  "/:id",
  ensureTokenIsValidMW,
  VerifyUserMiddleware,
  isOwnerMiddleware,
  updateCommentController
);

commentRoutes.get("/:id", getCommentByIdController);

commentRoutes.get("", getCommentsController);

commentRoutes.delete(
  "/:id",
  ensureTokenIsValidMW,
  VerifyUserMiddleware,
  deleteCommentController
);

export default commentRoutes;
