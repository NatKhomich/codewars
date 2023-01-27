//Задача 1 Рассчитать стоимость по акции 3+1
function mango(quantity, price) {
  const gift = quantity - Math.floor(quantity / 3);
  return gift * price;
}
//Задача 2 Перебрать эл строки в обр порядке "red">"der"
function solution(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
solution("hello");
//Задача 3 Вернуть сумму чисел массива
function sum(numbers) {
  "use strict";
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
//Задача 4 Вернуть время с полуночи в миллисекундах
function past(h, m, s) {
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;
  return convertHours + convertMinutes + convertSeconds;
}
//Задача 5 Найти противоположность числу
function opposite(number) {
  return -number;
}
//Задача 6 Если имя на r R вернуть имя+играет на бонжо
function areYouPlayingBanjo(name) {
  if (name[0] === "r" || name[0] === "R") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
  return name;
}
//Задача 7 Вернуть предложение из массова слов
function smash(words) {
  return words.join(" ");
}
//Задача 8 Вернуть какой игрок выиграет
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
//Задача 9 Преобразовать true в "true"
function booleanToString(b) {
  return b + "";
}
//Задача 10 Сложить слова в строку
function myWorld(a = "hello", b = " world") {
  return a + b;
}
myWorld();
//Задача 11 Персонализированное приветствие
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
//Задача 12 Вернуть yes если true и no если false
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
//Задача 13 Преобразовать строку в число
const stringToNumber = function (str) {
  const transform = Number.parseInt(str);
  return transform;
};
//Задача 14 Вернуть четное число
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//Задача 15 Вернуть противоположные числа в массиве
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= -1;
  }
  return array;
}
//Задача 16 За 1км выпивает 0.5 литра. Узнать сколько выпьет и окр до целого числа
function litres(time) {
  let water = Math.floor(time / 2);
  return water;
}
//Задача 17 Если число положительное вернуть отрицательное
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
//Задача 18 Найти сумму всех чисел до вводимого (3= 1+2+3)
var summation = function (num) {
  let sum = 0;
  for (i = num; i >= 1; i--) {
    sum += i;
  }
  return sum;
};
//Задача 19 Число * на 2
function doubleInteger(i) {
  return i * 2;
}
//Задача 20 Удалить пробелы мд символами в строке
function noSpace(x) {
  return x.replace(/\s/g, "");
}
//Задача 21 Четное число * на 8, нечетное на 9
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
//Задача 24 Преобразовать строку в число и сложить
function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      x[i] = Number(x[i]);
    }
    sum += x[i];
  }
  return sum;
}
//Задача 25 Разбить строку на массив слов
function stringToArray(string) {
  return string.split(" ");
}
//Задача 26 Перемножить массив
function grow(x) {
  return x.reduce((a, b) => a * b);
}
//Задача 27 Вернуть к какому кварталу принадлежит месяц
const quarterOf = (month) => {
  if (month == 1 || month == 2 || month == 3) {
    return 1;
  } else if (month == 4 || month == 5 || month == 6) {
    return 2;
  } else if (month == 7 || month == 8 || month == 9) {
    return 3;
  } else {
    return 4;
  }
};
//Задача 28 Если квадрат вернуть площадь, если прямоуг - периметр
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
};
//или
const areaOrPerimeter2 = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};
//Задача 29 Сложить положит числа в массиве
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//Задача 30 Объем прямоугольного параллелепипеда
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
//Задача 31 Вернуть нужную строку при выполненном условии
function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
// Задача 32 За сколько лет увелич население при вводных
function nbYear(p0, percent, aug, p) {
  let totalYear = 0;
  while (p0 < p) {
    p0 = Math.trunc(p0 + (p0 * percent) / 100 + aug);
    totalYear++;
  }
  return totalYear;
}
//