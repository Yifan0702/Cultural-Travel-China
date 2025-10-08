const museum = document.getElementById('museum');
const museumIn1 = document.getElementById('museum-in1');
const museumLink = document.getElementById('museumLink');

museumLink.addEventListener('click', function(event) {
    event.preventDefault();
    museum.style.display = 'none';
    museumIn1.style.display = 'block';
});