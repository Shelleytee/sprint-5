// Exercise 1 - # Triangle

for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

// my code (worked)

for (var i = "#"; i < "########"; i += "#") {
  console.log(i);
}

// Exercise 2 - FizzBuzz

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n); //nice
}

// my code (worked)

for (var j = 1; j <= 100; j++) {
  if (j % 3 == 0 && j % 5 == 0) {
    console.log("FizzBuzz");
	} else if (j % 5 == 0) {
      console.log("Buzz");
    } else if (j % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(j);
	}
}

// Paul Irish (worked)
for (var k = 1; k <= 100; k++) {
  var f = k % 3 == 0, b = k % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : k);
}

// Exercise 3 - Chessboard

// my code (same as book)

var board = "";
var size = 20;
for (var row = 0; row < size; row += 1) {
	for (var column = 0; column < size; column++ ) {
    if ((column+row) % 2 == 0) {
    	board += " ";
    	}else {
          board += "#";
    	}
    }
	board += "\n";
}
console.log(board);
