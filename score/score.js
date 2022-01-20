const score = localStorage.getItem('score');
const scoreContainer = document.querySelector('.score-container');
const name = localStorage.getItem('name');
scoreContainer.innerText = `Hi ${name}, You Score is :\n ${score}`;

// I used obj becuaseof in order to avoid side effect when reload the page
// also if a player get new score
let unorderedLeadboard = JSON.parse(localStorage.getItem('unorderedLeadboard')) || {};
unorderedLeadboard[name] = score;
localStorage.setItem('unorderedLeadboard', JSON.stringify(unorderedLeadboard));
