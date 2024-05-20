const fun8 = (celcius) => {

    const fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}

document.getElementById("msg").innerHTML = fun8(100);

console.log(fun8(100))