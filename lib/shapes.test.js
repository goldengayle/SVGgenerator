const shapes =require('./shapes.js')


describe ('circle.renderSVG', ()=>{
    
    it('should return the svg code for a circle', ()=>{
        const shape = new shapes.circle("red", "white", "ruf")
        const result= shape.renderSVG()
        expect(result).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="100" fill="white" /><text x="150" y="100" text-anchor="middle" font-weight="bold" font-size="2em" fill="red">ruf</text></svg>`)
    })
    
})


describe ('square.renderSVG', ()=>{
    
    it('should return the svg code for a square', ()=>{
        const shape = new shapes.square("red", "white", "ruf")
        const result= shape.renderSVG()
        expect(result).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="0" y="0" width="150" height="150" style="fill:white" /><text x="75" y="75" text-anchor="middle" fill="red" font-weight="bold" font-size="2em">ruf</text></svg>`)
    })
    
})

describe ('triangle.renderSVG', ()=>{
    
    it('should return the svg code for a triangle', ()=>{
        const shape = new shapes.triangle("red", "white", "ruf")
        const result= shape.renderSVG()
        expect(result).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,0 0,340 300,340" style= "fill:white"></polygon><text x="150" y="125" text-anchor="middle"  fill="red" font-weight="bold" font-size="2em">ruf</text></svg>`)
    })
    
})