let button2 = document.getElementById('btn2');
let button1 = document.getElementById('btn1');
let buttons = document.querySelector('.accordion-content').querySelectorAll('.mountbutton');


let subsection = document.getElementById('secbg');
function func1() {
    subsection.style.backgroundImage = "url('Assets/bg_3.jpg')";
}
function func2() {
    subsection.style.backgroundImage = "url('Assets/bg_4.jpg')";
}
buttons.forEach(element => {
    element.addEventListener('click', function () {
        buttons.forEach(indicator => indicator.classList.remove("activated"))

        this.classList.add('activated');
    })
})
