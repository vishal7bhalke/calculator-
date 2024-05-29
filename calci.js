let isOn = false;
let string = '';

let textarea = document.querySelector('textarea');

function onOff() {
    isOn = !isOn;

    if (isOn) {
        document.querySelector('textarea').innerHTML = '0';
       // Show '0' when turning on // Show '0' when turning on
    } else {
        string = ''; // Clear the string when turning off
        document.querySelector('textarea').innerHTML = ''; // Clear the textarea when turning off
    }
}


let buttons = document.querySelectorAll('.number button');

Array.from(buttons).forEach((but) => {
    but.addEventListener('click', (e) => {
        if (isOn) { // Only process button clicks if the calculator is on
            if (e.target.innerHTML == '=') {
                try {
                    string = eval(string).toString(); // Use try-catch for safe eval and convert to string
                    document.querySelector('textarea').innerHTML = string;
                } catch {
                    string = 'Error';
                    document.querySelector('textarea').innerHTML = string;
                }
            } else if (e.target.innerHTML == 'AC') {
                string = '';
                document.querySelector('textarea').innerHTML = string;
            } else if (e.target.innerHTML == 'DEL') {
                string = string.slice(0, -1);
                document.querySelector('textarea').innerHTML = string;
            } else {
                string += e.target.innerHTML;
                document.querySelector('textarea').innerHTML = string;
            }
        }
    });
});
function reminder() {
    

    if (isOn) {
        string += '%';
        document.querySelector('textarea').innerHTML = string;
       // Show '0' when turning on // Show '0' when turning on
    } else {
        string = ''; // Clear the string when turning off
        document.querySelector('textarea').innerHTML = ''; // Clear the textarea when turning off
    }
}