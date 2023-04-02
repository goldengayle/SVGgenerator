const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const shapes = require('./lib/shapes.js')
const fs = require('fs')


const questions = [
    {
        type: 'maxlength-input',
        message: 'What would you like your logo to say?',
        name: 'text',
        maxLength: 3
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shape',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        message: 'What color would you like the text?',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'What color would you like the background?',
        name: 'shapeColor'
    }

]

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            return new Promise((resolve, reject) => {
                if (response.shape === 'circle') {
                    let svgFile = new shapes.circle(response.textColor, response.shapeColor, response.text).renderSVG()
                    resolve(svgFile)
                } else if (response.shape === 'triangle') {
                    let svgFile = new shapes.triangle(response.textColor, response.shapeColor, response.text).renderSVG()
                    resolve(svgFile)
                } else {
                    let svgFile = new shapes.square(response.textColor, response.shapeColor, response.text).renderSVG()
                    resolve(svgFile)
                }

            })
        })
        .then((svgFile) => fs.writeFile('./examples/logo.svg', svgFile, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')))
}


init()

