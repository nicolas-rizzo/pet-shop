DROP DATABASE IF EXISTS petShop;

create database petShop;

use petShop;

create table animales(
	idAnimal_AN int auto_increment not null,
	nombre_AN varchar(20) not null,
	primary key (idAnimal_AN)
);

create table productos(
	idProducto_PR int auto_increment not null,
	idAnimal_PR int not null,
	urlImagen_PR varchar(300) not null,
	descripcion_PR varchar(110) not null,
	precioUnitario_PR decimal(8,2) not null,
	activo_PR boolean not null default 1,
	primary key (idProducto_PR),
	foreign key (idAnimal_PR) references animales(idAnimal_AN)
);

create table usuarios(
	idUsuario_US int auto_increment not null,
	nombreUsuario_US varchar(40) not null,
	correoElectronico_US char(40) not null unique,
	contraseña_US char(100) not null,
	domicilio_US varchar(40) not null,
	codigoPostal varchar(10) not null,
	primary key (idUsuario_US)
);

create table ventas(
	idVenta_VN int auto_increment not null,
	idUsuario_VN int not null,
	importeTotal_VN decimal(8,2) not null default 0,
	fechaVenta_VN date not null default (CURRENT_DATE),
	primary key (idVenta_VN),
	foreign key (idUsuario_VN) references usuarios(idUsuario_US)
); 

create table detalleVenta(
	idVenta_DV int not null,
	idProducto_DV int not null,
	cantidad_DV int not null,
	precioUnitario decimal(8,2) not null,
	primary key(idVenta_DV,idProducto_DV),
	foreign key(idVenta_DV) references ventas(idVenta_VN),
	foreign key(idProducto_DV) references productos(idProducto_PR)
);
