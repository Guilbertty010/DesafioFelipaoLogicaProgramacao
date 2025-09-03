let derrotas =( 5);
let vitorias = ( 15);

var rankeada = vitorias - derrotas;


function valorRank(valor) {
    if (rankeada && valor <= 10) {
        console.log("Seu rankeada é Ferro");
    } else if (rankeada >= 11 && valor <= 20) {
        console.log("Seu rankeada é Bronze");
    } else if (rankeada >= 21 && valor <= 50) {
        console.log("Seu rankeada é Prata");
    } else if (rankeada >= 51 && valor <= 80) {
        console.log("Seu rankeada é Ouro");
    } else if (rankeada >= 81 && valor <= 90) {
        console.log("Seu rankeada é Diamante");
    } else if (rankeada >= 91 && valor <= 100) {
        console.log("Seu rankeada é Lendario");
    } else if (rankeada >= 101) {
        console.log("Seu rankeada é Imortal");
    } else {
        console.log("Valor invalido");
    };
}

let totalFinal = valorRank(rankeada);

for (let i = 0; i < 3; i++) {
    console.log(`O Herói tem de saldo ${vitorias} estám no nivél ${rankeada}`);};