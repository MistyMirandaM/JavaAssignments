function studentAverage(name, score1, score2){
    let average = (score1 + score2) / 2;
    let message = name + "'s average score is " + average;
    return message;
}

let result1 = studentAverage("Misty", 90, 80);
console.log(result1);

let result2 = studentAverage("Rachel", 75, 85);
console.log(result2);