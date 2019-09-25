//Anonymous Functions
// let greek = ["alpha", "omega", "gamma"];
// //e is the array element, i is the index in the array
// //Prints the element and it's index
// greek.forEach(function(e, i){ console.log(`${i} = ${e}`); });

// greek.array.forEach( (e,i) => 
//     console.log(`${i} = ${e}`));

/*
Attach code to events 
----------------------------------
Attach code to the window.onload property so that it executes a function when the page loads
*/
window.onload = function()
{
    console.log("Page finished loading");
}
function drawFunction(){
    let canvas = document.getElementById("mycanvas");
    //draw onto canvas.....
    let context = canvas.getContext("2d");

    context.fillRect(20,20,40,80); //xcord, ycord, width, height. Automatically last color assigned --> default black
    context.fillStyle = "red";
    context.fillRect(40, 60, 40, 80);
    context.fillRect(100, 100, 30, 30);
    /*Canvas is an immediate mode API
    So when drawing command is sent, it is executed immediately
    this calls a function in the API and then fills the canvas by coloring pixels, and then the function is gone / not remembered
    So, these objects cannot be changed once drawn as API only knows results of draw command (which is the image) */
    /*
    Retained Mode API - drawing commands create objects which are drawn when appropriate
    These objects can be referenced again / are stored
    SVG is a retained mode API
    Graphics objects are elements in the DOM tree and are just like HTML elements
        Handle events, can be styled, etc
    */
   let rect = document.getElementById("rect1");
   rect.setAttribute("fill", "purple");

   /* Animation -> When do we draw / redraw, how to keep track of events?
   -------------------
    Flicker Based Displays: Film, LCD, CRT
        -have backlight that flashes, pixel matrix that changes capacity --> light source that turns on / off
        -flicker fusion --> allows images to be shown on flicker based displays / constant image that moves
            -frame rate is high enough
                - ~> 50 frames per second, general goal is 60 fps
                - fix: generate 30fps but flash image twice
            -need consistency in timing
                -if time b/w images not constant --> no effect
    Animation and Redraw
        -Erase and redraw: Show image, then erase, and then draw new pictures to show 'movement'
            -Problem: might not be able to draw fast enough, partial picture, still in process of drawing
            when the image is shown
        -Display Synchronization and Frame Lock:
            -synchronize whole system to display rate, and ensure that drawing happens at a point when we are
            ready to draw / show --> always start drawing at right point in time
            -hard to do -> need to know how long it takes to draw
            -Fix: start drawing in an external buffer, and then once done drawing in buffer, at next timepoint
            push buffer's contents to the screen
        -Buffering and Double Buffering
            -Two buffers that each store an image, one draw buffer and one display buffer
            -Display buffer is pushed to display, and draw into draw buffer. Buffers are then swapped once an image is pushed to screen
            
   */

}
//Runs drawFunction when the window loads
window.onload = drawFunction;
//WRONG: window.onload = drawFunction() --> does nothing as drawFunction() returns nothing

