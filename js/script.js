var gallery = new SimpleLightbox('.gallery-item a', {
    nav: true, // Habilitar navegação entre imagens
    close: true, // Habilitar botão de fechar
    showCounter: true, // Mostrar contador de imagens
    captions: true, // Mostrar título das imagens
    captionSelector: 'img', // Mostrar o título da imagem a partir do atributo 'alt'
    enableKeyboard: true, // Habilitar navegação com o teclado
    closeText: 'X', // Personalizar texto de fechamento
});
