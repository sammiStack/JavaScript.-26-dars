"use strict";

const parentDiv = document.querySelector(".parent"),
  circle = document.querySelectorAll(".circle");

const div = document.createElement("div");
div.classList.add("circle");
div.style.background = "black";

// circle[0].after(div);
// circle[0].before(div);

// parentDiv.append(div); // parentDiv ni oxiriga kontentni qoshadi
// parentDiv.prepend(div); // parentDiv ni boshiga kontentni qoshadi

// circle[1].remove();

console.log(div);
