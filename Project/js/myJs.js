
// ========Sidebar======== 

let btn = document.getElementById("btn")
let sidebar = document.getElementById("sidebar")
let body = document.getElementById("fullbody")

btn.onclick = function () {
    body.classList.toggle("active")
    sidebar.classList.toggle("active")
}

// ========Home Boxes======== 
let box1 = document.getElementById("intro_box1")
let box2 = document.getElementById("intro_box2")
let box3 = document.getElementById("intro_box3")
let info1 = document.getElementsByClassName("info_area1")
let info2 = document.getElementsByClassName("info_area2")
let info3 = document.getElementsByClassName("info_area3")

    box1.onclick = function () {
        info1[0].classList.toggle("active")
        info2[0].classList.remove("active")
        info3[0].classList.remove("active")
    }
    box2.onclick = function () {
        info2[0].classList.toggle("active")
        info1[0].classList.remove("active")
        info3[0].classList.remove("active")
    }
    box3.onclick = function () {
        info3[0].classList.toggle("active")
        info1[0].classList.remove("active")
        info2[0].classList.remove("active")
    }