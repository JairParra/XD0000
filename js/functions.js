function correctPage(){ 
    /**
     * This function reestablishes some changes on the page when clicked
     */ 
    // Step1: Create random list of colours and words to select from 
    colors = ["red", "black", "blue", "orange", "grey"];
    words = ["lmaoo", "XD", "uwu", "UwU", "OwO"];   

    // Correct text in all headings 
    for (let j=1; j <= 3; j++) { 
        // obtain heading name 
        const headingName = "h" + j; 

        // obtain all elements with that heading 
        let hList = document.getElementsByTagName(headingName); 
        // alter inner html of thos elements  
        for (let i = 0; i < hList.length; i++){ 
            // change inner html text
            wordIdx = Math.floor(Math.random() * words.length); 
            hList[i].innerHTML = words[wordIdx]; 
            // alter color property 
            colorIdx = Math.floor(Math.random() * colors.length); 
            hList[i].style.color = colors[colorIdx]; 
        }
    }

}

// use this variable to store how many times the function has been called 
var called = 0; 
function hideButton(){ 
    /**
     * Change button visibility on click 
     */
    // obtain button by id 
    var button = document.getElementById("first-button"); 

    console.log("visibility: " + button.style.visibility + " (called + " + called + " times)" );

    // change behaviour on click 
    if (button.style.visibility !== "hidden"){ 
        button.style.visibility = "hidden"; 
        // lambda function to return visibility to visible 
        setTimeout( () => {button.style.visibility = "visible"}, 3000); 
    }
    else if (button.style.visibility === "hidden"){ 
        button.style.visibility = "visible"; 
    }
    else { 
        button.style.visibility = "hidden"; 
        // lambda function to return visibility to visible 
        setTimeout( () => {button.style.visibility = "visible"}, 3000); 
    }
    called++; 

}