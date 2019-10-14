/**Bezier Construction and Intro to 3D
 *--------------------------------------
 * Cardinal Splines
 * -The Tension Parameter (t): s=(1-t)/2
 * -spline made out cubic segments used to define a # of pts along curve
 * --Cardinal Curve interpolates pts minus first and last pts (except closed loop -then all pts interpolated)
 * -p1' = s(p2-p0)
 * -t = [0,1] --> tension: how 'stretched' the segment b/w beginning and end pt is
 * --t = 1 --> s = 0 gives us a line segment as derivative in hermite form = 0
 * --t = .6 --> s = .2 gives us small vectors (scaled by .2) leading to small 'wiggles'
 * ---ie releasing the tension of the "rope" that represents the curve
 * --t = .3 --> s = .35 gives us longer vectors --> 'wiggles' are larger as less tension on segment
 * Bezier Curves: DeCastlejau Construction (for 2 pts)
 * -Bezier curve w/ two control pts is a line segment
 * -Construct our curve only w/ linear interpolations b/w pts
 * -p0, p1, u = [0,1], f(u) = (1-u)*p0 + u*p1
 * Decastlejau Construction (for 3 pts)
 * -Quadratic segment w/ linear interpolations b/w pts
 * -three linear interpolations for each pt on curve
 * -take each pair of ctrl pts and linearly interpolate for the value of u, gives us two pts p3,p4
 * --then, linearly interpolate b/w the two pts created (p3,p4) in linear interpolation, giving us last pt p5
 * -p0,p1,p2, u =[0,1]
 * DeCastlejau to Divide a Curve
 * -p0,p1,p2 u = .5
 * -can use generated pts as new ctrl pts for a new curve that equals the first half of the curve
 * --ie p0, p01, and p012 are "new" control pts at u=.5
 * Subdivision
 * -good for drawing and intersection testing
 * -test two bezier curves for intersection:
 * --if convex hulls overlap: potential for curves to overlap
 * --to test for overlap: Split up convex hulls into segments then look if they overlap
 * --keep recursively dividng further and further if they overlap
 * In Practice: HTML Canvas, Illustrator, Inkscape
 * -Convert other polynomials to Bezier form
 * -bezierCurveTo(bx,by,cx,cy,dx,dy), must first use moveTo(ax,ay)
 * Drawing Parametric Curves
 * -Approximate as line segments
 * --simple: fixed sampling
 * --better: adaptive sampling
 * Drawing w/ Bezier Curves
 * -good adaptive sampling by subdivision (using DeCastlejau Algorithm)
 * -fast incremental algorithms
 * -control pts for segments for a larger curve give us the convex hull of subsegments
 * Arc-Length Parametrization
 * -hard to do in general
 * -numerical (~ as line segments)
 * -sample along curve and reparameterize by linearly interpolating at small segments of the curve
 * Curve Representations in nD
 * -f(u) - a0 + a1u + a2u^2 + ... + anu^n. Gives us 2D vector for each of the pts
 * -curve is a 1D object embedded in some space (2D, 3D,...)
 * -if have parametric representation of the curve, and want to find the tangent vector for points along curve:
 * --take the derivative of above parametric function, giving us a quadratic fxn that for each value of u, gives tangent vector
 * 
 * 
 * Moving onto 3D....
 * ------------------------------------------------
 * Some Math for 3D:
 * -coordinate systems: x pos to the right, y axis goes upwards
 * --z axis: right hand rule (comes 'out' towards you)
 * -right hand rule
 * --point hand in direction of x axis, curl fingers to mimic y axis. Z axis is ur thumb pointing out
 * -cross product: x-> x y-> = z->
 * --x-> and y-> are unit vectors; cross product of two unit vectors gives us a unit vector
 * What do we need to 'draw' in 3D?
 * -Have a world -> space objects are going to live in
 * -Make objects from primitives -> in 2D primitives are lines, polygons, rectanles etc
 * --in 3D: Primitives are triangles
 * -place objects in world: use transformations
 * -define color / style: how surface interacts w/ light, shadows, etc
 * -transform to screen: use transformations 
 * --think of display as a 'box' to keep visibility / distance information
 * -figure out what is visible: what is blocking what (use above info)
 * -color the pixels
 * 
 * Basic Shapes in 3D: Triangles
 * -Why? Can implement graphics pipeline efficiently 
 * Library: THREE.js
 * -Mid level graphics API
 * -relatively easy to get started
 * -takes care of the messy bits (default values)
 * 
 * -allows us to work w/ meaning abstractions
*/