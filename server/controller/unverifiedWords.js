const { addLog } = require("../model/log");
const {
  unverifiedWords,
  dbDeleteAnUnverifiedWords,
  dbSaveAnUnverifiedWords,
} = require("../model/word");

const getUnverifiedWords = async (req, res) => {
  try {
    const wordList = await unverifiedWords();
    res.status(200).json(wordList);
  } catch (err) {
    res.json({
      message: "An unexpected error happened...",
    });
  }
};

const deleteAnUnverifiedWords = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedWord = await dbDeleteAnUnverifiedWords(id);
    if (deletedWord.affectedRows === 1) {
      res.json({
        status: 200,
        message: "Word deleted Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "An unexpected erro happened...",
    });
  }
};

const saveAnUnverifiedWords = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const savedWord = await dbSaveAnUnverifiedWords(data);
    if (savedWord.affectedRows === 1) {
      const log = await addLog({
        userId: data.userId,
        wordId: savedWord.insertId,
        operation: "verification",
      });
      res.json({
        status: 200,
        message: "Word saved successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "An unexpected error happened...",
    });
  }
};

module.exports = {
  getUnverifiedWords,
  deleteAnUnverifiedWords,
  saveAnUnverifiedWords,
};
