const router = require("express").Router();
const { User } = require("../../models");

// TODO: Create new user with /api/user

router.post("/", async (req, res) => {
  try {
    const dbUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    // if everything goes well
    res.status(200).json(dbUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
