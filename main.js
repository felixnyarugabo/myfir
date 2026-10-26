let display=document.getElementById("display")
let save=document.getElementById("save")
let input=document.getElementById("input")
let error=document.getElementById("error")

let storage=JSON.parse(localStorage.getItem("users")) || []

save.addEventListener('click',function(){
    let name=input.value.trim()

    if(name===""){
        error.textContent="enter some thing"
        return
    }

    if(storage.includes(name)){
        error.textContent="the user all ready exist"
        return
    }

    error.textContent=""

    storage.push(name)
    localStorage.setItem("users",JSON.stringify(storage))
    showMessage()


    input.value=""


})

function showMessage(){
    display.textContent=""

    if(storage.length === 0)return

    storage.forEach(function(data,index){

        let p = document.createElement("p")
        let button = document.createElement("button")

        p.textContent=data
        button.textContent="delete"

        display.appendChild(p)
        display.appendChild(button)

        button.addEventListener('click',function(){
            storage.splice(index,1)
            localStorage.getItem("users",JSON.stringify(storage))

            showMessage()
        })
    })
}
showMessage()