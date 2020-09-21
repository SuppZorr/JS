// //   Домашнее задание на вторник 08-09-2020: В магазин продуктов пришла приходная накладная: ожидается поставка следующих молочных продуктов: 
// Молоко пастеризованное, 3 ящика, в ящике 20 упаковок, упаковка мягкая полиэтиленовая; 
// Масло сливочное, 4 ящика, в ящике 30 пачек, бумажная упаковка; 
// Кефир, пластиковая бутылка, 7 упаковок, в упаковке 6 бутылок; 
// Мороженое, вафельный стаканчик, 2 ящика, в ящике по 12 пачек.


// // По приходу этого товара, что почти все товары произведены 3 дня назад, а выкладывать на полку товары на пару дней до окончания срока годности нет смысла. К тому же, в магазине сломалась морозильная камера и можно принимать только товар, который храниться при температуре выше -5С. 
// // Задание: сформировать приходную и возвратную накладные в виде объектов. Вычисления производить через логические и арифм. операции с объектами. Условия хранения взять типичные из интернета. Количество принятых и возвратных товаров в упаковках/бутылках отобразить на HTML странице. 



// Уровень1) Как и в прошлом задании сформировать накладную, но с помощью отдельной функции. Уровень2) Используя рекурсивные вычисления, найти максимальное число ряда Фибоначчи, которое меньше 9991999, вывести его; вывести число итераций, необходимое для поиска этого числа.



let AcceptedGoods = {};
let OutgoingWaybill = {};
let StoreMaxKeepingTemperature = -4;
let StoreGoodsExpirationTimer = 7;

let accept = document.getElementById('accepted');
let reject= document.getElementById('rejected');



const IncomingWaybill = {
    milkBox: {
        quantity: 3,
        capacity: 20,
        item: {
            quantity: 20,
            material: 'polyethylene soft bag',
            product: {
                resource: 'milk',
                age: 3,
                maxAge: 4,
                maxKeepingTemperature: 6,
                }  
                
            }
        },
    
    butterBox: {
        quantity: 4,
        capacity: 30,
        item: {
            quantity: 30,
            material: 'paper pack',
            product: {
                resource: 'butter',
                age: 3,
                maxAge: 8*30 ,
                maxKeepingTemperature: -10,
                }  
                
            }
        },
    
    kefirBox: {
        quantity: 7,
        capacity: 6,
        item: {
            quantity: 6,
            material: 'plastic bottle',
            product: {
                resource: 'kefir',
                age: 3,
                maxAge: 14 ,
                maxKeepingTemperature: 5 ,
                }  
                
            }
        },
    
    icecreamBox: {
        quantity: 2,
        capacity: 12,
        item: {
            quantity: 12,
            material: 'wafer cup',
            product: {
                resource: 'icecream',
                age: 3,
                maxAge: 35 ,
                maxKeepingTemperature: -20 ,
                }  
                
            }
        },
         

} 


        
// напиши функцию, которая бы анализировала приехавший продукт и добавляла или не добавляла его в возврат 

 
function SortingProducts (prod) {
    let temp = prod.resource;

    if (prod.maxKeepingTemperature < StoreMaxKeepingTemperature || (prod.maxAge - prod.age ) < StoreGoodsExpirationTimer)

        {    OutgoingWaybill[temp] =   prod  ;
             
        }
    else
        { AcceptedGoods[temp] =  prod  ;
             
        };

    
    

  
};

SortingProducts(IncomingWaybill.milkBox.item.product);
SortingProducts(IncomingWaybill.butterBox.item.product);
SortingProducts(IncomingWaybill.kefirBox.item.product);
SortingProducts(IncomingWaybill.icecreamBox.item.product);

 
 console.log(AcceptedGoods);




 


  //  ИСХОДНЫЙ ВАРИАНТ            РАБОЧИЙ         !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let OutgoingWaybill = {};
let AcceptedGoods = {};
let StoreMaxKeepingTemperature = -4;
let StoreGoodsExpirationTimer = 7;

let accept = document.getElementById('accepted');
let reject= document.getElementById('rejected');


let IncomingWaybill = {
    milk: {
        packing: 'polyethylene soft bag',
        box: {
            quantity: 3,
            capacity: 20,
        },
        age: 3,
        maxAge: 4,
        maxKeepingTemperature: 6,

    },
    butter: {
        packing: 'paper pack',
        box: {
            quantity: 4,
            capacity: 30,
        },
        age: 3,
        maxAge: 8*30 ,
        maxKeepingTemperature: -10,
    },
    kefir: {
        packing: 'plastic bottle',
        box: {
            quantity: 7,
            capacity: 6,
        },
        age: 3,
        maxAge: 14 ,
        maxKeepingTemperature: 5 ,
    },
    icecream: {
        packing: 'wafer cup',
        box: {
            quantity: 2,
            capacity: 12,
        },
        age: 3,
        maxAge: 35 ,
        maxKeepingTemperature: -20 ,
    },

};

 

for (let a in IncomingWaybill) {
        if (IncomingWaybill[a].maxKeepingTemperature < StoreMaxKeepingTemperature || (IncomingWaybill[a].maxAge - IncomingWaybill[a].age ) < StoreGoodsExpirationTimer)
    
        {
         
         OutgoingWaybill[a] = IncomingWaybill[a];  
        }
        else
        AcceptedGoods[a] = IncomingWaybill[a];


    }
   
console.log(AcceptedGoods)
console.log(OutgoingWaybill)




for (let a in AcceptedGoods) { 
    accept.innerHTML = accept.innerHTML + AcceptedGoods[a].box.quantity * AcceptedGoods[a].box.capacity + " " + AcceptedGoods[a].packing +"'s"+", ";
     
}  


for (let a in OutgoingWaybill) { 
    reject.innerHTML = reject.innerHTML + OutgoingWaybill[a].box.quantity * OutgoingWaybill[a].box.capacity + " " + OutgoingWaybill[a].packing +"'s"+", ";
     
} 

 
 
 