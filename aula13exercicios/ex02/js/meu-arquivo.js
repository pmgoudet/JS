


function verificar() {

    // calculando a idade
    var ano = window.document.getElementById('ano')
    var idade = new Date().getFullYear() - Number(ano.value)

    // sexo
    
    res.innerHTML = `Detectamos SEILA com ${idade} anos (ou quase).`
    window.document.body.style.backgroundColor = '#6da9b1'
    
    if (idade < 3) {
        img.src = 'imagens/mbebe.jpg'
    } else if (idade < 14) {
        img.src = 'imagens/mcrianca.jpg'
    } else if (idade < 18) {
        img.src = 'imagens/madolescente.jpg'
    } else if (idade < 40) {
        img.src = 'imagens/madulta.jpg'
    } else if (idade < 65) {
        img.src = 'imagens/mvelha.jpg'
    } else if (idade < 110) {
        img.src = 'imagens/maposentada.jpg'
    } else {
        res.innerHTML = `${idade} anos? Já tá no colo do Tinhoso!`
        img.src = 'imagens/tumulo.jpg'
    }
    
    // <img id="img" src="imagens/maposentada.jpg" alt="Imagem"></div>

}
