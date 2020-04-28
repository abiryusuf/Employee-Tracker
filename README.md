## Employee_Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

<img width="736" alt="schema" src="https://user-images.githubusercontent.com/41492852/80520485-7ec19f80-8957-11ea-8a2b-8ae7d2c7d6da.png">


## Table

 department:

    id - INT PRIMARY KEY
    name - VARCHAR(30) to hold department name

 role:

    id - INT PRIMARY KEY
    title - VARCHAR(30) to hold role title
    salary - DECIMAL to hold role salary
    department_id - INT to hold reference to department role belongs to department

 employee:

    id - INT PRIMARY KEY
    first_name - VARCHAR(30) to hold employee first name
l   ast_name - VARCHAR(30) to hold employee last name
    role_id - INT to hold reference to role employee has
    manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

 Here are some functionalities how to work on the project:

* Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

* You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

* You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.