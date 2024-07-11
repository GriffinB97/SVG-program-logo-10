const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'text',
            message: 'enter text (up to 3 characters):',
            validate: input => input.length <= 3 || 'Text should be up to 3 characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'enter shape color (keyword or hexadecimal):'
        }
    ])
    .then(answers => {
        
    })