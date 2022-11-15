create database Restaurant;
use Restaurant;
create table Orden(
Id int primary key auto_increment,
NumeroMesa int,
NombreComenSal varchar(20));
create table Alimento(
Id int primary key auto_increment,
Nombre varchar(20),
Descripcion varchar(50),
Precio int);
create table OrdenAlimento(
IdOrden int,
IdAlimento int,
Primary key (IdAlimento,IdOrden),
foreign key(IdAlimento) references Alimento(Id),
foreign key(IdOrden) references Orden(Id));



