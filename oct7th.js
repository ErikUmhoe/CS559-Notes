/**SHAPES
 * 
 * Different Kinds of Shapes
 * -Curves - 1D
 * --Draw / pen, each point has two neighbors, lines locally
 * -Surfaces /  Areas - 2D
 * --Fill w/ Paint, each point has neighbors in all directions, disc locally
 * -Boundary of an area is a curve
 * 
 * Names for Shapes
 * -Some Shapes have names
 * --Circle (outside line) / disc (inner fill)
 * --Triangle
 * -Others do not have names
 * --Free-form
 * --How to describe them?
 * --- Shapes w/ names (and parameters)
 * ---- ie circle w/ cx, cy, v
 * --- shapes as a collection of simpler pieces
 * --- Approximations
 * ------ Stationary (grid based)
 * ------ Complex shapes as a collection of pieces
 * 
 * Represent Smooth Curves / Surfaces
 * -Typically draw by approximation
 * -need good ways to:
 * --describe
 * --analyze
 * --convert
 * --Cut curve into pieces, represent each piece, then have shape as sequence of the pieces
 * Finding a Good Approximation
 * -Pieces (how many, what kinds, how to make sure they fit together)
 * Describing Curves
 * -Some curves have names; line, line segment, ellipse, parabola, circular arc, etc...
 * -Some set of parameters to specify: radius of an arc, endpoints of a line
 * -Other curves do not have distinct names --> need a free-form representation
 * Curve Representations
 * -Implicit (test function) ie f(x,y) = 0
 * --Give the function points, and it will tell us if the point is on the shape if f(x,y) = 0
 * --Good for testing if shapes intersect, not good for drawing
 * -Parametric (implicit)
 * --y = f(x)
 * --x,y = f(t) for a free parameter t -> for each value of parameter t, give point on the curve
 * ---t is the "way along the path" or the point in time of the 'drawing process' for a curve
 * -Procedural / subdivision
 * --representations where we provide a procedural way of drawing a curve / getting to a curve
 * Implicit Representation
 * -f(x,y) = 0 indicates point is in the set (on the curve)
 * -Hard to draw as need to sample the points
 * -Generally used for geometric tests (inside / outside, collisions)
 * Example Curve:
 * -Implicit: x^2 + y^2 = 1
 * -Parametric: f(t) = cos(2*pi*t), sin(2*pi*t), t in [0,1]
 * 
 * A Subdivision Example
 * -Chaikin Corner Cutting
 * 1)Take a polygon
 * 2)Cut off all corners
 *  a)Cut segments at 1/4 and 3/4 (some weights on edges)
 * 3)Repeat
 * --Cutting corners 'smooths' shape --> repeat until desired shape
 * Subdivision
 * -each round (repeat until smooth enough)
 * --rules on how to smooth
 * --add new pieces
 * -How smooth is smooth enough? --> 'looks smooth' / repeat infinitely many times will converge to actual shape
 * -Mostly useful for 3D Surfaces, but unnecessary for 2D as we can represent w/ a parametric form
 * Infinitely Many Times?
 * -Design rules carefully, so that infinite repeats gives a continuous curve with a nice form
 * -This curve = limit curve
 * Parametric Forms
 * -x->=f(u)
 * -for a curve:
 * --u is a scalar (w/in convenient range: ie unit parametization [0,1])
 * --x-> is a point (in 2D or 3D)
 * --f is a function (R -> R^n)
 * Example: Line Segment
 * -Parametric Form:
 * - x-> = (1-u)a-> + b->
 * -a-> and b-> are the vectors for the points of the line segment
 * - x = Ax(u) and y = Ay(u) for A(a->, b->, u)
 * -one fxn vs fxn per dimension
 * -free parameter an shape parameter
 * -range of u: unit parameterization (u b/w [0,1])
 * The Free Parameter (u / t)
 * -index of points on the curve
 * -draw w/ a pen: time
 * --function is where pen is at time t
 * -not a property of the set of points
 * --many sets, different timings
 * Some Useful Parameterizations
 * -unit parameterization [0,1]
 * --ie line segment from 0->1 parameterized as (u,0), (1-u,0),(u^2,0) --> Pen changes speed as goes across line
 * -arc-length parameterization: point moves at a constant speed
 * --parameterization of a curve w/ pen moving @ constant speed across the curve
 * Tangent Vectors
 * -line that touches curve at a point
 * -velocity and direction of the pen's travel at each point on curve
 * -derivative of position w/ respect to free parameter
 * --x-> = f(u)
 * --x'-> = f'(u) gives the tangent vector at u
 * Continuity
 * -are the points next to each other --> draw w/out lifting the pen
 * -at a parameter value u: f(u-) = f(u+)
 * -discontinuities always at a specific point
 */