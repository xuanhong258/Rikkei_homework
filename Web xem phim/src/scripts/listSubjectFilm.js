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

let listFilm = JSON.parse(localStorage.listFilm);

let actionListFilm = document.querySelector(".action");

let singleMovie = document.querySelector(".singleMovie");

let comedyFilm = document.querySelector(".comedyFilm");

let cartoonFilm = document.querySelector(".cartoonFilm");

function render() {
  actionListFilm.innerHTML = "";
  singleMovie.innerHTML = "";
  comedyFilm.innerHTML = "";
  cartoonFilm.innerHTML = "";
  listFilm.forEach((el, index) => {
    if (el.filmSubject === "Phim hành động") {
      actionListFilm.innerHTML += `
        <td class="col-1">
            <img style="width:160px;height:240px;" src="${el.image}" alt="">
            </br>
            <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
            <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
            </br>
            ${el.filmName}
        </td>
        `;
    } else if (el.filmSubject === "Phim lẻ") {
      singleMovie.innerHTML += `
        <td class="col-1">
            <img style="width:160px;height:240px;" src="${el.image}" alt="">
            </br>
            <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
            <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
            </br>
            ${el.filmName}
        </td>
        `;
    } else if (el.filmSubject === "Phim hài") {
      comedyFilm.innerHTML += `
          <td class="col-1">
              <img style="width:160px;height:240px;" src="${el.image}" alt="">
              </br>
              <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
              <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
              </br>
              ${el.filmName}
          </td>
          `;
    } else if (el.filmSubject === "Phim hoạt hình") {
      cartoonFilm.innerHTML += `
          <td class="col-1">
              <img style="width:160px;height:240px;" src="${el.image}" alt="">
              </br>
              <a href="listFilmDetail.html?id=${listFilm[index].id}" id="detail-btn" class="btn btn-secondary">Detail</a>
              <button id="btn-${listFilm[index].id}" class="btn btn-danger delete">Delete</button>
              </br>
              ${el.filmName}
          </td>
          `;
    }
  });
}

render();

let del = document.querySelector("table .cartoonFilm .delete");
del.onclick = (e) => {
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
