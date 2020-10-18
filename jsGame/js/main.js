//1) Сгенерируй 2м массив, константа сторона поля, например, равна 5.

const size = 5;
let arr = [];

for (i=0;i<size;i++) {
    arr[i] = [];
    for (j=0;j<size;j++) {
        arr[i][j] = i+j;
    }
 
};
 


// 2) напиши функцию очистки массива, заполнить null
 
const clear = () => {
    arr = arr.map( (item,index) => {
          return arr[index].map(elem => {
         return null;
         })
    })

    
};
   
clear();
 
 
 

 
// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве


const arrNonEmptyCounter = () => { 
    let count = 0;
    arr.forEach(item => {
        item.forEach(item2 => {
            if ( item2 !== null) {
             count = count + 1;
            }
     } )
    });
    return count;
};
 


// 4) отобрази на странице игровое поле(клетки массива) и строку статуса, в которой будет написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.


const gameBoard = document.querySelector('.main');
const statusBar = document.querySelector('.status');







const renderPage = () => {

    let str = "";

    arr.forEach(item => {
     item.forEach(elem => {
        if   (elem !== ""  &&  elem !== null) {
            str = str + `<div class="cell"> ${elem} </div>`  
        }
        else {
            str = str + `<div class="cell"></div>`
        }
        })
    
        gameBoard.innerHTML = str;

    });

    const cells = document.querySelectorAll('.cell');
    console.log(cells)

    for (i=0; i<cells.length; i++) {
        if (cells[i].innerText === "1" ) {
        cells[i].classList.add("blue") 
        }
        else if (cells[i].innerText === "2" ) {
            cells[i].classList.add("yellow") 
        };
    };  
};


renderPage();

arr[0][0] = 1;

renderPage();
statusBar.innerHTML = `non empty cells: ${arrNonEmptyCounter()}`;

// 5) покажи на странице 4 html кнопки-стрелки: "вверх", "вниз", "влево", "вправо"

const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');





// 6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом. Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null; 













let startPos = [0,0];







console.log(startPos);
 
let traceCells = [];
 
 
 
const moveCell = (x,y) => {
    traceCells.push(startPos);

    clear();
 
    startPos = [(startPos[0]+x),(startPos[1]+y)];

    if (startPos[0]<0) {starPos[0]=0}
    else if (startPos[1]<0) {startPos[1]=0}
    else if (startPos[0]>4) {startPos[0]=4}
    else if (startPos[1]>4) {startPos[1]=4};




    arr[startPos[0]][startPos[1]] = 1;
 
    for (i=0;i<traceCells.length;i++) {                   
        let a = traceCells[i];

        arr[a[0]][a[1]] = 2;
    }


    console.log(traceCells);
    console.log(arr);
    renderPage();
    statusBar.innerHTML = `non empty cells: ${arrNonEmptyCounter()}`;

     
 
 
};

const moveDown = () => {
 moveCell(1,0)
};
 
const moveRight = () => {
 moveCell(0,1)
};

const moveUp = () => {
    moveCell(-1,0)
};
 
const moveLeft = () => {
    moveCell(0,-1)
};
 
 
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

document.addEventListener("keydown", handleKeyboard);

function handleKeyboard(t) {
    t = t || window.event;
    switch (t.keycode) {
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
    }
}

 // 7) на игровом поле сделать отображение следа на клетках после курсора оранжевым цветом. В соответствующих ячейках массива где след писать "2". След весь от начала игры.


 // 8) сделай отключение соответствующих кнопок управления, если курсор с краю поля или наступает на свой след.

    

// 9) сделай обработку ситуации GAME OVER, когда нет куда ходить, отобразить на странице надпись GAME OVER
// 10) добавь таймер на 10 секунд, если не сделал ход, GAME OVER