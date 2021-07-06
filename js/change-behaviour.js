function startHuge(){ 
    console.log("starting..."); 
    setInterval(() => {
        var h1elem = document.getElementById("anotherh1"); 
        h1elem.innerHTML = "XD";  
        h1elem.classList.add("huge"); 
    }, 4000);
    
}

function removeHuge() { 
    setInterval(() => {
        var h1elem = document.getElementById("anotherh1"); 
        // h1elem.innerHTML = ":c"; 
        h1elem.textContent = ":c"; // much better practice!   
        h1elem.classList.remove("huge"); 
    }, 4000);
}

// call the functions 
startHuge(); 
setTimeout(removeHuge, 2000); 



