// --- LÓGICA DE ALTERNÂNCIA DE TREINOS (BÁSICO, INTERMEDIÁRIO, AVANÇADO) ---

const botoesNivel = document.querySelectorAll('.btn-nivel');
const conteudosTreino = document.querySelectorAll('.conteudo-treino');

botoesNivel.forEach(botao => {
    botao.addEventListener('click', (event) => {
        // 1. Remove a classe 'active' de todos os botões da navbar de nível
        botoesNivel.forEach(b => b.classList.remove('active'));
        
        // 2. Esconde todas as tabelas de treino
        conteudosTreino.forEach(treino => treino.style.display = 'none');
        
        // 3. Pega o nível correspondente do atributo 'data-nivel' do botão clicado
        const nivelSelecionado = event.target.getAttribute('data-nivel');
        
        // 4. Mostra a tabela específica correspondente ao ID gerado
        const tabelaAlvo = document.getElementById(`treino-${nivelSelecionado}`);
        if (tabelaAlvo) {
            tabelaAlvo.style.display = 'block';
        }
        
        // 5. Adiciona a classe 'active' ao botão clicado para destacar a borda verde
        event.target.classList.add('active');
    });
});

// (Mantenha aqui abaixo o restante do seu código existente do painel de check-in e modal...)