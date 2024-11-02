function pentagon(){
    const p = getValue("pen-b");
    const b = getValue("pen-p");
    const result =0.5 * b * p
    document.getElementById("pen-result").innerText = result
}

function getValue(id){
    const input = document.getElementById(id);
    const value =parseFloat(input.value);
    return value
}