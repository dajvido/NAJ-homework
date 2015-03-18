window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...
    function getValue(input) {
        return input.getElementsByTagName('input')[0].value;
    };
    
    function setBmi(weight, height) {
        bmi.innerText = Math.round((weight / (height/100 * height/100)) * 100) / 100;
        
        if (19 < bmi.innerText && bmi.innerText < 25) {
            bmi.setAttribute('class', 'ok');
        } else if (17 < bmi.innerText && bmi.innerText < 30) {
            bmi.setAttribute('class', 'medium');
        } else {
            bmi.setAttribute('class', 'bad');
        }
    };
    
    var weight_input = document.getElementsByClassName('weight')[0],
        weight_val = weight_input.getElementsByTagName('span')[0],
        height_input = document.getElementsByClassName('height')[0],
        height_val = height_input.getElementsByTagName('span')[0],
        bmi = document.getElementsByTagName('h1')[2].getElementsByTagName('span')[0];
    
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

