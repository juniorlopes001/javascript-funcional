// setTimeout(function () {
//   console.log("Executando callback");
//   setTimeout(function () {
//     console.log("executando calback...2");
//     setTimeout(function () {
//       console.log("executando calback...3");
//     }, 2000);
//   }, 2000);
// }, 2000);


function esperarPor(tempo = 2000) {
    return Promise(function (resolve) {
        setTimeout(function() {
            console.log('Executando promise...');
            resolve('vishh')
        }, tempo)
    })
}

let p = esperarPor(3000)