// Computer AI
function Computer(turn) {
  this.computer;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.roll = 0;
  this.turn = turn;
}

Computer.prototype.computerRoll = function() {
  this.roll = Math.floor((Math.random() * 6) + 1);
  if (this.roll === 1) {
    this.turnTotal = 0;
    alert("Computer rolled 1")
 } else {
    this.turnTotal += this.roll;
    }

}

Computer.prototype.endTurn = function() {
  var rollLimit = 2;
    for (var i = 1; i <= rollLimit; i++) {
    this.gameTotal += this.turnTotal;
    this.turnTotal = 0;

    alert("Computer's turn is over!");
  }
    //alert("Computer's turn is over!");
  if (this.gameTotal >= 100) {
    alert("100! Computer Wins!!!");
}
}

Computer.prototype.newGame = function() {
  this.roll = 0;
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.playerName ="";
}

// Player Interface

var playerUser = "";
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


// 
//
// var clearValues = function() {
//   $(".player1Name").val("");
//   $(".player2Name").val("");
// }

//front End

$(document).ready(function() {
  var playerUser = new Player(true);
  var playerComputer = new Computer(true);
  $("#computerstart").click(function(event) {
    $(".computer-play").show();
    $(".start-menu").hide();
  });

  $("button#reset-game").click(function(event){
    $(".computer-play").hide();
    $(".game-play").hide();
    $(".start-menu").show();
    clearValues();
    playerUser.newGame();
    playerComputer.newGame();
    $("#turn-totalp").empty();
    $("#game-totalp").empty();
    $("#die-roll-p").empty();
    $("#turn-totalc").empty();
    $("#game-totalc").empty();
    $("#die-roll-c").empty();
  });


  $("button#computer-turn").click(function(event) {
    playerComputer.computerRoll();
    $("#die-roll-c").text(playerComputer.roll);
    $("#turn-totalc").text(playerComputer.turnTotal);
    if (playerComputer.roll !== 1) {
      playerComputer.computerRoll();
      playerComputer.endTurn();
    } else {
        alert("Computer rolled a 1")
      }
    $("#game-totalc").text(playerComputer.gameTotal);
  });


  $("button#playerPlay").click(function(event) {
    playerUser.roll = diceRoll();
    $("#die-roll-p").text(playerUser.roll);
    playerUser.playerTurn();
    $("#turn-totalp").text(playerUser.turnTotal);
  });

    $("button#playerHold").click(function(event) {
      playerUser.playerHold();
      $("#game-totalp").text(playerUser.gameTotal);
      $("#turn-totalp").empty();
      $("#die-roll-p").empty();
      playerUser.playerWinner();
    });

});
