//  1) На странице сделать поле ввода текста (textarea), а также кнопку Go. В поле вводим любой произвольный текст, разделенный пробелами. При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста. 
// 2) Найти самое длинное слово, вывести его в консоль. 



let textArea = document.querySelector('.text');
let goButton = document.querySelector('.go');
let inputsList = document.querySelector('.inputs');

let str = "<input class=rows   type=text>";



const funcChop = () => {
    let textByWords = [];
    let word = "";

 
    for (i=0; i< textArea.value.length; i++ ) {

        if (textArea.value[i] !== " ") {
            word = word + textArea.value[i];
             
             
            
        }
       
        else {
            if (word !== " " && word !== "") {
                textByWords.push(word);
                word = "";
            }
        
        }   
        

    };

    word !== " " && word !== "" ? textByWords.push(word) : word = "";

    console.log(textByWords);
     

    for (i=0; i<textByWords.length; i++) {
        inputsList.innerHTML = inputsList.innerHTML + str;

         
    }
    
    
    let rows = document.querySelectorAll('.rows');

    for (i=0; i<rows.length; i++) {
        rows[i].value = textByWords[i];
    }
     
    let longestWord = ""; 

    
    for (i=0; i<textByWords.length; i++) {
        
        

        if (textByWords[i].length > longestWord.length) {
            longestWord = textByWords[i];
        }
        else {
            longestWord;
        };

        
    };
    console.log(`longestWord : ${longestWord}`);

     
    goButton.setAttribute("disabled", "true");

}


 


goButton.addEventListener( 'click', funcChop );
 