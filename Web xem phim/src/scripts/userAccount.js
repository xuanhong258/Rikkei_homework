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

const users = [
  {
    id: 1,
    userName: "hong.tran",
    userPassword: "123",
    userEmail: "hong.tran@samsung.com",
    status: "Offline",
    title: "Admin",
  },
  {
    id: 2,
    userName: "hongbaby",
    userPassword: "abc",
    userEmail: "hong@samsung.com",
    status: "Active",
    title: "User",
  },
  {
    id: 3,
    userName: "xuanhong258",
    userPassword: "123abc",
    userEmail: "abc123@samsung.com",
    status: "Active 2 hours before",
    title: "User",
  },
  {
    id: 4,
    userName: "songoku98",
    userPassword: "qwerty",
    userEmail: "songoku@samsung.com",
    status: "Active",
    title: "Admin",
  },
  {
    id: 5,
    userName: "soicodoc",
    userPassword: "alonelacodon",
    userEmail: "soicodoc9x@samsung.com",
    status: "Offline",
    title: "User",
  },
];

// localStorage.users = JSON.stringify(users);
let tbody = document.querySelector("table tbody");

function render() {
  let users = JSON.parse(localStorage.users);

  tbody.innerHTML = "";

  for (let key in users) {
    let tr = `
                <tr>
                <td>${+key + 1}</td>
                <td>${users[key].userName}</td>
                <td>${users[key].userPassword}</td>
                <td>${users[key].userEmail}</td>
                <td>${users[key].status}</td>
                <td>${users[key].title}</td>
                <td class="button">
                    <span><i class="fa-solid fa-pen-to-square icon-edit"></i></span>
                    <a href="sendMailToUser.html?id=${
                      users[key].id
                    }"><i class="fa-regular fa-envelope icon-email"></i></a>
                    <span><i class="fa-solid fa-gear icon-setting"></i></span>
                </td>
            </tr>
        `;
    tbody.innerHTML += tr;
    localStorage.users = JSON.stringify(users);
  }
}

render();

//Search

let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", (e) => {
  let users = JSON.parse(localStorage.users);
  let inputSearch = document.querySelector(".search-input");

  let content = inputSearch.value;

  let tmp = [];
  let isCheck = false;
  if (content !== "") {
    users.forEach((el, index) => {
      if (el.userName.includes(content)) {
        isCheck = true;
        tmp.push(index);
      }
    });
    if (isCheck) {
      for (let value of tmp) {
        document.querySelector(".displayAll").innerHTML = "";
        let tr = `
                        <tr>
                        <td>${+value + 1}</td>
                        <td>${users[value].userName}</td>
                        <td>${users[value].userPassword}</td>
                        <td>${users[value].userEmail}</td>
                        <td>${users[value].status}</td>
                        <td>${users[value].title}</td>
                        <td class="button">
                            <span><i class="fa-solid fa-pen-to-square icon-edit"></i></span>
                            <a href="sendMailToUser.html?id=${
                              users[value].id
                            }"><i class="fa-regular fa-envelope icon-email"></i></a>
                            <span><i class="fa-solid fa-gear icon-setting"></i></span>
                        </td>
                    </tr>
                `;
        document.querySelector(".displayMatching").innerHTML += tr;
      }
    } else {
      alert("Không có kết quả phù hợp");
    }
  } else {
    alert("Vui lòng nhập từ khóa muốn tìm");
  }
});
