function a() {
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}


function onIncrement() {
    var count = document.getElementsByClassName("counter-num")[0].innerHTML;
    count = Number(count) + 1;
    document.getElementsByClassName("counter-num")[0].innerHTML = count;
}
function onDecrement() {
    var count = document.getElementsByClassName("counter-num")[0].innerHTML;
    count = Number(count) - 1;
    document.getElementsByClassName("counter-num")[0].innerHTML = count;
}
function reset(){
    document.getElementsByClassName("counter-num")[0].innerHTML = '0';
}

function toggle(){
    var x = document.getElementById("answershow");
    x.classList.toggle("answershow");
}

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
event.addEventListener("click", () => {
	if (event.classList.contains("active")) {
	event.classList.remove("active");
	} else {
	event.classList.add("active");
	}
});
});



