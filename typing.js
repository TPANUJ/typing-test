const paragraphs = [
  "Learning programming requires patience practice and consistency every day. Writing small programs helps understand logic better. Mistakes are part of the process and improve problem solving skills. When concepts become clear confidence increases and coding feels enjoyable and rewarding over time.",
  "A healthy routine improves both physical and mental well being. Waking up early eating nutritious food and exercising daily builds discipline. Good habits reduce stress and increase focus. When the body feels active the mind works better and productivity naturally improves throughout the day.",
  "Technology plays a major role in modern education and communication. Students use digital tools to learn research and collaborate. Online resources provide instant information and skill development opportunities. When used wisely technology saves time increases efficiency and supports personal and professional growth.",
  "Time management is an important skill for students and professionals. Planning tasks and setting priorities helps reduce pressure. Completing work on time builds confidence and trust. When time is used effectively goals become achievable and daily routines feel more organized and balanced.",
  "Friendship brings joy support and understanding in our lives. True friends listen help during difficult moments and celebrate success. Sharing thoughts creates emotional bonding and trust. Strong friendships reduce loneliness increase happiness and make life more meaningful and enjoyable in every stage.",
  "Hard work combined with smart strategies leads to long term success. Small consistent efforts create powerful results. Discipline patience and focus help overcome challenges. When motivation stays strong and learning continues improvement becomes visible and goals gradually turn into achievements.",
  "Reading books improves vocabulary imagination and thinking ability. It exposes readers to new ideas cultures and perspectives. Regular reading reduces stress and increases concentration. Developing a reading habit strengthens communication skills and enhances knowledge useful in both studies and life.",
  "Self confidence helps people express ideas clearly and face challenges bravely. Believing in abilities encourages positive action and growth. Confidence grows through learning practice and experience. When fear reduces opportunities increase and personal development becomes faster and more effective.",
  "Healthy sleep is essential for brain function and overall wellness. Proper rest improves memory mood and concentration. Lack of sleep causes fatigue and poor decision making. Maintaining a regular sleep schedule increases energy productivity and mental clarity throughout the day.",
  "Goal setting gives direction and motivation in life. Clear goals help track progress and stay focused. Breaking goals into smaller tasks makes them achievable. When effort aligns with purpose success feels meaningful and self improvement becomes a continuous journey."
];


const typingpara = []
 let randomparaindex
 let startenabling = document.getElementById("start");
 startenabling.disabled = true

function randomPara() {
   
    const randomnumber = Math.random();
   if (randomnumber < 1 / 10) {
  randomparaindex = 0;
} else if (randomnumber >= 1 / 10 && randomnumber < 2 / 10) {
  randomparaindex = 1;
} else if (randomnumber >= 2 / 10 && randomnumber < 3 / 10) {
  randomparaindex = 2;
} else if (randomnumber >= 3 / 10 && randomnumber < 4 / 10) {
  randomparaindex = 3;
} else if (randomnumber >= 4 / 10 && randomnumber < 5 / 10) {
  randomparaindex = 4;
} else if (randomnumber >= 5 / 10 && randomnumber < 6 / 10) {
  randomparaindex = 5;
} else if (randomnumber >= 6 / 10 && randomnumber < 7 / 10) {
  randomparaindex = 6;
} else if (randomnumber >= 7 / 10 && randomnumber < 8 / 10) {
  randomparaindex = 7;
} else if (randomnumber >= 8 / 10 && randomnumber < 9 / 10) {
  randomparaindex = 8;
} else {
  randomparaindex = 9;
}

  document.querySelector(".para").innerHTML = paragraphs[randomparaindex]
  typingpara.push(paragraphs[randomparaindex])
  startenabling.disabled = false
  
}




let counter
let youcanwrite = document.getElementById("input")
let inputfield
let setintervalid


function starttimer() {
 
  inputfield = document.getElementById("input");
  inputfield.value = ''
  inputfield.focus();

counter = 30
setintervalid = setInterval(function timer() {
if (counter >= 0) {
  counter--
  document.querySelector(".speed").innerHTML = counter
  youcanwrite.disabled = false
}  
if (counter === 0) {
  addpara()
}
if (counter <= 0) {
  youcanwrite.disabled  = true; 
  clearInterval(setintervalid)
}
},1000)
}



let inputarr = []
let inputvalue

function addpara() {

 inputvalue = document.getElementById("input")
 inputarr.push(inputvalue.value)
 console.log(inputarr);
 compare()
}

function compare() {
 const originalWords = typingpara[0].toLowerCase().split(" ");
  const typedWords = inputarr[0].toLowerCase().split(" ");

  let correct = 0;
  let wrong = 0;
  let accuracy
  let speed

  const maxLength = Math.max(originalWords.length, typedWords.length);

  for (let i = 0; i < maxLength; i++) {
    if (typedWords[i] === undefined) {
      wrong++; 
    } else if (originalWords[i] === typedWords[i]) {
      correct++;
    } else {
      wrong++;
    }
  }

accuracy = ((correct/typedWords.length)*100).toFixed(2)
speed = (typedWords.length * 2)

if (accuracy > 80 && speed > 40) {
  alert(`well done sahi hai! your accuracy is ${accuracy} % and speed ${speed} wpm.` ) 
}else if (accuracy < 60 && speed < 25) {
  alert(`kya yrr bhai! your accuracy is ${accuracy} % and speed ${speed} wpm.` ) 
} else{alert(`avg hai ye accuracy is ${accuracy} % and speed ${speed} wpm.` ) }
  
}

