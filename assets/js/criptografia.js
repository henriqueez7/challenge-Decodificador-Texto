const inputTexto = document.querySelector('.caixa-texto');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-descriptografar');
const textAviso = document.querySelector('.text-aviso');
const imagemPrincipal = document.querySelector('.imagem-principal');
const btnCopiar = document.querySelector('.btn-copiar');

function criptografarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoCriptografado;
}

function descriptografarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDescriptografado;
}

btnCriptografar.addEventListener('click', function() {
    const texto = inputTexto.value;
    if (texto) {
        const textoCriptografado = criptografarTexto(texto);
        imagemPrincipal.style.display = 'none';

        textAviso.style.justifyContent = 'flex-start';
        textAviso.style.alignItems = 'flex-start';
        textAviso.style.textAlign = 'left';
        textAviso.innerHTML = `<h1  style="color: rgba(73, 80, 87, 1);">${textoCriptografado}</h1>`;

        document.querySelector('.caixa-secundaria').style.alignItems = 'flex-start';
        document.querySelector('.caixa-secundaria').style.justifyContent = 'flex-start';
    }else {
        textAviso.innerHTML = `<h3>Nenhuma mensagem encontrada</h3><p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
    }
});

btnDescriptografar.addEventListener('click', function() {
    const texto = inputTexto.value;
    if (texto) {
        const textoDescriptografado = descriptografarTexto(texto);
        imagemPrincipal.style.display = 'none';

        textAviso.style.alignItems = 'flex-start';
        textAviso.style.justifyContent = 'flex-start';
        textAviso.style.textAlign = 'left';
        textAviso.innerHTML = `<h1 style="color: #0A3871;">${textoDescriptografado}</h1>`;

        document.querySelector('.caixa-secundaria').style.alignItems = 'flex-start';
        document.querySelector('.caixa-secundaria').style.justifyContent = 'flex-start';
    } else {
        textAviso.innerHTML = `<h3>Nenhuma mensagem encontrada</h3><p>Digite um texto que você deseja criptografar ou descriptografar.</p>`;
    }
});

