// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    {
        nome: "PSG",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Liverpool",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bayern Monaco",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
];

teams.forEach( team => {
    const rdnPunti = getRndInteger(0, 100);
    const rdnFalli = getRndInteger(0, 100);
    
    team.puntiFatti = rdnPunti;
    team.falliSubiti = rdnFalli;
});

console.log(teams);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}