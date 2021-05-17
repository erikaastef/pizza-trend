-- Up
CREATE TABLE User(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
);

CREATE TABLE Ingredient (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER,
);

CREATE TABLE PizzaName(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
);
CREATE TABLE Order (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer TEXT,
    phone TEXT,
    pizzaId INTEGER REFERENCES PizzaName(id),
    userId INTEGER REFERENCES User(id),
);


INSERT INTO User (email) values ('pizza@admin.com');

--Ingredients

INSERT INTO Ingredient (name, price)values ('pizza',10000);
                                    values ('pollo',5000);
                                    values ('peperoni',4500);
                                    values ('maíz',3000);
                                    values ('jamón',3000);
                                    values ('jalapeño',3000);
                                    values ('anchoas',3000);
                                    values ('champiñones',3000);
                                    values ('piña',3000);
                                    values ('cebolla',3000);
                                    values ('aceitunas negras',3000);
                                    values ('aceitunas verdes',3000);
                                    values ('jamón serrano',3000);
                                    values ('rúcula',3000);
                                    values ('espinaca',3000);
                                    values ('extra queso',3000);
                                    values ('tocino',3000);

--Pizza names
INSERT INTO PizzaName (name)values ('margherita');
                            values ('diavola');
                            values ('vegetatian');
                            values ('special');


--Mock order

INSERT INTO Order (customer, phone, pizzaId, userId) values ('Erika', '1166074332', 1, 1);

-- Down
DROP TABLE User;
DROP TABLE Ingredient;
DROP TABLE PizzaName;
DROP TABLE Order;
