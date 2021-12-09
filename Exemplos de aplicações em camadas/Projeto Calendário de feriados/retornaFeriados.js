import feriadosNacionais from './dataFeriado.js';
import filtraFeriados from './filtros.js';
import {formataDiaSemana,formataDataFeriado} from './formataDataFeriado.js';

function retornaProximosFeriados(numeroFeriados)
{
    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);

    let feriadosFiltroFormatados = [];

    feriadosFiltro.forEach(feriado =>{
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatada = formaDataFeriado(dataFeriado);

        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana:diaSemana,
            data:dataFeriadoFormatada
        });
    });

    return feriadosFiltroFormatados;
}

export default retornaProximosFeriados;
