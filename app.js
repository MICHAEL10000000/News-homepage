const Menu = document.querySelector(".menu")
const accessory = document.querySelector(".accessory")
const accessoryBlock = accessory.querySelector("div")
Menu.addEventListener("click", ()=>{
    if (accessoryBlock.style.display === "none"){
        accessoryBlock.style.display = "Block"
    }
    else {
        accessoryBlock.style.display = "none"
    }
})
const closeButton = document.querySelector(".close")
closeButton.addEventListener("click", ()=> {
    accessoryBlock.style.display = "none"
})