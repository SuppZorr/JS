// 1) На заводе выпускаются автомобили со следующими конфигурациями: -цвет кузова: желтый, зеленый, красный, синий, оранжевый; -коробка передач: автоматическая, ручная; -кондиционер: установлен, отсутствует; -отделка салона: кожа, ткань, комбинированная. Задача: описать в объекте все возможные конфигурации автомобилей, при этом на каждой конфигурации указать код формата: XXXXYZWV, где: XXXX- порядковый номер конфигурации, Y- цвет кузова, Z-коробка передач, W- кондиционер, V-отделка салона. Готовый набранный объект не принимаю, только код, который создаёт этот объект. 
// 2) Есть массив ["1", "2", "3", "4", "5", "6", "7", "8", "9"]. Задание: за один проход (т.е. к каждой ячейке мы обращаемся один раз) по массиву получить другой массив вида: ["1", "4", "7", "2", "5", "8", "3", "6", "9"].
// 3) То же, что в уровне 2, но с любой длиной массива. 
// 4) То же, что в уровне 3, но с любой кратностью сдвига.
// ["1", "2", "3", "4", "5", "6", "7", "8", "9"]  сдвиг на i+2
// ["1", "4", "7", "2", "5", "8", "3", "6", "9"]




// const allConfigurations = {                   
//     color : {
//         Y : "yellow",  0
//         G : "green",   1
//         R : "red",    2
//         B : "blue",    3
//         O : "orange",   4
//     },
//     transmission : {
//         A : "automatic",   0
//         M : "manual",   1
//     },
//     conditioner : {
//         I : "installed",  0
//         U : "uninstalled",   1
//     },
//     interior : {
//         L : "leather",   0
//         T : "textile",   1
//         C : "combined",    2

//     }
// };

 

// 0001GMUT
// 0002YAIC


// XXXX     0112


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let arr = [];
let item = null;

for (i=0; i<500; i++) {
     
     let x = randomInteger(0,4);
     let y = randomInteger(0,1);
     let z = randomInteger(0,1);
     let w = randomInteger(0,2);

    if (x==0) {
        x='Y'
    }
    else if (x==1){
        x='G'
    }
    else if (x==2){
        x='R'
    }
    else if (x==3){ 
        x='B'
    }
    else x='O';

    if (y==0) {
        y='A'
    }
    else y='M';

    if (z==0){
        z='I'
    }
    else z='U';

    if (w==0) {
        w='L'
    }
    else if (w==1){
        w='T'
    }
    else w='C';

            
                item = `${x}${y}${z}${w}`;
                 
                arr.indexOf(item) == -1 ?   arr.push(item) :   arr;
                 
       
                
};

arr.sort();
// console.log(arr);

 

let models = [];
const configList = {};

// тут мы делаем комбинации 0000 - 9999 
for (i = 0 ; i< arr.length ; i++) {                              
    if  (String(i).length < 2) {
        models[i] = `config_000${i}${arr[i]}`;
       
    }
    else  {
        models[i] = `config_00${i}${arr[i]}`;
    }
    
};

 
// console.log(models); 
 

 
for (i = 0 ; i< models.length ; i++) { 
    
    configList[models[i]] = {
        color : "",
        transmission : "",
        conditioner : "",
        interior : "",
        
    };

     

    let elem = models[i];

   if (elem[11] == 'B') {
    configList[models[i]].color = 'blue'
   }
   else if (elem[11] == 'G') {
    configList[models[i]].color = 'green'
   }
   else if (elem[11] == 'R') {
    configList[models[i]].color = 'red'
   }
   else if (elem[11] == 'O') {
    configList[models[i]].color = 'orange'
   }
   else   {
    configList[models[i]].color = 'yellow'
   };

   if (elem[12] == "A") {
   configList[models[i]].transmission = 'automatic'
   }
   else {
    configList[models[i]].transmission = 'manual'
    };

    if (elem[13] == "I") {
    configList[models[i]].conditioner = 'installed'
    }
    else {
    configList[models[i]].conditioner = 'uninstalled'
    };

    if (elem[14] == "L") {
    configList[models[i]].interior = 'leather'
    }
    else if (elem[14] == "T") {
    configList[models[i]].interior = 'textile'
    }
    else  {
        configList[models[i]].interior = 'combined'
        }

};

 
console.log(configList);

 
 












 