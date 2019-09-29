let selectedId = "";
let notSelectedId = "";
let selectedAvatar = "";
let activeUser = true;

let path = [];
for (let i = 0; i < 10; i++) {
  path[i] = [];
  for (let j = 0; j < 10; j++) {
    path[i][j] = false;
  }
}

const idSelector = (store, id) => {
  console.log(id);
  console.log(document.getElementById(id).innerHTML);
  if (document.getElementById(id).innerHTML) {
    let [i, j] = id.split("");
    i = parseInt(i);
    j = parseInt(j);
    if (store[i][j] === "A") {
      console.log("A");
      // store[i][j] = "";
      selectedId = `${i}${j}`;
      selectedAvatar = selectedA.innerHTML;
    }
    if (store[i][j] === "B") {
      console.log("B");
      // store[i][j] = "";
      selectedId = `${i}${j}`;
      selectedAvatar = selectedB.innerHTML;
    }
    store[i + 1] === undefined ? null : (path[i + 1][j] = true); //checked only for 1st index because if 1st index is undefined, then 2nd index will be an uncaught type error
    store[i + 2] === undefined ? null : (path[i + 2][j] = true);
    store[i - 1] === undefined ? null : (path[i - 1][j] = true);
    store[i - 2] === undefined ? null : (path[i - 2][j] = true);
    store[i][j + 1] === undefined ? null : (path[i][j + 1] = true);
    store[i][j + 2] === undefined ? null : (path[i][j + 2] = true);
    store[i][j - 1] === undefined ? null : (path[i][j - 1] = true);
    store[i][j - 2] === undefined ? null : (path[i][j - 2] = true);
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        if (path[i][j] === true) {
          document.getElementById(`${i}${j}`).className = "yellow";
        }
      }
    }
  }
  if (document.getElementById(id).className === "yellow") {
    // document.getElementById(id).innerHTML = selectedAvatar; // new id
    document.getElementById(selectedId).innerHTML = null; //old Id
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        document.getElementById(`${i}${j}`).className = "grey";
        path[i][j] = false;
      }
    }

    console.log("me", activeUser);
    if (activeUser === true) {
      indexA = id;
      let [i, j] = indexA.split("");
      i = parseInt(i);
      j = parseInt(j);
      let [k, l] = selectedId.split("");
      k = parseInt(k);
      l = parseInt(l);
      store[k][l] = "";
      store[i][j] = "A";
      document.getElementById(indexA).innerHTML = selectedAvatar;
      console.log(document.getElementById(indexA));
      activeUser = false;
      idSelector(store, indexB);
    } else if (activeUser === false) {
      indexB = id;
      let [i, j] = indexB.split("");
      i = parseInt(i);
      j = parseInt(j);
      let [k, l] = selectedId.split("");
      k = parseInt(k);
      l = parseInt(l);
      store[k][l] = "";
      store[i][j] = "B";
      document.getElementById(indexB).innerHTML = selectedAvatar;
      idSelector(store, indexA);
      activeUser = true;
    }
  }
};

/***************************************************************************/
let indexA = "";
let indexB = "";
let selectedA = "";
let selectedB = "";
const selector = () => {
  document.getElementById("start").disabled = true;
  let indexA1 = getRandomIndex(0, store.length - 1);
  let indexA2 = getRandomIndex(0, store.length - 1);
  let indexB1 = getRandomIndex(0, store.length - 1);
  let indexB2 = getRandomIndex(0, store.length - 1);
  indexA = `${indexA1}${indexA2}`;
  indexB = `${indexB1}${indexB2}`;
  while (indexA === indexB) {
    indexB1 = getRandomIndex(0, store.length - 1);
    indexB = `${indexB1}${indexB2}`;
  }
  selectedA = document.getElementById(indexA);
  let daenerys = "<img src='./../css/daenerys.png' width='16' height='16'>";
  selectedA.innerHTML = daenerys;
  store[indexA1][indexA2] = "A"; //danerys
  selectedB = document.getElementById(indexB);
  let cersei = "<img src='./../css/cersei.png' width='16' height='16'>";
  selectedB.innerHTML = cersei;
  store[indexB1][indexB2] = "B"; //cersei
  console.log(indexA);
  idSelector(store, indexA);
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
    store[i][j] = "";
    let td = document.createElement("td");
    td.setAttribute("id", `${i}${j}`);
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
