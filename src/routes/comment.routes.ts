import { Router } from "express";
import { createCommentController } from "../controllers/comment.controllers";
import { VerifyUserMiddleware } from "../middlewares/ensureIsUserById.middleware";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";

const commentRoutes: Router = Router();

commentRoutes.post(
  "/:id",
  ensureTokenIsValidMW,
  VerifyUserMiddleware,
  createCommentController
);

export default commentRoutes;
