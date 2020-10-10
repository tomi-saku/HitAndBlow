class Game {
  constructor() {
    this.answer = [];
    this.log = [];
    this.generateAnswer();
  }
  generateAnswer() {
    this.answer = [];
    while (this.answer.length < 4) {
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
    for (var j = 0; j < 4; j++) {
      var num = Number(input[j]);
      input_1[j] = num;
    }
    console.log(input_1);
    this.conpareToAnswer(input_1);
    this.record();
    if (this.log[this.log.length - 1].Hit === 4) {
      this.correct();
    }
  }
  conpareToAnswer(input_1) {
    var Hit = 0;
    var Blow = 0;
    for (var k = 0; k < 4; k++) {
      if (this.answer[k] === input_1[k]) {
        Hit = Hit + 1;
      } else if (this.answer.includes(input_1[k])) {
        Blow = Blow + 1;
      }
    }
    console.log(Hit);
    console.log(Blow);
    var data = { Hit: Hit, Blow: Blow, input: input_1 };
    this.log.push(data);
    console.log(this.log[0]);
  }
  record() {
    var round = this.log.length - 1;
    var input_N =
      String(this.log[round].input[0]) +
      String(this.log[round].input[1]) +
      String(this.log[round].input[2]) +
      String(this.log[round].input[3]);
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
    document.getElementById("result").innerHTML += "Correct answer";
  }
  error() {}
}
var game = new Game();
window.input = function input() {
  var input = document.getElementById("input_1").value;
  game.getInput(input);
};
window.reset = function reset() {
  game.generateAnswer();
};
