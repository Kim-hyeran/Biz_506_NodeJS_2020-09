var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// nodeJS와 mongoDB를 연동하기 위해 mongoose 모듈 import
var mongoose = require("mongoose");
// db연결 객체 생성
var dbConn = mongoose.connection;
// id 이름이 설정된 tag를 클릭했을 때 수행할 event 핸들링
// $("#id").on(click, function())
// $("#id").click(function())
// mongoose를 통하여 db에 연결을 시도했을 때, 정상적으로 open되면 console에 메시지 출력 
dbConn.once("open", function() {
  console.log(">>MongoDB Open")
});
// db와 연결하여 CRUD를 수행하는 과정에서 오류가 발생하면 그 오류 메시지를 console에 출력
dbConn.on("error", function (error) {
  console.err(error);
});
// mongoDB 서버
mongoose.connect("mongodb://localhost/mybbs", {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// bbsRouter.js import
var bbsRouter = require("./routes/bbsRoute");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// localhost:3000/bbs/*를 요청하면 bbsRouter 전달
app.use("/bbs", bbsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
