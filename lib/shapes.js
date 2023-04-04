class shape{
    constructor(textColor, shapeColor,text){
        this.textColor=textColor;
        this.shapeColor = shapeColor;
        this.text=text;
    }


  
      
}

class circle extends shape{
    constructor(textColor, shapeColor, text){
        super(textColor, shapeColor, text)
    }

    renderSVG(){
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}" /><text x="150" y="100" text-anchor="middle" font-weight="bold" font-size="2em" fill="${this.textColor}">${this.text}</text></svg>`

    }

}

class square extends shape{
    constructor(textColor, shapeColor, text){
        super(textColor, shapeColor, text)
    }

    renderSVG(){
       return `<svg width="300" height="200"><rect x="0" y="0" width="150" height="150" style="fill:${this.shapeColor}" /><text x="75" y="75" text-anchor="middle" fill="${this.textColor}" font-weight="bold" font-size="2em">${this.text}</text></svg>`

    }
}

class triangle extends shape{
    constructor(textColor, shapeColor, text){
        super(textColor, shapeColor, text)
    }

    renderSVG(){
        return `<svg width="300" height="200"><polygon points="150,0 0,340 300,340" style= "fill:${this.shapeColor}"></polygon><text x="150" y="125" text-anchor="middle"  fill="${this.textColor}" font-weight="bold" font-size="2em">${this.text}</text></svg>`

    }
   
}

module.exports= {
    triangle,
    square,
    circle
}