const scene = document.getElementById("scene");
let allCases = [];
const inputColor = document.querySelector(".color input");
const inputLignes = document.querySelector(".lignes input");
const inputColonnes = document.querySelector(".colonnes input");
const deleteBtn = document.querySelector("#deleteBtn");
let mainRows = 10;
let mainColumns = 10;
let deleteMode = false;

function gridCreator(rows, cols){
    
    let counterRow = 0;
    let counterCol = 0;
    
    scene.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";
    scene.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
    
    for(let nbrCase = 0; nbrCase < parseInt(rows)*parseInt(cols); nbrCase++){
        let cases = document.createElement("div");
        scene.style.height = "86vh";
        scene.appendChild(cases);
        cases.style.border = "dotted 1px";
        counterCol++;
        if(nbrCase % parseInt(cols) === 0){
            counterRow++;
            counterCol = 1;
        }
        cases.style.gridRowStart = "" + counterRow;
        cases.classList.add("box-" + counterRow + "-" + counterCol);
        allCases.push(cases);
    }
}

let colorSelected = "#000";

function setColorCases(){

    addEventListener("click", function(e){
        if(e.target.classList[0].slice(0, 3) === "box"){
            if(deleteMode){
                e.target.style.border = "dotted 1px";
                e.target.style.backgroundColor = "#fff";
            }else{
                e.target.style.border = "solid 1px";
                e.target.style.backgroundColor = colorSelected;
            }
        }
    })

}

function selectColor(){
    inputColor.addEventListener("change", function(e){
        colorSelected = e.target.value;
    })
}


function gridSizing(){
    inputLignes.addEventListener("change", function(e){
        if(e.target.value > 100 || isNaN(e.target.value)){
            alert("Vous devez entrer un nombre inférieur à 100");
        }else{
            mainRows = e.target.value;
            allCases = [];
            scene.innerHTML = "";
            gridCreator(mainRows, mainColumns);
        }
        
    })
    
    inputColonnes.addEventListener("change", function(e){
        if(e.target.value > 100 || isNaN(e.target.value)){
            alert("Vous devez entrer un nombre inférieur à 100");
        }else{
            mainColumns = e.target.value;
            allCases = [];
            scene.innerHTML = "";
            gridCreator(mainRows, mainColumns);
        }
    })
}

function deleteBoxColor(){
    deleteBtn.addEventListener("click", function(){
        if(deleteMode){
            deleteMode = false;
        }else{
            deleteMode = true;
        }
        
    })
}


window.addEventListener("DOMContentLoaded", function(){
    gridCreator(mainRows, mainColumns);
    gridSizing();
    selectColor();
    setColorCases();
    deleteBoxColor();
});