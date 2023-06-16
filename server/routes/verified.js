const router = require("express").Router();
// const { getAllWords, } = require("../controller/words");
// router.get("/words", getAllWords);
const { getAllVerifiedData } = require("../controller/verified");
router.get("/data", getAllVerifiedData);

module.exports = router;
