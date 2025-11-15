const display = document.getElementById('display');

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(buttons=>{
    buttons.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'AC'){
            clearDisplay();
        }
        else if(buttonText === '='){
            calculate();
        }
        else if(buttonText === '+/-'){
            toggleSign();
        }
        else if(buttonText === 'X'){
            appendToDisplay('*');
        }
        else{
            appendToDisplay(buttonText);
        }
    });
});

const appendToDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = "";
};

const toggleSign = () => {
    if(display.value){
        if(display.value.startsWith('-')){
            display.value = display.value.slice(1);
        }
        else{
            display.value = '-' + display.value;
        }
    }
};

const calculate = () => {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
};