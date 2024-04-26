function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  
    document.querySelector("span i:nth-child(2)").style.display = "block";
  
    document.querySelector("span i:first-child").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  
    document.querySelector("span i:nth-child(2)").style.display = "none";
  
    document.querySelector("span i:first-child").style.display = "block";
  }

//Back trang chủ vẫn giữ nguyên user đăng nhập
let brandIcon = document.getElementById('brand-icon');

console.log(brandIcon);
let userAccount = JSON.parse(localStorage.userAccount);

let isCheck = false;
let position;
userAccount.forEach((el,index) => {
  if(el.status){
    isCheck = true;
    position = index;
  }
})

brandIcon.onclick = () => {
  location.href = `generalInterface.html?id=${userAccount[position].id}`;
}



let users = JSON.parse(localStorage.users);

let id = window.location.search.split("=")[1];

let inputEmail = document.querySelector("input");


let index = users.findIndex(el => {
    return el.id === +id;
})

inputEmail.value = users[index].userEmail;

function sendMail(){
    let confirm = window.confirm("Bạn có muốn gửi mail cho người dùng này không??");
    if(confirm){
        alert("Gửi mail thành công");
    }
}

function notice(){
    let confirm = window.confirm("Bạn có muốn hủy gửi mail cho người dùng này không??");
    if(confirm){
        location.replace('userAccount.html');
    }
}