// ==========================================================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================================================
const botoesDias = document.querySelectorAll('.dia-btn');
const btnReset = document.getElementById('reset-progresso');
const textoSemana = document.getElementById('contador-semanas');

// Elementos novos do Modal de Troféu
const modal = document.getElementById('modal-conquista');
const textoParabens = document.getElementById('texto-parabens');
const btnFecharModal = document.getElementById('btn-fechar-modal');

// ==========================================================================
// 2. FUNÇÕES DE GERENCIAMENTO DE ESTADO
// ==========================================================================

function carregarProgresso() {
    botoesDias.forEach(botao => {
        const dia = botao.getAttribute('data-dia');
        const status = localStorage.getItem(`funcional-${dia}`);
        
        if (status === 'concluido') {
            botao.classList.add('concluido');
        }
    });

    let semanaSalva = localStorage.getItem('funcional-semana-atual');
    
    if (!semanaSalva) {
        semanaSalva = 1;
        localStorage.setItem('funcional-semana-atual', 1);
    } else {
        semanaSalva = Number(semanaSalva);
    }
    
    atualizarTextoSemana(semanaSalva);
}

function atualizarTextoSemana(numeroSemana) {
    if (numeroSemana === 1) {
        textoSemana.innerText = "1ª Semana de Funcional";
    } else {
        const semanaPassada = numeroSemana - 1;
        textoSemana.innerText = `${semanaPassada}ª semana de funcional concluída!`;
    }
}

// ==========================================================================
// 3. OUVINTES DE EVENTOS (EVENT LISTENERS)
// ==========================================================================

botoesDias.forEach(botao => {
    botao.addEventListener('click', () => {
        const dia = botao.getAttribute('data-dia');
        botao.classList.toggle('concluido');

        if (botao.classList.contains('concluido')) {
            localStorage.setItem(`funcional-${dia}`, 'concluido');
        } else {
            localStorage.removeItem(`funcional-${dia}`);
        }
    });
});

// Monitora o clique no botão de reiniciar e avançar a semana
btnReset.addEventListener('click', () => {
    if (confirm('Você finalizou todos os treinos e quer avançar para a PRÓXIMA SEMANA?')) {
        
        botoesDias.forEach(botao => {
            const dia = botao.getAttribute('data-dia');
            botao.classList.remove('concluido');
            localStorage.removeItem(`funcional-${dia}`);
        });

        let semanaAtual = Number(localStorage.getItem('funcional-semana-atual')) || 1;
        
        const semanaConcluida = semanaAtual; 
        
        semanaAtual = semanaAtual + 1;
        localStorage.setItem('funcional-semana-atual', semanaAtual);

        atualizarTextoSemana(semanaAtual);

        // ✨ EXIBE O MODAL COM A MENSAGEM PERSONALIZADA
        textoParabens.innerText = `Sensacional! A sua ${semanaConcluida}ª semana de Circuito Funcional foi totalmente concluída. Corpo ágil e core forte, continue firme!`;
        modal.classList.add('mostrar');
    }
});

// Fecha o modal ao clicar no botão "Continuar Treinando"
btnFecharModal.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

// ==========================================================================
// 4. INICIALIZAÇÃO
// ==========================================================================
carregarProgresso();