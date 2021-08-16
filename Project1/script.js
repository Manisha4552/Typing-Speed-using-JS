
const message= document.getElementById("msg");
const typedword= document.getElementById("text")
const button= document.getElementById("btn");
let startTime,endTime;

const msg=[
    "My Mum tries to be cool by saying that she likes all the same things that I do.",
    "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.",
    "The quick brown fox jumps over the lazy dog."
];

const playGame = () =>{

    let randomNumber = Math.floor(Math.random() * msg.length);
    // console.log(randomNumber);
    message.innerText = msg[randomNumber];
    let date= new Date();
    startTime=date.getTime();
    button.innerText="Done";
}

const endPlay = () =>{

    let date= new Date();
    endTime=date.getTime(); 
    let totalTime=((endTime - startTime)/1000);
    console.log(totalTime);

    let totalStr= typedword.value;
    let wordCount= wordCounter(totalStr);

    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg= "You typed "+speed+ " words per minute ";
    finalMsg+=compareWords(message.innerText,totalStr)
    message.innerText=finalMsg;

}

const compareWords = (str1,str2) =>{

    let word1= str1.split(" ");
    let word2= str2.split(" ");
    let count=0;

    word1.forEach(function(item,index){
        if(item == word2[index])
        {
            count++;
        }
    })
    
    let errorWords=(word1.length - count)
    return(count+" correct out of "+ word1.length+" words and total number of errors are "+ errorWords)
}

const wordCounter = (str) =>{

    let response = str.split(" ").length;
    console.log(response);
    return response;
}

button.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typedword.disabled=false;
        playGame();
    }
    else if(this.innerText == 'Done'){
        typedword.disabled=true;
        button.innerText="Start";
        endPlay();
    }
})