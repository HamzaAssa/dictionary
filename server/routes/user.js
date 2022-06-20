const router = require("express").Router();
const { login } = require("../controller/login");

router.post("/login", login);

module.exports = router;
