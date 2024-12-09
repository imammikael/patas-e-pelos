document.querySelector('.filter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const categoria = document.querySelector('select[name="categoria"]').value;
    const cards = document.querySelectorAll('.produto-cards .card');

    cards.forEach(card => {
        if (categoria === "" || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('clear-filters').addEventListener('click', function() {
    document.querySelector('.filter-form').reset();
    document.querySelectorAll('.produto-cards .card').forEach(card => {
        card.style.display = 'block';
    });
});