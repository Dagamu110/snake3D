function guideLines(p){

        p.strokeWeight(3)

        var bw = game.settings.boxWeigth

        // Limits
        p.stroke( 255, 100 )
        p.noFill()

        p.push()
        p.translate( game.rows * bw / 2,-game.columns * bw / 2 ,0)
        p.plane( 
            game.rows * bw,
            game.columns * bw,
            )
        p.pop()

        p.push()
        p.translate( 0, -game.columns * bw / 2, game.depth * bw / 2)
        p.rotateY(p.PI/2)
        p.plane( 
            game.rows * bw,
            game.columns * bw,
            )
        p.pop()

        p.push()
        p.translate( game.rows * bw / 2, 0, game.depth * bw / 2)
        p.rotateX(p.PI/2)
        p.plane( 
            game.rows * bw,
            game.columns * bw,
            )
        p.pop()

        // X Axis
        p.stroke( 255, 0, 0  );
        p.line( 0, 0, 0, 1000, 0, 0 )

        // Y Axis
        p.stroke( 0, 255, 0  );
        p.line( 0, 0, 0, 0, -1000, 0 )

        // Z Axis
        p.stroke( 0, 0, 255 );
        p.line( 0, 0, 0, 0, 0, 1000 )

}
