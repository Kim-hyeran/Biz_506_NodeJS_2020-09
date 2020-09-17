/*
 Vanilla JS coding
 jquery 등 front 라이브러리, 프레임워크를 사용하지 않고 순수 JS만을 활용한 코딩
 */
function btn_click() {
    // alert("버튼이 클릭되었습니다.");

    // id가 todo로 되어있는 input tag에 사용자가 입력한 문자열을 추출하여 todo 변수에 담아라
    let todo=document.getElementById("todo").value;
    alert(todo);
}

function main_title_click() {
    // id가 main_title로 되어있는 (일반적인 )모든 tag의 text 문자열을 추출하여 text 변수에 저장
    // innerHTML, innerText 속성을 사용하여 문자열 추출
    // 간혹 일부 브라우저에서 innerText 속성이 안되는 경우도 있다.
    // 또한 innerText는 대소문자를 잘 구분하여야 한다. innerTEXT로 작성하면 안됨
    let text=document.getElementById("main_title").innerHTML;
    alert(text);
}

//HTML DOM(Document Object Model) 전체에 이벤트를 설정하는 함수
// $(document.ready())
// 이 이벤트 핸들러를 사용하게 되면 DOM 문서가 화면에 모두 그려지기 전에 JS 코드가 실행되는 것을 방지할 수 있다.
// 즉 DOM 문서가 화면에 모두 그려진 후 JS 코드가 작동되도록 하기 위한 방법
// $(function() {})
document.addEventListener("DOMContentLoaded", function() {
    // id가 todo인 tag를 todo라는 변수에 저장
    // todo는 id가 todo인 document object가 된다.
    let todo=document.getElementById("todo");

    // id가 todo인 input box에 '반갑습니다'라는 문자열을 setting
    // document.getElementById("todo").value="반갑습니다";
    // todo.value="반갑습니다";

    // tag에 id 값을 지정했을 때 사용하는 코드
    // id가 btn-save인 tag(button)가 click되면 실행할 event 핸들러 등록
    
    // $("#btn-save")
    /*
     JS의 Query 선택자
     document.querySelector() : id가 지정된 tag를 선택할 때 = 결과 1개
        document.querySelector("#id값")
        만약 tag와 class에 querySelector()를 적용하면 조건에 맞는 첫번째 element만 가져올 수 있다.
        보통 본문에 해당하는 tag나 class가 1개만 있을 때 사용하기도 한다.
     document.querySelectorAll() : class가 지정된 tag나 tag 이름으로 선택할 때 = 결과 배열
        document.querySelectorAll("tag이름")
        document.querySelectorAll(".class값")
     */
    document.querySelector("#btn-save").addEventListener("click", function () {
        let todo_input=document.querySelector("input");

        todo_input=document.querySelector("section.todo_main form input[name='todo']")

        let todo_value=todo_input.value;
        if(todo_value==="") {
            alert("하고 싶은 일은 반드시 입력하세요");
            document.querySelectorAll("input")[0].focus();
            return false;
        }
        if(comfirm("저장하시겠습니까?")) {
            document.querySelector("form").submit();
        }
    });
    
    /*
    document.getElementById("btn-save").addEventListener("click", function() {
        // alert(todo.value);
        let todo_value=todo.value;
        if(todo_value=="") {
            alert("하고 싶은 일은 반드시 입력해주세요");
            todo.focus();
            return false;
        }
        if(confirm("저장하시겠습니까?")) {
            // 서버로 데이터를 전송하라
            document.getElementsByTagName("form")[0].submit();
        }
    });
    */

    // id가 지정되지 않았을 때 tag 이름으로 찾을 경우 같은 이름의 tag가 여러개 존재할 수 있기 때문에 무조건 배열로 값이 추출된다.
    // tag 이름으로 getElements를 수행한 다음에는 배열 요소를 지정하여 사용할 tag를 지정해주어야 한다.
    /*
    let btn_save=document.getElementsByTagName("button")[0];
    btn_save.addEventListener("click", function() {
        let inputs=document.getElementsByName("input");
        let todo_input=inputs[0];
        let todo_value=todo.value;

        if(todo_value=="") {
            alert("하고 싶은 일은 반드시 입력하세요");
            document.getElementsByName("todo")[0].focus();
            return false;
        }
        if(confirm("저장하시겠습니까?")) {
            document.getElementsByName("form")[0].submit();
        }

        alert(todo_value);
    });
    */
});