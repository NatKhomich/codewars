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
