// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Changes where ellipses, circles, and arcs are
         *   drawn. By default, the first two parameters of
         *   ellipse(), circle(), and arc() are the x- and
         *   y-coordinates of the shape's center. The next
         *   parameters set the shape's width and height. This
         *   is the same as calling ellipseMode(CENTER).
         *
         *   ellipseMode(RADIUS) also uses the first two
         *   parameters to set the x- and y-coordinates of the
         *   shape's center. The next parameters are half of
         *   the shapes's width and height. Calling ellipse(0,
         *   0, 10, 15) draws a shape with a width of 20 and
         *   height of 30.
         *
         *   ellipseMode(CORNER) uses the first two parameters
         *   as the upper-left corner of the shape. The next
         *   parameters are its width and height.
         *
         *   ellipseMode(CORNERS) uses the first two parameters
         *   as the location of one corner of the ellipse's
         *   bounding box. The next parameters are the location
         *   of the opposite corner.
         *
         *   The argument passed to ellipseMode() must be
         *   written in ALL CAPS because the constants CENTER,
         *   RADIUS, CORNER, and CORNERS are defined this way.
         *   JavaScript is a case-sensitive language.
         *   @param mode either CENTER, RADIUS, CORNER, or
         *   CORNERS
         *   @chainable
         */
        ellipseMode(mode: ELLIPSE_MODE): p5;

        /**
         *   Draws certain features with jagged (aliased)
         *   edges. smooth() is active by default. In 2D mode,
         *   noSmooth() is helpful for scaling up images
         *   without blurring. The functions don't affect
         *   shapes or fonts.
         *
         *   In WebGL mode, noSmooth() causes all shapes to be
         *   drawn with jagged (aliased) edges. The functions
         *   don't affect images or fonts.
         *   @chainable
         */
        noSmooth(): p5;

        /**
         *   Changes where rectangles and squares are drawn. By
         *   default, the first two parameters of rect() and
         *   square(), are the x- and y-coordinates of the
         *   shape's upper left corner. The next parameters set
         *   the shape's width and height. This is the same as
         *   calling rectMode(CORNER).
         *
         *   rectMode(CORNERS) also uses the first two
         *   parameters as the location of one of the corners.
         *   The next parameters are the location of the
         *   opposite corner. This mode only works for rect().
         *
         *   rectMode(CENTER) uses the first two parameters as
         *   the x- and y-coordinates of the shape's center.
         *   The next parameters are its width and height.
         *
         *   rectMode(RADIUS) also uses the first two
         *   parameters as the x- and y-coordinates of the
         *   shape's center. The next parameters are half of
         *   the shape's width and height.
         *
         *   The argument passed to rectMode() must be written
         *   in ALL CAPS because the constants CENTER, RADIUS,
         *   CORNER, and CORNERS are defined this way.
         *   JavaScript is a case-sensitive language.
         *   @param mode either CORNER, CORNERS, CENTER, or
         *   RADIUS
         *   @chainable
         */
        rectMode(mode: RECT_MODE): p5;

        /**
         *   Draws certain features with smooth (antialiased)
         *   edges. smooth() is active by default. In 2D mode,
         *   noSmooth() is helpful for scaling up images
         *   without blurring. The functions don't affect
         *   shapes or fonts.
         *
         *   In WebGL mode, noSmooth() causes all shapes to be
         *   drawn with jagged (aliased) edges. The functions
         *   don't affect images or fonts.
         *   @chainable
         */
        smooth(): p5;

        /**
         *   Sets the style for rendering the ends of lines.
         *   The caps for line endings are either rounded
         *   (ROUND), squared (SQUARE), or extended (PROJECT).
         *   The default cap is ROUND.
         *
         *   The argument passed to strokeCap() must be written
         *   in ALL CAPS because the constants ROUND, SQUARE,
         *   and PROJECT are defined this way. JavaScript is a
         *   case-sensitive language.
         *   @param cap either ROUND, SQUARE, or PROJECT
         *   @chainable
         */
        strokeCap(cap: STROKE_CAP): p5;

        /**
         *   Sets the style of the joints that connect line
         *   segments. Joints are either mitered (MITER),
         *   beveled (BEVEL), or rounded (ROUND). The default
         *   joint is MITER in 2D mode and ROUND in WebGL mode.
         *
         *   The argument passed to strokeJoin() must be
         *   written in ALL CAPS because the constants MITER,
         *   BEVEL, and ROUND are defined this way. JavaScript
         *   is a case-sensitive language.
         *   @param join either MITER, BEVEL, or ROUND
         *   @chainable
         */
        strokeJoin(join: STROKE_JOIN): p5;

        /**
         *   Sets the width of the stroke used for points,
         *   lines, and the outlines of shapes. Note:
         *   strokeWeight() is affected by transformations,
         *   especially calls to scale().
         *   @param weight the weight of the stroke (in
         *   pixels).
         *   @chainable
         */
        strokeWeight(weight: number): p5;
    }
}
