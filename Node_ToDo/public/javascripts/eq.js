console.log("====================================");
console.log("JS에서 eq 비교연산자");
/*
 JS에서 같은 값을 비교할 때 사용하는 연산자가 2가지가 있다.
    동등연산자 : ==
    평등연산자 : ===
 */

let b = 0 == "";
console.log("0 == ''", b);
b = 0 === "";
console.log("0 === '' : ", b);

// js에서 false인 경우
// 비교연산자, 관계연산자와 연결했을 때 false 값을 갖는 것들
b = "" || null || undefined || NaN || 0 || "없음";
console.log(b);

// 어떤(변수에 저장된) 값을 비교하여 정확히 일치하는지 알고 싶을 때는 동등연산자가 아닌 평등연산자를 사용하는 것이 정확한 결과 도출
// 문자열 "1"을 숫자형으로, 혹은 숫자 1을 문자열형 "1"로 자동 형변환을 하여 비교해버린다.
// 어떤 값을 DB 등에서 읽어왔을 때 순수한 내용으로만 비교할 경우 필요하지만, 정확한 값을 비교하고자 할 때는 원하지 않는 결과가 나오기도 한다.
b = "1" == 1;
console.log(b);

// 문자열 "1"과 숫자 1은 다르다
b = "1" === 1;
console.log(b);

// true, false이냐의 여부만 판단
b = null == undefined;
console.log(b);
// 자료형까지 정확히 일치하는지까지 비교
b = null === undefined;
console.log(b);

/*
 동등연산자(==)는 값을 자동 형변환하여 내용물(값)이 같은지만 비교하는 연산자
 평등연산자(===)는 먼저 형(type)을 비교하고 다르면 false, 같으면 내용물 비교
 */
console.log(0==false);
console.log(0===false);

let num=0;

// num가 false이기 때문에 &&(AND) 이후의 조건문은 애초에 실행되지 않음
if(num && ++num) {
}
console.log("num && ++num:", num);

if(num || ++num) {
}
console.log("num || ++num:", num);