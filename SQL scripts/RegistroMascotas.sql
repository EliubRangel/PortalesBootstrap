-- create database Veterinaria;
use Veterinaria;

create table Mascotas (
ID int primary key,
Nombre varchar(250) not null ,
NombreDueno varchar(250),
CantidadVacunas int,
TipoMascota varchar(25)
);

drop table Mascotas;
insert into Mascotas 
values (1,'daisy','eliub',5);
insert into Mascotas
values(2,'bollito','samuel',3);
insert into Mascotas
values(3,'boyac','alma',6);
insert into Mascotas
values(5,null,'sam',5,'gato');
select * from Mascotas;


create table Visita (
Id int primary key,
FechaVisita date,
RazonVisita varchar(250),
TipoMascota varchar(250),
NombreMascota varchar(250));


insert into Visita
values(5,'2022-09-02','dolor en la pata', 'perro', 'boyac');
select * from Visita;
insert into Visita
values (6,curdate(),'dolor en la panza','perro','daisy');
insert into Visita
values(7,curdate(),'desparacitar','perro','boyac');

insert into Visitas(fechavisita,razon,idMascota)
values ('2022-08-10','desparacitar',2);
insert into Visitas (fechavisita,razon,idMascota)
values ('2022-09-12','el perro presenta sintomas de fiebre y diarea',3);
insert into Visitas(fechavisita, razon, idMascota)
values('2022-09-10','el perro presenta intoxicacion por alimentos',1);
insert into Visitas (fechavisita, razon, idMascota)
values('2022-09-10','el perro presenta fractura de la pata deracha',4);
insert into Visitas (fechavisita, razon, idMascota)
values ('2022-09-10','el perro presenta parasitos ',2);

drop table Visitas;

create table Visitas(
	Id int primary key auto_increment,
    FechaVisita date,
    Razon varchar(250),
    IdMascota int,
    foreign key (IdMascota) references Mascotas(ID)
);

select *
from Visitas;

select * from Mascotas;



    



