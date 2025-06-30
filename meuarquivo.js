form.addEventListener("submit", function(event) {
  let valido = true;

  if (senha.value !== confirmarSenha.value || senha.value.length < 6) {
    erroSenha.style.display = "block";
    valido = false;
  } else {
    erroSenha.style.display = "none";
  }

  if (!/^\d{10,11}$/.test(telefone.value)) {
    erroTelefone.style.display = "block";
    valido = false;
  } else {
    erroTelefone.style.display = "none";
  }

  if (!valido) event.preventDefault();
});

