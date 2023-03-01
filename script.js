const textareaEl = document.getElementById("textarea")
const totalChar = document.getElementById("total-count")
const remainingChar = document.getElementById("remaining-count")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalChar.innerText = textareaEl.value.length
    remainingChar.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length

}