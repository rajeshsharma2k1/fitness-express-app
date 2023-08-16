const router = require("express").Router();
const userRoutes = require("./user-routes");
const exerciseRoutes = require("./exercise-routes");

router.get("/user", ((req, res) => {
  return res.send({'message': 'Thiss is sisi si si'}).status(200);
}));
router.use("/exercise", exerciseRoutes);

module.exports = router;
