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


  function openNavLogout(){
    document.querySelector('.options').style.display = 'block';
    document.querySelector('.log-out-icon i:nth-child(1)').style.display = 'none';
    document.querySelector('.log-out-icon i:nth-child(2)').style.display = 'block';
  }


  function closeNavLogout(){
    document.querySelector('.options').style.display = 'none';
    document.querySelector('.log-out-icon i:nth-child(1)').style.display = 'block';
    document.querySelector('.log-out-icon i:nth-child(2)').style.display = 'none';
  }

let nameAdmin = document.querySelector('.name-admin');


let id = window.location.search.split("=")[1];

let userAccount = JSON.parse(localStorage.userAccount);

let isCheck = false;

let position;

userAccount.forEach((user,index) => {
  if(user.id === +id){
    isCheck = true;
    position = index;
  }
});

if(isCheck){
  nameAdmin.innerText = userAccount[position].userName;
}


//Back trang chủ vẫn giữ nguyên user đăng nhập
let brandIcon = document.getElementById('brand-icon');

let flag = false;
let pos;
userAccount.forEach((el,index) => {
  if(el.status){
    flag = true;
    pos = index;
  }
})

brandIcon.onclick = () => {
  location.href = `generalInterface.html?id=${userAccount[pos].id}`;
}