const db = require("../config/db_connection");

const addWord = async (data) => {
  console.log(data.brahoi_word);
  const result = await db.query(
    `INSERT INTO unverifiedwords(balochi_word, urdu_word, english_word, brahoi_word, roman_balochi_word)
    Values ('${data.balochi_word}', '${data.urdu_word}', '${data.english_word}', '${data.brahoi_word}', '${data.roman_balochi_word}');`
  );
  return result;
};

const unverifiedWords = async () => {
  return await db.query(`SELECT * FROM unverifiedwords ORDER BY balochi_word`);
};

const dbDeleteAnUnverifiedWords = async (id) => {
  return await db.query(`DELETE FROM unverifiedwords 
  WHERE wordId = '${id}';`);
};

const dbSaveAnUnverifiedWords = async (data) => {
  const result = await db.query(
    `INSERT INTO words(balochi_word, urdu_word, english_word, brahoi_word, roman_balochi_word)
    Values ('${data.balochi_word}', '${data.urdu_word}', '${data.english_word}', '${data.brahoi_word}', '${data.roman_balochi_word}');`
  );
  await db.query(`DELETE FROM unverifiedwords 
  WHERE wordId = '${data.wordId}';`);
  return result;
};

const dbGetAllWords = async () => {
  const result = await db.query(`SELECT * FROM words ORDER BY balochi_word`);
  return result;
};

module.exports = {
  addWord,
  unverifiedWords,
  dbDeleteAnUnverifiedWords,
  dbSaveAnUnverifiedWords,
  dbGetAllWords,
};
