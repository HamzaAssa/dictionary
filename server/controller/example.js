const fs = require("fs");
const { dbGetAnUnverifiedExample } = require("../model/example");
const getAnUnverifiedExample = async (req, res) => {
  try {
    const result = await dbGetAnUnverifiedExample(req.wordId);
    res.json(result);
  } catch (err) {
    fs.appendFile("log.txt", `${err}`, () => {});
    res.status(500).json({
      message: "An unexpected error happened...",
      err: err,
    });
  }
};

module.exports = {
  getAnUnverifiedExample,
};
