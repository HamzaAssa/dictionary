const db = require("../config/db_connection");

const addLog = async (data) => {
  const result = await db.query(
    `INSERT INTO logs(userId, wordId, operation)
      Values ('${data.userId}', '${data.wordId}', '${data.operation}');`
  );
  return result;
};

module.exports = {
  addLog,
};
