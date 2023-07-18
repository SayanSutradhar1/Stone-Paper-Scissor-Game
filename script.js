
let buttons = document.querySelectorAll('.btn');
let Content = document.getElementById('content');
let Result = document.getElementById('result');
let CompChoose = document.getElementById('compChoose')
let ResetButton = document.getElementById('resetbutton')
let Comp = document.getElementById('comp')
let CountWon = document.getElementById('won');
let CountLost = document.getElementById('lost');
let CountDraw = document.getElementById('draw');
let Won = 0,Lost = 0,Draw = 0;



let btnArr = Array.from(buttons);
btnArr.forEach((e)=>{
    e.addEventListener('click',()=>{
        const cpu=()=>{
            let rand = Math.floor(Math.random()*6)+1;
            if(rand==1||rand==4){
                return "Rock";
            }
            else if(rand==2||rand==5){
                return "Paper";
            }
            else{
                return "Scissor";
            }
        }
        let compChoose = cpu()
        Result.innerText = ""
        Content.innerText = `You have choosen ${e.innerText}`;
        
        CompChoose.innerText = ""
        ResetButton.style.display = 'none'
        setTimeout(() => {
            Comp.innerText = 'Computer is choosing.....'
        }, 1000);
    
        setTimeout(()=>{
            CompChoose.innerText = `Computer chooses ${compChoose}`;
            Comp.innerText = ""
            Result.innerText = ""
        },3000)
        const result=()=>{
            if(e.innerText===compChoose){
                Draw++;
                CountDraw.innerText = `Draw : ${Draw}`;
                Result.style.color = 'aquamarine'
                return "It's draw!"
            }
            else if((e.innerText=='Rock' && compChoose =='Scissor')||(e.innerText=='Paper' && compChoose == 'Rock')||(e.innerText=='Scissor' && compChoose=='Paper')){
                Won++;
                CountWon.innerText = `Won : ${Won}`
                Result.style.color = '#d8ac5d'
                return "Congratulations !!! You Won "
            }
            else{
                Lost++;
                CountLost.innerText = `Lost : ${Lost}`
                Result.style.color = 'red'
                return "Computer Won , Better luck next time!"
            }
        }
        setTimeout(()=>{
            Result.innerText = result()
            ResetButton.style.display = 'inline'
        },3000)
    })
})
ResetButton.addEventListener('click',()=>{
    Content.innerText = "";
    Result.innerText = "";
    CompChoose.innerText ="";
    ResetButton.style.display = 'none';
    Won =0;
    Lost =0;
    Draw =0;
    CountDraw.innerText = `Draw : ${Draw}`;
    CountWon.innerText = `Won : ${Won}`;
    CountLost.innerText = `Lost : ${Lost}`;
})
