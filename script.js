window.onload = function() {
    var container = document.querySelector('.container');
    setTimeout(function(){
        container.style.transition = "top 1s, opacity 1s ease-out";
        container.classList.add('visible');
    }, 0);

    var regexInput = document.getElementById('regex');
    var textInput = document.querySelector('input[name=text]');
    var answer = document.querySelector('.answer');

    regexInput.oninput = function(event) {
        handler();
    }
    textInput.addEventListener('input', function(event) {
        handler();
    })

    function handler() {
        var regexValue = regexInput.value;
        var textValue = textInput.value;
        var regexp;
        try {
            regexp = new RegExp(`^${regexValue}$`, '');
            console.log(regexp);
            if (regexp.test(textValue)) {
                answer.classList.remove('not-right');
                answer.classList.add('right');
                answer.innerHTML = "Right";
                console.log(textValue + " Right");
            } else {
                notRight()
            }
        } catch (error) {
            console.log(error);
            notRight()
        }
        regexp = null;
    }

    function notRight() {
        answer.classList.remove('right');
        answer.classList.add('not-right');
        answer.innerHTML = "Not right";
    }
}