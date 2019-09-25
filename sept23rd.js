/**
 * Transparency
 * -Alpha-blending: (1-alpha)*old + alpha*new
 * Save and Restore
 * -context.save() --> change styles --> context.restore();
 * --fills in the context settings (ie fill and stroke style) to the previously saved state
 * 
 * Coordinates
 * ------------------------------------------------------
 * -Points (x,y) are interpreted in the current coordinate system (ie of the canvas)
 * --Canvas: origin at top left, x to the right in 'html pixels', y down in 'html pixels'
 * Different Coordinate Systems
 * --Page relative coordinate system is event.clientX / clientY
 * --so need to convert to the position in the canvas
 * {
 *  canvas.onmousemove = function(event)
    * {
        * let box = event.target.getBoundingClientRect()
        * let x = event.clientX - box.left;
        * let y = event.clientY - box.top;
    * }
 * }
 * Composed Objects --> Change Position
 * -Need to move objects together, ie if a group of three rectangles -> need to move all three rectangles
 * -Easy way: add a variable to the positions of all of the composed objects to move them together
 * -Better way: translate
 * {
    * let x = 60;
    * let y = 10;
    * context.save()
    * context.translate(x,y); --> tells canvas to move everything we draw from now on 60px right, 10px down
    * context.fillRect(0,0,50,30) --> (60,10)
    * context.fillRect(10,10,10,10) --> (70,20)
    * context.fillRect(30,10,10,10)
    * context.restore()
 * }
 * Translate: Move everything
 * -Translates compose
 * -translate(10,10) x 3 ==> translate(30,30)
 * Move Objects or Coordinates?
 * -Translates just change definition of coordinate system --> moves origin of coordinate system
 * 
 * Instancing: Create an object once, use it again
 * -put drawing commands into functions / units that can be called multiple times (ie function to draw a snowman)
 * --by redefining coordinate system, we can use these functions to draw anywhere
 * Transformations
 * -Transformation apply to all points
 * -moving objects vs moving coordinate systems
 * -transformations compose
 * -use transformations to get convenient coordinates
 * -use transformations to build hierarchy
 * Scale Transformation
 * -context.scale(2,2) --> stretch x and y coord by 2
 * -ie context.fillRect(20,20,20,20) is equivalent to
 * -context.scale(2,2) --> context.fillRect(10,10,10,10)
 * -works as a change in coordinate system (turns (1,1) to (2,2))
 * Non-Uniform Scale
 * -context.scale(2,1)
 * -Flip X
 * --context.scale(-1,1) then context.fillRect(10,10,10,10) starts at 10,10 then goes to left, not the right
 * Multiple Scales --> Scales compose
 * -context.scale(2,1) , context.scale(1,2), context.scale(3,3) == context.scale(6,6)
 * Scale can make things move
 * -context.scale(2,2) -> context.fillRect(10,10,10,10)
 * -context.scale(2,2) -> context.fillRect(10,10,10,10)
 * -context.scale(2,2) -> context.fillRect(10,10,10,10)
 * -one rectangle (20,20,20,20),  a second double the size at (40,40,40,40), third at (80,80,80,80)
 */