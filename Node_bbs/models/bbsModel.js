var mongoose = require("mongoose");
/*
 NoSQL인 MongoDB를 RDBMS처럼 사용하기 위해서 Schema 생성
 Table 구조를 생성하는 형태
 VO 객체로서 역할을 수행하게 된다.
 */
var schema=mongoose.Schema;

// bbsVO 생성
// JSON 데이터 구조로 bbsVO의 Table(Schema)을 생성하기 위한 객체 선언
var bbsVO=new schema({
    // 칼럼 이름 : 데이터 Type
    b_date : String,
    b_time : String,
    b_title : String,
    b_write : String,
    b_text : String,
    b_count : Number
});

// mongoose의 model() 함수를 사용하여 tbl_bbs table을 만들고, 그 구조를 bbsVO에 선언된 형태로 만들겠다
// model을 다른 모듈에서 사용할 수 있도록 export
// tbl_bbs라는 이름으로 table을 생성하겠다 선언
// 실제 mongoDB에 생성된 테이블은 복수형으로 이름이 선언된다.
module.exports=mongoose.model("tbl_bbs", bbsVO);