// ==========================================
// 1. CONTROLE DE ABRIR E FECHAR A MODAL
// ==========================================
const modalCompra = document.getElementById('modalCompra');
const btnFechar = document.getElementById('btn-fechar');
const modalNomePlano = document.getElementById('modal-nome-plano');
const modalPrecoPlano = document.getElementById('modal-preco-plano');
const botoesAssinar = document.querySelectorAll('.btn-assinar');

// Loop para abrir a modal preenchendo os dados do plano clicado
botoesAssinar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nomePlano = botao.getAttribute('data-plano');
        const precoPlano = botao.getAttribute('data-preco');
        
        modalNomePlano.innerText = nomePlano;
        modalPrecoPlano.innerText = precoPlano;
        
        modalCompra.classList.add('mostrar');
    });
});

// Fecha a modal ao clicar no (X)
btnFechar.addEventListener('click', () => {
    modalCompra.classList.remove('mostrar');
});

// Fecha a modal ao clicar no fundo escuro
window.addEventListener('click', (evento) => {
    if (evento.target === modalCompra) {
        modalCompra.classList.remove('mostrar');
    }
});


// ==========================================
// 2. CONTROLE DA TROCA DE PAGAMENTO (PIX / CARTÃO)
// ==========================================
// Seleciona os dois botões pela classe comum deles
const opcoesPagamento = document.querySelectorAll('.opcao-pagamento');

// Seleciona as duas caixas de formulário
const camposPix = document.getElementById('campos-pix');
const camposCartao = document.getElementById('campos-cartao');

// Monitora o clique usando a posição (index) dos botões: PIX é 0, Cartão é 1
opcoesPagamento.forEach((opcao, index) => {
    opcao.addEventListener('click', () => {
        // 1. Alterna a cor preta (classe ativo) dos botões
        opcoesPagamento.forEach(opt => opt.classList.remove('ativo'));
        opcao.classList.add('ativo');

        // 2. Alterna os formulários baseado no botão clicado
        if (index === 0) {
            // Se clicou no PIX (Posição 0)
            camposPix.classList.remove('escondido');    // Mostra PIX
            camposCartao.classList.add('escondido');   // Esconde Cartão
        } else if (index === 1) {
            // Se clicou no Cartão (Posição 1)
            camposCartao.classList.remove('escondido'); // Mostra Cartão
            camposPix.classList.add('escondido');      // Esconde PIX
        }
    });
});