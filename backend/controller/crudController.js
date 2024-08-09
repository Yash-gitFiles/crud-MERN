const { crudModelSchema } = require("../models/crudModels");

async function addUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Please provide name and email" });
  }

  const foundUser = await crudModelSchema.findOne({ email });

  if (foundUser) {
    return res.status(400).json("Email already exists");
  }

  const data = new crudModelSchema({
    name,
    email,
  });

  const response = await data.save();
  return res.status(201).json(response);
}

async function getAllUsers(_, res) {
  const users = await crudModelSchema.find();
  if (!users) {
    return res.status(404).json({ error: "No users found" });
  }

  return res.status(201).json(users);
}

async function getUserById(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "Please provide id" });
  }
  const user = await crudModelSchema.findById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(201).json(user);
}

async function deleteUser(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "Please provide valid id" });
  }

  const user = await crudModelSchema.findById(id);
  if (!user) {
    return res.status(404).json("user not found");
  }

  const deleteByUser = await crudModelSchema.findByIdAndDelete(user);
  if (deleteByUser) {
    return res.status(200).json("User deleted");
  }
}

async function updateUser(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json({ error: "Please provide valid id" });
  }

  const findUser = await crudModelSchema.findById(id);
  if (!findUser) {
    return res.status(404).json("User not found");
  }

  const userUpdate = await crudModelSchema.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  return res.status(201).json({
    message: "User updated successfully",
    updateUser: userUpdate,
  });
}

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
};
