var agora = new Date()
var hora = agora.getHours()

if (hora >= 24) {
}

else if (hora < 06) {
    console.log(`Agora são ${hora}h. Vai dormir, mano!`)
}

else if (hora < 12) {
    console.log(`Agora são ${hora}h. Bom dia!`)
}
else if (hora <= 18) {
    console.log(`Agora são ${hora}h. Boa tarde!`)
}
    
else {
    console.log(`Agora são ${hora}h. Boa noite!`)
}
    