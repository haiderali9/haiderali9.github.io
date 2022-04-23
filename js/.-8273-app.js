document.addEventListener("revealElement" , ()=>{


    // var controller = new ScrollMagic.Controller();

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#project"  
        
    // })

    
    // scene.setClassToggle("#project" , "fade-in")
    // // .setPin(".mobile") 
    // .addTo(controller)


 
    
    

})

const disable = ()=>{
    let consumer = document.getElementById("consumer")
    consumer.style.borderBottom= "2px solid #F5EDFA"
    

}
const enable = ()=>{
    let consumer = document.getElementById("consumer")
    consumer.style.borderBottom= "2px solid  #3DBDD9"
}

const FAQS = (e)=>{


    if(e.firstChild.nextSibling.innerHTML == "+"){


        e.firstChild.nextSibling.innerHTML = "-"
    }
    else if (e.firstChild.nextSibling.innerHTML == "-"){
        e.firstChild.nextSibling.innerHTML = "+"

    }




}




const Toggle = () => {


    let mobileMenu = document.getElementById("mobileMenu")
    if (mobileMenu.style.visibility === "hidden") {
        mobileMenu.style.visibility = "visible"
        mobileMenu.style.transform = " scale(1)"
    }
    else {
        mobileMenu.style.transform = " scale(0.1)"
        mobileMenu.style.visibility = "hidden"


    }

}
let collapse = document.getElementsByClassName("collapse")
let plus = document.getElementsByClassName("plus")
const expandall = () => {


    for (i = 0; i < collapse.length; i++) {
        collapse[i].classList.add("show")
        plus[i].innerHTML = "-"

    }
}
const collaspeall = () => {



    for (i = 0; i < collapse.length; i++) {
        collapse[i].classList.remove("show")
        plus[i].innerHTML= "+"

    }
}





// let check = document.getElementsByClassName("check")

// let nextcontent = 3000
// let counter = 0

// // check[counter].style.display = "block"
// check[counter].style.left = "0%"

// setInterval(() => {
//     // check[counter].style.display = "none"
//     check[counter].style.left = "-100%"

//     counter = (counter + 1) % check.length
//     // check[counter].style.display = "block"
//     check[counter].style.left = "0%"



// }, nextcontent)
// let border1 = document.getElementById("border1");
// let border2 = document.getElementById("border2");
// let border3 = document.getElementById("border3");

// setInterval(() => {



// }, 4000)
