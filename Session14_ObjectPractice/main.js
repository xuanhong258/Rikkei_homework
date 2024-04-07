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
//   let sum = 0;
//   console.log(
//     `Số lượng nhân viên của doanh nghiệp là : ${obj["employeeList"].length}`
//   );
//   for (let value of obj["billList"]) {
//     sum += value["surplus"];
//   }
//   console.log(`Giá trị hóa đơn của doanh nghiệp là : ${sum}`);
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

// function statisticalReport(obj, departmentName) {
//   let cnt = 0;
//   for (let value of obj["employeeList"]) {
//     if (value["department"] === departmentName) {
//       cnt++;
//     }
//   }
//   console.log(`Số lượng nhân viên phòng ban ${departmentName} là: ${cnt}`);
// }

// for (let key in business.employeeList) {
//   statisticalReport(business, business.employeeList[key]["department"]);
// }

//------------------------Bai 10--------------------

let shop = {
  products: [
    {
      id: 1,
      name: "Bim bim",
      price: 5000,
      expiry: "25/08/1998",
    },
    {
      id: 2,
      name: "Cocacola",
      price: 8000,
      expiry: "02/08/2010",
    },
  ],
  employees: [
    {
      id: 1,
      name: "Hồng",
      age: 18,
    },
    {
      id: 2,
      name: "Xuân",
      age: 28,
    },
  ],
  bills: [
    {
      productInfo: "Đồ ăn nhanh",
      quanity: 10,
      price: 50000,
    },
    {
      productInfo: "Nước có gas",
      quanity: 15,
      price: 120000,
    },
  ],
};

//Hàm hiển thị tổng quan
function shopOverview(obj) {
  console.log(`Số lượng sản phẩm là: ${obj["products"].length}`);
  console.log(`Số lượng nhân viên là: ${obj["employees"].length}`);
  let sum = 0;
  for (let value of obj["bills"]) {
    sum += value["price"];
  }
  console.log(`Doanh thu cửa hàng là: ${sum}`);
}

shopOverview(shop);

//Kiểm tra sản phẩm sắp hết hạn sử dụng

function checkExpiry(obj, dateExpiry) {}
