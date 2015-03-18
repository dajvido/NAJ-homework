window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...

    function setBmi(weight, height) {
        var value = Math.round((weight / (height/100 * height/100)) * 100) / 100;
        bmi.textContent = value;
        
        if (19 < value && value < 25) { // textvalue
            bmi.classList.remove('medium');
            bmi.classList.remove('bad');
            bmi.classList.add('ok');
        } else if (17 < value && value < 30) {
            bmi.classList.remove('ok');
            bmi.classList.remove('bad');
            bmi.classList.add('medium');
        } else {
            bmi.classList.remove('ok');
            bmi.classList.remove('medium');
            bmi.classList.add('bad');
        }
    };
    
    var weight_div = document.querySelector('.weight'),
        weight_input = weight_div.querySelector('input'),
        weight_val = weight_div.querySelector('span'),
        height_div = document.querySelector('.height'),
        height_input = height_div.querySelector('input'),
        height_val = height_div.querySelector('span'),
        bmi = document.querySelector('h1 span');

    setBmi(weight_input.value, height_input.value);
    
    weight_input.addEventListener('change', function() {
        var weight = weight_input.value,
            height = height_input.value;

        weight_val.textContent = weight;
        setBmi(weight, height);
    });
    
    height_input.addEventListener('change', function() {
        var weight = weight_input.value,
            height = height_input.value;

        height_val.textContent = height;
        setBmi(weight, height);        
    });
});

