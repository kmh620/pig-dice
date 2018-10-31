

function Player(namePlayer) {
  this.namePlayer = namePlayer,
  this.turnTotal = 0,

  this.gameTotal = 0
}



Player.prototype.playerTurn = function(roll) {
    if (roll === 1) {
      this.turnTotal = 0
      console.log("it got here");
    } else {
      this.turnTotal += roll;
      console.log("it got here");
      }
      console.log("you reached the end");
}

Player.prototype.playerEnd = function() {
  this.gameTotal += this.turnTotal;
  console.log(this.gameTotal);
 //player holds, end turn add turn total to game total,
  //if game total <100+ player wins game over!! ??
  }

function randomNumber() {
  return Math.floor((Math.random() * 6) + 1);
  }


var Player1 = new Player("john");
var Player2 = new Player("allen");

//var  = new DiceRoll();

  //UI
  $(document).ready(function(){
    $("#play1").click(function() {
      var roll = randomNumber();
    })

      $("#result1").text(roll);
    })
    //var total = Player1.playerEnd ??
    $("#hold1").submit(function(event){
      event.preventDefault();

      $("#turn-total1").text(Player.gameTotal);
    })


    $("#play2").submit(function(event){
      event.preventDefault();
      $("#result2").text(roll);
    })

    $("#hold2").submit(function(event){
      event.preventDefault();
      Player1.playerEnd();
      $("#turn-total2").text(Player.gameTotal);
    })
