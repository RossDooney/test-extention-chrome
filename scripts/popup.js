let countBtn = document.querySelector("#addBtn");
let countElement = document.querySelector("#countElement")
renderCount()

countBtn.addEventListener("click", ()=>{
    count++;
    countElement.textContent = count;
    localStorage.setItem("count", count);

});

function renderCount(){
    if(localStorage.getItem("count")){
        count = localStorage.getItem("count");
    }
    else{
        count = 0;
    }
}