/*VERSION 3.01*/
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Fecha todos os outros botões
        buttons.forEach(btn => {
            if (btn !== button) btn.classList.remove('active');
        });

        // Alterna o botão clicado
        button.classList.toggle('active');
    });
});
