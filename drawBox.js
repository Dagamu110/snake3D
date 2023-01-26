function drawBox( p, pos, w, color, stroke=0  ){
    p.push()

    p.translate( pos.x * w + w/2,
        -pos.y * w - w/2,
        pos.z * w + w/2 )

    p.stroke( stroke )
    p.strokeWeight( 2 )
    p.fill( color )
    p.box( w )

    p.pop()

    p.noStroke()
    p.fill( ...color, 40 )

    p.push()
    p.rotateX( p.PI/2 )
    p.translate( pos.x * w + w/2, pos.z * w + w/2, 0)
    p.plane( w )
    p.pop()

    p.push()
    p.translate( pos.x * w + w/2, -(pos.y+1) * w + w/2, 0)
    p.plane( w )
    p.pop()

    p.push()
    p.rotateY( -p.PI/2 )
    p.translate( pos.z * w + w/2, -(pos.y+1) * w + w/2, 0)
    
    p.plane( w )
    p.pop()
}
