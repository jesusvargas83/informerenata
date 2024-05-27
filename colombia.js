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
  iconUrl: 'iconoF.JPG',
  iconSize: [20, 20],
  iconAnchor: [22, 94]
});
var array = ['Amazonas','Antioquia','Arauca','Atlántico','Bolívar','Boyacá','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó','Cundinamarca','Guaviare','La Guajira','Magdalena','Meta','Nariño','Norte de Santander','Putumayo','Quindío','Risaralda','Santander','Tolima'];

var json = [
  {'mcpio':'Tame','lat':'6.4667','long':'-71.7333', 
  'workshops': [ {'nro': '35', 'fecha': '22 de diciembre de 2023', 'participantes':'20','duracion':' 2 horas', 'impartida': 'Diego Barbosa'}],
                'imagenes':[
                  'evidencias/tame/1.JPG',
                  'evidencias/tame/2.JPG',
                  'evidencias/tame/3.JPG',
                  'evidencias/tame/4.JPG',
                  'evidencias/tame/5.JPG',
                  'evidencias/tame/6.JPG',
                  'evidencias/tame/7.JPG'
              ]
  },
  {'mcpio':'Villavicencio','lat':'4.15','long':'-73.6333',
  'workshops': [ {'nro': '32', 'fecha': '21 de diciembre de 2023', 'participantes':'280','duracion':'2 horas', 'impartida': 'Omaira Vanegas'},],
  'imagenes':[
    'evidencias/villavicencio/1.JPG',
    'evidencias/villavicencio/2.JPG'
   ]
  },
  {'mcpio':'Cúcuta','lat':'7.9','long':'-72.5',
  'workshops': [ 
    {'nro': '7', 'fecha': '15 de diciembre de 2023', 'participantes':'132','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '23','fecha': '19 de diciembre de 2023', 'participantes':'679','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/cucuta/1.JPG',
    'evidencias/cucuta/2.JPG',
    'evidencias/cucuta/3.JPG',
    'evidencias/cucuta/4.JPG'
   ]
  },
  {'mcpio':'Labateca','lat':'7.3','long':'-72.5',
  'workshops': [ 
    {'nro': '9', 'fecha': '15 de diciembre de 2023', 'participantes':'106','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/labateca/1.JPG',
    'evidencias/labateca/2.JPG',
    'evidencias/labateca/3.JPG',
    'evidencias/labateca/4.JPG'
   ]
  },
  {'mcpio':'Los Patios','lat':'7.8333','long':'-72.5167',
  'workshops': [ 
    {'nro': '8', 'fecha': '15 de diciembre de 2023', 'participantes':'278','duracion':'2 horas', 'impartida': 'Andres Calderón'}
  ],
  'imagenes':[
    'evidencias/lospatios/1.JPG',
    'evidencias/lospatios/2.JPG',
    'evidencias/lospatios/3.JPG',
    'evidencias/lospatios/4.JPG'
   ]
  },
  {'mcpio':'Ocaña','lat':'8.2333','long':'-73.35', 
  'workshops': [ 
    {'nro': '12', 'fecha': '16 de diciembre de 2023', 'participantes':'299','duracion':'2 horas', 'impartida': 'Diego Barbosa'},
    {'nro': '15', 'fecha': '17 de diciembre de 2023', 'participantes':'212','duracion':'2 horas', 'impartida': 'Diego Barbosa'},
    {'nro': '22', 'fecha': '18 de diciembre de 2023', 'participantes':'224','duracion':'2 horas', 'impartida': 'Diego Barbosa'}
  ],
  'imagenes':[
    'evidencias/ocaña/1.JPG',
    'evidencias/ocaña/2.JPG',
    'evidencias/ocaña/3.JPG',
    'evidencias/ocaña/4.JPG',
    'evidencias/ocaña/5.JPG',
    'evidencias/ocaña/6.JPG',
    'evidencias/ocaña/7.JPG',
    'evidencias/ocaña/8.JPG',
    'evidencias/ocaña/9.JPG',
    'evidencias/ocaña/10.JPG',
    'evidencias/ocaña/11.JPG',
    'evidencias/ocaña/12.JPG'
   ]
  },
  {'mcpio':'Manaure Balcón Del Cesar','lat':'10.3923','long':'-73.0276',
  'workshops': [ 
    {'nro': '4', 'fecha': '14 de diciembre de 2023', 'participantes':'86','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/manaure/1.JPG',
    'evidencias/manaure/2.JPG',
    'evidencias/manaure/3.JPG',
    'evidencias/manaure/4.JPG'
   ]
  },
  {'mcpio':'Pueblo Bello','lat':'10.4167','long':'-73.5833',
  'workshops': [ 
    {'nro': '2', 'fecha': '12 de diciembre de 2023', 'participantes':'152','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/pueblobello/1.JPG',
    'evidencias/pueblobello/2.JPG',
    'evidencias/pueblobello/3.JPG',
    'evidencias/pueblobello/4.JPG'
   ]
  },
  {'mcpio':'Valledupar','lat':'10.4833','long':'-73.25',
  'workshops': [ 
    {'nro': '24', 'fecha': '19 de diciembre de 2023', 'participantes':'201','duracion':'2 horas', 'impartida': 'Leticia Acosta'},
    {'nro': '31', 'fecha': '21 de diciembre de 2023', 'participantes':'513','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/valledupar/1.JPG',
    'evidencias/valledupar/2.JPG',
    'evidencias/valledupar/3.JPG',
    'evidencias/valledupar/4.JPG',
    'evidencias/valledupar/5.JPG',
    'evidencias/valledupar/6.JPG',
    'evidencias/valledupar/7.JPG',
    'evidencias/valledupar/8.JPG',
    'evidencias/valledupar/9.JPG',
    'evidencias/valledupar/10.JPG',
    'evidencias/valledupar/11.JPG',
    'evidencias/valledupar/12.JPG',
    'evidencias/valledupar/13.JPG',
    'evidencias/valledupar/14.JPG',
    'evidencias/valledupar/15.JPG'    
   ]
  },
  {'mcpio':'San Juan Del Cesar','lat':'10.7667','long':'-73',
  'workshops': [ 
    {'nro': '3', 'fecha': '13 de diciembre de 2023', 'participantes':'83','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/sanjuandelcesar/1.JPG',
    'evidencias/sanjuandelcesar/2.JPG',
    'evidencias/sanjuandelcesar/3.JPG',
    'evidencias/sanjuandelcesar/4.JPG',
    'evidencias/sanjuandelcesar/5.JPG',
    'evidencias/sanjuandelcesar/6.JPG'
   ]
  },
  {'mcpio':'Villanueva','lat':'10.6','long':'-72.9833',
  'workshops': [ 
    {'nro': '21', 'fecha': '18 de diciembre de 2023', 'participantes':'83','duracion':'2 horas', 'impartida': 'Leticia Acosta'}
  ],
  'imagenes':[
    'evidencias/villanueva/1.JPG',
    'evidencias/villanueva/2.JPG',
    'evidencias/villanueva/3.JPG',
    'evidencias/villanueva/4.JPG',
    'evidencias/villanueva/5.JPG'
   ]
  },
  {'mcpio':'Barranquilla','lat':'10.9833','long':'-74.8019',
  'workshops': [ {'nro': '19', 'fecha': '18 de diciembre de 2023', 'participantes':'93','duracion':' 2 horas', 'impartida': ''}],
                'imagenes':[
                  'evidencias/barranquilla/1.JPG',
                  'evidencias/barranquilla/2.JPG',
                  'evidencias/barranquilla/3.JPG',
                  'evidencias/barranquilla/4.JPG'
              ]
  },
  {'mcpio':'Chaparral','lat':'3.7236','long':'-75.4847',
  'workshops': [ 
    {'nro': '10', 'fecha': '15 de diciembre de 2023', 'participantes':'165','duracion':' 2 horas', 'impartida': 'Heidy Serrato'},
    {'nro': '16', 'fecha': '17 de diciembre de 2023', 'participantes':'128','duracion':' 2 horas', 'impartida': 'Heidy Serrato'},
    {'nro': '30', 'fecha': '20 de diciembre de 2023', 'participantes':'162','duracion':' 2 horas', 'impartida': 'Harold Romero'}
  ],
    'imagenes':[
      'evidencias/chaparral/1.JPG',
      'evidencias/chaparral/2.JPG',
      'evidencias/chaparral/3.JPG',
      'evidencias/chaparral/4.JPG',
      'evidencias/chaparral/5.JPG',
      'evidencias/chaparral/6.JPG',
      'evidencias/chaparral/7.JPG',
      'evidencias/chaparral/8.JPG',
      'evidencias/chaparral/9.JPG',
      'evidencias/chaparral/10.JPG',
      'evidencias/chaparral/11.JPG',
      'evidencias/chaparral/12.JPG',
      'evidencias/chaparral/13.JPG',
      'evidencias/chaparral/14.JPG',
      'evidencias/chaparral/15.JPG',
      'evidencias/chaparral/16.JPG',
      'evidencias/chaparral/17.JPG',
      'evidencias/chaparral/18.JPG'
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
    'evidencias/espinal/1.JPG',
    'evidencias/espinal/2.JPG',
    'evidencias/espinal/3.JPG',
    'evidencias/espinal/4.JPG',
    'evidencias/espinal/5.JPG',
    'evidencias/espinal/6.JPG',
    'evidencias/espinal/7.JPG',
    'evidencias/espinal/8.JPG'
]
  },
  {'mcpio':'Ibagué','lat':'4.433','long':'-75.217',
  'workshops': [ 
    {'nro': '14', 'fecha': '16 de diciembre de 2023', 'participantes':'327','duracion':'2 horas', 'impartida': 'Andres Calderón'},
    {'nro': '18', 'fecha': '17 de diciembre de 2023', 'participantes':'334','duracion':'2 horas', 'impartida': 'Paulina Ortiz'},
    {'nro': '27', 'fecha': '19 de diciembre de 2023', 'participantes':'308','duracion':'2 horas', 'impartida': 'Jaime Barreto'}
  ],
  'imagenes':[
    'evidencias/ibague/1.JPG',
    'evidencias/ibague/2.JPG',
    'evidencias/ibague/3.JPG',
    'evidencias/ibague/4.JPG',
    'evidencias/ibague/5.JPG',
    'evidencias/ibague/6.JPG',
    'evidencias/ibague/7.JPG',
    'evidencias/ibague/8.JPG',
    'evidencias/ibague/9.JPG',
    'evidencias/ibague/10.JPG',
    'evidencias/ibague/11.JPG',
    'evidencias/ibague/12.JPG',
    'evidencias/ibague/13.JPG',
    'evidencias/ibague/14.JPG',
    'evidencias/ibague/15.JPG',
    'evidencias/ibague/16.JPG',
    'evidencias/ibague/17.JPG',
    'evidencias/ibague/18.JPG'
   ]
  },
  {'mcpio':'Rioblanco','lat':'3.529167','long':'-75.644722',
  'workshops': [ {'nro': '34', 'fecha': '21 de diciembre de 2023', 'participantes':'415','duracion':' 2 horas', 'impartida': 'Leticia Acosta'}],
  'imagenes':[
    'evidencias/rioblanco/1.JPG',
    'evidencias/rioblanco/2.JPG',
    'evidencias/rioblanco/3.JPG',
    'evidencias/rioblanco/4.JPG',
    'evidencias/rioblanco/5.JPG',
    'evidencias/rioblanco/6.JPG'
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
    'evidencias/armenia/1.JPG',
    'evidencias/armenia/2.JPG',
    'evidencias/armenia/3.JPG',
    'evidencias/armenia/4.JPG',
    'evidencias/armenia/5.JPG',
    'evidencias/armenia/6.JPG',
    'evidencias/armenia/7.JPG',
    'evidencias/armenia/8.JPG',
    'evidencias/armenia/9.JPG',
    'evidencias/armenia/10.JPG',
    'evidencias/armenia/11.JPG',
    'evidencias/armenia/12.JPG',
    'evidencias/armenia/13.JPG',
    'evidencias/armenia/14.JPG',
    'evidencias/armenia/15.JPG',
    'evidencias/armenia/16.JPG',
    'evidencias/armenia/17.JPG',
    'evidencias/armenia/18.JPG',
    'evidencias/armenia/19.JPG',
    'evidencias/armenia/20.JPG',
    'evidencias/armenia/21.JPG',
    'evidencias/armenia/22.JPG'
   ]
  },
  {'mcpio':'Chinchiná','lat':'4.9825','long':'-75.6036',
  'workshops': [ 
    {'nro': '5', 'fecha': '15 de diciembre de 2023', 'participantes':'92','duracion':'2 horas', 'impartida': 'Andres Calderón'}
  ],
  'imagenes':[
    'evidencias/chinchina/1.JPG',
    'evidencias/chinchina/2.JPG',
    'evidencias/chinchina/3.JPG'
   ]
  },
  {'mcpio':'Chinauta','lat':'4.30056','long':'-74.4692',
  'workshops': [ 
    {'nro': '20', 'fecha': '18 de diciembre de 2023', 'participantes':'296','duracion':'2 horas', 'impartida': 'Harold Romero'}
  ],
  'imagenes':[
    'evidencias/chinauta/1.JPG',
    'evidencias/chinauta/2.JPG',
    'evidencias/chinauta/3.JPG',
    'evidencias/chinauta/4.JPG',
    'evidencias/chinauta/5.JPG',
    'evidencias/chinauta/6.JPG'
   ]
  },
  {'mcpio':'Cartago','lat':'4.74639','long':'-75.91167',
  'workshops': [ 
    {'nro': '28', 'fecha': '19 de diciembre de 2023', 'participantes':'115','duracion':'2 horas', 'impartida': 'Ana Maria Rodriguez'}
  ],
  'imagenes':[
    'evidencias/cartago/1.JPG',
    'evidencias/cartago/2.JPG',
    'evidencias/cartago/3.JPG'
   ]
  },
  {'mcpio':'Supatá','lat':'5.05','long':'-74.25',
  'workshops': [ 
    {'nro': '36', 'fecha': '22 de diciembre de 2023', 'participantes':'165','duracion':'2 horas', 'impartida': 'Harold Romero'}
  ],
  'imagenes':[
    'evidencias/supata/1.JPG',
    'evidencias/supata/2.JPG',
    'evidencias/supata/3.JPG',
    'evidencias/supata/4.JPG',
    'evidencias/supata/5.JPG',
    'evidencias/supata/6.JPG'
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


