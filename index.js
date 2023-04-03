const exp = require("express");
const app = exp();
const cors = require("cors");
const m = require("mongodb").MongoClient;
const questions=[];

let post3 = [],
  col3 = null,
  post4 = [],
  col4 = null,
  post5 = [],
  col5 = null,
  post6 = [],
  col6 = null,
  post7 = [],
  col7 = null,
  qu=null;
app.use(exp.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

m.connect("mongodb+srv://harish:harish7@cluster0.ffgjypz.mongodb.net/feedback").then((c) => {
  col3 = c.db().collection("sem3")
  col4 = c.db().collection("sem4")
  col5 = c.db().collection("sem5")
  col6 = c.db().collection("sem6")
  col7 = c.db().collection("sem7")
  qu = c.db().collection("questions")}
  ).then(() => {
      col3.find().forEach((e) => post3.push(e));
      col4.find().forEach((e) => post4.push(e));
      col5.find().forEach((e) => post5.push(e));
      col6.find().forEach((e) => post6.push(e));
      col7.find().forEach((e) => post7.push(e));
      qu.find().forEach((e)=> questions.push(e));
    });

app.get("/3", (req, res) => res.json(post3));
app.get("/4", (req, res) => res.json(post4));
app.get("/5", (req, res) => res.json(post5));
app.get("/6", (req, res) => res.json(post6));
app.get("/7", (req, res) => res.json(post7));
app.get("/questions", (req, res) => res.json(questions));

app.post("/3", (req, res) => {
  col3.insertOne(req.body);
  post3.push(req.body);
  res.json(true);
});
app.post("/4", (req, res) => {
  col4.insertOne(req.body);
  post4.push(req.body);
  res.json(true);
});
app.post("/5", (req, res) => {
  col5.insertOne(req.body);
  post5.push(req.body);
  res.json(true);
});
app.post("/6", (req, res) => {
  col6.insertOne(req.body);
  post6.push(req.body);
  res.json(true);
});
app.post("/7", (req, res) => {
  col7.insertOne(req.body);
  post7.push(req.body);
  res.json(true);
});
app.listen(process.env.PORT || 8000);
