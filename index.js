// 1. Pega o checkbox que controla a abertura do menu lateral
const controleMenu = document.getElementById('controle-menu');

// 2. Pega ABSOLUTAMENTE TODOS os links (tags <a>) da sua página
const todosOsLinks = document.querySelectorAll('a');

// 3. Adiciona o ouvinte de clique em cada um deles
todosOsLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Sempre que clicar em qualquer link (do menu ou da barra verde), desmarca o checkbox
        controleMenu.checked = false;
    });
});
function irParaTreino() {
    const select = document.getElementById('selecao-treino');
    const urlSelecionada = select.value;
    
    if (urlSelecionada) {
        // Redireciona para a página da ficha escolhida
        window.location.href = urlSelecionada;
    } else {
        // Alerta caso a pessoa clique sem escolher nada
        alert('Por favor, selecione uma modalidade de treino primeiro!');
    }
}