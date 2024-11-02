document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function() {
        const movieId = this.getAttribute('data-movie');
        
        // Redirect to the seat booking page with the movie ID as a query parameter
        window.location.href = `sree.html?movie=${movieId}`;
    });
});
