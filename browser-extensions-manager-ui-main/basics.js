//debut du button du mode
// const sun = document.getElementById("sun")
// sun.addEventListener("click",() => {
//     alert("ca fonctionne ")
// })
function changementState(){
    const src1 = "./assets/images/icon-moon.svg" 
    const src2 = "./assets/images/icon-sun.svg"
    let toggle =  true
    const button = document.getElementById("sun")
    const img = document.getElementById("state")
    button.addEventListener("click", ()=>{
        if (toggle){
            img.src = src2
            document.body.style.backgroundColor = "#0a1a3a"
            document.header.style.backgroundColor ="#708090"
            toggle = !toggle
        }
        else{
            img.src = src1
            document.body.style.backgroundColor = "#ffff";
            toggle = !toggle
        }     
    })
}
changementState()