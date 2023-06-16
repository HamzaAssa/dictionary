const {
  dbDeleteAnUnverifiedDefination,
  dbGetAllUnverifiedDefinations,
  dbVerifyAnUnverifiedDefination,
} = require("../model/defination");
const {
  dbDeleteAnUnverifiedExample,
  dbGetAllUnverifiedExamples,
  dbVerifyAnUnverifiedExample,
} = require("../model/example");
const { addLog } = require("../model/log");
const {
  dbGetAllUnverifiedWords,
  dbDeleteAnUnverifiedWords,
  dbVerifyAnUnverifiedWord,
} = require("../model/word");

const getUnverifiedWords = async (req, res) => {
  try {
    const wordList = await dbGetAllUnverifiedWords();
    res.status(200).json(wordList);
  } catch (err) {
    res.json({
      message: "An unexpected error happened...",
    });
  }
};

const getUnverifiedData = async (req, res) => {
  try {
    let [words, definations, examples] = await Promise.all([
      dbGetAllUnverifiedWords(),
      dbGetAllUnverifiedDefinations(),
      dbGetAllUnverifiedExamples(),
    ]);
    return res.json({
      words: words,
      definations: definations,
      examples: examples,
    });
  } catch (error) {
    res.json({
      message: "An unexpected error happended...",
    });
  }
};

const deleteAnUnverifiedWords = async (req, res) => {
  try {
    const deletedWord = await dbDeleteAnUnverifiedWords(req.params.id);
    const deletedExample = await dbDeleteAnUnverifiedExample(
      req.params.exampleId
    );
    const deletedDefination = await dbDeleteAnUnverifiedDefination(
      req.params.definationId
    );
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

const verifyAnUnverifiedWord = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const savedWord = await dbVerifyAnUnverifiedWord(data);
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

const verifyAnUnverifiedData = async (req, res) => {
  const data = req.body;
  try {
    const savedWord = await dbVerifyAnUnverifiedWord(data.word);
    if (savedWord.affectedRows === 1) {
      let [savedDefination, savedExample] = await Promise.all([
        dbVerifyAnUnverifiedDefination(data.defination, savedWord.insertId),
        dbVerifyAnUnverifiedExample(data.example, savedWord.insertId),
      ]);
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
  getUnverifiedData,
  getUnverifiedWords,
  deleteAnUnverifiedWords,
  verifyAnUnverifiedWord,
  verifyAnUnverifiedData,
};
