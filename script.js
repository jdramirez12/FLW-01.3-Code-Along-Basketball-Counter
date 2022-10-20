//HTML element variables - DO NOT TOUCH LINES 1-10
let team1TwoPoints = document.querySelector(".team1TwoPoints");
let team2TwoPoints = document.querySelector(".team2TwoPoints");
let team1ThreePoints = document.querySelector(".team1ThreePoints");
let team2ThreePoints = document.querySelector(".team2ThreePoints");
let team1FreeThrow = document.querySelector(".team1FreeThrow");
let team2FreeThrow = document.querySelector(".team2FreeThrow");
let team1ScoreHTML = document.querySelector(".team1Score");
let team2ScoreHTML = document.querySelector(".team2Score");
let reset = document.querySelector(".reset");



//Code Along, Part 1
// task 1 & 2: Declare HTML element variables for Team 1 and Team 2 names using querySelector. Check out the code in the HTML to find the class names.
let teamOne = document.querySelector (".team1Name")
let teamTwo = document.querySelector (".team2Name")




// task 3: Update the variables with the correct amounts. team1Score and team2Score are the starting points - what should these values be?
let team1Score = 0;
let team2Score = 0;
let twoPoints = 2;
let threePoints = 3;
let freeThrow = 1;


// task 4: Test out the buttons. Be sure to press Run first!



//Code Along, Part 2
// task 5: Update Team 1 and Team 2 names using .innerHTML. Remember: You do not write let again!
teamOne.innerHTML ="Stripe";
teamTwo.innerHTML ="Stars";




















//DO NOT TOUCH CODE BELOW
//These functions add points to Team 1
function addTwoPointsTeam1() {
    team1Score = team1Score + twoPoints;
    team1ScoreHTML.innerHTML = team1Score;
    team1ScoreHTML.style.color = "#00ff85";
}

function addThreePointsTeam1() {
    team1Score = team1Score + threePoints;
    team1ScoreHTML.innerHTML = team1Score;
    team1ScoreHTML.style.color = "#00ff85";
}

function addFreeThrowTeam1() {
    team1Score = team1Score + freeThrow;
    team1ScoreHTML.innerHTML = team1Score;
    team1ScoreHTML.style.color = "#00ff85";
}

//These functions add points to Team 2
function addTwoPointsTeam2() {
    team2Score = team2Score + twoPoints;
    team2ScoreHTML.innerHTML = team2Score;
    team2ScoreHTML.style.color = "#00ff85";
}

function addThreePointsTeam2() {
    team2Score = team2Score + threePoints;
    team2ScoreHTML.innerHTML = team2Score;
    team2ScoreHTML.style.color = "#00ff85";
}

function addFreeThrowTeam2() {
    team2Score = team2Score + freeThrow;
    team2ScoreHTML.innerHTML = team2Score;
    team2ScoreHTML.style.color = "#00ff85";
}

//This function resets the score for both teams
function resetScore() {
    team1Score = 0;
    team2Score = 0;
    team1ScoreHTML.innerHTML = team1Score;
    team2ScoreHTML.innerHTML = team2Score;
    team1ScoreHTML.style.color = "black";
    team2ScoreHTML.style.color = "black";
}


//These click events run the functions 
team1TwoPoints.addEventListener("click", addTwoPointsTeam1);
team2TwoPoints.addEventListener("click", addTwoPointsTeam2);
team1ThreePoints.addEventListener("click", addThreePointsTeam1);
team2ThreePoints.addEventListener("click", addThreePointsTeam2);
team1FreeThrow.addEventListener("click", addFreeThrowTeam1);
team2FreeThrow.addEventListener("click", addFreeThrowTeam2);
reset.addEventListener("click", resetScore);
