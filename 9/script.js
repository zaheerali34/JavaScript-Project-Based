const friend = document.querySelector("#friend");
let remove = false;

friend.addEventListener("click", function (e) {
  if (!remove) {
    friend.style.background = "salmon";
    friend.innerHTML = "Add Friend";
    remove = true;
  } else {
    friend.style.background = "royalblue";
    friend.innerHTML = "Remove Friend";
    remove = false;
  }
});
