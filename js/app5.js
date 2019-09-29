const idSelector = (store, id) => {
  //   console.log(cersei);
  //   console.log(document.getElementById(id).innerHTML);
  if (document.getElementById(id).innerHTML) {
    console.log("djhj");
  } else {
    console.log("no avatar");
  }
};

/***************************************************************************/

let cersei = "";
let daenerys = "";
const selector = () => {
  document.getElementById("start").disabled = true;
  let indexA1 = getRandomIndex(0, store.length - 1);
  let indexA2 = getRandomIndex(0, store.length - 1);
  let indexB1 = getRandomIndex(0, store.length - 1);
  let indexB2 = getRandomIndex(0, store.length - 1);
  let indexA = `${indexA1}${indexA2}`;
  let indexB = `${indexB1}${indexB2}`;
  while (indexA === indexB) {
    indexB1 = getRandomIndex(0, store.length - 1);
    indexB = `${indexB1}${indexB2}`;
  }
  let selectedA = document.getElementById(indexA);
  daenerys = "<img src='./../css/daenerys.png' width='16' height='16'>";
  selectedA.innerHTML = daenerys;
  let selectedB = document.getElementById(indexB);
  cersei = "<img src='./../css/cersei.png' width='16' height='16'>";
  selectedB.innerHTML = cersei;
  // store[indexA1][indexA2] = true;
  // store[indexB1][indexB2] = true;
  // console.log("select", store);
};

//get random index
const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//main part
var store = [];
let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
  store[i] = [];
  let tr = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");
    td.setAttribute("id", `${i}${j}`);
    store[i][j] = false;
    td.addEventListener("click", () =>
      idSelector(store, td.getAttribute("id"))
    );
    td.className = "grey";
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
console.log("store", store);
document.body.appendChild(table);
