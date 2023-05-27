"use strict";
function calculate() {
    let value = parseInt(document.getElementById("number").value);
    if (value <= 0 || !Number.isInteger(value))
        return;
    const container = document.getElementById("sandbox");
    if (container != null)
        container.innerHTML = "";
    addNumber(value);
    let i = 1;
    while (value != 1) {
        if (value % 2 == 0)
            value = parseInt((value / 2).toString());
        else
            value = parseInt((3 * value + 1).toString());
        addArrow(i);
        addNumber(value);
        i++;
    }
}
function clearContainer() {
    const container = document.getElementById("sandbox");
    if (container == null)
        return;
    container.innerHTML = "";
}
function addNumber(v) {
    const container = document.getElementById("sandbox");
    if (container == null)
        return;
    const divNumber = document.createElement("div");
    divNumber.setAttribute("id", "nextNumber");
    divNumber.textContent = v.toString();
    chechSizeNumber(v, divNumber);
    setTimeout(() => {
        divNumber.style.opacity = "1";
    }, 100);
    container.appendChild(divNumber);
}
function addArrow(v) {
    let container = document.getElementById("sandbox");
    if (container == null)
        return;
    const divContainer = document.createElement("div");
    divContainer.setAttribute("id", `divArrow${v}`);
    divContainer.textContent = "";
    container.appendChild(divContainer);
    container = document.getElementById(`divArrow${v}`);
    if (container == null)
        return;
    const imgArrow = document.createElement("i");
    imgArrow.setAttribute("class", "bi bi-arrow-right");
    setTimeout(() => {
        imgArrow.style.opacity = "1";
    }, 100);
    container.appendChild(imgArrow);
}
function chechSizeNumber(v, container) {
    const lengthNumber = v.toString().length;
    // Foreground
    if (lengthNumber >= 6 && lengthNumber < 8)
        container.style.fontSize = "30px";
    else if (lengthNumber >= 8 && lengthNumber < 12)
        container.style.fontSize = "20px";
    else if (lengthNumber >= 12)
        container.style.fontSize = "15px";
    else
        container.style.fontSize = "40px";
    // Back
    if (lengthNumber >= 15) {
        container.style.minWidth = "160px";
        container.style.minHeight = "160px";
    }
    else {
        container.style.minWidth = "120px";
        container.style.minHeight = "120px";
    }
}
