// const nameP1 = document.getElementById("player-1-name"); 
// const nameP2 = document.getElementById("player-2-name"); 
// const nameP1Game = document.getElementById("P1-name");
// const nameP2Game = document.getElementById("P2-name");  

// const promptP1Name = prompt("What is the name of PLAYER 1?"); 
// const promptP2Name = prompt("What is the name of PLAYER 2?"); 

// function nameSetter(name1, name2) {
//     if (name1.length > 0) {
//         nameP1.textContent = name1;
//         nameP1Game.textContent = name1;
//     } else {
//         nameP1.textContent = "PLAYER 1";
//         nameP1Game.textContent = "PLAYER 1";
//     }

//     if (name2.length > 0) {
//         nameP2.textContent = name2;
//         nameP2Game.textContent = name2;
//     } else {
//         nameP2.textContent = "PLAYER 2";
//         nameP2Game.textContent = "PLAYER 2";
//     }
//          nameP1.textContent = name1; 
//          nameP2.textContent = name2;
//          nameP1Game.textContent = name1; 
//          nameP2Game.textContent = name2; 
// }

// nameSetter(promptP1Name, promptP2Name); 

let  p1GamePoints = document.getElementById("P1-points"); 
let  p2GamePoints = document.getElementById("P2-points"); 
let  p1MatchScore = document.getElementById("P1-match-score"); 
let  p2MatchScore = document.getElementById("P2-match-score"); 

let gamesP1 = 0; 
let gamesP2 = 0; 

let tiebreakP1 = 0; 
let tiebreakP2 = 0; 

p1MatchScore.textContent = "6"; 
p2MatchScore.textContent = "6"; 


function gameCounterP1() {
    if (p1GamePoints.textContent === "0" && p1MatchScore.textContent != "6") {
        p1GamePoints.textContent = "15"; 
    } else if (p1GamePoints.textContent === "15") {
        p1GamePoints.textContent = "30"; 
    } else if (p1GamePoints.textContent === "30") {
        p1GamePoints.textContent = "40";
    } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent < "40" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        gamesP1 += 1; 
        p1MatchScore.textContent = gamesP1;  
        p1GamePoints.textContent = "0"; 
        p2GamePoints.textContent = "0"; 
        // put break here?
    } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent === "40" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        p1GamePoints.textContent = "AD";
        p2GamePoints.textContent = ""; 
        // put break here?
    } else if (p1GamePoints.textContent === "AD" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        gamesP1 += 1;
        p1MatchScore.textContent = gamesP1;  
        p1GamePoints.textContent = "0"; 
        p2GamePoints.textContent = "0";
        // put break here?
    } else if (p2GamePoints.textContent === "AD" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {  
        p1GamePoints.textContent = "40"; 
        p2GamePoints.textContent = "40";
        // put break here?
    } else if (p1MatchScore.textContent === "5" && p2MatchScore.textContent === "6") {
        gamesP1 += 1;
        p1MatchScore.textContent = gamesP1;  
        p1GamePoints.textContent = "0"; 
        p2GamePoints.textContent = "0";
        // put break here?
    } else if ((p1MatchScore.textContent === "6" && p2MatchScore.textContent === "6") && p1GamePoints.textContent <= "6") {
        tiebreakP1 += 1; 
        p1GamePoints.textContent = tiebreakP1.toString(); 
        // put break here ?
        if (p1GamePoints.textContent === "7") {
            p1MatchScore.textContent = "7";  
        }
    } 
}
 

function gameCounterP2() {
    if (p2GamePoints.textContent === "0"  && p2MatchScore.textContent != "6") {
        p2GamePoints.textContent = "15"; 
    } else if (p2GamePoints.textContent === "15") {
        p2GamePoints.textContent = "30"; 
    } else if (p2GamePoints.textContent === "30") {
         p2GamePoints.textContent = "40"; 
    } else if (p2GamePoints.textContent === "40" && p1GamePoints.textContent < "40" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        gamesP2 += 1; 
        p2MatchScore.textContent = gamesP2;  
        p2GamePoints.textContent = "0"; 
        p1GamePoints.textContent = "0"; 
        // put break here?
    } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent === "40" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        p2GamePoints.textContent = "AD";
        p1GamePoints.textContent = ""; 
        // put break here?
    }else if (p2GamePoints.textContent === "AD" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {
        gamesP2 += 1;
        p2MatchScore.textContent = gamesP2;  
        p2GamePoints.textContent = "0"; 
        p1GamePoints.textContent = "0";
        // put break here?
    }else if (p1GamePoints.textContent === "AD" && p1MatchScore.textContent <= "5" && p2MatchScore.textContent <= "5") {  
        p2GamePoints.textContent = "40"; 
        p1GamePoints.textContent = "40";
        // put break here?
    } else if (p2MatchScore.textContent === "5" &&  p1MatchScore.textContent === "6") {
        gamesP2 += 1;
        p2MatchScore.textContent = gamesP2;  
        p2GamePoints.textContent = "0"; 
        p1GamePoints.textContent = "0";
        // put break here?
    } else if ((p2MatchScore.textContent === "6" && p1MatchScore.textContent === "6") && p2GamePoints.textContent <= "6") {
        tiebreakP2 += 1; 
        p2GamePoints.textContent = tiebreakP2.toString(); 
        // put break here ?
    }
}



