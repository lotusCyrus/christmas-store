// Get the dropdown display, dropdown content, arrow, and filter options
const dropdownDisplay = document.querySelector('.dropdown-display');
const dropdownContent = document.querySelector('.dropdown-content');
const arrow = document.querySelector('.arrow');
const filterOptions = document.querySelectorAll('.filter-option');
const itemsContainer = document.getElementById('imagesContainer');

// Toggle dropdown content visibility on display click
dropdownDisplay.addEventListener('click', () => {
    const isDropdownOpen = dropdownContent.style.display === 'block';
    if (isDropdownOpen) {
        dropdownContent.style.display = 'none';
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else {
        dropdownContent.style.display = 'block';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
});

// Add event listener to each filter option
filterOptions.forEach(option => {
    option.addEventListener('click', filterItems);
});

// Function to filter items
function filterItems(event) {
    // Get the filter value from the option's text content
    const filterValue = event.target.textContent.toLowerCase().replace(' ', '-');
    
    // Update the dropdown display text with the selected filter value
    dropdownDisplay.firstElementChild.textContent = event.target.textContent;
    
    // Get all items
    const items = itemsContainer.querySelectorAll('.item');
    
    // Loop through each item
    items.forEach(item => {
        // Check if the item matches the filter value
        const itemClass = item.className.toLowerCase();
        
        // If the filter value is 'all' or matches the item's class, display it, otherwise hide it
        if (filterValue === 'all' || itemClass.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Hide the dropdown content after selection and reset the arrow
    dropdownContent.style.display = 'none';
    arrow.classList.remove('arrow-up');
    arrow.classList.add('arrow-down');
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-up');
            arrow.classList.add('arrow-down');
        }
    }
});
