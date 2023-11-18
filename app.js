"use strict"

function submitForm() {
  const input = document.querySelector(".input").value
  if (!input) {
    return
  }
  document.querySelector(".panel").innerText = input
  document.querySelector(".input").value = ""
  const textString = JSON.stringify({
    text: input,
  })
  localStorage.setItem("text", textString)
}

function inputChanged(e) {
  if (e.code == "Enter") {
    submitForm()
  }
}
/*
console.log(document.querySelectorAll(".one")[0].innerText)
console.log(document.querySelectorAll(".one")[1].innerText)
console.log(document.getElementById("two").innerText)
console.log(document.getElementsByClassName(".one"))
console.log(document.querySelector("[user-id='4']").innerText)


const panelText = "Панель"
const panelClass = "button"
const newElement = document.createElement("button")
newElement.setAttribute("user-id", 1)
newElement.classList.add("panel")
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`
document.querySelector(".test").appendChild(newElement)


localStorage.setItem("token", "sffgds")
localStorage.setItem("token1", 1)
localStorage.setItem("token1", true)
const token1 = localStorage.getItem("token1")
console.log(typeof token1)
*/

const obj = JSON.parse('{ "a": 1 }')
console.log(obj.a)
const str = JSON.stringify(obj)
console.log(str)
