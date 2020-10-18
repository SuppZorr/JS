
const boardWidth = 8;
const boardHeight = 8;
const cardsNominals = 10;
const cardType1 = [];
const cardType2 = [];
const cardType3 = [];
let cardDeck = [];

let gameBoard  = [];




// создаем массив 8х8 = игровое поле. в каждой ячейке 2 значения: 1 = картинка , 2 = поворот картинки

for (i=0;i<boardHeight;i++) {
    gameBoard[i] = [];
    for (j=0;j<boardWidth;j++) {
        gameBoard[i][j] = [0, 0];
    }
};

 


// генерируем 3 колоды карт

const cardGen = (arr,x) => {
    for (i=0;i<cardsNominals;i++) {
        arr[i] = x;
    }
};

cardGen(cardType1,1);
cardGen(cardType2,2);
cardGen(cardType3,3);

 

//перетасовываем 3 колоды карт в 1 массив cardDeck

const cardShuffle = (a,b,c) => {
    let temp = []
    temp.push(a);
    temp.push(b);
    temp.push(c);
    cardDeck = temp.flat();

    for (let i = cardDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
      
          
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
    };
}

cardShuffle(cardType1,cardType2,cardType3);
 



// делаем счетчик оставшихся карт в колоде
let leftEl = document.querySelector('.left');

const cardsLeft = () => {
   let x = cardDeck.length;
   return x;
};


// рисуем доску дивов 8х8 на основе массива gameBoard

let gameBoardEl = document.querySelector('.main');

let cells;


const displayBoard = () => {

    let str = "";

    
    gameBoard.forEach((item,i) => {
     item.forEach((elem,index) => {
         
            str = str + `<div class="cell" id="${i}${index}">${elem}</div>` ;
            
        })
        
    });


    
    gameBoardEl.innerHTML = str;

     cells = document.querySelectorAll('.cell');

     cells.forEach(elem => {
        let z = elem.innerHTML.split(",")
        let x = Number(z[0]);
        let y;

        if ( Number(z[1])<4) {
            y = Number(z[1])
        }
        else  {
            y = Number(z[1])% 4
            
        }
 

        
         switch (x) {
            case 1:
                elem.classList.add("pic0");
                break;
            case 2:
                elem.classList.add("pic1");
                break;
            case 3:
                elem.classList.add("pic2");
                break;
            };

            switch (y) {
                case 1:
                    elem.classList.add("turn90");
                    break;
                case 2:
                    elem.classList.add("turn180");
                    break;
                case 3:
                    elem.classList.add("turn270");
                    break;
                };

        }) 
      
};

displayBoard();




const appear = (event) => {
    let x = Number(event.target.id[0]);
    let y = Number(event.target.id[1]);

    let z =  gameBoard[x][y];

    z[0] === 0? z[0] = cardDeck.shift()    : z;
    

    renderPage();
}



const rotate = (event) => {
    let x = Number(event.target.id[0]);
    let y = Number(event.target.id[1]);
    
    let z =  gameBoard[x][y];

    z[0] !== 0 ? z[1] = z[1]+1  : z;
    
 
    renderPage();
}

// вешаем листенеры на все клетки

const addListeners = (a) => {
    a.forEach((elem) => { elem.addEventListener('click', rotate) });
    a.forEach((elem) => { elem.addEventListener('click', appear) });
    
     
         

}

addListeners(cells);


// показывем верхнюю  карту (с индексом 0) из колоды

let cardEl = document.querySelector('.card');

const upperCard = (arr) => {
    cardEl.classList.remove("pic0");
    cardEl.classList.remove("pic1");
    cardEl.classList.remove("pic2");



    switch (arr[0]) {
        case 1:
            cardEl.classList.add("pic0");
            break;
        case 2:
            cardEl.classList.add("pic1");
            break;
        case 3:
            cardEl.classList.add("pic2");
            break;
    }
}

upperCard(cardDeck);


// собираем все функции в одну функцию рендер, которая будет при каждом клике на игровом поле перерисовывать все поле.

const renderPage = () => {
    displayBoard();
    upperCard(cardDeck);
    leftEl.innerHTML = `cards left: ${cardsLeft()}`;
    addListeners(cells);



}

renderPage();
 
 
