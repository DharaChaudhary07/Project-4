const triangle = (l, h) => {
    
    const area = (l * h) / 2;
    return area;
}

document.getElementById("msg").innerHTML = triangle(5, 6);

console.log(triangle(5, 6));