// Dados iniciais do torneio com resultados já conhecidos
const tournamentData = {
    groups: {
        A: [
            { name: "LA U", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "CANIL FC", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "BUROCRATAS FC", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "PERNAS DE PAU FC", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
        ],
        B: [
            { name: "SOP", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "FEPAMLADEIROS", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "FGTAS", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "PANELA FUTSAL", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
        ],
        C: [
            { name: "MEIA BOCA JRS FT", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "SEDUC TEAM", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "SEDEENTARIOS", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "100 STRESS", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
        ],
        D: [
            { name: "SPORT CLUB SSPS", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "ESCORPIÃO", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "SJCDH", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
            { name: "SEDUR", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
        ]
    },
    matches: [
        // Grupo A - Resultados conhecidos
        { date: "13/10", time: "18:30", group: "A", team1: "LA U", team2: "CANIL FC", score1: 0, score2: 1 },
        { date: "13/10", time: "19:05", group: "A", team1: "BUROCRATAS FC", team2: "PERNAS DE PAU FC", score1: 0, score2: 6 },
        { date: "15/10", time: "20:15", group: "A", team1: "LA U", team2: "PERNAS DE PAU FC", score1: 4, score2: 3 },
        { date: "15/10", time: "20:50", group: "A", team1: "CANIL FC", team2: "BUROCRATAS FC", score1: 1, score2: 1 },
        { date: "20/10", time: "19:05", group: "A", team1: "LA U", team2: "BUROCRATAS FC", score1: null, score2: null },
        { date: "20/10", time: "19:40", group: "A", team1: "CANIL FC", team2: "PERNAS DE PAU FC", score1: null, score2: null },
        
        // Grupo B - Resultados conhecidos
        { date: "13/10", time: "19:40", group: "B", team1: "SOP", team2: "FEPAMLADEIROS", score1: 1, score2: 3 },
        { date: "13/10", time: "20:15", group: "B", team1: "FGTAS", team2: "PANELA FUTSAL", score1: 1, score2: 7 },
        { date: "17/10", time: "18:30", group: "B", team1: "SOP", team2: "PANELA FUTSAL", score1: null, score2: null },
        { date: "17/10", time: "19:05", group: "B", team1: "FEPAMLADEIROS", team2: "FGTAS", score1: null, score2: null },
        { date: "20/10", time: "20:15", group: "B", team1: "SOP", team2: "FGTAS", score1: null, score2: null },
        { date: "20/10", time: "20:50", group: "B", team1: "FEPAMLADEIROS", team2: "PANELA FUTSAL", score1: null, score2: null },
        
        // Grupo C - Resultados conhecidos
        { date: "13/10", time: "20:50", group: "C", team1: "MEIA BOCA JRS FT", team2: "SEDUC TEAM", score1: 4, score2: 1 },
        { date: "15/10", time: "18:30", group: "C", team1: "SEDEENTARIOS", team2: "100 STRESS", score1: 1, score2: 5 },
        { date: "17/10", time: "19:40", group: "C", team1: "MEIA BOCA JRS FT", team2: "100 STRESS", score1: null, score2: null },
        { date: "17/10", time: "20:15", group: "C", team1: "SEDUC TEAM", team2: "SEDEENTARIOS", score1: null, score2: null },
        { date: "22/10", time: "18:30", group: "C", team1: "MEIA BOCA JRS FT", team2: "SEDEENTARIOS", score1: null, score2: null },
        { date: "22/10", time: "19:05", group: "C", team1: "SEDUC TEAM", team2: "100 STRESS", score1: null, score2: null },
        
        // Grupo D - Resultados conhecidos
        { date: "15/10", time: "19:05", group: "D", team1: "SPORT CLUB SSPS", team2: "ESCORPIÃO", score1: 3, score2: 3 },
        { date: "15/10", time: "19:40", group: "D", team1: "SJCDH", team2: "SEDUR", score1: 2, score2: 5 },
        { date: "17/10", time: "20:50", group: "D", team1: "SPORT CLUB SSPS", team2: "SEDUR", score1: null, score2: null },
        { date: "20/10", time: "18:30", group: "D", team1: "ESCORPIÃO", team2: "SJCDH", score1: null, score2: null },
        { date: "22/10", time: "19:40", group: "D", team1: "SPORT CLUB SSPS", team2: "SJCDH", score1: null, score2: null },
        { date: "22/10", time: "20:15", group: "D", team1: "ESCORPIÃO", team2: "SEDUR", score1: null, score2: null }
    ],
    finals: {
        semifinals: [
            { time: "19:15", team1: "1ºA", team2: "1ºB", score1: null, score2: null },
            { time: "19:50", team1: "1ºC", team2: "1ºD", score1: null, score2: null }
        ],
        final: {
            time: "21:15", team1: "VENC SF1", team2: "VENC SF2", score1: null, score2: null
        }
    }
};

// Credenciais do ADM
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "Senha@1234"
};

// Estado da aplicação
let isAdmin = false;

// Carregar dados salvos do localStorage
function loadSavedData() {
    const savedData = localStorage.getItem('futsalTournamentData');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return tournamentData;
}

// Salvar dados no localStorage
function saveData() {
    if (!isAdmin) {
        showLoginModal();
        return;
    }
    localStorage.setItem('futsalTournamentData', JSON.stringify(tournamentData));
    alert('Dados salvos com sucesso!');
}

// Resetar dados
function resetData() {
    if (!isAdmin) {
        showLoginModal();
        return;
    }
    
    if (confirm('Tem certeza que deseja resetar todos os dados?')) {
        localStorage.removeItem('futsalTournamentData');
        location.reload();
    }
}

// Mostrar modal de login
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

// Fechar modal de login
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.getElementById('loginForm').reset();
}

// Fazer login
function login(username, password) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        isAdmin = true;
        closeLoginModal();
        updateUIForAdmin();
        alert('Login realizado com sucesso!');
        return true;
    } else {
        alert('Credenciais inválidas!');
        return false;
    }
}

// Fazer logout
function logout() {
    isAdmin = false;
    updateUIForAdmin();
    alert('Logout realizado com sucesso!');
}

// Atualizar UI baseado no estado do ADM
function updateUIForAdmin() {
    const adminControls = document.querySelector('.admin-controls');
    const actionButtons = document.querySelector('.action-buttons');
    const container = document.querySelector('.container');
    
    if (isAdmin) {
        adminControls.classList.add('active');
        actionButtons.style.display = 'flex';
        container.classList.remove('read-only');
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminLogout').style.display = 'inline-block';
    } else {
        adminControls.classList.remove('active');
        actionButtons.style.display = 'none';
        container.classList.add('read-only');
        document.getElementById('adminLogin').style.display = 'inline-block';
        document.getElementById('adminLogout').style.display = 'none';
    }
    
    // Re-renderizar jogos para atualizar estado de edição
    renderMatches();
    renderFinals();
}

// Calcular classificação dos grupos
function calculateGroupStandings() {
    // Resetar estatísticas dos times
    for (const group in tournamentData.groups) {
        tournamentData.groups[group].forEach(team => {
            team.played = 0;
            team.wins = 0;
            team.draws = 0;
            team.losses = 0;
            team.goalsFor = 0;
            team.goalsAgainst = 0;
            team.points = 0;
        });
    }

    // Processar resultados dos jogos
    tournamentData.matches.forEach(match => {
        if (match.score1 !== null && match.score2 !== null) {
            const group = tournamentData.groups[match.group];
            const team1 = group.find(t => t.name === match.team1);
            const team2 = group.find(t => t.name === match.team2);

            if (team1 && team2) {
                // Atualizar estatísticas
                team1.played++;
                team2.played++;
                
                team1.goalsFor += match.score1;
                team1.goalsAgainst += match.score2;
                
                team2.goalsFor += match.score2;
                team2.goalsAgainst += match.score1;

                if (match.score1 > match.score2) {
                    team1.wins++;
                    team2.losses++;
                    team1.points += 3;
                } else if (match.score1 < match.score2) {
                    team2.wins++;
                    team1.losses++;
                    team2.points += 3;
                } else {
                    team1.draws++;
                    team2.draws++;
                    team1.points += 1;
                    team2.points += 1;
                }
            }
        }
    });

    // Ordenar times em cada grupo
    for (const group in tournamentData.groups) {
        tournamentData.groups[group].sort((a, b) => {
            // Critérios de desempate
            if (a.points !== b.points) return b.points - a.points;
            
            const aGoalDiff = a.goalsFor - a.goalsAgainst;
            const bGoalDiff = b.goalsFor - b.goalsAgainst;
            if (aGoalDiff !== bGoalDiff) return bGoalDiff - aGoalDiff;
            
            if (a.goalsFor !== b.goalsFor) return b.goalsFor - a.goalsFor;
            
            // Em caso de empate total, manter ordem alfabética
            return a.name.localeCompare(b.name);
        });
    }
}

// Calcular classificação geral
function calculateOverallStandings() {
    const allTeams = [];
    
    for (const group in tournamentData.groups) {
        tournamentData.groups[group].forEach(team => {
            allTeams.push({
                ...team,
                group: group
            });
        });
    }
    
    // Ordenar por pontos, saldo de gols, gols pró
    return allTeams.sort((a, b) => {
        if (a.points !== b.points) return b.points - a.points;
        
        const aGoalDiff = a.goalsFor - a.goalsAgainst;
        const bGoalDiff = b.goalsFor - b.goalsAgainst;
        if (aGoalDiff !== bGoalDiff) return bGoalDiff - aGoalDiff;
        
        if (a.goalsFor !== b.goalsFor) return b.goalsFor - a.goalsFor;
        
        return a.name.localeCompare(b.name);
    });
}

// Atualizar estatísticas
function updateStats() {
    const totalMatches = tournamentData.matches.length;
    const completedMatches = tournamentData.matches.filter(match => 
        match.score1 !== null && match.score2 !== null
    ).length;
    const remainingMatches = totalMatches - completedMatches;
    
    document.getElementById('totalMatches').textContent = totalMatches;
    document.getElementById('completedMatches').textContent = completedMatches;
    document.getElementById('remainingMatches').textContent = remainingMatches;
}

// Renderizar classificação geral
function renderOverallStandings() {
    const overallTable = document.querySelector('#overallTable tbody');
    const overallStandings = calculateOverallStandings();
    
    let html = '';
    overallStandings.forEach((team, index) => {
        const goalDiff = team.goalsFor - team.goalsAgainst;
        const isQualified = index < 4; // Primeiros 4 times (1º de cada grupo)
        
        html += `<tr ${isQualified ? 'class="qualified"' : ''}>
            <td>${index + 1}${isQualified ? 'º ✓' : 'º'}</td>
            <td><strong>${team.name}</strong></td>
            <td>${team.group}</td>
            <td>${team.played}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td>${goalDiff}</td>
            <td><strong>${team.points}</strong></td>
        </tr>`;
    });
    
    overallTable.innerHTML = html;
}

// Renderizar grupos
function renderGroups() {
    const groupsContainer = document.querySelector('.groups-container');
    groupsContainer.innerHTML = '';

    for (const group in tournamentData.groups) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        
        let html = `<h3>Grupo ${group}</h3>`;
        html += `<table>
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Time</th>
                    <th>P</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>`;
        
        tournamentData.groups[group].forEach((team, index) => {
            const goalDiff = team.goalsFor - team.goalsAgainst;
            const isFirst = index === 0;
            
            html += `<tr ${isFirst ? 'class="qualified"' : ''}>
                <td>${index + 1}º</td>
                <td><strong>${team.name}</strong>${isFirst ? ' ✓' : ''}</td>
                <td>${team.played}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${goalDiff}</td>
                <td><strong>${team.points}</strong></td>
            </tr>`;
        });
        
        html += `</tbody></table>`;
        groupDiv.innerHTML = html;
        groupsContainer.appendChild(groupDiv);
    }
}

// Renderizar jogos
function renderMatches() {
    const matchesContainer = document.querySelector('.matches');
    matchesContainer.innerHTML = '';

    // Agrupar jogos por data
    const matchesByDate = {};
    tournamentData.matches.forEach(match => {
        if (!matchesByDate[match.date]) {
            matchesByDate[match.date] = [];
        }
        matchesByDate[match.date].push(match);
    });

    // Renderizar jogos por data
    for (const date in matchesByDate) {
        const matchDayDiv = document.createElement('div');
        matchDayDiv.className = 'match-day';
        
        let html = `<h4>${date}</h4>`;
        
        matchesByDate[date].forEach(match => {
            const isCompleted = match.score1 !== null && match.score2 !== null;
            
            html += `<div class="match ${isCompleted ? 'completed' : ''}">
                <div class="team">${match.team1}</div>`;
            
            if (isCompleted) {
                html += `<div class="score-display">${match.score1}</div>
                <div class="vs">X</div>
                <div class="score-display">${match.score2}</div>`;
            } else {
                const canEdit = isAdmin ? '' : 'readonly';
                html += `<input type="number" class="score-input" data-match="${match.team1}-${match.team2}" data-team="1" value="" min="0" ${canEdit}>
                <div class="vs">X</div>
                <input type="number" class="score-input" data-match="${match.team1}-${match.team2}" data-team="2" value="" min="0" ${canEdit}>`;
            }
            
            html += `<div class="team">${match.team2}</div>
                <div class="group-badge">Grupo ${match.group}</div>
            </div>`;
        });
        
        matchDayDiv.innerHTML = html;
        matchesContainer.appendChild(matchDayDiv);
    }

    // Adicionar event listeners aos inputs (apenas para admin)
    if (isAdmin) {
        document.querySelectorAll('.score-input').forEach(input => {
            input.addEventListener('change', function() {
                const matchId = this.getAttribute('data-match');
                const team = this.getAttribute('data-team');
                const value = this.value === '' ? null : parseInt(this.value);
                
                const match = tournamentData.matches.find(m => 
                    `${m.team1}-${m.team2}` === matchId
                );
                
                if (match) {
                    if (team === '1') {
                        match.score1 = value;
                    } else {
                        match.score2 = value;
                    }
                    
                    // Se ambos os scores estão preenchidos, atualizar a classificação
                    if (match.score1 !== null && match.score2 !== null) {
                        calculateGroupStandings();
                        renderGroups();
                        renderOverallStandings();
                        renderFinals();
                        updateStats();
                    }
                }
            });
        });
    }
}

// Renderizar fase final
function renderFinals() {
    const semifinalsContainer = document.querySelector('.semifinals');
    const finalContainer = document.querySelector('.final');
    
    // Semifinais
    let semifinalsHtml = '';
    tournamentData.finals.semifinals.forEach((match, index) => {
        // Determinar times classificados
        let team1Name = match.team1;
        let team2Name = match.team2;
        
        if (match.team1.startsWith('1º')) {
            const group = match.team1.slice(2);
            team1Name = tournamentData.groups[group][0]?.name || match.team1;
        }
        
        if (match.team2.startsWith('1º')) {
            const group = match.team2.slice(2);
            team2Name = tournamentData.groups[group][0]?.name || match.team2;
        }
        
        const isCompleted = match.score1 !== null && match.score2 !== null;
        
        semifinalsHtml += `<div class="match ${isCompleted ? 'completed' : ''}">
            <div class="team">${team1Name}</div>`;
        
        if (isCompleted) {
            semifinalsHtml += `<div class="score-display">${match.score1}</div>
            <div class="vs">X</div>
            <div class="score-display">${match.score2}</div>`;
        } else {
            const canEdit = isAdmin ? '' : 'readonly';
            semifinalsHtml += `<input type="number" class="score-input" data-final="semifinal${index}" data-team="1" value="" min="0" ${canEdit}>
            <div class="vs">X</div>
            <input type="number" class="score-input" data-final="semifinal${index}" data-team="2" value="" min="0" ${canEdit}>`;
        }
        
        semifinalsHtml += `<div class="team">${team2Name}</div>
        </div>`;
    });
    semifinalsContainer.innerHTML = semifinalsHtml;

    // Final
    const finalMatch = tournamentData.finals.final;
    const isFinalCompleted = finalMatch.score1 !== null && finalMatch.score2 !== null;
    
    let finalHtml = `<div class="match ${isFinalCompleted ? 'completed' : ''}">
        <div class="team">${finalMatch.team1}</div>`;
    
    if (isFinalCompleted) {
        finalHtml += `<div class="score-display">${finalMatch.score1}</div>
        <div class="vs">X</div>
        <div class="score-display">${finalMatch.score2}</div>`;
    } else {
        const canEdit = isAdmin ? '' : 'readonly';
        finalHtml += `<input type="number" class="score-input" data-final="final" data-team="1" value="" min="0" ${canEdit}>
        <div class="vs">X</div>
        <input type="number" class="score-input" data-final="final" data-team="2" value="" min="0" ${canEdit}>`;
    }
    
    finalHtml += `<div class="team">${finalMatch.team2}</div>
    </div>`;
    finalContainer.innerHTML = finalHtml;

    // Adicionar event listeners aos inputs da fase final (apenas para admin)
    if (isAdmin) {
        document.querySelectorAll('.score-input[data-final]').forEach(input => {
            input.addEventListener('change', function() {
                const finalType = this.getAttribute('data-final');
                const team = this.getAttribute('data-team');
                const value = this.value === '' ? null : parseInt(this.value);
                
                if (finalType.startsWith('semifinal')) {
                    const index = parseInt(finalType.slice(9));
                    const match = tournamentData.finals.semifinals[index];
                    
                    if (match) {
                        if (team === '1') {
                            match.score1 = value;
                        } else {
                            match.score2 = value;
                        }
                        
                        // Atualizar final se necessário
                        if (match.score1 !== null && match.score2 !== null) {
                            updateFinalTeams();
                        }
                    }
                } else if (finalType === 'final') {
                    const match = tournamentData.finals.final;
                    if (team === '1') {
                        match.score1 = value;
                    } else {
                        match.score2 = value;
                    }
                }
            });
        });
    }
}

// Atualizar times na final com base nas semifinais
function updateFinalTeams() {
    const sf1 = tournamentData.finals.semifinals[0];
    const sf2 = tournamentData.finals.semifinals[1];
    
    if (sf1.score1 !== null && sf1.score2 !== null) {
        tournamentData.finals.final.team1 = sf1.score1 > sf1.score2 ? 
            (sf1.team1.startsWith('1º') ? tournamentData.groups[sf1.team1.slice(2)][0]?.name : sf1.team1) : 
            (sf1.team2.startsWith('1º') ? tournamentData.groups[sf1.team2.slice(2)][0]?.name : sf1.team2);
    }
    
    if (sf2.score1 !== null && sf2.score2 !== null) {
        tournamentData.finals.final.team2 = sf2.score1 > sf2.score2 ? 
            (sf2.team1.startsWith('1º') ? tournamentData.groups[sf2.team1.slice(2)][0]?.name : sf2.team1) : 
            (sf2.team2.startsWith('1º') ? tournamentData.groups[sf2.team2.slice(2)][0]?.name : sf2.team2);
    }
    
    renderFinals();
}

// Renderizar regulamento
function renderRules() {
    const rulesContainer = document.querySelector('.rules-container');
    
    const rules = `
        <div class="rules-section">
            <h3>Objetivos</h3>
            <p>Promover o esporte entre servidores públicos do Poder Executivo Estadual.</p>
        </div>
        
        <div class="rules-section">
            <h3>Formato da Competição</h3>
            <ul class="rules-list">
                <li>16 equipes divididas em 4 grupos de 4 times cada</li>
                <li>Fase de grupos: todos contra todos dentro do grupo</li>
                <li>Classificam os primeiros colocados de cada grupo para as semifinais</li>
                <li>Semifinais: 1ºA x 1ºB e 1ºC x 1ºD</li>
                <li>Final: vencedores das semifinais</li>
            </ul>
        </div>
        
        <div class="rules-section">
            <h3>Duração dos Jogos</h3>
            <ul class="rules-list">
                <li>30 minutos divididos em dois tempos de 15 minutos</li>
                <li>Intervalo de 4 minutos entre os tempos</li>
            </ul>
        </div>
        
        <div class="rules-section">
            <h3>Pontuação</h3>
            <ul class="rules-list">
                <li>Vitória: 3 pontos</li>
                <li>Empate: 1 ponto</li>
                <li>Derrota: 0 pontos</li>
            </ul>
        </div>
        
        <div class="rules-section">
            <h3>Critérios de Desempate</h3>
            <ol class="rules-list">
                <li>Confronto direto (apenas para 2 times)</li>
                <li>Maior saldo de gols (gols pró - gols contra)</li>
                <li>Maior número de gols pró</li>
                <li>Menor número de gols contra</li>
                <li>Sorteio</li>
            </ol>
        </div>
        
        <div class="rules-section">
            <h3>Regras Importantes</h3>
            <ul class="rules-list">
                <li>Número mínimo de jogadores: 5</li>
                <li>WO: vitória de 1x0 para o adversário</li>
                <li>Tolerância de atraso: 5 minutos</li>
                <li>Substituições: ilimitadas, com aviso ao mesário</li>
                <li>Cartão vermelho: suspensão automática do próximo jogo</li>
                <li>Dois cartões amarelos: suspensão automática do próximo jogo</li>
            </ul>
        </div>
    `;
    
    rulesContainer.innerHTML = rules;
}

// Inicializar a aplicação
function init() {
    // Carregar dados salvos
    const savedData = loadSavedData();
    Object.assign(tournamentData, savedData);
    
    // Calcular classificação inicial
    calculateGroupStandings();
    
    // Renderizar todas as seções
    renderOverallStandings();
    renderGroups();
    renderMatches();
    renderFinals();
    renderRules();
    updateStats();
    updateUIForAdmin();
    
    // Configurar tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as tabs
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Configurar botões de ação
    document.getElementById('saveData').addEventListener('click', saveData);
    document.getElementById('resetData').addEventListener('click', resetData);
    
    // Configurar login/logout
    document.getElementById('adminLogin').addEventListener('click', showLoginModal);
    document.getElementById('adminLogout').addEventListener('click', logout);
    
    // Configurar modal de login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });
    
    document.querySelector('.close').addEventListener('click', closeLoginModal);
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('loginModal');
        if (e.target === modal) {
            closeLoginModal();
        }
    });
}

// Iniciar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);
