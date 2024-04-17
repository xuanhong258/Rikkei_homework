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

// // localStorage.userList = JSON.stringify([]);

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

let input = document.querySelector(".searching input");

let addBtn = document.querySelector("button");

let ul = document.querySelector("ul");

function render() {
    ul.innerHTML = ""
    let toDoList = JSON.parse(localStorage.toDoList);
    for(let value of toDoList){
        ul.innerHTML += value;
    }
}

render();

addBtn.onclick = () => {
    let toDoList = JSON.parse(localStorage.toDoList);
    if(input.value !== ""){
        ul.innerHTML = "";
        let item = 
            `<div id="${toDoList.length + 1}" class="list">
                <li class="list-item">${input.value}</li>
                <span class="icon"><i class="fa-solid fa-xmark"></i></span>
            </div>`
        toDoList.push(item);
        input.value = "";
        localStorage.toDoList = JSON.stringify(toDoList);
        toDoList = JSON.parse(localStorage.toDoList);
        for(let value of toDoList){
            ul.innerHTML += value;
        }
    }

}

if(localStorage.toDoList !== ""){
    let iconList = ul.querySelectorAll(".list span");
    let toDoList = JSON.parse(localStorage.toDoList);
        
    for(let value of iconList){
        value.onclick = () => {
            let divElement = value.parentNode;

            let position = +divElement.id - 1;
            toDoList.splice(position,1);
            localStorage.toDoList = JSON.stringify(toDoList);
            render();
        }
    }
}