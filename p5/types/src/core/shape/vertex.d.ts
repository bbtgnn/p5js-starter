// This file was auto-generated. Please do not edit it.

import * as p5 from '../../../index';

declare module '../../../index' {
    interface p5InstanceExtensions {
        /**
         *   Begins creating a hole within a flat shape. The
         *   beginContour() and endContour() functions allow
         *   for creating negative space within custom shapes
         *   that are flat. beginContour() begins adding
         *   vertices to a negative space and endContour()
         *   stops adding them. beginContour() and endContour()
         *   must be called between beginShape() and
         *   endShape().
         *
         *   Transformations such as translate(), rotate(), and
         *   scale() don't work between beginContour() and
         *   endContour(). It's also not possible to use other
         *   shapes, such as ellipse() or rect(), between
         *   beginContour() and endContour().
         *
         *   Note: The vertices that define a negative space
         *   must "wind" in the opposite direction from the
         *   outer shape. First, draw vertices for the outer
         *   shape clockwise order. Then, draw vertices for the
         *   negative space in counter-clockwise order.
         *   @chainable
         */
        beginContour(): p5;

        /**
         *   Begins adding vertices to a custom shape. The
         *   beginShape() and endShape() functions allow for
         *   creating custom shapes in 2D or 3D. beginShape()
         *   begins adding vertices to a custom shape and
         *   endShape() stops adding them.
         *
         *   The parameter, kind, sets the kind of shape to
         *   make. By default, any irregular polygon can be
         *   drawn. The available modes for kind are:
         *
         *   - POINTS to draw a series of points.
         *   - LINES to draw a series of unconnected line
         *   segments.
         *   - TRIANGLES to draw a series of separate
         *   triangles.
         *   - TRIANGLE_FAN to draw a series of connected
         *   triangles sharing the first vertex in a fan-like
         *   fashion.
         *   - TRIANGLE_STRIP to draw a series of connected
         *   triangles in strip fashion.
         *   - QUADS to draw a series of separate
         *   quadrilaterals (quads).
         *   - QUAD_STRIP to draw quad strip using adjacent
         *   edges to form the next quad.
         *   - TESS to create a filling curve by explicit
         *   tessellation (WebGL only).
         *
         *   After calling beginShape(), shapes can be built by
         *   calling vertex(), bezierVertex(),
         *   quadraticVertex(), and/or curveVertex(). Calling
         *   endShape() will stop adding vertices to the shape.
         *   Each shape will be outlined with the current
         *   stroke color and filled with the current fill
         *   color.
         *
         *   Transformations such as translate(), rotate(), and
         *   scale() don't work between beginShape() and
         *   endShape(). It's also not possible to use other
         *   shapes, such as ellipse() or rect(), between
         *   beginShape() and endShape().
         *   @param [kind] either POINTS, LINES, TRIANGLES,
         *   TRIANGLE_FAN TRIANGLE_STRIP, QUADS, QUAD_STRIP or
         *   TESS.
         *   @chainable
         */
        beginShape(kind?: BEGIN_KIND): p5;

        /**
         *   Adds a Bézier curve segment to a custom shape.
         *   bezierVertex() adds a curved segment to custom
         *   shapes. The Bézier curves it creates are defined
         *   like those made by the bezier() function.
         *   bezierVertex() must be called between the
         *   beginShape() and endShape() functions. The curved
         *   segment uses the previous vertex as the first
         *   anchor point, so there must be at least one call
         *   to vertex() before bezierVertex() can be used.
         *
         *   The first four parameters, x2, y2, x3, and y3, set
         *   the curve’s two control points. The control points
         *   "pull" the curve towards them.
         *
         *   The fifth and sixth parameters, x4, and y4, set
         *   the last anchor point. The last anchor point is
         *   where the curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezierVertex() has eight
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *
         *   Note: bezierVertex() won’t work when an argument
         *   is passed to beginShape().
         *   @param x2 x-coordinate of the first control point.
         *   @param y2 y-coordinate of the first control point.
         *   @param x3 x-coordinate of the second control
         *   point.
         *   @param y3 y-coordinate of the second control
         *   point.
         *   @param x4 x-coordinate of the anchor point.
         *   @param y4 y-coordinate of the anchor point.
         *   @chainable
         */
        bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

        /**
         *   Adds a Bézier curve segment to a custom shape.
         *   bezierVertex() adds a curved segment to custom
         *   shapes. The Bézier curves it creates are defined
         *   like those made by the bezier() function.
         *   bezierVertex() must be called between the
         *   beginShape() and endShape() functions. The curved
         *   segment uses the previous vertex as the first
         *   anchor point, so there must be at least one call
         *   to vertex() before bezierVertex() can be used.
         *
         *   The first four parameters, x2, y2, x3, and y3, set
         *   the curve’s two control points. The control points
         *   "pull" the curve towards them.
         *
         *   The fifth and sixth parameters, x4, and y4, set
         *   the last anchor point. The last anchor point is
         *   where the curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezierVertex() has eight
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *
         *   Note: bezierVertex() won’t work when an argument
         *   is passed to beginShape().
         *   @param x2 x-coordinate of the first control point.
         *   @param y2 y-coordinate of the first control point.
         *   @param z2 z-coordinate of the first control point.
         *   @param x3 x-coordinate of the second control
         *   point.
         *   @param y3 y-coordinate of the second control
         *   point.
         *   @param z3 z-coordinate of the second control
         *   point.
         *   @param x4 x-coordinate of the anchor point.
         *   @param y4 y-coordinate of the anchor point.
         *   @param z4 z-coordinate of the anchor point.
         *   @chainable
         */
        bezierVertex(
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
         *   Adds a spline curve segment to a custom shape.
         *   curveVertex() adds a curved segment to custom
         *   shapes. The spline curves it creates are defined
         *   like those made by the curve() function.
         *   curveVertex() must be called between the
         *   beginShape() and endShape() functions.
         *
         *   Spline curves can form shapes and curves that
         *   slope gently. They’re like cables that are
         *   attached to a set of points. Splines are defined
         *   by two anchor points and two control points.
         *   curveVertex() must be called at least four times
         *   between beginShape() and endShape() in order to
         *   draw a curve:
         *
         *   beginShape(); // Add the first control point.
         *   curveVertex(84, 91); // Add the anchor points to
         *   draw between. curveVertex(68, 19); curveVertex(21,
         *   17); // Add the second control point.
         *   curveVertex(32, 91); endShape();
         *
         *   The code snippet above would only draw the curve
         *   between the anchor points, similar to the curve()
         *   function. The segments between the control and
         *   anchor points can be drawn by calling
         *   curveVertex() with the coordinates of the control
         *   points:
         *
         *   beginShape(); // Add the first control point and
         *   draw a segment to it. curveVertex(84, 91);
         *   curveVertex(84, 91); // Add the anchor points to
         *   draw between. curveVertex(68, 19); curveVertex(21,
         *   17); // Add the second control point.
         *   curveVertex(32, 91); // Uncomment the next line to
         *   draw the segment to the second control point. //
         *   curveVertex(32, 91); endShape();
         *
         *   The first two parameters, x and y, set the
         *   vertex’s location. For example, calling
         *   curveVertex(10, 10) adds a point to the curve at
         *   (10, 10).
         *
         *   Spline curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of curveVertex() has three
         *   arguments because each point has x-, y-, and
         *   z-coordinates. By default, the vertex’s
         *   z-coordinate is set to 0.
         *
         *   Note: curveVertex() won’t work when an argument is
         *   passed to beginShape().
         *   @param x x-coordinate of the vertex
         *   @param y y-coordinate of the vertex
         *   @chainable
         */
        curveVertex(x: number, y: number): p5;

        /**
         *   Adds a spline curve segment to a custom shape.
         *   curveVertex() adds a curved segment to custom
         *   shapes. The spline curves it creates are defined
         *   like those made by the curve() function.
         *   curveVertex() must be called between the
         *   beginShape() and endShape() functions.
         *
         *   Spline curves can form shapes and curves that
         *   slope gently. They’re like cables that are
         *   attached to a set of points. Splines are defined
         *   by two anchor points and two control points.
         *   curveVertex() must be called at least four times
         *   between beginShape() and endShape() in order to
         *   draw a curve:
         *
         *   beginShape(); // Add the first control point.
         *   curveVertex(84, 91); // Add the anchor points to
         *   draw between. curveVertex(68, 19); curveVertex(21,
         *   17); // Add the second control point.
         *   curveVertex(32, 91); endShape();
         *
         *   The code snippet above would only draw the curve
         *   between the anchor points, similar to the curve()
         *   function. The segments between the control and
         *   anchor points can be drawn by calling
         *   curveVertex() with the coordinates of the control
         *   points:
         *
         *   beginShape(); // Add the first control point and
         *   draw a segment to it. curveVertex(84, 91);
         *   curveVertex(84, 91); // Add the anchor points to
         *   draw between. curveVertex(68, 19); curveVertex(21,
         *   17); // Add the second control point.
         *   curveVertex(32, 91); // Uncomment the next line to
         *   draw the segment to the second control point. //
         *   curveVertex(32, 91); endShape();
         *
         *   The first two parameters, x and y, set the
         *   vertex’s location. For example, calling
         *   curveVertex(10, 10) adds a point to the curve at
         *   (10, 10).
         *
         *   Spline curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of curveVertex() has three
         *   arguments because each point has x-, y-, and
         *   z-coordinates. By default, the vertex’s
         *   z-coordinate is set to 0.
         *
         *   Note: curveVertex() won’t work when an argument is
         *   passed to beginShape().
         *   @param x x-coordinate of the vertex
         *   @param y y-coordinate of the vertex
         *   @param [z] z-coordinate of the vertex.
         *   @chainable
         */
        curveVertex(x: number, y: number, z?: number): p5;

        /**
         *   Stops creating a hole within a flat shape. The
         *   beginContour() and endContour() functions allow
         *   for creating negative space within custom shapes
         *   that are flat. beginContour() begins adding
         *   vertices to a negative space and endContour()
         *   stops adding them. beginContour() and endContour()
         *   must be called between beginShape() and
         *   endShape().
         *
         *   Transformations such as translate(), rotate(), and
         *   scale() don't work between beginContour() and
         *   endContour(). It's also not possible to use other
         *   shapes, such as ellipse() or rect(), between
         *   beginContour() and endContour().
         *
         *   Note: The vertices that define a negative space
         *   must "wind" in the opposite direction from the
         *   outer shape. First, draw vertices for the outer
         *   shape clockwise order. Then, draw vertices for the
         *   negative space in counter-clockwise order.
         *   @chainable
         */
        endContour(): p5;

        /**
         *   Begins adding vertices to a custom shape. The
         *   beginShape() and endShape() functions allow for
         *   creating custom shapes in 2D or 3D. beginShape()
         *   begins adding vertices to a custom shape and
         *   endShape() stops adding them.
         *
         *   The first parameter, mode, is optional. By
         *   default, the first and last vertices of a shape
         *   aren't connected. If the constant CLOSE is passed,
         *   as in endShape(CLOSE), then the first and last
         *   vertices will be connected.
         *
         *   The second parameter, count, is also optional. In
         *   WebGL mode, it’s more efficient to draw many
         *   copies of the same shape using a technique called
         *   instancing. The count parameter tells WebGL mode
         *   how many copies to draw. For example, calling
         *   endShape(CLOSE, 400) after drawing a custom shape
         *   will make it efficient to draw 400 copies. This
         *   feature requires writing a custom shader.
         *
         *   After calling beginShape(), shapes can be built by
         *   calling vertex(), bezierVertex(),
         *   quadraticVertex(), and/or curveVertex(). Calling
         *   endShape() will stop adding vertices to the shape.
         *   Each shape will be outlined with the current
         *   stroke color and filled with the current fill
         *   color.
         *
         *   Transformations such as translate(), rotate(), and
         *   scale() don't work between beginShape() and
         *   endShape(). It's also not possible to use other
         *   shapes, such as ellipse() or rect(), between
         *   beginShape() and endShape().
         *   @param [mode] use CLOSE to close the shape
         *   @param [count] number of times you want to
         *   draw/instance the shape (for WebGL mode).
         *   @chainable
         */
        endShape(mode?: END_MODE, count?: number): p5;

        /**
         *   Adds a quadratic Bézier curve segment to a custom
         *   shape. quadraticVertex() adds a curved segment to
         *   custom shapes. The Bézier curve segments it
         *   creates are similar to those made by the
         *   bezierVertex() function. quadraticVertex() must be
         *   called between the beginShape() and endShape()
         *   functions. The curved segment uses the previous
         *   vertex as the first anchor point, so there must be
         *   at least one call to vertex() before
         *   quadraticVertex() can be used.
         *
         *   The first two parameters, cx and cy, set the
         *   curve’s control point. The control point "pulls"
         *   the curve towards its.
         *
         *   The last two parameters, x3, and y3, set the last
         *   anchor point. The last anchor point is where the
         *   curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezierVertex() has eight
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *
         *   Note: quadraticVertex() won’t work when an
         *   argument is passed to beginShape().
         *   @param cx x-coordinate of the control point.
         *   @param cy y-coordinate of the control point.
         *   @param x3 x-coordinate of the anchor point.
         *   @param y3 y-coordinate of the anchor point.
         *   @chainable
         */
        quadraticVertex(cx: number, cy: number, x3: number, y3: number): p5;

        /**
         *   Adds a quadratic Bézier curve segment to a custom
         *   shape. quadraticVertex() adds a curved segment to
         *   custom shapes. The Bézier curve segments it
         *   creates are similar to those made by the
         *   bezierVertex() function. quadraticVertex() must be
         *   called between the beginShape() and endShape()
         *   functions. The curved segment uses the previous
         *   vertex as the first anchor point, so there must be
         *   at least one call to vertex() before
         *   quadraticVertex() can be used.
         *
         *   The first two parameters, cx and cy, set the
         *   curve’s control point. The control point "pulls"
         *   the curve towards its.
         *
         *   The last two parameters, x3, and y3, set the last
         *   anchor point. The last anchor point is where the
         *   curve ends.
         *
         *   Bézier curves can also be drawn in 3D using WebGL
         *   mode. The 3D version of bezierVertex() has eight
         *   arguments because each point has x-, y-, and
         *   z-coordinates.
         *
         *   Note: quadraticVertex() won’t work when an
         *   argument is passed to beginShape().
         *   @param cx x-coordinate of the control point.
         *   @param cy y-coordinate of the control point.
         *   @param cz z-coordinate of the control point.
         *   @param x3 x-coordinate of the anchor point.
         *   @param y3 y-coordinate of the anchor point.
         *   @param z3 z-coordinate of the anchor point.
         */
        quadraticVertex(cx: number, cy: number, cz: number, x3: number, y3: number, z3: number): void;

        /**
         *   Adds a vertex to a custom shape. vertex() sets the
         *   coordinates of vertices drawn between the
         *   beginShape() and endShape() functions.
         *
         *   The first two parameters, x and y, set the x- and
         *   y-coordinates of the vertex.
         *
         *   The third parameter, z, is optional. It sets the
         *   z-coordinate of the vertex in WebGL mode. By
         *   default, z is 0.
         *
         *   The fourth and fifth parameters, u and v, are also
         *   optional. They set the u- and v-coordinates for
         *   the vertex’s texture when used with endShape(). By
         *   default, u and v are both 0.
         *   @param x x-coordinate of the vertex.
         *   @param y y-coordinate of the vertex.
         *   @chainable
         */
        vertex(x: number, y: number): p5;

        /**
         *   Adds a vertex to a custom shape. vertex() sets the
         *   coordinates of vertices drawn between the
         *   beginShape() and endShape() functions.
         *
         *   The first two parameters, x and y, set the x- and
         *   y-coordinates of the vertex.
         *
         *   The third parameter, z, is optional. It sets the
         *   z-coordinate of the vertex in WebGL mode. By
         *   default, z is 0.
         *
         *   The fourth and fifth parameters, u and v, are also
         *   optional. They set the u- and v-coordinates for
         *   the vertex’s texture when used with endShape(). By
         *   default, u and v are both 0.
         *   @param x x-coordinate of the vertex.
         *   @param y y-coordinate of the vertex.
         *   @param [z] z-coordinate of the vertex. Defaults to
         *   0.
         *   @chainable
         */
        vertex(x: number, y: number, z?: number): p5;

        /**
         *   Adds a vertex to a custom shape. vertex() sets the
         *   coordinates of vertices drawn between the
         *   beginShape() and endShape() functions.
         *
         *   The first two parameters, x and y, set the x- and
         *   y-coordinates of the vertex.
         *
         *   The third parameter, z, is optional. It sets the
         *   z-coordinate of the vertex in WebGL mode. By
         *   default, z is 0.
         *
         *   The fourth and fifth parameters, u and v, are also
         *   optional. They set the u- and v-coordinates for
         *   the vertex’s texture when used with endShape(). By
         *   default, u and v are both 0.
         *   @param x x-coordinate of the vertex.
         *   @param y y-coordinate of the vertex.
         *   @param [z] z-coordinate of the vertex. Defaults to
         *   0.
         *   @param [u] u-coordinate of the vertex's texture.
         *   Defaults to 0.
         *   @param [v] v-coordinate of the vertex's texture.
         *   Defaults to 0.
         *   @chainable
         */
        vertex(x: number, y: number, z?: number, u?: number, v?: number): p5;

        /**
         *   Sets the normal vector for vertices in a custom 3D
         *   shape. 3D shapes created with beginShape() and
         *   endShape() are made by connecting sets of points
         *   called vertices. Each vertex added with vertex()
         *   has a normal vector that points away from it. The
         *   normal vector controls how light reflects off the
         *   shape.
         *
         *   normal() can be called two ways with different
         *   parameters to define the normal vector's
         *   components.
         *
         *   The first way to call normal() has three
         *   parameters, x, y, and z. If Numbers are passed, as
         *   in normal(1, 2, 3), they set the x-, y-, and
         *   z-components of the normal vector.
         *
         *   The second way to call normal() has one parameter,
         *   vector. If a p5.Vector object is passed, as in
         *   normal(myVector), its components will be used to
         *   set the normal vector.
         *
         *   normal() changes the normal vector of vertices
         *   added to a custom shape with vertex(). normal()
         *   must be called between the beginShape() and
         *   endShape() functions, just like vertex(). The
         *   normal vector set by calling normal() will affect
         *   all following vertices until normal() is called
         *   again:
         *
         *   beginShape(); // Set the vertex normal.
         *   normal(-0.4, -0.4, 0.8); // Add a vertex.
         *   vertex(-30, -30, 0); // Set the vertex normal.
         *   normal(0, 0, 1); // Add vertices. vertex(30, -30,
         *   0); vertex(30, 30, 0); // Set the vertex normal.
         *   normal(0.4, -0.4, 0.8); // Add a vertex.
         *   vertex(-30, 30, 0); endShape();
         *   @param vector vertex normal as a p5.Vector object.
         *   @chainable
         */
        normal(vector: Vector): p5;

        /**
         *   Sets the normal vector for vertices in a custom 3D
         *   shape. 3D shapes created with beginShape() and
         *   endShape() are made by connecting sets of points
         *   called vertices. Each vertex added with vertex()
         *   has a normal vector that points away from it. The
         *   normal vector controls how light reflects off the
         *   shape.
         *
         *   normal() can be called two ways with different
         *   parameters to define the normal vector's
         *   components.
         *
         *   The first way to call normal() has three
         *   parameters, x, y, and z. If Numbers are passed, as
         *   in normal(1, 2, 3), they set the x-, y-, and
         *   z-components of the normal vector.
         *
         *   The second way to call normal() has one parameter,
         *   vector. If a p5.Vector object is passed, as in
         *   normal(myVector), its components will be used to
         *   set the normal vector.
         *
         *   normal() changes the normal vector of vertices
         *   added to a custom shape with vertex(). normal()
         *   must be called between the beginShape() and
         *   endShape() functions, just like vertex(). The
         *   normal vector set by calling normal() will affect
         *   all following vertices until normal() is called
         *   again:
         *
         *   beginShape(); // Set the vertex normal.
         *   normal(-0.4, -0.4, 0.8); // Add a vertex.
         *   vertex(-30, -30, 0); // Set the vertex normal.
         *   normal(0, 0, 1); // Add vertices. vertex(30, -30,
         *   0); vertex(30, 30, 0); // Set the vertex normal.
         *   normal(0.4, -0.4, 0.8); // Add a vertex.
         *   vertex(-30, 30, 0); endShape();
         *   @param x x-component of the vertex normal.
         *   @param y y-component of the vertex normal.
         *   @param z z-component of the vertex normal.
         *   @chainable
         */
        normal(x: number, y: number, z: number): p5;
    }
}
