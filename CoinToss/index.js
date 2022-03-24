let coin = document.getElementById("coin");
let result = document.getElementById("result");

coin.addEventListener("click", fClick);


function fClick(){

    var num = Math.random();

    if(num < 0.5){
        coin.className = "flipHead";
        setTimeout(() => { result.innerHTML = "You got Head"; }, 2000);
    } else {
        coin.className = "flipTail";
        setTimeout(() => { result.innerHTML = "You got Tail"; }, 2000);
    }
}