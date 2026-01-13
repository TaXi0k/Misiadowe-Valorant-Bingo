const gridItems = document.querySelectorAll('.gridItem');
const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', function () {
    resetButton.addEventListener('click', function () {
        gridItems.forEach(item => {
            item.classList.remove('marked');
        });
    });
});

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('marked');
    });
});