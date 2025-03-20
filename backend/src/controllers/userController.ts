import * as userService from "../services/userServices.ts";
import { Request, Response } from "express";

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    await userService.updateUser(userData, userId);
    res.status(200).json({ message: 'Deleted successfully!'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    await userService.deleteUser(userId);
    res.status(200).json({ message: 'Deleted successfully!'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
