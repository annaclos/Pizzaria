const usuarios = [
    { email: "joao@email.com", senha: "joao123" },
    { email: "maria@email.com", senha: "maria123" },
    { email: "pedro@email.com", senha: "pedro123" }
];


const form = document.getElementById('loginForm');
const mensagemElement = document.getElementById('mensagem');


form.addEventListener('submit', function(event) {

    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const senhaInput = document.getElementById('senha').value;

    const usuarioEncontrado = usuarios.find(usuario => 
        usuario.email === emailInput && usuario.senha === senhaInput
    );

    if (usuarioEncontrado) {
        mensagemElement.textContent = "Login bem-sucedido! Redirecionando...";
        mensagemElement.style.color = "lightgreen";


        setTimeout(function() {
            window.location.href = "paginaInicial.html";
        }, 2000); 

    } else {
        mensagemElement.textContent = "Email ou senha incorretos. Tente novamente.";
        mensagemElement.style.color = "red";
    }

});