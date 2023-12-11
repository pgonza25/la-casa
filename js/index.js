const cardArray = document.querySelectorAll("staffcard")

cardArray.forEach(function(elem) {
    elem.addEventListener("mouseover", event => {
        elem.toggleAttribute("flipCard");
    })
});