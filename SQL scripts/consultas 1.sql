select * 
from Mascotas;

select id,fechaVisita,razon, IdMascota
from Visitas
where fechaVisita = '2022-09-12' and idmascota = 3 or fechaVisita = '2022-09-10';

select * from Visitas;

-- agregar nuevos campos a una tabla
alter table Mascotas
add column TipoAnimal varchar(25);

alter table Mascotas
add column Color varchar(25);
alter table Mascotas
add column FechaNacimiento date;

-- cambiar el tipo de un campo
alter table Mascotas
modify Nombre varchar(250) not null;

select 
	FechaVisita, Nombre, Mascotas.Id
from Visitas
join Mascotas 
on IdMascota = Mascotas.Id;

select 
	v.FechaVisita, m.Nombre, m.Id
from Visitas as v
join Mascotas as m
on IdMascota = m.Id;

