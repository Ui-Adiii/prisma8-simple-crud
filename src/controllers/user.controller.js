import { dataType } from "@prisma/orm-postgres/components";
import { db } from "../prisma/db.ts";

const createUser = async (req, res) => {
  try {
    const { email, username, name } = req.body;
    const user = await db.orm.public.User.create({
      email,
      username,
      name,
    });
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error: error?.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username, name } = req.body;

    const upUser = await db.orm.public.User.whereUnique({id}).update({name,username,email})
    return res.status(200).json({
      message: "user updated successfully",
      user: upUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error?.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
   
    await db.orm.public.User.whereUnique({id}).delete()
    return res.status(202).json({
      message: "user deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error?.message,
    });
  }
};
const getUsers = async (req, res) => {
  try {
    console.log(Object.keys(db.orm.public.User));
    console.log(Object.keys(db.orm.public.User.where({})));
    const users = await db.orm.public.User.all()
    
    return res.status(200).json({
      users
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error?.message,
    });
  }
};
export { createUser, updateUser, deleteUser, getUsers };
