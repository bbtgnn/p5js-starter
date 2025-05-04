// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Applies a transformation matrix to the coordinate
         *   system. Transformations such as translate(),
         *   rotate(), and scale() use matrix-vector
         *   multiplication behind the scenes. A table of
         *   numbers, called a matrix, encodes each
         *   transformation. The values in the matrix then
         *   multiply each point on the canvas, which is
         *   represented by a vector.
         *
         *   applyMatrix() allows for many transformations to
         *   be applied at once. See Wikipedia and MDN for more
         *   details about transformations.
         *
         *   There are two ways to call applyMatrix() in two
         *   and three dimensions.
         *
         *   In 2D mode, the parameters a, b, c, d, e, and f,
         *   correspond to elements in the following
         *   transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
         *   passed in an array, as in applyMatrix([2, 0, 0, 0,
         *   2, 0]).
         *
         *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
         *   i, j, k, l, m, n, o, and p correspond to elements
         *   in the following transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
         *   0, 0, 1). They can also be passed in an array, as
         *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
         *   0, 0, 0, 0, 1]).
         *
         *   By default, transformations accumulate. The push()
         *   and pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling applyMatrix() inside the
         *   draw() function won't cause shapes to transform
         *   continuously.
         *   @param arr an array containing the elements of the
         *   transformation matrix. Its length should be either
         *   6 (2D) or 16 (3D).
         *   @chainable
         */
        applyMatrix(arr: any[]): p5;

        /**
         *   Applies a transformation matrix to the coordinate
         *   system. Transformations such as translate(),
         *   rotate(), and scale() use matrix-vector
         *   multiplication behind the scenes. A table of
         *   numbers, called a matrix, encodes each
         *   transformation. The values in the matrix then
         *   multiply each point on the canvas, which is
         *   represented by a vector.
         *
         *   applyMatrix() allows for many transformations to
         *   be applied at once. See Wikipedia and MDN for more
         *   details about transformations.
         *
         *   There are two ways to call applyMatrix() in two
         *   and three dimensions.
         *
         *   In 2D mode, the parameters a, b, c, d, e, and f,
         *   correspond to elements in the following
         *   transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
         *   passed in an array, as in applyMatrix([2, 0, 0, 0,
         *   2, 0]).
         *
         *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
         *   i, j, k, l, m, n, o, and p correspond to elements
         *   in the following transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
         *   0, 0, 1). They can also be passed in an array, as
         *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
         *   0, 0, 0, 0, 1]).
         *
         *   By default, transformations accumulate. The push()
         *   and pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling applyMatrix() inside the
         *   draw() function won't cause shapes to transform
         *   continuously.
         *   @param a an element of the transformation matrix.
         *   @param b an element of the transformation matrix.
         *   @param c an element of the transformation matrix.
         *   @param d an element of the transformation matrix.
         *   @param e an element of the transformation matrix.
         *   @param f an element of the transformation matrix.
         *   @chainable
         */
        applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): p5;

        /**
         *   Applies a transformation matrix to the coordinate
         *   system. Transformations such as translate(),
         *   rotate(), and scale() use matrix-vector
         *   multiplication behind the scenes. A table of
         *   numbers, called a matrix, encodes each
         *   transformation. The values in the matrix then
         *   multiply each point on the canvas, which is
         *   represented by a vector.
         *
         *   applyMatrix() allows for many transformations to
         *   be applied at once. See Wikipedia and MDN for more
         *   details about transformations.
         *
         *   There are two ways to call applyMatrix() in two
         *   and three dimensions.
         *
         *   In 2D mode, the parameters a, b, c, d, e, and f,
         *   correspond to elements in the following
         *   transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
         *   passed in an array, as in applyMatrix([2, 0, 0, 0,
         *   2, 0]).
         *
         *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
         *   i, j, k, l, m, n, o, and p correspond to elements
         *   in the following transformation matrix:
         *
         *
         *
         *   The numbers can be passed individually, as in
         *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
         *   0, 0, 1). They can also be passed in an array, as
         *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
         *   0, 0, 0, 0, 1]).
         *
         *   By default, transformations accumulate. The push()
         *   and pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling applyMatrix() inside the
         *   draw() function won't cause shapes to transform
         *   continuously.
         *   @param a an element of the transformation matrix.
         *   @param b an element of the transformation matrix.
         *   @param c an element of the transformation matrix.
         *   @param d an element of the transformation matrix.
         *   @param e an element of the transformation matrix.
         *   @param f an element of the transformation matrix.
         *   @param g an element of the transformation matrix.
         *   @param h an element of the transformation matrix.
         *   @param i an element of the transformation matrix.
         *   @param j an element of the transformation matrix.
         *   @param k an element of the transformation matrix.
         *   @param l an element of the transformation matrix.
         *   @param m an element of the transformation matrix.
         *   @param n an element of the transformation matrix.
         *   @param o an element of the transformation matrix.
         *   @param p an element of the transformation matrix.
         *   @chainable
         */
        applyMatrix(
            a: number,
            b: number,
            c: number,
            d: number,
            e: number,
            f: number,
            g: number,
            h: number,
            i: number,
            j: number,
            k: number,
            l: number,
            m: number,
            n: number,
            o: number,
            p: number
        ): p5;

        /**
         *   Clears all transformations applied to the
         *   coordinate system.
         *   @chainable
         */
        resetMatrix(): p5;

        /**
         *   Rotates the coordinate system. By default, the
         *   positive x-axis points to the right and the
         *   positive y-axis points downward. The rotate()
         *   function changes this orientation by rotating the
         *   coordinate system about the origin. Everything
         *   drawn after rotate() is called will appear to be
         *   rotated.
         *
         *   The first parameter, angle, is the amount to
         *   rotate. For example, calling rotate(1) rotates the
         *   coordinate system clockwise 1 radian which is
         *   nearly 57˚. rotate() interprets angle values using
         *   the current angleMode().
         *
         *   The second parameter, axis, is optional. It's used
         *   to orient 3D rotations in WebGL mode. If a
         *   p5.Vector is passed, as in rotate(QUARTER_PI,
         *   myVector), then the coordinate system will rotate
         *   QUARTER_PI radians about myVector. If an array of
         *   vector components is passed, as in
         *   rotate(QUARTER_PI, [1, 0, 0]), then the coordinate
         *   system will rotate QUARTER_PI radians about a
         *   vector with the components [1, 0, 0].
         *
         *   By default, transformations accumulate. For
         *   example, calling rotate(1) twice has the same
         *   effect as calling rotate(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling rotate(1) inside the
         *   draw() function won't cause shapes to spin.
         *   @param angle angle of rotation in the current
         *   angleMode().
         *   @param [axis] axis to rotate about in 3D.
         *   @chainable
         */
        rotate(angle: number, axis?: Vector | number[]): p5;

        /**
         *   Rotates the coordinate system about the x-axis in
         *   WebGL mode. The parameter, angle, is the amount to
         *   rotate. For example, calling rotateX(1) rotates
         *   the coordinate system about the x-axis by 1
         *   radian. rotateX() interprets angle values using
         *   the current angleMode().
         *
         *   By default, transformations accumulate. For
         *   example, calling rotateX(1) twice has the same
         *   effect as calling rotateX(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling rotateX(1) inside the
         *   draw() function won't cause shapes to spin.
         *   @param angle angle of rotation in the current
         *   angleMode().
         *   @chainable
         */
        rotateX(angle: number): p5;

        /**
         *   Rotates the coordinate system about the y-axis in
         *   WebGL mode. The parameter, angle, is the amount to
         *   rotate. For example, calling rotateY(1) rotates
         *   the coordinate system about the y-axis by 1
         *   radian. rotateY() interprets angle values using
         *   the current angleMode().
         *
         *   By default, transformations accumulate. For
         *   example, calling rotateY(1) twice has the same
         *   effect as calling rotateY(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling rotateY(1) inside the
         *   draw() function won't cause shapes to spin.
         *   @param angle angle of rotation in the current
         *   angleMode().
         *   @chainable
         */
        rotateY(angle: number): p5;

        /**
         *   Rotates the coordinate system about the z-axis in
         *   WebGL mode. The parameter, angle, is the amount to
         *   rotate. For example, calling rotateZ(1) rotates
         *   the coordinate system about the z-axis by 1
         *   radian. rotateZ() interprets angle values using
         *   the current angleMode().
         *
         *   By default, transformations accumulate. For
         *   example, calling rotateZ(1) twice has the same
         *   effect as calling rotateZ(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling rotateZ(1) inside the
         *   draw() function won't cause shapes to spin.
         *   @param angle angle of rotation in the current
         *   angleMode().
         *   @chainable
         */
        rotateZ(angle: number): p5;

        /**
         *   Scales the coordinate system. By default, shapes
         *   are drawn at their original scale. A rectangle
         *   that's 50 pixels wide appears to take up half the
         *   width of a 100 pixel-wide canvas. The scale()
         *   function can shrink or stretch the coordinate
         *   system so that shapes appear at different sizes.
         *   There are two ways to call scale() with parameters
         *   that set the scale factor(s).
         *
         *   The first way to call scale() uses numbers to set
         *   the amount of scaling. The first parameter, s,
         *   sets the amount to scale each axis. For example,
         *   calling scale(2) stretches the x-, y-, and z-axes
         *   by a factor of 2. The next two parameters, y and
         *   z, are optional. They set the amount to scale the
         *   y- and z-axes. For example, calling scale(2, 0.5,
         *   1) stretches the x-axis by a factor of 2, shrinks
         *   the y-axis by a factor of 0.5, and leaves the
         *   z-axis unchanged.
         *
         *   The second way to call scale() uses a p5.Vector
         *   object to set the scale factors. For example,
         *   calling scale(myVector) uses the x-, y-, and
         *   z-components of myVector to set the amount of
         *   scaling along the x-, y-, and z-axes. Doing so is
         *   the same as calling scale(myVector.x, myVector.y,
         *   myVector.z).
         *
         *   By default, transformations accumulate. For
         *   example, calling scale(1) twice has the same
         *   effect as calling scale(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling scale(2) inside the
         *   draw() function won't cause shapes to grow
         *   continuously.
         *   @param s amount to scale along the positive
         *   x-axis.
         *   @param [y] amount to scale along the positive
         *   y-axis. Defaults to s.
         *   @param [z] amount to scale along the positive
         *   z-axis. Defaults to y.
         *   @chainable
         */
        scale(s: number | Vector | number[], y?: number, z?: number): p5;

        /**
         *   Scales the coordinate system. By default, shapes
         *   are drawn at their original scale. A rectangle
         *   that's 50 pixels wide appears to take up half the
         *   width of a 100 pixel-wide canvas. The scale()
         *   function can shrink or stretch the coordinate
         *   system so that shapes appear at different sizes.
         *   There are two ways to call scale() with parameters
         *   that set the scale factor(s).
         *
         *   The first way to call scale() uses numbers to set
         *   the amount of scaling. The first parameter, s,
         *   sets the amount to scale each axis. For example,
         *   calling scale(2) stretches the x-, y-, and z-axes
         *   by a factor of 2. The next two parameters, y and
         *   z, are optional. They set the amount to scale the
         *   y- and z-axes. For example, calling scale(2, 0.5,
         *   1) stretches the x-axis by a factor of 2, shrinks
         *   the y-axis by a factor of 0.5, and leaves the
         *   z-axis unchanged.
         *
         *   The second way to call scale() uses a p5.Vector
         *   object to set the scale factors. For example,
         *   calling scale(myVector) uses the x-, y-, and
         *   z-components of myVector to set the amount of
         *   scaling along the x-, y-, and z-axes. Doing so is
         *   the same as calling scale(myVector.x, myVector.y,
         *   myVector.z).
         *
         *   By default, transformations accumulate. For
         *   example, calling scale(1) twice has the same
         *   effect as calling scale(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling scale(2) inside the
         *   draw() function won't cause shapes to grow
         *   continuously.
         *   @param scales vector whose components should be
         *   used to scale.
         *   @chainable
         */
        scale(scales: Vector | number[]): p5;

        /**
         *   Shears the x-axis so that shapes appear skewed. By
         *   default, the x- and y-axes are perpendicular. The
         *   shearX() function transforms the coordinate system
         *   so that x-coordinates are translated while
         *   y-coordinates are fixed.
         *
         *   The first parameter, angle, is the amount to
         *   shear. For example, calling shearX(1) transforms
         *   all x-coordinates using the formula x = x + y *
         *   tan(angle). shearX() interprets angle values using
         *   the current angleMode().
         *
         *   By default, transformations accumulate. For
         *   example, calling shearX(1) twice has the same
         *   effect as calling shearX(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling shearX(1) inside the
         *   draw() function won't cause shapes to shear
         *   continuously.
         *   @param angle angle to shear by in the current
         *   angleMode().
         *   @chainable
         */
        shearX(angle: number): p5;

        /**
         *   Shears the y-axis so that shapes appear skewed. By
         *   default, the x- and y-axes are perpendicular. The
         *   shearY() function transforms the coordinate system
         *   so that y-coordinates are translated while
         *   x-coordinates are fixed.
         *
         *   The first parameter, angle, is the amount to
         *   shear. For example, calling shearY(1) transforms
         *   all y-coordinates using the formula y = y + x *
         *   tan(angle). shearY() interprets angle values using
         *   the current angleMode().
         *
         *   By default, transformations accumulate. For
         *   example, calling shearY(1) twice has the same
         *   effect as calling shearY(2) once. The push() and
         *   pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling shearY(1) inside the
         *   draw() function won't cause shapes to shear
         *   continuously.
         *   @param angle angle to shear by in the current
         *   angleMode().
         *   @chainable
         */
        shearY(angle: number): p5;

        /**
         *   Translates the coordinate system. By default, the
         *   origin (0, 0) is at the sketch's top-left corner
         *   in 2D mode and center in WebGL mode. The
         *   translate() function shifts the origin to a
         *   different position. Everything drawn after
         *   translate() is called will appear to be shifted.
         *   There are two ways to call translate() with
         *   parameters that set the origin's position.
         *
         *   The first way to call translate() uses numbers to
         *   set the amount of translation. The first two
         *   parameters, x and y, set the amount to translate
         *   along the positive x- and y-axes. For example,
         *   calling translate(20, 30) translates the origin 20
         *   pixels along the x-axis and 30 pixels along the
         *   y-axis. The third parameter, z, is optional. It
         *   sets the amount to translate along the positive
         *   z-axis. For example, calling translate(20, 30, 40)
         *   translates the origin 20 pixels along the x-axis,
         *   30 pixels along the y-axis, and 40 pixels along
         *   the z-axis.
         *
         *   The second way to call translate() uses a
         *   p5.Vector object to set the amount of translation.
         *   For example, calling translate(myVector) uses the
         *   x-, y-, and z-components of myVector to set the
         *   amount to translate along the x-, y-, and z-axes.
         *   Doing so is the same as calling
         *   translate(myVector.x, myVector.y, myVector.z).
         *
         *   By default, transformations accumulate. For
         *   example, calling translate(10, 0) twice has the
         *   same effect as calling translate(20, 0) once. The
         *   push() and pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling translate(10, 0) inside
         *   the draw() function won't cause shapes to move
         *   continuously.
         *   @param x amount to translate along the positive
         *   x-axis.
         *   @param y amount to translate along the positive
         *   y-axis.
         *   @param [z] amount to translate along the positive
         *   z-axis.
         *   @chainable
         */
        translate(x: number, y: number, z?: number): p5;

        /**
         *   Translates the coordinate system. By default, the
         *   origin (0, 0) is at the sketch's top-left corner
         *   in 2D mode and center in WebGL mode. The
         *   translate() function shifts the origin to a
         *   different position. Everything drawn after
         *   translate() is called will appear to be shifted.
         *   There are two ways to call translate() with
         *   parameters that set the origin's position.
         *
         *   The first way to call translate() uses numbers to
         *   set the amount of translation. The first two
         *   parameters, x and y, set the amount to translate
         *   along the positive x- and y-axes. For example,
         *   calling translate(20, 30) translates the origin 20
         *   pixels along the x-axis and 30 pixels along the
         *   y-axis. The third parameter, z, is optional. It
         *   sets the amount to translate along the positive
         *   z-axis. For example, calling translate(20, 30, 40)
         *   translates the origin 20 pixels along the x-axis,
         *   30 pixels along the y-axis, and 40 pixels along
         *   the z-axis.
         *
         *   The second way to call translate() uses a
         *   p5.Vector object to set the amount of translation.
         *   For example, calling translate(myVector) uses the
         *   x-, y-, and z-components of myVector to set the
         *   amount to translate along the x-, y-, and z-axes.
         *   Doing so is the same as calling
         *   translate(myVector.x, myVector.y, myVector.z).
         *
         *   By default, transformations accumulate. For
         *   example, calling translate(10, 0) twice has the
         *   same effect as calling translate(20, 0) once. The
         *   push() and pop() functions can be used to isolate
         *   transformations within distinct drawing groups.
         *
         *   Note: Transformations are reset at the beginning
         *   of the draw loop. Calling translate(10, 0) inside
         *   the draw() function won't cause shapes to move
         *   continuously.
         *   @param vector vector by which to translate.
         *   @chainable
         */
        translate(vector: Vector): p5;
    }
}
