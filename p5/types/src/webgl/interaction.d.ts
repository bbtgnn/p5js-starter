// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Allows the user to orbit around a 3D sketch using
         *   a mouse, trackpad, or touchscreen. 3D sketches are
         *   viewed through an imaginary camera. Calling
         *   orbitControl() within the draw() function allows
         *   the user to change the camera’s position:
         *
         *   function draw() { background(200); // Enable
         *   orbiting with the mouse. orbitControl(); // Rest
         *   of sketch. }
         *
         *   Left-clicking and dragging or swipe motion will
         *   rotate the camera position about the center of the
         *   sketch. Right-clicking and dragging or multi-swipe
         *   will pan the camera position without rotation.
         *   Using the mouse wheel (scrolling) or pinch in/out
         *   will move the camera further or closer from the
         *   center of the sketch.
         *
         *   The first three parameters, sensitivityX,
         *   sensitivityY, and sensitivityZ, are optional.
         *   They’re numbers that set the sketch’s sensitivity
         *   to movement along each axis. For example, calling
         *   orbitControl(1, 2, -1) keeps movement along the
         *   x-axis at its default value, makes the sketch
         *   twice as sensitive to movement along the y-axis,
         *   and reverses motion along the z-axis. By default,
         *   all sensitivity values are 1.
         *
         *   The fourth parameter, options, is also optional.
         *   It’s an object that changes the behavior of
         *   orbiting. For example, calling orbitControl(1, 1,
         *   1, options) keeps the default sensitivity values
         *   while changing the behaviors set with options. The
         *   object can have the following properties:
         *
         *   let options = { // Setting this to false makes
         *   mobile interactions smoother by // preventing
         *   accidental interactions with the page while
         *   orbiting. // By default, it's true.
         *   disableTouchActions: true, // Setting this to true
         *   makes the camera always rotate in the // direction
         *   the mouse/touch is moving. // By default, it's
         *   false. freeRotation: false }; orbitControl(1, 1,
         *   1, options);
         *   @param [sensitivityX] sensitivity to movement
         *   along the x-axis. Defaults to 1.
         *   @param [sensitivityY] sensitivity to movement
         *   along the y-axis. Defaults to 1.
         *   @param [sensitivityZ] sensitivity to movement
         *   along the z-axis. Defaults to 1.
         *   @param [options] object with two optional
         *   properties, disableTouchActions and freeRotation.
         *   Both are Booleans. disableTouchActions defaults to
         *   true and freeRotation defaults to false.
         *   @chainable
         */
        orbitControl(sensitivityX?: number, sensitivityY?: number, sensitivityZ?: number, options?: object): p5;

        /**
         *   Adds a grid and an axes icon to clarify
         *   orientation in 3D sketches. debugMode() adds a
         *   grid that shows where the “ground” is in a sketch.
         *   By default, the grid will run through the origin
         *   (0, 0, 0) of the sketch along the XZ plane.
         *   debugMode() also adds an axes icon that points
         *   along the positive x-, y-, and z-axes. Calling
         *   debugMode() displays the grid and axes icon with
         *   their default size and position.
         *
         *   There are four ways to call debugMode() with
         *   optional parameters to customize the debugging
         *   environment.
         *
         *   The first way to call debugMode() has one
         *   parameter, mode. If the system constant GRID is
         *   passed, as in debugMode(GRID), then the grid will
         *   be displayed and the axes icon will be hidden. If
         *   the constant AXES is passed, as in
         *   debugMode(AXES), then the axes icon will be
         *   displayed and the grid will be hidden.
         *
         *   The second way to call debugMode() has six
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next five
         *   parameters, gridSize, gridDivisions, xOff, yOff,
         *   and zOff are optional. They’re numbers that set
         *   the appearance of the grid (gridSize and
         *   gridDivisions) and the placement of the axes icon
         *   (xOff, yOff, and zOff). For example, calling
         *   debugMode(20, 5, 10, 10, 10) sets the gridSize to
         *   20 pixels, the number of gridDivisions to 5, and
         *   offsets the axes icon by 10 pixels along the x-,
         *   y-, and z-axes.
         *
         *   The third way to call debugMode() has five
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next four
         *   parameters, axesSize, xOff, yOff, and zOff are
         *   optional. They’re numbers that set the appearance
         *   of the size of the axes icon (axesSize) and its
         *   placement (xOff, yOff, and zOff).
         *
         *   The fourth way to call debugMode() has nine
         *   optional parameters. The first five parameters,
         *   gridSize, gridDivisions, gridXOff, gridYOff, and
         *   gridZOff are numbers that set the appearance of
         *   the grid. For example, calling debugMode(100, 5,
         *   0, 0, 0) sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. The
         *   next four parameters, axesSize, xOff, yOff, and
         *   zOff are numbers that set the appearance of the
         *   size of the axes icon (axesSize) and its placement
         *   (axesXOff, axesYOff, and axesZOff). For example,
         *   calling debugMode(100, 5, 0, 0, 0, 50, 10, 10, 10)
         *   sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. It
         *   then sets the axesSize to 50 and offsets the icon
         *   10 pixels along each axis.
         */
        debugMode(): void;

        /**
         *   Adds a grid and an axes icon to clarify
         *   orientation in 3D sketches. debugMode() adds a
         *   grid that shows where the “ground” is in a sketch.
         *   By default, the grid will run through the origin
         *   (0, 0, 0) of the sketch along the XZ plane.
         *   debugMode() also adds an axes icon that points
         *   along the positive x-, y-, and z-axes. Calling
         *   debugMode() displays the grid and axes icon with
         *   their default size and position.
         *
         *   There are four ways to call debugMode() with
         *   optional parameters to customize the debugging
         *   environment.
         *
         *   The first way to call debugMode() has one
         *   parameter, mode. If the system constant GRID is
         *   passed, as in debugMode(GRID), then the grid will
         *   be displayed and the axes icon will be hidden. If
         *   the constant AXES is passed, as in
         *   debugMode(AXES), then the axes icon will be
         *   displayed and the grid will be hidden.
         *
         *   The second way to call debugMode() has six
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next five
         *   parameters, gridSize, gridDivisions, xOff, yOff,
         *   and zOff are optional. They’re numbers that set
         *   the appearance of the grid (gridSize and
         *   gridDivisions) and the placement of the axes icon
         *   (xOff, yOff, and zOff). For example, calling
         *   debugMode(20, 5, 10, 10, 10) sets the gridSize to
         *   20 pixels, the number of gridDivisions to 5, and
         *   offsets the axes icon by 10 pixels along the x-,
         *   y-, and z-axes.
         *
         *   The third way to call debugMode() has five
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next four
         *   parameters, axesSize, xOff, yOff, and zOff are
         *   optional. They’re numbers that set the appearance
         *   of the size of the axes icon (axesSize) and its
         *   placement (xOff, yOff, and zOff).
         *
         *   The fourth way to call debugMode() has nine
         *   optional parameters. The first five parameters,
         *   gridSize, gridDivisions, gridXOff, gridYOff, and
         *   gridZOff are numbers that set the appearance of
         *   the grid. For example, calling debugMode(100, 5,
         *   0, 0, 0) sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. The
         *   next four parameters, axesSize, xOff, yOff, and
         *   zOff are numbers that set the appearance of the
         *   size of the axes icon (axesSize) and its placement
         *   (axesXOff, axesYOff, and axesZOff). For example,
         *   calling debugMode(100, 5, 0, 0, 0, 50, 10, 10, 10)
         *   sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. It
         *   then sets the axesSize to 50 and offsets the icon
         *   10 pixels along each axis.
         *   @param mode either GRID or AXES
         */
        debugMode(mode: DEBUG_MODE): void;

        /**
         *   Adds a grid and an axes icon to clarify
         *   orientation in 3D sketches. debugMode() adds a
         *   grid that shows where the “ground” is in a sketch.
         *   By default, the grid will run through the origin
         *   (0, 0, 0) of the sketch along the XZ plane.
         *   debugMode() also adds an axes icon that points
         *   along the positive x-, y-, and z-axes. Calling
         *   debugMode() displays the grid and axes icon with
         *   their default size and position.
         *
         *   There are four ways to call debugMode() with
         *   optional parameters to customize the debugging
         *   environment.
         *
         *   The first way to call debugMode() has one
         *   parameter, mode. If the system constant GRID is
         *   passed, as in debugMode(GRID), then the grid will
         *   be displayed and the axes icon will be hidden. If
         *   the constant AXES is passed, as in
         *   debugMode(AXES), then the axes icon will be
         *   displayed and the grid will be hidden.
         *
         *   The second way to call debugMode() has six
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next five
         *   parameters, gridSize, gridDivisions, xOff, yOff,
         *   and zOff are optional. They’re numbers that set
         *   the appearance of the grid (gridSize and
         *   gridDivisions) and the placement of the axes icon
         *   (xOff, yOff, and zOff). For example, calling
         *   debugMode(20, 5, 10, 10, 10) sets the gridSize to
         *   20 pixels, the number of gridDivisions to 5, and
         *   offsets the axes icon by 10 pixels along the x-,
         *   y-, and z-axes.
         *
         *   The third way to call debugMode() has five
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next four
         *   parameters, axesSize, xOff, yOff, and zOff are
         *   optional. They’re numbers that set the appearance
         *   of the size of the axes icon (axesSize) and its
         *   placement (xOff, yOff, and zOff).
         *
         *   The fourth way to call debugMode() has nine
         *   optional parameters. The first five parameters,
         *   gridSize, gridDivisions, gridXOff, gridYOff, and
         *   gridZOff are numbers that set the appearance of
         *   the grid. For example, calling debugMode(100, 5,
         *   0, 0, 0) sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. The
         *   next four parameters, axesSize, xOff, yOff, and
         *   zOff are numbers that set the appearance of the
         *   size of the axes icon (axesSize) and its placement
         *   (axesXOff, axesYOff, and axesZOff). For example,
         *   calling debugMode(100, 5, 0, 0, 0, 50, 10, 10, 10)
         *   sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. It
         *   then sets the axesSize to 50 and offsets the icon
         *   10 pixels along each axis.
         *   @param mode either GRID or AXES
         *   @param [gridSize] side length of the grid.
         *   @param [gridDivisions] number of divisions in the
         *   grid.
         *   @param [xOff] offset from origin along the x-axis.
         *   @param [yOff] offset from origin along the y-axis.
         *   @param [zOff] offset from origin along the z-axis.
         */
        debugMode(
            mode: UNKNOWN_P5_CONSTANT,
            gridSize?: number,
            gridDivisions?: number,
            xOff?: number,
            yOff?: number,
            zOff?: number
        ): void;

        /**
         *   Adds a grid and an axes icon to clarify
         *   orientation in 3D sketches. debugMode() adds a
         *   grid that shows where the “ground” is in a sketch.
         *   By default, the grid will run through the origin
         *   (0, 0, 0) of the sketch along the XZ plane.
         *   debugMode() also adds an axes icon that points
         *   along the positive x-, y-, and z-axes. Calling
         *   debugMode() displays the grid and axes icon with
         *   their default size and position.
         *
         *   There are four ways to call debugMode() with
         *   optional parameters to customize the debugging
         *   environment.
         *
         *   The first way to call debugMode() has one
         *   parameter, mode. If the system constant GRID is
         *   passed, as in debugMode(GRID), then the grid will
         *   be displayed and the axes icon will be hidden. If
         *   the constant AXES is passed, as in
         *   debugMode(AXES), then the axes icon will be
         *   displayed and the grid will be hidden.
         *
         *   The second way to call debugMode() has six
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next five
         *   parameters, gridSize, gridDivisions, xOff, yOff,
         *   and zOff are optional. They’re numbers that set
         *   the appearance of the grid (gridSize and
         *   gridDivisions) and the placement of the axes icon
         *   (xOff, yOff, and zOff). For example, calling
         *   debugMode(20, 5, 10, 10, 10) sets the gridSize to
         *   20 pixels, the number of gridDivisions to 5, and
         *   offsets the axes icon by 10 pixels along the x-,
         *   y-, and z-axes.
         *
         *   The third way to call debugMode() has five
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next four
         *   parameters, axesSize, xOff, yOff, and zOff are
         *   optional. They’re numbers that set the appearance
         *   of the size of the axes icon (axesSize) and its
         *   placement (xOff, yOff, and zOff).
         *
         *   The fourth way to call debugMode() has nine
         *   optional parameters. The first five parameters,
         *   gridSize, gridDivisions, gridXOff, gridYOff, and
         *   gridZOff are numbers that set the appearance of
         *   the grid. For example, calling debugMode(100, 5,
         *   0, 0, 0) sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. The
         *   next four parameters, axesSize, xOff, yOff, and
         *   zOff are numbers that set the appearance of the
         *   size of the axes icon (axesSize) and its placement
         *   (axesXOff, axesYOff, and axesZOff). For example,
         *   calling debugMode(100, 5, 0, 0, 0, 50, 10, 10, 10)
         *   sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. It
         *   then sets the axesSize to 50 and offsets the icon
         *   10 pixels along each axis.
         *   @param mode either GRID or AXES
         *   @param [axesSize] length of axes icon markers.
         *   @param [xOff] offset from origin along the x-axis.
         *   @param [yOff] offset from origin along the y-axis.
         *   @param [zOff] offset from origin along the z-axis.
         */
        debugMode(mode: UNKNOWN_P5_CONSTANT, axesSize?: number, xOff?: number, yOff?: number, zOff?: number): void;

        /**
         *   Adds a grid and an axes icon to clarify
         *   orientation in 3D sketches. debugMode() adds a
         *   grid that shows where the “ground” is in a sketch.
         *   By default, the grid will run through the origin
         *   (0, 0, 0) of the sketch along the XZ plane.
         *   debugMode() also adds an axes icon that points
         *   along the positive x-, y-, and z-axes. Calling
         *   debugMode() displays the grid and axes icon with
         *   their default size and position.
         *
         *   There are four ways to call debugMode() with
         *   optional parameters to customize the debugging
         *   environment.
         *
         *   The first way to call debugMode() has one
         *   parameter, mode. If the system constant GRID is
         *   passed, as in debugMode(GRID), then the grid will
         *   be displayed and the axes icon will be hidden. If
         *   the constant AXES is passed, as in
         *   debugMode(AXES), then the axes icon will be
         *   displayed and the grid will be hidden.
         *
         *   The second way to call debugMode() has six
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next five
         *   parameters, gridSize, gridDivisions, xOff, yOff,
         *   and zOff are optional. They’re numbers that set
         *   the appearance of the grid (gridSize and
         *   gridDivisions) and the placement of the axes icon
         *   (xOff, yOff, and zOff). For example, calling
         *   debugMode(20, 5, 10, 10, 10) sets the gridSize to
         *   20 pixels, the number of gridDivisions to 5, and
         *   offsets the axes icon by 10 pixels along the x-,
         *   y-, and z-axes.
         *
         *   The third way to call debugMode() has five
         *   parameters. The first parameter, mode, selects
         *   either GRID or AXES to be displayed. The next four
         *   parameters, axesSize, xOff, yOff, and zOff are
         *   optional. They’re numbers that set the appearance
         *   of the size of the axes icon (axesSize) and its
         *   placement (xOff, yOff, and zOff).
         *
         *   The fourth way to call debugMode() has nine
         *   optional parameters. The first five parameters,
         *   gridSize, gridDivisions, gridXOff, gridYOff, and
         *   gridZOff are numbers that set the appearance of
         *   the grid. For example, calling debugMode(100, 5,
         *   0, 0, 0) sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. The
         *   next four parameters, axesSize, xOff, yOff, and
         *   zOff are numbers that set the appearance of the
         *   size of the axes icon (axesSize) and its placement
         *   (axesXOff, axesYOff, and axesZOff). For example,
         *   calling debugMode(100, 5, 0, 0, 0, 50, 10, 10, 10)
         *   sets the gridSize to 100, the number of
         *   gridDivisions to 5, and sets all the offsets to 0
         *   so that the grid is centered at the origin. It
         *   then sets the axesSize to 50 and offsets the icon
         *   10 pixels along each axis.
         *   @param [gridSize] side length of the grid.
         *   @param [gridDivisions] number of divisions in the
         *   grid.
         *   @param [gridXOff] grid offset from the origin
         *   along the x-axis.
         *   @param [gridYOff] grid offset from the origin
         *   along the y-axis.
         *   @param [gridZOff] grid offset from the origin
         *   along the z-axis.
         *   @param [axesSize] length of axes icon markers.
         *   @param [axesXOff] axes icon offset from the origin
         *   along the x-axis.
         *   @param [axesYOff] axes icon offset from the origin
         *   along the y-axis.
         *   @param [axesZOff] axes icon offset from the origin
         *   along the z-axis.
         */
        debugMode(
            gridSize?: number,
            gridDivisions?: number,
            gridXOff?: number,
            gridYOff?: number,
            gridZOff?: number,
            axesSize?: number,
            axesXOff?: number,
            axesYOff?: number,
            axesZOff?: number
        ): void;

        /**
         *   Turns off debugMode() in a 3D sketch.
         */
        noDebugMode(): void;
    }
}
