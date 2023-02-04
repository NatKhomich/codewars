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
//Задача 33 Убрать ! из строки
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
//Задача 34 Вернуть нужную строку (лепестки)
function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 == 1) {
    return "I love you";
  } else if (nbPetals % 6 == 2) {
    return "a little";
  } else if (nbPetals % 6 == 3) {
    return "a lot";
  } else if (nbPetals % 6 == 4) {
    return "passionately";
  } else if (nbPetals % 6 == 5) {
    return "madly";
  } else if (nbPetals % 6 == 0) {
    return "not at all";
  }
}
//Задача 35 Вернуть четные числа
function testEven(n) {
  return n % 2 == 0 ? true : false;
}
//Задача 36 Сложить количество голлов в чемпионате
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//Задача 37 Удалить первый и последний символ строки
function removeChar(str) {
  return str.slice(1, -1);
}
//Задача 38 Найти индекс массы тела и вернуть результат
function bmi(weight, height) {
  let indexMassBody = weight / Math.pow(height, 2);
  if (indexMassBody <= 18.5) {
    return "Underweight";
  } else if (indexMassBody <= 25.0) {
    return "Normal";
  } else if (indexMassBody <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
//Задача 39 Рассчитать кол мест в автобусе при вводных
function enough(cap, on, wait) {
  let place = cap - on;
  if (place >= wait) {
    return 0;
  } else {
    return wait + on - cap;
  }
}
//Задача 40 Вернуть возраст человека, кошки и собаки
var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 4 * (humanYears - 2) + 24;
    dogYears = 5 * (humanYears - 2) + 24;
  }
  return [humanYears, catYears, dogYears];
};
//Задача 41 Считать овец
var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
//Задача 42 Вернуть сумму чисел между ними (числа + или -)
function getSum(a, b) {
  if (a == b) {
    return a;
  } else if (a < b) {
    max = b;
    min = a;
  } else {
    max = a;
    min = b;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
//Задача 43 Вернуть число словами
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Enter a number between 0 and 9";
  }
}
//Задача 44 На 1 дракона 2 пули. Вернуть true или false
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
//Задача 45 Найти третий угол треугольника
function otherAngle(a, b) {
  return 180 - (a + b);
}
//Задача 46 Найти множитель числа
function checkForFactor(base, factor) {
  return base % factor == 0 ? true : false;
}
//Задача 47
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}
//Задача 48 Если работаю true, если отпуск false
function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}
//Задача 49 Вернуть строку
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
//Задача 50 Каждый эл массива * на 2
function maps(x) {
  let result = x.map((el) => el * 2);
  return result;
}
//Задача 51 Число в строку
function numberToString(num) {
  return num + "";
}
//или
function numberToString(num) {
  return String(num);
}
//Задача 52 Вернуть столетие по году
function century(year) {
  return Math.ceil(year / 100);
}
//Задача 53 Найти разницу объемов параллелепипеда
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}
//Задача 54 Перевести км/ч в м/с и округлить до меньшего целого
function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}
//Задача 55 Ф-я возвращает s повторяющееся n раз
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
//или
function repeatStr(n, s) {
  return s.repeat(n);
}
//Задача 56 Отсортировать массив и вернуть единственое число отличное от всех элементов массива
function stray(numbers) {
  let arr = numbers.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  } else {
    return arr[arr.length - 1];
  }
}
//Задача 57 Вернуть true если одно число положительное, другое отрицательное
function lovefunc(flower1, flower2) {
  return (flower1 % 2 == 0 && flower2 % 2 == 1) ||
    (flower2 % 2 == 0 && flower1 % 2 == 1)
    ? true
    : false;
}
//Задача 58 Проверить содержит ли массив а знаение х
function check(a, x) {
  return a.includes(x) ? true : false;
}
//Задача 59 Ф-я возвращ строку привет мир
function greet(world) {
  return "hello world!";
}
//Задача 60 Каждый символ повт 2 раза abc = aabbcc
function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] += str[i];
  }
  return newStr;
}
//Задача 61 Удалить каждый второй элемент массива
function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}
//Задача 62 Отсортировать массив по длине строки
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
//Задача 63 Определить существует ли треугольник
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b ? true : false;
}
//Задача 64 Вернуть true если yourPoints больше среднего арифметического массива classPoints
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let average = sum / classPoints.length;
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}
//Задача 65 Найти количество совпадений letter в строке str
function strCount(str, letter) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      result += 1;
    }
  }
  return result;
}
//Задача 66 Найти наибольший результат используя *+()
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a + b * c,
    (a + b) * c,
    a * b * c,
    a * b + c,
    a * (b + c)
  );
}
//Задача 67 Яв-ся ли n квадратом
var isSquare = function (n) {
  let result = Math.sqrt(n);
  return result % 1 == 0;
};
//Задача 68 Найти наименьшее число в массиве
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < result) {
        result = args[i];
      }
    }
    return result;
  }
}
//Задача 69 Найти needle в массиве
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}
//Задача 70 Перемножить числа в массиве
function grow(x) {
  return x.reduce((a, b) => a * b);
}
