const fs = require("fs");
const { dbGetAllVerifiedWords } = require("../model/word");
const { dbGetAllVerifiedDefinations } = require("../model/defination");
const { dbGetAllVerifiedExamples } = require("../model/example");
const getAllVerifiedData = async (req, res) => {
  try {
    let [words, definations, examples] = await Promise.all([
      dbGetAllVerifiedWords(),
      dbGetAllVerifiedDefinations(),
      dbGetAllVerifiedExamples(),
    ]);
    res.json({ words: words, definations: definations, examples: examples });
  } catch (err) {
    fs.appendFile("log.txt", `${err}`, () => {});
    res.status(500).json({
      message: "An unexpected error happened...",
      err: err,
    });
  }
};

module.exports = {
  getAllVerifiedData,
};
