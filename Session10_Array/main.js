//Exercise
const todoList = [
    "Sleep at 12pm",
    "Workout 2hours per day",
    "Do homework"
];
let input = prompt("Please enter character");

while(input !== 'E'){
    if(input === 'C'){
        let newTodoItem = prompt("Please enter value to add new todo item");
        todoList.push(newTodoItem);
        for(let i = 0; i <= todoList.length - 1; i++){
            console.log(`${i+1}. ${todoList[i]}`);
        }
        input = prompt("Please enter character");
    }else if(input === 'R'){
        for(let i = 0; i <= todoList.length - 1; i++){
            console.log(`${i+1}. ${todoList[i]}`);
        }
        input = prompt("Please enter character");
    }else if(input === 'U'){
        let positionUpdate = +prompt("Please enter position which you wanna update");
        if(!isNaN(positionUpdate) && Number.isInteger(positionUpdate) && positionUpdate >=0){
            let valueUpdate = prompt("Please enter value which you wanna update");
            todoList.splice(positionUpdate,1,valueUpdate);
            for(let i = 0; i <= todoList.length - 1; i++){
                console.log(`${i+1}. ${todoList[i]}`);
            }
            input = prompt("Please enter character");
        }else{
            for(let i = 0; i <= todoList.length - 1; i++){
                console.log(`${i+1}. ${todoList[i]}`);
            }
            input = prompt("Please enter character");
        }
    }else if(input === 'D'){
        let positionDelete = +prompt("Please enter position which you wanna delete");
        if(!isNaN(positionDelete) && Number.isInteger(positionDelete) && positionDelete >=0){
            todoList.splice(positionDelete,1);
            for(let i = 0; i <= todoList.length - 1; i++){
                console.log(`${i+1}. ${todoList[i]}`);
            }
            input = prompt("Please enter character");
        }else{
            input = prompt("Please enter character");
            for(let i = 0; i <= todoList.length - 1; i++){
                console.log(`${i+1}. ${todoList[i]}`);
            }
            input = prompt("Please enter character");
        }
    }else{
        input = prompt("Please enter character");
    }
}


//----------------------Bai 1------------------

// let numbers = [1, 2, 3, "Hong", true, -9, -7, 0, NaN, null, undefined];
// let isCheck = false;
// let numberLength = numbers.length;
// for(let i = 0; i <= numberLength - 1; i++){
//     if(!isNaN(numbers[i]) && Number.isInteger(numbers[i])){
//         console.log(numbers[i]);
//         isCheck = true;
//     }
// }

// if(!isCheck){
//     console.log("Trong mang khong ton tai so nguyen");
// }

//----------------------Bai 2------------------


// let numbers = [1, 2, 3, "Hong", true, -9, -7, 0, NaN, null, undefined];
// let input = +prompt("Please enter value in blank box");

// if(numbers.indexOf(input) !== -1){
//     console.log(`Vi tri cua phan tu ${input} trong mang la vi tri ${numbers.indexOf(input)}`);
// }else{
//     console.log("Phan tu khong ton tai");

// }

//----------------------Bai 3------------------


// let numberIntegers = [1, 1, -1, 3, 4, 5, 3, 9, -10, 5, 2, 2, 6, 6, 6];

// let input = +prompt("Please enter integer number in blank box");

// let isCheck = true

// if(!isNaN(input) && Number.isInteger(input)){
//     let cnt = 0;
//     while(isCheck){
//         for(let i of numberIntegers){
//             if(i === input){
//                 cnt++;
//             }
//         }
//         if(cnt !== 0){
//             console.log(`So lan xuat hien cua so ${input} trong mang la: ${cnt} lan`);
//             isCheck = false;
//         }else{
//             input = +prompt("Please enter integer number in blank box");
//         }

//     }
// }else{
    // input = +prompt("Please enter integer number in blank box");
// }

//----------------------Bai 4------------------

// let a = +prompt("Please enter integer number a in blank box");
// let b = +prompt("Please enter integer number b in blank box");

// let tmp = [];

// while(tmp.length === 0){
//         if(!isNaN(a) && Number.isInteger(a) && a > 0 
//         &&!isNaN(b) && Number.isInteger(b) && b > 0
//     ){
//         if(a > b){
//             for(let i = b; i <= a; i++){
//                 if(i % b ===0){
//                     tmp.push(i);
//                 }
//             }
//             console.log(tmp);
//         }else if(a < b){
//             for(let i = a; i <= b; i++){
//                 if(i % a === 0){
//                     tmp.push(i);
//                 }
//             }
//             console.log(tmp);
//         }else{
//             tmp.push(a);
//             console.log(tmp);
//         }
//     }else{
//         confirm("Input value is wrong!!!!, Please confirm enter value again");
//         a = +prompt("Please enter integer number a in blank box");
//         b = +prompt("Please enter integer number b in blank box");  
//     }
// }

//----------------------Bai 5------------------

// let numbers = [1, 2, 3, "Hong", true, -9, -7, 0, NaN, null, undefined];

// console.log(numbers.reverse());


//----------------------Bai 6------------------

// let numberIntegers = [1, 1, -1, 3, 4, 5, 3, 9, -10, 5, 2, 2, 6, 6, 6];

// let tmp = [];


// for(let i of numberIntegers){
//     if(i >= 0){
//         tmp.push(i);
//     }else{
//         tmp.unshift(i);
//     }
// }

// console.log(tmp);


//----------------------Bai 7------------------


// let input = +prompt("Please enter integer value in blank box");

// let numberIntegers = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// let input = +prompt("Nhap vao gia tri");

// let tmp = [];

// let isCheck = false;
// let sum = 0;
// let length = numberIntegers.length;

// if(!isNaN(input) && Number.isInteger(input)){
//     for(let i = 0; i < length - 1; i++){
//         sum = numberIntegers[i]
//         for(let j = i + 1; j <= length - 1; j++){
//             sum += numberIntegers[j];
//             if(sum === input){
//                 for(let a = i; a <= j; a++){
//                     tmp.push(numberIntegers[a]);
//                 }
//                 // tmp = numberIntegers.splice(i, j - i + 1);
//                 console.log("Mang con thoa man dieu kien la: ", tmp);
//                 isCheck = true;
//             }
//         }
//         if(isCheck){
//             break;
//         }
//     }
//     if(!isCheck){
//         console.log("Khong co mang con thoa man");
//     }

// }else{
//     console.log("Gia tri nhap vao chua chinh xac, vui long nhap lai gia tri");
// }


//----------------------Bai 8------------------


// let numberIntegers = [1, 1, -1, 3, 3, 1, 3, 4, 5, 3, 9, 3, -10, 5, 2, 2, 6, 6, 6];

// let tmp = [];

// let arrayLength = numberIntegers.length;


// for(let i = 0; i <= arrayLength; i++){
//     tmp[i] = 0;
// }

// for(let i = 0; i <= arrayLength; i++){
//     tmp[numberIntegers[i]]++;
// }

// for (let i = 0; i <= arrayLength; i++) {
//     if(tmp[numberIntegers[i]] >= 3){
//         console.log(numberIntegers[i]);
//         tmp[numberIntegers[i]] = 0;
//     }
    
// }


// console.log(numberIntegers.sort());

//----------------------Bai 9------------------

// let arrayNumber = [1, 2, 4, 5, 8];//3

// arrayNumber.sort();


// for(let i = 1; i < arrayNumber[arrayNumber.length - 1]; i++){
//     let isCheck = false;
//     for(let j = 0; j < arrayNumber.length - 1; j++){
//         if(i === arrayNumber[j]){
//             isCheck = true;
//         }
//     }

//     if(!isCheck){
//         console.log(i);
//         break;
//     }
// }


//----------------------Bai 10------------------

// let array1 = [1, 2, 3, 4, 5];

// let array2 = [-3, -1, 0, 1, 5];

// let array3 = [1, 5, 6, 7];

// let i = 0;
// let j = 0;
// let k = 0;
// while(i < array1.length && j < array2.length && k < array3.length){
//     if(array1[i] === array2[j] && array2[j] === array3[k]){
//         console.log(array1[i]);
//         i++;
//         j++;
//         k++;
//     }else if(array1[i] < array2[j]){
//         i++;
//     }else if(array2[j] < array3[k]){
//         j++;
//     }else{
//         k++;
//     }
// }





