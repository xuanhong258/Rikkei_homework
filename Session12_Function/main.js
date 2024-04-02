//---------------------Bai 1-----------

// function checkNumber(number) {
//   if (number % 2 === 0) {
//     console.log(`Số ${number} là số chẵn `);
//   } else {
//     console.log(`Số ${number} là số lẻ `);
//   }
// }

// let a = 3;
// checkNumber(a);
// let b = 2;
// checkNumber(b);
// let c = 4;
// checkNumber(c);

//---------------------Bai 2-----------
// let arr = ["a", "abcaaaa", "ab", "abcd"];
// function checkLength(arr) {
//   let max = 0;
//   let curr;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max) {
//       max = arr[i].length;
//       curr = arr[i];
//     }
//   }
//   return curr;
// }

// console.log(checkLength(arr));

//---------------------Bai 3-----------

// let strInput = "Toi la ai   reds ";

// function checkCharacter(str) {
//   let dem = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       dem++;
//     }
//   }
//   return str.length - dem;
// }

// console.log("So ki tu trong chuoi la: ", checkCharacter(strInput));

//---------------------Bai 4-----------

// let stringInput = prompt("Vui long nhap 1 chuoi bat ky");

// let characters = prompt("Vui long nhap 1 ky tu bat ky");

// function countCharacter(str, c) {
//   let dem = 0;
//   str.toLowerCase();
//   c.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === c) {
//       dem++;
//     }
//   }
//   return dem;
// }
// console.log(
//   `So lan xuat hien ki tu ${characters} la : ${countCharacter(
//     stringInput,
//     characters
//   )} lan`
// );

//---------------------Bai 5-----------

// let arr = [
//   "Toi la nguoi Viet Nam",
//   "nguoi Viet Nam",
//   "Toi la",
//   "nguoi",
//   "abxy",
//   "cabd",
// ];

// let stringInput = prompt("Vui long nhap 1 chuoi bat ky");

// function arrayChild(arr, str) {
//   let key = str.toLowerCase().split(" ");
//   let tmp = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < key.length; j++)
//       if (arr[i].toLowerCase().includes(key[j]) && tmp.indexOf(arr[i]) === -1) {
//         tmp.push(arr[i]);
//       }
//   }
//   return tmp;
// }
// console.log(arrayChild(arr, stringInput));
//--------------------Bai 6----------

let stringInput = "toi la nguoi viet nam";

function toLowerCaseFirstCharacter(stringInput) {
  let newString = stringInput.toLowerCase();
  let tmp = [];

  for (let i of newString) {
    tmp.push(i);
  }

  if (tmp[0].charCodeAt() >= 97 && tmp[0].charCodeAt() <= 122) {
    tmp[0] = tmp[0].toUpperCase();
  }
  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i] === " ") {
      tmp[i + 1] = tmp[i + 1].toUpperCase();
    }
  }
  console.log(tmp.join(""));
}

toLowerCaseFirstCharacter(stringInput);

//--------------------Bai 7----------

// let arr = [1,2, -2 ,3,-4,5,6];

// let num = 0;

// function checkDouble(arr, num){
//     let newArr = [];
//     let sum = 0;
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             sum = arr[i] + arr[j];
//             if(sum === num){
//                 newArr.push(arr[i])
//                 newArr.push(arr[j]);
//                 num = undefined;
//             }
//         }
//     }
//     return newArr;
// }

// console.log(checkDouble(arr, num));

//--------------------Bai 8----------

// let str = "toi la nguoi viet nam";

// let input = prompt("Vui long nhap chuoi bat ki");

// function checkCreateString(str, input){
//     let keyWord = input.toLowerCase().split(" ");
//     for(let key of keyWord){
//         if(str.toLowerCase().includes(key)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// if(checkCreateString(str, input)){
//     console.log("True");
// }else{
//     console.log("False");
// }

//--------------------Bai 9 ----------

//Callback function:
//- Truyen doi so la mot ham
//- Duoc su dung:
//+ Xu ly dong bo trong Javascript
//+ Xu ly event

//--------------------Bai 10----------

// function sumTotal(arr){
//     let sum = 0;
//     for(let i of arr){
//         sum += i;
//     }
//     return sum;
// }

// let numInteger = [1,2,3,4,5,6,7,8,9,10,11];

// numInteger.sort((a,b) => a - b);

// function printArrayChild(arr){
//     let tmp = [];
//     let sum1 = 0;
//     let sum2 = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum1 += arr[i];
//         sum2 = sumTotal(arr) - sum1;
//         if(sum2 < sum1){
//             tmp.push(arr[i]);
//         }
//     }
//     return tmp;
// }

// console.log(printArrayChild(numInteger));
