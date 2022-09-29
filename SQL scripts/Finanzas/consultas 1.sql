create database Finanzas;
use Finanzas;
create table Ingreso(
Id int primary key,
Fecha date,
Importe decimal,
Descripcion varchar(100));
create table Gastos(
Id int primary key,
Fecha date,
Importe decimal,
Descripcion varchar(100));
create table Presupuesto(
Id int primary key,
TotalIngreso int,
Restante int,
IdIngreso int,
idGastos int,
foreign key(IdIngreso) references Ingreso(Id),
foreign key (IdGastos) references Gastos(Id));

select *
from Presupuesto
join Ingreso
on IdIngreso = Ingreso.Id
join Gastos
on IdGastos = Gastos.Id;

