const { addWord } = require("../model/word");

const add = async (req, res) => {
  try {
    const result = await addWord(req.body);
    res.status(200).json({
      message: "Word has been added and sent for further review....",
    });
  } catch (err) {
    res.json({
      message: "An unexpected error happened....",
    });
  }
};

module.exports = {
  add,
};
