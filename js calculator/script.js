let input = document.getElementById('input');
button = document.querySelectorAll('button');
let inputValue = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*'  ;
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if (buttonText == 'C') {
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == '=') {
            input.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            input.value = inputValue;
        }

    })
} 