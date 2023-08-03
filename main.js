let button1 = document.getElementById("one")


console.log(button1.value)
two.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Button One Clicked")
    localStorage.setItem("rate", button1.value)
    var form1 = document.getElementById("form")
    form1.action = "password.html"
    form1.submit()
})