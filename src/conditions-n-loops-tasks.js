/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const max = a > b ? a : b;
  return max > c ? max : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;

  let captureX = queen.x;
  let captureY = queen.y;
  const captureArr = [];

  while (captureX > 1 && captureY > 1) {
    captureX -= 1;
    captureY -= 1;
    captureArr.push([captureX, captureY]);
  }

  captureX = queen.x;
  captureY = queen.y;

  while (captureX < 8 && captureY < 8) {
    captureX += 1;
    captureY += 1;
    captureArr.push([captureX, captureY]);
  }

  captureX = queen.x;
  captureY = queen.y;

  while (captureX > 1 && captureY < 8) {
    captureX -= 1;
    captureY += 1;
    captureArr.push([captureX, captureY]);
  }

  captureX = queen.x;
  captureY = queen.y;

  while (captureX < 8 && captureY > 1) {
    captureX += 1;
    captureY -= 1;
    captureArr.push([captureX, captureY]);
  }

  function isIncludes(arr1, arr2) {
    let res = false;
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i][0] === arr2[0] && arr1[i][1] === arr2[1]) {
        res = true;
        break;
      }
    }
    return res;
  }

  return isIncludes(captureArr, [king.x, king.y]);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) return false;

  return a === b || b === c || c === a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tens = Math.floor(num / 10);
  const units = num % 10;
  let res = '';
  for (let i = 0; i < tens; i += 1) {
    res += 'X';
  }

  const numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return units ? res + numbers[units - 1] : res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const current = numberStr[i];

    switch (current) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '-':
        res += 'minus';
        break;
      default:
        res += 'point';
    }

    if (i !== numberStr.length - 1) res += ' ';
  }

  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isPalind = true;

  for (let i = 0; i <= Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalind = false;
      break;
    }
  }

  return isPalind;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }

  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isContain = false;
  let currNum = num;

  while (currNum > 0) {
    const lastDigit = currNum % 10;
    currNum = Math.floor(currNum / 10);

    if (lastDigit === digit) {
      isContain = true;
      break;
    }
  }

  return isContain;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = [];
  let num = 0;
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  for (let i = 0; i < size; i += 1) {
    res[i] = [];
  }

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i += 1) {
      num += 1;
      res[rowStart][i] = num;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      num += 1;
      res[i][colEnd] = num;
    }
    colEnd -= 1;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i -= 1) {
        num += 1;
        res[rowEnd][i] = num;
      }
      rowEnd -= 1;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i -= 1) {
        num += 1;
        res[i][colStart] = num;
      }
      colStart += 1;
    }
  }

  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyArr = [];
  const mArr = matrix;
  let rowIndex;

  for (let i = 0; i < matrix.length; i += 1) {
    copyArr[i] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      copyArr[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    rowIndex = matrix.length - 1;
    for (let j = 0; j < matrix.length; j += 1) {
      mArr[i][j] = copyArr[rowIndex][i];
      rowIndex -= 1;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function changeEl(arrProps, i, j) {
    const tempArr = arrProps;
    const temp = tempArr[i];
    tempArr[i] = tempArr[j];
    tempArr[j] = temp;
  }

  function quickSort(arrProps, left, right) {
    if (left < right) {
      const base = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j += 1) {
        if (arr[j] <= base) {
          i += 1;
          changeEl(arr, i, j);
        }
      }

      changeEl(arrProps, i + 1, right);
      const baseIndex = i + 1;

      quickSort(arrProps, left, baseIndex - 1);
      quickSort(arrProps, baseIndex + 1, right);
    }
  }

  const n = arr.length;
  quickSort(arr, 0, n - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let currIter = 1;
  const leng = str.length;
  const cash = [str];

  function shuffle(currStr) {
    let even = currStr[0];
    let odd = currStr[1];

    for (let i = 2; i < leng; i += 1) {
      if (i % 2 === 0) {
        even += currStr[i];
      } else {
        odd += currStr[i];
      }
    }
    const resStr = even + odd;
    if (resStr !== str) {
      cash[currIter] = resStr;
      currIter += 1;
      shuffle(even + odd);
    }
  }

  shuffle(str);

  const n = iterations % currIter;

  return cash[n];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *2-1,3-2, 4-2, 5-4, 6-4, 7-3, 8-3, 9-6, 10-6, 11-10,
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let tempNum = number;
  const arr = [];
  let place;

  function sliceArray(array, indexStart, indexEnd = array.length) {
    const subArr = [];
    for (let i = indexStart; i < indexEnd; i += 1) {
      subArr.push(array[i]);
    }
    return subArr;
  }

  while (tempNum > 0) {
    const digitLast = tempNum % 10;
    tempNum = (tempNum - digitLast) / 10;
    arr.unshift(digitLast);
  }

  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      place = i - 1;
      break;
    }
  }

  if (!place) return number;

  const restArr = sliceArray(arr, place + 1).sort((a, b) => a - b);
  let i = 0;

  while (restArr[i] <= arr[place]) {
    i += 1;
  }

  const minInRest = restArr[i];
  restArr.splice(i, 1, arr[place]);

  arr[place] = minInRest;

  const partStart = sliceArray(arr, 0, place + 1);
  const rest = restArr.sort((a, b) => a - b);

  const res = Number(partStart.join('') + rest.join(''));

  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
