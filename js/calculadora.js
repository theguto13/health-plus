const calcular = document.getElementById('calcular');
function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const titulo = document.getElementById('resultado-titulo');
    if (altura !== '' && peso !== ''){
        const valorIMC = (peso / ((altura * altura) / 10000)).toFixed(1);
        let titulor = '';
        let classificacao = '';
        if (altura > 60){
            if (valorIMC < 18.5){
                titulor = 'Você está abaixo do peso.';
                classificacao = 'abaixo do peso ideal. Dê uma olhada nos artigos de alimentação saudável. Se não conseguir aumentar de peso, procure um médico.';
            }else if (valorIMC < 25){
                titulor = 'Você está com o peso ideal.';
                classificacao = 'com peso ideal. Parabéns por manter seu corpo saudável!';
            }else if (valorIMC < 30){
                titulor = 'Você está levemente acima do peso.';
                classificacao = 'levemente acima do peso. Não é uma situação complicada, mas cuidado para não fugir do seu controle.';
            }else if (valorIMC < 35){
                titulor = 'Você está com sobrepeso.';
                classificacao = 'com obesidade grau I. Recomendamos que confira nossos artigos.';
            }else if (valorIMC < 40){
                titulor = 'Você está com sobrepeso elevado.';
                classificacao = 'com obesidade grau II. Recomendamos que procure um médico.';
            }else{
                titulor = 'Você está com sobrepeso altamente elevado.';
                classificacao = 'com obesidade grau III. Recomendamos que procure um médico com urgência.';
            }
        }else{
            titulor = 'Parece que você colocou uma informação errada.';
            classificacao = 'Aparentemente você colocou a altura em metros, porém ela tem que ser em centímetros. Tente de novo!';
        }
        if (altura > 60){
            titulo.textContent = `${titulor}`;
            resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
            document.getElementById('resultado-titulo').style.animation = 'titulos 1s both .9s';
            document.getElementById('resultado').style.animation = 'imcpanim .7s both 1s';
        }else{
            titulo.textContent = `${titulor}`;
            resultado.textContent = `${classificacao}`;
        }
    }else{
        titulo.textContent = 'Preencha todos os campos.';
    }
}