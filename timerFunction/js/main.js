// const today = new Date();
// const myBday = new Date(1991,3,19);
// console.log(today);
// console.log(myBday);
// let x = today - myBday;



// console.log( x);




const timer = document.querySelector('.time');


const timeSet = document.querySelector('.timeset');
const play = document.querySelector('.play');


let timerValue = null;
 
let x = null;
 
let diff = null;

///  1000*60*60*24

let n = 0;

 

const mainFunc =  () => {
    
     

    x = timeSet.value;

    let xHours = x.slice(0,2);
    let xMins = x.slice(3,5);
     
    let timeNow =  new Date();

    timerValue = new Date();
    timerValue.setHours(xHours);
    timerValue.setMinutes(xMins);
    timerValue.setSeconds(0);
 
    
    diff = (timerValue - timeNow)/1000;
     
    const getHours = Math.floor(diff / 3600);
    const getMinutes = Math.floor(diff / 60) - getHours * 60;
    const getSeconds = Math.floor(diff % 60);
 
    timer.innerHTML = `${getMinutes.toString().padStart(2, "0") } : ${getSeconds.toString().padStart(2, "0") }`;

    if (diff<=0) {
         
        timer.innerHTML = "00:00"

        if (n%2==0) {
            timer.style.color ="white";
        }
        else timer.style.color ="black";
    }
    
    n= n+1;

  
  
     
};

const clock = () => {
     
    setInterval(mainFunc  , 1000);
    
};


play.addEventListener('click', clock);


 


 
  