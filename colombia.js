let map = L.map('map').setView([4.639386,-74.082412],6)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})

function resetMap(){
    map.setView([4.639386,-74.082412],6)
}

var myIcon = L.icon({
  iconUrl: 'iconoF.jpg',
  iconSize: [20, 20],
  iconAnchor: [22, 94]
});
var array = ['Amazonas','Antioquia','Arauca','Atlántico','Bolívar','Boyacá','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó','Cundinamarca','Guaviare','La Guajira','Magdalena','Meta','Nariño','Norte de Santander','Putumayo','Quindío','Risaralda','Santander','Tolima'];

var json = [
  {'mcpio':'Tame','lat':'6.4667','long':'-71.7333', 
  'workshops': [ {'nro': '35', 'fecha': '22 de diciembre de 2023', 'participantes':'20','duracion':' 2 horas', 'impartida': 'Diego Barbosa'}],
                'imagenes':[
                  'evidencias/tame/1.jpg',
                  'evidencias/tame/2.jpg',
                  'evidencias/tame/3.jpg',
                  'evidencias/tame/4.jpg',
                  'evidencias/tame/5.jpg',
                  'evidencias/tame/6.jpg',
                  'evidencias/tame/7.jpg'
              ]
  },
  {'mcpio':'Villavicencio','lat':'4.15','long':'-73.6333',
  'workshops': [ {'nro': '32', 'fecha': '21 de diciembre de 2023', 'participantes':'280','duracion':'2 horas', 'impartida': 'Omaira Vanegas'},],
  'imagenes':[
    'evidencias/villavicencio/1.jpg',
    'evidencias/villavicencio/2.jpg'
   ]
  },
  {'mcpio':'Cúcuta','lat':'7.9','long':'-72.5',
  'workshops': [ 
    {'nro': '7', 'fecha': '15 de diciembre de 2023', 'participantes':'132','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '23','fecha': '19 de diciembre de 2023', 'participantes':'679','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/cucuta/1.jpg',
    'evidencias/cucuta/2.jpg',
    'evidencias/cucuta/3.jpg',
    'evidencias/cucuta/4.jpg'
   ]
  },
  {'mcpio':'Labateca','lat':'7.3','long':'-72.5',
  'workshops': [ 
    {'nro': '9', 'fecha': '15 de diciembre de 2023', 'participantes':'106','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/labateca/1.jpg',
    'evidencias/labateca/2.jpg',
    'evidencias/labateca/3.jpg',
    'evidencias/labateca/4.jpg'
   ]
  },
  {'mcpio':'Los Patios','lat':'7.8333','long':'-72.5167',
  'workshops': [ 
    {'nro': '8', 'fecha': '15 de diciembre de 2023', 'participantes':'278','duracion':'2 horas', 'impartida': 'Andres Calderón'}
  ],
  'imagenes':[
    'evidencias/lospatios/1.jpg',
    'evidencias/lospatios/2.jpg',
    'evidencias/lospatios/3.jpg',
    'evidencias/lospatios/4.jpg'
   ]
  },
  {'mcpio':'Ocaña','lat':'8.2333','long':'-73.35', 
  'workshops': [ 
    {'nro': '12', 'fecha': '16 de diciembre de 2023', 'participantes':'299','duracion':'2 horas', 'impartida': 'Diego Barbosa'},
    {'nro': '15', 'fecha': '17 de diciembre de 2023', 'participantes':'212','duracion':'2 horas', 'impartida': 'Diego Barbosa'},
    {'nro': '22', 'fecha': '18 de diciembre de 2023', 'participantes':'224','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/ocaña/1.jpg',
    'evidencias/ocaña/2.jpg',
    'evidencias/ocaña/3.jpg',
    'evidencias/ocaña/4.jpg',
    'evidencias/ocaña/5.jpg',
    'evidencias/ocaña/6.jpg',
    'evidencias/ocaña/7.jpg',
    'evidencias/ocaña/8.jpg',
    'evidencias/ocaña/9.jpg',
    'evidencias/ocaña/10.jpg',
    'evidencias/ocaña/11.jpg',
    'evidencias/ocaña/12.jpg'
   ]
  },
  {'mcpio':'Manaure Balcón Del Cesar','lat':'10.3923','long':'-73.0276',
  'workshops': [ 
    {'nro': '4', 'fecha': '14 de diciembre de 2023', 'participantes':'86','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/manaure/1.jpg',
    'evidencias/manaure/2.jpg',
    'evidencias/manaure/3.jpg',
    'evidencias/manaure/4.jpg'
   ]
  },
  {'mcpio':'Pueblo Bello','lat':'10.4167','long':'-73.5833',
  'workshops': [ 
    {'nro': '2', 'fecha': '12 de diciembre de 2023', 'participantes':'152','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/pueblobello/1.jpg',
    'evidencias/pueblobello/2.jpg',
    'evidencias/pueblobello/3.jpg',
    'evidencias/pueblobello/4.jpg'
   ]
  },
  {'mcpio':'Valledupar','lat':'10.4833','long':'-73.25',
  'workshops': [ 
    {'nro': '24', 'fecha': '19 de diciembre de 2023', 'participantes':'201','duracion':'2 horas', 'impartida': 'Leticia Acosta'},
    {'nro': '31', 'fecha': '21 de diciembre de 2023', 'participantes':'513','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/valledupar/1.jpg',
    'evidencias/valledupar/2.jpg',
    'evidencias/valledupar/3.jpg',
    'evidencias/valledupar/4.jpg',
    'evidencias/valledupar/5.jpg',
    'evidencias/valledupar/6.jpg',
    'evidencias/valledupar/7.jpg',
    'evidencias/valledupar/8.jpg',
    'evidencias/valledupar/9.jpg',
    'evidencias/valledupar/10.jpg',
    'evidencias/valledupar/11.jpg',
    'evidencias/valledupar/12.jpg',
    'evidencias/valledupar/13.jpg',
    'evidencias/valledupar/14.jpg',
    'evidencias/valledupar/15.jpg'    
   ]
  },
  {'mcpio':'San Juan Del Cesar','lat':'10.7667','long':'-73',
  'workshops': [ 
    {'nro': '3', 'fecha': '13 de diciembre de 2023', 'participantes':'83','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/sanjuandelcesar/1.jpg',
    'evidencias/sanjuandelcesar/2.jpg',
    'evidencias/sanjuandelcesar/3.jpg',
    'evidencias/sanjuandelcesar/4.jpg',
    'evidencias/sanjuandelcesar/5.jpg',
    'evidencias/sanjuandelcesar/6.jpg'
   ]
  },
  {'mcpio':'Villanueva','lat':'10.6','long':'-72.9833',
  'workshops': [ 
    {'nro': '21', 'fecha': '18 de diciembre de 2023', 'participantes':'83','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/villanueva/1.jpg',
    'evidencias/villanueva/2.jpg',
    'evidencias/villanueva/3.jpg',
    'evidencias/villanueva/4.jpg',
    'evidencias/villanueva/5.jpg'
   ]
  },
  {'mcpio':'Barranquilla','lat':'10.9833','long':'-74.8019',
  'workshops': [ {'nro': '19', 'fecha': '18 de diciembre de 2023', 'participantes':'93','duracion':' 2 horas', 'impartida': ''}],
                'imagenes':[
                  'evidencias/barranquilla/1.jpg',
                  'evidencias/barranquilla/2.jpg',
                  'evidencias/barranquilla/3.jpg',
                  'evidencias/barranquilla/4.jpg'
              ]
  },
  {'mcpio':'Chaparral','lat':'3.7236','long':'-75.4847',
  'workshops': [ 
    {'nro': '10', 'fecha': '15 de diciembre de 2023', 'participantes':'165','duracion':' 2 horas', 'impartida': 'Heidy Serrato'},
    {'nro': '16', 'fecha': '17 de diciembre de 2023', 'participantes':'128','duracion':' 2 horas', 'impartida': 'Heidy Serrato'},
    {'nro': '30', 'fecha': '20 de diciembre de 2023', 'participantes':'162','duracion':' 2 horas', 'impartida': 'Harold Romero'}
  ],
    'imagenes':[
      'evidencias/chaparral/1.jpg',
      'evidencias/chaparral/2.jpg',
      'evidencias/chaparral/3.jpg',
      'evidencias/chaparral/4.jpg',
      'evidencias/chaparral/5.jpg',
      'evidencias/chaparral/6.jpg',
      'evidencias/chaparral/7.jpg',
      'evidencias/chaparral/8.jpg',
      'evidencias/chaparral/9.jpg',
      'evidencias/chaparral/10.jpg',
      'evidencias/chaparral/11.jpg',
      'evidencias/chaparral/12.jpg',
      'evidencias/chaparral/13.jpg',
      'evidencias/chaparral/14.jpg',
      'evidencias/chaparral/15.jpg',
      'evidencias/chaparral/16.jpg',
      'evidencias/chaparral/17.jpg',
      'evidencias/chaparral/18.jpg'
  ]
  },
  {'mcpio':'Espinal','lat':'4.15','long':'-74.883',
  'workshops': [ 
    {'nro': '11', 'fecha': '15 de diciembre de 2023', 'participantes':'100','duracion':' 2 horas', 'impartida': 'Wilfredy Cardozo'},
    {'nro': '13', 'fecha': '16 de diciembre de 2023', 'participantes':'167','duracion':' 2 horas', 'impartida': 'Wilfredy Cardozo'},
    {'nro': '17', 'fecha': '17 de diciembre de 2023', 'participantes':'133','duracion':' 2 horas', 'impartida': 'Wilfredy Cardozo'},
    {'nro': '26', 'fecha': '19 de diciembre de 2023', 'participantes':'100','duracion':' 2 horas', 'impartida': 'Wilfredy Cardozo'}
  ],
  'imagenes':[
    'evidencias/espinal/1.jpg',
    'evidencias/espinal/2.jpg',
    'evidencias/espinal/3.jpg',
    'evidencias/espinal/4.jpg',
    'evidencias/espinal/5.jpg',
    'evidencias/espinal/6.jpg',
    'evidencias/espinal/7.jpg',
    'evidencias/espinal/8.jpg'
]
  },
  {'mcpio':'Ibagué','lat':'4.433','long':'-75.217',
  'workshops': [ 
    {'nro': '14', 'fecha': '16 de diciembre de 2023', 'participantes':'327','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '18', 'fecha': '17 de diciembre de 2023', 'participantes':'334','duracion':'2 horas', 'impartida': 'Paulina Ortiz'},
    {'nro': '27', 'fecha': '19 de diciembre de 2023', 'participantes':'308','duracion':'2 horas', 'impartida': 'Jaime Barreto'}
  ],
  'imagenes':[
    'evidencias/ibague/1.jpg',
    'evidencias/ibague/2.jpg',
    'evidencias/ibague/3.jpg',
    'evidencias/ibague/4.jpg',
    'evidencias/ibague/5.jpg',
    'evidencias/ibague/6.jpg',
    'evidencias/ibague/7.jpg',
    'evidencias/ibague/8.jpg',
    'evidencias/ibague/9.jpg',
    'evidencias/ibague/10.jpg',
    'evidencias/ibague/11.jpg',
    'evidencias/ibague/12.jpg',
    'evidencias/ibague/13.jpg',
    'evidencias/ibague/14.jpg',
    'evidencias/ibague/15.jpg',
    'evidencias/ibague/16.jpg',
    'evidencias/ibague/17.jpg',
    'evidencias/ibague/18.jpg'
   ]
  },
  {'mcpio':'Rioblanco','lat':'3.529167','long':'-75.644722',
  'workshops': [ {'nro': '34', 'fecha': '21 de diciembre de 2023', 'participantes':'415','duracion':' 2 horas', 'impartida': 'Leticia Acosta'}],
  'imagenes':[
    'evidencias/rioblanco/1.jpg',
    'evidencias/rioblanco/2.jpg',
    'evidencias/rioblanco/3.jpg',
    'evidencias/rioblanco/4.jpg',
    'evidencias/rioblanco/5.jpg',
    'evidencias/rioblanco/6.jpg'
    ]
  },
  {'mcpio':'Armenia','lat':'4.53','long':'-75.68',
  'workshops': [ 
    {'nro': '1', 'fecha': '6 de diciembre de 2023', 'participantes':'141','duracion':'3 horas', 'impartida': 'El viceministro Diego Dorado'},
    {'nro': '6', 'fecha': '15 de diciembre de 2023', 'participantes':'91','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '25', 'fecha': '19 de diciembre de 2023', 'participantes':'161','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '29', 'fecha': '20 de diciembre de 2023', 'participantes':'202','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '33', 'fecha': '21 de diciembre de 2023', 'participantes':'228','duracion':'2 horas', 'impartida': 'Ana Maria Rodriguez'},
    {'nro': '37', 'fecha': '22 de diciembre de 2023', 'participantes':'76','duracion':'2 horas', 'impartida': 'Gabriel Moreno'}
  ],
  'imagenes':[
    'evidencias/armenia/1.jpg',
    'evidencias/armenia/2.jpg',
    'evidencias/armenia/3.jpg',
    'evidencias/armenia/4.jpg',
    'evidencias/armenia/5.jpg',
    'evidencias/armenia/6.jpg',
    'evidencias/armenia/7.jpg',
    'evidencias/armenia/8.jpg',
    'evidencias/armenia/9.jpg',
    'evidencias/armenia/10.jpg',
    'evidencias/armenia/11.jpg',
    'evidencias/armenia/12.jpg',
    'evidencias/armenia/13.jpg',
    'evidencias/armenia/14.jpg',
    'evidencias/armenia/15.jpg',
    'evidencias/armenia/16.jpg',
    'evidencias/armenia/17.jpg',
    'evidencias/armenia/18.jpg',
    'evidencias/armenia/19.jpg',
    'evidencias/armenia/20.jpg',
    'evidencias/armenia/21.jpg',
    'evidencias/armenia/22.jpg'
   ]
  },
  {'mcpio':'Chinchiná','lat':'4.9825','long':'-75.6036',
  'workshops': [ 
    {'nro': '5', 'fecha': '15 de diciembre de 2023', 'participantes':'92','duracion':'2 horas', 'impartida': 'Andres Calderón'}
  ],
  'imagenes':[
    'evidencias/chinchina/1.jpg',
    'evidencias/chinchina/2.jpg',
    'evidencias/chinchina/3.jpg'
   ]
  },
  {'mcpio':'Chinauta','lat':'4.30056','long':'-74.4692',
  'workshops': [ 
    {'nro': '20', 'fecha': '18 de diciembre de 2023', 'participantes':'296','duracion':'2 horas', 'impartida': 'Harold Romero'}
  ],
  'imagenes':[
    'evidencias/chinauta/1.jpg',
    'evidencias/chinauta/2.jpg',
    'evidencias/chinauta/3.jpg',
    'evidencias/chinauta/4.jpg',
    'evidencias/chinauta/5.jpg',
    'evidencias/chinauta/6.jpg'
   ]
  },
  {'mcpio':'Cartago','lat':'4.74639','long':'-75.91167',
  'workshops': [ 
    {'nro': '28', 'fecha': '19 de diciembre de 2023', 'participantes':'115','duracion':'2 horas', 'impartida': 'Ana Maria Rodriguez'}
  ],
  'imagenes':[
    'evidencias/cartago/1.jpg',
    'evidencias/cartago/2.jpg',
    'evidencias/cartago/3.jpg'
   ]
  },
  {'mcpio':'Supatá','lat':'5.05','long':'-74.25',
  'workshops': [ 
    {'nro': '36', 'fecha': '22 de diciembre de 2023', 'participantes':'165','duracion':'2 horas', 'impartida': 'Harold Romero'}
  ],
  'imagenes':[
    'evidencias/supata/1.jpg',
    'evidencias/supata/2.jpg',
    'evidencias/supata/3.jpg',
    'evidencias/supata/4.jpg',
    'evidencias/supata/5.jpg',
    'evidencias/supata/6.jpg'
   ]
  }
];

$.each(json, function(i, item) {
  L.marker([item.lat, item.long],{icon: myIcon}).addTo(map).bindPopup(`<a href="javascript:abrirModalDatos('${item.mcpio}')">Ver más...</a>`);
});

function irAlInicio() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  resetMap()
}

function abrirModalDatos(id){
  let informacionMunicipios = json.find((item) =>{
    return item.mcpio===id
  })
console.log(informacionMunicipios);

 $("#nomMcpio").text(id);
 $("#contenidoCarrusel").empty();
 $("#contenidoWorkshop").empty();

 informacionMunicipios.workshops.forEach((item, index)=>{
  console.log(item.nro);
  $("#contenidoWorkshop").append(`
  <div class="mt-2"><h4>Workshop # ${item.nro}</h3></div>
  <div><strong>Fecha: </strong> ${item.fecha}</div>
  <div><strong>Participantes: </strong>${item.participantes}</div>
  <div><strong>Duración: </strong>${item.duracion}</div>
  <div><strong>Impartida por: </strong>${item.impartida}</div>
  ${informacionMunicipios.workshops.length > 0? '<hr>':''}`)
})

 informacionMunicipios.imagenes.forEach((item, index)=>{
    $("#contenidoCarrusel").append(`<div class="carousel-item ${index == 0? 'active':''}"><img src="${item}" class="altura" alt="..."></div>`)
 })
 const myModal = new bootstrap.Modal("#workShopModal")  
 myModal.show();
}

function abrirModal(id){
  const myModal = new bootstrap.Modal("#"+ id)
  myModal.show();
  $("#myText").val("");
  $("#response").val("");
}


