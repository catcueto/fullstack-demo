const router = require("express").Router;

router.get("/", (req, res) => {
  res.json("I come from the homeRoutes file!");
});

module.exports = router;
