const phoneList = [
    {
      name: "Tony Stark",
      phone: "0912323232",
    },
    {
      name: "Captain America",
      phone: "0971231233",
    },
  ];
  
  // Cho phép người dùng nhập vào 4 chữ cái C/R/U/D
  // C -- Cho người dùng nhập vào tên của đối tượng contact
  // muốn thêm mới vào danh bạ
  //   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
  // danh bạ hay chưa
  //   -- Nếu chưa thì tiếp tục cho người dùng nhập vào số điện thoại
  // của đối tượng contact đang muốn thêm mới
  //   -- Tiến hành thêm mới đối tượng contact đó {name, phone} vào
  // trong mảng phoneList
  //   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
  // đã được thêm mới 1 phần tử contact theo dạng
  // 1. Tony - 09809485435
  // 2. Captain America - 093402394
  // ...
  
  // R -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
  // theo dạng
  // 1. Tony - 09809485435
  // 2. Captain America - 093402394
  
  // U -- Cho người dùng nhập vào tên của contact đang muốn chỉnh sửa số điện
  // thoại.
  //   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
  // phoneList hay chưa
  //   -- Nếu tìm thấy thì tiến hành cho người dùng nhập vào giá trị
  // phone mới muốn cập nhật cho phần tử contact vừa tìm thấy
  //   -- Tiến hành cập nhật
  //   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
  // đã được cập nhât phần tử contact vừa tìm thấy theo dạng
  // 1. Tony - 09809485435
  // 2. Captain America - 093402394
  
  // D -- Cho người dùng nhập vào tên của contact đang muốn xoá đi
  //   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
  // phoneList hay chưa
  //   -- Nếu tìm thấy thì tiến hành xoá phần tử contact vừa tìm thấy đi khỏi
  // mảng phoneList
  //   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
  // đã được xoá phần tử contact vừa tìm thấy theo dạng
  // 1. Tony - 09809485435
  // 2. Captain America - 093402394
  
  // E -- Thoát khỏi chương trình
  // NOTE: Chương trình phải là một vòng lặp vĩnh cửu và sẽ được
  // dừng lại cho đến khi người dùng nhập vào chữ cái E
  
  function printf(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i + 1}. ${arr[i].name} - ${arr[i].phone}`);
    }
  }
  
  let isCheck = true;
  
  while (isCheck) {
    let input = prompt("Please enter C/R/U/D");
    if (input === "C") {
      let addNewName = prompt(".....add new name");
      for (let i = 0; i < phoneList.length; i++) {
        if (phoneList[i].name !== addNewName) {
          let addNewPhone = prompt(".....add new phone");
          phoneList.push({
            name: addNewName,
            phone: addNewPhone,
          });
          break;
        } else {
          addNewName = prompt(".....add again new name");
        }
      }
      printf(phoneList);
    } else if (input === "R") {
      printf(phoneList);
    } else if (input === "U") {
      let nameUpdate = prompt(".....Enter name need to update");
      for (let i = 0; i < phoneList.length; i++) {
          if (phoneList[i].name === nameUpdate) {
            let updateNewPhone = prompt(".....update new phone");
            phoneList[i].phone = updateNewPhone;
            printf(phoneList);
            break;
        } else {
          nameUpdate = prompt(".....Enter name again");
        }
      }
    } else if (input === "D") {
      let nameDelete = prompt(".....Enter name need to delete");
      for (let i = 0; i < phoneList.length; i++) {
        if (phoneList[i].name === nameDelete) {
          phoneList.splice(i, 1);
          printf(phoneList);
          break;
        } else {
          nameDelete = prompt(".....Enter name again");
        }
      }
    } else if (input === "E") {
      isCheck = false;
    } else {
      input = prompt("Please enter C/R/U/D");
    }
  }

//---------------------------Bai 1---------------

// const information = {
//     id: undefined,
//     name: undefined,
//     phone: undefined,
//     address: undefined
// }


// let idInput = prompt("Vui long nhap ID");
// let nameInput = prompt("Vui long nhap ten");
// let phoneInput = prompt("Vui long nhap so dien thoai");
// let addressInput = prompt("Vui long nhap dia chi");

// information.id = idInput;
// information.name = nameInput;
// information.phone = phoneInput;
// information.address = addressInput;


// for(let key in information){
//     console.log(`${key} : ${information[key]}`);
// }

//---------------------------Bai 2---------------
// const information = {
//     id: undefined,
//     name: undefined,
//     phone: undefined,
//     address: undefined
// }

// delete information.address;
// information.email = undefined;

// console.log(information);

//---------------------------Bai 3---------------

// let numberStudent = +prompt("Moi nhap vao so luong sinh vien");

// let studentList = [];
// while(numberStudent > 0){
//     let id = +prompt("Moi nhap vao id sinh vien");
//     let name = prompt("Moi nhap vao ten sinh vien");
//     studentList.push({
//         id: id,
//         name: name,
//     });1
//     numberStudent--;
// }
// console.log(studentList);

//---------------------------Bai 4---------------

// const product = {
//     id: 1,
//     name: "Iphone 12 Pro max",
//     price: "$1000",
//     quantity: 1
// }

// for(let key in product){
//     console.log(`${key}: ${product[key]}`);
// }

//---------------------------Bai 5---------------

// let bookList = [
//     {
//         author: "Pinky",
//         name: "Những đứa trẻ",
//     },
//     {
//         author: "Auth",
//         name: "Chuyện như chưa bắt đầu",
//     }
// ]

// let flag = true;
// while(flag){
//     let input = prompt("Vui long nhập tên tác giả");
//     let isCheck = false;
//     let tmp = undefined;
//     for(let value of bookList){
//         if(value.author === input && input === "Auth"){
//             isCheck = true;
//             tmp = value;
//         }
//     }

//     if(isCheck){
//         console.log(tmp);
//         flag = false;
//     }else{
//         console.log("Không tìm thấy sách");
//     }
// }

//---------------------------Bai 6---------------

// let products = [
//     {
//         id: 1,
//         name: 'iPhone 12',
//         price: 20000000,
//     },
//     {
//         id: 2,
//         name: 'iPhone 11',
//         price: 10000000,
//     },
//     {
//         id: 3,
//         name: 'samsung note 10',
//         price: 500000000,
//     }
// ]

// products.sort((a,b) => a.price - b.price);

// console.log(products);

//---------------------------Bai 7---------------

// let users = [];



// const validateEmail = (email) => {
//     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return  regex.test(email) ? true : false;
// };

// let isCheck = true;
// while(isCheck){
//     let id = prompt("Vui long nhap id");

//     let userName = prompt("Vui long nhap username");;

//     let email = prompt("Vui long nhap email");;

//     let password = prompt("Vui long nhap password");;

//     if(userName !=="" && email !=="" && password !== ""
//     && userName.length >= 3 && password.length >=8 && validateEmail(email)
//     ){
//         users.push({
//             id: id,
//             userName : userName,
//             email: email,
//             password: password,
//         })
//         for(let value of users){
//             for(let key in value){
//                 console.log(`${key} : ${value[key]}`);
//             }
//         }
//         isCheck = false;
//     }else{
//         prompt("Vui long nhap lai du lieu");
//     }
// }



//---------------------------Bai 8---------------

// let users = [];



// const validateEmail = (email) => {
//     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return  regex.test(email) ? true : false;
// };

// let isCheck = true;
// while(isCheck){
//     input = +prompt("Nhap cac so 1/2/3");
//     if(input === 1){
//         let id = prompt("Vui long nhap id");

//         let userName = prompt("Vui long nhap username");

//         let email = prompt("Vui long nhap email");

//         let password = prompt("Vui long nhap password");
//         if(userName !=="" && email !=="" && password !== ""
//         && userName.length >= 3 && password.length >=8 && validateEmail(email)
//         ){
//             users.push({
//                 id: id,
//                 userName : userName,
//                 email: email,
//                 password: password,
//             })
//             for(let value of users){
//                 for(let key in value){
//                     console.log(`${key} : ${value[key]}`);
//                 }
//             }
//         }else{
//             prompt("Vui long nhap lai du lieu");
//         }
//     }else if(input === 2){
//         let emailValid = prompt("Vui long nhap email");;

//         let passwordValid = prompt("Vui long nhap password");
//         let flag = false;
//         for(let value of users){
//             if(value.email === emailValid && value.password === passwordValid){
//                 flag = true;
//             }
//         }
//         if(flag){
//             prompt("Dang nhap thanh cong");
//         }else{
//             prompt("Dang nhap that bai");
//         }
//     }else if(input === 3){
//         isCheck = false;
//     }else{
//         input = +prompt("Nhap cac so 1/2/3");
//     }
    
// }

//---------------------------Bai 9---------------

// let contacts = [
//     {
//         name: "Hong",
//         phone: '0244238',
//         email: 'xuanhong258@gmail.com'
//     },
//     {
//         name: "Xuan",
//         phone: '028',
//         email: 'hong258@gmail.com'
//     }
// ];


// function addContact(name, phone, email){
//     contacts.push({
//         name : name,
//         phone: phone,
//         email: email,
//     })
// }
// let nameInput = prompt("Vui long nhap ten");
// let phoneInput = prompt("Vui long nhap so dien thoai");
// let emailInput = prompt("Vui long nhap dia chi email");
// addContact(nameInput, phoneInput, emailInput);

// function findContactByName(name){
//     let isCheck = false;
//     let tmp = undefined;
//     for(let contact of contacts){
//         if(contact.name === name){
//             isCheck = true;
//             tmp = contact;
//         }
//     }
//     if(!isCheck){
//         console.log("Khong tim thay lien he");
//     }else{
//         console.log(tmp);
//     }
// }


// function displayContacts(){
//     console.log(contacts);
// }


// function deleteContactByName(name){
//     for(let i = 0; i< contacts.length; i++ ){
//         if(name === contacts[i].name){
//             contacts.splice(i,1);
//         }
//     }
//     displayContacts();
// }

// function updateContactByName(name, updatedInfo){
//     for(let value of contacts){
//         if(name === value.name){
//             value.phone = updatedInfo.phone;
//             value.email = updatedInfo.email;
//         }
//     }
//     displayContacts();
// }

// updateContactByName("Hong", {
//     phone : "12345",
//     email : "haichausuper@gmail.com"
// })

//---------------------------Bai 10---------------

// let shoppingCart = [
//     {
//         name : "Iphone",
//         price : 100000,
//         quantity: 1,
//     },
//     {
//         name : "Samsung",
//         price : 1100000,
//         quantity: 2,
//     }
// ]


// function addToCart(productName, price, quantity){
//     for(let value of shoppingCart){
//         if(value.name === productName){
//             value.quantity = quantity;
//             break;
//         }else{
//             shoppingCart.push({
//                 name : productName,
//                 price : price,
//                 quantity: quantity,
//             })
//             break;
//         }
//     }
//     console.log(shoppingCart);
// }

// function removeFromCart(productName){
//     for(let i = 0; i < shoppingCart.length; i++){
//         if(shoppingCart[i].name === productName){
//             shoppingCart.splice(i,1);
//         }
//     }
//     console.log(shoppingCart);
// }

// removeFromCart("Iphone")


// function calculateTotal(){
//     let sum = 0;
//     for(let value of shoppingCart){
//         value.getPrice = function(){
//             return this.price * this.quantity;
//         }
//         sum += value.getPrice();
//     }
//     console.log(`Tổng giá trị của giỏ hàng là: ${sum}`);
// }

// calculateTotal()

// function displayCart(){
//     for(let value of shoppingCart){
//         for(let key in value){
//             console.log(`${key}: ${value[key]}`);
//         }
//         value.getPrice = function(){
//             return this.price * this.quantity;
//         }
//         console.log(`Total price of ${value.name} is: ${value.getPrice()}`);
//         console.log("------------------------");
//     }
// }

// displayCart()


// function clearCart(){
//     shoppingCart.splice(0);
//     console.log(shoppingCart);
// }

// clearCart()