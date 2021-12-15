function mudarTitulo(){
    document.title = "JavaScript - Dom Alterado"
}

function mudarFundo(){
    document.body.style.background="red";
}

function inserirImagenFundo(){
    document.body.style.backgroundImage = "url('./images/dune_1947.jpg')"
}
function testar() {
    //mudar o texto do elemento.
    document.querySelector('p.test1').innerHTML = "Hello";
  
    //mudar o atributo de algum elemento.
    document.getElementById('imageteste').src="./images/later.jpeg";
  
    //mudar o valor do campo input
    document.getElementById('myText').value = "Have a nice Day";
    
    
    //Alterando o CSS
    document.querySelector('div.content4').style.color = 'red';
    document.querySelector('div.content2').style.fontSize = "60px";
    document.querySelector('div.content3').style.display = 'none';
    
}


//Adicionando um EventListener(), adicionando uma função 
    //document.getElementById("myBtn").addEventListener("click", displayDate);
    document.getElementById('myBtn').addEventListener('click',mostrarDisplay);//displayDate é uma função.
    
function mostrarDisplay(){
    document.querySelector('p#demo').innerHTML = 'Texto adicionando após o evento click'
}


//Validação de formuário
function validateForm(){
    let nome1 = document.querySelector('input#nomeform').value;
    let idade = document.querySelector('input#idadeform').value;
    let nomemae = document.querySelector('input#nmaeform').value;

    if (nome1 == "" || idade=="" || nomemae=="")
    {
        alert('Favor preencher os dados');
        location.reload();//comando para atualizar a página
    }
    else{
        if (idade >= 30){
            console.log('Velho')
        }
        else if(idade >20 && idade<30)
        {
            console.log('Corre que dá tempo')
        }
        else
        {
            console.log('aproveita para estudar agora.')
        }
        console.log(nome1+'\n'+idade+'\n'+nomemae);
    }

    
    
    
}
