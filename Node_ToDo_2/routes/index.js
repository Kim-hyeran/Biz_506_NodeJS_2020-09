const express = require('express');
const router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/", function(req, res) {
  let todo=req.body.todo;
  let to_date=moment().format("YYYY-MM-DD")
  let to_time=moment().format("HH:mm")

  req.body.to_date=to_date;
  req.body.to_time=to_time;

  let todo_data={...req.body}

  res.render("index", {todo_data : JSON.stringify(todo_data)});
});

router.get("/insert", function(req, res) {
  res.render("write");
});

router.post("/insert", function(req, res) {
  res.redirect("/");
});

router.get("/update", function(req, res) {
  res.render("write");
});

router.post("/update", function(req, res) {
  res.redirect("/");
});

module.exports = router;
