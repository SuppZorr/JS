// 1) Сделать шахматную доску, расставить фигуры. Использовать только JS, на html странице только один div. Стили можно описать в SCSS. 
// 2) Найти ближайшие простые числа к числу 9991999.
 
 
let board = document.querySelector('.board');

let cellWhite = '<div class="cell white"></div>';
let cellBlack = '<div class="cell black"></div>';

 

let regularRow = ''; 
let reverseRow = '';

for (i=0;i<4;i++) {
    regularRow = regularRow + cellWhite + cellBlack;
    reverseRow = reverseRow + cellBlack + cellWhite;
}

for (i=0;i<4;i++) {
    board.innerHTML = board.innerHTML + regularRow + reverseRow;
}



let allCells = document.querySelectorAll('.cell ');

console.dir(allCells);


// for (i=48; i<56; i++) {
//     allCells[i].innerHTML = "&#9817;";
     
// };

for (i=48; i<56; i++) {
    allCells[i].innerHTML = "&#9823";
    allCells[i].style.color = "rgb(230, 229, 174)";
    // if (i%2 !== 0) {
    // allCells[i].style.color = "white";
    // allCells[i].innerHTML = "&#9823";
    // };
};
 
for (i=8; i<16; i++) {
    allCells[i].innerHTML = "&#9823"
};


for (i=56; i<64; i++) {
     
     
 
    allCells[i].style.color = "rgb(230, 229, 174)";
     
     
};



allCells[0].innerHTML =  allCells[7].innerHTML = "&#9820";
allCells[1].innerHTML =  allCells[6].innerHTML = "&#9822";
allCells[2].innerHTML =  allCells[5].innerHTML = "&#9821";
allCells[3].innerHTML = "&#9819";
allCells[4].innerHTML = "&#9818";

allCells[56].innerHTML =  allCells[63].innerHTML = "&#9820";
allCells[57].innerHTML =  allCells[62].innerHTML = "&#9822";
allCells[58].innerHTML =  allCells[61].innerHTML = "&#9821";
allCells[59].innerHTML = " &#9819 ";
allCells[60].innerHTML = " &#9818 ";

// allCells[56].innerHTML =  "&#9820";
// allCells[63].innerHTML =  "&#9814";
// allCells[57].innerHTML =   "&#9816";
// allCells[62].innerHTML =   "&#9822";
// allCells[61].innerHTML = "&#9815";
// allCells[59].innerHTML = " &#9813 ";
// allCells[60].innerHTML = " &#9818 ";
// allCells[58].innerHTML =   "&#9821";



 







 