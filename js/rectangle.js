function rectangle(){
    const rectangleW = document.getElementById("rectangleB");
    const rectangleL = document.getElementById("rectangleH");
    const wValue = parseFloat(rectangleW.value);
    const lValue = parseFloat(rectangleL.value);
    const result = wValue * lValue;
    document.getElementById("rectangleResult").innerText = result
}