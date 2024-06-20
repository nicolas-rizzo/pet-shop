use petShop;

insert into animales (nombre_AN) values ('Perro'),('Gato'),('Aves'),('Conejo'),('Tortuga');	

insert into productos (idAnimal_PR,urlImagen_PR,descripcion_PR,precioUnitario_PR)
	values (1,
	'https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp',
	'Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo',
	15000),
	(2,'https://www.paraisodemascotas.com.ar/wp-content/uploads/2019/05/gati-carno-paraiso-de-mascotas-parana-super-mascota.webp',
	'Gati Adultos sabor carne y pollo a la jardinera y otras proteinas',20000),
	(3,'https://catycanar.vtexassets.com/arquivos/ids/156453/10671.jpg?v=637732970377270000',
	'Alimento Para Canarios Tropmix Zootec X 1 Kg',10000),
	(4,'https://acdn.mitiendanube.com/stores/001/791/617/products/15-342d7c0d398dc3023717063887056578-640-0.png',
	'SCART Producto Alimento para conejos | Champion Mini Pets',9000),
	(5,'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/dcdb2ebe-d6ae-4bcd-8ee3-711ce7799406.aff2f83251b55cd062271dc76495b859.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
	'Alimento para Tortugas Acuaticas Lomas Reptile Sticks Palitos 300 gr',
	15000);
