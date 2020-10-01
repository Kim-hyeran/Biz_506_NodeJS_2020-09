var mongoose=require("mongoose");

var schema=mongoose.Schema;

var todoVO=new schema({
    t_text : String,
    t_date : String,
    t_time : String
})

module.exports=mongoose.model("tbl_todo", todoVO);