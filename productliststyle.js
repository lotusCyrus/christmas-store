// Pop ups
let popupButton = document.getElementById("popupButton");
let valPopup1 = document.getElementById("valPopup1");
let closeValpopup1 = document.getElementById("closeValpopup1");
let chooseCard1 = document.getElementById("chooseCard1");

popupButton.addEventListener('click', function() {
    console.log("about to add to "+valPopup1)
    valPopup1.classList.add('show');
});

closeValpopup1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});

chooseCard1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});



//filter
document.addEventListener("DOMContentLoaded", () => {
let dropdownDisplay = document.querySelector('.select');
let dropdownContent = document.querySelector('.menu');
let arrow = document.querySelector('.arrow');
let filterOptions = document.querySelectorAll('.text-option');
let products = document.getElementById('.products-list > div');
});

dropdownDisplay.addEventListener('click', () => {
    dropdownContent.style.display= dropdownContent.style.display=== "block" ? "none": "block";
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
});


filterOptions.forEach(option => {
    option.addEventListener('click', filterItems);
});


function filterItems() {
    //get class and then filter base on that
    dropdownContent.style.display = 'none';
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
}


window.addEventListener('click', function(event) {
    if (!event.target.closest('.filter')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
        }
    }
});
