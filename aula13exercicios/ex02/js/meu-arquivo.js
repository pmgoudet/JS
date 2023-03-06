function verificar() {

    // calculando a idade
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('ano')
    var res = document.getElementById('res')

    if (anonasc.value.length == 0 || anonasc.value > ano) {
        window.alert('Valor inválido!')   
    } else {  
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade < 4) {
                img.setAttribute ('src', 'imagens/hbebe.jpg')
            } else if (idade < 13) {
                img.setAttribute ('src', 'imagens/hcrianca.jpg')
            } else if (idade < 21) {
                img.setAttribute ('src', 'imagens/hadolescente.jpg')
            } else if (idade < 59) {
                img.setAttribute ('src', 'imagens/hadulto.jpg')
            } else if (idade < 70) {
                img.setAttribute ('src', 'imagens/haposentado.jpg')
            } else if (idade < 110) {
                img.setAttribute ('src', 'imagens/haposentado.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade < 4) {
                img.setAttribute ('src', 'imagens/mbebe.jpg')
            } else if (idade < 13) {
                img.setAttribute ('src', 'imagens/mcrianca.jpg')
            } else if (idade < 21) {
                img.setAttribute ('src', 'imagens/madolescente.jpg')
            } else if (idade < 59) {
                img.setAttribute ('src', 'imagens/madulta.jpg')
            } else if (idade < 70) {
                img.setAttribute ('src', 'imagens/mvelha.jpg')
            } else if (idade < 110) {
                img.setAttribute ('src', 'imagens/maposentada.jpg')
            }}

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`   
        res.appendChild(img)
        

}}