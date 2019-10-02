/**
 * Hierarchical Modeling and Transformations
 * ---------------------------------------------------------
 * Make Objects out of Pieces
 * -Make complex pieces out of multiple simpler objects
 * -Use transformations to put objects into the coordinate system of the main object
 * -Objects = Trees or Parts
 * --Transformations in edges (or nodes) of tree to transform child object into coordinate system of parent object
 * --Reinstatiate objects
 * Scenes as Directed Acyclic Graphs
 * -Sharing objects, instances, transformations in edges
 * --- ie house --> door, window, roof --> window
 * Instancing in SVG
 * {
 *  <svg>
 * <rect id="asq" x="10" y="10" width="10" height="10" fill="aqua"/>
 * <use href="#asq" x="30"/> --> Another instantiation of the rectangle above with ID = asq at 30,10
 * </svg>
 * }
 * Instancing in SVG: Definitions
 * {
 * <svg>
 * <def>
 * <rect id="asq" width="10" height="10" fill="aqua"/> --> doesn't instantiate the rectangle just defines it
 * </def>
 *<use href="#asq" x="10" y="10"/>
 * <use href="#asq" x="30" y="10/> --> Another instantiation of the rectangle above with ID = asq at 30,10
 * --> Rectangle at 10,10 and 30,10
 * </svg>
 * }
 * 
 *  * Instancing and Grouping in SVG
 * {
 * <svg>
 * <def>
 * <rect id="asq" width="10" height="10" fill="aqua"/> --> doesn't instantiate the rectangle just defines it
 * </def>
 * <g id="foursq">
 * <use href="#asq" x="0" y="0"/>
 * <use href="#asq" x="20" y="0/>
 *  * <use href="#asq" x="0" y="0"/>
 * <use href="#asq" x="20" y="0/>
 * </g>
 * 
 * <use href="#foursq" x="40" />
 * <use href="#foursq" x="40" transform="translate(80,0), rotate(45)"/>
 * </svg>
 * -- Creates 3 sets of rectangles:
 * --- One at 0,0 : One at 40,0 : One at 80,0 but rotated 45 degrees around the top left corner
 * ---- Rotation is around where the X Axis lies --> for this rectangle, it is at 80,0
 * 
 * Transformations
 * ---------------------------------
 * Notation for Transformations
 * -Functions applied to points: Vector Notation, composition
 * -A(x,y) --> x',y' (apply function to create new coordinates from old coordinates)
 * 
 * Transformation Functions as Matrices
 * -Relevant transformations represented as a matrix
 * -Matrix is 'applied' to points
 * 
 * Vectors and Points
 * -In code: Lists / arrays of numbers. ie point = [x,y]
 * -vector = motion in coordinate system representing transformation from p1 -> p2
 * -- Vectors representing transformation from (0,0) / Origin of currently definted coordinate system
 * 
 * Vectors
 * -Add two vectors: ie [x1,y1] + [x2,y2] = [x1+x2, y]1+y2]
 * -Scale vectors: ie 5[x1,y1] --> same direction but twice as long = [5x1, 5y2]
 * -Linear Combinations: a x' + bx''
 * -Norm (length)
 * -Dot Product x-> dot y-> = component wise multiplication = x1y1 + x2y2
 * --- If dot product is 0: Vectors are orthogonal (90 deg angle b/w)
 * 
 * Row and Column Vectors:
 * -Both contain four numbers in same order
 * -Matrices of Different Shapes
 * -Matrices: Table of Numbers
 * -- set of row vectors
 * -- set of column vectors
 * 
 * Matrix Transpose:
 * -Rows become columns and columns become rows
 * 
 * Matrix Vector Multiplication
 * -Vector on the right
 * - 3x3 dot 3x1 = 3x1 matrix
 * 
 * Vector on the Left Multiplication
 * (1x3)^T dot (3x3)^T
 * 
 * 
 * 
 * }
 */