let allCases = [];

function gridCreator(){
    const scene = document.getElementById("scene");
    let counterRow = 0;
    let counterCol = 0;
    
    for(let nbrCase = 0; nbrCase < 100; nbrCase++){
        let cases = document.createElement("div");
        scene.style.height = "100vh";
        scene.appendChild(cases);
        cases.style.border = "dotted 1px";
        counterCol++;
        if(nbrCase % 10 === 0){
            counterRow++;
            counterCol = 1;
        }
        cases.style.gridRowStart = "" + counterRow;
        cases.classList.add("box-" + counterRow + "-" + counterCol);
        allCases.push(cases);
    }
}

function selectCases(){
    for(let box of allCases){
        box.addEventListener("click", function(){
            box.style.border = "solid 1px";
        })
    }
}

function selectColor(){
    const inputColor = document.
    "change"
}

window.addEventListener("DOMContentLoaded", function(){
    gridCreator();
    selectCases();
    selectColor();
});