
// Main Sketch:
new p5(function(p) {

    p.keyPressed = function (){
        if( keyM[ p.key ] ){
            game.snake.changeVel( keyM[p.key] )
        }
    }

    p.setup = function() {
        p.createCanvas( 600, 550, p.WEBGL);  // <--- WEBGL
        game = new Game( p )
    };

    p.draw = function(b) {

        p.background(30, 33, 50);
        p.frameRate(3)
    
        p.camera( 1000, -500, 1000, 0, 0, 0)

        var bw = game.settings.boxWeigth

        guideLines(p)
        
        snakeBoxes = [...game.snake.tail, game.snake.pos ]
        snakeBoxes.forEach( boxPos => drawBox( p, boxPos, bw, game.settings.snakeColor ) )

        drawBox( p, game.fruit, bw, game.settings.fruitColor, [150, 0, 0] )


        if( game.settings.simpleAI ){
            game.snake.simpleAI( game.fruit )
        }

        game.snake.update()

        if ( p5.Vector.sub( game.snake.pos, game.fruit ).mag() == 0) {
            game.snake.length++
            game.newFruit()
        }

        if( game.settings.constrainMode ){
            game.snake.constrainMode( p, game.rows, game.columns, game.depth )
        } else {
            let colX = game.snake.pos.x > game.rows - 1 || 0 > game.snake.pos.x
            let colY = game.snake.pos.y > game.columns - 1 || 0 > game.snake.pos.y
            let colZ = game.snake.pos.z > game.depth - 1 || 0 > game.snake.pos.z

            if( colX || colY || colZ ){
                game = new Game( p )
            }
        }



    };

}, 'mainView');

