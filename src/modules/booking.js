'strict coding'

let modal = document.getElementById("myModal");
function cardCtaBtnClick(card) {
    modal.style.display = "block";
    // window.alert(card.getElementsByClassName("challenge-title")[0].innerHTML);
    let infoCard = card.getElementsByClassName("challenge-title")[0].innerHTML;
    document.getElementById("bookThis").innerHTML = "Book Room" + infoCard + " (Step 1)"
};
// user clicks outside modal, close modal
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
//close modal when user clicks(x)
document.querySelector(".close").addEventListener('click', () => {
    modal.style.display = "none";;
})

export { cardCtaBtnClick };
