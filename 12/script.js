let arr = [
  {
    Image: "./1.webp",
    story: "./img.webp",
  },

  {
    Image: "./2.webp",
    story: "./img.webp",
  },

  {
    Image: "./3.webp",
    story: "./img.webp",
  },

  {
    Image: "./4.webp",
    story: "./img.webp",
  },

  {
    Image: "./5.webp",
    story: "./img.webp",
  },
];

let storyBox = document.querySelector(".storyBox");
let full_bg = document.querySelector("#full_bg");

let cuter = "";
arr.forEach((el, idx) => {
  cuter += `
    <div class="cour">
        <img id="${idx}" src="${el.Image}" alt="">
    </div>
    `;
});

storyBox.innerHTML = cuter;
storyBox.addEventListener("click", function (el) {
  full_bg.style.display = "block";
  full_bg.style.backgroundImage = `url(${arr[el.target.id].story})`;
  
  setTimeout(()=> {
    full_bg.style.display = "none";
  },3000)
});
