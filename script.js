function cambiarImagen(){
    foco = document.getElementById('foco');
    
    if(foco.src.match('focoOff')){
        foco.src = "focoOn.png";
    }else {
        foco.src = "focoOff.png";
    }
}  