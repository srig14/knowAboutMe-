var readlineSync = require("readline-sync")

//welcome message
var name = readlineSync.question('Wanna Play Game? Enter Name :  ')
console.log("Welcome " + name + ", Let's Start ")
console.log('---------------------------------')

//array of objects
var score = 0
var gameArr = [
  {
    question : 'What is my Age ?  ',
   answer : '23'
},
  {
    question : 'What is my favourite Sport?  ',
    answer : 'cricket'
  },
  {
    question : 'Do I have gf?  ',
    answer : 'no'
  },
  {
    question : 'Where do I work?  ',
    answer : 'infosys'
  }
]

//main function
for(let i=0; i<gameArr.length; i++){
  qa(gameArr[i].question,gameArr[i].answer)
}

function qa(question, answer){
  var userAns = readlineSync.question(question)

    if(userAns === answer){
      console.log('right!')
      score +=1
    }else{
      console.log('wrong!')
    }
  console.log('Your current score is:  ' + score)
  console.log('------------------------------------')
  
 
}

 console.log('Your final score is : '+score)


