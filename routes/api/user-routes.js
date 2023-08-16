const router = require("express").Router();
const { createUser, login, getSingleUser } = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
// /api/user for user signup
router.post("/", createUser);

// /api/user/login for user login
router.post("/login", login);

// /api/user/me to get single user data
router.get('/me', authMiddleware, getSingleUser);


module.exports = router;
