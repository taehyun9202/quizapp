const quizScript = [
    {
        question: "What is my Name?",
        a: "Jason",
        b: "Tyler",
        c: "Michael",
        d: "Royce",
        answer: "b"
    },
    {
        question: "What is my favorite language?",
        a: "C#",
        b: "JS",
        c: "Python",
        d: "C++",
        answer: "b"
    },
    {
        question: "What is my favorite Bai flavor?",
        a: "Blueberry",
        b: "Coconut",
        c: "Watermelon",
        d: "Cherry",
        answer: "a"
    },
    {
        question: "Which floor is my room at?",
        a: "Basement",
        b: "First",
        c: "Second",
        d: "Third",
        answer: "a"
    },
    {
        question: "Who is the current president of U.S?",
        a: "Obama",
        b: "Biden",
        c: "Trump",
        d: "Bush",
        answer: "c"
    },
    {
        question: "What is the most used programming language in 2020?",
        a: "JS",
        b: "C",
        c: "Python",
        d: "Java",
        answer: "d"
    },
    {
        question: "What year was JS launched?",
        a: "2001",
        b: "1995",
        c: "1989",
        d: "1985",
        answer: "b"
    },
    {
        question: "What year was Python launched?",
        a: "2001",
        b: "1995",
        c: "1989",
        d: "1985",
        answer: "c"
    },
    {
        question: "What year was C# launched?",
        a: "2001",
        b: "1995",
        c: "1989",
        d: "1985",
        answer: "a"
    },
    {
        question: "What year was C++ launched?",
        a: "2001",
        b: "1995",
        c: "1989",
        d: "1985",
        answer: "d"
    },
    {
        question: "Which State do I live?",
        a: "MaryLand",
        b: "New Jersey",
        c: "Virginia",
        d: "Delaware",
        answer: "b"
    },
    {
        question: "Which lane do I play in league?",
        a: "Top",
        b: "Jungle",
        c: "Mid",
        d: "ADC",
        answer: "c"
    },
    {
        question: "Which position do I play in soccer?",
        a: "Winger",
        b: "Midfielder",
        c: "Striker",
        d: "Wingback",
        answer: "b"
    },
    {
        question: "Which position did I play when I won the best player award?",
        a: "Winger",
        b: "Midfielder",
        c: "Striker",
        d: "Wingback",
        answer: "d"
    },
    {
        question: "Which sports do I like the most?",
        a: "Soccer",
        b: "Basketball",
        c: "BaseBall",
        d: "Football",
        answer: "a"
    },
    {
        question: "Where am I originally from?",
        a: "China",
        b: "Japan",
        c: "Vietnam",
        d: "Korea",
        answer: "d"
    },
    {
        question: "Which country haven't I visited yet?",
        a: "China",
        b: "Japan",
        c: "Canada",
        d: "Korea",
        answer: "a"
    },
    {
        question: "When is my birthday?",
        a: "Feburary",
        b: "March",
        c: "May",
        d: "June",
        answer: "b"
    },
    {
        question: "When is Lena's birthday?",
        a: "Feburary",
        b: "March",
        c: "May",
        d: "June",
        answer: "c"
    },
    {
        question: "Which city was I born in?",
        a: "Seoul",
        b: "Busan",
        c: "Ulsan",
        d: "Anyang",
        answer: "a"
    },
    {
        question: "What year was I born in?",
        a: "1989",
        b: "1991",
        c: "1992",
        d: "1994",
        answer: "c"
    },
    {
        question: "How many seconds are in a day",
        a: "85600",
        b: "84600",
        c: "85400",
        d: "86400",
        answer: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Helicopter Terminal Motorboat Lamborgini",
        c: "Hypertext Makeup Language",
        d: "Hypotext Markup Language",
        answer: "a"
    },
    {
        question: "In What year did I visit Korea?",
        a: "2017",
        b: "2016",
        c: "2013",
        d: "2012",
        answer: "a"
    },
    {
        question: "Answer is b!!",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "b"
    },

    
]
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const btn = document.getElementById("btn")

let questionNumber = 0;
let correct = 0;
// store 10 quiz from data in an array
const quiztoSolve = [];
//generate 10 number between 0 and 25
while(quiztoSolve.length < 10){
    let r = Math.floor(Math.random() * 25) + 1;
    if(quiztoSolve.indexOf(r) === -1) quiztoSolve.push(r);
}


const loadQuiz = () => {  
    const currentQuiz = quizScript[quiztoSolve[questionNumber]]
    //show question and selection for each quiz
    question.innerHTML = questionNumber+1 + ".  " + currentQuiz.question
    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d
}


const selectAnswer = () =>{
    const selected = document.querySelectorAll(".answer")
    let ans = undefined
    selected.forEach((answerSelected) =>{
        if(answerSelected.checked){
            ans =  answerSelected.id
        }
    })
    return ans
}


btn.addEventListener('click', function(){
    const ans = selectAnswer()
    console.log(questionNumber, correct,  selectAnswer(),  quizScript[quiztoSolve[questionNumber]].answer)
    if (questionNumber < quiztoSolve.length){
        if(ans === quizScript[quiztoSolve[questionNumber]].answer){
            console.log(true)
            correct++
        }
        questionNumber++
        loadQuiz();
    }
    else{
        quiz.innerHTML = "<h2>You complete the Quiz!<h2> <br></br> <p>You got " + correct + " out of " + quiztoSolve.length + "questions </p>";
        document.getElementById("btn").innerHTML = "Start Agian";
        btn.addEventListener('click', function(){
            location.reload();
        })
    }
    
});