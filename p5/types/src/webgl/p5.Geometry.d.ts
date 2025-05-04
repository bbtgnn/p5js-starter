// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Geometry {
        /**
         *   A class to describe a 3D shape. Each p5.Geometry
         *   object represents a 3D shape as a set of connected
         *   points called vertices. All 3D shapes are made by
         *   connecting vertices to form triangles that are
         *   stitched together. Each triangular patch on the
         *   geometry's surface is called a face. The geometry
         *   stores information about its vertices and faces
         *   for use with effects such as lighting and texture
         *   mapping.
         *
         *   The first parameter, detailX, is optional. If a
         *   number is passed, as in new p5.Geometry(24), it
         *   sets the number of triangle subdivisions to use
         *   along the geometry's x-axis. By default, detailX
         *   is 1.
         *
         *   The second parameter, detailY, is also optional.
         *   If a number is passed, as in new p5.Geometry(24,
         *   16), it sets the number of triangle subdivisions
         *   to use along the geometry's y-axis. By default,
         *   detailX is 1.
         *
         *   The third parameter, callback, is also optional.
         *   If a function is passed, as in new p5.Geometry(24,
         *   16, createShape), it will be called once to add
         *   vertices to the new 3D shape.
         *
         *   @param [detailX] number of vertices along the
         *   x-axis.
         *   @param [detailY] number of vertices along the
         *   y-axis.
         *   @param [callback] function to call once the
         *   geometry is created.
         */
        constructor(detailX?: number, detailY?: number, callback?: (...args: any[]) => any);

        /**
         *   Calculates the position and size of the smallest
         *   box that contains the geometry. A bounding box is
         *   the smallest rectangular prism that contains the
         *   entire geometry. It's defined by the box's minimum
         *   and maximum coordinates along each axis, as well
         *   as the size (length) and offset (center).
         *
         *   Calling myGeometry.calculateBoundingBox() returns
         *   an object with four properties that describe the
         *   bounding box:
         *
         *   // Get myGeometry's bounding box. let bbox =
         *   myGeometry.calculateBoundingBox(); // Print the
         *   bounding box to the console. console.log(bbox); //
         *   { // // The minimum coordinate along each axis. //
         *   min: { x: -1, y: -2, z: -3 }, // // // The maximum
         *   coordinate along each axis. // max: { x: 1, y: 2,
         *   z: 3}, // // // The size (length) along each axis.
         *   // size: { x: 2, y: 4, z: 6}, // // // The offset
         *   (center) along each axis. // offset: { x: 0, y: 0,
         *   z: 0} // }
         *   @return bounding box of the geometry.
         */
        calculateBoundingBox(): object;

        /**
         *   Removes the geometry’s internal colors.
         *   p5.Geometry objects can be created with "internal
         *   colors" assigned to vertices or the entire shape.
         *   When a geometry has internal colors, fill() has no
         *   effect. Calling myGeometry.clearColors() allows
         *   the fill() function to apply color to the
         *   geometry.
         */
        clearColors(): void;

        /**
         *   The saveObj() function exports p5.Geometry objects
         *   as 3D models in the Wavefront .obj file format.
         *   This way, you can use the 3D shapes you create in
         *   p5.js in other software for rendering, animation,
         *   3D printing, or more. The exported .obj file will
         *   include the faces and vertices of the p5.Geometry,
         *   as well as its texture coordinates and normals, if
         *   it has them.
         *   @param [fileName] The name of the file to save the
         *   model as. If not specified, the default file name
         *   will be 'model.obj'.
         */
        saveObj(fileName?: string): void;

        /**
         *   The saveStl() function exports p5.Geometry objects
         *   as 3D models in the STL stereolithography file
         *   format. This way, you can use the 3D shapes you
         *   create in p5.js in other software for rendering,
         *   animation, 3D printing, or more. The exported .stl
         *   file will include the faces, vertices, and normals
         *   of the p5.Geometry.
         *
         *   By default, this method saves a text-based .stl
         *   file. Alternatively, you can save a more compact
         *   but less human-readable binary .stl file by
         *   passing { binary: true } as a second parameter.
         *   @param [fileName] The name of the file to save the
         *   model as. If not specified, the default file name
         *   will be 'model.stl'.
         *   @param [options] Optional settings. Options can
         *   include a boolean binary property, which controls
         *   whether or not a binary .stl file is saved. It
         *   defaults to false.
         */
        saveStl(fileName?: string, options?: object): void;

        /**
         *   Flips the geometry’s texture u-coordinates. In
         *   order for texture() to work, the geometry needs a
         *   way to map the points on its surface to the pixels
         *   in a rectangular image that's used as a texture.
         *   The geometry's vertex at coordinates (x, y, z)
         *   maps to the texture image's pixel at coordinates
         *   (u, v).
         *
         *   The myGeometry.uvs array stores the (u, v)
         *   coordinates for each vertex in the order it was
         *   added to the geometry. Calling myGeometry.flipU()
         *   flips a geometry's u-coordinates so that the
         *   texture appears mirrored horizontally.
         *
         *   For example, a plane's four vertices are added
         *   clockwise starting from the top-left corner.
         *   Here's how calling myGeometry.flipU() would change
         *   a plane's texture coordinates:
         *
         *   // Print the original texture coordinates. //
         *   Output: [0, 0, 1, 0, 0, 1, 1, 1]
         *   console.log(myGeometry.uvs); // Flip the
         *   u-coordinates. myGeometry.flipU(); // Print the
         *   flipped texture coordinates. // Output: [1, 0, 0,
         *   0, 1, 1, 0, 1] console.log(myGeometry.uvs); //
         *   Notice the swaps: // Top vertices: [0, 0, 1, 0]
         *   --> [1, 0, 0, 0] // Bottom vertices: [0, 1, 1, 1]
         *   --> [1, 1, 0, 1]
         */
        flipU(): void;

        /**
         *   Flips the geometry’s texture v-coordinates. In
         *   order for texture() to work, the geometry needs a
         *   way to map the points on its surface to the pixels
         *   in a rectangular image that's used as a texture.
         *   The geometry's vertex at coordinates (x, y, z)
         *   maps to the texture image's pixel at coordinates
         *   (u, v).
         *
         *   The myGeometry.uvs array stores the (u, v)
         *   coordinates for each vertex in the order it was
         *   added to the geometry. Calling myGeometry.flipV()
         *   flips a geometry's v-coordinates so that the
         *   texture appears mirrored vertically.
         *
         *   For example, a plane's four vertices are added
         *   clockwise starting from the top-left corner.
         *   Here's how calling myGeometry.flipV() would change
         *   a plane's texture coordinates:
         *
         *   // Print the original texture coordinates. //
         *   Output: [0, 0, 1, 0, 0, 1, 1, 1]
         *   console.log(myGeometry.uvs); // Flip the
         *   v-coordinates. myGeometry.flipV(); // Print the
         *   flipped texture coordinates. // Output: [0, 1, 1,
         *   1, 0, 0, 1, 0] console.log(myGeometry.uvs); //
         *   Notice the swaps: // Left vertices: [0, 0] <-->
         *   [1, 0] // Right vertices: [1, 0] <--> [1, 1]
         */
        flipV(): void;

        /**
         *   Computes the geometry's faces using its vertices.
         *   All 3D shapes are made by connecting sets of
         *   points called vertices. A geometry's surface is
         *   formed by connecting vertices to form triangles
         *   that are stitched together. Each triangular patch
         *   on the geometry's surface is called a face.
         *   myGeometry.computeFaces() performs the math needed
         *   to define each face based on the distances between
         *   vertices.
         *
         *   The geometry's vertices are stored as p5.Vector
         *   objects in the myGeometry.vertices array. The
         *   geometry's first vertex is the p5.Vector object at
         *   myGeometry.vertices[0], its second vertex is
         *   myGeometry.vertices[1], its third vertex is
         *   myGeometry.vertices[2], and so on.
         *
         *   Calling myGeometry.computeFaces() fills the
         *   myGeometry.faces array with three-element arrays
         *   that list the vertices that form each face. For
         *   example, a geometry made from a rectangle has two
         *   faces because a rectangle is made by joining two
         *   triangles. myGeometry.faces for a rectangle would
         *   be the two-dimensional array [[0, 1, 2], [2, 1,
         *   3]]. The first face, myGeometry.faces[0], is the
         *   array [0, 1, 2] because it's formed by connecting
         *   myGeometry.vertices[0], myGeometry.vertices[1],and
         *   myGeometry.vertices[2]. The second face,
         *   myGeometry.faces[1], is the array [2, 1, 3]
         *   because it's formed by connecting
         *   myGeometry.vertices[2], myGeometry.vertices[1],
         *   and myGeometry.vertices[3].
         *
         *   Note: myGeometry.computeFaces() only works when
         *   geometries have four or more vertices.
         *   @chainable
         */
        computeFaces(): Geometry;

        /**
         *   Calculates the normal vector for each vertex on
         *   the geometry. All 3D shapes are made by connecting
         *   sets of points called vertices. A geometry's
         *   surface is formed by connecting vertices to create
         *   triangles that are stitched together. Each
         *   triangular patch on the geometry's surface is
         *   called a face. myGeometry.computeNormals()
         *   performs the math needed to orient each face.
         *   Orientation is important for lighting and other
         *   effects.
         *
         *   A face's orientation is defined by its normal
         *   vector which points out of the face and is normal
         *   (perpendicular) to the surface. Calling
         *   myGeometry.computeNormals() first calculates each
         *   face's normal vector. Then it calculates the
         *   normal vector for each vertex by averaging the
         *   normal vectors of the faces surrounding the
         *   vertex. The vertex normals are stored as p5.Vector
         *   objects in the myGeometry.vertexNormals array.
         *
         *   The first parameter, shadingType, is optional.
         *   Passing the constant FLAT, as in
         *   myGeometry.computeNormals(FLAT), provides
         *   neighboring faces with their own copies of the
         *   vertices they share. Surfaces appear tiled with
         *   flat shading. Passing the constant SMOOTH, as in
         *   myGeometry.computeNormals(SMOOTH), makes
         *   neighboring faces reuse their shared vertices.
         *   Surfaces appear smoother with smooth shading. By
         *   default, shadingType is FLAT.
         *
         *   The second parameter, options, is also optional.
         *   If an object with a roundToPrecision property is
         *   passed, as in myGeometry.computeNormals(SMOOTH, {
         *   roundToPrecision: 5 }), it sets the number of
         *   decimal places to use for calculations. By
         *   default, roundToPrecision uses 3 decimal places.
         *   @param [shadingType] shading type. either FLAT or
         *   SMOOTH. Defaults to FLAT.
         *   @param [options] shading options.
         *   @chainable
         */
        computeNormals(shadingType?: string, options?: object): Geometry;

        /**
         *   Transforms the geometry's vertices to fit snugly
         *   within a 100×100×100 box centered at the origin.
         *   Calling myGeometry.normalize() translates the
         *   geometry's vertices so that they're centered at
         *   the origin (0, 0, 0). Then it scales the vertices
         *   so that they fill a 100×100×100 box. As a result,
         *   small geometries will grow and large geometries
         *   will shrink.
         *
         *   Note: myGeometry.normalize() only works when
         *   called in the setup() function.
         *   @chainable
         */
        normalize(): Geometry;

        /**
         *   An array with the geometry's vertices. The
         *   geometry's vertices are stored as p5.Vector
         *   objects in the myGeometry.vertices array. The
         *   geometry's first vertex is the p5.Vector object at
         *   myGeometry.vertices[0], its second vertex is
         *   myGeometry.vertices[1], its third vertex is
         *   myGeometry.vertices[2], and so on.
         */
        vertices: any;

        /**
         *   An array with the vectors that are normal to the
         *   geometry's vertices. A face's orientation is
         *   defined by its normal vector which points out of
         *   the face and is normal (perpendicular) to the
         *   surface. Calling myGeometry.computeNormals() first
         *   calculates each face's normal vector. Then it
         *   calculates the normal vector for each vertex by
         *   averaging the normal vectors of the faces
         *   surrounding the vertex. The vertex normals are
         *   stored as p5.Vector objects in the
         *   myGeometry.vertexNormals array.
         */
        vertexNormals: any;

        /**
         *   An array that lists which of the geometry's
         *   vertices form each of its faces. All 3D shapes are
         *   made by connecting sets of points called vertices.
         *   A geometry's surface is formed by connecting
         *   vertices to form triangles that are stitched
         *   together. Each triangular patch on the geometry's
         *   surface is called a face.
         *
         *   The geometry's vertices are stored as p5.Vector
         *   objects in the myGeometry.vertices array. The
         *   geometry's first vertex is the p5.Vector object at
         *   myGeometry.vertices[0], its second vertex is
         *   myGeometry.vertices[1], its third vertex is
         *   myGeometry.vertices[2], and so on.
         *
         *   For example, a geometry made from a rectangle has
         *   two faces because a rectangle is made by joining
         *   two triangles. myGeometry.faces for a rectangle
         *   would be the two-dimensional array [[0, 1, 2], [2,
         *   1, 3]]. The first face, myGeometry.faces[0], is
         *   the array [0, 1, 2] because it's formed by
         *   connecting myGeometry.vertices[0],
         *   myGeometry.vertices[1],and myGeometry.vertices[2].
         *   The second face, myGeometry.faces[1], is the array
         *   [2, 1, 3] because it's formed by connecting
         *   myGeometry.vertices[2], myGeometry.vertices[1],and
         *   myGeometry.vertices[3].
         */
        faces: any;

        /**
         *   An array that lists the texture coordinates for
         *   each of the geometry's vertices. In order for
         *   texture() to work, the geometry needs a way to map
         *   the points on its surface to the pixels in a
         *   rectangular image that's used as a texture. The
         *   geometry's vertex at coordinates (x, y, z) maps to
         *   the texture image's pixel at coordinates (u, v).
         *
         *   The myGeometry.uvs array stores the (u, v)
         *   coordinates for each vertex in the order it was
         *   added to the geometry. For example, the first
         *   vertex, myGeometry.vertices[0], has its (u, v)
         *   coordinates stored at myGeometry.uvs[0] and
         *   myGeometry.uvs[1].
         */
        uvs: any;
    }
}
