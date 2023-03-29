use qpick;
CREATE TABLE typeProduct (
    id INT IDENTITY(1,1) PRIMARY KEY,
    typeName VARCHAR(50) NOT NULL
);
CREATE TABLE Product (
    id INT IDENTITY(1,1) PRIMARY KEY,
    productName VARCHAR(50) NOT NULL,
    img VARCHAR(255),
    price int NOT NULL,
    typeId INT NOT NULL FOREIGN KEY REFERENCES typeProduct(id)
);
CREATE TABLE Info (
    id INT IDENTITY(1,1) PRIMARY KEY,
    productId INT NOT NULL FOREIGN KEY REFERENCES Product(id),
    producer VARCHAR(50) NOT NULL,
    amount int NOT NULL,
    price int NOT NULL,
    descript VARCHAR(20),
);
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    loginUser VARCHAR(50) NOT NULL,
    passwordUser VARCHAR(50) NOT NULL,
    roleUser VARCHAR(20),
);
CREATE TABLE Orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    datePlaced DATETIME NOT NULL,
    totalPrice DECIMAL(8, 2) NOT NULL,
    userId INT FOREIGN KEY REFERENCES Users(id)
);
-- OrderItem - информация о продуктах в заказе.
CREATE TABLE OrderItem (
    id INT IDENTITY(1,1) PRIMARY KEY,
    productId INT NOT NULL FOREIGN KEY REFERENCES Product(id),
    price int NOT NULL,
    orderId INT NOT NULL FOREIGN KEY REFERENCES Orders(id)
);