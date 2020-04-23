document.getElementById("btn").onclick = validate;

function validate() {

    // create a flag variable
    let valid = true;

    //clear err message
    let hidden = document.getElementsByClassName("hidden");
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.visibility = "hidden";
    }

    // check input number
    let input = document.getElementById("input").value;
    if (isNaN(input) || input === "" || input < 1) {
        let err = document.getElementById("err");
        err.style.visibility = "visible";
        valid = false;
    }

    if (valid) {
        heeHaw(input);
    }

    return valid;
}

function heeHaw(n) {
    //get the display div
    let display = document.getElementById("display");

    if (n === 1) {
        display.innerHTML = n + "<br>";
    }

    let a = n - 1;
    if (a > 0) {
        heeHaw(a);

        if (n % (3 * 5) === 0) {
            display.innerHTML += "Hee Haw!<br>";
        } else if (n % 5 === 0) {
            display.innerHTML += "Haw!<br>";
        } else if (n % 3 === 0) {
            display.innerHTML += "Hee!<br>";
        } else {
            display.innerHTML += n + "<br>";
        }
    }
}