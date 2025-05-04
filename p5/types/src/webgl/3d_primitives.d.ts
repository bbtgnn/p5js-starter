// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Begins adding shapes to a new p5.Geometry object.
         *   The beginGeometry() and endGeometry() functions
         *   help with creating complex 3D shapes from simpler
         *   ones such as sphere(). beginGeometry() begins
         *   adding shapes to a custom p5.Geometry object and
         *   endGeometry() stops adding them.
         *
         *   beginGeometry() and endGeometry() can help to make
         *   sketches more performant. For example, if a
         *   complex 3D shape doesn’t change while a sketch
         *   runs, then it can be created with beginGeometry()
         *   and endGeometry(). Creating a p5.Geometry object
         *   once and then drawing it will run faster than
         *   repeatedly drawing the individual pieces.
         *
         *   See buildGeometry() for another way to build 3D
         *   shapes.
         *
         *   Note: beginGeometry() can only be used in WebGL
         *   mode.
         */
        beginGeometry(): void;

        /**
         *   Stops adding shapes to a new p5.Geometry object
         *   and returns the object. The beginGeometry() and
         *   endGeometry() functions help with creating complex
         *   3D shapes from simpler ones such as sphere().
         *   beginGeometry() begins adding shapes to a custom
         *   p5.Geometry object and endGeometry() stops adding
         *   them.
         *
         *   beginGeometry() and endGeometry() can help to make
         *   sketches more performant. For example, if a
         *   complex 3D shape doesn’t change while a sketch
         *   runs, then it can be created with beginGeometry()
         *   and endGeometry(). Creating a p5.Geometry object
         *   once and then drawing it will run faster than
         *   repeatedly drawing the individual pieces.
         *
         *   See buildGeometry() for another way to build 3D
         *   shapes.
         *
         *   Note: endGeometry() can only be used in WebGL
         *   mode.
         *   @return new 3D shape.
         */
        endGeometry(): Geometry;

        /**
         *   Creates a custom p5.Geometry object from simpler
         *   3D shapes. buildGeometry() helps with creating
         *   complex 3D shapes from simpler ones such as
         *   sphere(). It can help to make sketches more
         *   performant. For example, if a complex 3D shape
         *   doesn’t change while a sketch runs, then it can be
         *   created with buildGeometry(). Creating a
         *   p5.Geometry object once and then drawing it will
         *   run faster than repeatedly drawing the individual
         *   pieces.
         *
         *   The parameter, callback, is a function with the
         *   drawing instructions for the new p5.Geometry
         *   object. It will be called once to create the new
         *   3D shape.
         *
         *   See beginGeometry() and endGeometry() for another
         *   way to build 3D shapes.
         *
         *   Note: buildGeometry() can only be used in WebGL
         *   mode.
         *   @param callback function that draws the shape.
         *   @return new 3D shape.
         */
        buildGeometry(callback: (...args: any[]) => any): Geometry;

        /**
         *   Clears a p5.Geometry object from the graphics
         *   processing unit (GPU) memory. p5.Geometry objects
         *   can contain lots of data about their vertices,
         *   surface normals, colors, and so on. Complex 3D
         *   shapes can use lots of memory which is a limited
         *   resource in many GPUs. Calling freeGeometry() can
         *   improve performance by freeing a p5.Geometry
         *   object’s resources from GPU memory. freeGeometry()
         *   works with p5.Geometry objects created with
         *   beginGeometry() and endGeometry(),
         *   buildGeometry(), and loadModel().
         *
         *   The parameter, geometry, is the p5.Geometry object
         *   to be freed.
         *
         *   Note: A p5.Geometry object can still be drawn
         *   after its resources are cleared from GPU memory.
         *   It may take longer to draw the first time it’s
         *   redrawn.
         *
         *   Note: freeGeometry() can only be used in WebGL
         *   mode.
         *   @param geometry 3D shape whose resources should be
         *   freed.
         */
        freeGeometry(geometry: Geometry): void;

        /**
         *   Draws a plane. A plane is a four-sided, flat shape
         *   with every angle measuring 90˚. It’s similar to a
         *   rectangle and offers advanced drawing features in
         *   WebGL mode.
         *
         *   The first parameter, width, is optional. If a
         *   Number is passed, as in plane(20), it sets the
         *   plane’s width and height. By default, width is 50.
         *
         *   The second parameter, height, is also optional. If
         *   a Number is passed, as in plane(20, 30), it sets
         *   the plane’s height. By default, height is set to
         *   the plane’s width.
         *
         *   The third parameter, detailX, is also optional. If
         *   a Number is passed, as in plane(20, 30, 5) it sets
         *   the number of triangle subdivisions to use along
         *   the x-axis. All 3D shapes are made by connecting
         *   triangles to form their surfaces. By default,
         *   detailX is 1.
         *
         *   The fourth parameter, detailY, is also optional.
         *   If a Number is passed, as in plane(20, 30, 5, 7)
         *   it sets the number of triangle subdivisions to use
         *   along the y-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailY is 1.
         *
         *   Note: plane() can only be used in WebGL mode.
         *   @param [width] width of the plane.
         *   @param [height] height of the plane.
         *   @param [detailX] number of triangle subdivisions
         *   along the x-axis.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis.
         *   @chainable
         */
        plane(width?: number, height?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a box (rectangular prism). A box is a 3D
         *   shape with six faces. Each face makes a 90˚ with
         *   four neighboring faces.
         *
         *   The first parameter, width, is optional. If a
         *   Number is passed, as in box(20), it sets the box’s
         *   width and height. By default, width is 50.
         *
         *   The second parameter, height, is also optional. If
         *   a Number is passed, as in box(20, 30), it sets the
         *   box’s height. By default, height is set to the
         *   box’s width.
         *
         *   The third parameter, depth, is also optional. If a
         *   Number is passed, as in box(20, 30, 40), it sets
         *   the box’s depth. By default, depth is set to the
         *   box’s height.
         *
         *   The fourth parameter, detailX, is also optional.
         *   If a Number is passed, as in box(20, 30, 40, 5),
         *   it sets the number of triangle subdivisions to use
         *   along the x-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailX is 1.
         *
         *   The fifth parameter, detailY, is also optional. If
         *   a number is passed, as in box(20, 30, 40, 5, 7),
         *   it sets the number of triangle subdivisions to use
         *   along the y-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailY is 1.
         *
         *   Note: box() can only be used in WebGL mode.
         *   @param [width] width of the box.
         *   @param [height] height of the box.
         *   @param [depth] depth of the box.
         *   @param [detailX] number of triangle subdivisions
         *   along the x-axis.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis.
         *   @chainable
         */
        box(width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a sphere. A sphere is a 3D shape with
         *   triangular faces that connect to form a round
         *   surface. Spheres with few faces look like
         *   crystals. Spheres with many faces have smooth
         *   surfaces and look like balls.
         *
         *   The first parameter, radius, is optional. If a
         *   Number is passed, as in sphere(20), it sets the
         *   radius of the sphere. By default, radius is 50.
         *
         *   The second parameter, detailX, is also optional.
         *   If a Number is passed, as in sphere(20, 5), it
         *   sets the number of triangle subdivisions to use
         *   along the x-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailX is 24.
         *
         *   The third parameter, detailY, is also optional. If
         *   a Number is passed, as in sphere(20, 5, 2), it
         *   sets the number of triangle subdivisions to use
         *   along the y-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailY is 16.
         *
         *   Note: sphere() can only be used in WebGL mode.
         *   @param [radius] radius of the sphere. Defaults to
         *   50.
         *   @param [detailX] number of triangle subdivisions
         *   along the x-axis. Defaults to 24.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis. Defaults to 16.
         *   @chainable
         */
        sphere(radius?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a cylinder. A cylinder is a 3D shape with
         *   triangular faces that connect a flat bottom to a
         *   flat top. Cylinders with few faces look like
         *   boxes. Cylinders with many faces have smooth
         *   surfaces.
         *
         *   The first parameter, radius, is optional. If a
         *   Number is passed, as in cylinder(20), it sets the
         *   radius of the cylinder’s base. By default, radius
         *   is 50.
         *
         *   The second parameter, height, is also optional. If
         *   a Number is passed, as in cylinder(20, 30), it
         *   sets the cylinder’s height. By default, height is
         *   set to the cylinder’s radius.
         *
         *   The third parameter, detailX, is also optional. If
         *   a Number is passed, as in cylinder(20, 30, 5), it
         *   sets the number of edges used to form the
         *   cylinder's top and bottom. Using more edges makes
         *   the top and bottom look more like circles. By
         *   default, detailX is 24.
         *
         *   The fourth parameter, detailY, is also optional.
         *   If a Number is passed, as in cylinder(20, 30, 5,
         *   2), it sets the number of triangle subdivisions to
         *   use along the y-axis, between cylinder's the top
         *   and bottom. All 3D shapes are made by connecting
         *   triangles to form their surfaces. By default,
         *   detailY is 1.
         *
         *   The fifth parameter, bottomCap, is also optional.
         *   If a false is passed, as in cylinder(20, 30, 5, 2,
         *   false) the cylinder’s bottom won’t be drawn. By
         *   default, bottomCap is true.
         *
         *   The sixth parameter, topCap, is also optional. If
         *   a false is passed, as in cylinder(20, 30, 5, 2,
         *   false, false) the cylinder’s top won’t be drawn.
         *   By default, topCap is true.
         *
         *   Note: cylinder() can only be used in WebGL mode.
         *   @param [radius] radius of the cylinder. Defaults
         *   to 50.
         *   @param [height] height of the cylinder. Defaults
         *   to the value of radius.
         *   @param [detailX] number of edges along the top and
         *   bottom. Defaults to 24.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis. Defaults to 1.
         *   @param [bottomCap] whether to draw the cylinder's
         *   bottom. Defaults to true.
         *   @param [topCap] whether to draw the cylinder's
         *   top. Defaults to true.
         *   @chainable
         */
        cylinder(
            radius?: number,
            height?: number,
            detailX?: number,
            detailY?: number,
            bottomCap?: boolean,
            topCap?: boolean
        ): p5;

        /**
         *   Draws a cone. A cone is a 3D shape with triangular
         *   faces that connect a flat bottom to a single
         *   point. Cones with few faces look like pyramids.
         *   Cones with many faces have smooth surfaces.
         *
         *   The first parameter, radius, is optional. If a
         *   Number is passed, as in cone(20), it sets the
         *   radius of the cone’s base. By default, radius is
         *   50.
         *
         *   The second parameter, height, is also optional. If
         *   a Number is passed, as in cone(20, 30), it sets
         *   the cone’s height. By default, height is set to
         *   the cone’s radius.
         *
         *   The third parameter, detailX, is also optional. If
         *   a Number is passed, as in cone(20, 30, 5), it sets
         *   the number of edges used to form the cone's base.
         *   Using more edges makes the base look more like a
         *   circle. By default, detailX is 24.
         *
         *   The fourth parameter, detailY, is also optional.
         *   If a Number is passed, as in cone(20, 30, 5, 7),
         *   it sets the number of triangle subdivisions to use
         *   along the y-axis connecting the base to the tip.
         *   All 3D shapes are made by connecting triangles to
         *   form their surfaces. By default, detailY is 1.
         *
         *   The fifth parameter, cap, is also optional. If a
         *   false is passed, as in cone(20, 30, 5, 7, false)
         *   the cone’s base won’t be drawn. By default, cap is
         *   true.
         *
         *   Note: cone() can only be used in WebGL mode.
         *   @param [radius] radius of the cone's base.
         *   Defaults to 50.
         *   @param [height] height of the cone. Defaults to
         *   the value of radius.
         *   @param [detailX] number of edges used to draw the
         *   base. Defaults to 24.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis. Defaults to 1.
         *   @param [cap] whether to draw the cone's base.
         *   Defaults to true.
         *   @chainable
         */
        cone(radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): p5;

        /**
         *   Draws an ellipsoid. An ellipsoid is a 3D shape
         *   with triangular faces that connect to form a round
         *   surface. Ellipsoids with few faces look like
         *   crystals. Ellipsoids with many faces have smooth
         *   surfaces and look like eggs. ellipsoid() defines a
         *   shape by its radii. This is different from
         *   ellipse() which uses diameters (width and height).
         *
         *   The first parameter, radiusX, is optional. If a
         *   Number is passed, as in ellipsoid(20), it sets the
         *   radius of the ellipsoid along the x-axis. By
         *   default, radiusX is 50.
         *
         *   The second parameter, radiusY, is also optional.
         *   If a Number is passed, as in ellipsoid(20, 30), it
         *   sets the ellipsoid’s radius along the y-axis. By
         *   default, radiusY is set to the ellipsoid’s
         *   radiusX.
         *
         *   The third parameter, radiusZ, is also optional. If
         *   a Number is passed, as in ellipsoid(20, 30, 40),
         *   it sets the ellipsoid’s radius along the z-axis.
         *   By default, radiusZ is set to the ellipsoid’s
         *   radiusY.
         *
         *   The fourth parameter, detailX, is also optional.
         *   If a Number is passed, as in ellipsoid(20, 30, 40,
         *   5), it sets the number of triangle subdivisions to
         *   use along the x-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailX is 24.
         *
         *   The fifth parameter, detailY, is also optional. If
         *   a Number is passed, as in ellipsoid(20, 30, 40, 5,
         *   7), it sets the number of triangle subdivisions to
         *   use along the y-axis. All 3D shapes are made by
         *   connecting triangles to form their surfaces. By
         *   default, detailY is 16.
         *
         *   Note: ellipsoid() can only be used in WebGL mode.
         *   @param [radiusX] radius of the ellipsoid along the
         *   x-axis. Defaults to 50.
         *   @param [radiusY] radius of the ellipsoid along the
         *   y-axis. Defaults to radiusX.
         *   @param [radiusZ] radius of the ellipsoid along the
         *   z-axis. Defaults to radiusY.
         *   @param [detailX] number of triangle subdivisions
         *   along the x-axis. Defaults to 24.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis. Defaults to 16.
         *   @chainable
         */
        ellipsoid(radiusX?: number, radiusY?: number, radiusZ?: number, detailX?: number, detailY?: number): p5;

        /**
         *   Draws a torus. A torus is a 3D shape with
         *   triangular faces that connect to form a ring.
         *   Toruses with few faces look flattened. Toruses
         *   with many faces have smooth surfaces.
         *
         *   The first parameter, radius, is optional. If a
         *   Number is passed, as in torus(30), it sets the
         *   radius of the ring. By default, radius is 50.
         *
         *   The second parameter, tubeRadius, is also
         *   optional. If a Number is passed, as in torus(30,
         *   15), it sets the radius of the tube. By default,
         *   tubeRadius is 10.
         *
         *   The third parameter, detailX, is also optional. If
         *   a Number is passed, as in torus(30, 15, 5), it
         *   sets the number of edges used to draw the hole of
         *   the torus. Using more edges makes the hole look
         *   more like a circle. By default, detailX is 24.
         *
         *   The fourth parameter, detailY, is also optional.
         *   If a Number is passed, as in torus(30, 15, 5, 7),
         *   it sets the number of triangle subdivisions to use
         *   while filling in the torus’ height. By default,
         *   detailY is 16.
         *
         *   Note: torus() can only be used in WebGL mode.
         *   @param [radius] radius of the torus. Defaults to
         *   50.
         *   @param [tubeRadius] radius of the tube. Defaults
         *   to 10.
         *   @param [detailX] number of edges that form the
         *   hole. Defaults to 24.
         *   @param [detailY] number of triangle subdivisions
         *   along the y-axis. Defaults to 16.
         *   @chainable
         */
        torus(radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): p5;
    }
}
