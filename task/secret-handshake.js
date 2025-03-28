export const commands = (dig) => {
  let actions = ['jump', 'close your eyes', 'double blink', 'wink']
  let resArr =[]
  let digTo2 = ``
  for(let i = dig; i >= 1; i = i / 2){
    if(Math.floor(i%2) === 0){
      digTo2 += `0`
    } else {
      digTo2 += `1`
    }
  }
  digTo2 = digTo2.split('').reverse().join('')
  let arrCounter = 3
  for (let i = digTo2.length - 1; i >= 0; i--){
      if(digTo2[i] === '1') {
        resArr.push(actions[arrCounter])
      }
    
    arrCounter --
  }
  if(digTo2.length === 5){
     resArr.pop()
     return resArr.reverse()

  } else {
    return resArr
  }
  
};


