const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

 console.log("Welcome to the Quiz");

const quizQuestions = [
    {
        question: "When do we celebrate Christmas?",
        multipleChoice: ["December", "January", "May"],
        answer: "December"
    },
    {
        question: "What is 5 + 2?",
        multipleChoice: ["5", "6", "7"],
        answer: "7"
    }
];

    //variables
    let index = 0
    let score = 0
   
    //end of quiz after all questions are answered
    function askQuestions(){
        if (index >= quizQuestions.length){
        console.log(`quiz ended you score: ${score}`)
        rl.close()
        return
         }
         let current = quizQuestions[index]
    console.log( current.question)
     current.multipleChoice.forEach((choice,i)=>{
        console.log(`${i + 1} . ${choice}`)
     })
     
 // asynchronous js timers
      let timer =setTimeout(() => {
        console.log( "your running out of time");
        console.log(`correct answer is: ${current.answer}`)
        index++
        askQuestions()

     }, 10000)

   /*rl.question("your answer"(enter number)):",(userAnswer) => {
   clearTimeout(timer) */ 
   rl.question("Your answer (enter number): ", (userAnswer) => {
    clearTimeout(timer)
   const chosenIndex = parseInt(userAnswer) - 1
    const chosenAnswer = current.multipleChoice[chosenIndex]
  
//user feedback
    
     if (chosenAnswer === current.answer){
        console.log("correct") 
        score++ 
    }else{
        console.log(`incorrect :  ${current.answer}`)
    }
        index++
        askQuestions()



      });
    
    }

    askQuestions() 

