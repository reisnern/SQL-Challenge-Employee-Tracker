
INSERT INTO department (name)
VALUES 
('Corporate'),
('IT'),
('Inside Sales'),
('Legal'),
('HR'),
('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES 
('AVP' , 300.5 , 1 ),
('Manager' , 90.2 , 2 ),
('Sales Rep', 75.5 , 3),
('Legal Strategist' , 67.1 , 4),
('Team Lead' , 60.7 , 5),
('Associate' , 42.3 , 6 );


INSERT INTO employee (first_name, last_name, roles_id , manager_id)
VALUES 
('Dale' , 'Dog', 1 , 2),
('Andrew' , 'Core', 2, 2),
('Sam', 'Cat', 3 , null),
('Pip', 'Kitty', 4 , null),
('Annie' , 'Pup', 5, null),
('Rosie', 'Woof', 6, null);


© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
