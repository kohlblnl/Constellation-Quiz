'use strict'

const quizObj = [
  {
    question: 'What is the difference between a constellation and an asterism?', 
    options: [
              "Asterism is just the shortened word for constellation.",
              "Constellations are the recognized star patterns of the IAU.",
              "Stars don’t exist.",
              "They are the same thing."
            ],
    answer: "Constellations are the recognized star patterns of the IAU."
  },
  {
    question: "Which one is an offical constellation?",
    options: [
      '<img alt="The Big Dipper"      src="https://www.farmersalmanac.com/wp-content/uploads/2015/05/big-dipper-566x400.jpg">', 
      '<img alt="The Summer Triangle" src="https://www.farmersalmanac.com/wp-content/uploads/2009/06/summer-triangle-2009.jpg">',
      '<img alt="The Northern Cross" src="https://en.es-static.us/upl/2009/06/northern_cross_350.jpg">',
      '<img alt="Leo the Lion" src="https://www.farmersalmanac.com/wp-content/uploads/2015/11/Leo-regulus-600x400.jpg">'
    ],
    answer:
      '<img alt="Leo the Lion" src="https://www.farmersalmanac.com/wp-content/uploads/2015/11/Leo-regulus-600x400.jpg">'
    
  },
  {
    question: "Which constellation is Orion?",
    options: ['<img alt="Orion the Hunter" src="https://www.farmersalmanac.com/wp-content/uploads/2015/12/orion-blog-600x400.jpg">', 
     '<img alt="Taurus the Bull" src="https://www.farmersalmanac.com/wp-content/uploads/2014/11/TheBull-573x400.jpg">',
     '<img alt="Scorpius the Scorpion" src="https://www.farmersalmanac.com/wp-content/uploads/2017/07/Scorpius-i512291573-600x319.jpg">', 
     '<img alt="Bootes the Herdsman" src="https://www.farmersalmanac.com/wp-content/uploads/2009/05/Bootes-ploughman-constellation-i514624426-600x318.jpg">'
    ],
    answer: '<img alt="Orion the Hunter" src="https://www.farmersalmanac.com/wp-content/uploads/2015/12/orion-blog-600x400.jpg">'
  },
  {
    question: "The Big Dipper is part of what constellation?",
    options: [
      "Canis Minor",
      "Gemini",
      "Ursa Major",
      "Cassiopeia"
    ],
    answer: "Ursa Major"
  },
  {
    question: "The North Star's actual name is?",
    options: [
      "Arcturus", 
      "Polaris",
      "Betelgeuse",
      "Sirius"
    ],
    answer: "Polaris"
  },
  {
    question: "True or False: Are the constellations the same at the north pole as the south pole?",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: 'This Disney movie is named after which constellation? <img alt="The constellation Hercules" src= "https://upload.wikimedia.org/wikipedia/commons/c/c4/Hercules_Historical_View.png">',
    options: [ 
      '<img alt="Lilo and Stitch movie cover" src="https://images-na.ssl-images-amazon.com/images/I/51P1140N5FL._SX354_BO1,204,203,200_.jpg">', 
      '<img alt="The Little Mermaid movie cover" src="https://images-na.ssl-images-amazon.com/images/I/51ZV1782WTL._SY445_.jpg">', 
      '<img alt="Bambi movie cover" src="https://production-gameflipusercontent.fingershock.com/us-east-1:957be4fc-12ef-490f-9ff1-c28d10811bdb/00617a0f-932f-4775-8139-a91678ba6d4d/8ed42d29-132f-41b2-9365-ec47422f304c">',
      '<img alt="Hercules movie cover" src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-z87kej_c0dfd167.jpeg?region=0%2C0%2C2000%2C3000">'
    ],
    answer: '<img alt="Hercules movie cover" src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-z87kej_c0dfd167.jpeg?region=0%2C0%2C2000%2C3000">'
  },
  {
    question: 'This character in Harry Potter is named after a star in which constellation? <img alt="Sirius Black from Harry Potter" src= "https://images.pottermore.com/bxd3o8b291gf/69p5J1YC3uWwkoGKuCwIUs/e754d4de50e851d6f62e9b9a7d57e761/SiriusBlack_WB_F5_SiriusAndHarryTalkingDuringFightInDepartmentofMysteries_Still_080615_Land.jpg?w=1200">',
    options: [
      '<img alt="Constellation Canis Major" src="https://stardate.org/sites/default/files/styles/300px/public/images/gallery/canis_major.png?itok=7_t0Z_35">', 
      '<img alt="Constellation Cephus" src="https://www.farmersalmanac.com/wp-content/uploads/2012/02/cephus.jpg">', 
      '<img alt="Constellation Delphinus" src="https://www.farmersalmanac.com/wp-content/uploads/2012/09/delphinus.jpg">',
      '<img alt="Constellation Pegasus" src="https://www.farmersalmanac.com/wp-content/uploads/2011/09/pegasus-the-legendary-winged-horse-12485.jpg">'
    ],
    answer: '<img alt="Constellation Canis Major" src="https://stardate.org/sites/default/files/styles/300px/public/images/gallery/canis_major.png?itok=7_t0Z_35">'
  },
  {
    question: 'True or False: Are the astrological signs named after constellations?',
    options: [
      'True',
      'False'
    ],
    answer: 'True'
  },
  {
    question: 'This car company is named after this constellation? <img alt="Constellation of Subaru" src= "https://i.pinimg.com/originals/98/3f/1b/983f1b4705d26e5e2207671097c54041.png">',
    options: [
      '<img alt="Mercedes Logo" src="https://www.carlogos.org/logo/Mercedes-Benz-logo.png">', 
      '<img alt="Subaru Logo" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2cbf.png">', 
      '<img alt="Audi Logo" src="https://cartype.com/pics/121/full/audi_logo_1.jpg">', 
      '<img alt="Ford Logo" src="https://turn5.scene7.com/is/image/Turn5/T534991?$prodpg640x480$">'
    ],
    answer: '<img alt="Subaru Logo" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2cbf.png">'
  }
];

let questionNum = 0;
let questionCount = 1;
let percentCorrect = 0;

//These functions create the dynamic html.
function createScore(){
  let trackers = '<span class = "percent-correct">'+percentCorrect+'%</span><span class = "question-number">'+questionCount+' of 10</span><h2 class = "quiz-title">Constellation Quiz</h2>';
  return trackers;
}

function createQuestion(){
  let question = '<section class = "question"><h1 class = "question2">' + grabQuestion(questionNum) +'</h1></section>' + createOptions();
  return question;
}

function createOptions(){
  let options = '';
  for(let i = 0; i < quizObj[questionNum].options.length; i++){
    options = options + '<button class="option answer">' + grabOptions(questionNum, i) + '</button>';
  }
  options = '<section class = "answers"><form class="options">' + options + '</form></section>';
  return options;
}

function endQuiz(){
  let endHtml = '<section class="question"><h1>You scored '+percentCorrect+ '% </h1></section><section class="answers"><p class="feedback">Would you like to try again?</p><form><button class="answer end">Try again</button></form></section>';
  return endHtml;
}

//These functions get the information needed from the object array.
function grabQuestion(num){
  let question = quizObj[num].question;
  return question;
}

function grabOptions(num1,num2){
  let option = quizObj[num1].options[num2];
  return option;
}

function grabAnswer(num){
  let ans = quizObj[num].answer;
  return ans;
}

//These functions create html based off of how the user answers or where they are at in the quiz.
function createAnswer(){
  let answer = '';
  if (questionCount === 10){
    answer = '<section class="answers"><p class = "feedback">The answer is: '+ grabAnswer(questionNum) + '</p><form class="next-question"><button class="next">See Results</button></section>';
  }
  else {
    answer = '<section class="answers"><p class = "feedback">The answer is: '+ grabAnswer(questionNum) + '</p><form class="next-question"><button class="next">Next Question</button></section>';
  }
  return answer;
}

function compareAnswer(user, actual){
  let feedbackHtml = '';
  if(user !== actual){
    feedbackHtml = '<section><h1 class="question">Incorrect</h1></section>' + createAnswer();
    questionNum++;
    questionCount++;
  }
  else{
    feedbackHtml = '<section><h1 class="question">Correct</h1></section>'+ createAnswer();
    questionNum++;
    percentCorrect += 10;
    $('header').html(createScore());
    questionCount++;
  }
  return feedbackHtml;
}

//This function is used to grab the information from the user clicked option. 
function userAnswer(optionEle){
  let ans = $(optionEle).html();
  return ans;
}

//This function is used to get the information from the user click and compare it to the 
//actual answer and create the appropriate html.
function feedback(){
  $('.option').on('click', function (event){
    event.preventDefault();
    $('main').html(compareAnswer(userAnswer(this), grabAnswer(questionNum)));
    nextQuestion();
  });
}

//This function creates the html for the next question and the feedback page for it. It also 
//sees where the user is at and creates the end page.
function nextQuestion(){
  if(questionCount <= 10){
    $('.next').on('click', function (event){
      event.preventDefault();
      $('main').html(createQuestion());
      $('header').html(createScore());
      feedback();
    });
  }
  else {
    $('.next').on('click', function(event){
      event.preventDefault();
      $('main').html(endQuiz());
      $('span').remove();
    });
  }
}

//This is the main call function that creates the first question page and where the other
//functions are called to create the quiz.
function generateQuestionHtml(){
  $('.start-quiz, .next').on('click', function (event){
    event.preventDefault();
    $('.start-quiz').remove();
    $('main').html(createQuestion());
    $('header').html(createScore());
    feedback();
  });
}

$(generateQuestionHtml);