const fun5 = (a,b,c) => {
    
    const ans = ((b * b) - (4 * a * c)) / (2 * a);
    return ans;
}

document.getElementById("msg").innerHTML = fun5(2,5,8);

console.log(fun5(2,5,8));