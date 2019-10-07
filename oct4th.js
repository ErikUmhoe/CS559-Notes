/*Matrices in APIs / Canvas, Rotations and Rotation Matrices, Intro Shapes and Curves */

/**
 * Matrices and Coordinate Systems
 * -Three Columns:
 * -- Where does x axis go? 
 * -- Where does y axis go? 
 * -- Where does the origin go? 
 *  | a b c |  --> A column says where x axis goes
 *  | a b c |  --> B column says where y axis goes
 *  | 0 0 1 |  --> C Columns says where origin goes
 *  Transform Rectangle to skewed parallelogram on line y=x:
 *  --need to tip over the y axis 45 degrees, x axis stays the same
 *  --move origin from (0,0) to (1,1). Resulting in matrix below
 *  |1 1 1| --B Column is 1,1 as we are moving the y axis along the line of y = x
 *  |0 1 1|
 *  |0 0 1|
 * Implementation in APIs
 * -Canvas coordinates ("base")
 * -Current coordinate system (map to "base" --> this map is a matrix, M)
 * -Transformation commands (T) multiply on the right
 * -save = copy current matrix (push onto stack)
 * -restore = return to previous matrix (pop from stack)
 * - (M * T) -> M' == applying transformation to the current coordinate system
 * Working Directly with the Matrix
 * -context.transform(a,b,c,d,e,f): 
 *|a c e| 
 *|b d f|
 *|0 0 1|
 -Context.save() - adds identity matrix to the stack
 -if apply another transformation (ie translate (tx,ty))
 --command turned into transformation matrix, T
 --then multiply M * T --> result becomes our new current matrix
 --if apply another transformation, ie rotation R, we then multiply by R on the right
 -- M * T * R is now kept on the top of the stack
 --apply another save() --> Take current matrix (MTR) and add another copy to the top of the stack, setting that to the current matrix
 --more transformations now just apply to that, ie scale S causes current Matrix to be MTRS, with MTR below it on stack
 --when apply restore() --> deletes current matrix (top of matrix stack), ie getting rid of MTRS, leaving our new current matrix as MTR
 
 Using the Matrix: Oriented Particles
 -"Boids" - bird like objects (they flock)
 -keep a constant speed
 -change direction slowly (they turn)
 -more generally: controlled acceleration and turning
 Representation of Particles
 -Particles have a state: 
 --position (x,y)
 --velocity (vector): their speed is 1. (vx,vy)
 --angle of orientation and a speed (theta,v) {instead of velocity vector} along w/ position (x,y) 
 Drawing the Particles
 -face the direction of travel, either by:
 --compute the angle of rotation and then rotate, ie (x,y) and (vx,vy), compute angle with tangent(theta) = vy/vx
 --- useful function: Math.atan2(vx,vy) finds this angle
 --build matrix 
 |vx vy 0|
 |vx vy 0|
 |0  0  1|

 Update:
 -Position + velocity
 --Position Updates: add velocity (* time?)
 --Velocity Updates: 
 ---Keep magnitute (length of vector)
 ---Change angle a little
 ---Rotate
 --Stepwise update: 
 --- p-> = p-> + v->
----- v-> = Av-> where A is a rotation matrix

Local Models (Flocking)
-decide how to turn by looking @ neighbors and world
-each boid decides independently
-interesting behaviors emerge from simple rules
--flock (aling with neighbors)
--chase / avoid

Rotation Matrices
-preserve distance (unit vectors)
-preserve angles (orthogonal)
-preserve handedness (determinant if positive)
--handedness --> keeps sequence of points the same, ie for triangle ABC, still ABC even after rotate
-orthonormal, positive matrices
--closed under multiply
--inverse is transpose
A 2D Rotation Matrix
|cos(theta) -sin(theta)|
|sin(theta)  cos(theta)|   --> gives rotation matrix for rotation theta
--Plug into transformation matrix
Things we cannot do w/ Rotation Matrices
- if we multiply by a scalar or add another rotation to another rotation matrix, we won't get another rotation matrix
-- ie: rotation by 90 degrees by scalar a --> 
|0 -1| * a =/=> not a rotation matrix. OR |1 0| (0 deg rot) + |1 0|=/=> rotation matrix
|1  0|                                    |0 1|               |0 1| 
--Problem: cannot do linear interpolation
--- ie applying 90 deg rotation w/ 
interpolate |1 0| and |0 -1| to become a 45 degree rotation we get  |.5 -.5|
            |0 1|     |1  0|                                        |.5  .5| =/=> not a rotation matrix!

Linear interpolation of Rotations
-interpolate an interpolatable representation
 */