const questionBody = document.querySelector('.question')
const questionNum = document.querySelector('.question-num')
const counter = document.querySelector('.counter')
const answers = document.querySelectorAll('p');
const nextBtn = document.querySelector('.next')

const NUM_OF_QUESTIONS = 10;
let currentIndex = 0;
const dataArr = [
    { question: '0+1', correctAnswer: '1', answerChoices: '0,1,2,3' },
    { question: '1+2', correctAnswer: '3', answerChoices: '0,1,2,3' },
    { question: '2+3', correctAnswer: '5', answerChoices: '4,5,6,7' },
    { question: '3+4', correctAnswer: '7', answerChoices: '4,5,6,7' },
    { question: '4+5', correctAnswer: '9', answerChoices: '8,9,10,11' },
    { question: '5+6', correctAnswer: '11', answerChoices: '8,9,10,11' },
    { question: '6+7', correctAnswer: '13', answerChoices: '12,13,14,15' },
    { question: '7+8', correctAnswer: '15', answerChoices: '12,13,14,15' },
    { question: '8+9', correctAnswer: '17', answerChoices: '16,17,18,19' },
    { question: '9+10', correctAnswer: '19', answerChoices: '16,17,18,19' },
    { question: '10+11', correctAnswer: '21', answerChoices: '20,21,22,23' },
    { question: '11+12', correctAnswer: '23', answerChoices: '20,21,22,23' },
    { question: '12+13', correctAnswer: '25', answerChoices: '24,25,26,27' },
    { question: '13+14', correctAnswer: '27', answerChoices: '24,25,26,27' },
    { question: '14+15', correctAnswer: '29', answerChoices: '28,29,30,31' },
    { question: '15+16', correctAnswer: '31', answerChoices: '28,29,30,31' },
    { question: '16+17', correctAnswer: '33', answerChoices: '32,33,34,35' },
    { question: '17+18', correctAnswer: '35', answerChoices: '32,33,34,35' },
    { question: '18+19', correctAnswer: '37', answerChoices: '36,37,38,39' },
    { question: '19+20', correctAnswer: '39', answerChoices: '36,37,38,39' }
];

let selectedAnswer;
let score = 0;


function swapWithLastIndex(arr, index) {
    [arr[index], arr[arr.length - 1]] = [arr[arr.length - 1], arr[index]];

}

function getRandomQuestions(sourceArr, numOfQuestions) {
    const tempArr = sourceArr.map(e => { return { ...e } });
    const resultArr = [];
    let selectedIndex = 0;

    for (let i = 0; i < numOfQuestions; i++) {
        selectedIndex = Math.floor(Math.random() * tempArr.length);
        swapWithLastIndex(tempArr, selectedIndex);
        resultArr.push(tempArr.pop());
    }
    return resultArr
}
questionsArr = getRandomQuestions(dataArr, NUM_OF_QUESTIONS)
function loadCurrentQuestion(randomArr, index) {
    counter.textContent = `${index + 1} / ${NUM_OF_QUESTIONS}`;
    questionNum.textContent = `Q${index + 1}`;
    let { question, correctAnswer, answerChoices } = randomArr[index];
    questionBody.textContent = question;
    choicesArr = answerChoices.split(',');
    choicesArr = reOrderChoices(choicesArr);
    answers.forEach((element, index) => {
        element.textContent = choicesArr[index]
        element.onclick = () => setAnswer(element)
    })
    nextBtn.onclick = function () {
        if (selectedAnswer) {
            clearSelectedAnswer()
            if (selectedAnswer == correctAnswer) score++;
            selectedAnswer = undefined;
            currentIndex++;
            if (currentIndex < NUM_OF_QUESTIONS) {
                loadCurrentQuestion(randomArr, currentIndex)
            } else {
                localStorage.setItem('score',score)
                location.href='../score/score.html'
                        }
        }
    }
}
loadCurrentQuestion(questionsArr, currentIndex)

function reOrderChoices(choicesArray) {
    const tempArr = [...choicesArray];
    const resultArr = [];
    let selectedIndex;

    choicesArray.forEach(_ => {
        selectedIndex = Math.floor(Math.random() * tempArr.length);
        swapWithLastIndex(tempArr, selectedIndex);
        resultArr.push(tempArr.pop());

    });
    return resultArr
}

function setAnswer(item) {
    clearSelectedAnswer()
    item.classList.add('selected')
    selectedAnswer = item.textContent;
}

function clearSelectedAnswer() {
    answers.forEach(element => {
        element.classList.remove('selected')
    })

}