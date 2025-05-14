//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  let i = 0
  let resArr = []
  let counter = 0
  const arrBiggestLength = Math.max(...arr.map(el => el.length))
  while (counter < arrBiggestLength){
    resArr[i] = ``
    for (let el = 0; el < arr.length; el++){
      if(arr[el][0] === undefined){
        resArr[i] += `*`
      } else {
        resArr[i] += `${arr[el][0]}`
      }
      arr[el] = arr[el].slice(1)
      
    }
    i++
    counter ++
  }

  for (let i = 0; i < resArr.length; i++){
    while(resArr[i].length > 0 && resArr[i][resArr[i].length -1] === `*`){
      resArr[i] =  resArr[i].slice(0,-1)
    }
    while(resArr[i].includes(`*`)){
      resArr[i] = resArr[i].replace(`*`, ` `)
    }
    
  }

  return resArr
};

