//DOM Manipulation


function testar() {
    //mudar o texto do elemento.
    document.querySelector('p.test1').innerHTML = "Hello";
  
    //mudar o src da imagem.
    document.getElementById('imageteste').src="./imagens/later.jpeg";
  
    //mudar o valor do campo input
    document.getElementById('myText').value = "Have a nice Day";
    
    //Alterando o CSS
    document.querySelector('div.content1').style.color = 'red';
    document.querySelector('div.content2').style.fontSize = "60px";
    document.querySelector('div.content3').style.display = 'none';

    
}


//Adicionando um EventListener(), adicionando uma função 
    //document.getElementById("myBtn").addEventListener("click", displayDate);
    document.getElementById('myBtn').addEventListener('click',mostrarDisplay);//displayDate é uma função.
    
function mostrarDisplay(){
    document.querySelector('p#demo').innerHTML = 'Texto adicionando após o evento click'
}
  