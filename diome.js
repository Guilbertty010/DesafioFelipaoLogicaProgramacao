//Entrada de dados
const herois = ["Batman", "SuperRocha", "Mulher Morango", "Fratestiq", "hiperluckg"];
const ferro = 1000;
const bronze = 2000;
const prata = 3000;
const ouro = 4000;
const platina = 5000; 
const Ascendente = 6000;
const imortal = 7000;
const radiante = 8000;

for (let i = 0; i < herois.length; i++) {
    console.log(`O herói ${herois[i]} tem o poder de ${ferro + (i * 1000)} xp`);
};

switch(herois[3]) {
    case "Batman":
        console.log("O Batman é o heroi mais fraco .");
        break;
    case "SuperRocha":
        console.log("O SuperRocha é o segundo heroi mais fraco .");
        break;
    case "Mulher Morango":
        console.log("A Mulher Moranga é mais forte que o batman");
        break;
        case "Fratestiq":
            console.log("O fratestiq é mais forte que a mulher morango"); 
            break;
};
console.log(`O Herói e ${herois[4]} e ele é o mais forte de todos com ${radiante} xp e esta radiante`)
;