const express = require("express");
// const cors = require("cors");
const addroute = require("./routes/add");
const WordverifyRoute = require("./routes/verify");
const userRoute = require("./routes/user");
const wordRoute = require("./routes/words");

require("dotenv").config();
const app = express();

// app.use(cors());
// app.use(
//   cors({
//     origin: process.env.CORS_URL,
//     optionsSuccessStatus: 200, // For legacy browsers
//   })
// );

app.use(express.static("public/build"));

app.use(express.json());
app.use("/words", wordRoute);
app.use("/add", addroute);
app.use("/unverifiedWords", WordverifyRoute);
app.use("/author", userRoute);

app.all("*", function (req, res) {
  res.redirect("https://openbalochidectionary.herokuapp.com/");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
