var todo_list=[];
let todo_list_store=localStorage.getItem("todo_list");
if(todo_list_store) {
    todo_list=JSON.parse(todo_list_store);
}

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#btn-save").addEventListener("click", function () {
        let todo_input=document.querySelector("input");

        todo_input=document.querySelector("section.todo_main form input[name='todo']")

        let todo_value=todo_input.value;
        if(todo_value==="") {
            alert("하고 싶은 일은 반드시 입력하세요");
            document.querySelectorAll("input")[0].focus();
            document.querySelector("section.todo_main form input[name='todo']").focus();
            return false;
        }

        if(confirm("저장하시겠습니까?")) {
            document.querySelector("form").submit();
        }

    });

});