const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Joi = require("@hapi/joi")

router.use(express.json({ limit: "50mb" }));

router.post("/sign-up", async (req, res) => {
  try { 
    // Get user input
    const { fullName, email, password } = req.body;

    // Validate user input
    if (!(email && password && fullName)) {
      res.status(400).send("All input is required");
    }

    const schema = Joi.object({
      fullName: Joi.string().min(6).required(),
      email: Joi.string().min(6).required.email(),
      password: Joi.string().min(6).required()
    });

    res.send(schema.validate(req.body))

    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      full_name: fullName,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "6h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// signin
router.post("/sign-in", async (req, res) => {
  try {
    //user input
    const { email, password } = req.body;

    // Check if any of the input is blank.
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate user
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "6h",
        }
      );

      // save user token
      user.token = token;

      // sending back user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
