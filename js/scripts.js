//Backend

var playerOne = "";
var playerTwo = "";

var  diceRoll = function() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player(turn) {
  this.playerName;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.roll = 0;
  this.turn = turn;
}

Player.prototype.playerTurn = function() {
   if (this.roll === 1) {
     this.turnTotal = 0;
     alert(this.playerName + " rolled 1, End Turn!")
   } else {
     this.turnTotal += this.roll;
     }
 }


Player.prototype.playerHold = function() {
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;
  alert(this.playerName + "'s" + " turn is over!");
  }

Player.prototype.playerWinner = function() {
  if (this.gameTotal >= 100) {
    alert("100!" + this.playerName + " Wins!!!");
  }
}


Player.prototype.newGame = function () {
  this.roll = 0;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.playerName ="";
}

var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}



//UI
$(document).ready(function() {

  $("button#start").click(function(event){
    playerOne = new Player(true);
    playerTwo =  new Player(false);
    $(".game-play").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    playerOne.playerName = player1Name;
    playerTwo.playerName = player2Name;

  });

  $("button#new-game").click(function(event){
    $(".game-play").hide();
    clearValues();
    playerOne.newGame();
    playerTwo.newGame();
    $("#turn-total1").empty();
    $("#game-total1").empty();
    $("#die-roll-1").empty();
    $("#turn-total2").empty();
    $("#game-total2").empty();
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
