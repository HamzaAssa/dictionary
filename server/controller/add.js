const { addWord } = require("../model/word");
const { addLog } = require("../model/log");
const add = async (req, res) => {
  try {
    const result = await addWord(req.body);
    const log = await addLog({
      userId: "Anonymous",
      wordId: result.insertId,
      operation: "addition",
    });
    res.status(200).json({
      message: "Word has been added and sent for further review....",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: "An unexpected error happened....",
      status: 500,
    });
  }
};

module.exports = {
  add,
};
