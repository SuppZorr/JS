// Домашнее задание на вторник 15-09-2020: 
// Уровень 1) Есть два корабля, первый корабль имеет  HP (Health Points) 100, Damage 4, второй корабль имеет HP 40, damage 15. Описать объектами.
// В одной итерации стреляют друг в друга. Вывести лог боя. Определить победителя. 
// Уровень 2) Два флота, во флотах 4 типа кораблей: эсминцы hp 45 dmg 10, линкоры hp 100 dmg 4, авианосцы hp 15 dmg 40, крейсеры hp 60 dmg 8. 
// Создаются флот из 10 кораблей случайного типа. Выстрел по случайному кораблю, погрешность повреждения +20%/-20%. 
// Уровень 3) Флотов больше двух.




 




let startBattle = document.querySelector('.fight');
let logBattle = document.querySelector('.log');
const redNavy = {};
const blueNavy = {};
let str = "";

  //это описание всех возможных кораблей
let es = {
    name : "esminec",
    hp : 45,
    dmg : 10,
};
let li =  {
    name : "linkor",
    hp : 100,
    dmg : 4,                       
};
let av =   {
    name : "avianosec",
    hp : 15,
    dmg : 40,
};
let kr = {
    name : "kreicer",
    hp : 60,
    dmg : 8
};



function createNavy (n) {               //создание флота из 10 кораблей, создает массив обьектов
     
    for (i=0; i<10; i++) {
        n[i] = random();
        if (n[i] == 1) {n[i] = es}
        else if (n[i] == 2) {n[i] = li}
        else if (n[i] == 3) {n[i] = av}
        else {n[i] = kr}
        
    };
     
    // console.table(n);


    
};

 



function random(min = 1, max = 4) {                 // рандом для создания флота, 1-4 по умолчанию, но далее будем его использовать для других целей
    return Math.floor(Math.random() * (max - min + 1) ) + min;
     
}


function randomShip(fleet, sinked)             
{
    let all = Object.keys(fleet);

    for (i = 0; i < all.length ; i++) {
        all[i] = Number(all[i]);
         
    }

    let alive = all.filter(x => !sinked.includes(x));
     
    let z = alive[random(0, (alive.length-1))];

    return z;    
};



 
function seaBattle() {                                   
    createNavy(redNavy);
    createNavy(blueNavy);

    let sinkRed = [];
    let sinkBlue = [];


   
   
 
   
    
     
         while ( (sinkRed.length < 10) && (sinkBlue.length < 10) ) {     

        


            let a1 = randomShip(redNavy, sinkRed );          
        
            let b1 = randomShip(blueNavy, sinkBlue);
        
        
         


         
        
         
                 
            let dmg1 =  blueNavy[b1].dmg*((random(80,120)/100));
            redNavy[a1].hp = redNavy[a1].hp - dmg1;
            str  = str   + ` <br> ${blueNavy[b1].name} синего флота стреляет в ${redNavy[a1].name} красного флота и наносит ${dmg1} ед. урона.  `;
            if ( 0 >=   redNavy[a1].hp) {
                str  = str +   ` <br> ${redNavy[a1].name} красного флота потоплен! `;
                delete(redNavy[a1]); 
                sinkRed.push(a1);
                if (sinkRed.length == 10) {
                    str  = str +  ` <br> Синий флот победил!`;
                    logBattle.innerHTML = str;
                    break 
                }
             
            };
         

            let a2 = randomShip(redNavy, sinkRed );
        
            let b2 = randomShip(blueNavy, sinkBlue);

       
        
            let dmg2 =   redNavy[a2].dmg*((random(80,120)/100));

            blueNavy[b2].hp = blueNavy[b2].hp - dmg2;
            str  = str +  ` <br>   ${redNavy[a2].name} красного флота стреляет в ${blueNavy[b2].name} синего флота и наносит ${dmg2} ед. урона.  `;
            if ( 0 >= blueNavy[b2].hp) {
                    str  = str   + `<br>  ${blueNavy[b2].name} синего флота потоплен! `;
                    delete(blueNavy[b2]);
                    sinkBlue.push(b2);
                    if (sinkBlue.length == 10) {
                        str  = str +  ` <br> Красный флот победил!`;
                        logBattle.innerHTML = str;
                        break 
                        
                    }
             
                };
         
            logBattle.innerHTML = str;
            
                
             
        };

    

    
   
     
    
    

};

 
 


 

startBattle.addEventListener( 'click', seaBattle);
 
 
