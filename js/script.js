
const es = parseInt(prompt(
    `Che esercizio eseguire?
    1 - Bici
    2 - Squadre`));

if (es == 1) {
    /* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */
    const bici = [
        {
            nome: "bike1",
            peso: 10
        },
        {
            nome: "bike2",
            peso: 13
        },
        {
            nome: "bike3",
            peso: 19
        },
        {
            nome: "bike4",
            peso: 8
        },
        {
            nome: "bike5",
            peso: 20
        }
    ]

    let leggera = bici[0];
    for (let i = 0; i < bici.length; i++) {
        const {peso} = bici[i];
        const {peso:pesoLeg} = leggera;
        if (peso < pesoLeg) leggera = bici[i];
    }
    
    const {nome, peso} = leggera;
    document.getElementById("text").innerHTML = `La bici ${nome} pesa ${peso}kg: è la più leggera.`;
}
else if (es == 2) {
    /* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console. */

    const squadre = [
        {
            nome: "rossi",
            punti: 0,
            falli: 0
        },
        {
            nome: "blu",
            punti: 0,
            falli: 0
        },
        {
            nome: "verdi",
            punti: 0,
            falli: 0
        },
        {
            nome: "gialli",
            punti: 0,
            falli: 0
        }
    ];

    const randomN =  () => Math.floor(Math.random() * 11);
    let frase = "";
    const arrFalli = [];

    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = randomN();
        squadre[i].falli = randomN();
        const {nome, falli, punti} = squadre[i];
        arrFalli.push({nome, falli});
        frase += `La squadra dei ${nome} ha fatto ${punti} punti e ${falli} falli <br>`; 
    }

    document.getElementById("text").innerHTML = frase;
    console.log(arrFalli);

}

