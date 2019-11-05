create database RentDB
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

