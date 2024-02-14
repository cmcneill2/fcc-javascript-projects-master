let count = 0;

//select value and buttons?

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            if (count == "-20 (Minimum)") {
                console.log("minimum");
            }
            else if (count <= -20) {
                count = -20
                displayMinimum()
            }
            else count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else if (styles.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count == 0) {
            value.style.color = "black";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        console.log(e.currentTarget.classList)
        value.textContent = count;

    })
});

//functions
function displayMinimum() {
    count += " (Minimum)"
}

function displayMaximum() {
    count += " (Maximum)"
}