window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...
    function getValue(input) {
        return input.querySelector('input').value;
    };
    
    function setBmi(weight, height) {
        bmi.innerText = Math.round((weight / (height/100 * height/100)) * 100) / 100;
        
        if (19 < bmi.innerText && bmi.innerText < 25) {
            bmi.classList.remove('medium');
            bmi.classList.remove('bad');
            bmi.classList.add('ok');
        } else if (17 < bmi.innerText && bmi.innerText < 30) {
            bmi.classList.remove('ok');
            bmi.classList.remove('bad');
            bmi.classList.add('medium');
        } else {
            bmi.classList.remove('ok');
            bmi.classList.remove('medium');
            bmi.classList.add('bad');
        }
    };
    
    var weight_input = document.querySelector('.weight'),
        weight_val = weight_input.querySelector('span'),
        height_input = document.querySelector('.height'),
        height_val = height_input.querySelector('span'),
        bmi = document.querySelector('h1 span'),
        weight = getValue(weight_input),
        height = getValue(height_input);

        setBmi(weight, height);
    
    weight_input.addEventListener('change', function() {
        var weight = getValue(weight_input),
            height = getValue(height_input);

        weight_val.innerText = weight;
        setBmi(weight, height);
    });
    
    height_input.addEventListener('change', function() {
        var weight = getValue(weight_input),
            height = getValue(height_input);
        
        height_val.innerText = height;
        setBmi(weight, height);        
    });
});

