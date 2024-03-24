//-------------------Bai 1---------------

// let number = +prompt("Nhap so nguyen duong n");

// if (!isNaN(number) && Number.isInteger(number) && number > 0) {
//   for (let i = 2; i <= number; i++) {
//     if (i % 2 === 0) {
//       console.log(Math.pow(i, 2));
//     }
//   }
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 2---------------

// let a = +prompt("Nhap so nguyen a");
// let b = +prompt("Nhap so nguyen b");

// if (!isNaN(a) && Number.isInteger(a) && !isNaN(b) && Number.isInteger(b)) {
//   let sum = 0;
//   if (a >= b) {
//     console.log("Nhap lai gia tri a < b");
//   } else {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     console.log("Sum =", sum);
//   }
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 3---------------

// let a = +prompt("Nhap so nguyen a");
// let b = +prompt("Nhap so nguyen b");

// if (!isNaN(a) && Number.isInteger(a) && !isNaN(b) && Number.isInteger(b)) {
//   if (b === 0) {
//     console.log("a = 1");
//   } else if (a === 0) {
//     console.log(a);
//   } else {
//     if (b < 0) {
//       let result = 1;
//       for (let i = 1; i <= Math.abs(b); i++) {
//         result *= a;
//       }
//       console.log(`a^b = 1/${result}`);
//     } else {
//       let result = 1;
//       for (let i = 1; i <= b; i++) {
//         result *= a;
//       }
//       console.log(`a^b = ${result}`);
//     }
//   }
// }

//-------------------Bai 4---------------

// let number = +prompt("Nhap so nguyen duong n");
// let sum = 0;
// if (!isNaN(number) && Number.isInteger(number) && number > 0) {
//   for (let i = 2; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += Math.pow(i, 2);
//       if (sum < number) {
//         console.log(Math.pow(i,2));
//       }
//     }
//   }
// }else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 5---------------

// let number = +prompt("Nhap so nguyen duong n");
// let sum = 0;
// if (!isNaN(number) && Number.isInteger(number) && number > 0) {
//   for (let i = 1; i <= number; i++) {
//     sum += 1 / Math.pow(i, 3);
//   }
//   console.log(sum.toFixed(5));
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 6---------------

let number = +prompt("Nhap so nguyen duong n");
if (!isNaN(number) && Number.isInteger(number) && number > 0) {
  // let tmp;
  // let curr = 0;
  // while (number > 0) {
  //   tmp = number % 10;
  //   curr = curr * 10 + tmp;
  //   number /= 10;
  // }
  // console.log(curr);

  let numberToString = number.toString();
  let numberLength = numberToString.length;
  let curr = "";

  for (let i = numberLength - 1; i >= 0; i--) {
    curr += numberToString[i];
  }
  console.log(Number.parseInt(curr));
} else {
  console.log("Du lieu nhap vao chua chinh xac");
}

//-------------------Bai 7---------------

// let number = +prompt("Nhap so n");
// if (!isNaN(number) && Number.isInteger(number) && number > 0) {
//   if (number === 1) {
//     console.log(`So ${number} khong phai la so nguyen to`);
//   } else {
//     let isCheck = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isCheck = false;
//       }
//     }
//     if (isCheck) {
//       console.log(`So ${number} la so nguyen to`);
//     } else {
//       console.log(`So ${number} khong phai la so nguyen to`);
//     }
//   }
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 8---------------

// let number = +prompt("Nhap so nguyen duong > 1");

// if (!isNaN(number) && Number.isInteger(number) && number > 1) {
//   let cnt = 0;
//   let i = 2;
//   while (cnt < number) {
//     let isCheck = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isCheck = false;
//       }
//     }
//     if (isCheck) {
//       console.log(i);
//       cnt++;
//     }
//     i++;
//   }
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 9---------------
// let a = +prompt("Nhap so nguyen duong a");
// let b = +prompt("Nhap so nguyen duong b");
// let c = +prompt("Nhap so nguyen duong c");
// let d = +prompt("Nhap so nguyen duong d");

// if (
//   !isNaN(a) &&
//   Number.isInteger(a) &&
//   !isNaN(b) &&
//   Number.isInteger(b) &&
//   !isNaN(c) &&
//   Number.isInteger(c) &&
//   !isNaN(d) &&
//   Number.isInteger(d)
// ) {
//   let min = Math.min(a, b, c, d);
//   let tmp = 1;
//   for (let i = 1; i <= min; i++) {
//     if (a % i === 0 && b % i === 0 && c % i === 0 && d % i === 0) {
//       if (i > tmp) {
//         tmp = i;
//       }
//     }
//   }
//   console.log(`Uoc chung lon nhat cua ${a}, ${b}, ${c}, ${d} la: ${tmp}`);
// }else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }

//-------------------Bai 10---------------
// let number = +prompt("Nhap so nguyen duong ");
// let prt = "";
// ******
// *****
// ****
// ***
// **
// *
// if (!isNaN(number) && Number.isInteger(number) && number > 0) {
// for (let i = number; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     prt += "*";
//   }
//   console.log(prt);
//   prt = "";
// }

// ******
//  *****
//   ****
//    ***
//     **
//      *

//   for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= number; j++) {
//       if (j < i) {
//         prt += " ";
//       } else {
//         prt += "*";
//       }
//     }
//     console.log(prt);
//     prt = "";
//   }
// } else {
//   console.log("Du lieu nhap vao chua chinh xac");
// }
