create database Primerdb;
use Primerdb;
create table PrimerTabla (
ID int primary key,
Campo1 int,
Campo2 varchar(50)
);
insert into PrimerTabla values (1,2,'sdsdsakjd');
select * from PrimerTabla;