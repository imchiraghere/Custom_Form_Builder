// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/",
  {
    dbName: "MyFirst",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to Database!!"))
);

// Schema for AnswerSubmit
const AnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Answer = mongoose.model("studentRecord", AnswerSchema);
// Answer.createIndexes();

// Schema for Question of app
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
    unique: true,
  },
  options: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Question = mongoose.model("QuestionRecord", QuestionSchema);
// Question.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://loacalhost:5000

  // If you see App is working means
  // backend working properly
});

app.get("/fetch_all_questions", async function (req, res) {
  await Question.find({})
    .then((result) => {
      console.log("xxxxxxxxxxxxxxxxxxxxx", result);
      res.status(200).json(result[0]);
    })
    .catch((e) => console.log(e));
});

app.post("/submit", async (req, resp) => {
  try {
    const ans = new Answer(req.body);
    let result = await ans.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Record already Submitted");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
app.listen(5000);
