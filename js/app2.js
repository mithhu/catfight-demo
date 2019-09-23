const idSelector = (store, id) => {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store.length; j++) {
      store[i][j] = false;
      document.getElementById(`${i}${j}`).className = "grey";
    }
  }
  if (document.getElementById(id).innerHTML) {
    console.log(id);
    let [i, j] = id.split("");
    i = parseInt(i);
    j = parseInt(j);

    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        store[i][j] = false;
        document.getElementById(`${i}${j}`).className = "grey";
      }
    }
    // console.log(id);
    store[i][j] = true;
    store[i + 1] === undefined ? null : (store[i + 1][j] = true); //checked only for 1st index because if 1st index is undefined, then 2nd index will be an uncaught type error
    store[i + 2] === undefined ? null : (store[i + 2][j] = true);
    store[i - 1] === undefined ? null : (store[i - 1][j] = true);
    store[i - 2] === undefined ? null : (store[i - 2][j] = true);
    store[i][j + 1] === undefined ? null : (store[i][j + 1] = true);
    store[i][j + 2] === undefined ? null : (store[i][j + 2] = true);
    store[i][j - 1] === undefined ? null : (store[i][j - 1] = true);
    store[i][j - 2] === undefined ? null : (store[i][j - 2] = true);

    // console.log("m", store);
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        if (store[i][j]) {
          console.log(i, j);
          document.getElementById(`${i}${j}`).className = "yellow";
        }
      }
    }
  }
};

const selector = e => {
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
  const selectedA = document.getElementById(indexA);
  const daenerys = "<img src='./../css/daenerys.png' width='16' height='16'>";
  selectedA.innerHTML = daenerys;
  const selectedB = document.getElementById(indexB);
  const cersei = "<img src='./../css/cersei.png' width='16' height='16'>";
  selectedB.innerHTML = cersei;
  store[indexA1][indexA2] = true;
  store[indexB1][indexB2] = true;
  console.log("select", store);
};

//get random index
const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
