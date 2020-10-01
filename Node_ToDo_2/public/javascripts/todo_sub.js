document.addEventListener("DOMContentLoaded", function () {
    if (todo_data) {
        let todo_json=JSON.parse(todo_data);
        console.log(todo_json.todo);
        todo_list.push(todo_json);
    }
    
    if(todo_list.length>0) {
        console.log(todo_list);
        localStorage.setItem("todo_list", JSON.stringify(todo_list));
    
        todo_list.forEach(function(todo) {
            let ul_todo_list=document.querySelector("#todo_list");
            let li_todo_data=document.createElement("li");
            let li_todo_text=document.createTextNode(todo.todo);
    
            li_todo_data.appendChild(li_todo_text);
            ul_todo_list.appendChild(li_todo_data);
        });
    }
    
    var count=0;
    document.querySelector("#btn-new").addEventListener("click", function() {
        let ul_todo_list=document.querySelector("#todo_list");
        let li_todo_data=document.createElement("li");
        let li_todo_text=document.createTextNode(++count + ". 오늘 할 일");

        li_todo_data.appendChild(li_todo_text);
        ul_todo_list.appendChild(li_todo_data);
    });
});