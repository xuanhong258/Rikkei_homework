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


  let addBtn = document.querySelector(".add-btn");

  addBtn.onclick = () => {
    let users = JSON.parse(localStorage.users);
    let user = {
        id: users[users.length - 1] + 1,
        userName: document.getElementById("userName").value,
        userPassword: document.getElementById("userPassword").value,
        userEmail: document.getElementById("userEmail").value,
        status: 'New Account',
        title: document.getElementById("title").value,
    }
    let confirm = window.confirm("Bạn có muốn tạo account này không??");

    if(confirm){
        users.push(user);
    
        localStorage.users = JSON.stringify(users);

        alert("Thêm mới account thành công");
    }
  }


function notice (){
    let confirm = window.confirm("Bạn có muốn hủy tạo account này không??");

    if(confirm){
        location.replace('userAccount.html');
    }
}