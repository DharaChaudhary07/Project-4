const fun9 = (number) => {

    if(number % 2 == 0){
        document.getElementById("msg").innerHTML = `${number} is an even number.`;
    }
    else{
        document.getElementById("msg").innerHTML = `${number} is an odd number.`;
    }
    
}

document.getElementById("msg").innerHTML = fun9(10)

console.log(fun9(10))