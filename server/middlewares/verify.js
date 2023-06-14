const jwt = require("jsonwebtoken");
require("dotenv/config");

const verify = (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_CODE);
    req.user = verified;
    next();
    return;
  } catch (err) {
    return res.status(400).json({ message: "Access Denied" });
  }
};

module.exports = verify;
