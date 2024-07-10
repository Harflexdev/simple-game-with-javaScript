const item = document.querySelector(".item");
const startBtn =  document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const item2 = document.querySelector(".item2")

startBtn.addEventListener("click", function(){
    item.classList.add("animate")
    body.style.backgroundColor = "red"
});
stopBtn.addEventListener("click", function(){
    item.classList.remove("animate")
});
startBtn.addEventListener("click", function(){
    item2.classList.add("animatee")
});
stopBtn.addEventListener("click", function(){
    item2.classList.remove("animatee")
});
