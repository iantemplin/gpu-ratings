const ratings = {
    asus: 4.7,
    msi: 3.4,
    amd: 2.3,
    gigabyte: 3.6,
    evga: 4.1
}

const starsTotal = 5;

document.addEventListener('DOMContentLoaded',getRatings);

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');
let product;

productSelect.addEventListener('change',(e) => {
    product = e.target.value;
    console.log(product);
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
    if(rating > 5){
        alert('Please rate 1 through 5');
        return;
    }

    ratings[product] = rating;
    getRatings();
});

function getRatings() {
   for(let rating in ratings) {
       const starPercentage = (ratings[rating]/starsTotal) * 100;

       console.log(starPercentage);

       const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;

       console.log(starPercentageRounded);

       document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
       document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
   }
}