//Задача 1 Рассчитать стоимость по акции 3+1
function mango(quantity, price) {
    const gift = quantity - Math.floor(quantity / 3);
    return gift * price;
}

mango();

//Задача 2 Перебрать эл строки в обр порядке "red">"der"
function mySolution(str) {
    return str.split('').reverse().join('')
}

mySolution('red')

//Задача 3 Вернуть сумму чисел массива
function sum(numbers) {
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i]
    }
    return res
}

sum([1, 4, 5])

function sum2(numbers) {
    return numbers.reduce((el, acc) => el + acc)
}

sum2([1, 4, 5])

//Задача 4 Вернуть время с полуночи в миллисекундах
function past(h, m, s) {
    const convertHours = h * 60 * 60 * 1000;
    const convertMinutes = m * 60 * 1000;
    const convertSeconds = s * 1000;
    return convertHours + convertMinutes + convertSeconds;
}

past();

//Задача 5 Найти противоположность числу
function opposite(number) {
    return -number;
}

opposite();

//Задача 6 Если имя на r R вернуть имя+играет на бонжо
function areYouPlayingBanjo(name) {
    if (name[0] === "r" || name[0] === "R") {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

areYouPlayingBanjo('nat');

//Задача 7 Вернуть предложение из массива слов
function smash(words) {
    return words.join(" ");
}

smash(['привет'], ['как']);

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
rps();

//Задача 9 Преобразовать true в "true"
function booleanToString(b) {
    return b + "";
}

booleanToString();

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

greet();

//Задача 12 Вернуть yes если true и no если false
function boolToWord(bool) {
    return bool ? 'yes' : 'no'
}

boolToWord();

//Задача 13 Преобразовать строку в число
const stringToNumber = function (str) {
    return Number.parseInt(str);
};
stringToNumber();

//Задача 14 Вернуть четное число
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}

evenOrOdd();

//Задача 15 Вернуть противоположные числа в массиве
function invert(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= -1;
    }
    return array;
}

invert([1, -6])

const inv = array => array.map(el => -el)

inv([1, -6])

//Задача 16 За 1км выпивает 0.5 литра. Узнать сколько выпьет и окр до целого числа
function litres(time) {
    return Math.floor(time / 2);
}

litres();

//Задача 17 Если число положительное вернуть отрицательное
function makeNegative(num) {
    return num > 0 ? -num : num
}

makeNegative();

//Задача 18 Найти сумму всех чисел до вводимого (3= 1+2+3)
let summation = function (num) {
    let sum = 0;
    for (let i = num; i >= 1; i--) {
        sum += i;
    }
    return sum;
};
summation();

//Задача 19 Число * на 2
function doubleInteger(i) {
    return i * 2;
}

doubleInteger();

//Задача 20 Удалить пробелы мд символами в строке
function noSpace(x) {
    return x.replace(/\s/g, "");
}

noSpace('привет как дела');

//Задача 21 Четное число * на 8, нечетное на 9
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}

simpleMultiplication();

//Задача 22
function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
        let each = games[i].split(":");
        if (each[0] > each[1]) {
            points += 3;
        } else if (each[0] === each[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

points(1);

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

rentalCarCost();

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

sumMix('1');

//Задача 25 Разбить строку на массив слов
function stringToArray(string) {
    return string.split(" ");
}

stringToArray('привет как дела');

//Задача 26 Перемножить массив
function grow(x) {
    return x.reduce((a, b) => a * b);
}

grow([1, 2, 5]);

//Задача 27 Вернуть к какому кварталу принадлежит месяц
const quarterOf = (month) => {
    if (month === 1 || month === 2 || month === 3) {
        return 1;
    } else if (month === 4 || month === 5 || month === 6) {
        return 2;
    } else if (month === 7 || month === 8 || month === 9) {
        return 3;
    } else {
        return 4;
    }
};
quarterOf();

//Задача 28 Если квадрат вернуть площадь, если прямоуг - периметр
const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
};
areaOrPerimeter();
//или
const areaOrPerimeter2 = function (l, w) {
    return l === w ? l * w : 2 * (l + w);
};
areaOrPerimeter2();

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

positiveSum([1, 2, 8, -5]);

//Задача 30 Объем прямоугольного параллелепипеда
function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
}

getVolumeOfCuboid();

//Задача 31 Вернуть нужную строку при выполненном условии
function hoopCount(n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

hoopCount();

// Задача 32 За сколько лет увелич население при вводных
function nbYear(p0, percent, aug, p) {
    let totalYear = 0;
    while (p0 < p) {
        p0 = Math.trunc(p0 + (p0 * percent) / 100 + aug);
        totalYear++;
    }
    return totalYear;
}

nbYear();

//Задача 33 Убрать ! из строки
function removeExclamationMarks(s) {
    return s.replace(/!/g, "");
}

removeExclamationMarks('привет! как дела!');

//Задача 34 Вернуть нужную строку (лепестки)
function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 1) {
        return "I love you";
    } else if (nbPetals % 6 === 2) {
        return "a little";
    } else if (nbPetals % 6 === 3) {
        return "a lot";
    } else if (nbPetals % 6 === 4) {
        return "passionately";
    } else if (nbPetals % 6 === 5) {
        return "madly";
    } else if (nbPetals % 6 === 0) {
        return "not at all";
    }
}

howMuchILoveYou();

//Задача 35 Вернуть четные числа
function testEven(n) {
    return n % 2 === 0;
}

testEven();

//Задача 36 Сложить количество голлов в чемпионате
function goals(ligandGoals, copyDelReyGoals, championsLeagueGoals) {
    return ligandGoals + copyDelReyGoals + championsLeagueGoals;
}

goals();

//Задача 37 Удалить первый и последний символ строки
function removeChar(str) {
    return str.slice(1, -1);
}

removeChar('привет');

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

bmi();

//Задача 39 Рассчитать кол мест в автобусе при вводных
function enough(cap, on, wait) {
    let place = cap - on;
    if (place >= wait) {
        return 0;
    } else {
        return wait + on - cap;
    }
}

enough();

//Задача 40 Вернуть возраст человека, кошки и собаки
let humanYearsCatYearsDogYears = function (humanYears) {
    let catYears, dogYears;
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
humanYearsCatYearsDogYears();

//Задача 41 Считать овец
let countSheep = function (num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
};
countSheep();

//Задача 42 Вернуть сумму чисел между ними (числа + или -)
function getSum(a, b) {
    if (a === b) {
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

getSum();

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

switchItUp();

//Задача 44 На 1 дракона 2 пули. Вернуть true или false
function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}

hero();

//Задача 45 Найти третий угол треугольника
function otherAngle(a, b) {
    return 180 - (a + b);
}

otherAngle();

//Задача 46 Найти множитель числа
function checkForFactor(base, factor) {
    return base % factor === 0;
}

checkForFactor();

//Задача 47
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}

paperwork();

//Задача 48 Если работаю true, если отпуск false
function setAlarm(employed, vacation) {
    return employed && !vacation;
}

setAlarm();

//Задача 49 Вернуть строку
function myGreet(name) {
    return `Hello, ${name} how are you doing today?`;
}

myGreet();

//Задача 50 Каждый эл массива * на 2
function maps(x) {
    return x.map((el) => el * 2);
}

maps([2, 4, 5]);

//Задача 51 Число в строку
function numberToString(num) {
    return num + "";
}

numberToString();

//или
function numberToString1(num) {
    return String(num);
}

numberToString1();

//Задача 52 Вернуть столетие по году
function century(year) {
    return Math.ceil(year / 100);
}

century();

//Задача 53 Найти разницу объемов параллелепипеда
function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

findDifference(20, 10);

//Задача 54 Перевести км/ч в м/с и округлить до меньшего целого
function cockroachSpeed(s) {
    return Math.floor(s / 0.036);
}

cockroachSpeed();

//Задача 55 Ф-я возвращает s повторяющееся n раз
function repeatStr(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

repeatStr(4, 1);

//или
/*function repeatStr1(n, s) {
    return s.repeat(n);
}

repeatStr1(4,1);*/

//Задача 56 Отсортировать массив и вернуть единственое число отличное от всех элементов массива
function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

stray([1, 2, 1]);

//Задача 57 Вернуть true если одно число положительное, другое отрицательное
function plusMinus(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 === 1) ||
        (flower2 % 2 === 0 && flower1 % 2 === 1);
}

plusMinus();

//Задача 58 Проверить содержит ли массив а знаение х
function check(a, x) {
    return a.includes(x);
}

check([1, 2, 3], 3);

//Задача 59 Ф-я возвращ строку привет мир
function greet2(world) {
}

greet2('hello world');

//Задача 60 Каждый символ повт 2 раза
function doubleChar(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += str[i] += str[i];
    }
    return newStr;
}

doubleChar('привет');

//Задача 61 Удалить каждый второй элемент массива
function removeEveryOther(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr;
}

removeEveryOther([1, 2, 5]);

//Задача 62 Отсортировать массив по длине строки
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
}

sortByLength(['привет как дела']);

//Задача 63 Определить существует ли треугольник
function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b;
}

isTriangle();

//Задача 64 Вернуть true если yourPoints больше среднего арифметического массива classPoints
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    let average = sum / classPoints.length;
    return yourPoints > average;
}

betterThanAverage([1, 2, 3], 5);

//Задача 65 Найти количество совпадений letter в строке str
function strCount(str, letter) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            result += 1;
        }
    }
    return result;
}

strCount('привет', 1);

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

expressionMatter();
//Задача 67 Яв-ся ли n квадратом
const isSquare = function (n) {
    let result = Math.sqrt(n);
    return result % 1 === 0;
};
isSquare();

//Задача 68 Найти наименьшее число в массиве
function findSmallestInt(args) {
    let result = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] < result) {
            result = args[i];
        }
    }
    return result;
}

findSmallestInt([1, 3, 6, 4]);

//Задача 69 Найти needle в массиве
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return "found the needle at position " + i;
        }
    }
}

findNeedle(['hi, needle']);

//Задача 70 Перемножить числа в массиве
function multiply(x) {
    return x.reduce((a, b) => a * b);
}

multiply([1, 4, 7]);

//Задача 71 Отсортировать массив по возрастанию, если null вернуть []
function solution(nums) {
    if (nums !== null) {
        return nums.sort((a, b) => a - b);
    } else {
        return [];
    }
}

solution(null);

//Задача 72 Посчитать количество true в массиве
function countSheep1(arrayOfSheep) {
    let result = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            result += 1;
        }
    }
    return result;
}

countSheep1(true);

//Задача 74 Удалить гласные из строки
function shortcut(string) {
    return string.replace(/[aeiouаяюоеёэиы]/gi, "");
}

shortcut('привет hey hey')

//Задача 75 Найти макс и мин чисто в массиве
let min = function (list) {
    return Math.min(...list);
};
let max = function (list) {
    return Math.max(...list);
};

//Задача 76 В строке с числами вернуть макс и мин число
function highAndLow(numbers) {
    let arr = numbers.split(" ");
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max + " " + min;
}

highAndLow('1,4,7');

//Задача 77 Вернуть error если строка, если число *50+6
function problem(x) {
    if (typeof x === "string") {
        return "Error";
    } else {
        return x * 50 + 6;
    }
}

problem();

//Задача 78 Возвести число в квадрат
function square(num) {
    return Math.pow(num, 2);
}

square();

//Задача 79 Вернуть квадрат всех чисел до n
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) arr[i] = 2 ** i;
    return arr;
}

powersOfTwo();

//Задача 80 Найти среднее арифм эл массива. если массив пустой вернуть 0
function findAverage(array) {
    let averageValue = 0;
    for (let i = 0; i < array.length; i++) {
        averageValue += array[i];
    }
    if (array !== 0) {
        return averageValue / array.length;
    } else {
        return 0;
    }
}

findAverage([]);

//Задача 81 Сравнить первый и последний символ beast и dish
function feast(beast, dish) {
    return beast[0] === dish[0] &&
        beast[beast.length - 1] === dish[dish.length - 1];
}

feast(1, 4);

//Задача 82 Вернуть true если кажд число массива меньше limit
function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false;
        }
    }
    return true;
}

smallEnough([1, 2], 6);

//Задача 83 Вернуть массив значений от integer до limit кратных integer
function findMultiples(integer, limit) {
    let result = [];
    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }
    return result;
}

findMultiples(15, 80)

//Задача 84 Узнать нужно ли множественное число
function plural(n) {
    return n !== 1;
}

plural();

//Задача 85 Заменить Т на U
function DNAtoRNA(dna) {
    let str = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            str += 'U';
        } else {
            str += dna[i];
        }
    }
    return str;
}

DNAtoRNA('Talk tom')

//или
function DNAtoRNA1(dna) {
    return dna.replace(/T/g, 'U');
}

DNAtoRNA1('Talk tom');

//Задача 86 Вернуть строку по условиям
function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy";
    } else if (old < 18) {
        return "drink coke";
    } else if (old <= 20) {
        return "drink beer";
    } else if (old >= 21) {
        return "drink whisky"
    }
}

peopleWithAgeDrink();

//Задача 87 Отсортировать число от большего к меньшему 12367 => 76321
function descendingOrder(n) {
    let res = ("" + n).split("").sort(function (a, b) {
        return b - a
    });
    res = res.join("");
    return +res;
}

descendingOrder();

//Задача 88 Вернуть массив положительных и отрицаткльных чисел
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    let result = [0, 0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            result[0] += 1;
        } else {
            result[1] += input[i];
        }
    }
    return result;
}

countPositivesSumNegatives(1, 4, 6, -6);

//Задача 89 Вернуть строку в обратном порядке 'I am an expert at this'/'this at expert an am I'
function reverse(string) {
    return string.split(' ').reverse().join(' ');
}

reverse('I am an expert at this');

//Задача 90 Вернуть 5 без использования чисел и +-*/
function unusualFive() {
    return 'aaaaa'.length;
}

unusualFive();

//Задача 91 Выяснить хватит ли бензина
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};

zeroFuel();

//Задача 92 Убрать все гласные из строки, кроме y
function disemvowel(str) {
    return str.replace(/[aeiouаеёиоыюя]/gi, '')
}

console.log(disemvowel('привет уна hey hey'))

//Задача 93 Вернуть строку в зависимости от условия
function mouthSize(animal) {
    if (animal === 'alligator' || animal === 'ALLIGATOR') {
        return 'small';
    } else {
        return 'wide'
    }
}

mouthSize();

//Задача 94 Заменить 5, 0, 1 на S, O, I
function correct(string) {
    return string.replace(/5/gi, 'S').replace(/0/gi, 'O').replace(/1/gi, 'I')
}

correct('1,5,7');

//Задача 95 Вывести оценку по вводным данным
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

finalGrade();

//Задача 96 Остортировать массив в обратном порядке
function reverseList(list) {
    return list.reverse();
}

reverseList([1, 5, 8]);

//Задача 97 Найти длину самого короткого слова в строке
function findShort(s) {
    let res = s.split(' ').sort(function (a, b) {
        return a.length - b.length
    });
    return res[0].length;
}

findShort('привет');

//Задача 98 Вернуть нужное значение при вводных
function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if (90 <= score) return 'A';
    else if (80 <= score) return 'B';
    else if (70 <= score) return 'C';
    else if (60 <= score) return 'D';
    else if (0 <= score) return 'F';
}

getGrade();

//Задача 99
function move(position, roll) {
    return position + roll * 2;
}

move();

//Задача 100 Найти сумму значений каждого числа 46 => 10; 12 => 3
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]
    }
    return sum;
}

sumDigits();

//Задача 101 Из фамилии и имени сделать аббревеатуру разделенную точкой. Natalia Khomich => N.K
function abbrevName(name) {
    return name.toUpperCase().split(' ').map(el => el[0]).join('.');
}

abbrevName('Khomich Natalia');

//Задача 102 Перевести строку в цифры 0 и 1
function fakeBin(x) {
    let res = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            res += 0;
        } else res += 1;
    }
    return res;
}

fakeBin('привет');

//Задача 103 Если сумма эл массива четная вернуть 'even', если нечетная 'odd'
function oddOrEven(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    if (res % 2 === 0) return 'even';
    else return 'odd';
}

oddOrEven([1, 4, 7]);

//Задача 104 Найти сумму переменных
let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//Задача 105 Приветственная функция
function sayHello(name) {
    return `Hello, ${name}`
}

sayHello()

//Задача 106 Вернуть строку по условию
function bmi(weight, height) {
    const bmi = weight / (height * height)

    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

bmi()

//Задача 107
function updateLight(current) {
    if (current === 'green') {
        return 'yellow'
    } else if (current === 'yellow') {
        return 'red'
    } else {
        return 'green'
    }
}

updateLight()

//Задача 108
function saleHotdogs(n) {
    if (n < 5) {
        return n * 100
    } else if (n >= 5 && n < 10) {
        return n * 95
    } else {
        return n * 90
    }
}

saleHotdogs()

//Задача 109 Преобраз число в перевернутый массив цифр 1234 => [4,3,2,1]
function digitize(n) {
    return n.toString().split("").reverse().map(Number)
}

digitize(1234)

//Задача 110 Сделать в строке строчные буквы заглавными и наоборот
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
}

//рекурсия
function pow(x, n) {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

pow(2, 3)

//
function greetL(language) {
    let lan = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    for (let key in lan) {
        if (key === language) {
            return lan[key]
        }
    }
    return lan['english']
}

//вернуть первые 2 буквы слова в массиве
function whoIsPaying(name) {
    if (name.length <= 2) {
        return [name];
    } else {
        const newName = name.substring(0, 2);
        return [name, newName];
    }
}

whoIsPaying('Melania')
whoIsPaying('M')

//'abcdef' => ['AbCdEf', 'aBcDeF']

function capitalize(s) {
    let even = ''
    let odd = ''
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            even += s[i].toUpperCase()
            odd += s[i]
        } else {
            even += s[i]
            odd += s[i].toUpperCase()
        }
    }
    return [even, odd]
}

capitalize('abcdef')

function capitalize2(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
}

capitalize2('abcdef')

//вернуть true если строка str заканчивается подстрокой ending
function solutionStr(str, ending) {
    return str.endsWith(ending)
}

solutionStr('asdf', 'df')

//вернуть массив индексов заглавных букв в массиве
const capitals = function (word) {
    const res = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            res.push(i)
        }
    }
    return res
};

capitals('CodEWaRs')

//вернуть новый массив с числом элементов от 0 до n
function take(arr, n) {
    return arr.slice(0, n)
}

take([1, 2, 3, 5, 7], 3)

//вернуть массив чисел от a до b
function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

between(1, 4)

//сложить четные и нечетные числа в массиве
function rowWeights(array) {
    let even = 0
    let odd = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i]
        } else {
            odd += array[i]
        }
    }
    return [even, odd]
}

rowWeights([29, 83, 67, 53, 19, 28, 96]) //[211,164]

//проверить, что в массиве arr содержится item
function include(arr, item) {
    return arr.includes(item)
}

include([1, 2, 3], 4)

//удалить нули из числа в конце
function noBoringZeros(n) {
    return n === 0 ? 0 : parseFloat(n.toString().replace(/0+$/, ''));
}

noBoringZeros(150000)

//оставить в массиве только числа
function filter_list(l) {
    return l.filter(el => typeof el === 'number')
}

filter_list([1, 2, 'a', 'b'])

//проверить что pin состоит из 4 или 6 чисел
function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        for (let i = 0; i < pin.length; i++) {
            if (isNaN(parseInt(pin[i]))) {
                return false;
            }
        }
        return true
    } else {
        return false
    }
}

validatePIN("12345")

//найти мин и макс число в массиве
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}

minMax([1, 2, 3, 4, 5])

//преобразовать число в ASCII
function getChar(c){
    return String.fromCharCode(c);
}
getChar(1)

//найти среднее арифметическое
var findAverage = function (nums) {
    let res = 0
    for (let i = 0; i<nums.length; i++) {
        res += nums[i]
    }
    return res / nums.length
}

findAverage([1,2,3,6])

//узнать количество лет для достижения desired
function calculateYears(principal, interest, tax, desired) {
    if(principal === desired) {
        return 0
    } else {
        for (let i = 1; i < desired; i++) {
            let profit = (principal * interest) - (principal * interest * tax)//41p
            principal += profit
            if(principal>=desired) {
                return i
            }
        }
    }
}

calculateYears(1000, 0,12,  1200)

//поменять слова в строке местами
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}

nameSuffle('john McClane')

//найти сумму последовательности чисел
const sequenceSum = (begin, end, step) => {
    if(begin > end) {
        return 0
    } else {
        let res = 0
        for (let i = begin; i <= end; i+= step) {
            res += i
        }
        return res
    }
};
sequenceSum(2, 4, 1)

//вернуть строку из эл массива
function printArray(array){
    return array.join();
}
printArray([1,4,5,6])

//вернуить массив слов и их длину
function addLength(str) {
    return str.split(' ').map(el => el + ' ' + el.length)
}
addLength('apple lemon')

//вернуть строку составив предложение с помощью объекта
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
animal({color: 'black', name: 'dog', legs: 4})