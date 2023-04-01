const inquirer = require('inquirer')
const shapes = require('./lib/shapes.js')
const fs = require('fs')

const questions = [
    {
        type:'input',
        message:'What would you like your logo to say?',
        name:'text'
    },
    {
        type:'list',
        message:'What shape would you like?',
        name:'shape',
        choices:['triangle', 'square', 'circle']
    },
    {
        type:'input',
        message:'What color would you like the text?',
        name:'textColor'
    },
    {
        type:'input',
        message:'What color would you like the background?',
        name:'shapeColor'
    }
    
]

inquirer
.prompt(questions).then((response) => fs.writeFile('./examples/logo', generateSVG(), (err) =>
err ? console.log(err): console.log('logo created')))

generateSVG(){
    
}