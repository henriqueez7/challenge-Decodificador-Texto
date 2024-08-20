const inputTexto = document.querySelector('.caixa-texto');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-descriptografar');
const textAviso = document.querySelector('.text-aviso');
const imagemPrincipal = document.querySelector('.imagem-principal');
const btnCopiar = document.querySelector('.btn-copiar');
const card = document.querySelector('.caixa-secundaria');

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function atualizarCard(texto) {
    let newTextElement = document.querySelector('.novo-texto');

    if (!texto) {
        card.classList.remove('caixa-secundaria2');
        imagemPrincipal.classList.remove('imagem-principal-hide');
        textAviso.classList.remove('text-aviso-hide');
        btnCopiar.classList.remove('btn-copiar-visible');
        if (newTextElement) {
            newTextElement.remove();
        }
        return;
    }

    if (!newTextElement) {
        newTextElement = document.createElement('p');
        newTextElement.className = 'novo-texto';
        card.appendChild(newTextElement);
    }

    newTextElement.innerHTML = texto;
    card.classList.add('caixa-secundaria2');
    imagemPrincipal.classList.add('imagem-principal-hide');
    textAviso.classList.add('text-aviso-hide');
    btnCopiar.classList.add('btn-copiar-visible');
}

btnCriptografar.addEventListener('click', function () {
    const texto = inputTexto.value.trim();

    if (!texto) {
        textAviso.innerHTML = `
            <h3>Nenhuma mensagem encontrada</h3>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
        return;
    }

    const textoCriptografado = criptografarTexto(texto);
    atualizarCard(textoCriptografado);
});

btnDescriptografar.addEventListener('click', function () {
    const paragrafo = document.querySelector('.novo-texto');
    const texto = paragrafo ? paragrafo.innerHTML.trim() : '';

    if (!texto) {
        textAviso.innerHTML = `
            <h3>Nenhuma mensagem encontrada</h3>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
        return;
    }

    const textoDescriptografado = descriptografarTexto(texto);
    atualizarCard(textoDescriptografado);
});

btnCopiar.addEventListener('click', async () => {
    const paragrafo = document.querySelector('.novo-texto');
    if (paragrafo) {
        try {
            await navigator.clipboard.writeText(paragrafo.innerText);
            alert('Texto copiado para a área de transferência!');
        } catch (erro) {
            console.error('Falha ao copiar texto: ', erro);
        }
    }
});

inputTexto.addEventListener('input', function () {
    atualizarCard(inputTexto.value.trim());
});
