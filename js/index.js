const card = document.getElementById("staffcard")

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}