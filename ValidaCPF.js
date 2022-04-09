function ValidaCPF(cpfEnviado){


    Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === undefined)return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia())return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2)//eu quero passar somente os 9 primeiros dígitos.
    const digito1 = this.criaDigito(cpfParcial)
    console.log(digito1)
    
    const digito2 = this.criaDigito(cpfParcial+digito1)
    console.log(digito2)

    const novoCPF = cpfParcial + digito1+digito2;
    console.log(novoCPF)

    return novoCPF===this.cpfLimpo
    

}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    console.log(cpfArray)

    let contadorRegressivo = cpfArray.length+1;
    const total = cpfArray.reduce(function(acumulador, valor){
        
        acumulador += contadorRegressivo*Number(valor)
        contadorRegressivo--;
        

        return acumulador
    },0);
    
    const digito = 11 - (total%11);
    return digito>9?"0":String(digito);
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia =this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia
}
const cpf = new ValidaCPF('111.111.111-11')
console.log(cpf.cpfLimpo)
console.log(cpf.valida())

