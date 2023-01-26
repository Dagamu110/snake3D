
// Sketch B:
new p5(function(p) {
    var scl, margin

    p.setup = function() {
        p.createCanvas(400, 200, p.P2D);  // <--- P2D
        scl = 10
        margin = 10
    };

    p.draw = function(b) {
        p.translate( margin, margin )
        p.background(30, 33, 50);

        p.noFill()
        p.strokeWeight(0.5)
        p.stroke(255)
        p.rect(
            0,
            0,
            game.rows * scl,
            game.depth * scl
        )

        p.fill( p.map( game.snake.pos.y, 0, game.columns, 120, 255 ) );
        p.noStroke()
        p.rect(
            game.snake.pos.x * scl,
            game.snake.pos.z * scl,
            scl,
            scl
        )
        p.fill( p.map( game.fruit.y, 0, game.columns, 120, 255 ) , 0, 0 )
        p.rect( 
            game.fruit.x * scl,
            game.fruit.z * scl,
            scl,
            scl
        )

    };
}, 'topView');

// Sketch B:
new p5(function(p) {

    var scl, margin

    p.setup = function() {
        p.createCanvas(400, 200, p.P2D);  // <--- P2D
        scl = 10
        margin = 10
    };

    p.draw = function(b) {
        p.translate( margin, margin )
        p.background(30, 33, 50);

        p.noFill()
        p.strokeWeight(0.5)
        p.stroke(255)
        p.rect(
            0,
            0,
            game.rows * scl,
            game.columns * scl
        )

        p.fill( p.map( game.snake.pos.z, 0, game.depth, 120, 255 ) );
        p.noStroke()
        p.rect(
            game.snake.pos.x * scl,
            game.columns * scl + margin - (game.snake.pos.y + 2) * scl,
            scl,
            scl
        )
        p.fill( p.map( game.fruit.z, 0, game.depth, 120, 255 ) , 0, 0 )
        p.rect( 
            game.fruit.x * scl,
            game.columns * scl + margin - (game.fruit.y + 2) * scl,
            scl,
            scl
        )

    };
}, 'XYView');

// Sketch B:

new p5(function(p) {

    var scl, margin

    p.setup = function() {
        p.createCanvas(400, 200, p.P2D);  // <--- P2D
        scl = 10
        margin = 10
    };

    p.draw = function(b) {
        p.translate( margin, margin )
        p.background(30, 33, 50);

        p.noFill()
        p.strokeWeight(0.5)
        p.stroke(255)
        p.rect(
            0,
            0,
            game.depth * scl,
            game.columns * scl
        )

        p.fill( p.map( game.snake.pos.x, 0, game.rows, 120, 255 ) );
        p.noStroke()
        p.rect(
            game.depth * scl + margin - (game.snake.pos.z + 2) * scl,
            game.columns * scl + margin - (game.snake.pos.y + 2) * scl,
            scl,
            scl
        )
        p.fill( p.map( game.fruit.x, 0, game.rows, 120, 255 ) , 0, 0 )
        p.rect( 
            game.depth * scl + margin - (game.fruit.z + 2) * scl,
            game.columns * scl + margin - (game.fruit.y + 2) * scl,
            scl,
            scl
        )

    };
}, 'ZYView');
