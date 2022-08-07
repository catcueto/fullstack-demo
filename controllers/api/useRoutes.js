const router = require("express").Router();
const { User } = require("../../models");

// TODO: Create new user with /api/user
// SIGNUP
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

// We are using this as a demo URL to see if data can be retrieved from the database. Not needed most of the time.
// /api/user/userInfo/:id
router.get("/userInfo/:id", async (req, res) => {
  try {
    const userInfo = await User.findByPk(req.params.id);
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
