document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('list').addEventListener("click", function(event){event.preventDefault();document.querySelectorAll('#products .item').forEach(item => item.classList.add('list-group-item'));});
    document.getElementById('grid').addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll('#products .item').forEach(item => {
            item.classList.remove('list-group-item');
            item.classList.add('grid-group-item');
        });
    });
});