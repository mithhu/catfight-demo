const idSelector = store => {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store.length; j++) {
      store[i][j] = false;
      document.getElementById(`${i}${j}`).className = "green";
    }
  }
  const selectedElement = event.srcElement.id;
  if (
    document.getElementById(selectedElement).innerHTML === "A" ||
    document.getElementById(selectedElement).innerHTML === "B"
  ) {
    console.log(selectedElement);
    let [i, j] = selectedElement.split("");
    i = parseInt(i);
    j = parseInt(j);
    store[i][j] = true;
    store[i + 1] === undefined ? null : (store[i + 1][j] = true); //checked only for 1st index because if 1st index is undefined, then 2nd index will be an uncaught type error
    store[i + 2] === undefined ? null : (store[i + 2][j] = true);
    store[i - 1] === undefined ? null : (store[i - 1][j] = true);
    store[i - 2] === undefined ? null : (store[i - 2][j] = true);
    store[i][j + 1] === undefined ? null : (store[i][j + 1] = true);
    store[i][j + 2] === undefined ? null : (store[i][j + 2] = true);
    store[i][j - 1] === undefined ? null : (store[i][j - 1] = true);
    store[i][j - 2] === undefined ? null : (store[i][j - 2] = true);

    console.log("m", store);
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        if (store[i][j]) {
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
  selectedA.innerHTML = "A";
  const selectedB = document.getElementById(indexB);
  selectedB.innerHTML = "B";
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
    td.addEventListener("mouseover", () => idSelector(store));
    td.className = "green";
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
console.log("store", store);
document.body.appendChild(table);
