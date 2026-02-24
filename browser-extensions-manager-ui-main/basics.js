//debut du button du mode
// const sun = document.getElementById("sun")
// sun.addEventListener("click",() => {
//     alert("ca fonctionne ")
// })
function changementDuMode(){

    const src1 = "./assets/images/icon-moon.svg" 
    const src2 = "./assets/images/icon-sun.svg"
    let toggle =  true
    const button = document.getElementById("sun")
    const img = document.getElementById("state")
    button.addEventListener("click", ()=>{
        if (toggle){
            img.src = src2
            document.body.classList.toggle("dark")
            toggle = !toggle
        }
       else{
            img.src = src1  
            document.body.classList.toggle("dark")
            toggle = !toggle
        }     
    })
}
//begining of the filter part 
changementDuMode()
