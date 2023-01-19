//creating randomimage  

let imgClass = ["img1", "img2", "img3", "img4", "img5"]
let randomIndex = Math.floor(Math.random() * imgClass.length)
let randomImage = imgClass[randomIndex]
imgClass.push(randomImage);

// shuffling images each time 

let arr = []
let l = 0
while (l < imgClass.length) {
    let randomindex = Math.floor(Math.random() * 6)
    if (arr[randomindex] == undefined) {
        arr[randomindex] = imgClass[l]
        l++;
    }
    else if (arr[randomindex] != undefined) { continue; }

}

//pushing class to 6 images
let images = document.querySelectorAll("img")

for (let i = 0; i < arr.length; i++) {
    images[i].setAttribute("class", arr[i])
    images[i].setAttribute("id", i)
}
//other methods
/*
   let k =0
   for(let i of imgClass){
images[k++].setAttribute("class",i)
}

let k=0
arr.map((img)=>{
    images[k++].setAttribute("class",img)
    })
*/

let btns = document.querySelectorAll("button")
for (let t of btns) {
    t.style.display = "none";
}

let message = document.querySelectorAll("p")
for (let t of message) {
    t.style.display = "none";
}

//adding eventlistener to diff images

for (let t of images) {
    t.addEventListener("click", userOrrobot)

}

// for repeat click and different click
let count = 0
let prevImgid = ''

function userOrrobot(e) {
    //let warning = document.getElementById("h")
    //warning.remove()
    btns[0].style.display = "inline"
    //2nd method
    /*
    let resetbtn = document.getElementById("reset")
    resetbtn.style.display="inline" 
    */

    // for repeat click and different click
    let currentImgId = e.target.id;
    images[currentImgId].classList.add("selected")
    if (currentImgId != prevImgid) {
        count++;
        prevImgid = currentImgId

        if (count == 2) {
            btns[1].style.display = "inline"
        }
    }

}


//reset button
btns[0].addEventListener("click", reset)
function reset(e) {
    btns[0].style.display = "none"
    btns[1].style.display = "none"
    count = 0;
    message[1].style.display = "none";
    message[0].style.display = "none";

    let selectedimages = document.querySelectorAll(".selected")
    for (let t of selectedimages) {
        t.classList.remove("selected")
    }
}


//verify button
btns[1].addEventListener("click", verify)
function verify() {
    let selectedimages = document.querySelectorAll(".selected")
    let class1 = selectedimages[0].className
    let class2 = selectedimages[1].className
    if (class1 == class2) {
        btns[1].style.display = "none";
        message[0].style.display = "block";
    }
    else {
        message[1].style.display = "block";
        message[0].style.display = "none";
    }
}