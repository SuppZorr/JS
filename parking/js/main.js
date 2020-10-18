// Фронтенд парковки. Сколько сделаете пунктов, столько и сдаёте до занятия в пятницу. 
// 1) Сгенерировать массив паркомест. Количество задано в константе SPACES. 
// Каждое паркоместо имеет свойства: id, occupied, time
// 2) Функция подсчета количества занятых и свободных паркомест
// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 
// Важно. Для работы со временем используйте библиотеку Moment. 
// 4) Также на странице отобразить время из переменной currentTime.
// 5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в котором нужно ввести время занимания парковки.
// При нажатии "ОК" парковка занимается. 
// 6) Если нажать на занятой парковке, то появляется модальное окно "освободить парковку? Да/Нет. Время занимания паркоместа: столько-то".
// 7) При нажатии на пустой парковке, если количество свободных паркомест меньше 20% от всех и при этом время занимания больше 9:00 и меньше 18:00, то в модальном окне порекомендовать не занимать паркоместо.


 

 
const SPACES = 10;

let parkingSlots = [];


function slot(id,freeOrNot,timer) {
    this.id = id;
    this.freeOrNot = freeOrNot;
    this.timer = timer;
     
};

for (i=1;i<SPACES+1;i++) {
    parkingSlots.push(new slot(i,true,null))
     
    
};
console.log(parkingSlots);

 

 // 2) Функция подсчета количества занятых и свободных паркомест

// let freeSlots = 0;
// let occupiedSlots = 0;

//  const slotsChecker = () => {
  


//    for (i=0;i<parkingSlots.length;i++) {
//      let a = parkingSlots[i];
//      if (a.freeOrNot === "free") {
//       freeSlots = freeSlots+1;
//      }
//      else occupiedSlots = occupiedSlots +1;
//    }
//  }

//  slotsChecker();

//  console.log(freeSlots);
//  console.log(occupiedSlots)


let slotsFree = (arr) => {
  let temp = 0;
  arr.forEach(element => {
    if (element.freeOrNot) temp++;
    
  });
  return temp;
};

console.log(slotsFree(parkingSlots))

let slotsNotFree = (arr) => {
  let temp = 0;
  arr.forEach(element => {
    if (!element.freeOrNot) temp++;
    
  });
  return temp;
};

console.log(slotsNotFree(parkingSlots))
// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 
// Важно. Для работы со временем используйте библиотеку Moment. 

let parking = document.querySelector('.parking')

let str = "";

for (i=0;i<SPACES;i++){
   
  str = str + `<div class="park"> Slot number: ${parkingSlots[i].id} <br> Slot status: ${parkingSlots[i].freeOrNot} <br> Slot time:${parkingSlots[i].timer}</div>`;
}

parking.innerHTML = str;
 


// 4) Также на странице отобразить время из переменной currentTime.

const clock = document.querySelector('.clock');

const time = New.time

 
 
 
 












 