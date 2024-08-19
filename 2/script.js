let hex_Color = document.querySelector("#num");
let button = document.querySelector("#btn");

const random = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 4; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

button.addEventListener("click", () => {
  document.body.style.backgroundColor = random();
  hex_Color.innerHTML = random();
});
