let list = [];
let getItem = localStorage.getItem("items");

// for (let i = 0; i < list.length; i++) {}
document.querySelector("#add-button").onclick = add;

//isValidated function
function isValidated() {
  console.log("Running isValidated function");
  let isValid = false;
  let input = document.querySelector("#userInput");
  let dropd = document.querySelector("#select");
  if (input.value.length > 0 && dropd.value !== "") {
    // input = input;
    // dropd = dropd;
    // console.log(input);
    // console.log(dropd);
    // isValid = true;
    // newList.innerHTML = `
    // <span>➡</span>${input}
    // <span class="bg-blue-200 rounded p-0.5">${dropd}</span>`;
    input.classList.remove("border-red-500");
    dropd.classList.remove("border-red-500");
  }

  if (input.value.trim() === "") {
    input.classList.add("border-red-500");
  } else {
    input.classList.remove("border-red-500");
  }
  if (dropd.value === "") {
    dropd.classList.add("border-red-500");
  } else {
    dropd.classList.remove("border-red-500");
  }
  if (input.value.trim() !== "" && dropd.value !== "") {
    input.classList.remove("border-red-500");
    dropd.classList.remove("border-red-500");

    isValid = true;
    return isValid;
  }
}

if (getItem) {
  list = JSON.parse(getItem);
  for (let i = 0; i < list.length; i++) {
    let currentIndex = list[i];
    let newList = document.createElement("li");
    if (currentIndex.dropValue == "Fruit") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
     <span class="">➡</span>${currentIndex.inputValue}
     <span class="bg-green-200 rounded p-0.5">${currentIndex.dropValue}</span>`;
      document.querySelector("#list-items").appendChild(newList);
      console.log("hhhhhhhhhhhhhhhhhhhhhhh-ddddddddddddddddd");
    } else if (currentIndex.dropValue == "Dairy") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
     <span>➡</span>${currentIndex.inputValue}
     <span class="bg-pink-200 rounded p-0.5">${currentIndex.dropValue}</span>

`;
      document.querySelector("#list-items").appendChild(newList);
    } else if (currentIndex.dropValue == "vegetables") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
     <span>➡</span>${currentIndex.inputValue}
     <span class="bg-yellow-200 rounded p-0.5">${currentIndex.dropValue}</span>

`;
      document.querySelector("#list-items").appendChild(newList);
    } else if (currentIndex.dropValue == "grain") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
      <span>➡</span>${currentIndex.inputValue}
      <span class="bg-blue-200 rounded p-0.5">${currentIndex.dropValue}</span>

`;
      document.querySelector("#list-items").appendChild(newList);
    }
  }
}

// *******************------------******************
// Add function

function add(e) {
  e.preventDefault();
  console.log("Running add function");
  let inputValue = document.querySelector("#userInput").value.trim();
  let dropDown = document.querySelector("#select").value.trim();
  // let inputValue = userInput.value.trim();
  // let dropDown = select.value.trim();
  console.log(dropDown);
  let newList = document.createElement("li");

  if (isValidated()) {
    if (dropDown == "Fruit") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
         <span class="">➡</span>${inputValue}
         <span class="bg-green-200 rounded p-0.5">${dropDown}</span>`;
      document.querySelector("#list-items").appendChild(newList);
      console.log("hhhhhhhhhhhhhhhhhhhhhhh-ddddddddddddddddd");
    } else if (dropDown == "Dairy") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
         <span>➡</span>${inputValue}
         <span class="bg-pink-200 rounded p-0.5">${dropDown}</span>
  
  `;
      document.querySelector("#list-items").appendChild(newList);
    } else if (dropDown == "vegetables") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
         <span>➡</span>${inputValue}
         <span class="bg-yellow-200 rounded p-0.5">${dropDown}</span>
  
  `;
      document.querySelector("#list-items").appendChild(newList);
    } else if (dropDown == "grain") {
      newList.classList.add(
        "border-b",
        "border-gray-200",
        "py-2",
        "list-none",
        "list-inside"
      );
      newList.innerHTML = ` 
          <span>➡</span>${inputValue}
          <span class="bg-blue-200 rounded p-0.5">${dropDown}</span>
  
  `;
      document.querySelector("#list-items").appendChild(newList);
    }
    let objectArr = {
      inputValue: inputValue,
      dropValue: dropDown,
    };

    list.push(objectArr);
    console.log(objectArr);
    let listString = JSON.stringify(list);
    localStorage.setItem("items", listString);
    console.log(objectArr);
    console.log(list);
    select.value = "";
    userInput.value = "";
  } else {
    console.log("Invalid inputs");
  }

  console.log("lllllllllllllllllllllllllllllllllll------------");

  // let listItem = document.querySelectorAll("li");

  // *************------------*****************

  // isvalidate function
}
document.querySelector("#list-items").addEventListener("click", function (e) {
  console.log(e.target);

  if (e.target.tagName === "SPAN") {
    let removeItem = e.target.parentNode;
    let children = removeItem.parentNode.children;
    let childrenAray = Array.from(children);
    let index = childrenAray.indexOf(removeItem);
    list.splice(index, 1);
    let jsonString = JSON.stringify(list);
    localStorage.setItem("items", jsonString);

    removeItem.remove();
  }
});
