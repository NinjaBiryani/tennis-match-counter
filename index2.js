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
let pointBtnP1 = document.getElementById("pointBtnP1"); 
let pointBtnP2 = document.getElementById("pointBtnP2"); 

let gamesP1 = 0; 
let gamesP2 = 0; 

let setCounterP1 = 0; 
let setCounterP2 = 0; 

let tiebreakCounterP1 = 0; 
let tiebreakCounterP2 = 0; 

p1GamePoints.textContent = "0"; 
p2GamePoints.textContent = "0"; 

p1MatchScore.textContent = "0"; 
p2MatchScore.textContent = "0"; 

pointBtnP1.addEventListener("click", set1CounterP1); 
pointBtnP2.addEventListener("click", set1CounterP2); 

function gameCounterP1() {
// GAME-CODE

    // GAME-PROCESS (WITHOUT DEUCE)
    if (p1GamePoints.textContent === "0") {
        p1GamePoints.textContent = "15"; 
    } else if (p1GamePoints.textContent === "15") {
        p1GamePoints.textContent = "30"; 
    } else if (p1GamePoints.textContent === "30") {
        p1GamePoints.textContent = "40";
    
    // FINISH GAME (WITHOUT DEUCE)
    } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent < "40") {
        gamesP1 += 1; 
        p1MatchScore.textContent = gamesP1;  
        p1GamePoints.textContent = "0"; 
        p2GamePoints.textContent = "0"; 
        // put break here?
    
    // GAME-PROCESS: GOING TO AD STAGE
    } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent === "40") {
        p1GamePoints.textContent = "AD";
        p2GamePoints.textContent = ""; 
        // put break here?
    
    // GAME-PROCESS: GOING BACK TO 40-40
    } else if (p2GamePoints.textContent === "AD") {  
        p1GamePoints.textContent = "40"; 
        p2GamePoints.textContent = "40";
        // put break here?
    
    // FINISH GAME (WITH DEUCE)
    } else if (p1GamePoints.textContent === "AD") {
        gamesP1 += 1;
        p1MatchScore.textContent = gamesP1;  
        p1GamePoints.textContent = "0"; 
        p2GamePoints.textContent = "0";
        // put break here?
    }
}

// SET 1 CODE
function set1CounterP1() {

    // SET "4/less-5/less" STATE
    if (p1MatchScore.textContent <= "4" && p2MatchScore.textContent <= "5" && (setCounterP1 === 0)) {

        // game-code 
        gameCounterP1()

    // SET "5-4/less" STATE
    } else if (p1MatchScore.textContent === "5" && p2MatchScore.textContent <= "4" && (setCounterP1 === 0) ) {

        // SET "GOING TO 6-4/less" STATE
        // game-code
        gameCounterP1()

        // SET "6-4/less" FINISH
        // nextSet-code 
        if (p1MatchScore.textContent === "6") {
            p1MatchScore.textContent += " 0"; 
            p2MatchScore.textContent += " 0"; 
            setCounterP1 += 1; 
        }

    // SET 5-5/6 STATE
    } else if (p1MatchScore.textContent === "5" && (p2MatchScore.textContent === "5" || p2MatchScore.textContent === "6") && (setCounterP1 === 0)) {

        // SET "GOING TO 6-5/6" STATE
        // game-code
        gameCounterP1()

    } else if (p1MatchScore.textContent === "6" && p2MatchScore.textContent === "5" && (setCounterP1 === 0) ) {

        // SET "GOING TO 7-5" STATE
        // game-code 
        gameCounterP1()

        // SET "7/5" FINISH
        // nextSet-code 
        if (p1MatchScore.textContent === "7") {
            setCounterP1 += 1;
            p1MatchScore.textContent += " 0"; 
            p2MatchScore.textContent += " 0"; 

        }

    // SET 6-6 STATE
    } else if (p1MatchScore.textContent === "6" && p2MatchScore.textContent === "6" && (setCounterP1 === 0)) {

        // TIEBREAK "5/less-6/less" STATE
        if (Number(p1GamePoints.textContent) <= 5 && Number(p2GamePoints.textContent) <= 6 && (setCounterP1 === 0)) {
            
            // TIEBREAK GOING TO "6-5/less" STATE OR GOING TO "6/6" STATE
            // tiebreak-code
            tiebreakCounterP1 += 1; 
            p1GamePoints.textContent = tiebreakCounterP1; 

        // TIEBREAK "6-5/less" STATE
        } else if (p1GamePoints.textContent === "6" && p2GamePoints.textContent <= "5" && (setCounterP1 === 0)) {

            // TIEBREAK "7-5/less" FINISH
            // nextSet-code (tiebreak)
            gamesP1 += 1; 
            p1MatchScore.textContent = gamesP1;  
            setCounterP1 += 1; 
            p1GamePoints.textContent = 0; 
            p2GamePoints.textContent = 0; 
            
            p1MatchScore.textContent += " 0"; 
            p2MatchScore.textContent += " 0"; 
        
        // TIEBREAK "6-6" STATE => or better said: X(+ 1)-X(+ 1) STATE (with X(minimum) = 6)
        } else if ((Number(p1GamePoints.textContent) >= 6 && Number(p2GamePoints.textContent) >= 6) && (((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == 0) || ((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == -1) || ((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == 1)) && (setCounterP1 == 0)) { 

            // TIEBREAK EQUAL/DISAD STATE
            if ((((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == 0) || ((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == -1)) && (setCounterP1 == 0)) {
                // (((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) === 0) || ((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) === -1))
                // TIEBREAK GOING TO AD/EQUAL STATE
                // tiebreak-code
                tiebreakCounterP1 += 1; 
                p1GamePoints.textContent = tiebreakCounterP1;  

            
            // TIEBREAK AD STATE
            } else if (((Number(p1GamePoints.textContent) - Number(p2GamePoints.textContent)) == 1) && (setCounterP1 == 0)) {
                
                // TIEBREAK "X+2/X" FINISH
                // nextSet-code (tiebreak)
                gamesP1 += 1; 
                p1MatchScore.textContent = gamesP1;  
                setCounterP1 += 1; 
                p1GamePoints.textContent = 0; 
                p2GamePoints.textContent = 0; 
            
                p1MatchScore.textContent += " 0"; 
                p2MatchScore.textContent += " 0"; 
            }
        }
    }
}

// GAME COUNTER FOR SET 2 

// function gameCounterP1Set2() {
// // GAME-CODE

//     // GAME-PROCESS (WITHOUT DEUCE)
//     if (p1GamePoints.textContent === "0") {
//         p1GamePoints.textContent = "15"; 
//     } else if (p1GamePoints.textContent === "15") {
//         p1GamePoints.textContent = "30"; 
//     } else if (p1GamePoints.textContent === "30") {
//         p1GamePoints.textContent = "40";
    
//     // FINISH GAME (WITHOUT DEUCE)
//     } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent < "40") {

//         gameSet2 = p1MatchScore.textContent.substring(2,3); 
//         gameSet2 = (parseInt(gameSet2) + 1).toString(); 
//         gameSet1andGap = p1MatchScore.textContent.substring(0,2); 
//         p1MatchScore.textContent = gameSet1andGap + gameSet2; 
        
//         // // gamesP1 += 1; 
//         // // p1MatchScore.textContent = gamesP1;  
//         // // p1GamePoints.textContent = "0"; 
//         // // p2GamePoints.textContent = "0"; 

//         // put break here?
    
//     // GAME-PROCESS: GOING TO AD STAGE
//     } else if (p1GamePoints.textContent === "40" && p2GamePoints.textContent === "40") {
//         p1GamePoints.textContent = "AD";
//         p2GamePoints.textContent = ""; 
//         // put break here?
    
//     // GAME-PROCESS: GOING BACK TO 40-40
//     } else if (p2GamePoints.textContent === "AD") {  
//         p1GamePoints.textContent = "40"; 
//         p2GamePoints.textContent = "40";
//         // put break here?
    
//     // FINISH GAME (WITH DEUCE)
//     } else if (p1GamePoints.textContent === "AD") {

//         gameSet2 = p1MatchScore.textContent.substring(2,3); 
//         gameSet2 = (parseInt(gameSet2) + 1).toString(); 
//         gameSet1andGap = p1MatchScore.textContent.substring(0,2); 
//         p1MatchScore.textContent = gameSet1andGap + gameSet2; 

//         // // gamesP1 += 1;
//         // // p1MatchScore.textContent = gamesP1;  
//         // // p1GamePoints.textContent = "0"; 
//         // // p2GamePoints.textContent = "0";

//         // put break here?
//     }
// }

// TIEBREAK-CODE SET 2 & SET 3
// => more similiar to SET 1 I think, bcs it doesn't involve the MatchScores

//TIEBREAK-CODE
// tiebreakP1 += 1; // + code above

//NEWSET-CODE

// => so something like: if(p1MatchScore.textContent.length = 3) FOR SET 2 
//                       if(p1MatchScore.textContent.length = 5) FOR SET 3

// CHANGING GAME IN SET 2 
// p1MatchScore.textContent += " 0";
// // "6 0"
// gameSet2 = p1MatchScore.textContent.substring(2,3); 
// // "0"
// gameSet2 = (parseInt(gameSet2) + 1).toString(); 
// // "1"
// gameSet1andGap = p1MatchScore.textContent.substring(0,2); 
// // "6 "
// p1MatchScore.textContent = gameSet1andGap + gameSet2; 
// // "6 1"

// => also change all conditions to: i.e. p1MatchScore.textContent.charAt(3) == "4" / "5" / "6" etc.

// CHANGING GAME IN SET 3 
// p1MatchScore.textContent += " 0";
// // "6 6 0"
// gameSet3 = p1MatchScore.textContent.substring(4,5); 
// // "0"
// gameSet3 = (parseInt(gameSet2) + 1).toString(); 
// // "1"
// gameSet2andGap = p1MatchScore.textContent.substring(0,4); 
// // "6 6 "
// p1MatchScore.textContent = gameSet2andGap + gameSet3; 
// // "6 6 1"

// => also change all conditions to: i.e. p1MatchScore.textContent.charAt(5) == "4" / "5" / "6" etc.

//WIN-CODE

// make a set count like: setCounterP1 = 0; 
// when p1 wins a set: setCounterP1 = 1; 
// and then: if(setCounterP1 = 2); => P1 wins

function gameCounterP2() {
// GAME-CODE

    // GAME-PROCESS (WITHOUT DEUCE)
    if (p2GamePoints.textContent === "0") {
        p2GamePoints.textContent = "15"; 
    } else if (p2GamePoints.textContent === "15") {
        p2GamePoints.textContent = "30"; 
    } else if (p2GamePoints.textContent === "30") {
        p2GamePoints.textContent = "40";
    
    // FINISH GAME (WITHOUT DEUCE)
    } else if (p2GamePoints.textContent === "40" && p1GamePoints.textContent < "40") {
        gamesP2 += 1; 
        p2MatchScore.textContent = gamesP2;  
        p2GamePoints.textContent = "0"; 
        p1GamePoints.textContent = "0"; 
        // put break here?
    
    // GAME-PROCESS: GOING TO AD STAGE
    } else if (p2GamePoints.textContent === "40" && p1GamePoints.textContent === "40") {
        p2GamePoints.textContent = "AD";
        p1GamePoints.textContent = ""; 
        // put break here?
    
    // GAME-PROCESS: GOING BACK TO 40-40
    } else if (p1GamePoints.textContent === "AD") {  
        p2GamePoints.textContent = "40"; 
        p1GamePoints.textContent = "40";
        // put break here?
    
    // FINISH GAME (WITH DEUCE)
    } else if (p2GamePoints.textContent === "AD") {
        gamesP2 += 1;
        p2MatchScore.textContent = gamesP2;  
        p2GamePoints.textContent = "0"; 
        p1GamePoints.textContent = "0";
        // put break here?
    }
}

function set1CounterP2() {

    // SET "4/less-4/less" STATE
    if (p2MatchScore.textContent <= "4" && p1MatchScore.textContent<= "5" && (setCounterP2 === 0)) {

        // game-code 
        gameCounterP2()

    // SET "5-4/less" STATE
    } else if (p2MatchScore.textContent === "5" && p1MatchScore.textContent <="4" && (setCounterP2 === 0) ) {

        // SET "GOING TO 6-4/less" STATE
        // game-code
        gameCounterP2()

        // SET "6-4/less" FINISH
        // nextSet-code 
        if (p2MatchScore.textContent === "6") {
            p2MatchScore.textContent += " 0"; 
            p1MatchScore.textContent += " 0"; 
            setCounterP2 += 1; 
        }

    // SET 5-5/6 STATE
    } else if (p2MatchScore.textContent === "5" && (p1MatchScore.textContent === "5" || p1MatchScore.textContent === "6") && (setCounterP2 === 0)) {

        // SET "GOING TO 6-5/6" STATE
        // game-code
        gameCounterP2()

    } else if (p2MatchScore.textContent === "6" && p1MatchScore.textContent === "5" && (setCounterP2 === 0) ) {

        // SET "GOING TO 7-5" STATE
        // game-code 
        gameCounterP2()

        // SET "7/5" FINISH
        // nextSet-code 
        if (p2MatchScore.textContent === "7") {
            setCounterP2 += 1;
            p2MatchScore.textContent += " 0"; 
            p1MatchScore.textContent += " 0"; 

        }

    // SET 6-6 STATE
    } else if (p2MatchScore.textContent === "6" && p1MatchScore.textContent === "6" && (setCounterP2 === 0)) {

        // TIEBREAK "5/less-6/less" STATE
        if (Number(p2GamePoints.textContent) <= 5 && Number(p1GamePoints.textContent) <= 6 && (setCounterP2 === 0)) {
            
            // TIEBREAK GOING TO "6-5/less" STATE OR GOING TO "6/6" STATE
            // tiebreak-code
            tiebreakCounterP2 += 1; 
            p2GamePoints.textContent = tiebreakCounterP2; 

        // TIEBREAK "6-5/less" STATE
        } else if (p2GamePoints.textContent === "6" && p1GamePoints.textContent <= "5" && (setCounterP2 === 0)) {

            // TIEBREAK "7-5/less" FINISH
            // nextSet-code (tiebreak)
            gamesP2 += 1; 
            p2MatchScore.textContent = gamesP2;  
            setCounterP2 += 1; 
            p2GamePoints.textContent = 0; 
            p1GamePoints.textContent = 0; 
            
            p2MatchScore.textContent += " 0"; 
            p1MatchScore.textContent += " 0"; 
        
        // TIEBREAK "6-6" STATE 
        } else if ((Number(p2GamePoints.textContent) >= 6 && Number(p1GamePoints.textContent) >= 6) && (((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == 0) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == -1) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == 1)) && (setCounterP2 == 0)) { 
            // (((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) === 0) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) === -1) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) === 1))
            // (-1 <= (Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) <= 1)

            // TIEBREAK EQUAL/DISAD STATE
            if ((((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == 0) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == -1)) && (setCounterP2 == 0)) {
                // (((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) === 0) || ((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) === -1))
                // (-1 <= (Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) <= 0)

                // TIEBREAK GOING TO AD/EQUAL STATE
                // tiebreak-code
                tiebreakCounterP2 += 1; 
                p2GamePoints.textContent = tiebreakCounterP2; 

            
            // TIEBREAK AD STATE
            } else if (((Number(p2GamePoints.textContent) - Number(p1GamePoints.textContent)) == 1) && (setCounterP2 == 0)) {
                
                // TIEBREAK "X+2/X" FINISH
                // nextSet-code (tiebreak)
                gamesP2 += 1; 
                p2MatchScore.textContent = gamesP2;  
                setCounterP2 += 1; 
                p2GamePoints.textContent = 0; 
                p1GamePoints.textContent = 0; 
            
                p2MatchScore.textContent += " 0"; 
                p1MatchScore.textContent += " 0"; 
            }
        }
    }
}


