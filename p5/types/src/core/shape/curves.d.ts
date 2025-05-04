// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Draws a Bézier curve. Bézier curves can form
         *   shapes and curves that slope gently. They're
         *   defined by two anchor points and two control
         *   points. Bézier curves provide more control than
         *   the spline curves created with the curve()
         *   function.
         *
         *   The first two parameters, x1 and y1, set the first
         *   anchor point. The first anchor point is where the
         *   curve starts.
         *
         *   The next four parameters, x2, y2, x3, and y3, set
         *   the two control points. The control points "pull"
         *   the curve towards them.
         *
         *   The seventh and eighth parameters, x4 and y4, set
         *   the last anchor point. The last anchor point is
         *   where the curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezier() has twelve
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *   @param x1 x-coordinate of the first anchor point.
         *   @param y1 y-coordinate of the first anchor point.
         *   @param x2 x-coordinate of the first control point.
         *   @param y2 y-coordinate of the first control point.
         *   @param x3 x-coordinate of the second control
         *   point.
         *   @param y3 y-coordinate of the second control
         *   point.
         *   @param x4 x-coordinate of the second anchor point.
         *   @param y4 y-coordinate of the second anchor point.
         *   @chainable
         */
        bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

        /**
         *   Draws a Bézier curve. Bézier curves can form
         *   shapes and curves that slope gently. They're
         *   defined by two anchor points and two control
         *   points. Bézier curves provide more control than
         *   the spline curves created with the curve()
         *   function.
         *
         *   The first two parameters, x1 and y1, set the first
         *   anchor point. The first anchor point is where the
         *   curve starts.
         *
         *   The next four parameters, x2, y2, x3, and y3, set
         *   the two control points. The control points "pull"
         *   the curve towards them.
         *
         *   The seventh and eighth parameters, x4 and y4, set
         *   the last anchor point. The last anchor point is
         *   where the curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezier() has twelve
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *   @param x1 x-coordinate of the first anchor point.
         *   @param y1 y-coordinate of the first anchor point.
         *   @param z1 z-coordinate of the first anchor point.
         *   @param x2 x-coordinate of the first control point.
         *   @param y2 y-coordinate of the first control point.
         *   @param z2 z-coordinate of the first control point.
         *   @param x3 x-coordinate of the second control
         *   point.
         *   @param y3 y-coordinate of the second control
         *   point.
         *   @param z3 z-coordinate of the second control
         *   point.
         *   @param x4 x-coordinate of the second anchor point.
         *   @param y4 y-coordinate of the second anchor point.
         *   @param z4 z-coordinate of the second anchor point.
         *   @chainable
         */
        bezier(
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
            z4: number
        ): p5;

        /**
         *   Sets the number of segments used to draw Bézier
         *   curves in WebGL mode. In WebGL mode, smooth shapes
         *   are drawn using many flat segments. Adding more
         *   flat segments makes shapes appear smoother.
         *
         *   The parameter, detail, is the number of segments
         *   to use while drawing a Bézier curve. For example,
         *   calling bezierDetail(5) will use 5 segments to
         *   draw curves with the bezier() function. By
         *   default,detail is 20.
         *
         *   Note: bezierDetail() has no effect in 2D mode.
         *   @param detail number of segments to use. Defaults
         *   to 20.
         *   @chainable
         */
        bezierDetail(detail: number): p5;

        /**
         *   Calculates coordinates along a Bézier curve using
         *   interpolation. bezierPoint() calculates
         *   coordinates along a Bézier curve using the anchor
         *   and control points. It expects points in the same
         *   order as the bezier() function. bezierPoint()
         *   works one axis at a time. Passing the anchor and
         *   control points' x-coordinates will calculate the
         *   x-coordinate of a point on the curve. Passing the
         *   anchor and control points' y-coordinates will
         *   calculate the y-coordinate of a point on the
         *   curve.
         *
         *   The first parameter, a, is the coordinate of the
         *   first anchor point.
         *
         *   The second and third parameters, b and c, are the
         *   coordinates of the control points.
         *
         *   The fourth parameter, d, is the coordinate of the
         *   last anchor point.
         *
         *   The fifth parameter, t, is the amount to
         *   interpolate along the curve. 0 is the first anchor
         *   point, 1 is the second anchor point, and 0.5 is
         *   halfway between them.
         *   @param a coordinate of first control point.
         *   @param b coordinate of first anchor point.
         *   @param c coordinate of second anchor point.
         *   @param d coordinate of second control point.
         *   @param t amount to interpolate between 0 and 1.
         *   @return coordinate of the point on the curve.
         */
        bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

        /**
         *   Calculates coordinates along a line that's tangent
         *   to a Bézier curve. Tangent lines skim the surface
         *   of a curve. A tangent line's slope equals the
         *   curve's slope at the point where it intersects.
         *
         *   bezierTangent() calculates coordinates along a
         *   tangent line using the Bézier curve's anchor and
         *   control points. It expects points in the same
         *   order as the bezier() function. bezierTangent()
         *   works one axis at a time. Passing the anchor and
         *   control points' x-coordinates will calculate the
         *   x-coordinate of a point on the tangent line.
         *   Passing the anchor and control points'
         *   y-coordinates will calculate the y-coordinate of a
         *   point on the tangent line.
         *
         *   The first parameter, a, is the coordinate of the
         *   first anchor point.
         *
         *   The second and third parameters, b and c, are the
         *   coordinates of the control points.
         *
         *   The fourth parameter, d, is the coordinate of the
         *   last anchor point.
         *
         *   The fifth parameter, t, is the amount to
         *   interpolate along the curve. 0 is the first anchor
         *   point, 1 is the second anchor point, and 0.5 is
         *   halfway between them.
         *   @param a coordinate of first anchor point.
         *   @param b coordinate of first control point.
         *   @param c coordinate of second control point.
         *   @param d coordinate of second anchor point.
         *   @param t amount to interpolate between 0 and 1.
         *   @return coordinate of a point on the tangent line.
         */
        bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

        /**
         *   Draws a curve using a Catmull-Rom spline. Spline
         *   curves can form shapes and curves that slope
         *   gently. They’re like cables that are attached to a
         *   set of points. Splines are defined by two anchor
         *   points and two control points.
         *
         *   The first two parameters, x1 and y1, set the first
         *   control point. This point isn’t drawn and can be
         *   thought of as the curve’s starting point.
         *
         *   The next four parameters, x2, y2, x3, and y3, set
         *   the two anchor points. The anchor points are the
         *   start and end points of the curve’s visible
         *   segment.
         *
         *   The seventh and eighth parameters, x4 and y4, set
         *   the last control point. This point isn’t drawn and
         *   can be thought of as the curve’s ending point.
         *
         *   Spline curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of curve() has twelve
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *   @param x1 x-coordinate of the first control point.
         *   @param y1 y-coordinate of the first control point.
         *   @param x2 x-coordinate of the first anchor point.
         *   @param y2 y-coordinate of the first anchor point.
         *   @param x3 x-coordinate of the second anchor point.
         *   @param y3 y-coordinate of the second anchor point.
         *   @param x4 x-coordinate of the second control
         *   point.
         *   @param y4 y-coordinate of the second control
         *   point.
         *   @chainable
         */
        curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

        /**
         *   Draws a curve using a Catmull-Rom spline. Spline
         *   curves can form shapes and curves that slope
         *   gently. They’re like cables that are attached to a
         *   set of points. Splines are defined by two anchor
         *   points and two control points.
         *
         *   The first two parameters, x1 and y1, set the first
         *   control point. This point isn’t drawn and can be
         *   thought of as the curve’s starting point.
         *
         *   The next four parameters, x2, y2, x3, and y3, set
         *   the two anchor points. The anchor points are the
         *   start and end points of the curve’s visible
         *   segment.
         *
         *   The seventh and eighth parameters, x4 and y4, set
         *   the last control point. This point isn’t drawn and
         *   can be thought of as the curve’s ending point.
         *
         *   Spline curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of curve() has twelve
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *   @param x1 x-coordinate of the first control point.
         *   @param y1 y-coordinate of the first control point.
         *   @param z1 z-coordinate of the first control point.
         *   @param x2 x-coordinate of the first anchor point.
         *   @param y2 y-coordinate of the first anchor point.
         *   @param z2 z-coordinate of the first anchor point.
         *   @param x3 x-coordinate of the second anchor point.
         *   @param y3 y-coordinate of the second anchor point.
         *   @param z3 z-coordinate of the second anchor point.
         *   @param x4 x-coordinate of the second control
         *   point.
         *   @param y4 y-coordinate of the second control
         *   point.
         *   @param z4 z-coordinate of the second control
         *   point.
         *   @chainable
         */
        curve(
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
            z4: number
        ): p5;

        /**
         *   Sets the number of segments used to draw spline
         *   curves in WebGL mode. In WebGL mode, smooth shapes
         *   are drawn using many flat segments. Adding more
         *   flat segments makes shapes appear smoother.
         *
         *   The parameter, detail, is the number of segments
         *   to use while drawing a spline curve. For example,
         *   calling curveDetail(5) will use 5 segments to draw
         *   curves with the curve() function. By
         *   default,detail is 20.
         *
         *   Note: curveDetail() has no effect in 2D mode.
         *   @param resolution number of segments to use.
         *   Defaults to 20.
         *   @chainable
         */
        curveDetail(resolution: number): p5;

        /**
         *   Adjusts the way curve() and curveVertex() draw.
         *   Spline curves are like cables that are attached to
         *   a set of points. curveTightness() adjusts how
         *   tightly the cable is attached to the points.
         *
         *   The parameter, tightness, determines how the curve
         *   fits to the vertex points. By default, tightness
         *   is set to 0. Setting tightness to 1, as in
         *   curveTightness(1), connects the curve's points
         *   using straight lines. Values in the range from –5
         *   to 5 deform curves while leaving them
         *   recognizable.
         *   @param amount amount of tightness.
         *   @chainable
         */
        curveTightness(amount: number): p5;

        /**
         *   Calculates coordinates along a spline curve using
         *   interpolation. curvePoint() calculates coordinates
         *   along a spline curve using the anchor and control
         *   points. It expects points in the same order as the
         *   curve() function. curvePoint() works one axis at a
         *   time. Passing the anchor and control points'
         *   x-coordinates will calculate the x-coordinate of a
         *   point on the curve. Passing the anchor and control
         *   points' y-coordinates will calculate the
         *   y-coordinate of a point on the curve.
         *
         *   The first parameter, a, is the coordinate of the
         *   first control point.
         *
         *   The second and third parameters, b and c, are the
         *   coordinates of the anchor points.
         *
         *   The fourth parameter, d, is the coordinate of the
         *   last control point.
         *
         *   The fifth parameter, t, is the amount to
         *   interpolate along the curve. 0 is the first anchor
         *   point, 1 is the second anchor point, and 0.5 is
         *   halfway between them.
         *   @param a coordinate of first anchor point.
         *   @param b coordinate of first control point.
         *   @param c coordinate of second control point.
         *   @param d coordinate of second anchor point.
         *   @param t amount to interpolate between 0 and 1.
         *   @return coordinate of a point on the curve.
         */
        curvePoint(a: number, b: number, c: number, d: number, t: number): number;

        /**
         *   Calculates coordinates along a line that's tangent
         *   to a spline curve. Tangent lines skim the surface
         *   of a curve. A tangent line's slope equals the
         *   curve's slope at the point where it intersects.
         *
         *   curveTangent() calculates coordinates along a
         *   tangent line using the spline curve's anchor and
         *   control points. It expects points in the same
         *   order as the curve() function. curveTangent()
         *   works one axis at a time. Passing the anchor and
         *   control points' x-coordinates will calculate the
         *   x-coordinate of a point on the tangent line.
         *   Passing the anchor and control points'
         *   y-coordinates will calculate the y-coordinate of a
         *   point on the tangent line.
         *
         *   The first parameter, a, is the coordinate of the
         *   first control point.
         *
         *   The second and third parameters, b and c, are the
         *   coordinates of the anchor points.
         *
         *   The fourth parameter, d, is the coordinate of the
         *   last control point.
         *
         *   The fifth parameter, t, is the amount to
         *   interpolate along the curve. 0 is the first anchor
         *   point, 1 is the second anchor point, and 0.5 is
         *   halfway between them.
         *   @param a coordinate of first control point.
         *   @param b coordinate of first anchor point.
         *   @param c coordinate of second anchor point.
         *   @param d coordinate of second control point.
         *   @param t amount to interpolate between 0 and 1.
         *   @return coordinate of a point on the tangent line.
         */
        curveTangent(a: number, b: number, c: number, d: number, t: number): number;
    }
}
