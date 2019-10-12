/**Curves Cont.
 *------------------------------------------------
 Common Representation: Hermite Form
 -Specify: 2 pts and 2 derivatives
 -po, po'-> and p1, p1'->
 -start and end point and the derivatives of the curve at those points
 Hermite Form to Coefficient Form
 -a0u^0 + a1u^1 + a2u^2 + a3u^3
 -How to figure out coefficients as function of pts
 -a0 = p0, a1 = p0', a2=(-3p0 -2p0' + 3p1 - p1'), a3=(2p0 + p0'- 2p1 + p1')
 -write as a matrix:
                        |1   0 0  0|  |p0 |   |p0 |
 [u^0 u^1 u^2 u^3]  *   |0   1 0  0|  |p0'| * |p0'|
                        |-3 -2 3 -1|  |p1 |   |p1 | === f(u)
                        |2   1-2  1|  |p1'|   |p1'|
-to transform other points / derivatives back to cubic form, just need to use middle matrix
Hermite Equations
- for u^0, u^1, u^2, u^3:
-f(u) = (1-3u^2 + 2u^3)p0 + (u-2u^2 + u^3)p0' + (3u^2 - 2u^3)p1 + (-u^2 + u^3)p1'
--each points / derivatives coefficient is its 'weight'--> Each control pt has a function 
--ie p0 function is b0(u), p0' function is b1(u)
--basis form representation
--b0(t)p0 + b1(t)p1 + b2(t)p2 + b3(t)p3 +..... = f(t)
--want continuity desired (curve smooth enough)
C(1) Curves w/ Hermite Segments
-for the pts we use to specify a curve, each "part" b/w pts is a hermite segment
-make sure derivative of end of prev segment is the same as the derivative for the start of the next segment
What if we don't know the derivatives?
-How to interpolate pts: just give set of pts and get back a curve of cubic segments that interpolates thru pts
-give p0, p1, p2, p3, .... , pn --> get curve that interpolates thru the pts
Interpolate Pts: Cardinal Spline
-define a set of pts ie p1,p2,p3,p4 for one cubic segment
-use hermite machinery to turn into cubic segment
-use cubic splines to generate the derivatives at that point by looking at neighbors in each direction
--ie for p1, use p0 and p2 to get derivative by using direction vector b/w p0 and p2 for p1s derivative vector
--problem: Difference vectors are too long -> use parameter to scale the vector
-ie p1 derivative vector = s(p2-p0)
--typical s=.5: Catmull-Rom Spline
-tension(t): s=(1-t)/2
Why is C(2) interpolation harder? --> Locality
-For C(2), want 2nd derivative constant at 2 pts
--Hermite Form: Specify two pts, each pt w/ a 1st and 2nd derivative
-ie p0, p0', p0'' and p1, p1', p1''
Bezier Controls or Hermite Segments
-use pts to control Hermite Segments
-specifiy derivatives using two additional pts
-ie starting pts, p0 and p3
-two additional pts; p1 and p2
-derivative for p0 = vector from p0 to p1 ie 3(p1-p0)
-derivative for p3 = vector from p2 to p3 ie 3(p3-p2)
Properties of Bezier Curves
-any # of pts n > 1 (n = 2 is a line segment)
-they are polynomials of degree n - 1
-they interpolate first and last pts
-1st derivative at beginning / end comes from 2 pts
-1st derivative is scaled by the degree of the polynomial
-they stay inside convex hull of pts
-they are affine invariant
-they are symmetric -> switch start and end pts = curve goes backwards
-they are variation diminishing -> # of times curve crosses arbitrary line is <= # of control pts - 1 = degree of curve

 */