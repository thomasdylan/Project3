const router = require("./node_modules/express").Router();
const goalRoutes = require("./goals");

router.use("/goals", goalRoutes);

module.exports = router;
