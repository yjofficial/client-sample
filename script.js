const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const form = document.querySelector('form');

allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0;
        ratingValue.value = idx + 1;

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            } else {
                allStar[i].style.setProperty('--i', click);
                click++;
            }
        }
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    if (ratingValue.value < 5) {
        window.location.href = 'feedback.html'; // Redirect to feedback page if rating is less than 5
    } else {
        window.open("https://g.page/r/CZr2ArVSDCRuEBM/review");
    }
});
