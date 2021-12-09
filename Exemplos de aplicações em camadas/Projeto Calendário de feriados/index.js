import retornaProximosFeriados from "./retornaFeriados.js";
import imprimeFeriados from "./imprimeFeriados.js";

console.log('\n Os próximos feriados serão: \n');
 let numeroFeriados = 3;

 let proximosFeriados = retornaProxmosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados)

function convertCentimetroPolegada(centimetros)
{
    let polegadas = centimetros/2.54;
    return polegadas
}

let cm = 35;
let pol = convertCentimetroPolegada(cm);

console.log(`${cm} equivale a ${pol}`)
