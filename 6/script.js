const input = document.querySelector("input");
const button = document.querySelector("button");

let tag = false;
button.addEventListener("click", function () {
  if (!tag) {
    button.innerText = "Show";
    input.type = "text";
    tag = true;
  } else {
    button.innerText = "Hide";
    input.type = "password";
    tag = false;
  }
});
