class Game {
  constructor() {
    this.answer = [];
    this.log = [];
    this.digits = 4;
    this.generateAnswer(this.digits);
  }
  generateAnswer(digits) {
    this.digits = digits;
    this.answer = [];
    document.getElementById("digits").innerHTML =
      "現在の桁数は" + this.digits + "桁です";
    while (this.answer.length < this.digits) {
      var random = Math.random();
      var number = Math.floor(random * 10);
      if (this.answer.includes(number) === false) {
        this.answer.push(number);
      }
    }
    console.log(this.answer);
    document.getElementById("result").innerHTML = "";
    this.log = [];
  }

  getInput(input) {
    var input_1 = [];
    var num = 0;
    var isSuitable = true;
    for (var j = 0; j < this.digits; j++) {
      if (
        isNaN(Number(input[j])) === true ||
        input_1.includes(Number(input[j])) === true ||
        input.length !== this.digits
      ) {
        isSuitable = false;
      } else {
        num = Number(input[j]);
        input_1.push(num);
      }
    }
    if (isSuitable) {
      this.conpareToAnswer(input_1);
      this.record();
      if (this.log[this.log.length - 1].Hit === this.digits) {
        this.correct();
      }
    } else {
      document.getElementById("result").innerHTML += "不当な答えです</br>";
    }
  }
  conpareToAnswer(input_1) {
    var Hit = 0;
    var Blow = 0;
    for (var k = 0; k < this.digits; k++) {
      if (this.answer[k] === input_1[k]) {
        Hit = Hit + 1;
      } else if (this.answer.includes(input_1[k])) {
        Blow = Blow + 1;
      }
    }
    var data = { Hit: Hit, Blow: Blow, input: input_1 };
    this.log.push(data);
    console.log(this.log[0]);
  }
  record() {
    var round = this.log.length - 1;
    var input_N = "";
    for (var l = 0; l < this.digits; l++) {
      input_N = input_N + String(this.log[round].input[l]);
    }
    document.getElementById("result").innerHTML +=
      "#" +
      this.log.length +
      "　　　" +
      input_N +
      "　　　" +
      this.log[round].Hit +
      "　　　　　" +
      this.log[round].Blow +
      "</br>";
  }
  correct() {
    document.getElementById("result").innerHTML += "Correct answer</br>";
  }
  error() {}
}
var game = new Game();

window.input = function input() {
  var input = document.getElementById("input_1").value;
  game.getInput(input);
};
window.reset = function reset() {
  var digits = Number(document.getElementById("digits_1").value);
  console.log(digits);
  game.generateAnswer(digits);
};
