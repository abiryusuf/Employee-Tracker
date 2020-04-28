const mysql = require("mysql");
const inquirer = require("inquirer");

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
    if(err) {
        console.error("Error: " + err.stack);
        return err;
    }
    console.log("connected as id: " + connection.threadId);
   
    startRun();
   //employeeView();

});

const viewOptions =[
    "ViewEmployees",
    "ViewDepartment",
    "ViewRoles",
    "UpdateEmployee",
    "Exit"
 ];

 const updateOptions = [
    "First Name",
    "Last Name",
    "Role",
    "exit"
];


function startRun(){
    inquirer
    .prompt({
        name:"action",
        type: "list",
        message: "What would you like to do ?",
        choices: viewOptions
    })
    .then(function(answer){
        switch(answer.action){
            case viewOptions[0]:
                employeeView();
                break;

            case viewOptions[2]:
                departmentView();
                break;

            case viewOptions[2]:
                roleView();
                break; 

            case viewOptions[3]:
                updateEmployee();
                break;

            case updateOptions[4]:
                connection.end();
                break;       
        }
    })
}

function employeeView() {
    var query = "SELECT first_name, last_name, title, salary FROM employee ";
    query += "LEFT JOIN role ";
    query += "ON employee.role_id = role.id"
    connection.query(query, function (err, result) {
        if (err) throw err;

        console.table(result)
        startRun();
    });
};

function departmentView(){
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res){
        console.table(res);
        startRun();
        //connection.end();
        //quitApp();
    });

};


function roleView(){
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
        console.table("View Roles :" + res);
        startRun();
    });
};

function updateEmployee(){
    connection.query("SELECT * FROM role", function(err, res){

        inquirer
        .prompt([
            {
            name: "first_name", 
            type: "input",
            message: "Employee's first_name: ",
           },
           {
            name: "last_name",
            type: "input",
            message: "Employee's last name: "
           },{
            name: "role",
            type: "list",
            choices: function(){
                var arr =[];
                for(var i =0; i<res.length; i++){
                    arr.push(res[i].title);
                }
                return arr;
            },
            message: "What is the role ? " 
        

        }]).then(function(answer){
            let roleID;
            for(let a = 0; a<res.length; a++){
                if(res[a].title === answer.role){
                    roleID = res[a].id;
                    console.log(roleID);
                }
            }
            connection.query(
                "INSERT INTO employee SET ?",{
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.roleID,
                },
                function(err){
                    if(err) throw err;
                    console.log("NEW EMPLOYEE ADDED");
                    startRun();
                }
            )
        });
    });
}

function quitApp(){
    connection.end();
};

