let display = document.getElementById('display');

// assign array for button class
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
     if(e.target.innerText){
        display.innerText += e.target.innerText;
    } 
    else if(e.target.innerText.value === 'C') {
        display.innerText = '';
    }
    })
})
