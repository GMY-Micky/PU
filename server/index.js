const express = require("express");
const mongooes = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const gallery = require("./routes/gallery");

app.use(cors());

const PORT = 3001;

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

mongooes.connect(
  "mongodb+srv://GMY-Micky:mustafa123@firstone.ohxlh.mongodb.net/PU-DATA?retryWrites=true&w=majority",
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/gallery", gallery);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
