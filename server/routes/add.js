const router = require("express").Router();
const { add } = require("../controller/add");

router.post("/", add);

module.exports = router;
