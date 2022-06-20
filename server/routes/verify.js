const router = require("express").Router();
const verify = require("../middlewares/verify");

const {
  getUnverifiedWords,
  deleteAnUnverifiedWords,
  saveAnUnverifiedWords,
} = require("../controller/unverifiedWords");

router.get("/", verify, getUnverifiedWords);

router.delete("/delete/:id", verify, deleteAnUnverifiedWords);
router.post("/save", verify, saveAnUnverifiedWords);

module.exports = router;
