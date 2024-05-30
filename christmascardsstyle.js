// Search Bar
let searchResults= ["green", "beige"];

let searchBox= document.getElementById("inputbox");
let resultsBox= document.querySelector(".search-results");
let imageBox= document.getElementById("images");
let productChoice= Array.from(imagesBox.getElementsByClassName("product-items"));

searchBox.addEventListener('input', () => {
    let input = searchInput.value.toLowerCase();
    resultsBox.innerHTML = '';
    if (input) {
        let suggestedFilter= searchResult.filter(result => 
            result.toLowerCase().includes(input)
        );
        suggestedFilter.forEach(result => {
            let li= document.createElement('li');
            li.textContent= result;
            li.addEventListener('click', () => {
                searchBox.value= result;
                filterImages(result);
                resultsBox.innerHTML= '';
                resultsBox.style.display= 'none';
            });
            resultsBox.appendChild(li);
        });
        resultsBox.style.display = 'block';
    } else {
        resultsBox.style.display = 'none';
        startImages();
    }
});

document.addEventListener('click', (x) => {
    if (x.target !== searchBox) {
        resultsBox.style.display = 'none';
    }
});

function filterImages(show) {
    productChoice.forEach(image => {
        if (image.classList.contains(show.toLowerCase())) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function startImages() {
    productChoice.forEach(image => {
        image.style.display = 'block';
    });
}

