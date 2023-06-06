let OutputScreen = document.getElementById("output-screen")
let btn = document.querySelectorAll(".btn-btn")


for (let i = 0; i < btn.length; i++){
    // console.log(display[i])
    display = function (num) {
        OutputScreen.value += num
        console.log(btn[i])
    };
 }



function Calculate() {
    try {
        OutputScreen.value = eval(OutputScreen.value)
    }
    catch(err) {
        alert("invalid")
    }
};

Clear = function () {
    OutputScreen.value = ''
};

Del = function () {
    OutputScreen.value = OutputScreen.value.slice(0, -1)
};
