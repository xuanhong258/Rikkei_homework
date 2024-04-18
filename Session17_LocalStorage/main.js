//----------------Bai 01-------------------------
//Người dùng nhập thông tin

// let personInfo = {
//         name: prompt("Nhập vào họ và tên"),
//         age: +prompt("Nhập vào tuổi"),
//         email: prompt("Nhập vào email"),
//     };

// localStorage.personInfo = JSON.stringify(personInfo);

// let getPersonInfo = JSON.parse(localStorage.personInfo);

// for(let key in getPersonInfo){
//     document.write(`${key}: ${getPersonInfo[key]} <br>`)
// }

//----------------Bai 02-----------------------------

// for(let key in localStorage){
//     if(localStorage.getItem(key) !== null){
//         console.log(`${key}: ${localStorage.getItem(key)}`);
//     }else{
//         break;
//     }
// }

//----------------Bai 03-----------------------------
// let players = [
//     {
//         id: 1,
//         name: "Nguyễn Văn A",
//         completed: false,
//     },
//     {
//         id: 2,
//         name: "Nguyễn Văn B",
//         completed: false,
//     },
//     {
//         id: 3,
//         name: "Trần Văn C",
//         completed: false,
//     }
// ]
// //put data vào local storage

// let input = document.querySelector("input");

// let ul = document.querySelector("ul");

// let btn = document.querySelector("button");

// // localStorage.playerList = JSON.stringify(players);

// let playerList = JSON.parse(localStorage.playerList);

// function render() {
//     ul.innerHTML = "";
//     playerList = JSON.parse(localStorage.playerList);
//     //Get data từ local storage
//     for(let value of playerList){
//         if(!value.completed){
//             let li = `<li id="${value.id}">${value.name}</li>`;
//             ul.innerHTML += li;
//         }else{
//             let li = `<li class="completed" id="${value.id}">${value.name}</li>`;
//             ul.innerHTML += li;
//         }
//     }

// }
// render();

// let liItems = ul.getElementsByTagName("li");

// Xóa cầu thủ theo ID
// btn.onclick = () =>{
//     let content = input.value;
//     for(let key in liItems){
//         if(liItems[key].id === content){
//             playerList.splice(key,1);
//         }
//     }
//     localStorage.playerList = JSON.stringify(playerList);
//     render();
// }
//----------------Bai 04-----------------------------

//Thêm cầu thủ
// btn.onclick = () =>{
//     let content = input.value;
//     let player = {
//         id: playerList[playerList.length - 1].id + 1,
//         name : content,
//         completed: false,
//     }
//     playerList.push(player);
//     localStorage.playerList = JSON.stringify(playerList);
//     render();
// }

//----------------Bai 05-----------------------------
// localStorage.users = JSON.stringify([]);

// let userName = document.querySelector(".username");

// let password = document.querySelector(".password");

// let email = document.querySelector(".email");

// let submitBtn = document.querySelector(".submit");

// submitBtn.onclick = () => {
//     let users = JSON.parse(localStorage.users);
//     let user = {
//         name : userName.value,
//         password : password.value,
//         email : email.value,
//     }

//     users.push(user);

//     localStorage.users = JSON.stringify(users);
// }

//----------------Bai 06-----------------------------

// // sessionStorage.userSession = [];

// let userName = document.querySelector(".username");

// let password = document.querySelector(".password");

// let submitBtn = document.querySelector(".submit");

// let flag = false;

// submitBtn.onclick = () => {
//     let userSession = JSON.parse(sessionStorage.userSession);
//     let users = JSON.parse(localStorage.users);
//     for(let key in users){
//         if(users[key].name === userName.value && users[key].password === password.value){
//             userSession.push({
//                 id: key + 1,
//                 name : userName.value,
//                 password : password.value
//             });
//             flag = true;
//             sessionStorage.userSession = JSON.stringify(userSession);
//         }
//     };

//     if(!flag){
//         alert("Thông tin nhập vào chưa chính xác");
//     }
// }

//----------------Bai 07-----------------------------

// localStorage.userList = JSON.stringify([]);

// let input = document.querySelector("input");

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let ul = document.querySelector("ul");

// addBtn.onclick = () => {
//     ul.innerHTML = "";

//     localStorage.userName = input.value;

//     if(input.value !== "" && localStorage.userName !== ""){
//         ul.innerHTML += `<li>Người dùng tên: <b>${localStorage.userName}</b></li>`
//         addBtn.classList.add("remove");
//     }
// }
// if(localStorage.userName !== ""){
//     addBtn.classList.add("remove");
//     ul.innerHTML += `<li>Người dùng tên: <b>${localStorage.userName}</b></li>`
// }

// removeBtn.onclick = () => {
//     ul.innerHTML = "";
//     localStorage.userName = "";
//     addBtn.classList.remove("remove");
// }

//----------------Bai 08-----------------------------

// localStorage.toDoList = JSON.stringify([]);

// let input = document.querySelector(".searching input");

// let addBtn = document.querySelector("button");

// let ul = document.querySelector("ul");

// function render() {
//   ul.innerHTML = "";
//   let toDoList = JSON.parse(localStorage.toDoList);
//   for (let value of toDoList) {
//     ul.innerHTML += value.content;
//   }
// }

// render();
// // Add toDoList
// addBtn.onclick = () => {
//   let toDoList = JSON.parse(localStorage.toDoList);
//   if (input.value !== "") {
//     let item = `<div id="${toDoList.length + 1}" class="list">
//                 <li class="list-item">${input.value}</li>
//                 <span class="icon"><i class="fa-solid fa-xmark"></i></span>
//             </div>`;
//     toDoList.push({
//       id: toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1,
//       content: item,
//     });
//     input.value = "";
//     localStorage.toDoList = JSON.stringify(toDoList);
//     render();
//   }
// };
// // Remove toDoList
// if (localStorage.toDoList !== "") {
//   ul.onclick = (e) => {
//     let toDoList = JSON.parse(localStorage.toDoList);
//     if (e.target.classList.contains("fa-solid")) {
//       let divElement = e.target.parentElement.parentElement;

//       let index = toDoList.findIndex((el) => {
//         return el.id === +divElement.id;
//       });
//       toDoList.splice(index, 1);
//       localStorage.toDoList = JSON.stringify(toDoList);
//       render();
//     }
//   };
// }

//----------------Bai 09-----------------------------

// localStorage.productItem = JSON.stringify([]);

let inputProductName = document.querySelector(".item-name");

let inputProductPrice = document.querySelector(".item-price");

let addNewItemBtn = document.querySelector(".add-new-item");

let editItemBtn = document.querySelector(".edit-item");

let ul = document.querySelector(".display-item-list");

function render() {
  ul.innerHTML = "";
  let productItem = JSON.parse(localStorage.productItem);
  for (let value of productItem) {
    ul.innerHTML += value.item;
  }
}

render();

addNewItemBtn.onclick = () => {
  let nameItem = inputProductName.value;
  let priceItem = inputProductPrice.value;
  let productItem = JSON.parse(localStorage.productItem);
  let id =
    productItem.length > 0 ? productItem[productItem.length - 1].id + 1 : 1;

  let li = `<li id="${id}" class="item">
                <span class="id">${id}</span>
                <span class="name">${nameItem}</span>
                <span class="price">$${priceItem}</span>
                <span>
                    <button class="edit-btn">Sửa</button>
                    <button class="delete-btn">Xóa</button>
                </span>
            </li>`;
  productItem.push({
    id: id,
    item: li,
  });
  localStorage.productItem = JSON.stringify(productItem);
  inputProductName.value = inputProductPrice.value = "";
  ul.innerHTML += li;
  render();
};

let editBtns = document.querySelectorAll(".edit-btn");
let deleteBtns = document.querySelectorAll(".delete-btn");

ul.onclick = (e) => {
  let productItem = JSON.parse(localStorage.productItem);
  if (e.target.classList.contains("edit-btn")) {
    addNewItemBtn.classList.add("display-none");
    editItemBtn.classList.remove("display-none");

    let liElement = e.target.parentElement.parentElement;

    let nameInColumn = liElement.querySelector(".name");
    let priceInColumn = liElement.querySelector(".price");

    inputProductName.value = nameInColumn.innerText;
    inputProductPrice.value = priceInColumn.innerText.slice(1);

    editItemBtn.onclick = () => {
      let itemNameUpdate = inputProductName.value;
      let itemPriceUpdate = inputProductPrice.value;
      let orderListInColumn = liElement.querySelector(".id").innerText;
      productItem.forEach((element, index) => {
        if (element.id === +orderListInColumn) {
          element.item = `<li id="${orderListInColumn}" class="item">
                <span class="id">${orderListInColumn}</span>
                <span class="name">${itemNameUpdate}</span>
                <span class="price">$${itemPriceUpdate}</span>
                <span>
                    <button class="edit-btn">Sửa</button>
                    <button class="delete-btn">Xóa</button>
                </span>
            </li>`;
          localStorage.productItem = JSON.stringify(productItem);
          inputProductName.value = inputProductPrice.value = "";
          render();
          addNewItemBtn.classList.remove("display-none");
          editItemBtn.classList.add("display-none");
        }
      });
    };
  }
};
