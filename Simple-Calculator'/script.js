// Selecting elements
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.calculator form input');

// Adding click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (button.value === 'AC') {
            display.value = '';
        } else if (button.value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += button.value;
        }
    });
});
