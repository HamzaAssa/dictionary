const db = require("../config/db_connection");

const dbGetAnUnverifiedDefination = async (wordId) => {
  return await db.query(
    `SELECT * FROM unverifieddefinations WHERE word_id = ?;`,
    [wordId]
  );
};

const dbAddAnUnverifiedDefination = async (data, wordId) => {
  const result = await db.query(
    `INSERT INTO unverifieddefinations(balochi_defination, urdu_defination, english_defination, brahoi_defination, roman_balochi_defination, word_id)
    Values (?, ?, ?, ?, ?, ?);`,
    [
      data.balochi_defination,
      data.urdu_defination,
      data.english_defination,
      data.brahoi_defination,
      data.roman_balochi_defination,
      wordId,
    ]
  );
  return result;
};

const dbVerifyAnUnverifiedDefination = async (data, wordId) => {
  const result = await db.query(
    `INSERT INTO definations(balochi_defination, urdu_defination, english_defination, brahoi_defination, roman_balochi_defination, word_id)
    Values (?, ?, ?, ?, ?, ?);`,
    [
      data.balochi_defination,
      data.urdu_defination,
      data.english_defination,
      data.brahoi_defination,
      data.roman_balochi_defination,
      wordId,
    ]
  );
  await dbDeleteAnUnverifiedDefination(data.definationId);
  return result;
};

const dbDeleteAnUnverifiedDefination = async (id) => {
  return await db.query(
    `DELETE FROM unverifieddefinations
  WHERE definationId = ?;`,
    [id]
  );
};

const dbGetAllUnverifiedDefinations = async () =>
  await db.query(
    `SELECT * FROM unverifieddefinations ORDER BY balochi_defination`
  );

const dbGetAllVerifiedDefinations = async () =>
  await db.query(`SELECT * FROM definations ORDER BY balochi_defination`);

module.exports = {
  dbGetAnUnverifiedDefination,
  dbAddAnUnverifiedDefination,
  dbVerifyAnUnverifiedDefination,
  dbDeleteAnUnverifiedDefination,
  dbGetAllUnverifiedDefinations,
  dbGetAllVerifiedDefinations,
};
