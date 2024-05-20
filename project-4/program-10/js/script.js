const fun10 = (a, b) =>{

    document.getElementById("msg").innerHTML = `Before swapping: a = ${a}, b = ${b}`;

    console.log(`Before swapping: a = ${a}, b = ${b}`);
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    document.getElementById("msg").innerHTML = `After swapping: a = ${a}, b = ${b}`;

    console.log(`After swapping: a = ${a}, b = ${b}`);

}


fun10(5, 10);