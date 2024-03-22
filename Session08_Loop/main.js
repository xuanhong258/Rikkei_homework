//-------------------Bai 1----------------------------
// let number = +prompt("Nhap vao so nguyen duong n:");

// if (!isNaN(number) && number > 0) {
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//     }
// }else {
//     console.log("Gia tri nhap vao chua chinh xac");
// }

//-------------------Bai 2----------------------------
// let number = +prompt("Nhap vao so nguyen duong n:");
// let result = 1;
// if (!isNaN(number) && number > 0) {
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//     console.log(`Giai thua cua ${number} la: ${result}`);
// }else {
//     console.log("Gia tri nhap vao chua chinh xac");
// }

//-------------------Bai 3----------------------------
// let number = 100;
// for(let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else if (i % 3 === 0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }
// }

//-------------------Bai 4----------------------------

// let a = +prompt("Nhap vao so nguyen duong a:");
// let b = +prompt("Nhap vao so nguyen duong b:");

// if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
//     for (let i = 1; i <= a; i++) {
//         if(i % b === 0) {
//             console.log(`Cac so chia het cho ${b} la: ${i}`);
//         }
//     }
// }else{
//     console.log("Gia tri nhap vao chua chinh xac");
// }

//-------------------Bai 5----------------------------
// let random = Math.ceil(Math.random()*10);

// let number = +prompt("Nhap vao so n:");

// while (number!==random) {
//     let number = +prompt("Nhap vao so n:");
//     if (number === random) {
//         console.log("Dung");
//         break;
//     }else if (number >random) {
//         console.log("Lon hon");
//     }else{
//         console.log("Nho hon");
//     }
// }

//-------------------Bai 6----------------------------

// for(let i = 1; i <= 3; i++) {
//     console.log("-----------------------");
//     for(let j = 1; j <= 10; j++) {
//         if(i === 3 && j === 2) {
//             break;
//         }else{
//             console.log(`${i} * ${j} = ${i * j}`);
//         }
//     }

// }

//-------------------Bai 7----------------------------
//Số hoàn hảo là một số nguyên dương
//mà tổng các ước nguyên dương chính thức của nó bằng chính nó

// let number = +prompt("Nhap vao so n:");

// if (!isNaN(number) && number > 0) {
//     let sum = 1;

//     for (let i = 2; i < number; i++){
//         if(number % i === 0){
//             sum += i;
//         }6
//     }

//     if(sum === number){
//         console.log(`${number} la so hoan hao`);
//     }else{
//         console.log(`${number} khong phai la so hoan hao`);
//     }
// }else{
//     console.log("Gia tri nhap vao chua chinh xac");
// }

//-------------------Bai 8----------------------------

//Số nguyên tố là tập hợp của những số tự nhiên
//chỉ chia hết cho số 1 và chính nó

let number = +prompt("Nhap vao so n:");

if (!isNaN(number) && number > 0) {
  for (let i = 2; i < number; i++) {
    let isCheck = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isCheck = false;
      }
    }
    if (isCheck) {
      console.log(i);
    }
  }
} else {
  console.log("Gia tri nhap vao chua chinh xac");
}

//-------------------Bai 9----------------------------

// let number = +prompt("Nhap vao so n:");

// if (!isNaN(number) && number > 0) {
//     let f0 = 0;
//     let f1 = 1;
//     let sum = 1;
//     let fibonacci = `${f0} ${f1} `;

//     for (let i = 1; i < number; i++){
//         let fn = f0 + f1;
//         f0 = f1;
//         f1 = fn;
//         sum += fn;
//         if(sum >= number){
//             break;
//         }
//         fibonacci += `${fn} `;
//     }
//     console.log(fibonacci);

// }

//-------------------Bai 10----------------------------

// let number = +prompt("Nhap vao so n:");

// let print = "";
// // for (let i = 1; i <= number; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         print += "*";
// //     }
// //     console.log(print);
// //     print = "";
// // }

// let i ;
// let j ;
// for(i = 1; i <= number; i++){
//     for(j = 1; j <= number - i; j++) {
//         print += " ";
//     }
//     for(j = 1; j <= i; j++){
//         print += "*";
//     }
//     console.log(print);
//     print = "";
// }
