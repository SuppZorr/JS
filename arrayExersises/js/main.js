// 1)Исходный массив [5, 23, -110, 3, 18, 0, 14], данные в нём не менять. 
// a.Вывести в консоль только нечетные числа; 
// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 
// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 
// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. 
// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве числа, кратные 5. 
// 2) f.Получить массив без первого элемента, вывести в консоль. 
// g.Отсортировать массив по возрастанию, вывести в консоль. 
// 3) Создать функцию, которая преобразовывает значения, записанные через дефис в значения, записанные в camelCase, например, "border-radius" в "borderRadius"




arr = [5, 23, -110, 3, 18, 0, 14];
arr1 = [];

console.log(arr);


// a.Вывести в консоль только нечетные числа; 
arr.forEach(element => {
  if (element%2 == 1) {
  console.log(element)
  };
  
});



// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 
const func1 = (item) => {
  return item = item+20;
};



arr1 = arr.map(func1);

console.log(arr1);



// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 
const func1 = (item) => {
  if (item %2 ==0  && item>0) {
  return item;
  }
  else {return ""};
   
};



arr1 = arr.map(func1);
console.log(arr1);


// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. 
const func1 = arr.reduce ( (sum , item) => {
  
  let temp = item % 3;
  console.log(temp);
  
  sum = sum + temp;
   
  
  return sum;

  
},0);


console.log(func1);

 

// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве числа, кратные 5.

const func1 = () => {
    let temp = arr.map( (item) => {
       return item%5 ;
        
    });
    console.log(temp);
    
console.log((temp.includes(0) || temp.includes(-0)) );
if ((temp.includes(0) || temp.includes(-0)) ) {
    console.log("в массиве есть элементы, кратные 5!")
}
else console.log("в массиве нет элементов, кратных 5!")
     
}

func1() ;

 
// f.Получить массив без первого элемента, вывести в консоль. 

arr.splice(0,1);
console.log(arr);


// g.Отсортировать массив по возрастанию, вывести в консоль. 


const func1 = (a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};
  
   

console.log(arr.sort(func1));



// 3) Создать функцию, которая преобразовывает значения, записанные через дефис в значения, записанные в camelCase, например, "border-radius" в "borderRadius"

let str = "camel-case-camel-case";
        let temp = "";
        let arr = [];
     for (i=0;i<str.length;i++) {
                 
                

            if (str[i] !== "-") {
                    temp = temp+str[i];
            }
            else {
                    arr.push(temp);
                    temp = "";
            };

        };

        temp !== " " && temp !== "" ? arr.push(temp) : temp = "";

console.log(arr);

let newStr = "";

for (i=0;i<arr.length;i++) {
        let x = arr[i];
        if (i === 0 ) {
        newStr = newStr + `${x}`;
        }
        else {
                newStr = newStr + `${x[0].toUpperCase() + x.slice(1)}`;
        }
}
console.log(newStr);



























               






// const func1 = () => {
//      str[3] = str[3].toUpperCase();
//      console.log(str);
//      console.log(str[3] );
//      console.log(str.toUpperCase());

    



        // for (i=0;i<str.length;i++) {
                 
                

        //     if (str[i] === "-") {
        //         console.log(i);
        //         str[i+1] = str[i+1].toUpperCase();
                 
        //         // str.splice(i,1);
        //         console.log(str);
        //     };
            
        // };

        


     
     
    
// }


