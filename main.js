
let strikers = ["Pierre-Emerick Auybameyang", "Alexandre Lacazette", "Eddie Nketiah", "Folarin Balogun"];
let offensiveMidfielders = ["Gabriel Martinelli", "Bukayo Saka", "Nicolas Pepe", "Martin Odegaard", "Emile Smith-Rowe"];
let centralMidfielders = ["Granit Xhaka", "Thomas Partey", "Mohamed Elneny", "Albert Sambi Lokonga"];
let rightBacks = ["Takehiro Tomiyasu", "Cedric Soares", "Calum Chambers"];
let leftBacks = ["Kieran Tierney", "Nuno Tavares", "Sead Kolasinac"];
let centreBacks = ["Gabriel Magalhaes", "Ben White", "Rob Holding", "Pablo Mari"];
let goalKeepers = ["Aaron Ramsdale", "Berndt Leno"];

let strikerPosition;
let offensiveMidPosition;
let centralMidPosition;
let rightBackPosition;
let leftBackPosition;
let centreBackPosition;
let goalKeeperPosition;

const startScreen = document.querySelector(".start-screen");
const generateButton = document.querySelector(".generate-btn");
const refreshLineupButton = document.querySelector(".refresh-lineup-btn");

const lineups = document.querySelector(".lineups");
const fourFourTwo = document.querySelector(".four-four-two");
const fourTwoThreeOne = document.querySelector(".four-two-three-one");
const threeFourThree = document.querySelector(".three-four-three");

let radioButtons = document.querySelectorAll(".radio-btn");

function fillPositions(){
    strikerPosition.forEach((pos)=>{
        pos.innerText = strikers[Math.floor(Math.random()*strikers.length)];
    })
    offensiveMidPosition.forEach((pos)=>{
        pos.innerText = offensiveMidfielders[Math.floor(Math.random()*offensiveMidfielders.length)];
    })
    centralMidPosition.forEach((pos)=>{
        pos.innerText = centralMidfielders[Math.floor(Math.random()*centralMidfielders.length)];
    })
    rightBackPosition.forEach((pos)=>{
        pos.innerText = rightBacks[Math.floor(Math.random()*rightBacks.length)];
    })
    leftBackPosition.forEach((pos)=>{
        pos.innerText = leftBacks[Math.floor(Math.random()*leftBacks.length)];
    })
    centreBackPosition.forEach((pos)=>{
        pos.innerText = centreBacks[Math.floor(Math.random()*centreBacks.length)];
    })
    goalKeeperPosition.forEach((pos)=>{
        pos.innerText = goalKeepers[Math.floor(Math.random()*goalKeepers.length)];
    })
}

refreshLineupButton.addEventListener("click", ()=>{
    fillPositions();
})

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
            strikerPosition = document.querySelectorAll(".four-four-two .st");
            offensiveMidPosition = document.querySelectorAll(".four-four-two .om");
            centralMidPosition = document.querySelectorAll(".four-four-two .cm");
            rightBackPosition = document.querySelectorAll(".four-four-two .rb");
            leftBackPosition = document.querySelectorAll(".four-four-two .lb");
            centreBackPosition = document.querySelectorAll(".four-four-two .cb");
            goalKeeperPosition = document.querySelectorAll(".four-four-two .gk");
        } else if (checkedButton.value == "four-two-three-one") {
            fourTwoThreeOne.classList.remove("hide");
            strikerPosition = document.querySelectorAll(".four-two-three-one .st");
            offensiveMidPosition = document.querySelectorAll(".four-two-three-one .om");
            centralMidPosition = document.querySelectorAll(".four-two-three-one .cm");
            rightBackPosition = document.querySelectorAll(".four-two-three-one .rb");
            leftBackPosition = document.querySelectorAll(".four-two-three-one .lb");
            centreBackPosition = document.querySelectorAll(".four-two-three-one .cb");
            goalKeeperPosition = document.querySelectorAll(".four-two-three-one .gk");
        } else if (checkedButton.value == "three-four-three"){
            threeFourThree.classList.remove("hide");
            strikerPosition = document.querySelectorAll(".three-four-three .st");
            offensiveMidPosition = document.querySelectorAll(".three-four-three .om");
            centralMidPosition = document.querySelectorAll(".three-four-three .cm");
            rightBackPosition = document.querySelectorAll(".three-four-three .rb");
            leftBackPosition = document.querySelectorAll(".three-four-three .lb");
            centreBackPosition = document.querySelectorAll(".three-four-three .cb");
            goalKeeperPosition = document.querySelectorAll(".three-four-three .gk");
        }
        
        fillPositions()
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

