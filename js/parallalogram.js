function parallalogram(){
    const b = getValue("para-b");
    const h = getValue("para-h");
    const result = b * h
    document.getElementById("para-result").innerText = result
}

function getValue(id){
    const input = document.getElementById(id);
    const value =parseFloat(input.value);
    return value
}
