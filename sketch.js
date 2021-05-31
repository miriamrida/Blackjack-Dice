//declaring the variables outside of the functions
let total= 0;
let total2=0;
let diceTotal = 0;
let diceTotal2=0;
let player1Score = 0;
let player2Score = 0;

//This function is made to roll Player 1's pair of dice (2 dice are rolled and then the sum is stored into another variable)
function rollDice1(){
  let d1=document.getElementById("d1"); //d1 = dice 1 
  let d2=document.getElementById("d2"); //d2 = dice 2
  let v1=Math.floor(Math.random()*6)+1; //v1 = value 1 (v1 is a randomized number from 1-6)
  let v2=Math.floor(Math.random()*6)+1; //v2 = value 2 (v2 is a randomized number from 1-6)
  total= v1 + v2; //the sum of both randomized numbers = total 
  diceTotal += total; //diceTotal = total + the total of the singular dice (if the players use that option)
  d1.innerHTML=v1; //the randomized v1 digit will appear on dice 1
  d2.innerHTML=v2; //the randomized v2 digit will appear on dice 2
  alert("You rolled " + total + ". " + "Your total is " + diceTotal + "!") //alert to tell the players what they rolled
  check1(); //calling the check1() function here so that these values are connected to the automatic table
  if (diceTotal > 21){
    bust() //if player 1 rolls above 21, the bust function is called and player 2 automatically wins
  }
  if (diceTotal >= 16){ //if the total is above 16, player 1 gets the option of switching to roll one dice
    document.getElementById("oneDice1").style.visibility="visible"
  } else if (diceTotal < 16) { //this is telling the code that if the total is below 16, hide the roll one dice button
    document.getElementById("oneDice1").style.visibility="hidden"
  }
} 

//This function is made to roll Player 2's pair of dice 
function rollDice2(){ 
  let d3=document.getElementById("d3"); //d3 = dice 3
  let d4=document.getElementById("d4"); //d4 = dice 4
  let v3=Math.floor(Math.random()*6)+1; //v3 = value 3 (v3 is a randomized number from 1-6)
  let v4=Math.floor(Math.random()*6)+1; //v4 = value 4 (v4 is a randomized number from 1-6)
  total2= v3 + v4; //the sum of both randomized numbers = total2 (called total2 because it's now the total for the second player)
  diceTotal2 += total2; //diceTotal2 = total2 + the total of the singular dice (if the players use that option)
  d3.innerHTML=v3; //the randomized v3 digit will appear on dice 3
  d4.innerHTML=v4; //the randomized v4 digit will appear on dice 4
  alert("You rolled " + total2 + ". " + "Your total is " + diceTotal2 + "!") //alert to tell the players what they rolled
  check2(); //calling the check2() function so that the automatic table works
  if (diceTotal2 > 21){
    bust2() //if player 2 rolls above 21, they bust, and player 1 automatically wins 
  } if (diceTotal2 >= 16){ //if the total is above 16, player 2 gets the option of switching to roll one dice
    document.getElementById("oneDice2").style.visibility = "visible"
  } else if (diceTotal2 < 16) { //this is telling the code that if the total is below 16, hide the roll one dice button
    document.getElementById("oneDice2").style.visibility="hidden"
  }
} 

//automatic tables that store the results of the rolls (for both players)
function check1(){
  const table = document.getElementById("gridoutput").querySelector("tbody");
  table.innerHTML += "<td><td> " + total + "</td></tr>"
}
function check2(){
  const table=document.getElementById("gridoutput2").querySelector("tbody");
  table.innerHTML += "<td><td>" + total2 + "</td></tr>" 
}

//this function gives player 1 the option to roll only one dice once they hit 16. the function is called from a button.
function oneDice1(){
  d1=document.getElementById("d1");
  v1=Math.floor(Math.random()*6)+1;
  total= v1 * 1;
  diceTotal = diceTotal + total;
  d1.innerHTML=v1;
  alert ("You rolled " + total + ". " + "Your total is " + diceTotal + "!")
  check1();
  if (diceTotal > 21){
    bust()
  }
  }

//this function gives player 2 the option to roll only one dice once they hit 16. the function is called from a button
function oneDice2(){
  d3=document.getElementById("d3");
  v3=Math.floor(Math.random()*6)+1;
  total2 = v3 * 1;
  diceTotal2 = diceTotal2 + total2;
  d3.innerHTML=v3;
  alert("You rolled " + total2 + ". " + "Your total is " + diceTotal2 + "!")
  check2();
  if (dicetotal2 > 21 ){
    bust2()
  }
}

//once the players are done rolling, they click this button, and it will determine which player won (who is closer to 21), if they tied, or if any of them busted
function endRound(){
  if (diceTotal > diceTotal2){
    alert ("Player 1 has won this round!")
    player1Win() //if player 1's total is greater than player 2's total, then the player1Win() function is called where a point is added to their final score
  } 
  if (diceTotal < diceTotal2){
    alert ("Player 2 has won this round!")
    player2Win() //if player 2's total is greater than player 1's total, then the player2Win() function is called where a point is added to their final score
  } 
  else if (diceTotal = diceTotal2){
    tie() //if both players tie, the tie() function is called and no one gets the point 
  }
  if (diceTotal = 0){
    player2Win() //if player 1 scores 0, then player 2 wins and gets a point 
  }
  if (diceTotal2 = 0){
    player1Win() //if player 2 scores 0, then player 1 wins and gets a point
  } if (player1Score >= 10){ //If player1 wins 5 games then they have won the entire game. Once they win, an alert will tell them they won and then with location.reload(), the webpage will refresh. 
    alert ("Player 1 is the winner of the game! The webpage will now reload. Thanks for playing!");
    location.reload()
  } if (player2Score >= 10){ //If player2 wins 5 games then they have won the entire game. Once they win, an alert will tell them they won and then with location.reload(), the webpage will refresh. 
    alert ("Player 2 is the winner of the game! The webpage will now reload. Thanks for playing!");
    location.reload() //if the players win the same amount of games, they will have tied. An alert will show up and the webpage will reload/refresh.
  } 
  document.getElementById("oneDice2").style.visibility = "hidden"
  document.getElementById("oneDice1").style.visibility = "hidden"
}

//this function is called in the endRound() button, if the players tie, no one gets the point
function tie(){
  alert ("You have tied!")
  diceTotal = 0;
  diceTotal2 = 0;
  document.getElementById("oneDice2").style.visibility = "hidden"
  document.getElementById("oneDice1").style.visibility = "hidden"
}

//if player 1 wins the round, a point is added to the final score tally and an alert is sent
function player1Win(){
  diceTotal = 0; 
  diceTotal2 = 0;
  player1Score = player1Score + 1;
  document.getElementById("score").innerHTML = player1Score;
}

//if player 2 wins the round, a point is added to the final score tally and an alert is sent
function player2Win(){
  diceTotal = 0; 
  diceTotal2 = 0;
  player2Score = player2Score + 1;
  document.getElementById("score2").innerHTML = player2Score;
}

//tells player 1 if they have busted, the alert will tell the player and then they will click switch player so that the other player can go (even though they have automatically won the round)
function bust(){
  diceTotal = 0;
  total = 0;
  alert ("Player 1 has busted. ")
}

//tells player 2 if they have busted (rolled above 21)
function bust2(){
  diceTotal2 = 0;
  total2 = 0;
  alert ("Player 2 has busted. ")
}

//the players have freedom to decide how they want to play the game. They can take alternating turns or one player can go all at once and then the next once they're done. 
//if the players want to do their turns all at once, once player 1 is finished rolling, they press this switch player button which will call the switchPlayer() function
//then once player 2 has gone, they click the next round button and it will tell them who won or if they tied
/*function switchPlayer(){
  document.getElementById("roll1").style.visibility = "hidden"
  document.getElementById("oneDice1").style.visibility = "hidden"
}*/
//I removed this option because there was an issue where the roll one dice button wouldn't disapear until the roll dice button was clicked

function hiddenButtons(){
  document.getElementById("oneDice1").style.visibility = "hidden"
  document.getElementById("oneDice2").style.visibility = "hidden"
}