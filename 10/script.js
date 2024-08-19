const text = document.getElementById("text");
const heading = "frontend developer";

let index = 1;

function writer() {
    text.innerHTML = heading.slice(0, index);
    index++;

    if (index > heading.length) {
        index = 1;
    }

    setTimeout(()=> {
        writer();
    }, 300)
}

writer();