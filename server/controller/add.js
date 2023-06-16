const { addWord } = require("../model/word");
const { dbAddAnUnverifiedExample } = require("../model/example");
const { dbAddAnUnverifiedDefination } = require("../model/defination");
const { addLog } = require("../model/log");
const addUnverifiedData = async (req, res) => {
  try {
    const result = await addWord(req.body);
    const addedExample = await dbAddAnUnverifiedExample(
      req.body,
      result.insertId
    );
    const addedDefination = await dbAddAnUnverifiedDefination(
      req.body,
      result.insertId
    );
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
  addUnverifiedData,
};
