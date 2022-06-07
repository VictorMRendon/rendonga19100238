create database V19100238;
use V19100238;

create table empleados(
idEmpleado smallint not null auto_increment,
Nombres varchar(30),
Apellidos varchar(50),
CURP varchar(18),
FechaNaci varchar(20),
Genero varchar(15),
Direccion varchar(100),
Telefono varchar(10),
Pais varchar(15),
Estado varchar(15),
Ciudad varchar(35),
primary key (idEmpleado)
);

insert into empleados (Nombres, Apellidos, CURP, FechaNaci, Genero, 
		 Direccion, Telefono, Pais, Estado, Ciudad)
values ('Victor Manuel','Rendon Garcia','REGV010105HTSNRCA0', '05/01/2001', 'Masculino',
             'Palmera #5642, Col. El Nogal', '8671922323', 'Mexico', 'Tamaulipas', 'Nuevo Laredo');