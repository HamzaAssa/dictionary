const db = require("../config/db_connection");

const loginAuthor = async (name) => {
  const result = await db.query(
    `SELECT * FROM authors WHERE name like '${name}';`
  );
  return result;
};

module.exports = {
  loginAuthor,
};
