function limitarCheckboxes(formId, groupName) {
    const checkboxes = document.querySelectorAll(`form#${formId} input[name="${groupName}"]`);
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const selecionados = Array.from(checkboxes).filter(c => c.checked);
            if (selecionados.length > 2) {
                cb.checked = false;
                Swal.fire({
                    title: 'Atenção!',
                    text: 'Você só pode escolher 2 sabores por pizza.',
                    icon: 'warning',
                    confirmButtonText: 'Entendi'
                });
            }
        });
    });
}

function validarEscolhas() {
    const form1 = document.querySelectorAll('input[name="sabores1"]:checked');
    const form2 = document.querySelectorAll('input[name="sabores2"]:checked');

    if (form1.length === 0 || form2.length === 0) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Você deve escolher pelo menos 1 sabor para cada pizza.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return false;
    }

    const sabores1 = Array.from(form1).map(cb => cb.value).join(', ');
    const sabores2 = Array.from(form2).map(cb => cb.value).join(', ');
    Swal.fire({
        title: 'Sabores Escolhidos:',
        html: `
            <p><strong>1ª Pizza:</strong> ${sabores1}</p>
            <p><strong>2ª Pizza:</strong> ${sabores2}</p>
        `,
        icon: 'success',
        confirmButtonText: 'Confirmar Pedido'
    });
}
limitarCheckboxes("form1", "sabores1");
limitarCheckboxes("form2", "sabores2");