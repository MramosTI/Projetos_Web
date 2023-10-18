var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', function(){ //evendto('click'), depois função
        duvida.classList.toggle('ativa') 
    })
})

     

 

    