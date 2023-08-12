const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");
const panel4 = document.querySelector(".panel4");
const panel5 = document.querySelector(".panel5");
 const panels = document.querySelectorAll('.panel');
 panels.forEach(panel =>{

    panel.addEventListener('click', ()=>{
         removeActiveClass()
        panel.classList.add("active");
    })

})



function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}



