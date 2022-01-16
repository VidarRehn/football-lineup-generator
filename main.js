
const startScreen = document.querySelector(".start-screen");
const generateButton = document.querySelector(".generate-btn");

const lineups = document.querySelector(".lineups");
const fourFourTwo = document.querySelector(".four-four-two");
const fourTwoThreeOne = document.querySelector(".four-two-three-one");
const threeFourThree = document.querySelector(".three-four-three");

let radioButtons = document.querySelectorAll(".radio-btn");

generateButton.addEventListener("click", ()=>{
    let checkedButton;
    if (radioButtons[0].checked == true || radioButtons[1].checked == true || radioButtons[2].checked == true){
        radioButtons.forEach((btn)=>{
            if (btn.checked == true){
                checkedButton = btn;
            }
        }) 
        startScreen.classList.add("hide");
        lineups.classList.remove("hide");
        if (checkedButton.value == "four-four-two"){
            fourFourTwo.classList.remove("hide");
        } else if (checkedButton.value = "four-two-three-one") {
            fourTwoThreeOne.classList.remove("hide");
        } else if (checkedButton.value == "three-four-three"){
            threeFourThree.classList.remove("hide");
        }
    } else {
        alert("please choose a formation before continuing");
    }
})

const returnToStartButton = document.querySelector(".return-to-start-btn");

returnToStartButton.addEventListener("click", ()=>{
    [fourFourTwo, fourTwoThreeOne, threeFourThree].forEach((formation)=>{
        if (formation.classList.contains("hide")){
        } else {
            formation.classList.add("hide");
        }
    })
    lineups.classList.add("hide");
    startScreen.classList.remove("hide");
    radioButtons.forEach((btn)=>{
        if (btn.checked == true){
            btn.checked = false;
        }
    })
})