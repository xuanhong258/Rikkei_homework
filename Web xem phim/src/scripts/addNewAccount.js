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

let addBtn = document.querySelector(".add-btn");

let users = JSON.parse(localStorage.users);
addBtn.onclick = () => {
  let user = {
    id: users[users.length - 1].id + 1,
    userName: document.getElementById("userName").value,
    userPassword: document.getElementById("userPassword").value,
    userEmail: document.getElementById("userEmail").value,
    status: "New Account",
    title: document.getElementById("title").value,
  };
  let confirm = window.confirm("Bạn có muốn tạo account này không??");

  if (confirm) {
    users.push(user);

    localStorage.users = JSON.stringify(users);
    window.location.href = 'userAccount.html';

    alert("Thêm mới account thành công");
  }
};

function notice() {
  let confirm = window.confirm("Bạn có muốn hủy tạo account này không??");

  if (confirm) {
    window.location.href = 'userAccount.html';
  }
}
