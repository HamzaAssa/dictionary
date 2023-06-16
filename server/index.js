const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const addroute = require("./routes/add");
const unverifiedRoute = require("./routes/unverified");
const userRoute = require("./routes/user");
const verfiedRoute = require("./routes/verified");

require("dotenv").config();
const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: process.env.CORS_URL,
//     optionsSuccessStatus: 200, // For legacy browsers
//   })
// );

app.use(express.static("public/build"));

app.get("/", async (req, res) => {
  res.sendFile("/index.html");
});
app.use(express.json());
app.use("/verfied", verfiedRoute);
app.use("/add", addroute);
app.use("/unverified", unverifiedRoute);
app.use("/author", userRoute);

app.all("*", function (req, res) {
  return res.redirect("/");
});

// const PORT = process.env.PORT || 9000;
const PORT = 7060;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
