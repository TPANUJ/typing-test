const paragraphs = [
  "Education plays an important role in our life and helps us gain knowledge and confidence. It teaches discipline values and skills needed for success. Through learning we understand the world better and make correct decisions. Education improves career opportunities and helps society grow stronger and progress together.",
  "A healthy lifestyle keeps our body active and mind fresh every day. Eating balanced food exercising regularly and sleeping well are important habits. Drinking enough water reduces tiredness and improves focus. When we take care of health we feel energetic productive and happy in daily life.",
  "Technology has become an essential part of modern life and daily activities. It helps people communicate learn and work efficiently. Students use technology for studies projects and research. When used wisely technology saves time increases productivity and supports growth in education healthcare and business sectors.",
  "Friendship adds happiness and meaning to our lives and relationships. True friends support us during difficult times and celebrate success together. Sharing thoughts emotions and experiences builds trust and understanding. Good friendship reduces stress boosts confidence and helps us become better individuals in life.",
  "Hard work and consistency are key factors for achieving success in any field. Small daily efforts create big results over time. Patience discipline and focus help overcome challenges. When we stay motivated and never give up we move closer to goals and self improvement."
];

const typingpara = []
 let randomparaindex
 let startenabling = document.getElementById("start");
 startenabling.disabled = true

function randomPara() {
   
    const randomnumber = Math.random();
    if (0 < randomnumber < 1/5) {
       randomparaindex = 1

    } else if (1/5 < randomnumber < 2/5){
       randomparaindex = 2
        
    } else if (2/5 < randomnumber <3/5){
      randomparaindex = 3
        
    } else if (3/5 < randomnumber < 4/5){
        randomparaindex = 4
        
    } else {randomparaindex = 0;
    }
  document.querySelector(".para").innerHTML = paragraphs[randomparaindex]
  typingpara.push(paragraphs[randomparaindex])
  startenabling.disabled = false
  
}




let counter
let youcanwrite = document.getElementById("input")
let inputfield


function starttimer() {
 
  inputfield = document.getElementById("input");
  inputfield.value = ''
  inputfield.focus();

counter = 15
setInterval(function timer() {
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
speed = (typedWords.length * 4)

alert(`accuracy = ${accuracy} % and speed = ${speed}` )  
}

