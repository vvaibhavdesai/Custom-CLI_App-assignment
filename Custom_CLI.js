var readlinesync=require("readline-sync");
var chalk=require("chalk")
// begining of the game 
console.log(chalk.bgCyan('Welcome to the "HOW WELL YOU KNOW QUIZ!" "YOU NEED 3 POINTS for 2ND LEVEL"'));

// starting the game
var wantPlay=readlinesync.question("Do you want to play?(yes/no):")
if (wantPlay.toUpperCase()==="YES"){
  var userName=readlinesync.question("What's your name?")
  var score=0

  console.log("Welcome "+userName+",Let's Start")
  console.log("Initialy your score is :",score)
  console.log("Please ",chalk.bgBlue("Select"),"options as",chalk.bgBlue ("(A/B/C/D)"),'below:')

  //play function
  function play(question,answer){
    var userAnswer=readlinesync.question(question)
    if (userAnswer.toUpperCase()===answer.toUpperCase()){
      console.log(chalk.greenBright("Hurray...you are Right"))
      score+=1
    
    }else{
      console.log(chalk.redBright("Oops!!....you are Wrong"))
      if(score!=0){
        score-=1
        
      }
    }
    console.log(chalk.blueBright("Now your score is:",chalk.yellowBright(score)));
    console.log(chalk.yellowBright("_-_-_-_-_-_-_-_-_-_-_-_-_"))
  }

    var highScore= [
  {
    name: "Shami",
    scores: "4",
  },
  {
    name: "Raje",
    scores:"1",
  }
  ]


  //questions for quiz
  var questions=[
    {question:"What is Vaibhav's Fav color?: \n A.Black \n B.Red \n C.Blue \n D.White \n Please select your option: ",answer:"B"
    }
  , 
  {
    question:"Which is his ALL time fav food?\n A.Pani Puri \n B.Masala Dosa \n C.Chicken Cutlet \n D.Samosa Pav \n Please select your option: ",answer:"C"
  },
  {
    question:"which is his favourite sport? \n A.rugby \n B.football \n C.Rowing \n Please select your option: ",answer:"B"
    
  },]
  var questions1=[
  {
    question:"his favourite sweet? \n A.Kaju Katli \n B.Shahi Tukda \n C.Kandi peda \n Please select your option: ",answer:"A"
    
  },
  {
    question:"does he like colddrink? \n A.Yes \n B.No \n PLease select your option: ",answer:"B"
    
  },
  {
    question:"Where was he born? \n A.Elphinstone \n B.kanoli \n C.sawantwadi \n D.Borivali \n Please select your option: ",answer:"A"
    
  },
  {
    question:"his native place? \n A.Elphinstone \n B.kanoli \n C.sawantwadi \n D.Borivali \n Please select your option: ",answer:"B"
  }


  ]

  for (var i=0;i<questions.length;i++){
    currentQuestion=questions[i]
    play(currentQuestion.question,currentQuestion.answer)
    
  }
  if(score>2)
    {
      console.log(chalk.bgGray("Congrats you reached level 2"))
      for (var i=0;i<questions1.length;i++){

        currentQuestion=questions1[i]
        play(currentQuestion.question,currentQuestion.answer)

    }
    }else{
      console.log(chalk.redBright("You need to know him WELL"))
    }
  console.log(chalk.magentaBright.bold("Your Final Score is :"),score)

    function high()
{
  for(var i=0;i<highScore.length;i++){
    if(score==7){
      console.log(chalk.yellowBright.bold("you are topper,send SS for the update"));
      break
    
    }
    if(highScore[i].scores<score || highScore[i].scores!=score && score!=0){
      console.log(chalk.blueBright.bold("congrats you've set a score for others to beat send ss for update"))
      break
    }
    if(score===0){
      console.log(chalk.cyanBright.bold("Better luck next time"))
      break
    }
  } 
}
high()

console.log("--- LEADER BOARD ---")

    for(j=0;j<highScore.length;j++)
{
  
  console.log(chalk.italic(highScore[j].name ,":",highScore[j].scores))
  { 
    
  }
}console.log("--------------------")
console.log(chalk.bold(" Send a screenshot if highscore beaten  "))


}
else{
  console.log("have a great day")
}
