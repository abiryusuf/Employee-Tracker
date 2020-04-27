const mysql = require("mysql");
const inquirer = require("inquire");

//const consoleTB = require("console.table");


//create connection with database
const connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Employee_Tracker"
});

//connect with server
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    employeeView();

})

function employeeView(){
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res){
        console.log(res);
        connection.end();
    })
}