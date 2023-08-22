import { Router } from "express";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
import { verifyEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from "../controllers/user.controllers";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { VerifyUserMiddleware } from "../middlewares/ensureIsUserById.middleware";
import { isOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { resetPasswordController, sendResetEmailController } from "../controllers/resetPassword.controllers";

export const userRoutes: Router = Router();

userRoutes.post("", ensureBodyIsValidMW(createUserSchema), verifyEmailMiddleware, createUserController);

userRoutes.patch(
  "/:id",
  ensureBodyIsValidMW(updateUserSchema),
  ensureTokenIsValidMW,
  VerifyUserMiddleware,
  isOwnerMiddleware,
  updateUserController
);

userRoutes.delete("/:id", ensureTokenIsValidMW, VerifyUserMiddleware, isOwnerMiddleware, deleteUserController);

userRoutes.get("", getUsersController);

userRoutes.get("/:id", getUserByIdController);

userRoutes.post("/resetPassword", sendResetEmailController)

userRoutes.patch("/resetPassword/:token", resetPasswordController)
