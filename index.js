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
        const { text, textColor, shape, shapeColor } = answers;
        let shapeInstance;

        switch (shape) {
            case 'Triangle':
                shapeInstance = new Triangle(shapeColor);
                break;
            case 'Circle':
                shapeInstance = new Circle(shapeColor);
                break;
            case 'Square':
                shapeInstance = new Square(shapeInstance);
                break;
        }

        const svgContent = shapeInstance.render();
        const textElemet = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        const finalSvg = svgContent.replace('</svg>', `${textElemet}</svg>`);

        fs.writeFileSync('logo.svg', finalSvg);
        console.log('Generated logo.svg');
    })
    .catch(error => {
        console.error('Error:', error);
    });