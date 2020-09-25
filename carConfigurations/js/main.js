// 1) На заводе выпускаются автомобили со следующими конфигурациями: -цвет кузова: желтый, зеленый, красный, синий, оранжевый; -коробка передач: автоматическая, ручная; -кондиционер: установлен, отсутствует; -отделка салона: кожа, ткань, комбинированная. Задача: описать в объекте все возможные конфигурации автомобилей, при этом на каждой конфигурации указать код формата: XXXXYZWV, где: XXXX- порядковый номер конфигурации, Y- цвет кузова, Z-коробка передач, W- кондиционер, V-отделка салона. Готовый набранный объект не принимаю, только код, который создаёт этот объект. 
// 2) Есть массив ["1", "2", "3", "4", "5", "6", "7", "8", "9"]. Задание: за один проход (т.е. к каждой ячейке мы обращаемся один раз) по массиву получить другой массив вида: ["1", "4", "7", "2", "5", "8", "3", "6", "9"].
// 3) То же, что в уровне 2, но с любой длиной массива. 
// 4) То же, что в уровне 3, но с любой кратностью сдвига.
// ["1", "2", "3", "4", "5", "6", "7", "8", "9"]  сдвиг на i+2
// ["1", "4", "7", "2", "5", "8", "3", "6", "9"]

 
// 0001GMUT
// 0002YAIC


// XXXX     0112


 

 
let i = 0;

let mainArr = [];
let colorArr = ['yellow','green','red','blue','orange'];
let transmissionArr = ['automatic','manual'];
let conditionerArr = ['installed','uninstalled'];
let interiorArr = ['leather','textile','combined'];

for (let colorIndex = 0; colorIndex < colorArr.length; colorIndex++) {
    for (let transmissionIndex = 0; transmissionIndex < transmissionArr.length; transmissionIndex++) {
      for (let conditionerIndex = 0; conditionerIndex < conditionerArr.length; conditionerIndex++) {
        for (let interiorIndex = 0; interiorIndex < interiorArr.length; interiorIndex++) {
          mainArr.push({
            code: (`${i}${(colorArr[colorIndex][0]).toUpperCase()}${(transmissionArr[transmissionIndex][0]).toUpperCase()}${(conditionerArr[conditionerIndex][0]).toUpperCase()}${(interiorArr[interiorIndex][0]).toUpperCase()}`).padStart(8, "0"),
            color:  colorArr[colorIndex],
            transmission:  transmissionArr[transmissionIndex],
            conditioner: conditionerArr[conditionerIndex],
            interior: interiorArr[interiorIndex],
          });
          i++;
        }
      }
    }
  }


console.log(mainArr)







 
 
 
 












 