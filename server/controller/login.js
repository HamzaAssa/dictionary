const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginAuthor } = require("../model/user");

async function codeCompare(authors, code) {
  for (let i = 0; i < authors.length; i++) {
    const validCode = await bcrypt.compare(code, authors[i].code);
    if (validCode) {
      return {
        author: authors[i],
        validCode: validCode,
      };
    }
  }
}

const login = async (req, res) => {
  const { name, code } = req.body;
  try {
    const authors = await loginAuthor(name);
    if (authors.length < 1) {
      return res.status(400).json({
        message: "Invalid name or code...",
      });
    }
    const result = await codeCompare(authors, code);
    if (!result?.validCode) {
      res.status(400).json({ message: "Invalid name or code..." });
    } else {
      const token = jwt.sign(
        { id: result.author.code },
        process.env.JWT_SECRET_CODE,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        auth: {
          author: {
            authorId: result.author.authorId,
            name: result.author.name,
          },
          token,
        },
        message: "Login successfull. Redicrecting to dashboard",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  login,
};
