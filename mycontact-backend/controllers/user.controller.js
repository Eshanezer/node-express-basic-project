const expressAsyncHandler = require("express-async-handler");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (createdUser) {
    res.status(201).json({
      _id: createdUser.id,
      email: createdUser.email,
      username: createdUser.username,
    });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
});

//@desc user login
//@route POST /api/users/login
//@access public
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "100m" }
    );

    res.json({"accessToken":accessToken});
  } else {
    res.status(401);
    throw new Error("Email or Password not valid");
  }
});

const currentUser = expressAsyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
