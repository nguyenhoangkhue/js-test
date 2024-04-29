const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
]

function renderQuizes(quizes){
    document.querySelector(".quiz-container").innerHTML=quizes.map(function(quiz){
        const prob=`
        <div class="quiz-item">
            <h3>Câu ${quiz.id} : ${quiz.question} = ?</h3>
            <div class="quiz-answer">
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${quiz.answers[0]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${quiz.answers[1]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${quiz.answers[2]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${quiz.answers[3]}</label>
                </div>
            </div>
        </div>
        `
        return prob
    }).join("")
}

window.addEventListener("DOMContentLoaded",function(e){
    renderQuizes(quizes)
})

function randomAnswer(){
    const questions=document.querySelectorAll(".quiz-item")
    questions.forEach(function(question){
        const options=question.querySelectorAll('input[type="radio"]')
        const randomIndex=Math.floor(Math.random()*options.length)

        options.forEach(function(option){
            option.checked=false
        })
        options[randomIndex].checked=true
    })
}

const btn=document.getElementById("btn")
btn.addEventListener("click",randomAnswer)