const router = require("express").Router();
const verify = require("../middlewares/verify");

const {
  getUnverifiedData,
  getUnverifiedWords,
  deleteAnUnverifiedWords,
  verifyAnUnverifiedData,
} = require("../controller/unverified");

router.get("/data", verify, getUnverifiedData);
router.get("/words", verify, getUnverifiedWords);
router.delete(
  "/delete/:id/:exampleId/:definationId",
  verify,
  deleteAnUnverifiedWords
);
router.post("/verify", verify, verifyAnUnverifiedData);

module.exports = router;
