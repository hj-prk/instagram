document.addEventListener("DOMContentLoaded",
    function(e) {
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e) {
                /*
                keydown에 q 입력시 경고창 띄우기
                console.log(e.key)
                if(e.key === "q") {
                    alert("this is Q!")
                }
                */
               console.log(e.target.value)
            }
        )

        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e) {
                console.log(e.target.value)
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e) {
                console.log(e.target.value)
            }
        )
    }
)