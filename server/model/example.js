const db = require("../config/db_connection");

const dbGetAnUnverifiedExample = async (wordId) => {
  return await db.query(`SELECT * FROM unverifiedexamples WHERE word_id = ?;`, [
    wordId,
  ]);
};

const dbAddAnUnverifiedExample = async (data, wordId) => {
  const result = await db.query(
    `INSERT INTO unverifiedexamples(balochi_example, urdu_example, english_example, brahoi_example, roman_balochi_example, word_id)
    Values (?, ?, ?, ?, ?, ?);`,
    [
      data.balochi_example,
      data.urdu_example,
      data.english_example,
      data.brahoi_example,
      data.roman_balochi_example,
      wordId,
    ]
  );
  return result;
};

const dbVerifyAnUnverifiedExample = async (data, wordId) => {
  const result = await db.query(
    `INSERT INTO examples(balochi_example, urdu_example, english_example, brahoi_example, roman_balochi_example, word_id)
    Values (?, ?, ?, ?, ?, ?);`,
    [
      data.balochi_example,
      data.urdu_example,
      data.english_example,
      data.brahoi_example,
      data.roman_balochi_example,
      wordId,
    ]
  );
  await dbDeleteAnUnverifiedExample(data.exampleId);
  return result;
};

const dbDeleteAnUnverifiedExample = async (id) => {
  return await db.query(
    `DELETE FROM unverifiedexamples
  WHERE exampleId = ?;`,
    [id]
  );
};

const dbGetAllUnverifiedExamples = async () =>
  await db.query(`SELECT * FROM unverifiedexamples ORDER BY balochi_example`);

const dbGetAllVerifiedExamples = async () =>
  await db.query(`SELECT * FROM examples ORDER BY balochi_example`);

module.exports = {
  dbAddAnUnverifiedExample,
  dbVerifyAnUnverifiedExample,
  dbGetAnUnverifiedExample,
  dbDeleteAnUnverifiedExample,
  dbGetAllUnverifiedExamples,
  dbGetAllVerifiedExamples,
};
