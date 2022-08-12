grid = document.querySelector(".grid")

function print(s) {
    console.log(s)
}

function random_from_0_to(max) {
    return Math.round((Math.random() * max))
}

let redmax = 255
let bluemax = 255
let greenmax = 255

function change_color(color) {
    redmax = 30
    bluemax = 30
    greenmax = 30
    if (color === "red") {
        redmax = 255
    } else if (color === "blue") {
        bluemax = 255
    } else if (color === "green") {
        greenmax = 255
    } else if (color === "random") {
        redmax = 255
        bluemax = 255
        greenmax = 255
    }
}

function clear_all_squares() {
    let all_boxes = document.querySelectorAll(".grid-boxes")
    for (let box of all_boxes) {
        box.style.backgroundColor = "darkslategray"
        box.setAttribute("background-color", "darkslategrey")
    }
}

function prompt_size() {
    let num_of_boxes_square
    do {
        num_of_boxes_square = prompt("Select a new width (as a numeral) under 350.")
    } while (isNaN(num_of_boxes_square))
    try {
        document.querySelector(".verticals").remove()
        document.querySelector(".horizontals").remove()
        document.querySelector(".verticals").remove()
        document.querySelector(".horizontals").remove()
    } catch {

    }
    create_grid(num_of_boxes_square, num_of_boxes_square)
    let boxes = document.querySelectorAll(".grid-boxes")
    let a
    // let adjusted_height = document.querySelector(".grid").style.height
    // let adjusted_height = window.innerHeight - window.outerHeight * 0.04
    let wiw = window.innerWidth // why not document.querySelector(".grid").style.height ?
    let wih = window.innerHeight - document.querySelector(".header").style.height // same here?

    if (wih <= wiw) {
        print("monitor - width greater than or equal to height")
        a = (Math.floor(((0.85 * wih) / (num_of_boxes_square)))).toString() + "px"
    } else {
        //WORKS FINE, DON'T TOUCH
        print("smartphone - height greater than width")
        a = (Math.floor(((wiw - 20) / (num_of_boxes_square)))).toString() + "px"
    }
    for (let box of boxes) {
        box.style.width = a
        box.style.height = a
    }
}

Rbut = document.querySelector(".color.R.button")
Gbut = document.querySelector(".color.G.button")
Bbut = document.querySelector(".color.B.button")
Resetbut = document.querySelector(".reset.button")
Randbut = document.querySelector(".Random")
Sizebut = document.querySelector(".Size")
Rbut.addEventListener("click", (e) => change_color("red"))
Gbut.addEventListener("click", (e) => change_color("green"))
Bbut.addEventListener("click", (e) => change_color("blue"))
Resetbut.addEventListener("click", (e) => clear_all_squares())
Randbut.addEventListener("click", (e) => change_color("random"))
Sizebut.addEventListener("click", (e) => prompt_size())

function change_box_color_on_hover(box) {
    let r = random_from_0_to(redmax)
    let g = random_from_0_to(greenmax)
    let b = random_from_0_to(bluemax)
    print(r)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}


function create_grid(rows, columns) {
    let hold_multiple_columns_in_a_h_pattern = document.createElement("div")
    hold_multiple_columns_in_a_h_pattern.classList.add("horizontals")
    grid.appendChild(hold_multiple_columns_in_a_h_pattern)

    let one_column_holder = document.createElement("div")
    one_column_holder.classList.add("verticals")

    function create_one_box() {
        let one_box = document.createElement("div")
        one_box.classList.add("grid-boxes")
        return one_box
    }

    function create_one_column(column_object) {
        let new_column_object = document.createElement("div")
        for (let y = 0; y < rows; y++) {
            new_column_object.classList.add("verticals")
            new_column_object.appendChild(create_one_box())
        }
        return new_column_object
    }

    for (let x = 0; x < columns; x++)
        hold_multiple_columns_in_a_h_pattern.appendChild(create_one_column())
    //tie event handler to boxes
    let all_boxes = document.querySelectorAll(".grid-boxes")
    for (let box of all_boxes) {
        box.addEventListener('mouseover', (event) => change_box_color_on_hover(box))
    }
}

prompt_size()
create_grid(0, 0)
change_color("red")
// event listener for keyboard: fix
// document.addEventListener("keypress", (e) => console.log("hi"))
// document.dispatchEvent(new KeyboardEvent('keypress', {key: "r"}))