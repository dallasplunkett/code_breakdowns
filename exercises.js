/* -----[ Looping A Triangle ]----- */
function triangle(width) {
  var hash = '#';
  for (var i = 0; i < width; i++) {
    console.log(hash);
    hash = hash + '#';
  }
}

triangle(4);
// #
// ##
// ###
// ####





/* -----[ FizzBuzz ]----- */
function fizzBuzz(count) {
  for (var i = 1; i <= count; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log('Fizz');
      }
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz





/* -----[ Chess Board ]----- */
function chessBoard(size) {
  var string = '';
  var space = ' ';
  var hash = '#';
  var newLine = '\n';

  for (var i = 0; i < size; i++) {
    for (var f = 0; f < (size / 2); f++) {
      if (i % 2 === 0) {
        string = string + space;
        string = string + hash;
      } else {
        string = string + hash;
        string = string + space;
      }
    }
    string = string + newLine;
  }
  console.log(string);
}

chessBoard(6);
//  # # #
// # # #
//  # # #
// # # #
//  # # #
// # # #





/* -----[ Minimum ]----- */
function myMin(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 === num2) {
    return num1
  } else {
    return num2
  }
}

myMin(2,4);
// 2





/* -----[ Recursion ]----- */
function isEven(number) {
  if (number === 0) {
    return true;
  } if (number === 1) {
    return false;
  } else { // otherwise redo the func
    return isEven(number - 2);
  }
}

isEven(10);     isEven(5);
// true         // false





/* -----[ Bean Counting ]----- */
function countLetters(string, letter) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    var current = string.charAt(i);
    if (current === letter) {
      count++;
    }
  }
  console.log(count);
}

countLetters( 'Dallas', 'a' );
// 2





/* -----[ The Sum Of A Range ]----- */
function range(start, end, step) {
  var array = [];
  if (step === undefined) { // step arg? no
    if (start < end) { // is start smaller than end?
      for (var i = start; i <= end; i++) { // increment up
        array.push(i); // push number
      }
    } else { // otherwise start is bigger so...
      for (var a = start; a >= end; a--) { // decement down
        array.push(a); // push number
      }
    }
  } else { // step arg? yes
    if (start < end) { // is start smaller than end?
      for (var f = start; f <= end; f = f + step) { // step up
        array.push(f); // push number
      }
    } else { // otherwise start is bigger so...
      for (var v = start; v >= end; v = v - step) { // step down
        array.push(v); // push number
      }
    }
  }
  return array;
}

range( 0,10,2 );
// [0, 2, 4, 6, 8, 10]


function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

sum( [1,2,3] );
// 6





/* -----[ Reversing An Array ]----- */
function reverseArray(array) {
  var newArray = [];
  var item;
  for (var i = 0; i < array.length;) {
    item = array.pop();
    newArray.push(item);
  }
  return newArray;
}

reverseArray( [1,2,3] );
// [3,2,1]


function reverseArrayInPlace(array) {
  var i = 0;
  while (i < array.length - 1) {
    array.splice(i, 0, array.pop());
    i++;
  }
  return array;
}

reverseArrayInPlace( [1,2,3] );
// [3,2,1]





/* -----[ A List ]----- */
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

arrayToList( [1,2,3] );
// {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }


function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

listToArray( arrayToList([1,2,3]) );
// [1, 2, 3]


function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
}

prepend( 10, prepend(20, null) );
// {
//    value: 10,
//    rest: {
//      value: 20,
//      rest: null
//    }
// }


function nth(list, number) {
  if (!list) {
    return undefined;
  } else if (number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}

nth( arrayToList([10,20,30]), 1 );
// 20





/*-----[ Deep Comparison ]-----*/
function deepEqual(x, y) {
  if (x === y) return true;

  if (x === null || typeof x !== "object" ||
      y === null || typeof y !== "object")
      return false;

  var propsInX = 0, propsInY = 0;

  for (var prop in x) {
    propsInX += 1;
  }

  for (var prop in y) {
    propsInY += 1;
    if (!(prop in x) || !deepEqual(x[prop], y[prop])) {
      return false;
    }
  }

  return propsInX === propsInY;
}
