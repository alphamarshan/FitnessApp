var inquirer = require('inquirer');
var colors = require('colors');

function Client(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Client.prototype.printInfo = function() {
    console.log("\nName: " + this.name + "\nGender: " + this.gender + "\nAge: " + this.age);
};

var clientArray = [];

var questionnaire = function() {

    console.log("NEW CLIENT");

    inquirer.prompt([{
        name: "name",
        message: "Client name: "
    }, {
        name: "gender",
        message: "Gender: "
    }, {
        name: "age",
        message: "Age: "
    }]).then(function(answers) {

        var newClient = new Client(
            answers.name,
            answers.gender,
            answers.age);

        clientArray.push(answers.name);

        for (i = 0; i < clientArray.length; i++) {
        	var names = clientArray[i];
            console.log(names);
        }

    })
};

questionnaire();