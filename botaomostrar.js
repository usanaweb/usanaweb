document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão e os cards ocultos na seção de Acessibilidade
    const buttonAAC = document.getElementById('button-veja-mais-aac');
    const hiddenCardsAAC = document.querySelectorAll('.acessibilidade-section .d-none');

    if (buttonAAC) {
        // Adiciona o evento de clique ao botão de Acessibilidade
        buttonAAC.addEventListener('click', function () {
            const isExpanded = buttonAAC.textContent.includes('Menos');

            if (isExpanded) {
                // Ocultar novamente os cards extras da seção de Acessibilidade
                hiddenCardsAAC.forEach(card => {
                    card.classList.add('d-none');
                });
                buttonAAC.textContent = 'Mostrar Mais';
            } else {
                // Mostrar todos os cards extras da seção de Acessibilidade
                hiddenCardsAAC.forEach(card => {
                    card.classList.remove('d-none');
                });
                buttonAAC.textContent = 'Mostrar Menos';
            }
        });
    } else {
        console.error('Botão da seção de Acessibilidade não encontrado. Verifique o ID no HTML.');
    }

    // Seleciona o botão e os cards ocultos na seção de Usabilidade
    const buttonUS = document.getElementById('button-veja-mais-usabilidade');
    const hiddenCardsUS = document.querySelectorAll('.usabilidade-section .d-none');

    if (buttonUS) {
        // Adiciona o evento de clique ao botão de Usabilidade
        buttonUS.addEventListener('click', function () {
            const isExpanded = buttonUS.textContent.includes('Menos');

            if (isExpanded) {
                // Ocultar novamente os cards extras da seção de Usabilidade
                hiddenCardsUS.forEach(card => {
                    card.classList.add('d-none');
                });
                buttonUS.textContent = 'Mostrar Mais';
            } else {
                // Mostrar todos os cards extras da seção de Usabilidade
                hiddenCardsUS.forEach(card => {
                    card.classList.remove('d-none');
                });
                buttonUS.textContent = 'Mostrar Menos';
            }
        });
    } else {
        console.error('Botão da seção de Usabilidade não encontrado. Verifique o ID no HTML.');
    }
});