//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (el) => { 
  const digArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrFrStr = el.replaceAll(' ', '').split('');
  console.log('arrFrStr', arrFrStr)
  let notDig = false;
  for (let el of arrFrStr) {
    if (digArr.includes(el)) {
      notDig = true
    }
  }
  console.log('notdig', notDig)
  if(arrFrStr.length <= 1 || notDig){
    return false
  }
  for (let i = arrFrStr.length - 2; i >= 0; i -= 2) {
    if (arrFrStr[i] * 2 > 9) {
      arrFrStr[i] = arrFrStr[i] * 2 - 9;
    } else {
      arrFrStr[i] *= 2;
    }
  }
  const res = arrFrStr.map(el => Number(el)).reduce((acc, curr) => acc + curr, 0);
  if (res % 10 === 0) {
    return true;
  } else {
    return false;
  }

};

console.log('function', valid('091'))
