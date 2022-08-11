grid = document.querySelector(".grid")

let hold_multiple_columns_in_a_h_pattern = document.createElement("div")
hold_multiple_columns_in_a_h_pattern.classList.add("horizontals")
grid.appendChild(hold_multiple_columns_in_a_h_pattern)

let one_column_holder = document.createElement("div")
one_column_holder.classList.add("verticals")


function print(s) {
    console.log(s)
}

function random_from_0_to(max) {
    return Math.round((Math.random() * max))
}

function change_box(box) {
    let r = random_from_0_to(150)
    let g = random_from_0_to(10)
    let b = random_from_0_to(255)
    print(r)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}


function create_grid(rows, columns) {
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
        box.addEventListener('mouseover', (event) => change_box(box))
    }
}

create_grid(29, 50)

document.addEventListener("keypress", (e) => console.log("hi"))
document.dispatchEvent(new KeyboardEvent('keypress', {key: "b"}))