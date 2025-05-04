// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Displays text in the web browser's console.
         *   print() is helpful for printing values while
         *   debugging. Each call to print() creates a new line
         *   of text.
         *
         *   Note: Call print('\n') to print a blank line.
         *   Calling print() without an argument opens the
         *   browser's dialog for printing documents.
         *   @param contents content to print to the console.
         */
        print(contents: any): void;

        /**
         *   Changes the cursor's appearance. The first
         *   parameter, type, sets the type of cursor to
         *   display. The built-in options are ARROW, CROSS,
         *   HAND, MOVE, TEXT, and WAIT. cursor() also
         *   recognizes standard CSS cursor properties passed
         *   as strings: 'help', 'wait', 'crosshair',
         *   'not-allowed', 'zoom-in', and 'grab'. If the path
         *   to an image is passed, as in
         *   cursor('assets/target.png'), then the image will
         *   be used as the cursor. Images must be in .cur,
         *   .gif, .jpg, .jpeg, or .png format and should be at
         *   most 32 by 32 pixels large.
         *
         *   The parameters x and y are optional. If an image
         *   is used for the cursor, x and y set the location
         *   pointed to within the image. They are both 0 by
         *   default, so the cursor points to the image's
         *   top-left corner. x and y must be less than the
         *   image's width and height, respectively.
         *   @param type Built-in: either ARROW, CROSS, HAND,
         *   MOVE, TEXT, or WAIT. Native CSS properties:
         *   'grab', 'progress', and so on. Path to cursor
         *   image.
         *   @param [x] horizontal active spot of the cursor.
         *   @param [y] vertical active spot of the cursor.
         */
        cursor(type: string | CURSOR_TYPE, x?: number, y?: number): void;

        /**
         *   Sets the number of frames to draw per second.
         *   Calling frameRate() with one numeric argument, as
         *   in frameRate(30), attempts to draw 30 frames per
         *   second (FPS). The target frame rate may not be
         *   achieved depending on the sketch's processing
         *   needs. Most computers default to a frame rate of
         *   60 FPS. Frame rates of 24 FPS and above are fast
         *   enough for smooth animations.
         *
         *   Calling frameRate() without an argument returns
         *   the current frame rate. The value returned is an
         *   approximation.
         *   @param fps number of frames to draw per second.
         *   @chainable
         */
        frameRate(fps: number): p5;

        /**
         *   Sets the number of frames to draw per second.
         *   Calling frameRate() with one numeric argument, as
         *   in frameRate(30), attempts to draw 30 frames per
         *   second (FPS). The target frame rate may not be
         *   achieved depending on the sketch's processing
         *   needs. Most computers default to a frame rate of
         *   60 FPS. Frame rates of 24 FPS and above are fast
         *   enough for smooth animations.
         *
         *   Calling frameRate() without an argument returns
         *   the current frame rate. The value returned is an
         *   approximation.
         *   @return current frame rate.
         */
        frameRate(): number;

        /**
         *   Returns the target frame rate. The value is either
         *   the system frame rate or the last value passed to
         *   frameRate().
         *   @return _targetFrameRate
         */
        getTargetFrameRate(): number;

        /**
         *   Hides the cursor from view.
         */
        noCursor(): void;

        /**
         *   A function that's called when the browser window
         *   is resized. Code placed in the body of
         *   windowResized() will run when the browser window's
         *   size changes. It's a good place to call
         *   resizeCanvas() or make other adjustments to
         *   accommodate the new window size.
         *
         *   The event parameter is optional. If added to the
         *   function declaration, it can be used for debugging
         *   or other purposes.
         *   @param [event] optional resize Event.
         */
        windowResized(event?: UIEvent): void;

        /**
         *   Toggles full-screen mode or returns the current
         *   mode. Calling fullscreen(true) makes the sketch
         *   full-screen. Calling fullscreen(false) makes the
         *   sketch its original size.
         *
         *   Calling fullscreen() without an argument returns
         *   true if the sketch is in full-screen mode and
         *   false if not.
         *
         *   Note: Due to browser restrictions, fullscreen()
         *   can only be called with user input such as a mouse
         *   press.
         *   @param [val] whether the sketch should be in
         *   fullscreen mode.
         *   @return current fullscreen state.
         */
        fullscreen(val?: boolean): boolean;

        /**
         *   Sets the pixel density or returns the current
         *   density. Computer displays are grids of little
         *   lights called pixels. A display's pixel density
         *   describes how many pixels it packs into an area.
         *   Displays with smaller pixels have a higher pixel
         *   density and create sharper images.
         *
         *   pixelDensity() sets the pixel scaling for high
         *   pixel density displays. By default, the pixel
         *   density is set to match the display's density.
         *   Calling pixelDensity(1) turn this off.
         *
         *   Calling pixelDensity() without an argument returns
         *   the current pixel density.
         *   @param [val] desired pixel density.
         *   @chainable
         */
        pixelDensity(val?: number): p5;

        /**
         *   Sets the pixel density or returns the current
         *   density. Computer displays are grids of little
         *   lights called pixels. A display's pixel density
         *   describes how many pixels it packs into an area.
         *   Displays with smaller pixels have a higher pixel
         *   density and create sharper images.
         *
         *   pixelDensity() sets the pixel scaling for high
         *   pixel density displays. By default, the pixel
         *   density is set to match the display's density.
         *   Calling pixelDensity(1) turn this off.
         *
         *   Calling pixelDensity() without an argument returns
         *   the current pixel density.
         *   @return current pixel density of the sketch.
         */
        pixelDensity(): number;

        /**
         *   Returns the display's current pixel density.
         *   @return current pixel density of the display.
         */
        displayDensity(): number;

        /**
         *   Returns the sketch's current URL as a String.
         *   @return url
         */
        getURL(): string;

        /**
         *   Returns the current URL path as an Array of
         *   Strings. For example, consider a sketch hosted at
         *   the URL https://example.com/sketchbook. Calling
         *   getURLPath() returns ['sketchbook']. For a sketch
         *   hosted at the URL
         *   https://example.com/sketchbook/monday,
         *   getURLPath() returns ['sketchbook', 'monday'].
         *   @return path components.
         */
        getURLPath(): string[];

        /**
         *   Returns the current URL parameters in an Object.
         *   For example, calling getURLParams() in a sketch
         *   hosted at the URL
         *   https://p5js.org?year=2014&month=May&day=15
         *   returns { year: 2014, month: 'May', day: 15 }.
         *   @return URL params
         */
        getURLParams(): object;

        /**
         *   A Number variable that tracks the number of frames
         *   drawn since the sketch started. frameCount's value
         *   is 0 inside setup(). It increments by 1 each time
         *   the code in draw() finishes executing.
         */
        frameCount: number;

        /**
         *   A Number variable that tracks the number of
         *   milliseconds it took to draw the last frame.
         *   deltaTime contains the amount of time it took
         *   draw() to execute during the previous frame. It's
         *   useful for simulating physics.
         */
        deltaTime: number;

        /**
         *   A Boolean variable that's true if the browser is
         *   focused and false if not. Note: The browser window
         *   can only receive input if it's focused.
         */
        focused: boolean;

        /**
         *   A String variable with the WebGL version in use.
         *   webglVersion's value equals one of the following
         *   string constants:
         *
         *   - WEBGL2 whose value is 'webgl2',
         *   - WEBGL whose value is 'webgl', or
         *   - P2D whose value is 'p2d'. This is the default
         *   for 2D sketches.
         *
         *   See setAttributes() for ways to set the WebGL
         *   version.
         */
        webglVersion: string;

        /**
         *   A Number variable that stores the width of the
         *   screen display. displayWidth is useful for running
         *   full-screen programs. Its value depends on the
         *   current pixelDensity().
         *
         *   Note: The actual screen width can be computed as
         *   displayWidth * pixelDensity().
         */
        displayWidth: number;

        /**
         *   A Number variable that stores the height of the
         *   screen display. displayHeight is useful for
         *   running full-screen programs. Its value depends on
         *   the current pixelDensity().
         *
         *   Note: The actual screen height can be computed as
         *   displayHeight * pixelDensity().
         */
        displayHeight: number;

        /**
         *   A Number variable that stores the width of the
         *   browser's viewport. The layout viewport is the
         *   area within the browser that's available for
         *   drawing.
         */
        windowWidth: number;

        /**
         *   A Number variable that stores the height of the
         *   browser's viewport. The layout viewport is the
         *   area within the browser that's available for
         *   drawing.
         */
        windowHeight: number;

        /**
         *   A Number variable that stores the width of the
         *   canvas in pixels. width's default value is 100.
         *   Calling createCanvas() or resizeCanvas() changes
         *   the value of width. Calling noCanvas() sets its
         *   value to 0.
         */
        width: number;

        /**
         *   A Number variable that stores the height of the
         *   canvas in pixels. height's default value is 100.
         *   Calling createCanvas() or resizeCanvas() changes
         *   the value of height. Calling noCanvas() sets its
         *   value to 0.
         */
        height: number;
    }
}
