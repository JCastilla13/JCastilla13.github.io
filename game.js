


{
	"rooms":[
		{
		"id":"parking", 
		"name":"Parking de ENTI", 
		"description":"El Parking que no puedes usar", 
		"items":["piedra","bicicleta"], 
		"doors":["principal","salida"]
	 }
	],
	"items": {
		{"id":"piedra", 
		"name":"Pedrusco mugroso",
		"description":"Es una piedra sucia",
		"pickable":true},
		
		{"id":"bicicleta",
		"name":"Bicicleta mugrosa",
		"description":"Algún alumno la abandonó", 
		"pickable":false}
	],
	"doors":[
		{"id":"principal", 
		"description":"Puerta de entrada a ENTI",
		"rooms":["parking", "hall"]},
		{"id":"salida",
		"description":"La salvación"}
	]
}