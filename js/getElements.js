// Returns everything under <html lang="en"></html>
document.firstElementChild;  

// Capture the H1 element
var h1 = document.firstElementChild.lastElementChild.firstElementChild; 

// Modify the element by changing it's inner HTML
h1.innerHTML = "私の楽しいページへようこそ！!";  

// Change the element color 
h1.style.color = "darkblue"; 

// Want to select the 'input' and simulate a click from the user
document.querySelector("input").click(); 

// Select the third select all elements form the clas "list" (returns an array)
let listElems = document.getElementsByClassName("list"); 

// Replace "Third" by something else 
for (let i=0; i < listElems.length; i++){ 
    // obtain inner HTML of that element 
    var innerhtml = listElems[i].innerHTML; 

    console.log(innerhtml); 

    // if the text is "Third", replace
    if (innerhtml === "Third"){ 
        listElems[i].innerHTML = "UwU"
    }
}


// ** Can also get all elements by the tag name  ** 
let liElems = document.getElementsByTagName("li"); 

// change colour of the third element
document.getElementsByTagName("li")[2].style.color = "purple"; 

// ** better practice: get element by id **

let elem = document.getElementById("subtitle"); 
elem.innerHTML = "sUwUbtitle"; 

// change property for a specific element using id query
document.getElementById("first-button").style.backgroundColor = "yellow"; 

// **Query selector**

// similarly, can use queries to select elements using CSS 
document.write("<br>" + ".btn: " + document.querySelector(".btn"));  // select class 
document.write("<br>" + "#title: " + document.querySelector("#title"));  // select title 

// hierarchical selector
document.write("<br>" + "#list a: " + document.querySelector("#list a"));  // select class 

// hierarchical selector
document.write("<br>" + "#list .list: " + document.querySelector("#list .list"));  // select class 
// document.querySelector("#list .list")[2].style.color = "blue"; // object manipulation

