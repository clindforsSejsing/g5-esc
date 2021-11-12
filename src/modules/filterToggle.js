console.log('Ft loeaded');
//From HTML
const filterToggle = document.querySelector('.filterToggleBtn')
const filterBox = document.querySelector('.filterBox')
const filterCloseBtn = document.querySelector('.filterCloseBtn');

// Function
function toggleFilter () {
    filterBox.classList.toggle('filterHide');
    filterToggle.classList.toggle('filterHide');
}

// EventListener
filterToggle.addEventListener('click', toggleFilter);
filterCloseBtn.addEventListener('click', toggleFilter);