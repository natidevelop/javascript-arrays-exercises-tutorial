let arr = [45, 67, 87, 23, 5, 32, 60];
let resul = []
for (let i = arr.length - 1; i >= 0; i--) {
    let recorrido = arr[i];
    resul.push(recorrido);
    console.log(resul);
}