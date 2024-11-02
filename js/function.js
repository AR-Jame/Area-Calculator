// const ellipsee = document.getElementById("ellipse");
// const pentagonn = document.getElementById("pentagon")
// const parallalogram = document.getElementById("parallalogram")

function calculate(event){
    const  id = event.target.id;
    if(id === "ellipse"){
        const p = getValue("elip-b");
        const b = getValue("elip-a");
        const result = Math.PI * b * p
        document.getElementById("elip-result").innerText = result.toFixed(3)
    }
    else if(id === "pentagon"){
        const p = getValue("pen-b");
        const b = getValue("pen-p");
        const result =0.5 * b * p
        document.getElementById("pen-result").innerText = result
    }
    else if(id === parallalogram){
        const b = getValue("para-b");
        const h = getValue("para-h");
        const result = b * h
        document.getElementById("para-result").innerText = result
    }
    else if(id === "rectangle"){
        const rectangleW = getValue("rectangleB");
        const rectangleL = getValue("rectangleH");
        const result = rectangleW * rectangleL;
        document.getElementById("rectangleResult").innerText = result
    }
}

function getValue(id){
    const input = document.getElementById(id);
    const value =parseFloat(input.value);
    return value
}
