const button = document.querySelectorAll(".btn");
const body = document.querySelector("body");

button.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.id === "red") {
      body.style.backgroundColor = "red";
    }

    if (el.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }

    if (el.id === "blue") {
      body.style.backgroundColor = "blue";
    }

    if (el.id === "green") {
      body.style.backgroundColor = "green";
    }
  });
});
