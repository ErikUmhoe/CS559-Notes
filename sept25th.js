/*
 *  Order: Translate and Scale
 --------------------------------
 Translate then Scale OR Scale then Translate
 -Switching order changes results
 -Translate then Scale: Translate one to the right (move xcord one right)
 --Then, if scale by two: new cord system stays at (1,0) but will be stretched out by 2
 -Scale then Translate: Scale by 2 will keep coordinate system at (0,0) but change scale to 2
 --When translate: new cord system starts at (2,0), not (1,0)
 Composition:
 -Transformations compose
 -Composition is NOT commutative
 Scale about point
 {
    context.fillRect(10,10,10,10);
    translate(-px,-py);  --> translate(-10,-10) move coordinate system left / up 10
    scale(sx,sy); --> ie scale(2,2) to make the rectangle twice as big
    translate(10,10;) --> move newly created rectangle back to (10,10)
    context.fillRect(10,10,10,10);
 }
 -want to perform scale around (x, y) --> (10,10)
 */
let canvas = document.getElementById("mycanvas");
//draw onto canvas.....
let context = canvas.getContext("2d");
 function animate()
 {
   context.save();
   context.fillStyle="orange";
   context.strokeStyle="black";
   context.fillRect(10,10,10,10);
   context.translate(-10,-10);
   context.scale(2,2);
   context.translate(10,10);
   context.strokeRect(10,10,10,10);
   context.restore();

   context.fillStyle ="red";
   context.strokeStyle = "blue"
   context.fillRect(100,20,10,10);
   context.translate(10,10);
   context.scale(2,2);
   context.translate(-10,-10);
   context.strokeRect(100,20,10,10);
}
 animate();

 /*
 translate(10,10)
 scale(2,2)
 translate(-10,-10)
 context.fillRect(10,10,10,10)
 */

 /**
  * Moving objects vs moving coordinates
  * -Backwards: from the object
  * -Forwards: from the coordinate system
  */
 
  /**Mirror Reflections
   * -scale(-1,1); // flip x axis (-x to the right, +x to the left)
   * -translate(tx,0)  --> tx == canvas.width, moves x axis all the way to the right
   * 
   * -scale(1,-1) //flip y axis (-y on top, +y on bottom)
   * -translate(0, -canvas.height)
   * */