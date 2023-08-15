import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import getUsersService from "../services/user/getUsers.service";
import getUserByIdService from "../services/user/getUserById.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload = req.body;
  const user = res.locals.user;
  const updatedUser = await updateUserService(payload, user);
  return res.json(updatedUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = res.locals.user;
  await deleteUserService(user);

  return res.status(204).send();
};

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getUsersService();

  return res.status(200).json(users);
};

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = res.locals.user;
  const getUser = await getUserByIdService(user);

  return res.status(200).json(getUser);
};
