const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

class LogoGenerator {
  constructor() {}

  async promptUser() {
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters):',
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
        message: 'Enter shape color (keyword or hexadecimal):'
      }
    ];
    return inquirer.prompt(questions);
  }

  generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeInstance;

    switch (shape) {
      case 'Triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'Circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'Square':
        shapeInstance = new Square(shapeColor);
        break;
    }

    const svgContent = shapeInstance.render();
    const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return svgContent.replace('</svg>', `${textElement}</svg>`);
  }

  async run() {
    try {
      const answers = await this.promptUser();
      const finalSvg = this.generateSVG(answers);
      fs.writeFileSync('logo.svg', finalSvg);
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

const logoGenerator = new LogoGenerator();
logoGenerator.run();
