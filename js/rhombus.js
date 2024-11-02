function rhombus(){
    const d1 = getValue("rhombus-d1");
    const d2 = getValue("rhombus-d2");
    result = 0.5 * d1 * d2;
    document.getElementById("text").innerText = result
}
function getValue(id){
    const idd = document.getElementById(id);
    const value = parseFloat(idd.value);
    return value

}