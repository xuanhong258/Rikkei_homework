//--------------------Bai 07--------------------------------
let tableElement = document.querySelector("table");
console.dir(tableElement);

let btn = document.querySelector("button");
let tmp = [
    `<tr>
        <td>Cell 1 row 1</td>
        <td>Cell 2 row 1</td>
        <td>Cell 3 row 1</td>
    </tr>`
];
let i = 1;
let j = 2;
btn.onclick = () => {
    tmp.push(`
    <tr>
        <td>Cell ${i} row ${j}</td>
        <td>Cell ${i + 1} row ${j}</td>
        <td>Cell ${i + 2} row ${j}</td>
    </tr>
    `);
    j++;
    tableElement.innerHTML = tmp.join("");
}

//--------------------Bai 08--------------------------------
// let btnList = document.querySelectorAll("tr td button");

// let rows = document.querySelectorAll("tr");

// for(let i = 0; i < rows.length; i++ ){
//     btnList[i].onclick = () =>{
//         rows[i].style.display = "none";
//     }
// }

//--------------------Bai 09--------------------------------
// let inputElement = document.querySelector("input")
// let btnEditItem = document.querySelector("#edit-item")

// let btnList = document.querySelectorAll(".btn-edit");
// console.log(btnList);

// let liElements = document.querySelectorAll("li");

// console.log(liElements);

// for(let i = 0; i < liElements.length; i++ ){
//     btnList[i].onclick = () =>{
//         inputElement.value = liElements[i].innerText;
//         btnEditItem.onclick = () =>{
//             liElements[i].innerText = inputElement.value;
//         }
//     }
// }
