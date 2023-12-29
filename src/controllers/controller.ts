import { Request, Response } from "express";
import { users } from "../db/models/user.models";
import userData from "./userData";

type UserData = {
  name: string;
  age: number;
  place: string;
};

const test = (req: Request, res: Response): void => {
  res.send("Test is working ");
};

const data = (req: Request, res: Response): void => {
  const userDataAll: UserData[] = userData.map((data) => ({
    name: data.name,
    age: data.age,
    place: data.place,
  }));
  res.json(userDataAll);
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.body.name || !req.body.age || !req.body.place) {
      res.status(500).json({
        message: "name and age and place required",
      });
      return;
    }

    const userDataInObject: UserData = {
      name: req.body.name,
      age: req.body.age,
      place: req.body.place,
    };

    const createData = await users.create(userDataInObject);

    res.status(201).send(createData);
    return;
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error.message });
    return;
  }
};

const find = async (req: Request, res: Response) => {
  const newUserData = await users.findOne();

  if (!newUserData) {
    res.status(500).send("user not found");
    return;
  }

  res.status(201).send(newUserData);
};

export default { test, data, createUser, find };
