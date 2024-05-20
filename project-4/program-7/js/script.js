const fun7 = (fahrenheit) => {

    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;

}

document.getElementById("msg").innerHTML = fun7(100);

console.log(fun7(100))