const router = require("express").Router();
const { getAllWords } = require("../controller/words");
router.get("/getAllWords", getAllWords);

module.exports = router;
