const mysql = require("mysql2/promise");

async function query(sql, params) {
  const connection = await mysql
    .createConnection({
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DB_NAME,
    })
    .catch((err) => console.log(err));

  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    connection.end(); // Close the connection regardless of success or failure
  }
}

module.exports = {
  query,
};
