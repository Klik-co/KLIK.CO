window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });














                

});


console.log("Script carregado");

function enviarEmail() {
    console.log("Função enviarEmail chamada");

    var emailContato = "diazsalmeida@hotmail.com";  // Email de destino
    var subject = "Contato pelo site";       // Assunto do email

    // Pega a mensagem que o usuário digitou
    var userMessageElement = document.getElementById("userMessage");
    var body = userMessageElement ? userMessageElement.value : "Esta é uma mensagem de contato gerada pelo site.";

    // Cria a URL para o Gmail
    var gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailContato)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Mostra o link no console para verificar
    console.log("Link do Gmail:", gmailURL);

    // Abre uma nova aba com o link do Gmail
    window.open(gmailURL, '_blank');
}

function sendWhatsAppMessage() {
    // Número de telefone no formato internacional sem o "+" (código do país + código da cidade + número)
    var phoneNumber = '5511958774472'; // Exemplo: +55 11 99999-9999
    var message = 'Olá, vim do site e gostaria de mais informações!';

    // Codifica a mensagem para ser compatível com URL
    var encodedMessage = encodeURIComponent(message);

    // URL para enviar a mensagem via WhatsApp
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

    // Redireciona o usuário para a URL do WhatsApp
    window.open(whatsappURL, '_blank');
}
