function generateTable() {
    const userNumber = Number(document.getElementById('number').value);

    for (let i = 1; i <= 10; i++) {
        const result = userNumber * i;
        
         document.getElementById("row" + i).textContent = userNumber + " x " + i + " = " + result;

    if (result % 2 === 0) {
        document.getElementById("row" + i).style.backgroundColor = "lightpink";
}   else {
        document.getElementById("row" + i).style.backgroundColor = "lightblue";
    }
}
}

