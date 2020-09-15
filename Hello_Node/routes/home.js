/*
 Router 만드는 절차
    express의 routing 기능을 활용하기 위해 express 프레임워크에서 지원하는 routing 기능을 사용해서 client의 mapping 처리
 */
// 1. express import
var express=require("express");
// 2. express로부터 router 선언
var router=express.Router();

// client의 request method
// requestMethod=GET라고 선언한 함수
// function(req, res) : 함수는 함수인데 이름이 없는 함수, 함수라는 선언만 있고 이름이 없는 함수
//      -> 익명, 무명함수
// call back 함수 : client에서 '/'로 요청하면 처리할 코드를 포함하는 곳
// url에 의해서 호출되는 mapping
// localhost:3000/home 요청에 대한 응답
router.get("/", function(req, res) {
    //res.send("home GET mapping");
    res.render("div");
});

// form의 submit에 의해서 호출되는 mapping
router.post("/", function(req, res) {
    res.send("home POST mapping");
});
// router.put()
// router.delete()

// 현재 이 파일에서 설정한 router 객체를 다른 js 파일에서 import하여 사용할 수 있도록 선언
module.exports=router;