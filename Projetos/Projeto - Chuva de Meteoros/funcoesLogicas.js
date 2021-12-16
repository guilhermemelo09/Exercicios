export const inverteMesDia = (mesDia) => {
    const dataInvertida = mesDia.split('/');
  
    return dataInvertida[1] + '/' + dataInvertida[0];
  }
  
  export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';
  
    //indexOF procurar uma substring dentro da string
    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }
  
    return novaIntensidade;
  }
  
  export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';

//Filtramos as chuvas que estão ocorrendo e armazenamos na variável chuvasVisiveis
export const verificaChuvaOcorrendo= (chuva, data) => {
    const anoAtual = data.getFullYear();
  
    //preparo das variáveis
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);
    

    //Esse if trata dos casos quem que a chuva inicia em um ano e termina em outro. Por esse motivo, verificamos se o mês de início é maior que o mês de fim e se for o caso, adicionamos um ano à dataFim para fazer a correção.
    if ( dataInicio.getMonth() > dataFim.getMonth() ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }
    
    //Caso a dataAtual seja maior ou igual a data que chuva inicia e menor ou igual a data que a chuva termina, função filter vai armazenar o objeto chuva no novo array(chuvasVisiveis)
    return ( data >= dataInicio && data <= dataFim );
  }

  //Filtramos as chuvas que irão ocorrer dentro de 2 meses e armazenamos na variável proximasChuvas
  export const verificaProximaChuva = (chuva, data) => {
    const anoAtual = data.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataInicioLimite = new Date(data);
  
    if ( data.getMonth() > dataInicio.getMonth() ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    }
  
    //Criamos a data inicio limite com a data de hoje, mas adicionamos dois meses a ela.
    dataInicioLimite.setMonth( dataInicioLimite.getMonth() + 2 );
  

    //verificamos se a data de início é maior que a data atual.
    //verificamos se a data de inicio é menor que a datainicioLimite(dataatual + 2 meses);
    return ( data < dataInicio && dataInicio < dataInicioLimite );
  }