function finalizarCompra() {
  Swal.fire({
    title: "Pedido finalizado com sucesso!",
    text: "Agradecemos a preferência!",
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then(() => {
    window.location.href = 'carrinho.html';
  });
}
