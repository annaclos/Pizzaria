//teste banco de dados falso!!!
const usuarios = [
  "joao@email.com",
  "maria@email.com",
  "pedro@email.com"
];

const form = document.getElementById("form-recuperar");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o reload da página

  const email = document.getElementById("email").value;

  if (usuarios.includes(email)) {
    // se o e-mail for encontrado.
    Swal.fire({
      icon: 'success',
      title: 'Link enviado com sucesso!',
      text: `Um link de recuperação foi enviado para ${email}.`,
      confirmButtonColor: '#00cc00'
    });
  } else {
    // se o email não for encontrado
    Swal.fire({
      icon: 'error',
      title: 'Que pena :c!',
      text: 'Esse e-mail não está cadastrado.',
      confirmButtonColor: '#cc0000'
    });
  }
 //limpa el campito.
  form.reset();
});
