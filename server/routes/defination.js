const router = require("express").Router();
const { getAnUnverifiedDefination } = require("../controller/defination");
const verify = require("../middlewares/verify");

router.get("/getanunverifieddefination", verify, getAnUnverifiedDefination);

module.exports = router;
