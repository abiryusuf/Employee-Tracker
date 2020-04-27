-- Drops the Employee_Tracker if it already exists --
DROP DATABASE IF EXISTS Employee_Tracker;


-- Create a database called Employee_Tracker --
CREATE DATABASE Employee_Tracker;
-- CREATE department table --

USE Employee_Tracker;

CREATE TABLE department(
    id INTEGER auto_increment not null,
    name VARCHAR(30) not null,
    primary key(id)
);

-- CREATE role table --
CREATE TABLE role(
    id INT auto_increment not null,
    title VARCHAR(30) not null,
    salary DECIMAL not null,
    department_id INT not null,
    constraint fk_deparment_id foreign key (department_id) references department(id);
    primary key(id) 

);

CREATE TABLE employee(
    id INT auto_increment not null,
    first_name VARCHAR(30) not null,
    last_name VARCHAR(30) not null,
    role_id INT not null, 
    constraint fk_role_id foreign key (role_id) references role(id),
    manager_id INT ,
    constraint fk_manager_id foreign key (manager_id) references employee(id),
    PRIMARY KEY(id)
);

select * from employee;
select * from department;
select * from role;

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
-- INSERT into employee (first_name, last_name, role_id)
-- values ("Harrison", "Tom", 6);
-- INSERT into employee (first_name, last_name, role_id)
-- values ("Simon", "Hanks", 7);
-- INSERT into employee (first_name, last_name, role_id)
-- values ("Wayne", "Sun", 8);

