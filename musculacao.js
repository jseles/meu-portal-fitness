document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. ALTERNÂNCIA DE NÍVEIS (BÁSICO, INTERMEDIÁRIO, AVANÇADO)
    // ==========================================================================
    const botoesNivel = document.querySelectorAll('.btn-nivel');
    const conteudosTreino = document.querySelectorAll('.conteudo-treino');

    botoesNivel.forEach(botao => {
        botao.addEventListener('click', (event) => {
            botoesNivel.forEach(b => b.classList.remove('active'));
            conteudosTreino.forEach(treino => treino.style.display = 'none');
            
            const nivelSelecionado = event.target.getAttribute('data-nivel');
            const tabelaAlvo = document.getElementById(`treino-${nivelSelecionado}`);
            if (tabelaAlvo) {
                tabelaAlvo.style.display = 'block';
            }
            
            event.target.classList.add('active');
        });
    });

    // ==========================================================================
    // 2. INTERFACE SANFONA / GAVETA (TREINO INTERMEDIÁRIO)
    // ==========================================================================
    const itensTreino = document.querySelectorAll('.bloco-treino-item');

    itensTreino.forEach(item => {
        const gatilhoCard = item.querySelector('.card-dia-horizontal');
        
        if (gatilhoCard) {
            gatilhoCard.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON' || event.target.closest('button') || event.target.tagName === 'INPUT') {
                    return; 
                }

                if (item.classList.contains('item-ativo')) {
                    item.classList.remove('item-ativo');
                    return;
                }

                itensTreino.forEach(outroItem => outroItem.classList.remove('item-ativo'));
                item.classList.add('item-ativo');
            });
        }
    });

    // ==========================================================================
    // 3. PAINEL DE CHECK-IN SEMANAL, CONTADOR DE SEMANAS & MODAL DO TROFÉU
    // ==========================================================================
    const botoesDiasSemana = document.querySelectorAll('.painel-checkin .dia-btn');
    const modalFundo = document.querySelector('.modal-fundo');
    const btnFecharModal = document.getElementById('btn-fechar-modal');
    const btnResetSemana = document.querySelector('.painel-checkin .btn-reset');
    
    // Seleciona o elemento de texto do título do check-in (ajuste a classe se for diferente)
    const tituloCheckin = document.querySelector('.painel-checkin .titulo-checkin');
    
    // Variável de controle da semana atual (começa na 1)
    let semanaAtual = 1;

    // Escuta o clique nos botões dos dias apenas para marcar/desmarcar
    botoesDiasSemana.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.stopPropagation();
            botao.classList.toggle('concluido');
        });
    });

    // Escuta o clique no botão de "Reiniciar Semana / Avançar"
    if (btnResetSemana) {
        btnResetSemana.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // 1. Validação: Conta o total de dias e quantos foram concluídos
            const totalDias = botoesDiasSemana.length;
            const diasConcluidos = document.querySelectorAll('.painel-checkin .dia-btn.concluido').length;

            // 2. Se todos os dias estiverem marcados, avança a semana e solta o troféu
            if (totalDias > 0 && diasConcluidos === totalDias) {
                
                // Soma mais uma semana no contador
                semanaAtual++;
                
                // Atualiza o texto do título na tela dinamicamente
                if (tituloCheckin) {
                    tituloCheckin.textContent = `${semanaAtual}ª Semana de Musculação`;
                }

                // Abre o modal de conquista
                if (modalFundo) {
                    modalFundo.classList.add('mostrar');
                }
            } else {
                // Se o usuário clicar sem terminar tudo, avisa no console e não sobe a semana
                console.log("Ainda restam treinos para concluir nesta semana antes de avançar!");
            }
            
            // 3. Reseta os botões de dias voltando ao estado normal para a nova semana
            botoesDiasSemana.forEach(btn => btn.classList.remove('concluido'));
        });
    }

    // Ação do Botão de Fechar o Modal Pop-up
    if (btnFecharModal && modalFundo) {
        btnFecharModal.addEventListener('click', () => {
            modalFundo.classList.remove('mostrar');
        });
    }

});