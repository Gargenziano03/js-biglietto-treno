/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-- il prezzo del biglietto è definito in base ai km (0.21 € al km)
-- va applicato uno sconto del 20% per i minorenni
-- va applicato uno sconto del 40% per gli over 65.
-- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
-- per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.
*/


// prima fase: preparazione;
//creo variabili per chiedere informazioni al cliente;
const prezzoAkm = 0.21;
const scontoMinorenni = 0.20;
const scontoAnzioni = 0.40
let km;
let eta;

//creo variabile per salvare il prezzo finale;
let prezzoFinale

//seconda fase: raccolta dati;
km = prompt('scriva il numero di km che si desidera percorrere.');
console.log(km);

eta = prompt('definisci età')
console.log(eta)

//terza fase: elaborazione dei dati;


