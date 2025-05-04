// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a canvas element on the web page.
         *   createCanvas() creates the main drawing canvas for
         *   a sketch. It should only be called once at the
         *   beginning of setup(). Calling createCanvas() more
         *   than once causes unpredictable behavior.
         *
         *   The first two parameters, width and height, are
         *   optional. They set the dimensions of the canvas
         *   and the values of the width and height system
         *   variables. For example, calling createCanvas(900,
         *   500) creates a canvas that's 900×500 pixels. By
         *   default, width and height are both 100.
         *
         *   The third parameter is also optional. If either of
         *   the constants P2D or WEBGL is passed, as in
         *   createCanvas(900, 500, WEBGL), then it will set
         *   the sketch's rendering mode. If an existing
         *   HTMLCanvasElement is passed, as in
         *   createCanvas(900, 500, myCanvas), then it will be
         *   used by the sketch.
         *
         *   The fourth parameter is also optional. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createCanvas(900, 500, WEBGL, myCanvas), then it
         *   will be used by the sketch.
         *
         *   Note: In WebGL mode, the canvas will use a WebGL2
         *   context if it's supported by the browser. Check
         *   the webglVersion system variable to check what
         *   version is being used, or call setAttributes({
         *   version: 1 }) to create a WebGL1 context.
         *   @param [width] width of the canvas. Defaults to
         *   100.
         *   @param [height] height of the canvas. Defaults to
         *   100.
         *   @param [renderer] either P2D or WEBGL. Defaults to
         *   P2D.
         *   @param [canvas] existing canvas element that
         *   should be used for the sketch.
         *   @return new `p5.Renderer` that holds the canvas.
         */
        createCanvas(width?: number, height?: number, renderer?: RENDERER, canvas?: HTMLCanvasElement): Renderer;

        /**
         *   Creates a canvas element on the web page.
         *   createCanvas() creates the main drawing canvas for
         *   a sketch. It should only be called once at the
         *   beginning of setup(). Calling createCanvas() more
         *   than once causes unpredictable behavior.
         *
         *   The first two parameters, width and height, are
         *   optional. They set the dimensions of the canvas
         *   and the values of the width and height system
         *   variables. For example, calling createCanvas(900,
         *   500) creates a canvas that's 900×500 pixels. By
         *   default, width and height are both 100.
         *
         *   The third parameter is also optional. If either of
         *   the constants P2D or WEBGL is passed, as in
         *   createCanvas(900, 500, WEBGL), then it will set
         *   the sketch's rendering mode. If an existing
         *   HTMLCanvasElement is passed, as in
         *   createCanvas(900, 500, myCanvas), then it will be
         *   used by the sketch.
         *
         *   The fourth parameter is also optional. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createCanvas(900, 500, WEBGL, myCanvas), then it
         *   will be used by the sketch.
         *
         *   Note: In WebGL mode, the canvas will use a WebGL2
         *   context if it's supported by the browser. Check
         *   the webglVersion system variable to check what
         *   version is being used, or call setAttributes({
         *   version: 1 }) to create a WebGL1 context.
         *   @param [width] width of the canvas. Defaults to
         *   100.
         *   @param [height] height of the canvas. Defaults to
         *   100.
         *   @param [canvas] existing canvas element that
         *   should be used for the sketch.
         */
        createCanvas(width?: number, height?: number, canvas?: HTMLCanvasElement): Renderer;

        /**
         *   Resizes the canvas to a given width and height.
         *   resizeCanvas() immediately clears the canvas and
         *   calls redraw(). It's common to call resizeCanvas()
         *   within the body of windowResized() like so:
         *
         *   function windowResized() {
         *   resizeCanvas(windowWidth, windowHeight); }
         *
         *   The first two parameters, width and height, set
         *   the dimensions of the canvas. They also the values
         *   of the width and height system variables. For
         *   example, calling resizeCanvas(300, 500) resizes
         *   the canvas to 300×500 pixels, then sets width to
         *   300 and height 500.
         *
         *   The third parameter, noRedraw, is optional. If
         *   true is passed, as in resizeCanvas(300, 500,
         *   true), then the canvas will be canvas to 300×500
         *   pixels but the redraw() function won't be called
         *   immediately. By default, redraw() is called
         *   immediately when resizeCanvas() finishes
         *   executing.
         *   @param width width of the canvas.
         *   @param height height of the canvas.
         *   @param [noRedraw] whether to delay calling
         *   redraw(). Defaults to false.
         */
        resizeCanvas(width: number, height: number, noRedraw?: boolean): void;

        /**
         *   Removes the default canvas. By default, a 100×100
         *   pixels canvas is created without needing to call
         *   createCanvas(). noCanvas() removes the default
         *   canvas for sketches that don't need it.
         */
        noCanvas(): void;

        /**
         *   Creates a p5.Graphics object. createGraphics()
         *   creates an offscreen drawing canvas (graphics
         *   buffer) and returns it as a p5.Graphics object.
         *   Drawing to a separate graphics buffer can be
         *   helpful for performance and for organizing code.
         *
         *   The first two parameters, width and height, are
         *   optional. They set the dimensions of the
         *   p5.Graphics object. For example, calling
         *   createGraphics(900, 500) creates a graphics buffer
         *   that's 900×500 pixels.
         *
         *   The third parameter is also optional. If either of
         *   the constants P2D or WEBGL is passed, as in
         *   createGraphics(900, 500, WEBGL), then it will set
         *   the p5.Graphics object's rendering mode. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createGraphics(900, 500, myCanvas), then it will
         *   be used by the graphics buffer.
         *
         *   The fourth parameter is also optional. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createGraphics(900, 500, WEBGL, myCanvas), then it
         *   will be used by the graphics buffer.
         *
         *   Note: In WebGL mode, the p5.Graphics object will
         *   use a WebGL2 context if it's supported by the
         *   browser. Check the webglVersion system variable to
         *   check what version is being used, or call
         *   setAttributes({ version: 1 }) to create a WebGL1
         *   context.
         *   @param width width of the graphics buffer.
         *   @param height height of the graphics buffer.
         *   @param [renderer] either P2D or WEBGL. Defaults to
         *   P2D.
         *   @param [canvas] existing canvas element that
         *   should be used for the graphics buffer..
         *   @return new graphics buffer.
         */
        createGraphics(width: number, height: number, renderer?: RENDERER, canvas?: HTMLCanvasElement): Graphics;

        /**
         *   Creates a p5.Graphics object. createGraphics()
         *   creates an offscreen drawing canvas (graphics
         *   buffer) and returns it as a p5.Graphics object.
         *   Drawing to a separate graphics buffer can be
         *   helpful for performance and for organizing code.
         *
         *   The first two parameters, width and height, are
         *   optional. They set the dimensions of the
         *   p5.Graphics object. For example, calling
         *   createGraphics(900, 500) creates a graphics buffer
         *   that's 900×500 pixels.
         *
         *   The third parameter is also optional. If either of
         *   the constants P2D or WEBGL is passed, as in
         *   createGraphics(900, 500, WEBGL), then it will set
         *   the p5.Graphics object's rendering mode. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createGraphics(900, 500, myCanvas), then it will
         *   be used by the graphics buffer.
         *
         *   The fourth parameter is also optional. If an
         *   existing HTMLCanvasElement is passed, as in
         *   createGraphics(900, 500, WEBGL, myCanvas), then it
         *   will be used by the graphics buffer.
         *
         *   Note: In WebGL mode, the p5.Graphics object will
         *   use a WebGL2 context if it's supported by the
         *   browser. Check the webglVersion system variable to
         *   check what version is being used, or call
         *   setAttributes({ version: 1 }) to create a WebGL1
         *   context.
         *   @param width width of the graphics buffer.
         *   @param height height of the graphics buffer.
         *   @param [canvas] existing canvas element that
         *   should be used for the graphics buffer..
         */
        createGraphics(width: number, height: number, canvas?: HTMLCanvasElement): Graphics;

        /**
         *   Creates and a new p5.Framebuffer object.
         *   p5.Framebuffer objects are separate drawing
         *   surfaces that can be used as textures in WebGL
         *   mode. They're similar to p5.Graphics objects and
         *   generally run much faster when used as textures.
         *
         *   The parameter, options, is optional. An object can
         *   be passed to configure the p5.Framebuffer object.
         *   The available properties are:
         *
         *   - format: data format of the texture, either
         *   UNSIGNED_BYTE, FLOAT, or HALF_FLOAT. Default is
         *   UNSIGNED_BYTE.
         *   - channels: whether to store RGB or RGBA color
         *   channels. Default is to match the main canvas
         *   which is RGBA.
         *   - depth: whether to include a depth buffer.
         *   Default is true.
         *   - depthFormat: data format of depth information,
         *   either UNSIGNED_INT or FLOAT. Default is FLOAT.
         *   - stencil: whether to include a stencil buffer for
         *   masking. depth must be true for this feature to
         *   work. Defaults to the value of depth which is
         *   true.
         *   - antialias: whether to perform anti-aliasing. If
         *   set to true, as in { antialias: true }, 2 samples
         *   will be used by default. The number of samples can
         *   also be set, as in { antialias: 4 }. Default is to
         *   match setAttributes() which is false (true in
         *   Safari).
         *   - width: width of the p5.Framebuffer object.
         *   Default is to always match the main canvas width.
         *   - height: height of the p5.Framebuffer object.
         *   Default is to always match the main canvas height.
         *   - density: pixel density of the p5.Framebuffer
         *   object. Default is to always match the main canvas
         *   pixel density.
         *   - textureFiltering: how to read values from the
         *   p5.Framebuffer object. Either LINEAR (nearby
         *   pixels will be interpolated) or NEAREST (no
         *   interpolation). Generally, use LINEAR when using
         *   the texture as an image and NEAREST if reading the
         *   texture as data. Default is LINEAR.
         *
         *   If the width, height, or density attributes are
         *   set, they won't automatically match the main
         *   canvas and must be changed manually.
         *
         *   Note: createFramebuffer() can only be used in
         *   WebGL mode.
         *   @param [options] configuration options.
         *   @return new framebuffer.
         */
        createFramebuffer(options?: object): Framebuffer;

        /**
         *   Clears the depth buffer in WebGL mode.
         *   clearDepth() clears information about how far
         *   objects are from the camera in 3D space. This
         *   information is stored in an object called the
         *   depth buffer. Clearing the depth buffer ensures
         *   new objects aren't drawn behind old ones. Doing so
         *   can be useful for feedback effects in which the
         *   previous frame serves as the background for the
         *   current frame.
         *
         *   The parameter, depth, is optional. If a number is
         *   passed, as in clearDepth(0.5), it determines the
         *   range of objects to clear from the depth buffer. 0
         *   doesn't clear any depth information, 0.5 clears
         *   depth information halfway between the near and far
         *   clipping planes, and 1 clears depth information
         *   all the way to the far clipping plane. By default,
         *   depth is 1.
         *
         *   Note: clearDepth() can only be used in WebGL mode.
         *   @param [depth] amount of the depth buffer to clear
         *   between 0 (none) and 1 (far clipping plane).
         *   Defaults to 1.
         */
        clearDepth(depth?: number): void;

        /**
         *   Sets the way colors blend when added to the
         *   canvas. By default, drawing with a solid color
         *   paints over the current pixel values on the
         *   canvas. blendMode() offers many options for
         *   blending colors.
         *
         *   Shapes, images, and text can be used as sources
         *   for drawing to the canvas. A source pixel changes
         *   the color of the canvas pixel where it's drawn.
         *   The final color results from blending the source
         *   pixel's color with the canvas pixel's color. RGB
         *   color values from the source and canvas pixels are
         *   compared, added, subtracted, multiplied, and
         *   divided to create different effects. Red values
         *   with red values, greens with greens, and blues
         *   with blues.
         *
         *   The parameter, mode, sets the blend mode. For
         *   example, calling blendMode(ADD) sets the blend
         *   mode to ADD. The following blend modes are
         *   available in both 2D and WebGL mode:
         *
         *   - BLEND: color values from the source overwrite
         *   the canvas. This is the default mode.
         *   - ADD: color values from the source are added to
         *   values from the canvas.
         *   - DARKEST: keeps the darkest color value.
         *   - LIGHTEST: keeps the lightest color value.
         *   - EXCLUSION: similar to DIFFERENCE but with less
         *   contrast.
         *   - MULTIPLY: color values from the source are
         *   multiplied with values from the canvas. The result
         *   is always darker.
         *   - SCREEN: all color values are inverted, then
         *   multiplied, then inverted again. The result is
         *   always lighter. (Opposite of MULTIPLY)
         *   - REPLACE: the last source drawn completely
         *   replaces the rest of the canvas.
         *   - REMOVE: overlapping pixels are removed by making
         *   them completely transparent.
         *
         *   The following blend modes are only available in 2D
         *   mode:
         *
         *   - DIFFERENCE: color values from the source are
         *   subtracted from the values from the canvas. If the
         *   difference is a negative number, it's made
         *   positive.
         *   - OVERLAY: combines MULTIPLY and SCREEN. Dark
         *   values in the canvas get darker and light values
         *   get lighter.
         *   - HARD_LIGHT: combines MULTIPLY and SCREEN. Dark
         *   values in the source get darker and light values
         *   get lighter.
         *   - SOFT_LIGHT: a softer version of HARD_LIGHT.
         *   - DODGE: lightens light tones and increases
         *   contrast. Divides the canvas color values by the
         *   inverted color values from the source.
         *   - BURN: darkens dark tones and increases contrast.
         *   Divides the source color values by the inverted
         *   color values from the canvas, then inverts the
         *   result.
         *
         *   The following blend modes are only available in
         *   WebGL mode:
         *
         *   - SUBTRACT: RGB values from the source are
         *   subtracted from the values from the canvas. If the
         *   difference is a negative number, it's made
         *   positive. Alpha (transparency) values from the
         *   source and canvas are added.
         *   @param mode blend mode to set. either BLEND,
         *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
         *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
         *   SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
         */
        blendMode(mode: BLEND_MODE): void;

        /**
         *   A system variable that provides direct access to
         *   the sketch's <canvas> element. The <canvas>
         *   element provides many specialized features that
         *   aren't included in the p5.js library. The
         *   drawingContext system variable provides access to
         *   these features by exposing the sketch's
         *   CanvasRenderingContext2D object.
         */
        drawingContext: any;
    }
}
