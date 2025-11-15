const display = document.getElementById('display');

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(buttons=>{
    buttons.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'C'){
            clearDisplay();
        }
        else if(buttonText === '='){
            calculate();
        }
        else{
            appendToDisplay(buttonText);
        }
    });
});