// Dados das subcategorias de marca para cada categoria
const subcategorias = {
    'racao-cachorro': ['Royal Canin', 'Premier Pet', 'Hills Science Diet'],
    'racao-gato': ['Whiskas', 'Golden', 'Royal Canin'],
    'comida-passaro': ['Alcon Club', 'Nutropica', 'Megazoo']
};

// Função para atualizar o filtro de marca com base na categoria selecionada
function atualizarSubcategoria() {
    const categoriaSelecionada = document.querySelector('select[name="categoria"]').value;
    const marcaSelect = document.querySelector('select[name="marca"]');

    // Limpa as opções de marca
    marcaSelect.innerHTML = '<option value="">Marca</option>';

    // Adiciona opções de marca conforme a categoria selecionada
    if (categoriaSelecionada && subcategorias[categoriaSelecionada]) {
        subcategorias[categoriaSelecionada].forEach(marca => {
            const option = document.createElement('option');
            option.value = marca.toLowerCase();
            option.textContent = marca;
            marcaSelect.appendChild(option);
        });
    }
}

// Função para aplicar os filtros
function filtrarProdutos() {
    const categoria = document.querySelector('select[name="categoria"]').value;
    const marca = document.querySelector('select[name="marca"]').value;
    const cards = document.querySelectorAll('.produto-cards .card');

    // Exibe ou oculta os cards conforme os filtros aplicados
    cards.forEach(card => {
        const categoriaCard = card.getAttribute('data-categoria');
        const marcaCard = card.getAttribute('data-marca');

        const exibirCategoria = categoria === "" || categoriaCard === categoria;
        const exibirMarca = marca === "" || marcaCard === marca;

        card.style.display = (exibirCategoria && exibirMarca) ? 'block' : 'none';
    });
}

// Evento para limpar os filtros e mostrar todos os produtos
document.getElementById('clear-filters').addEventListener('click', function() {
    document.querySelector('.filter-form').reset();
    atualizarSubcategoria(); // Reseta o campo de marca

    // Mostra todos os cards
    document.querySelectorAll('.produto-cards .card').forEach(card => {
        card.style.display = 'block';
    });
});