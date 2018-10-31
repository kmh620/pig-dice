// function DiceRoll(){
//   this.rolls = []
// }



function PlayerOne (namePlayerOne, turnTotal, scoreTotal) {
  this.namePlayerOne = namePlayerOne,
  this.turnTotal = turnTotal,
  this.scoreTotal = 0,
  this.rolls = []
  console.log(this.rolls)
}

PlayerOne.prototype.addRoll = function (randomNumber) {
  this.rolls.push(randomNumber);
}

PlayerOne.prototype.findRoll = function() {
  for (var i = 0; (this.rolls).length; i++){
    if ([i] >2 && [i] <6) {
      this.turnTotal += [i];
      //add number to turntotal
    } else if ([i] === 1) {
      //end turn, delete turntotal, no add #
    }
  }
}




function randomNumber() {
    var newRoll = Math.floor((Math.random() * 6) + 1);
  }


//var  = new DiceRoll();

  //UI
  $(document).ready(function(){
    $("#pig-dice").submit(function(event){
      event.preventDefault();

      //var newRoll = Math.floor((Math.random() * 6) + 1);
      // $("#result").text();
    })
  })
