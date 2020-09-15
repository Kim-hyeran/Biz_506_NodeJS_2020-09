var express=require("express");
var router=express.Router();
const moment=require("moment");

// bbsModel에 선언된 Schema를 가져와서 bbsVO 모델 생성
var bbsVO=require("../models/bbsModel")

router.get("/list", function(req, res) {
    bbsVO.find()
    .then(function(bbsList) {
        res.render("bbsList", {bbsList});   // ={bbsList : bbsList}
    });
});

router.get("/write", function(req, res) {
    res.render("bbsWrite");
});

router.post("/write", function(req, res) {
    let b_title=req.body.b_title;
    let b_write=req.body.b_write;
    let b_text=req.body.b_text;

    // req.body 객체에 b_date, b_time, b_write, b_count 변수를 생성하고 각각의 변수에 값 세팅
    req.body.b_date=moment(new Date()).format("YYYY-MM-DD");
    req.body.b_time=moment(new Date()).format("HH:mm:ss");
    // req.body.b_write="성현제";
    req.body.b_count=0;

    let data=new bbsVO(req.body);
    data
        .save() // 생성한 bbsVO(=data)에 저장된 데이터를 mongoDB의 table에 insert
        .then(function(bbsVO) {   // insert 성공 시
            //res.json(bbsVO);    // client에게 다시 데이터를 보여라
            // 완료가 되면 리스트 화면으로 이동
            res.redirect("/bbs/list");
        })
        .catch(function(error) {    // insert 실패 시
            console.error(error);   // 오류 메시지를 Console에 출력
        });

    // res.write(b_title);
    // res.write(b_write);
    // res.end(b_text);
    // res.json(req.body);
});

module.exports=router;