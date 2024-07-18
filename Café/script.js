document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Em breve retornaremos.');
    // Poderia ser adicionado um código para enviar o formulário para um backend real aqui
});

// Adicionando interatividade nas imagens do cardápio
const menuItems = document.querySelectorAll('.menu-item img');

menu
