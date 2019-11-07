create database RentDB
go
use RentDB;
go
create table Users(
NumberDriverLicense nvarchar(10) primary key,
Firstname nvarchar(50) not null,
Name nvarchar(50) not null,
DateBirth date not null
)
go
create table Cars(
RegistrationNumber nvarchar(8) primary key,
Mark nvarchar(20) not null,
Model nvarchar(20) not null,
Class nvarchar(1) not null,
YearIssue date not null
)
go
create table Orders(
IdOrder int identity(1,1) primary key,
NumberDriverLicense nvarchar(10) foreign key references Users(NumberDriverLicense) not null,
RegistrationNumber nvarchar(8) foreign key references Cars(RegistrationNumber) not null,
StartDateHire date not null,
EndDateHire date not null,
Comment nvarchar(250) not null)
go
alter table Orders add constraint DateConstraint check(EndDateHire>StartDateHire)
go
insert into Users values('1111111111','Kirill','Lapitskiy','12.12.1988'),
('2222222222','Timur','Esis','08.09.1990'),
('3333333333','Ivan','Huntov','23.02.1984'),
('4444444444','Roman','Veles','12.11.1987'),
('5555555555','Dmitriy','Andropov','15.06.1990'),
('6666666666','Vladislav','Alekseev','22.02.1980'),
('7777777777','Maksim','Kalupin','12.03.1981')
go
insert into Cars values('AAAAAAAA','Audi','435','1','12.02.1995'),
('BBBBBBBB','BMW','12','1','25.12.2001'),
('CCCCCCCC','Fiat','45','1','25.10.1999'),
('DDDDDDDD','Volkswagen','100','2','03.11.2005'),
('EEEEEEEE','Honda','43','2','13.12.2000')
go
insert into Orders values('1111111111','AAAAAAAA','05.11.2019','17.11.2019','Comm1'),
('1111111111','CCCCCCCC','01.11.2019','11.11.2019','Comm2'),
('2222222222','CCCCCCCC','05.11.2019','10.11.2019','Comm3'),
('3333333333','AAAAAAAA','03.11.2019','09.11.2019','Comm4')
