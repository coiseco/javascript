//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const bestHands = (hands) => {
  //копирую массив
  let lettersToDigs = hands.slice()
  let valuesArr = []
  let gradeArr = []
  //в цикле прохожусь по каждому элементу массива и разделяю его на сет мастей и массив значенй карт
  //при этом заменяю буквенные значения на циферные
  for(let i = 0; i < lettersToDigs.length; i++){
      let stringElementToArr = lettersToDigs[i].split(' ')
      let sutes = new Set()
      let cardValues = []
      for(let el = 0; el < stringElementToArr.length; el++){
        let element = stringElementToArr[el]
        sutes.add(element[element.length - 1])
        if(element.length === 3){
            cardValues.push(element.slice(0,2))    
        } else{
            if(element[0] === 'J'){
                cardValues.push('11')
            } else if(element[0] === 'Q'){
                cardValues.push('12')
            } else if(element[0] === 'K'){
                cardValues.push('13')
            } else if(element[0] === 'A'){
                cardValues.push('14')
            }  else {
                cardValues.push(element[0])
            }
        }
        
        
    }
    //заменяю буквенное значение туза на цифру: если не стрит - тогда 14, если стрит от 5 - тода 1
    cardValues = cardValues.sort((a, b) => Number(b) - Number(a));
    let stritFromTuz = '145432'
    if(cardValues.join('') === stritFromTuz){
        cardValues[cardValues.indexOf('14')] = '1'
        cardValues = cardValues.sort((a, b) => Number(b) - Number(a));
    } 
    valuesArr.push(cardValues)
      //вычисляю комбинацию, если масть одна
      if(sutes.size === 1){
          let fleshRoyal = cardValues.join(' ') === '14 13 12 11 10'? true:false
          let arrToNumber = cardValues.map(el => Number(el))
          let stritFlash = arrToNumber.filter((num,index) => {
              if(index === 0) return true
              return num === arrToNumber[index - 1] - 1
          })
          if(fleshRoyal){
              gradeArr.push(10)
          } else if(stritFlash.length === 5){
              gradeArr.push(9)
          } else {
              gradeArr.push(6)
          }
      } else {
        let arrToNumber = cardValues.map(el => Number(el))
          let strit = arrToNumber.filter((num,index) => {
              if(index === 0) return true
              return num === arrToNumber[index - 1] - 1
          })
          let combArr = [];
          let n = 0;
          let number = 0
          while (n < 5 && cardValues.length > 0) {
              let current = cardValues[0]; // Берём первый элемент
              let counter = 0;
  
              // Фильтруем массив, подсчитывая текущий элемент
              cardValues = cardValues.filter(item => {
                  if (item === current) {
                      counter++;
                      if (counter > 1){
                        console.log('счётчик', counter)
                      if(number === 0){
                        number = item
                      }
                      } if(counter >= 3){
                        number = item
                      }
                      return false; // Удаляем элемент
                  }
                  return true; // Оставляем другие элементы
              });
              
              if (counter > 1) {
                  combArr.push(counter);
              }
              n++;
          }
          let doper = new Set(combArr)
          
          if(strit.length === 5){
              gradeArr.push(5)
          } else if(combArr.length === 1 && combArr[0] === 3){
              gradeArr.push(4 + (number/10))
          } else if(combArr.length === 1 && combArr[0] === 4){
              gradeArr.push(8 + (number/10))
          } else if(combArr.length === 1 && combArr[0] === 2){
              gradeArr.push(2 + (number/10))
          } else if(combArr.length > 1 && doper.size === 1){
              gradeArr.push(3 + (number/10))
          } else if(combArr.length > 1 && doper.size > 1){
              gradeArr.push(7 + (number/10))
          } else {
              gradeArr.push(1)
          }
      }
  }
  //тут ищу самое большое число в массиве результатов, если их несколько, записывая индексы этих подмассивов в массив
  console.log('gradeArr',gradeArr)
  let biggestHand = 0
  let indexOfWinners = []
  let arr = []
  for(let iterator = 0; iterator < gradeArr.length; iterator++){
      if(gradeArr[iterator] > biggestHand){
          biggestHand = gradeArr[iterator]
          indexOfWinners[0] = iterator
      } else if(biggestHand === gradeArr[iterator]){
          indexOfWinners.push(iterator) 
      }
  }
  if(indexOfWinners.length === 1){
      return [lettersToDigs[indexOfWinners[0]]]
  } else {
      //копируем массив, вставляем вместо цены комбинации сами комбинации и фильтруем в порядке убывания
      let arrForCompare = [...indexOfWinners].map(el => valuesArr[el])
      let filteredArrToCompare = arrForCompare.map(subArray => 
          subArray.sort((a, b) => Number(b) - Number(a))
        );
      let filtered = filteredArrToCompare
      let indexOfArr = 0; // Текущий индекс элемента для сравнения (0..4)

      // Пока есть несколько кандидатов и не сравнили все 5 элементов
      while (filtered.length > 1 && indexOfArr < 5) {
          console.log('filtered', filtered)
          const currentMax = Math.max(...filtered.map(sub => sub[indexOfArr]));
          filtered = filtered.filter(sub => sub[indexOfArr] == currentMax);
          indexOfArr++;
          
      }

      // Если все оставшиеся подмассивы идентичны — возвращаем все
      if (filtered.length > 1 && filtered.every(sub => JSON.stringify(sub) === JSON.stringify(filtered[0]))) {
          return filtered.map(f => lettersToDigs[arrForCompare.indexOf(f)]);
      }else {
          return [lettersToDigs[arrForCompare.indexOf(filtered[0])]];
      }

  }

}


console.log(bestHands(['2S 2H 2C 8D JH', '4S AH AS 8C AD']))

console.log('work')
