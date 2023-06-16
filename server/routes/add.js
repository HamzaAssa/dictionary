const router = require("express").Router();
const { addUnverifiedData } = require("../controller/add");

router.post("/", addUnverifiedData);

module.exports = router;
