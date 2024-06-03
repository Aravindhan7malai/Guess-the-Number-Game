const number = document.getElementsByClassName('num')[0];
const button = document.getElementsByClassName('btn')[0];
const random = parseInt(Math.random() * 10 + 1);
const ans = document.getElementsByClassName('answer')[0];
const form = document.getElementsByClassName('form')[0];
const tries = document.getElementsByClassName('tries')[0];
var count = 1;
button.addEventListener('click', function (e) {
    e.preventDefault();
    if (number.value == random) {
        ans.innerText = 'Answer: You guess is right!'
        form.style.borderColor = "Green"
        tries.innerText = count;

    } else if (number.value > random) {
        ans.innerText = "Hint: Lesser then this!"
        form.style.borderColor = "red"
        tries.innerText = count;
        count++;
    }
    else {
        ans.innerText = 'Hint: Greater then this!'
        form.style.borderColor = "red"
        tries.innerText = count;
        count++;
    }
    form.reset()
})