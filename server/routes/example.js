const router = require("express").Router();
const { getAnUnverifiedExample } = require("../controller/example");
const verify = require("../middlewares/verify");

router.get("/getanunverifiedexample", verify, getAnUnverifiedExample);

module.exports = router;
