const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./apis");

// Checking if routes work
// router.get("/", (req, res) => {
//   res.json("I WORK");
// });

// anything in the api folder will have the prefix /api
router.use("./api", apiRoutes);
// default ( / )
router.use("/", homeRoutes);

module.exports = router;
