function createPixel(size) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("oldColor");
    div.style.width = size;
    div.style.height = size;
    return div;
}

function getNoOfPixels(e) {
    if (e.target.tagName === "BUTTON") {
        const noOfPixels = parseInt(prompt("How many pixels do want each side??"));
        const Container = document.querySelector(".container");
        console.log(Container)
        Container.innerHTML = '';
        console.log(Container)
        console.log(noOfPixels)
        createSheet(noOfPixels);
        const container = document.querySelector(".container");
        container.addEventListener("dblclick", startColor);
    }
}

function draw(e) {
    console.log("working");
    if (e.target.classList.contains("box")) {
        e.target.classList.remove("oldColor");
        e.target.classList.add("newColor")
    }
}

function stopcolor(e) {
    const allPixels = document.querySelectorAll(".box");
    const container = document.querySelector(".container");
    container.removeEventListener("dblclick", startColor);
    allPixels.forEach(element => {
        element.removeEventListener("mouseenter", draw);
        element.removeEventListener("dblclick", stopcolor);
    });
}

function startColor() {
    const allPixels = document.querySelectorAll(".box");
    allPixels.forEach(element => {
        element.addEventListener("mouseenter", draw);
        element.addEventListener("dblclick", stopcolor);
    });
}

function createSheet(noOfPixels) {
    const numberOfPixels = noOfPixels;
    const containerSize = 720;
    const padding = 10;
    const gap = 2;
    const boxSize = (containerSize-2*padding-(numberOfPixels+1)*gap) / numberOfPixels;
    for (let i = 1; i <= (numberOfPixels*numberOfPixels); i++){
        const box = createPixel(`${boxSize}px`);
        document.querySelector(".container").appendChild(box)
    }
    // startColor();
}

const start = document.querySelector(".pixels");
start.addEventListener("click", getNoOfPixels);
