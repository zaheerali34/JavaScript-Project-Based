const faq = document.querySelectorAll(".faq");

faq.forEach((e)=> {
    const icone = e.querySelector(".icone")
    const aws = e.querySelector(".aws");

    e.addEventListener("click", ()=> {
        if (icone.classList.contains("active")) {
            icone.classList.remove("active");
            aws.style.maxHeight = null;
        } else {
            icone.classList.add("active");
            aws.style.maxHeight = aws.scrollHeight + "px";
        }
    })
    
})
