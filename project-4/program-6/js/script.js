const fun6 = (a, b) => {
    
    const ans = (a * a) + (2 * a * b) + (b * b);
    return ans;
}

document.getElementById("msg").innerHTML = fun6(3, 4);

console.log(fun6(3, 4))