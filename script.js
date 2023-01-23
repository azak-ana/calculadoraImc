
function script(){
   
    //Retorna o valor do input Peso
function getPeso(){
    const peso = document.getElementById("peso").value
    return parseFloat(peso);
}
    //Retorna o valor do input Altura
function getAltura(){
    const altura = document.getElementById("altura").value
    return parseFloat(altura);
}
    //Calcula o IMC e a partir disso retorna o "Estado" do usuário
function doImc(){
    const peso = getPeso();
    const altura = getAltura();
    const imc = peso/(altura**2);
    let estado = "Invalido"
    switch (true){
        case imc<18.5:
            estado = "Magreza"
        break;
        case imc<24.9:
            estado = "Normal"
        break;
        case imc<29.9:
            estado = "Sobrepeso"
        break;
        case imc<39.9:
            estado = "Obesidade"
        break;
        case imc>=40.0:
            estado = "Obesidade Grave"
        break;
    }
    return estado;
}
    //Printa o IMC alterando a imagem dependendo do "estado" do usuário
function printImc(){
    const estado = doImc();
    let img = document.getElementById("voce");
    const imc = document.getElementById("imc");
    switch(true){
        case estado === 'Magreza':
        img.src = "./imgs/frango.png"
        break;
        case estado === 'Normal':
        img.src = "./imgs/chad.gif"
        break;
        case estado === 'Sobrepeso':
        img.src = "./imgs/chungus.png"
        break;
        case estado === 'Obesidade':
        img.src = "./imgs/glob.png"
        break;
        case estado ==='Obesidade Grave':
        img.src = "./imgs/mario-games.gif" 
        break;

    }
    imc.innerHTML = estado + " Parabêns!";
}

let button = document.getElementById("button");
button.addEventListener("click", () =>{printImc()});

}