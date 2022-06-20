const { dbGetAllWords } = require("../model/word");
const getAllWords = async (req, res) => {
  try {
    const result = await dbGetAllWords();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: "An unexpected error happened...",
    });
  }
};

module.exports = {
  getAllWords,
};
