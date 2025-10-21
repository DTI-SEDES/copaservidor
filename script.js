


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
    
    // Re-renderizar para atualizar estado de edição
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
                <div class="score-display">
