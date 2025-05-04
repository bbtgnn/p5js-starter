// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Camera {
        // TODO: Fix p5.Camera() errors in src/webgl/p5.Camera.js, line 723:
        //
        //    param "rendererGL" has invalid type: RendererGL
        //
        // constructor(rendererGL: RendererGL);

        /**
         *   Sets a perspective projection for the camera. In a
         *   perspective projection, shapes that are further
         *   from the camera appear smaller than shapes that
         *   are near the camera. This technique, called
         *   foreshortening, creates realistic 3D scenes. It’s
         *   applied by default in new p5.Camera objects.
         *
         *   myCamera.perspective() changes the camera’s
         *   perspective by changing its viewing frustum. The
         *   frustum is the volume of space that’s visible to
         *   the camera. The frustum’s shape is a pyramid with
         *   its top cut off. The camera is placed where the
         *   top of the pyramid should be and points towards
         *   the base of the pyramid. It views everything
         *   within the frustum.
         *
         *   The first parameter, fovy, is the camera’s
         *   vertical field of view. It’s an angle that
         *   describes how tall or narrow a view the camera
         *   has. For example, calling
         *   myCamera.perspective(0.5) sets the camera’s
         *   vertical field of view to 0.5 radians. By default,
         *   fovy is calculated based on the sketch’s height
         *   and the camera’s default z-coordinate, which is
         *   800. The formula for the default fovy is 2 *
         *   atan(height / 2 / 800).
         *
         *   The second parameter, aspect, is the camera’s
         *   aspect ratio. It’s a number that describes the
         *   ratio of the top plane’s width to its height. For
         *   example, calling myCamera.perspective(0.5, 1.5)
         *   sets the camera’s field of view to 0.5 radians and
         *   aspect ratio to 1.5, which would make shapes
         *   appear thinner on a square canvas. By default,
         *   aspect is set to width / height.
         *
         *   The third parameter, near, is the distance from
         *   the camera to the near plane. For example, calling
         *   myCamera.perspective(0.5, 1.5, 100) sets the
         *   camera’s field of view to 0.5 radians, its aspect
         *   ratio to 1.5, and places the near plane 100 pixels
         *   from the camera. Any shapes drawn less than 100
         *   pixels from the camera won’t be visible. By
         *   default, near is set to 0.1 * 800, which is 1/10th
         *   the default distance between the camera and the
         *   origin.
         *
         *   The fourth parameter, far, is the distance from
         *   the camera to the far plane. For example, calling
         *   myCamera.perspective(0.5, 1.5, 100, 10000) sets
         *   the camera’s field of view to 0.5 radians, its
         *   aspect ratio to 1.5, places the near plane 100
         *   pixels from the camera, and places the far plane
         *   10,000 pixels from the camera. Any shapes drawn
         *   more than 10,000 pixels from the camera won’t be
         *   visible. By default, far is set to 10 * 800, which
         *   is 10 times the default distance between the
         *   camera and the origin.
         *   @param [fovy] camera frustum vertical field of
         *   view. Defaults to 2 * atan(height / 2 / 800).
         *   @param [aspect] camera frustum aspect ratio.
         *   Defaults to width / height.
         *   @param [near] distance from the camera to the near
         *   clipping plane. Defaults to 0.1 * 800.
         *   @param [far] distance from the camera to the far
         *   clipping plane. Defaults to 10 * 800.
         */
        perspective(fovy?: number, aspect?: number, near?: number, far?: number): void;

        /**
         *   Sets an orthographic projection for the camera. In
         *   an orthographic projection, shapes with the same
         *   size always appear the same size, regardless of
         *   whether they are near or far from the camera.
         *
         *   myCamera.ortho() changes the camera’s perspective
         *   by changing its viewing frustum from a truncated
         *   pyramid to a rectangular prism. The frustum is the
         *   volume of space that’s visible to the camera. The
         *   camera is placed in front of the frustum and views
         *   everything within the frustum. myCamera.ortho()
         *   has six optional parameters to define the viewing
         *   frustum.
         *
         *   The first four parameters, left, right, bottom,
         *   and top, set the coordinates of the frustum’s
         *   sides, bottom, and top. For example, calling
         *   myCamera.ortho(-100, 100, 200, -200) creates a
         *   frustum that’s 200 pixels wide and 400 pixels
         *   tall. By default, these dimensions are set based
         *   on the sketch’s width and height, as in
         *   myCamera.ortho(-width / 2, width / 2, -height / 2,
         *   height / 2).
         *
         *   The last two parameters, near and far, set the
         *   distance of the frustum’s near and far plane from
         *   the camera. For example, calling
         *   myCamera.ortho(-100, 100, 200, -200, 50, 1000)
         *   creates a frustum that’s 200 pixels wide, 400
         *   pixels tall, starts 50 pixels from the camera, and
         *   ends 1,000 pixels from the camera. By default,
         *   near and far are set to 0 and max(width, height) +
         *   800, respectively.
         *   @param [left] x-coordinate of the frustum’s left
         *   plane. Defaults to -width / 2.
         *   @param [right] x-coordinate of the frustum’s right
         *   plane. Defaults to width / 2.
         *   @param [bottom] y-coordinate of the frustum’s
         *   bottom plane. Defaults to height / 2.
         *   @param [top] y-coordinate of the frustum’s top
         *   plane. Defaults to -height / 2.
         *   @param [near] z-coordinate of the frustum’s near
         *   plane. Defaults to 0.
         *   @param [far] z-coordinate of the frustum’s far
         *   plane. Defaults to max(width, height) + 800.
         */
        ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): void;

        /**
         *   Sets the camera's frustum. In a frustum
         *   projection, shapes that are further from the
         *   camera appear smaller than shapes that are near
         *   the camera. This technique, called foreshortening,
         *   creates realistic 3D scenes.
         *
         *   myCamera.frustum() changes the camera’s
         *   perspective by changing its viewing frustum. The
         *   frustum is the volume of space that’s visible to
         *   the camera. The frustum’s shape is a pyramid with
         *   its top cut off. The camera is placed where the
         *   top of the pyramid should be and points towards
         *   the base of the pyramid. It views everything
         *   within the frustum.
         *
         *   The first four parameters, left, right, bottom,
         *   and top, set the coordinates of the frustum’s
         *   sides, bottom, and top. For example, calling
         *   myCamera.frustum(-100, 100, 200, -200) creates a
         *   frustum that’s 200 pixels wide and 400 pixels
         *   tall. By default, these coordinates are set based
         *   on the sketch’s width and height, as in
         *   myCamera.frustum(-width / 20, width / 20, height /
         *   20, -height / 20).
         *
         *   The last two parameters, near and far, set the
         *   distance of the frustum’s near and far plane from
         *   the camera. For example, calling
         *   myCamera.frustum(-100, 100, 200, -200, 50, 1000)
         *   creates a frustum that’s 200 pixels wide, 400
         *   pixels tall, starts 50 pixels from the camera, and
         *   ends 1,000 pixels from the camera. By default,
         *   near is set to 0.1 * 800, which is 1/10th the
         *   default distance between the camera and the
         *   origin. far is set to 10 * 800, which is 10 times
         *   the default distance between the camera and the
         *   origin.
         *   @param [left] x-coordinate of the frustum’s left
         *   plane. Defaults to -width / 20.
         *   @param [right] x-coordinate of the frustum’s right
         *   plane. Defaults to width / 20.
         *   @param [bottom] y-coordinate of the frustum’s
         *   bottom plane. Defaults to height / 20.
         *   @param [top] y-coordinate of the frustum’s top
         *   plane. Defaults to -height / 20.
         *   @param [near] z-coordinate of the frustum’s near
         *   plane. Defaults to 0.1 * 800.
         *   @param [far] z-coordinate of the frustum’s far
         *   plane. Defaults to 10 * 800.
         */
        frustum(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): void;

        /**
         *   Rotates the camera in a
         *   clockwise/counter-clockwise direction. Rolling
         *   rotates the camera without changing its
         *   orientation. The rotation happens in the camera’s
         *   "local" space.
         *
         *   The parameter, angle, is the angle the camera
         *   should rotate. Passing a positive angle, as in
         *   myCamera.roll(0.001), rotates the camera in
         *   counter-clockwise direction. Passing a negative
         *   angle, as in myCamera.roll(-0.001), rotates the
         *   camera in clockwise direction.
         *
         *   Note: Angles are interpreted based on the current
         *   angleMode().
         *   @param angle amount to rotate camera in current
         *   angleMode units.
         */
        roll(angle: number): void;

        /**
         *   Rotates the camera left and right. Panning rotates
         *   the camera without changing its position. The
         *   rotation happens in the camera’s "local" space.
         *
         *   The parameter, angle, is the angle the camera
         *   should rotate. Passing a positive angle, as in
         *   myCamera.pan(0.001), rotates the camera to the
         *   right. Passing a negative angle, as in
         *   myCamera.pan(-0.001), rotates the camera to the
         *   left.
         *
         *   Note: Angles are interpreted based on the current
         *   angleMode().
         *   @param angle amount to rotate in the current
         *   angleMode().
         */
        pan(angle: number): void;

        /**
         *   Rotates the camera up and down. Tilting rotates
         *   the camera without changing its position. The
         *   rotation happens in the camera’s "local" space.
         *
         *   The parameter, angle, is the angle the camera
         *   should rotate. Passing a positive angle, as in
         *   myCamera.tilt(0.001), rotates the camera down.
         *   Passing a negative angle, as in
         *   myCamera.tilt(-0.001), rotates the camera up.
         *
         *   Note: Angles are interpreted based on the current
         *   angleMode().
         *   @param angle amount to rotate in the current
         *   angleMode().
         */
        tilt(angle: number): void;

        /**
         *   Points the camera at a location. myCamera.lookAt()
         *   changes the camera’s orientation without changing
         *   its position.
         *
         *   The parameters, x, y, and z, are the coordinates
         *   in "world" space where the camera should point.
         *   For example, calling myCamera.lookAt(10, 20, 30)
         *   points the camera at the coordinates (10, 20, 30).
         *   @param x x-coordinate of the position where the
         *   camera should look in "world" space.
         *   @param y y-coordinate of the position where the
         *   camera should look in "world" space.
         *   @param z z-coordinate of the position where the
         *   camera should look in "world" space.
         */
        lookAt(x: number, y: number, z: number): void;

        /**
         *   Sets the position and orientation of the camera.
         *   myCamera.camera() allows objects to be viewed from
         *   different angles. It has nine parameters that are
         *   all optional.
         *
         *   The first three parameters, x, y, and z, are the
         *   coordinates of the camera’s position in "world"
         *   space. For example, calling myCamera.camera(0, 0,
         *   0) places the camera at the origin (0, 0, 0). By
         *   default, the camera is placed at (0, 0, 800).
         *
         *   The next three parameters, centerX, centerY, and
         *   centerZ are the coordinates of the point where the
         *   camera faces in "world" space. For example,
         *   calling myCamera.camera(0, 0, 0, 10, 20, 30)
         *   places the camera at the origin (0, 0, 0) and
         *   points it at (10, 20, 30). By default, the camera
         *   points at the origin (0, 0, 0).
         *
         *   The last three parameters, upX, upY, and upZ are
         *   the components of the "up" vector in "local"
         *   space. The "up" vector orients the camera’s
         *   y-axis. For example, calling myCamera.camera(0, 0,
         *   0, 10, 20, 30, 0, -1, 0) places the camera at the
         *   origin (0, 0, 0), points it at (10, 20, 30), and
         *   sets the "up" vector to (0, -1, 0) which is like
         *   holding it upside-down. By default, the "up"
         *   vector is (0, 1, 0).
         *   @param [x] x-coordinate of the camera. Defaults to
         *   0.
         *   @param [y] y-coordinate of the camera. Defaults to
         *   0.
         *   @param [z] z-coordinate of the camera. Defaults to
         *   800.
         *   @param [centerX] x-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [centerY] y-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [centerZ] z-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [upX] x-component of the camera’s "up"
         *   vector. Defaults to 0.
         *   @param [upY] x-component of the camera’s "up"
         *   vector. Defaults to 1.
         *   @param [upZ] z-component of the camera’s "up"
         *   vector. Defaults to 0.
         */
        camera(
            x?: number,
            y?: number,
            z?: number,
            centerX?: number,
            centerY?: number,
            centerZ?: number,
            upX?: number,
            upY?: number,
            upZ?: number
        ): void;

        /**
         *   Moves the camera along its "local" axes without
         *   changing its orientation. The parameters, x, y,
         *   and z, are the distances the camera should move.
         *   For example, calling myCamera.move(10, 20, 30)
         *   moves the camera 10 pixels to the right, 20 pixels
         *   down, and 30 pixels backward in its "local" space.
         *   @param x distance to move along the camera’s
         *   "local" x-axis.
         *   @param y distance to move along the camera’s
         *   "local" y-axis.
         *   @param z distance to move along the camera’s
         *   "local" z-axis.
         */
        move(x: number, y: number, z: number): void;

        /**
         *   Sets the camera’s position in "world" space
         *   without changing its orientation. The parameters,
         *   x, y, and z, are the coordinates where the camera
         *   should be placed. For example, calling
         *   myCamera.setPosition(10, 20, 30) places the camera
         *   at coordinates (10, 20, 30) in "world" space.
         *   @param x x-coordinate in "world" space.
         *   @param y y-coordinate in "world" space.
         *   @param z z-coordinate in "world" space.
         */
        setPosition(x: number, y: number, z: number): void;

        /**
         *   Sets the camera’s position, orientation, and
         *   projection by copying another camera. The
         *   parameter, cam, is the p5.Camera object to copy.
         *   For example, calling cam2.set(cam1) will set cam2
         *   using cam1’s configuration.
         *   @param cam camera to copy.
         */
        set(cam: Camera): void;

        /**
         *   Sets the camera’s position and orientation to
         *   values that are in-between those of two other
         *   cameras. myCamera.slerp() uses spherical linear
         *   interpolation to calculate a position and
         *   orientation that’s in-between two other cameras.
         *   Doing so is helpful for transitioning smoothly
         *   between two perspectives.
         *
         *   The first two parameters, cam0 and cam1, are the
         *   p5.Camera objects that should be used to set the
         *   current camera.
         *
         *   The third parameter, amt, is the amount to
         *   interpolate between cam0 and cam1. 0.0 keeps the
         *   camera’s position and orientation equal to cam0’s,
         *   0.5 sets them halfway between cam0’s and cam1’s ,
         *   and 1.0 sets the position and orientation equal to
         *   cam1’s.
         *
         *   For example, calling myCamera.slerp(cam0, cam1,
         *   0.1) sets cam’s position and orientation very
         *   close to cam0’s. Calling myCamera.slerp(cam0,
         *   cam1, 0.9) sets cam’s position and orientation
         *   very close to cam1’s.
         *
         *   Note: All of the cameras must use the same
         *   projection.
         *   @param cam0 first camera.
         *   @param cam1 second camera.
         *   @param amt amount of interpolation between 0.0
         *   (cam0) and 1.0 (cam1).
         */
        slerp(cam0: Camera, cam1: Camera, amt: number): void;

        /**
         *   The camera’s x-coordinate. By default, the
         *   camera’s x-coordinate is set to 0 in "world"
         *   space.
         */
        eyeX: number;

        /**
         *   The camera’s y-coordinate. By default, the
         *   camera’s y-coordinate is set to 0 in "world"
         *   space.
         */
        eyeY: number;

        /**
         *   The camera’s z-coordinate. By default, the
         *   camera’s z-coordinate is set to 800 in "world"
         *   space.
         */
        eyeZ: number;

        /**
         *   The x-coordinate of the place where the camera
         *   looks. By default, the camera looks at the origin
         *   (0, 0, 0) in "world" space, so myCamera.centerX is
         *   0.
         */
        centerX: number;

        /**
         *   The y-coordinate of the place where the camera
         *   looks. By default, the camera looks at the origin
         *   (0, 0, 0) in "world" space, so myCamera.centerY is
         *   0.
         */
        centerY: number;

        /**
         *   The y-coordinate of the place where the camera
         *   looks. By default, the camera looks at the origin
         *   (0, 0, 0) in "world" space, so myCamera.centerZ is
         *   0.
         */
        centerZ: number;

        /**
         *   The x-component of the camera's "up" vector. The
         *   camera's "up" vector orients its y-axis. By
         *   default, the "up" vector is (0, 1, 0), so its
         *   x-component is 0 in "local" space.
         */
        upX: number;

        /**
         *   The y-component of the camera's "up" vector. The
         *   camera's "up" vector orients its y-axis. By
         *   default, the "up" vector is (0, 1, 0), so its
         *   y-component is 1 in "local" space.
         */
        upY: number;

        /**
         *   The z-component of the camera's "up" vector. The
         *   camera's "up" vector orients its y-axis. By
         *   default, the "up" vector is (0, 1, 0), so its
         *   z-component is 0 in "local" space.
         */
        upZ: number;
    }
    interface p5InstanceExtensions {
        /**
         *   Sets the position and orientation of the current
         *   camera in a 3D sketch. camera() allows objects to
         *   be viewed from different angles. It has nine
         *   parameters that are all optional.
         *
         *   The first three parameters, x, y, and z, are the
         *   coordinates of the camera’s position. For example,
         *   calling camera(0, 0, 0) places the camera at the
         *   origin (0, 0, 0). By default, the camera is placed
         *   at (0, 0, 800).
         *
         *   The next three parameters, centerX, centerY, and
         *   centerZ are the coordinates of the point where the
         *   camera faces. For example, calling camera(0, 0, 0,
         *   10, 20, 30) places the camera at the origin (0, 0,
         *   0) and points it at (10, 20, 30). By default, the
         *   camera points at the origin (0, 0, 0).
         *
         *   The last three parameters, upX, upY, and upZ are
         *   the components of the "up" vector. The "up" vector
         *   orients the camera’s y-axis. For example, calling
         *   camera(0, 0, 0, 10, 20, 30, 0, -1, 0) places the
         *   camera at the origin (0, 0, 0), points it at (10,
         *   20, 30), and sets the "up" vector to (0, -1, 0)
         *   which is like holding it upside-down. By default,
         *   the "up" vector is (0, 1, 0).
         *
         *   Note: camera() can only be used in WebGL mode.
         *   @param [x] x-coordinate of the camera. Defaults to
         *   0.
         *   @param [y] y-coordinate of the camera. Defaults to
         *   0.
         *   @param [z] z-coordinate of the camera. Defaults to
         *   800.
         *   @param [centerX] x-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [centerY] y-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [centerZ] z-coordinate of the point the
         *   camera faces. Defaults to 0.
         *   @param [upX] x-component of the camera’s "up"
         *   vector. Defaults to 0.
         *   @param [upY] y-component of the camera’s "up"
         *   vector. Defaults to 1.
         *   @param [upZ] z-component of the camera’s "up"
         *   vector. Defaults to 0.
         *   @chainable
         */
        camera(
            x?: number,
            y?: number,
            z?: number,
            centerX?: number,
            centerY?: number,
            centerZ?: number,
            upX?: number,
            upY?: number,
            upZ?: number
        ): p5;

        /**
         *   Sets a perspective projection for the current
         *   camera in a 3D sketch. In a perspective
         *   projection, shapes that are further from the
         *   camera appear smaller than shapes that are near
         *   the camera. This technique, called foreshortening,
         *   creates realistic 3D scenes. It’s applied by
         *   default in WebGL mode.
         *
         *   perspective() changes the camera’s perspective by
         *   changing its viewing frustum. The frustum is the
         *   volume of space that’s visible to the camera. Its
         *   shape is a pyramid with its top cut off. The
         *   camera is placed where the top of the pyramid
         *   should be and views everything between the
         *   frustum’s top (near) plane and its bottom (far)
         *   plane.
         *
         *   The first parameter, fovy, is the camera’s
         *   vertical field of view. It’s an angle that
         *   describes how tall or narrow a view the camera
         *   has. For example, calling perspective(0.5) sets
         *   the camera’s vertical field of view to 0.5
         *   radians. By default, fovy is calculated based on
         *   the sketch’s height and the camera’s default
         *   z-coordinate, which is 800. The formula for the
         *   default fovy is 2 * atan(height / 2 / 800).
         *
         *   The second parameter, aspect, is the camera’s
         *   aspect ratio. It’s a number that describes the
         *   ratio of the top plane’s width to its height. For
         *   example, calling perspective(0.5, 1.5) sets the
         *   camera’s field of view to 0.5 radians and aspect
         *   ratio to 1.5, which would make shapes appear
         *   thinner on a square canvas. By default, aspect is
         *   set to width / height.
         *
         *   The third parameter, near, is the distance from
         *   the camera to the near plane. For example, calling
         *   perspective(0.5, 1.5, 100) sets the camera’s field
         *   of view to 0.5 radians, its aspect ratio to 1.5,
         *   and places the near plane 100 pixels from the
         *   camera. Any shapes drawn less than 100 pixels from
         *   the camera won’t be visible. By default, near is
         *   set to 0.1 * 800, which is 1/10th the default
         *   distance between the camera and the origin.
         *
         *   The fourth parameter, far, is the distance from
         *   the camera to the far plane. For example, calling
         *   perspective(0.5, 1.5, 100, 10000) sets the
         *   camera’s field of view to 0.5 radians, its aspect
         *   ratio to 1.5, places the near plane 100 pixels
         *   from the camera, and places the far plane 10,000
         *   pixels from the camera. Any shapes drawn more than
         *   10,000 pixels from the camera won’t be visible. By
         *   default, far is set to 10 * 800, which is 10 times
         *   the default distance between the camera and the
         *   origin.
         *
         *   Note: perspective() can only be used in WebGL
         *   mode.
         *   @param [fovy] camera frustum vertical field of
         *   view. Defaults to 2 * atan(height / 2 / 800).
         *   @param [aspect] camera frustum aspect ratio.
         *   Defaults to width / height.
         *   @param [near] distance from the camera to the near
         *   clipping plane. Defaults to 0.1 * 800.
         *   @param [far] distance from the camera to the far
         *   clipping plane. Defaults to 10 * 800.
         *   @chainable
         */
        perspective(fovy?: number, aspect?: number, near?: number, far?: number): p5;

        /**
         *   Enables or disables perspective for lines in 3D
         *   sketches. In WebGL mode, lines can be drawn with a
         *   thinner stroke when they’re further from the
         *   camera. Doing so gives them a more realistic
         *   appearance.
         *
         *   By default, lines are drawn differently based on
         *   the type of perspective being used:
         *
         *   - perspective() and frustum() simulate a realistic
         *   perspective. In these modes, stroke weight is
         *   affected by the line’s distance from the camera.
         *   Doing so results in a more natural appearance.
         *   perspective() is the default mode for 3D sketches.
         *   - ortho() doesn’t simulate a realistic
         *   perspective. In this mode, stroke weights are
         *   consistent regardless of the line’s distance from
         *   the camera. Doing so results in a more predictable
         *   and consistent appearance.
         *
         *   linePerspective() can override the default line
         *   drawing mode.
         *
         *   The parameter, enable, is optional. It’s a Boolean
         *   value that sets the way lines are drawn. If true
         *   is passed, as in linePerspective(true), then lines
         *   will appear thinner when they are further from the
         *   camera. If false is passed, as in
         *   linePerspective(false), then lines will have
         *   consistent stroke weights regardless of their
         *   distance from the camera. By default,
         *   linePerspective() is enabled.
         *
         *   Calling linePerspective() without passing an
         *   argument returns true if it's enabled and false if
         *   not.
         *
         *   Note: linePerspective() can only be used in WebGL
         *   mode.
         *   @param enable whether to enable line perspective.
         */
        linePerspective(enable: boolean): void;

        /**
         *   Enables or disables perspective for lines in 3D
         *   sketches. In WebGL mode, lines can be drawn with a
         *   thinner stroke when they’re further from the
         *   camera. Doing so gives them a more realistic
         *   appearance.
         *
         *   By default, lines are drawn differently based on
         *   the type of perspective being used:
         *
         *   - perspective() and frustum() simulate a realistic
         *   perspective. In these modes, stroke weight is
         *   affected by the line’s distance from the camera.
         *   Doing so results in a more natural appearance.
         *   perspective() is the default mode for 3D sketches.
         *   - ortho() doesn’t simulate a realistic
         *   perspective. In this mode, stroke weights are
         *   consistent regardless of the line’s distance from
         *   the camera. Doing so results in a more predictable
         *   and consistent appearance.
         *
         *   linePerspective() can override the default line
         *   drawing mode.
         *
         *   The parameter, enable, is optional. It’s a Boolean
         *   value that sets the way lines are drawn. If true
         *   is passed, as in linePerspective(true), then lines
         *   will appear thinner when they are further from the
         *   camera. If false is passed, as in
         *   linePerspective(false), then lines will have
         *   consistent stroke weights regardless of their
         *   distance from the camera. By default,
         *   linePerspective() is enabled.
         *
         *   Calling linePerspective() without passing an
         *   argument returns true if it's enabled and false if
         *   not.
         *
         *   Note: linePerspective() can only be used in WebGL
         *   mode.
         *   @return whether line perspective is enabled.
         */
        linePerspective(): boolean;

        /**
         *   Sets an orthographic projection for the current
         *   camera in a 3D sketch. In an orthographic
         *   projection, shapes with the same size always
         *   appear the same size, regardless of whether they
         *   are near or far from the camera.
         *
         *   ortho() changes the camera’s perspective by
         *   changing its viewing frustum from a truncated
         *   pyramid to a rectangular prism. The camera is
         *   placed in front of the frustum and views
         *   everything between the frustum’s near plane and
         *   its far plane. ortho() has six optional parameters
         *   to define the frustum.
         *
         *   The first four parameters, left, right, bottom,
         *   and top, set the coordinates of the frustum’s
         *   sides, bottom, and top. For example, calling
         *   ortho(-100, 100, 200, -200) creates a frustum
         *   that’s 200 pixels wide and 400 pixels tall. By
         *   default, these coordinates are set based on the
         *   sketch’s width and height, as in ortho(-width / 2,
         *   width / 2, -height / 2, height / 2).
         *
         *   The last two parameters, near and far, set the
         *   distance of the frustum’s near and far plane from
         *   the camera. For example, calling ortho(-100, 100,
         *   200, 200, 50, 1000) creates a frustum that’s 200
         *   pixels wide, 400 pixels tall, starts 50 pixels
         *   from the camera, and ends 1,000 pixels from the
         *   camera. By default, near and far are set to 0 and
         *   max(width, height) + 800, respectively.
         *
         *   Note: ortho() can only be used in WebGL mode.
         *   @param [left] x-coordinate of the frustum’s left
         *   plane. Defaults to -width / 2.
         *   @param [right] x-coordinate of the frustum’s right
         *   plane. Defaults to width / 2.
         *   @param [bottom] y-coordinate of the frustum’s
         *   bottom plane. Defaults to height / 2.
         *   @param [top] y-coordinate of the frustum’s top
         *   plane. Defaults to -height / 2.
         *   @param [near] z-coordinate of the frustum’s near
         *   plane. Defaults to 0.
         *   @param [far] z-coordinate of the frustum’s far
         *   plane. Defaults to max(width, height) + 800.
         *   @chainable
         */
        ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

        /**
         *   Sets the frustum of the current camera in a 3D
         *   sketch. In a frustum projection, shapes that are
         *   further from the camera appear smaller than shapes
         *   that are near the camera. This technique, called
         *   foreshortening, creates realistic 3D scenes.
         *
         *   frustum() changes the default camera’s perspective
         *   by changing its viewing frustum. The frustum is
         *   the volume of space that’s visible to the camera.
         *   The frustum’s shape is a pyramid with its top cut
         *   off. The camera is placed where the top of the
         *   pyramid should be and points towards the base of
         *   the pyramid. It views everything within the
         *   frustum.
         *
         *   The first four parameters, left, right, bottom,
         *   and top, set the coordinates of the frustum’s
         *   sides, bottom, and top. For example, calling
         *   frustum(-100, 100, 200, -200) creates a frustum
         *   that’s 200 pixels wide and 400 pixels tall. By
         *   default, these coordinates are set based on the
         *   sketch’s width and height, as in ortho(-width /
         *   20, width / 20, height / 20, -height / 20).
         *
         *   The last two parameters, near and far, set the
         *   distance of the frustum’s near and far plane from
         *   the camera. For example, calling ortho(-100, 100,
         *   200, -200, 50, 1000) creates a frustum that’s 200
         *   pixels wide, 400 pixels tall, starts 50 pixels
         *   from the camera, and ends 1,000 pixels from the
         *   camera. By default, near is set to 0.1 * 800,
         *   which is 1/10th the default distance between the
         *   camera and the origin. far is set to 10 * 800,
         *   which is 10 times the default distance between the
         *   camera and the origin.
         *
         *   Note: frustum() can only be used in WebGL mode.
         *   @param [left] x-coordinate of the frustum’s left
         *   plane. Defaults to -width / 20.
         *   @param [right] x-coordinate of the frustum’s right
         *   plane. Defaults to width / 20.
         *   @param [bottom] y-coordinate of the frustum’s
         *   bottom plane. Defaults to height / 20.
         *   @param [top] y-coordinate of the frustum’s top
         *   plane. Defaults to -height / 20.
         *   @param [near] z-coordinate of the frustum’s near
         *   plane. Defaults to 0.1 * 800.
         *   @param [far] z-coordinate of the frustum’s far
         *   plane. Defaults to 10 * 800.
         *   @chainable
         */
        frustum(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

        /**
         *   Creates a new p5.Camera object and sets it as the
         *   current (active) camera. The new camera is
         *   initialized with a default position (0, 0, 800)
         *   and a default perspective projection. Its
         *   properties can be controlled with p5.Camera
         *   methods such as myCamera.lookAt(0, 0, 0).
         *
         *   Note: Every 3D sketch starts with a default camera
         *   initialized. This camera can be controlled with
         *   the functions camera(), perspective(), ortho(),
         *   and frustum() if it's the only camera in the
         *   scene.
         *
         *   Note: createCamera() can only be used in WebGL
         *   mode.
         *   @return the new camera.
         */
        createCamera(): Camera;

        /**
         *   Sets the current (active) camera of a 3D sketch.
         *   setCamera() allows for switching between multiple
         *   cameras created with createCamera().
         *
         *   Note: setCamera() can only be used in WebGL mode.
         *   @param cam camera that should be made active.
         */
        setCamera(cam: Camera): void;
    }
}
