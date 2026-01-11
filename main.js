const gridItems = document.querySelectorAll('.gridItem');

gridItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('marked');
    });
});