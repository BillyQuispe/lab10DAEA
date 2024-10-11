CREATE DATABASE GymStudents;
GO

USE GymStudents;

CREATE TABLE Students (
  Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  Name NVARCHAR(50),
  StartDate DATETIMEOFFSET,
  EndDate DATETIMEOFFSET,
  CreatedAt DATETIMEOFFSET NOT NULL, 
  UpdatedAt DATETIMEOFFSET NOT NULL
);

INSERT INTO Students (Name, StartDate, EndDate, CreatedAt, UpdatedAt) VALUES
(N'Juan Perez', '2024-01-10', '2024-07-10', GETDATE(), GETDATE()),
(N'Maria Gomez', '2024-02-15', '2024-08-15', GETDATE(), GETDATE()),
(N'Carlos Fernandez', '2024-03-20', '2024-09-20', GETDATE(), GETDATE());

SELECT * FROM GymStudents.dbo.Students;
