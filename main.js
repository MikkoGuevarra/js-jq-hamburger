// Dovete quindi analizzare la struttura e il css utilizzati e predisposti nella repo per integrare la vostra logica nel file js. Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.


//clicco sull'hamburger per far comparire il menu
$('.fa-bars').click(function() {
    $('.hamburger-menu').show()
});

//clicco sull'icona X per fare l'effetto hide
$('.fa-times').click(function() {
    $('.hamburger-menu').hide()
});
