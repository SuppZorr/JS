//1) Сгенерируй 2м массив, константа сторона поля, например, равна 5.

const size = 5;
let arr = [];

for (i=0;i<size;i++) {
    arr[i] = [];
    for (j=0;j<size;j++) {
        arr[i][j] = i+j;
    }
 
};
console.log(arr);


// 2) напиши функцию очистки массива, заполнить null
 
const arrOfNulls = arr.map((item, index) =>{
    return arr[index].map(() => {
        return null;
    });
});
console.log(arrOfNulls);
 
arrOfNulls[1][2] = 3;
arrOfNulls[1][3] = 3;

 
// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве


const arrNonEmptyCounter = () => { 
    let count = 0;
    arrOfNulls.forEach(item => {
        item.forEach(item2 => {
            if (item2 !== ""  &&  item2 !== null) {
             count = count + 1;
            }
     } )
    });
    return count;
};
console.log(arrNonEmptyCounter())


// 4) отобрази на странице игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.


const gameBoard = document.querySelector('.main');
const statusBar = document.querySelector('.status');

statusBar.innerHTML = `non empty cells: ${arrNonEmptyCounter()}`;


arrOfNulls.forEach(item => {
    item.forEach(elem => {
        if   (elem !== ""  &&  elem !== null) {
        gameBoard.innerHTML = gameBoard.innerHTML + `<div class="cell"> ${elem} </div>`  
        }
        else {
            gameBoard.innerHTML = gameBoard.innerHTML + `<div class="cell"></div>`
        }
    })
    
});