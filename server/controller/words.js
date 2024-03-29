const fs = require("fs");
const { dbGetAllWords } = require("../model/word");
const getAllWords = async (req, res) => {
  try {
    const result = await dbGetAllWords();
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
  getAllWords,
};
