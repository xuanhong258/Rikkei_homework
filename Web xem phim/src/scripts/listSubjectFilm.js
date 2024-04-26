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


let listFilm = JSON.parse(localStorage.listFilm);

let actionListFilm = document.querySelector("tbody .action");

let singleMovie = document.querySelector(".singleMovie");

let comedyFilm = document.querySelector(".comedyFilm");

let cartoonFilm = document.querySelector(".cartoonFilm");

function render() {
  actionListFilm.innerHTML = "";
  singleMovie.innerHTML = "";
  comedyFilm.innerHTML = "";
  cartoonFilm.innerHTML = "";
  listFilm.forEach((el, index) => {
    if (el.filmSubject === "phim hành động") {
      actionListFilm.innerHTML += `
        <td class="col-2">
            <span>
              <img style="width:160px;height:240px;" src="${el.image}" alt="">
            </span>
            <span>
              <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
              <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
            </span>
            ${el.filmName}
        </td>
        `;
    } else if (el.filmSubject === "phim lẻ") {
      singleMovie.innerHTML += `
      <td class="col-2">
      <span>
        <img style="width:160px;height:240px;" src="${el.image}" alt="">
      </span>
      <span>
        <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
        <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
      </span>
          ${el.filmName}
      </td>
        `;
    } else if (el.filmSubject === "phim hài") {
      comedyFilm.innerHTML += `
      <td class="col-2">
        <span>
          <img style="width:160px;height:240px;" src="${el.image}" alt="">
        </span>
      <span>
        <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
        <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
      </span>
      ${el.filmName}
  </td>
          `;
    } else if (el.filmSubject === "phim hoạt hình") {
      cartoonFilm.innerHTML += `
          <td class="col-2">
          <span>
              <img style="width:160px;height:240px;" src="${el.image}" alt="">
          </span>
          <span>
              <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
              <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
            </span>
            ${el.filmName}
          </td>
        `;
    }
  });
}

render();

let deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach((el) => {
  el.onclick = (e) => {
    e.preventDefault();
    let idFilm = e.target.id.split("-")[1];

    let index = listFilm.findIndex((el) => {
      return el.id === +idFilm;
    });

    let confirm = window.confirm(
      "Bạn có muốn xóa phim này khỏi danh mục phim này không?"
    );

    if (confirm) {
      listFilm.splice(index, 1);

      localStorage.listFilm = JSON.stringify(listFilm);

      render();
    }
  };
});
