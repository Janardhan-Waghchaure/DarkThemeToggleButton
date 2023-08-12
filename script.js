const container = document.querySelector(".container");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");


container.addEventListener("click",()=>{

    if (moon.style.opacity == "0" || moon.style.opacity == ""){
        document.body.style.backgroundColor = "black";
        sun.style.opacity = "0";
        moon.style.opacity = "1";
        
        moon.style.transform = sun.style.transform = "translateX(50%)";
    }
    else{
        
        document.body.style.backgroundColor = "white";
        moon.style.opacity = "0";
        sun.style.opacity = "1";
        sun.style.transform = moon.style.transform = "translateX(-50%)";
    }
    console.log(moon.style);

})