const router = require("express").Router();
const postRoutes = require("./postRoutes");
const userRoutes = require("./useRoutes");

// when I wanna access the user, I need to go to the user routes ( /api/user )
app.use("/user", userRoutes);
// when I wanna access the post, I need to go to the post routes ( /api/post )
app.use("/post", postRoutes);

module.exports = router;
