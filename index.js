//Задача 1
function mango(quantity, price){
    const gift = quantity - Math.floor(quantity / 3);
      return gift*price;
    }
//Задача 2
function solution(str){
  let newString = ''
  for (var i= str.length-1; i>=0; i--){
    newString += str[i]
  }
  return newString;
}
solution('hello')
//Задача 3
function sum (numbers) {
  "use strict";
  let sum=0;
for (let i=0; i< numbers.length; i++)
  sum+=numbers[i]
  return sum;
};
//Задача 4
function past(h, m, s){
  const convertHours = h * 60 * 60 * 1000;
 const convertMinutes = m * 60 * 1000;
 const convertSeconds = s * 1000;
 return convertHours + convertMinutes + convertSeconds;
 }
