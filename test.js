var arr1 = [1,3,5,11];
var arr2 = [2,6,7];
function getResult(arr1, arr2, k) {
  var resArr = [];
  var arr1Index = 0;
  var arr2Index = 0;
  var length1 = arr1.length;
  var length2 = arr2.length;
  for(; arr1Index < length1 || arr2Index < length2;) {
    var arr1Value = arr1[arr1Index] || Infinity;
    var arr2Value = arr2[arr2Index] || Infinity;
    if(arr1Value <= arr2Value) {
      resArr.push(arr1[arr1Index]);
      arr1Index++;
    }else {
      resArr.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  console.log('resArr:', resArr);
  return resArr[k - 1]
}
console.log('res:', getResult(arr1, arr2, 5));


/**
 * 
 * 
 * 排列组合
 */
function sequeneSort(n, k) {
  var resArr = [];
  var indexArr = [];
  for(var i = 0; i < n; i++) {
    indexArr.push(i + 1);
  }

  function factorial(m) {
    if(m === 1 || m === 0) {
      return 1;
    }
    return m * factorial(m - 1);
  }
  function deleteArrayElement(arr, item) {
    arr.splice(arr.indexOf(item), 1);
  }

  var leftK = k - 1;

  for(var i = 0; i < n; i++) {
    console.log('商:', leftK, factorial(n - i - 1));
    var index = Math.floor(leftK / factorial(n - i - 1)) + indexArr[0];
    resArr[i] = index;
    deleteArrayElement(indexArr, index);
    console.log('indexArr:', indexArr);
    leftK = leftK % factorial(n - i - 1);
  }
  return resArr;
}

var res = sequeneSort(4,3);
console.log(res);

/** 
 * 生成矩阵
*/
function GenerateMatrix(m, n) {
  var resArr = [];
  for(var i = 0; i < m; i++) {
    resArr[i] = [];
  }
  var total = m + n - 2;
  index = 1;
  var max = m > n ? m : n;
  for(var i = 0; i <= total; i++) {
    // j is n index
    for(j = 0; j < n; j++) {
      // k is m index
      var k = i - j;
      if((j >= 0 && j < n) && (k >= 0 && k < m)) {
        resArr[k][j] = index;
        index++;
      }
    }
  }

  return resArr;
}
console.log(GenerateMatrix(3,4));

// 8皇后
let count = 0;
var solveNQueens = function (n) {
  const res = [];
  var backtrack = (n, preBlock = [], r = 0) => {

      if (r === n) {
          res.push(preBlock.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
          count++;
          return;
      }
      for (let c = 0; c < n; c++) {
          if (!preBlock.some((j, k) => j === c || j - c === r - k || j - c === k - r)) {
              preBlock.push(c);
              backtrack(n, preBlock, r + 1);
              preBlock.pop();
          }
      }
  }
  backtrack(n)

  return res;
};