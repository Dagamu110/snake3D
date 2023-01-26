function Game( p ){

    this.rows = 15      // X
    this.depth = 15     // Y
    this.columns = 15   // Z

    this.settings = {
        simpleAI: true,
        constrainMode: true,
        boxWeigth: 40,
        fruitColor: [255, 0, 0],
        snakeColor: [255]
    }


    this.snake = new Snake( this.settings )
    this.fruit = p.createVector()

    this.newFruit = function(){
            
        this.fruit = new p5.Vector(
           p.floor( p.random( this.rows ) ),
           p.floor( p.random( this.depth) ), 
           p.floor( p.random( this.columns))
        )

    }

    this.newFruit()

}

var game;
