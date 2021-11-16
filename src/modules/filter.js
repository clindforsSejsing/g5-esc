import { challenges } from "../../main.js";

// Create array with all tags
const allTags = [];
for (let i in challenges) {
  for (let label of challenges[i].labels) {
    if (!allTags.includes(label)) {
      allTags.push(label);
    }
  }
}

// Create list with all tags displayed in DOM
const tagList = document.querySelector(".tagList");
allTags.forEach((item) => {
  let li = document.createElement("li");  
  li.innerText = item;
  tagList.append(li);

  //Toggle class to all tags
  li.addEventListener("click", function() {
    li.classList.toggle("active");
  })
});