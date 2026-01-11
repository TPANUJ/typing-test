const paragraphs = ["Education is very important in our life. It helps us gain knowledge, skills, and confidence. Through education, we learn how to read, write, and think clearly. It teaches us discipline and good values. Education helps people get better jobs and live a better life. It also helps us understand the world around us and make good decisions. An educated person can help their family and society grow. Schools and colleges play a big role in shaping our future. Education is not only about books, but also about learning how to be a good human being.",
                     "My daily routine is simple and well organized. I wake up early in the morning and brush my teeth. After that, I exercise for some time to stay healthy. I take a bath and eat breakfast. Then I go to college and attend my classes. I listen carefully to my teachers and take notes. In the evening, I return home and rest for a while. Later, I study, complete my homework, and practice coding. At night, I have dinner with my family and go to bed on time.",
                     "Friendship is a beautiful part of life. A true friend supports us in good and bad times. Friends make us feel happy and less lonely. We share our thoughts, problems, and dreams with them. A good friend gives honest advice and helps us improve ourselves. Friendship teaches us trust, care, and understanding. Spending time with friends reduces stress and brings joy. True friendship is based on respect and loyalty. Life becomes more meaningful when we have friends who stand by us and encourage us to do better.",
                     "Healthy food is necessary for a strong body and mind. It gives us energy to work and study properly. Fruits, vegetables, grains, and proteins help our body grow and stay fit. Eating healthy food improves digestion and boosts immunity. It also helps prevent diseases and keeps our weight under control. Junk food may taste good, but it is harmful if eaten regularly. Drinking enough water is also important for good health. By choosing healthy food every day, we can live a long, active, and happy life.",
                     "Technology plays an important role in our daily life. It makes our work easier and faster. With the help of technology, we can communicate with people anywhere in the world. Mobile phones and the internet help us learn new things. Students use technology for online classes and projects. Technology is also useful in healthcare, education, and business. However, too much use of technology can be harmful. We should use it wisely and for good purposes. When used properly, technology helps in progress and development."
]
const typingpara = []
 let randomparaindex
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
  console.log(typingpara);
}




let counter
let youcanwrite = document.getElementById("input")


function starttimer() {

counter = 6
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
 
}


