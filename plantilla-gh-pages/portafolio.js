var trabajos = [{
   /*1*/
    figure: "media/monstruario.jpg",
    alt: "Descripción de la imagen",
    title: "Monstruario",
    about: "Juego de mesa que ayuda a desarrollar habilidades para generar un proyecto de investigación",
    url: "https://vimeo.com/299251711?utm_source=email&utm_medium=vimeo-clilp_liked-2017&utm_campaign=31135"
}, {
    /*2*/
    figure: "media/canek4.png",
    alt: "Descripción de la imagen",
    title: "CANEK",
    about: "Collar para perros que evita que lo muerdan en la zona del cuello",
    url: "https://youtu.be/xFQbK08ovAw"
}, {
    /*3*/
    figure: "media/EnBolsa5.png",
    alt: "Descripción de la imagen",
    title: "EnBolsa",
    about: "Emprendimiento de bolsas de lona teñidas a mano",
    url: "https://www.instagram.com/enbolsa_bags/"
}, {
    /*4*/
    figure: "media/Roberto2.png",
    alt: "Descripción de la imagen",
    title: "Enriquecimiento Ambiental",
    about: "Sistema que consta de cuerdas, comedero y reposo, instalado en el recinto del mono ardilla",
    url: "https://youtu.be/SUrJN2l0xEM"
}, {
    /*5*/
    figure: "media/ergonomia-29.png",
    alt: "Descripción de la imagen",
    title: "Herramienta Encuadernación",
    about: "Herramienta diseñada a partir de la observación del trabajo de la encuadernación",
    url: "https://drive.google.com/drive/folders/1KCjAsueHCknmHlNL0zDuE7gAQYciU7OM?usp=sharing"
}, {
    /*6*/
    figure: "media/B-Roll.png",
    alt: "Descripción de la imagen",
    title: "B-Roll",
    about: "Diseño de un patín para rodilla",
    url: "https://www.youtube.com/watch?v=Qfxvzy6fvYQ"
}, {
    /*7*/
    figure: "media/tostador.png",
    alt: "Descripción de la imagen",
    title: "Campaña 50 años",
    about: "Campaña realizada para celebrar los 50 años del tostador, dándole una nueva imagen gráfica",
    url: "https://youtu.be/alaaudPGOBY"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href=" ' + trabajos[i].url + ' ">Ver más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
