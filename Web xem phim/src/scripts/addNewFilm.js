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


let cancelBtn = document.querySelector(".btn-danger");
cancelBtn.onclick = (e) => {
  e.preventDefault();

  let confirm = window.confirm("Dữ liệu chưa được lưu bạn có muốn thoát???");
  if (confirm) {
    location.replace('listFilm.html');
  }
};
let listFilm = JSON.parse(localStorage.listFilm);

let addBtn = document.querySelector(".btn-primary");


let img = document.querySelector("form img");

let chooseFile = document.getElementById("inputImage");
chooseFile.onchange = () => {
  img.src = URL.createObjectURL(chooseFile.files[0]);
};

let id = window.location.search.split("=")[1];

switch(id){
  case '1':
    document.getElementById("filmSubject").value = 'phim hành động';
    document.getElementById("filmSubject").setAttribute('readonly','');
    break;
  case '2':
    document.getElementById("filmSubject").value = 'phim lẻ';
    document.getElementById("filmSubject").setAttribute('readonly','');
    break;
  case '3':
    document.getElementById("filmSubject").value = 'phim hài';
    document.getElementById("filmSubject").setAttribute('readonly','');
    break;
  case '4':
    document.getElementById("filmSubject").value = 'phim hoạt hình';
    document.getElementById("filmSubject").setAttribute('readonly','');
    break;
  default:
    break;
}





addBtn.onclick = (e) => {
  e.preventDefault();
  let newFilm = {
    id: listFilm[listFilm.length - 1].id + 1,
    image: `../src/assets/images/`.concat(
      document.getElementById("inputImage").value.split("\\")[2]
    ),
    filmName: document.getElementById("inputFilmName").value,
    filmSubject: document.getElementById("filmSubject").value,
    condition: document.getElementById("inputCondition").value,
    comingSoon: document.getElementById("inputCommingsoon").value,
    director: document.getElementById("inputDirector").value,
    time: document.getElementById("inputTime").value,
    episodes: document.getElementById("episodes").value,
    status: document.getElementById("status").value,
    language: document.getElementById("language").value,
    yearOfProduction: document.getElementById("yearOfPublish").value,
    country: document.getElementById("country").value,
    genre: document.getElementById("genre").value,
    actor: document.getElementById("actor").value,
    like: document.getElementById("like").value,
    share: document.getElementById("share").value,
    like: document.getElementById("like").value,
    rating: document.getElementById("rating").value,
    numberOfRatings: document.getElementById("numberOfRating").value,
    description: document.getElementById("description").value,
  };

  let confirm = window.confirm("Bạn có muốn thêm mới phim này không???");
  if (confirm) {
    listFilm.push(newFilm);
    window.location.href = 'listSubjectFilm.html';
    alert("Đã thêm phim mới thành công!!!");
  }
  localStorage.listFilm = JSON.stringify(listFilm);
};
