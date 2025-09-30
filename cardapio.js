const modal = document.getElementById('modal-do-cardapio');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.pizza-item').forEach(item => {
  item.addEventListener('click', () => {
    const ingredientsString = item.getAttribute('data-ingredients') || '';
    const price = item.getAttribute('data-price') || '';

    const ingredients = ingredientsString.split(',').map(i => i.trim());

    let html = '<strong>Ingredientes:</strong><ul>';
    ingredients.forEach(ingrediente => {
      if (ingrediente) html += `<li>${ingrediente}</li>`;
    });
    html += '</ul>';

    if (price) {
      html += '<strong>Valores:</strong><ul>';
      const priceItems = price.split(/[, ]+/);
      priceItems.forEach(item => {
        if (item.includes(':')) {
          const [tamanho, valor] = item.split(':');
          html += `<li>${tamanho.trim()}: ${valor.trim()}</li>`;

        }
      });
      html += '</ul>';
    }

    html += `
  
`;

    modalText.innerHTML = html;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
function enviarComentario() {
  const comentario = document.getElementById('comentario-comentario').value.trim();

  if (comentario === '') {
    mostrarComentarioModal("Por favor, escreva um comentário antes de salvar.");
  } else {
    mostrarComentarioModal("Comentário enviado com sucesso!");
    document.getElementById('comentario-coemntario').value = '';
  }
}

function mostrarComentarioModal(mensagem) {
  const overlay = document.getElementById('comentarioModalOverlay');
  const texto = document.getElementById('comentarioModalText');
  texto.textContent = mensagem;
  overlay.style.display = 'block';
}

function fecharComentarioModal() {
  document.getElementById('comentarioModalOverlay').style.display = 'none';
}

window.addEventListener('click', function (e) {
  const modal = document.getElementById('comentarioModal');
  const overlay = document.getElementById('comentarioModalOverlay');
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});