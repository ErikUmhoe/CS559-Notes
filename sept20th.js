/*
Double Buffering --> One that is drawn to (back buffer) and one that is shown on display (front buffer)
Draw to back buffer,  display front buffer, then switch. If not ready; old picture is shown

When do we draw?
-Event-based: ie a button click causes a drawing function to fire
-Polling loop based: loop in application that runs indefinitely, redrawing / drawing the image every time the loop is ran

Why not animation loop?
-Redraw and wait() not sufficient: Loop looks more like
        Clear Screen
        Draw Image
        Check for inputs and respond
        Computations, updates

Browsers are event-based --> timer as an event source
function draw(){
    //do something
    window.requestAnimationFrame(draw); --> Redraw whenever we need to do next redraw (triggers one redraw of drawing function)
                                        --> Everytime drawing function ran, new redraw triggered at the end
}
draw();

Animation in Canvas
*/
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let rects = [];
rects.push({x: 20, y:20, w:60, h:60});


context.fillRect(20,20,60,60);
/*Make rectangles clickable
1) Register event handler to the canvas */
canvas.onclick = function(event)
{
let mouseX = getXPos(event);
let mouseY = getYPos(event);
//inside rectangle?
if((mouseX>=20) && (mouseX<=80) && (mouseY>=20) &&(mouseY<=80))
{
    context.fillStyle = "red";
    console.log("test");
}
}

function draw() {
    rects.forEach((rect) => context.fillRect(rect.x, rect.y, rect.w, rect.h));
    //move or modify objects in the array
    window.requestAnimationFrame(draw);
}
draw();
let x = 0;
/**Animation with SVG */
let rect = document.getElementById("r1");
function animate(){
    // x++;
    // if(x%2 == 0)
    // {
    //     rect.setAttribute("x","30");
    // }
    // //move / modify objects (svg elements)
    // else{
    //     rect.setAttribute("x","10");
    // }
    window.requestAnimationFrame(animate);
}
animate();
/**Interaction with SVG */
rect.onclick=function()
{
    
    rect.setAttribute("fill","red");
    console.log("Rectangle clicked");
}

/*Drawing and Coordinate Systems
------------------------------------
Stroke and Fill:
-context.fillStyle="yellow"
-context.strokeStyle = "red"
-context.fillRect(30,30,30,30)
-context.strokeRect(30,30,30,30)
-Rectangle is drawn twice, one with fillRect one with strokeRect
-Stroke is the outline, fill is the main rectangle area
-Paths --> all the other shapes besides rectangles

Paths
*/
// context.beginPath();
// context.moveTo(x,y);
// context.lineTo(x2, y2);
// context.lineTo(x3, y3);
// context.fill();
// context.stroke()
/*Goes from x,y --> x2,y2 --> x3,y3 and then fills in the area formed by that shape
Paths: OPEN, CLOSED, DISCONNECTED
context.beginPath();
context.moveTo(100,100)
context.lineTo(110,120)
context.lineto(120,100)
context.closePath() --> Goes from 100,100 -> 110,120 -> 120,100 (forming a triangle), then closes our triangle with .closePath()
context.moveTo(150,100)
context.lineTo(160,120)
context.lineTo(170,100)
context.fill()
context.stroke()
--> Then, our pen moves to 150,100 -> 160,120 -> 170,100 (forming another triangle), and then this is not closed (so the top of 
    the triangle is left open). Once we call fill and stroke both shapes are filled in (but the second triangle still is 'open')

Drawing Order
-things drawn in order -> order we put objects in matter. Objects drawn first may be covered by objects drawn later
-Transparency: Alpha-blending (1-alpha) * old + alpha * new
    -Alpha is the % of the color on a pixel of a new object drawn at that position
    -

*/