CREATE TABLE [User] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [email] nvarchar(255) UNIQUE NOT NULL,
  [username] nvarchar(255) NOT NULL,
  [birth] date NOT NULL,
  [password] nvarchar(255) NOT NULL,
  [gender] nvarchar(255)
)
GO

CREATE TABLE [Disease] (
  [id] int PRIMARY KEY,
  [title] nvarchar(255),
  [desc] nvarchar(255),
  [imgLink] nvarchar(255)
)
GO

CREATE TABLE [CurrentDisease] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [user_id] int,
  [disease_id] int,
  [progress_id] int
)
GO

CREATE TABLE [Excercise] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [title] nvarchar(255),
  [desc] nvarchar(255),
  [videoLink] nvarchar(255),
  [disease_id] int
)
GO

CREATE TABLE [Progress] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [date] datetime,
  [value] int,
  [comparing_user_id] int,
  [comparing_excercise_id] int
)
GO

ALTER TABLE [CurrentDisease] ADD FOREIGN KEY ([user_id]) REFERENCES [User] ([id])
GO

ALTER TABLE [Disease] ADD FOREIGN KEY ([id]) REFERENCES [CurrentDisease] ([user_id])
GO

ALTER TABLE [Excercise] ADD FOREIGN KEY ([disease_id]) REFERENCES [Disease] ([id])
GO
