let display = document.getElementById('display');
let cancel = document.getElementById('cancel');

// assign array for button class
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
     if(e.target.innerText){
        display.innerText += e.target.innerText;
    } 
    else if(sidplay.innerText === 'C') {
        display.innerText('');
    }
    })
})

cancel.addEventListener('click', (el) => {
display.innerHTML = '';
}

)
