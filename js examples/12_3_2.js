let button = document.querySelector("input")
button.addEventListener("input",
    function(e){
        console.log(e.target.value)
    }
)

// <p>태그에서 인라인 이벤트 모델로 호출할 함수를 정의.
// 함수의 이름은 hi.
function hi(){
    //alert()를 띄워 "hi"라는 글자를 출력.
    alert("hi")
}