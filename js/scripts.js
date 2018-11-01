//Backend

var playerOne = "";
var playerTwo = "";

var  diceRoll = function() {
  return Math.floor((Math.random() * 6) + 1);
  }

  function Player(turn) {
    this.namePlayer;
    this.turnTotal = 0,
    this.gameTotal = 0,
    this.roll = 0,
    this.turn = turn
  }
Player.prototype.playerTurn = function() {
   if (this.roll === 1) {
     this.turnTotal = 0;
     alert("You rolled 1, End Turn!")
   } else {
     this.turnTotal += this.roll;
     }
 }


Player.prototype.playerHold = function() {
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;
  alert("Your turn is over!");
  }

Player.prototype.playerWinner = function() {
  if (this.gameTotal >= 100) {
    alert("100! You Win!!!");
  }
}


Player.prototype.newGame = function () {
  this.roll = 0,
  this.turnTotal = 0,
  this.gameTotal = 0,
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}



//UI
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    playerOne.playerName = player1Name;
    playerTwo.playerName = player2Name;

  });

  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });

  $("button#play1").click(function(event) {
    playerOne.roll = diceRoll();
    $("#die-roll-1").text(playerOne.roll);
    playerOne.playerTurn();
    $("#turn-total1").text(playerOne.turnTotal);
  });

  $("button#play2").click(function(event) {
    playerTwo.roll = diceRoll();
    $("#die-roll-2").text(playerTwo.roll);
    playerTwo.playerTurn();
    $("#turn-total2").text(playerTwo.turnTotal);
  });

  $("button#hold1").click(function(event) {
    playerOne.playerHold();
    $("#game-total1").text(playerOne.gameTotal);
    $("#turn-total1").empty();
    $("#die-roll-1").empty();
    playerOne.playerWinner();
  });

  $("button#hold2").click(function(event) {
    playerTwo.playerHold();
    $("#game-total2").text(playerTwo.gameTotal);
    $("#turn-total2").empty();
    $("#die-roll-2").empty();
    playerTwo.playerWinner();
  });
});









//
// function Player(namePlayer) {
//   this.namePlayer = namePlayer,
//   this.turnTotal = 0,
//
//   this.gameTotal = 0
// }
//
//
//
// Player.prototype.playerTurn = function(roll) {
//     if (roll === 1) {
//       this.turnTotal = 0
//       console.log("it got here");
//       //console log here shows at start of webpage, not at click event!!
//     } else {
//       this.turnTotal += roll;
//       console.log("it got here");
//       }
//       console.log("you reached the end");
// }
//
// Player.prototype.playerEnd = function() {
//   this.gameTotal += this.turnTotal;
//   console.log(this.gameTotal);
//  //player holds, end turn add turn total to game total,
//   //if game total <100+ player wins game over!! ??
//   }
//
// function randomNumber(roll) {
//   return Math.floor((Math.random() * 6) + 1);
//   }
//
// //example players below
// // var Player1 = new Player("john");
// // var Player2 = new Player("allen");
//
// //var  = new DiceRoll();
//
//   //UI
//   $(document).ready(function(){
//     $("#play1").click(function() {
//       var roll = randomNumber();
//       //need click to be repeatable (each new click generates another number during turn)
//     })
//
//       $("#result1").text(roll);
//     })
//     //var total = Player1.playerEnd ??
//     $("#hold1").submit(function(event){
//       event.preventDefault();
//
//       $("#turn-total1").text(Player.gameTotal);
//     })
//
//
//     $("#play2").submit(function(event){
//       event.preventDefault();
//       $("#result2").text(roll);
//     })
//
//     $("#hold2").submit(function(event){
//       event.preventDefault();
//       Player1.playerEnd();
//       $("#turn-total2").text(Player.gameTotal);
//     })
