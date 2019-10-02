/**Linear Transformations
 * -Linear combo of inputs (ie x' = ax+by. y'=cx+dy)
 * -Rotate, scale, skew has this form
 * -linear transpos as matrices
 * -Matrix notation: convention is to right multiply
 * Transformations as Linear Operators
 * -x'-> = f(x->)
 * -x'-> = M * x->
 * Composition of Transformations
 * -x'-> = h(g(f(x->)))
 * -x'-> = (hogof)x->
 * -x'-> = (HGF)x-> == HGFx-> == h(g(f(x->)))
 * 
 * Properties of Linear Transformations
 * -Composition as Matrix Multiplication
 * -Lines remain lines
 * -ratios are preserved
 * -set is closed under composition
 * -zero is preserved
 * 
 * Affine Transformations
 * -Linear transformation plus translation
 * -x' = ax+by+tx
 * -y' = ax+by+ty
 *  -Afine Transformations
 * --How to compose: 
 * -- f(x->) = Fx-> + t->
 * -- g(x->) = Gx-> + u->
 * -- g(f(x->)) = g(Fx-> + t->) = GFx-> + Gt->+ u->
 * -Affine Transformations in nD are not linear in nD
 * -BUT They are linear in (n+1)D, ie affine transformations in 2D are linear in 3D
 * - x,y => x,y,w
 * -1D AFfine Transformations
 * --1D Linear: f(x) = sx. 1D Affine: f(x) = sx+t
 * -let 2d space be w=1: 1D points x are [x,1] in 2D
 * Translation in 1D is skew in 2D
 * - x' = x + t
 * |x'| = |1 t | |x|
 * |1 | = |0 1 | |1|
 * -- results in a translation along y=1 axis in 2d space
 * - w = 1 due to 0 1 in bottom of matrix
 * Homogeneous Coordinates
 * -embed an nD space in an (n+1)D space
 * -extra dimension is w
 * -project back to original space: divide by w
 * - |x| => |x/w|
 *   |y|    |y/w|
 *   |w|
 * -example:
 * |101| - represents affine transformation in 2D Space
 * |011|
 * |001|
 * -this matrix is a translation of x+1, y+1
 * |200|
 * |020|
 * |001| = double scale the current x,y coords ie 2x,2y
 * |201|
 * |021|
 * |001| = 2x+1 + 2y+1 ie translate x,y by 1 and then scale by two
 * -bottom row is always 001 for affine transformations
 */