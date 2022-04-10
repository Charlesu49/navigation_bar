// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // to see the list of classes console.log(links.classList);
    // console.log(links.classList.contains("links"))

    //the below checks if the list of classes in const "list" contains a class "show-links" if it does it removes it causing the style of the css to remain as "links" which has a height of 0 and overflow of hidden, casuing the toggle effect. the show-link class adds a height to it.
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }

});