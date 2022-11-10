create database Floreria;
use Floreria;
create table Pedidos(
Id int primary key auto_increment,
Destinatario varchar (20),
Direccion varchar(20),
TelefonoContacto varchar(12));
create table Flores(
Id int primary key auto_increment,
NombreFlor varchar(20),
Descripcion varchar(20),
Precio int);
create table Pedidos_Flores(
IdFlores int,
IdPedidos int,
primary key (IdPedidos,IdFlores),
foreign key(IdPedidos) references Pedidos(Id),
foreign key(IdFlores) references Flores(Id));




