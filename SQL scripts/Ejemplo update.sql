alter table Mascotas
drop column NombreDueno;

alter table Mascotas
add IdCliente int not null;

alter table Mascotas
add constraint Fk_Mascotas_Clientes
foreign key (IdCliente)
references Cliente(Id);
select * from Cliente;

insert into Cliente
values(1,'eliub.gmail.com','tlajo','6672739767');

update Mascotas 
set IdCliente = 1;


