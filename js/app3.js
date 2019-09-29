const idSelector = (store, id) => {
  if (document.getElementById(id).innerHTML) {
    let show = true;
    let selectedAvatar = document.getElementById(id).innerHTML;
    document.getElementById(id).className = "yellow";
    let [i, j] = id.split("");
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
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        if (store[i][j]) {
          console.log("prev move");
          document.getElementById(`${i}${j}`).className = "yellow";
          document.getElementById(`${i}${j}`).addEventListener("click", () => {
            moveHandler(`${i}${j}`, id, selectedAvatar, store, show);
          });
        }
      }
    }

    console.log(store);
  }
};

const moveHandler = (newId, oldId, selectedAvatar, show) => {
  console.log("move");
  if (
    document.getElementById(newId).className === "yellow" &&
    document.getElementById(oldId).className === "yellow" &&
    show
  ) {
    document.getElementById(newId).innerHTML = selectedAvatar;
    document.getElementById(oldId).innerHTML = null;
    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store.length; j++) {
        store[i][j] = false;
        document.getElementById(`${i}${j}`).className = "grey";

        document
          .getElementById(`${i}${j}`)
          .removeEventListener(
            "click",
            () => moveHandler(),
            selectedAvatar,
            true
          );
        console.log("gkjfdkg", i, j);
      }
    }

    show = false;

    // document.getElementById(newId).removeEventListener("click", () => {
    //   moveHandler(newId, id, selectedAvatar, store);
    // });
    // for (let i = 0; i < store.length; i++) {
    //   for (let j = 0; j < store.length; j++) {
    //     store[i][j] = false;
    //     // document.getElementById(`${i}${j}`).className = "grey";

    //     console.log("grey");
    //   }
    // }
    // document
    //   .getElementById(newId)
    //   .removeEventListener(
    //     "click",
    //     moveHandler(newId, oldId, selectedAvatar, store)
    //   );
    // console.log("removed");

    // moveClicked = false;

    // } else {
    //   console.log("move false");
    //   document.getElementById(newId).onclick = null;
    // }
  }
  // else {
  //   console.log("move false");
  //   document.getElementById(newId).onclick = null;
  //   // document.getElementById(oldId).innerHTML = selectedAvatar;
  // }
};

/***************************************************************************/
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
  const selectedA = document.getElementById(indexA);
  const daenerys = "<img src='./../css/daenerys.png' width='16' height='16'>";
  selectedA.innerHTML = daenerys;
  const selectedB = document.getElementById(indexB);
  const cersei = "<img src='./../css/cersei.png' width='16' height='16'>";
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
