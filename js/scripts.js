let shape = document.getElementById("shape")
let color = document.getElementById("color")
let nombre = document.getElementById("name")
let create_btn = document.getElementById("create-btn")
let print = document.getElementById("pintado-container")

const print_tasks = ()=>{
    print.innerHTML = ""
    print.insertAdjacentHTML('beforeend',`
    <div class="${shape.value}" style="background-color:${color.value} ;" id="pintado">${nombre.value}</div>
    `)
}

create_btn.addEventListener("click", ()=>{
    print_tasks();
    console.log(shape.value)
})
