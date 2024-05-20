const rectangle = (l, b) => {

    const area = l * b;
    return area;
}

document.getElementById("msg").innerHTML = rectangle(8, 10);

console.log(rectangle(8, 10));