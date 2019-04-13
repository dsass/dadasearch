const loadingBar = document.querySelector('.loader');

loadingBar.addEventListener('animationend', function() {
    window.location = window.location.origin + 'search-results.html';
});
