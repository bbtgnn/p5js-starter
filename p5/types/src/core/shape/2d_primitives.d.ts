// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Draws an arc. An arc is a section of an ellipse
         *   defined by the x, y, w, and h parameters. x and y
         *   set the location of the arc's center. w and h set
         *   the arc's width and height. See ellipse() and
         *   ellipseMode() for more details.
         *
         *   The fifth and sixth parameters, start and stop,
         *   set the angles between which to draw the arc. Arcs
         *   are always drawn clockwise from start to stop. The
         *   fifth and sixth parameters, start and stop, set
         *   the angles between which to draw the arc. Arcs are
         *   always drawn clockwise from start to stop. By
         *   default, angles are given in radians, but if
         *   angleMode (DEGREES) is set, the function
         *   interprets the values in degrees.
         *
         *   The seventh parameter, mode, is optional. It
         *   determines the arc's fill style. The fill modes
         *   are a semi-circle (OPEN), a closed semi-circle
         *   (CHORD), or a closed pie segment (PIE).
         *
         *   The eighth parameter, detail, is also optional. It
         *   determines how many vertices are used to draw the
         *   arc in WebGL mode. The default value is 25.
         *   @param x x-coordinate of the arc's ellipse.
         *   @param y y-coordinate of the arc's ellipse.
         *   @param w width of the arc's ellipse by default.
         *   @param h height of the arc's ellipse by default.
         *   @param start angle to start the arc, specified in
         *   radians.
         *   @param stop angle to stop the arc, specified in
         *   radians.
         *   @param [mode] optional parameter to determine the
         *   way of drawing the arc. either CHORD, PIE, or
         *   OPEN.
         *   @param [detail] optional parameter for WebGL mode
         *   only. This is to specify the number of vertices
         *   that makes up the perimeter of the arc. Default
         *   value is 25. Won't draw a stroke for a detail of
         *   more than 50.
         *   @chainable
         */
        arc(
            x: number,
            y: number,
            w: number,
            h: number,
            start: number,
            stop: number,
            mode?: ARC_MODE,
            detail?: number
        ): p5;

        /**
         *   Draws an ellipse (oval). An ellipse is a round
         *   shape defined by the x, y, w, and h parameters. x
         *   and y set the location of its center. w and h set
         *   its width and height. See ellipseMode() for other
         *   ways to set its position.
         *
         *   If no height is set, the value of width is used
         *   for both the width and height. If a negative
         *   height or width is specified, the absolute value
         *   is taken.
         *
         *   The fifth parameter, detail, is also optional. It
         *   determines how many vertices are used to draw the
         *   ellipse in WebGL mode. The default value is 25.
         *   @param x x-coordinate of the center of the
         *   ellipse.
         *   @param y y-coordinate of the center of the
         *   ellipse.
         *   @param w width of the ellipse.
         *   @param [h] height of the ellipse.
         *   @chainable
         */
        ellipse(x: number, y: number, w: number, h?: number): p5;

        /**
         *   Draws an ellipse (oval). An ellipse is a round
         *   shape defined by the x, y, w, and h parameters. x
         *   and y set the location of its center. w and h set
         *   its width and height. See ellipseMode() for other
         *   ways to set its position.
         *
         *   If no height is set, the value of width is used
         *   for both the width and height. If a negative
         *   height or width is specified, the absolute value
         *   is taken.
         *
         *   The fifth parameter, detail, is also optional. It
         *   determines how many vertices are used to draw the
         *   ellipse in WebGL mode. The default value is 25.
         *   @param x x-coordinate of the center of the
         *   ellipse.
         *   @param y y-coordinate of the center of the
         *   ellipse.
         *   @param w width of the ellipse.
         *   @param h height of the ellipse.
         *   @param [detail] optional parameter for WebGL mode
         *   only. This is to specify the number of vertices
         *   that makes up the perimeter of the ellipse.
         *   Default value is 25. Won't draw a stroke for a
         *   detail of more than 50.
         */
        ellipse(x: number, y: number, w: number, h: number, detail?: number): void;

        /**
         *   Draws a circle. A circle is a round shape defined
         *   by the x, y, and d parameters. x and y set the
         *   location of its center. d sets its width and
         *   height (diameter). Every point on the circle's
         *   edge is the same distance, 0.5 * d, from its
         *   center. 0.5 * d (half the diameter) is the
         *   circle's radius. See ellipseMode() for other ways
         *   to set its position.
         *   @param x x-coordinate of the center of the circle.
         *   @param y y-coordinate of the center of the circle.
         *   @param d diameter of the circle.
         *   @chainable
         */
        circle(x: number, y: number, d: number): p5;

        /**
         *   Draws a straight line between two points. A line's
         *   default width is one pixel. The version of line()
         *   with four parameters draws the line in 2D. To
         *   color a line, use the stroke() function. To change
         *   its width, use the strokeWeight() function. A line
         *   can't be filled, so the fill() function won't
         *   affect the line's color.
         *
         *   The version of line() with six parameters allows
         *   the line to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @chainable
         */
        line(x1: number, y1: number, x2: number, y2: number): p5;

        /**
         *   Draws a straight line between two points. A line's
         *   default width is one pixel. The version of line()
         *   with four parameters draws the line in 2D. To
         *   color a line, use the stroke() function. To change
         *   its width, use the strokeWeight() function. A line
         *   can't be filled, so the fill() function won't
         *   affect the line's color.
         *
         *   The version of line() with six parameters allows
         *   the line to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param z1 the z-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param z2 the z-coordinate of the second point.
         *   @chainable
         */
        line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): p5;

        /**
         *   Draws a single point in space. A point's default
         *   width is one pixel. To color a point, use the
         *   stroke() function. To change its width, use the
         *   strokeWeight() function. A point can't be filled,
         *   so the fill() function won't affect the point's
         *   color.
         *
         *   The version of point() with two parameters allows
         *   the point's location to be set with its x- and
         *   y-coordinates, as in point(10, 20).
         *
         *   The version of point() with three parameters
         *   allows the point to be drawn in 3D space with x-,
         *   y-, and z-coordinates, as in point(10, 20, 30).
         *   Doing so requires adding the WEBGL argument to
         *   createCanvas().
         *
         *   The version of point() with one parameter allows
         *   the point's location to be set with a p5.Vector
         *   object.
         *   @param x the x-coordinate.
         *   @param y the y-coordinate.
         *   @param [z] the z-coordinate (for WebGL mode).
         *   @chainable
         */
        point(x: number, y: number, z?: number): p5;

        /**
         *   Draws a single point in space. A point's default
         *   width is one pixel. To color a point, use the
         *   stroke() function. To change its width, use the
         *   strokeWeight() function. A point can't be filled,
         *   so the fill() function won't affect the point's
         *   color.
         *
         *   The version of point() with two parameters allows
         *   the point's location to be set with its x- and
         *   y-coordinates, as in point(10, 20).
         *
         *   The version of point() with three parameters
         *   allows the point to be drawn in 3D space with x-,
         *   y-, and z-coordinates, as in point(10, 20, 30).
         *   Doing so requires adding the WEBGL argument to
         *   createCanvas().
         *
         *   The version of point() with one parameter allows
         *   the point's location to be set with a p5.Vector
         *   object.
         *   @param coordinateVector the coordinate vector.
         *   @chainable
         */
        point(coordinateVector: Vector): p5;

        /**
         *   Draws a quadrilateral (four-sided shape).
         *   Quadrilaterals include rectangles, squares,
         *   rhombuses, and trapezoids. The first pair of
         *   parameters (x1, y1) sets the quad's first point.
         *   The next three pairs of parameters set the
         *   coordinates for its next three points (x2, y2),
         *   (x3, y3), and (x4, y4). Points should be added in
         *   either clockwise or counter-clockwise order.
         *
         *   The version of quad() with twelve parameters
         *   allows the quad to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *
         *   The thirteenth and fourteenth parameters are
         *   optional. In WebGL mode, they set the number of
         *   segments used to draw the quadrilateral in the x-
         *   and y-directions. They're both 2 by default.
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param x3 the x-coordinate of the third point.
         *   @param y3 the y-coordinate of the third point.
         *   @param x4 the x-coordinate of the fourth point.
         *   @param y4 the y-coordinate of the fourth point.
         *   @param [detailX] number of segments in the
         *   x-direction.
         *   @param [detailY] number of segments in the
         *   y-direction.
         *   @chainable
         */
        quad(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            x4: number,
            y4: number,
            detailX?: number,
            detailY?: number
        ): p5;

        /**
         *   Draws a quadrilateral (four-sided shape).
         *   Quadrilaterals include rectangles, squares,
         *   rhombuses, and trapezoids. The first pair of
         *   parameters (x1, y1) sets the quad's first point.
         *   The next three pairs of parameters set the
         *   coordinates for its next three points (x2, y2),
         *   (x3, y3), and (x4, y4). Points should be added in
         *   either clockwise or counter-clockwise order.
         *
         *   The version of quad() with twelve parameters
         *   allows the quad to be drawn in 3D space. Doing so
         *   requires adding the WEBGL argument to
         *   createCanvas().
         *
         *   The thirteenth and fourteenth parameters are
         *   optional. In WebGL mode, they set the number of
         *   segments used to draw the quadrilateral in the x-
         *   and y-directions. They're both 2 by default.
         *   @param x1 the x-coordinate of the first point.
         *   @param y1 the y-coordinate of the first point.
         *   @param z1 the z-coordinate of the first point.
         *   @param x2 the x-coordinate of the second point.
         *   @param y2 the y-coordinate of the second point.
         *   @param z2 the z-coordinate of the second point.
         *   @param x3 the x-coordinate of the third point.
         *   @param y3 the y-coordinate of the third point.
         *   @param z3 the z-coordinate of the third point.
         *   @param x4 the x-coordinate of the fourth point.
         *   @param y4 the y-coordinate of the fourth point.
         *   @param z4 the z-coordinate of the fourth point.
         *   @param [detailX] number of segments in the
         *   x-direction.
         *   @param [detailY] number of segments in the
         *   y-direction.
         *   @chainable
         */
        quad(
            x1: number,
            y1: number,
            z1: number,
            x2: number,
            y2: number,
            z2: number,
            x3: number,
            y3: number,
            z3: number,
            x4: number,
            y4: number,
            z4: number,
            detailX?: number,
            detailY?: number
        ): p5;

        /**
         *   Draws a rectangle. A rectangle is a four-sided
         *   shape defined by the x, y, w, and h parameters. x
         *   and y set the location of its top-left corner. w
         *   sets its width and h sets its height. Every angle
         *   in the rectangle measures 90˚. See rectMode() for
         *   other ways to define rectangles.
         *
         *   The version of rect() with five parameters creates
         *   a rounded rectangle. The fifth parameter sets the
         *   radius for all four corners.
         *
         *   The version of rect() with eight parameters also
         *   creates a rounded rectangle. Each of the last four
         *   parameters set the radius of a corner. The radii
         *   start with the top-left corner and move clockwise
         *   around the rectangle. If any of these parameters
         *   are omitted, they are set to the value of the last
         *   radius that was set.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param [h] height of the rectangle.
         *   @param [tl] optional radius of top-left corner.
         *   @param [tr] optional radius of top-right corner.
         *   @param [br] optional radius of bottom-right
         *   corner.
         *   @param [bl] optional radius of bottom-left corner.
         *   @chainable
         */
        rect(x: number, y: number, w: number, h?: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

        /**
         *   Draws a rectangle. A rectangle is a four-sided
         *   shape defined by the x, y, w, and h parameters. x
         *   and y set the location of its top-left corner. w
         *   sets its width and h sets its height. Every angle
         *   in the rectangle measures 90˚. See rectMode() for
         *   other ways to define rectangles.
         *
         *   The version of rect() with five parameters creates
         *   a rounded rectangle. The fifth parameter sets the
         *   radius for all four corners.
         *
         *   The version of rect() with eight parameters also
         *   creates a rounded rectangle. Each of the last four
         *   parameters set the radius of a corner. The radii
         *   start with the top-left corner and move clockwise
         *   around the rectangle. If any of these parameters
         *   are omitted, they are set to the value of the last
         *   radius that was set.
         *   @param x x-coordinate of the rectangle.
         *   @param y y-coordinate of the rectangle.
         *   @param w width of the rectangle.
         *   @param h height of the rectangle.
         *   @param [detailX] number of segments in the
         *   x-direction (for WebGL mode).
         *   @param [detailY] number of segments in the
         *   y-direction (for WebGL mode).
         *   @chainable
         */
        rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a square. A square is a four-sided shape
         *   defined by the x, y, and s parameters. x and y set
         *   the location of its top-left corner. s sets its
         *   width and height. Every angle in the square
         *   measures 90˚ and all its sides are the same
         *   length. See rectMode() for other ways to define
         *   squares.
         *
         *   The version of square() with four parameters
         *   creates a rounded square. The fourth parameter
         *   sets the radius for all four corners.
         *
         *   The version of square() with seven parameters also
         *   creates a rounded square. Each of the last four
         *   parameters set the radius of a corner. The radii
         *   start with the top-left corner and move clockwise
         *   around the square. If any of these parameters are
         *   omitted, they are set to the value of the last
         *   radius that was set.
         *   @param x x-coordinate of the square.
         *   @param y y-coordinate of the square.
         *   @param s side size of the square.
         *   @param [tl] optional radius of top-left corner.
         *   @param [tr] optional radius of top-right corner.
         *   @param [br] optional radius of bottom-right
         *   corner.
         *   @param [bl] optional radius of bottom-left corner.
         *   @chainable
         */
        square(x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

        /**
         *   Draws a triangle. A triangle is a three-sided
         *   shape defined by three points. The first two
         *   parameters specify the triangle's first point (x1,
         *   y1). The middle two parameters specify its second
         *   point (x2, y2). And the last two parameters
         *   specify its third point (x3, y3).
         *   @param x1 x-coordinate of the first point.
         *   @param y1 y-coordinate of the first point.
         *   @param x2 x-coordinate of the second point.
         *   @param y2 y-coordinate of the second point.
         *   @param x3 x-coordinate of the third point.
         *   @param y3 y-coordinate of the third point.
         *   @chainable
         */
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;
    }
}
