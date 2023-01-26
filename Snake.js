const keyM = {
    q: new p5.Vector(  0,  1,  0 ),
    e: new p5.Vector(  0, -1,  0 ),
    w: new p5.Vector(  0,  0, -1 ),
    s: new p5.Vector(  0,  0,  1 ),
    a: new p5.Vector( -1,  0,  0 ),
    d: new p5.Vector(  1,  0,  0 )
}

function Snake( settings ){

    this.pos = new p5.Vector( 0, 0, 0 )
    this.vel = new p5.Vector( 0, 0, 0 )
    this.length = 0
    this.tail = []

    this.update = function(){

        if( this.length == this.tail.length ){
            for (let i = 0; i < this.tail.length - 1; i++) {
               this.tail[i] = this.tail[ i + 1 ].copy()
            }
        }

        this.tail[ this.length - 1 ] = this.pos.copy()

        this.pos.add( this.vel ) 
    }

    this.changeVel = function( newVel ){
        let inverseV = p5.Vector.mult( newVel, -1)
        this.vel = !this.vel.equals(inverseV) || !this.length ? newVel : this.vel
    }

    this.simpleAI = function( fruit ){

        if( this.pos.x != fruit.x ){
            this.changeVel( new p5.Vector(
                Math.sign( game.fruit.x - this.pos.x ), 0, 0
            ))
        } else if( this.pos.y != fruit.y ){
            this.changeVel( new p5.Vector(
                0, Math.sign( game.fruit.y - this.pos.y ), 0
            ))
        } else if( this.pos.z != fruit.z ){
            this.changeVel( new p5.Vector(
                0, 0, Math.sign( game.fruit.z - this.pos.z )
            ))
        } 
    }

    this.constrainMode = function( p, rows, columns, depth ){
        this.pos.x = p.constrain( this.pos.x, 0, rows - 1 )
        this.pos.y = p.constrain( this.pos.y, 0, columns - 1 )
        this.pos.z = p.constrain( this.pos.z, 0, depth - 1 )

    }
    

}
