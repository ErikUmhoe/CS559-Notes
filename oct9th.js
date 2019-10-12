/**
 * Curves
 * ----------------------------------------------------------------
 * Tangent Vectors
 * -ine that touches curve at a point
 * -velocity and direction of the pen's travel along that curve
 * -derivative of position w/ respect to free parameter (vector)
 * --ie if curve: x-> = f(u) then tangent vector x'-> = f'(u)
 * Continuity
 * -Are the points next to each other? (Draw w/out lifting the pen)
 * -At a parameter value u: f(u-) = f(u+) --> no discontinuity
 * Discontinuity Ex
 * -piecewise linear segment: f(u) = if u < .5 then (u,0) else (u,1)
 * --discontinuity at u = .5 as f(u-) = 0 and f(u+) = 1
 * Derivative Discontinuity
 * -jump in direction / tangent
 * Continuity of a Set of Segments
 * -for a set of line segments: (a,b) (c,d) (e,f)
 * -the potentital discontinuities are when you switch from one to the next
 * -w/in a segment it's continuous, but at "connection points" there is a discontinuity if take derivative of that point
 * Continuity Conditions
 * -Curve is C(n) continuous if:
 * -All of its derivatives up to and including n are continuous ie C(n) -> C(0), C(1), ..., C(n)
 * --C(0): Positions continuous
 * --C(1): positions and tangents continuous
 * Speed Matters
 * -C(n): Continuity depends on parameterization (continuity in nth derivative)
 * -G(n): contuinity depends on direction (technically arc-length parameterization)
 * --For a curve, when transform curve into arc-length parameterization, then have continuity in the first derivative
 * --don't look at length of 1st derivative: only direction
 * --if change in direction, not G(n) continuous. Else, is G(n) continuous
 * --simple: any scaling of tangent vectors
 * How much Continuity do we need?
 * -C(1): No corners
 * -C(2): Looks smooth (usually for graphics)
 * -Higher:
 * --Important for airflow (ie airplane or boat design)
 * --Continuity of normal (light patterns)
 * PieceWise Polynomials
 * -Make curves from chains of simpler polynomials
 * -line segment chains(1st degree)
 * -chains of higher degree pieces
 * Why Pieces and Not Higher Degree?
 * -given n points, we can make an n-1 degree curve that interpolates them but:
 * --hard to compute and hard to control
 * --points also missing locality --> if change one of the pts a little bit, change everything on curve
 * Piecewise Polynomials
 * -parameterizations:
 * --Overall
 * --Unit per-piece
 * General Polynomials
 * -f(t) = a0 + a1t + a2t^2 +...+ ant^n
 * -f(t) = sum of ait^i for i from 0 to n
 * We Focus on Cubic Polynomials
 * -degree <= 3 ie f(t) = a0 + a1t + a2t^2 + a3t^3
 * -why:
 * --4 coefficients in a 4d space
 * -C(1) interpolative: goes thru 4 points
 * -C(2) non interpolative: approximates points but doesn't go thru
 * Representation for Cubics
 * -coefficient form: a0u^0 + a1u^1 + a2u^2 + a3u^3
 * -hard to see what hapes different values of a create (can we represent in another way?)
 * More convenient way of parameterization so that it is easier to define and change
 * Common Representation: Hermite Form
 * -specify 2 points and 2 derivatives --> allows us to define one cubic segment
 * -ie points p0, p1 and derivatives p0' and p1'
 * -from this; generate curve that interpolates beginning and end points (p0 and p1)
 * --need to find a way to convert derivatives and points back to coefficients of polynomial
 * --this is in the form of a linear combo, with each coefficient a0...a3 = p0 p1 p0' p1'
 */