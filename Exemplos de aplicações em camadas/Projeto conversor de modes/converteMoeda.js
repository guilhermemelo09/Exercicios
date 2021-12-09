function formataDolar(dolar)
{
    let valorFormatado = '$'+dolar;
    return valorFormatado;
}

function formataReal (real)
{
    let valorFormatado = 'R$' + real;
    return valorFormatado;
}

function formataEuro(euro)
{
    let valorFormatado = ' € '+euro;
    return valorFormatado;
}

export {formataDolar,formataReal,formataEuro};
