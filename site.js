$(document).ready(function () {
  cargar_departamentos();
  $("#select-depto").change(function () {
    cargar_municipios($("#select-depto").val());
  });

  $(".sidebarM").click(() => {
    $(".sidebarM").fadeOut();
    $(".sidebar").fadeIn();
  });

  $(".sidebar .nav-link").click(() => {
    if ($(window).width() < 700) {
      $(".sidebar").fadeOut();
      $(".sidebarM").fadeIn();
    }
  });

  $(window).on("resize", function () {
    if ($(window).width() > 700) {
      $(".sidebar").fadeIn();
    }

    if ($(window).width() < 700) {
      $(".sidebar").fadeOut();
      $(".sidebarM").fadeIn();
    }
  });
});

// funcion para Cargar Provincias al campo <select>
function cargar_departamentos() {
  //var array = ['Amazonas','Antioquia','Arauca','Atlántico','Bolívar','Boyacá','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó','Cundinamarca','Guaviare','La Guajira','Magdalena','Meta','Nariño','Norte de Santander','Putumayo','Quindío','Risaralda','Santander','Tolima'];
  var array = [
    "Arauca",
    "Atlántico",
    "Caldas",
    "Valle del Cauca",
    "Cesar",
    "Cundinamarca",
    "La Guajira",
    "Meta",
    "Norte de Santander",
    "Quindío",
    "Tolima",
  ];
  addOptions("select-depto", array);
}

function addOptions(domElement, array) {
  var select = document.getElementsByName(domElement)[0];

  for (value in array) {
    var option = document.createElement("option");
    option.text = array[value];
    select.add(option);
  }
}

function agregarDatos(texto, valor) {
  var select = document.getElementsByName("select-location")[0];
  var option = document.createElement("option");
  option.text = texto;
  option.value = valor;
  select.add(option);
}

function cargar_municipios(departamento) {
  var select = document.getElementsByName("select-location")[0];
  $("#select-location").empty();
  var option = document.createElement("option");
  option.text = "Seleccione un municipio...";
  option.value = "-1";
  select.add(option);

  switch (departamento) {
    // case 'Amazonas': {
    //     agregarDatos('Leticia', '-4.2167,-69.9333')
    //     break;
    // }
    // case 'Antioquia': {
    //     agregarDatos('Guatapé', '6.2333,-75.1667')
    //     agregarDatos('Medellín', '6.2308,-75.5906')
    //     break;
    // }
    case "Arauca": {
      // agregarDatos('Arauca', '7.0903,-70.7617')
      // agregarDatos('Arauquita', '7.0303,-71.4356')
      // agregarDatos('Saravena', '6.9556,-71.8722')
      agregarDatos("Tame", "6.4667,-71.7333");
      break;
    }
    case "Atlántico": {
      agregarDatos("Barranquilla", "10.9833,-74.8019");
      // agregarDatos('Galapa', '10.8932,-74.8792')
      // agregarDatos('Luruaco', '10.6083,-75.1417')
      // agregarDatos('Malambo', '10.85,-74.75')
      // agregarDatos('Puerto Colombia', '10.983,-74.95')
      // agregarDatos('Sabanagrande', '10.8,-74.75')
      // agregarDatos('Soledad', '10.9167,-74.75')

      break;
    }
    // case 'Bolívar': {
    //     agregarDatos('Cartagena De Indias', '10.4,-75.5')
    //     agregarDatos('El Carmen De Bolívar', '9.7167,-75.1333')

    //     break; }
    // case 'Boyacá': {
    //     agregarDatos('Chitaraque', '6.00092,-73.4407')
    //     agregarDatos('Oicatá', '5.59583,-73.3081')
    //     agregarDatos('Tunja', '5.5333,-73.3667')

    //     break; }
    case "Caldas": {
      agregarDatos("Chinchiná", "4.9825,-75.6036");
      // agregarDatos('Manizales', '5.067,-75.517')
      // agregarDatos('Manzanares', '5.2519,-75.1569')
      // agregarDatos('San José', '5.083,-75.783')

      break;
    }
    // case 'Caquetá': {
    //     agregarDatos('Florencia', '1.6139,-75.6128')
    // break; }
    // case 'Casanare': {
    //     agregarDatos('Paz De Ariporo', '5.8833,-71.9')
    // break; }

    // case 'Cauca': {
    //     agregarDatos('Popayán', '2.4542,-76.6092')
    //     agregarDatos('Timbío', '2.3445,-76.6839')

    //     break; }
    case "Valle del Cauca": {
      agregarDatos("Cartago", "4.74639,-75.91167");
      break;
    }
    case "Cesar": {
      //agregarDatos('Aguachica', '8.3167,-73.6333')
      //agregarDatos('La Paz', '10.383,-73.167')
      agregarDatos("Manaure Balcón Del Cesar", "10.3923,-73.0276");
      agregarDatos("Pueblo Bello", "10.4167,-73.5833");
      //agregarDatos('Río De Oro', '8.3,-73.383')
      agregarDatos("Valledupar", "10.4833,-73.25");

      break;
    }
    // case 'Chocó': {
    //     agregarDatos('Quibdó', '5.6922,-76.6581')

    //     break; }
    case "Cundinamarca": {
      // agregarDatos('Cáqueza', '4.4053,-73.9478')
      // agregarDatos('Chía', '4.85,-74.05')
      // agregarDatos('Chipaque', '4.44294,-74.0445')
      // agregarDatos('El Rosal', '4.8519,-74.2628')
      // agregarDatos('Facatativá', '4.8167,-74.3667')
      // agregarDatos('Gachancipá', '4.9908,-73.8731')
      // agregarDatos('Guayabetal', '4.217,-73.817')
      // agregarDatos('Zipaquirá', '5.0333,-74')
      agregarDatos("Chinauta", "4.30056,-74.4692");
      agregarDatos("Supatá", "5.05,-74.25");
      break;
    }
    // case 'Guaviare': {
    //     agregarDatos('San José Del Guaviare', '2.5667,-72.6333')

    //     break; }
    case "La Guajira": {
      //agregarDatos('El Molino', '10.6530556,-72.92556')
      //agregarDatos('Maicao', '11.3778,-72.2389')
      agregarDatos("San Juan Del Cesar", "10.7667,-73");
      // agregarDatos('Urumita', '10.5667,-73.0167')
      agregarDatos("Villanueva", "10.6,-72.9833");

      break;
    }
    // case 'Magdalena': {
    //     agregarDatos('Ciénaga', '11.0069,-74.25')
    //     agregarDatos('Santa Marta', '11.2419,-74.2053')

    //     break; }
    case "Meta": {
      // agregarDatos('Acacías', '3.983,-73.75')
      // agregarDatos('Castilla La Nueva', '3.8333,-73.6833')
      // agregarDatos('El Castillo', '3.56345,-73.7957')
      // agregarDatos('Fuentedeoro', '3.4667,-73.6167')
      // agregarDatos('Granada', '3.54452,-73.7065')
      // agregarDatos('Guamal', '3.88,-73.7656')
      // agregarDatos('La Macarena', '2.1828,-73.7847')
      // agregarDatos('Lejanías', '3.5268,-74.0232')
      // agregarDatos('Mesetas', '3.38474,-74.0451')
      // agregarDatos('Puerto Concordia', '2.62284,-72.7607')
      // agregarDatos('Puerto Lleras', '3.2694,-73.375')
      // agregarDatos('Puerto Rico', '2.9383,-73.2083')
      // agregarDatos('Restrepo', '4.25,-73.5667')
      // agregarDatos('San Carlos De Guaroa', '3.717,-73.25')
      // agregarDatos('San Juan De Arama', '3.3736,-73.8767')
      // agregarDatos('San Martín', '3.6969,-73.6986')
      agregarDatos("Villavicencio", "4.15,-73.6333");
      //agregarDatos('Vistahermosa', '3.1239,-73.7514')

      break;
    }
    // case 'Nariño': {
    //     agregarDatos('Pasto', '1.2078,-77.2772')

    //     break; }
    case "Norte de Santander": {
      agregarDatos("Ocaña", "8.2333,-73.35");
      agregarDatos("Cúcuta", "7.9,-72.5");
      agregarDatos("Labateca", "7.3,-72.5");
      agregarDatos("Los Patios", "7.8333,-72.5167");

      // agregarDatos('Cácota', '7.26814,-72.6427')
      // agregarDatos('Chitagá', '7.1333,-72.6667')
      // agregarDatos('Cucutilla', '7.53898,-72.7724')
      // agregarDatos('Pamplona', '7.3781,-72.6525')
      // agregarDatos('Silos', '7.2,-72.767')
      // agregarDatos('Toledo', '7.3131,-72.4875')
      // agregarDatos('Villa Del Rosario', '7.8353,-72.4736')

      break;
    }
    // case 'Putumayo': {
    //     agregarDatos('Mocoa', '1.1500,-76.6475')

    //     break; }
    case "Quindío": {
      agregarDatos("Armenia", "4.53,-75.68");
      // agregarDatos('Calarcá', '4.5333,-75.65')
      // agregarDatos('Circasia', '4.6167,-75.6333')
      // agregarDatos('Filandia', '4.6667,-75.6333')
      // agregarDatos('La Tebaida', '4.45,-75.8')
      // agregarDatos('Salento', '4.633,-75.567')

      break;
    }
    // case 'Risaralda': {
    //     agregarDatos('Dosquebradas', '4.8333,-75.6833')
    //     agregarDatos('La Virginia', '4.89736,-75.8828')
    //     agregarDatos('Pereira', '4.8143,-75.6946')

    //     break; }
    // case 'Santander': {
    //     agregarDatos('Aratoca', '6.683,-73.017')
    //     agregarDatos('Bucaramanga', '7.12539,-73.1198')
    //     agregarDatos('Floridablanca', '7.06222,-73.08644')
    //     agregarDatos('Gámbita', '5.91628015,-73.3158972254147')
    //     agregarDatos('Girón', '7.0708,-73.1731')
    //     agregarDatos('Piedecuesta', '6.98789,-73.04953')

    //     break; }
    case "Tolima": {
      agregarDatos("Chaparral", "3.7236,-75.4847");
      agregarDatos("Espinal", "4.15,-74.883");
      agregarDatos("Ibagué", "4.433,-75.217");
      agregarDatos("Rioblanco", "3.529167,-75.644722");
      break;
    }
  }
}
