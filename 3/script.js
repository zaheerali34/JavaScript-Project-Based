const start = document.getElementById("start");
const stop = document.getElementById("stop");
let body = document.body;

let intervalId;

function bg_Color() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
    return color;
}

function Start() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      body.style.backgroundColor = bg_Color();
    }, 1000);    
  }
}

start.addEventListener("click", () => {
  Start();
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

