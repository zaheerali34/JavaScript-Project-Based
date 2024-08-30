const image = document.querySelectorAll(".image");
const mainImage = document.querySelector("#mainImage");
const sizeBtn = document.querySelectorAll(".size-btn");

image.forEach((item) => {
  item.addEventListener("click", () => {
    mainImage.src = item.src;

    image.forEach((el) => {
      el.classList.remove("selecteds");
    });
    item.classList.add("selecteds");
  });
});

sizeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    sizeBtn.forEach((btn) => {
      btn.classList.remove("selected");
    });
    item.classList.add("selected");
  });
});
