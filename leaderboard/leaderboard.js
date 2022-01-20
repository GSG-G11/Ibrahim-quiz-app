const table = document.querySelector('table')
const unorderedLeadboard = JSON.parse(localStorage.getItem('unorderedLeadboard')) || {};
const leadboard = Object.entries(unorderedLeadboard)
leadboard.sort((a, b) => b[1] - a[1])
let item
let row, playerName, playerScore
for (let i = 0; i < leadboard.length && i < 10; i++) {
    item = leadboard[i]
    row = document.createElement('tr');
    playerName = document.createElement('td')
    row.appendChild(playerName)
    playerScore = document.createElement('td')
    row.appendChild(playerScore)
    table.appendChild(row)
    playerName.textContent = `#${i + 1} ${item[0]}`
    playerScore.textContent = item[1]
}