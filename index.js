#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: 'Enter first number', type: 'number', name: 'firstName' },
    { message: 'Enter second  number', type: 'number', name: 'secondNumber' },
    {
        message: 'select one of the opertors to perform action',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
if (asnwer.operator === 'Addition') {
    console.log(asnwer.firstName + asnwer.secondNumber);
}
else if (asnwer.operator === 'Subtraction') {
    console.log(asnwer.firstName - asnwer.secondNumber);
}
else if (asnwer.operator === 'Multiplication') {
    console.log(asnwer.firstName * asnwer.secondNumber);
}
else if (asnwer.operator === 'Division') {
    console.log(asnwer.firstName / asnwer.secondNumber);
}
else {
    console.log('please select valid operator');
}
