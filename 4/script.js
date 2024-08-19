const conut_num = document.querySelector("#conut_num");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let num = 0;

increase.addEventListener("click", () => {
  conut_num.innerText = num = num + 1;
  conut_num.style.color = "green";
});

decrease.addEventListener("click", () => {
  conut_num.innerText = num = num - 1;
  conut_num.style.color = "red";
});
