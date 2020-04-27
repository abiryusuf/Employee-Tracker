INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Manager");

INSERT into role (title, salary, department_id)
VALUES ("Sales VP", 55000, 1);
INSERT into role (title, salary, department_id)
VALUES ("SalesPerson", 35000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Lead Engineer", 43000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 50000, 3);
INSERT into role (title, salary, department_id)
VALUES ("Legal", 50000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Manager", 70000, 5);


SELECT * FROM role;

INSERT into employee (first_name, last_name, role_id)
values ("Abir", "Yusuf", 3); 
INSERT into employee (first_name, last_name, role_id)
values ("Ron", "Erlih", 4);
INSERT into employee (first_name, last_name, role_id)
values ("Robert", "King", 5);