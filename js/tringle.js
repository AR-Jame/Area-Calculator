function triangleCalculate(){
    let inputB =  document.getElementById("triangleB");
    let inputH = document.getElementById("tringleH")
    let baseValue = parseFloat(inputB.value);
    let heightValue =parseFloat(inputH.value); 
    let result = 0.5 * baseValue * heightValue

    let display = document.getElementById("showing");
    display.innerText = result
}

