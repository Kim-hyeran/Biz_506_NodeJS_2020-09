$(function() {
    // class가 view-btn인 버튼이 클릭되면
    $("button.view-btn").click(function() {
        // 클릭된 버튼의 text(문자열) 추출
        let text=$(this).text();

        let id=$(this).data("id");
        // jquery 버전이 낮은 경우 data() 함수가 작동되지 않는 경우 아래 코드로 id 추출
        // let it=$(this).attr("data-id");

        // text에 따라 각각의 버튼이 역할을 수행
        if(text=="수정") {
            document.location.href="/bbs/update/"+id;
        } else if(text=="삭제") {
            if(confirm("삭제하시겠습니까?")) {
                // 삭제가 완료된 후 브라우저의 뒤로가기 버튼을 클릭했을 때, 이미 삭제된 데이터가 다시 보이는 것을 방지
                document.location.replace("/bbs/delete/"+id);
            }
        } else if(text=="목록") {
            document.location.href="/bbs/list";
        }
    })
});