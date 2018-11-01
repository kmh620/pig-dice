// Computer AI
function Computer(turn) {
  this.computer;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.roll = 0;
  this.turn = turn;
}

Computer.prototype.computerRoll = function() {
  var rollLimit = 2;
  //var dice = [];
  for (var i = 1; i <= rollLimit; i++) {
    var die = Math.floor((Math.random() * 6) + 1);
      this.roll.push(die);
    }
}

Computer.prototype.computerTurn = function() {
  if (this.roll === 1) {
  this.turnTotal = 0;
  alert("Computer rolled 1, End Turn!")
} else {
  this.turnTotal += this.roll;
  }
}

Computer.prototype.computerWinner = function() {
  if (this.gameTotal >= 100) {
    alert("100! Computer Wins!!!");
  }
}

Computer.prototype.computerHold = function() {
  var rollLimit = 2;
  for (var i = 1; i <= rollLimit; i++) {

    this.gameTotal += this.turnTotal;
    this.turnTotal = 0;
    alert("computers turn is over!");
  }
}

Computer.prototype.newGame = function () {
  this.roll = 0;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.playerName ="";
}

// Player Interface

var playerOne = "";
var  diceRoll = function() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player(turn) {
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.roll = 0;
  this.turn = turn;
}

Player.prototype.playerTurn = function() {
   if (this.roll === 1) {
     this.turnTotal = 0;
     alert("Player rolled 1, End Turn!")
   } else {
     this.turnTotal += this.roll;
     }
 }

Player.prototype.playerHold = function() {
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;

  alert("Player's turn is over!");
  }

Player.prototype.playerWinner = function() {
  if (this.gameTotal >= 100) {
    alert("100! Player Wins!!!");
  }
}




var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function() {
  $("#computerstart").click(function(event) {
    playerOne = new Player(true);
    playerComputer = new Computer(true);
    $(".computer-play").show();
    $(".start-menu").hide();
  });

  $("button#reset-game").click(function(event){
    $(".computer-play").hide();
    $(".game-play").hide();
    $(".start-menu").show();
    clearValues();
    playerOne.newGame();
    playerComputer.newGame();
    $("#turn-totalp").empty();
    $("#game-totalp").empty();
    $("#die-roll-p").empty();
    $("#turn-totalc").empty();
    $("#game-totalc").empty();
    $("#die-roll-c").empty();
  });


  $("button#computer-turn").click(function(event) {
    playerComputer.roll = diceRoll();
    $("#die-roll-c").text(playerComputer.roll);
    playerComputer.computerTurn();
    $("#turn-totalc").text(playerComputer.turnTotal);
  });


  $("button#play1").click(function(event) {
    playerOne.roll = diceRoll();
    $("#die-roll-p").text(playerOne.roll);
    playerOne.playerTurn();
    $("#turn-totalp").text(playerOne.turnTotal);
  });

    $("button#hold1").click(function(event) {
      playerOne.playerHold();
      $("#game-totalp").text(playerOne.gameTotal);
      $("#turn-totalp").empty();
      $("#die-roll-p").empty();
      playerOne.playerWinner();
    });

});
