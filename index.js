//Задача 1
function mango(quantity, price) {
  const gift = quantity - Math.floor(quantity / 3);
  return gift * price;
}
//Задача 2
function solution(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
solution("hello");
//Задача 3
function sum(numbers) {
  "use strict";
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
//Задача 4
function past(h, m, s) {
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;
  return convertHours + convertMinutes + convertSeconds;
}
//Задача 5
function opposite(number) {
  return -number;
}
//Задача 6
function areYouPlayingBanjo(name) {
  if (name[0] === "r" || name[0] === "R") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
  return name;
}
//Задача 7
function smash(words) {
  return words.join(" ");
}
//Задача 8
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "rock" && p2 === "scissors") {
    return `Player 1 won!`;
  } else if (p1 === "paper" && p2 === "rock") {
    return `Player 1 won!`;
  } else if (p1 === "scissors" && p2 === "paper") {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
};
//Задача 9
function booleanToString(b) {
  //your code here
  return b + "";
}
//Задача 10
function myWorld(a = "hello", b = " world") {
  return a + b;
}
myWorld();
//Задача 11
function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
//Задача 12
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
//Задача 13
const stringToNumber = function (str) {
  const transform = Number.parseInt(str);
  return transform;
};
//Задача 14
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//Задача 15
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= -1;
  }
  return array;
}
//Задача 16
function litres(time) {
  let water = Math.floor(time / 2);
  return water;
}
//Задача 17
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
//Задача 18
var summation = function (num) {
  let sum = 0;
  for (i = num; i >= 1; i--) {
    sum += i;
  }
  return sum;
};
//Задача 19
function doubleInteger(i) {
  return i * 2;
}
//Задача 20
function noSpace(x) {
  return x.replace(/\s/g, "");
}
//Задача 21
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
//Задача 22
function points(games) {
  let i = 0;
  let points = 0;
  for (i; i < games.length; i++) {
    let each = games[i].split(":");
    if (each[0] > each[1]) {
      points += 3;
    } else if (each[0] == each[1]) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}
//Задача 23
function rentalCarCost(d) {
  let price = 40;
  if (d >= 3 && d < 7) {
    return d * price - 20;
  } else if (d >= 7) {
    return d * price - 50;
  } else {
    return d * price;
  }
}
//