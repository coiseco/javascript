//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (el) => {
  const string = el.replace(/\s/g, '');
  if (string.match(/[^0-9]/g) || string.length <= 1) {
    return false;
  }
  const arrFrStr = string.split('');
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
