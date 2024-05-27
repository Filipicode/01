function carregar() {

    var msg = window.document.getElementById(`msg`) 
    var img = window.document.getElementById(`imagem`)  
    var data =new Date()
    var hora = data.getHours()  
    var minute = data.getMinutes()
   
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`   

if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = "manha.png"
    document.bory.style.background = `#e2cd9f`
}else if(hora >= 12 && hora < 18){
//BOA TARDE!
img.src = "tarde.png"
document.bory.style.background = `#b9846f`
}else{
    //BOM NOITE
    img.src = "noite.png"
    document.bory.style.background = `#515154`
}
}