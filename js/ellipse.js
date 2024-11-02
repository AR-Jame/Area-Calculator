function ellipse(){
    const p = getValue("elip-b");
    const b = getValue("elip-a");
    const result = Math.PI * b * p
    document.getElementById("elip-result").innerText = result.toFixed(3)
}

function getValue(id){
    const input = document.getElementById(id);
    const value =parseFloat(input.value);
    return value
}

