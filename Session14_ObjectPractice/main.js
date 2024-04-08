//------------------------Bai 1--------------------

// const peopleInfo = {
//   name: "Xuan Hong",
//   age: 26,
//   address: "Nam Dinh",
// };

// function print(obj) {
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// print(peopleInfo);

// peopleInfo.dateOfBirth = 25;
// print(peopleInfo);

// delete peopleInfo.age;
// print(peopleInfo);

//------------------------Bai 2--------------------
// var phoneBook = {
//   contact1: {
//     name: "Alice",
//     phone: "123-456-7890",
//     email: "alice@example.com",
//   },
//   contact2: {
//     name: "Bob",
//     phone: "987-654-3210",
//     email: "bob@example.com",
//   },
// };

// for (let key in phoneBook) {
//   for (index in phoneBook[key]) {
//     console.log(`${index}: ${phoneBook[key][index]}`);
//   }
//   console.log("-------------------------------");
// }

//------------------------Bai 3--------------------
// var phoneBook = {
//   contact1: {
//     name: "Alice",
//     phone: "123-456-7890",
//     email: "alice@example.com",
//     displayInfo: function () {
//       return {
//         name: this.name,
//         phone: this.phone,
//         email: this.email,
//       };
//     },
//   },
//   contact2: {
//     name: "Bob",
//     phone: "987-654-3210",
//     email: "bob@example.com",
//     displayInfo: function () {
//       return {
//         name: this.name,
//         phone: this.phone,
//         email: this.email,
//       };
//     },
//   },
// };

// for (let key in phoneBook) {
//   let tmp = phoneBook[key].displayInfo();

//   for (let index in tmp) {
//     console.log(`${index}: ${tmp[index]}`);
//   }
//   console.log("-------------------------------");
// }

//------------------------Bai 4--------------------

// function Book(title, author, publishYear) {
//   this.title = title;
//   this.author = author;
//   this.publishYear = publishYear;
//   this.printBookInfor = function () {
//     for (let key in this) {
//       if (key === "printBookInfor") {
//         break;
//       } else {
//         console.log(`${key}: ${this[key]}`);
//       }
//     }
//   };
// }

// const book1 = new Book("Harry Potter", "J.K Rowling", 2010);
// const book2 = new Book("Harry", "J.K Rowling", 2000);
// const book3 = new Book("Potter", "J.K", 2009);

// const library = {
//   addBook: function (bookList, bookInfo) {
//     return (library[bookList] = bookInfo);
//   },
//   printListBook: function () {
//     for (let key in this) {
//       if (key === "addBook" || key === "printBookInfor") {
//         continue;
//       } else {
//         for (let index in this[key]) {
//           if (index === "printBookInfor") {
//             continue;
//           } else {
//             console.log(`${index}: ${this[key][index]}`);
//           }
//         }
//         console.log("-------------------------");
//       }
//     }
//   },
// };
// library.addBook("book1", book1);
// library.addBook("book2", book2);
// library.addBook("book3", book3);

// library.printListBook();

//------------------------Bai 5--------------------

// function Book(title, author, publishYear, isVailable) {
//   this.title = title;
//   this.author = author;
//   this.publishYear = publishYear;
//   this.isVailable = isVailable; //trang thai da tra sach
//   this.borrow = function () {
//     return this.isVailable; //false : da muon sach
//   };
//   this.returnBook = function () {
//     return this.isVailable; //true :da tra sach
//   };
// }

// const book1 = new Book("Harry Potter", "J.K Rowling", 2010, true);
// const book2 = new Book("Harry", "J.K Rowling", 2000, false);
// const book3 = new Book("Potter", "J.K", 2009, true);

// const library = {
//   book1,
//   book2,
//   book3,
//   isBookAvailbale: function (invalid) {
//     return invalid ? "Có sẵn để mượn" : "Không có sẵn để mượn";
//   },
// };

// console.log(library.book1.borrow() ? "Có sẵn để mượn" : "Không có sẵn để mượn");

//------------------------Bai 6--------------------
// let jobs = [];
// let isCheck = true;
// while (isCheck) {
//   let choose = +prompt("Nhập vào lựa chọn 1/2/3/4");
//   if (choose === 1) {
//     let id = +prompt("Nhập vào id");
//     let title = prompt("Nhập tiêu đê công việc");
//     let description = prompt("Nhập mô tả công việc");
//     let completed = prompt("Nhập trạng thái hoàn thành");
//     jobs.push({
//       id,
//       title,
//       description,
//       completed,
//     });
//   } else if (choose === 2) {
//     for (let index in jobs) {
//       console.log(jobs[index]);
//     }
//   } else if (choose === 3) {
//     let idInput = +prompt("Nhập id muốn tìm kiếm");
//     let indexValid = -1;
//     for (let index in jobs) {
//       if (idInput === jobs[index].id) {
//         indexValid = index;
//       }
//     }
//     if (indexValid === -1) {
//       console.log("Không tìm thấy");
//     } else {
//       console.log(jobs[indexValid]);
//     }
//   } else if (choose === 4) {
//     isCheck = false;
//   } else {
//     choose = +prompt("Nhập vào lựa chọn 1/2/3/4");
//   }
// }

//------------------------Bai 7--------------------

// let orderList = [];

// function addOders(arr, obj) {
//   arr.push(obj);
// }

// function printOrders(arr) {
//   for (let index in arr) {
//     console.log(arr[index]);
//   }
// }

// function caculatorTotal(arr) {
//   let sum = 0;
//   for (let index in arr) {
//     sum += arr[index].total;
//   }
//   return sum;
// }
// let isCheck = true;
// while (isCheck) {
//   let choose = +prompt("Nhập vào lựa chọn 1/2/3/4");
//   if (choose === 1) {
//     let orderNumber = +prompt("Nhập vào số hóa đơn");
//     let dayCreat = +prompt("Nhập vào ngày tạo hóa đơn");
//     let total = +prompt("Nhập vào tổng hóa đơn");
//     let orders = {
//       orderNumber,
//       dayCreat,
//       total,
//     };
//     addOders(orderList, orders);
//   } else if (choose === 2) {
//     printOrders(orderList);
//   } else if (choose === 3) {
//     console.log(
//       `Tổng giá trị của tất cả hóa đơn là: ${caculatorTotal(orderList)}`
//     );
//   } else if (choose === 4) {
//     isCheck = false;
//   } else {
//     choose = +prompt("Nhập vào lựa chọn 1/2/3/4");
//   }
// }

//------------------------Bai 8--------------------

// let employeeList = [];

// function addEmployees(arr, obj) {
//   arr.push(obj);
// }

// function printEmployees(arr) {
//   for (let index in arr) {
//     console.log(arr[index]);
//   }
// }

// function sortAge(arr) {
//   for (let index in arr) {
//     arr.sort((a, b) => a["age"] - b["age"]);
//   }
// }

// function caculatorTotalSalary(arr) {
//   let sum = 0;
//   for (let index in arr) {
//     sum += arr[index].salary;
//   }
//   return sum;
// }

// let isCheck = true;
// while (isCheck) {
//   let choose = +prompt("Nhập vào lựa chọn 1/2/3/4/5");
//   if (choose === 1) {
//     let name = prompt("Nhập vào tên nhân viên");
//     let age = +prompt("Nhập vào tuổi nhân viên");
//     let salary = +prompt("Nhập vào lương nhân viên");
//     let employees = {
//       name,
//       age,
//       salary,
//     };
//     addEmployees(employeeList, employees);
//   } else if (choose === 2) {
//     printEmployees(employeeList);
//   } else if (choose === 3) {
//     sortAge(employeeList);
//     console.log("Danh sách nhân viên sắp xếp theo tuổi tăng dần là:");
//     for (let index in employeeList) {
//       console.log(employeeList[index]);
//     }
//   } else if (choose === 4) {
//     console.log(
//       `Tổng lương của toàn bộ công ty là: ${caculatorTotalSalary(employeeList)}`
//     );
//   } else if (choose === 5) {
//     isCheck = false;
//   } else {
//     choose = +prompt("Nhập vào lựa chọn 1/2/3/4/5");
//   }
// }

//------------------------Bai 9--------------------

// const business = {
//   employeeList: [
//     {
//       id: 1,
//       name: "Hồng",
//       age: 26,
//       department: "NC H/W RnD",
//     },
//     {
//       id: 2,
//       name: "Xuân",
//       age: 27,
//       department: "NC S/W RnD",
//     },
//     {
//       id: 3,
//       name: "Trần",
//       age: 22,
//       department: "NC H/W RnD",
//     },
//     {
//       id: 4,
//       name: "Toàn",
//       age: 17,
//       department: "NC ME RnD",
//     },
//   ],

//   billList: [
//     {
//       id: 1,
//       billName: "Hóa đơn bán táo",
//       surplus: 10000,
//       dayCreat: 20,
//     },
//     {
//       id: 2,
//       billName: "Hóa đơn bán mận",
//       surplus: 30000,
//       dayCreat: 12,
//     },
//   ],
// };
// // Hàm hiển thị tổng quan về doanh nghiệp: số lượng nhân viên + giá trị hóa đơn
// function businessOverview(obj) {
//   console.log(
//     `Số lượng nhân viên của doanh nghiệp là : ${obj["employeeList"].length}`
//   );
//   for (let value of obj["billList"]) {
//     console.log(`Giá trị hóa đơn ${value["billName"]} là : ${value["surplus"]}`);
//   }
// }

// businessOverview(business);

// // Hàm tìm kiếm nhân viên và hóa đơn theo id
// function searchEmployeeAndBill(obj, idEmployee, idBill) {
//   for (let value of obj["employeeList"]) {
//     if (value["id"] === idEmployee) {
//       console.log(value);
//     }
//   }

//   for (let value of obj["billList"]) {
//     if (value["id"] === idBill) {
//       console.log(value);
//     }
//   }
// }

// searchEmployeeAndBill(business, 2, 2);

// //Hàm tạo báo cáo thống kê : số lượng nhân viên theo phòng ban, số lượng phòng ban và tổng hóa đơn

// function statisticalReport(obj) {
//   let tmp = [];
//   let cnt = 0;
//   let sum = 0;
//   for (let value of obj["employeeList"]) {
//     tmp.push(value["department"]);
//   }
//   let newArray = [...new Set(tmp)];
//   console.log(`Số lượng phòng ban là: ${newArray.length}`);
//   for(let value of newArray){
//     for(let subValue of obj["employeeList"]){
//       if(value === subValue["department"]){
//         cnt++;
//       }
//     }
//     console.log(`Số lượng nhân viên phòng ban ${value} là: ${cnt}`);
//     cnt = 0;
//   }

//   for (let value of obj["billList"]) {
//     sum += value["surplus"];
//   }
//   console.log(`Giá trị hóa đơn của doanh nghiệp là : ${sum}`);
// }
// statisticalReport(business)
//------------------------Bai 10--------------------

// let productList = [
//   {
//     id: 1,
//     name: "Bim bim",
//     price: 5000,
//     expiry: "25/08/2024",
//   },
//   {
//     id: 2,
//     name: "Cocacola",
//     price: 8000,
//     expiry: "11/04/2024",
//   },
// ]
//Hàm tạo sản phẩm:
let productList = [];
function createProduct(){
  let product = {
    id: prompt("Nhập vào id sản phẩm"),
    name: prompt("Nhập vào tên sản phẩm"),
    price: +prompt("Nhập vào giá sản phẩm"),
  }

  productList.push(product);
}
// Hàm thêm thuộc tính hạn sử dụng cho sản phẩm
function addExpiry(){
  for(value of productList){
    let dateExpiry = prompt("Nhập vào hạn sử dụng sản phẩm");//25/08/1998
    value.expiry = dateExpiry;
  }
}

//Hàm kiểm tra sản phẩm sắp hết hạn sử dụng
let d = new Date()
let dayNow = d.getDate();
let monthNow = d.getMonth() + 1;
let yearNow = d.getFullYear();

function checkExpiry() {
  let tmp = [];
  for(let value of productList){
    let arrExpiry = value["expiry"].split("/");
    let dayProduct =  Number.parseInt(arrExpiry[0])
    let monthProduct = Number.parseInt(arrExpiry[1]);
    let yearProduct = Number.parseInt(arrExpiry[2]);
    if(dayProduct - dayNow < 8 && dayProduct - dayNow > 0 && monthNow === monthProduct && yearNow === yearProduct){
      tmp.push(value);
    }else if(dayNow === 30 || dayNow === 31 && dayProduct < 7 && monthProduct - monthNow === 1){
      tmp.push(value)
    }else if(dayNow === 31 && monthNow === 12 && dayProduct < 7 && monthProduct === 1 && yearProduct - yearNow === 1){
      tmp.push(value)
    }
  }
  console.log("Những sản phẩm sắp hết hạn sử dụng là: ");
  if(tmp.length === 0){
    console.log("Không có sản phẩm nào sắp hết hạn");
  }
  for(let value of tmp){
      console.log(value);
  }
}

checkExpiry();
// Hàm tạo nhân viên và thêm vào danh sách nhân viên của cửa hàng

let employeeList = [];
function createProduct(){
  let employee = {
    id: prompt("Nhập vào id của nhân viên"),
    name: prompt("Nhập vào tên của nhân viên"),
    age: +prompt("Nhập vào tuổi của nhân viên"),
  }

  employeeList.push(employee);
}

// Hàm tạo hóa đơn và thêm vào danh sách hóa đơn của cửa hàng
let invoiceList = [];
function createProduct(){
  let invoice = {
    productInfo: prompt("Nhập vào thông tin sản phẩm"),
    quantity: +prompt("Nhập vào số lượng sản phẩm"),
    price: +prompt("Nhập vào giá trị hóa đơn"),
  }

  invoiceList.push(invoice);
}

// Hàm hiển thị tổng quan về cửa hàng

function shopOverview(){
  console.log(`Số lượng sản phẩm của cửa hàng là: ${productList.length}`);
  console.log(`Số lượng nhân viên của cửa hàng là: ${employeeList.length}`);
  let sum = 0;
  for(let value of invoiceList){
    sum += value["price"];
  }
  console.log(` Tổng doanh thu của cửa hàng là: ${sum}`);
}

