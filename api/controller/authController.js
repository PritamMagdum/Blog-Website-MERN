import User from "../models/UserModel.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res
      .status(400)
      .json({ message: "All fields are required!, Please check again" });
  }

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
