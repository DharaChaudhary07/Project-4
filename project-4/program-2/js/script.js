const circle = (r) => {

    const pi = 3.14;
    const area = pi * r * r;
    return area;

}

document.getElementById("msg").innerHTML = circle(5);

console.log(circle(5));