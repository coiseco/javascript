//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string,reik) => {
  let newString = ''
  let evenOddCounter = 2
  let iterationCounter = 1
    for(let i = 0;i < string.length; i+=(reik*2) - 2 ){
      newString+=(`${string[i]}`)
    }
    let n = iterationCounter
    let q = 4
    let h = 2
    while(iterationCounter < reik - 1){

    for(let i = iterationCounter; i < string.length; i+=n){
      if(evenOddCounter === 2){
        newString+=(`${string[i]}`)
        n=reik*2 - q
        evenOddCounter--
      } else {
        newString+=(`${string[i]}`)
        n=h
        evenOddCounter++
      }
    }
    q+=2
    h+=2
    iterationCounter++
    evenOddCounter = 2
    }
    for(let i = reik - 1;i < string.length; i+=(reik*2) - 2 ){
      newString+=(`${string[i]}`)
    }
  return newString
};




export const decode = (phraze, rails) => {
  let firstRailDistanceValue = rails*2 - 2
  let resString = ``
  let iterationCounter = 0
  let firstRailAmount = 0
  let lastRailAmount = 0
  let arr = []
  for(let i = 0; i < phraze.length;i+=firstRailDistanceValue){
    firstRailAmount++
  }
  for(let i = phraze.length - (rails-1); i > 0 ;i-=firstRailDistanceValue){
    lastRailAmount++
  }

  arr.push(phraze.substring(0,firstRailAmount))
  let centrPhraze = phraze.substring(firstRailAmount,phraze.length - lastRailAmount).split('')
  let piece = centrPhraze.length   / (rails - 2)
  let iterator = 0
  while(iterator <= rails - 2){
    let data = centrPhraze.splice(0,piece).join('') 
    if(data.length > 0) {
      arr.push(data)
    }
    iterator++
  }
  arr.push(phraze.substring(phraze.length,phraze.length - lastRailAmount))
  while(arr.length > 1){
    if(iterationCounter === 0){
      for(let i = 0; i < arr.length-1; i++){
        if(arr[i] && arr[i].length > 0) {
          resString += arr[i][0];
          arr[i] = arr[i].substring(1);
        }
      }  
      iterationCounter++
    } else {
      for(let i = arr.length - 1; i >= 1; i--){
        if(arr[i] && arr[i].length > 0) {
          resString += arr[i][0];
          arr[i] = arr[i].substring(1);
        }
      }  
      iterationCounter--
    }

    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === "") {
        arr.splice(i, 1);
      }
    }
  }
  resString+=arr[0]

  return resString
}

