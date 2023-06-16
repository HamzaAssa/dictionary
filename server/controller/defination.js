const fs = require("fs");
const { dbGetAnUnverifiedDefination } = require("../model/defination");
const getAnUnverifiedDefination = async (req, res) => {
  try {
    const result = await dbGetAnUnverifiedDefination(req.wordId);
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
  getAnUnverifiedDefination,
};
