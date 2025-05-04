// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Framebuffer {
        /**
         *   A class to describe a high-performance drawing
         *   surface for textures. Each p5.Framebuffer object
         *   provides a dedicated drawing surface called a
         *   framebuffer. They're similar to p5.Graphics
         *   objects but can run much faster. Performance is
         *   improved because the framebuffer shares the same
         *   WebGL context as the canvas used to create it.
         *
         *   p5.Framebuffer objects have all the drawing
         *   features of the main canvas. Drawing instructions
         *   meant for the framebuffer must be placed between
         *   calls to myBuffer.begin() and myBuffer.end(). The
         *   resulting image can be applied as a texture by
         *   passing the p5.Framebuffer object to the texture()
         *   function, as in texture(myBuffer). It can also be
         *   displayed on the main canvas by passing it to the
         *   image() function, as in image(myBuffer, 0, 0).
         *
         *   Note: createFramebuffer() is the recommended way
         *   to create an instance of this class.
         *
         *   @param target sketch instance or p5.Graphics
         *   object.
         *   @param [settings] configuration options.
         */
        constructor(target: Graphics, settings?: object);

        /**
         *   Resizes the framebuffer to a given width and
         *   height. The parameters, width and height, set the
         *   dimensions of the framebuffer. For example,
         *   calling myBuffer.resize(300, 500) resizes the
         *   framebuffer to 300×500 pixels, then sets
         *   myBuffer.width to 300 and myBuffer.height 500.
         *   @param width width of the framebuffer.
         *   @param height height of the framebuffer.
         */
        resize(width: number, height: number): void;

        /**
         *   Sets the framebuffer's pixel density or returns
         *   its current density. Computer displays are grids
         *   of little lights called pixels. A display's pixel
         *   density describes how many pixels it packs into an
         *   area. Displays with smaller pixels have a higher
         *   pixel density and create sharper images.
         *
         *   The parameter, density, is optional. If a number
         *   is passed, as in myBuffer.pixelDensity(1), it sets
         *   the framebuffer's pixel density. By default, the
         *   framebuffer's pixel density will match that of the
         *   canvas where it was created. All canvases default
         *   to match the display's pixel density.
         *
         *   Calling myBuffer.pixelDensity() without an
         *   argument returns its current pixel density.
         *   @param [density] pixel density to set.
         *   @return current pixel density.
         */
        pixelDensity(density?: number): number;

        /**
         *   Toggles the framebuffer's autosizing mode or
         *   returns the current mode. By default, the
         *   framebuffer automatically resizes to match the
         *   canvas that created it. Calling
         *   myBuffer.autoSized(false) disables this behavior
         *   and calling myBuffer.autoSized(true) re-enables
         *   it.
         *
         *   Calling myBuffer.autoSized() without an argument
         *   returns true if the framebuffer automatically
         *   resizes and false if not.
         *   @param [autoSized] whether to automatically resize
         *   the framebuffer to match the canvas.
         *   @return current autosize setting.
         */
        autoSized(autoSized?: boolean): boolean;

        /**
         *   Creates a new p5.Camera object to use with the
         *   framebuffer. The new camera is initialized with a
         *   default position (0, 0, 800) and a default
         *   perspective projection. Its properties can be
         *   controlled with p5.Camera methods such as
         *   myCamera.lookAt(0, 0, 0).
         *
         *   Framebuffer cameras should be created between
         *   calls to myBuffer.begin() and myBuffer.end() like
         *   so:
         *
         *   let myCamera; myBuffer.begin(); // Create the
         *   camera for the framebuffer. myCamera =
         *   myBuffer.createCamera(); myBuffer.end();
         *
         *   Calling setCamera() updates the framebuffer's
         *   projection using the camera. resetMatrix() must
         *   also be called for the view to change properly:
         *
         *   myBuffer.begin(); // Set the camera for the
         *   framebuffer. setCamera(myCamera); // Reset all
         *   transformations. resetMatrix(); // Draw stuff...
         *   myBuffer.end();
         *   @return new camera.
         */
        createCamera(): Camera;

        /**
         *   Deletes the framebuffer from GPU memory. Calling
         *   myBuffer.remove() frees the GPU memory used by the
         *   framebuffer. The framebuffer also uses a bit of
         *   memory on the CPU which can be freed like so:
         *
         *   // Delete the framebuffer from GPU memory.
         *   myBuffer.remove(); // Delete the framebuffer from
         *   CPU memory. myBuffer = undefined;
         *
         *   Note: All variables that reference the framebuffer
         *   must be assigned the value undefined to delete the
         *   framebuffer from CPU memory. If any variable still
         *   refers to the framebuffer, then it won't be
         *   garbage collected.
         */
        remove(): void;

        /**
         *   Begins drawing shapes to the framebuffer.
         *   myBuffer.begin() and myBuffer.end() allow shapes
         *   to be drawn to the framebuffer. myBuffer.begin()
         *   begins drawing to the framebuffer and
         *   myBuffer.end() stops drawing to the framebuffer.
         *   Changes won't be visible until the framebuffer is
         *   displayed as an image or texture.
         */
        begin(): void;

        /**
         *   Stops drawing shapes to the framebuffer.
         *   myBuffer.begin() and myBuffer.end() allow shapes
         *   to be drawn to the framebuffer. myBuffer.begin()
         *   begins drawing to the framebuffer and
         *   myBuffer.end() stops drawing to the framebuffer.
         *   Changes won't be visible until the framebuffer is
         *   displayed as an image or texture.
         */
        end(): void;

        /**
         *   Draws to the framebuffer by calling a function
         *   that contains drawing instructions. The parameter,
         *   callback, is a function with the drawing
         *   instructions for the framebuffer. For example,
         *   calling myBuffer.draw(myFunction) will call a
         *   function named myFunction() to draw to the
         *   framebuffer. Doing so has the same effect as the
         *   following:
         *
         *   myBuffer.begin(); myFunction(); myBuffer.end();
         *   @param callback function that draws to the
         *   framebuffer.
         */
        draw(callback: (...args: any[]) => any): void;

        /**
         *   Loads the current value of each pixel in the
         *   framebuffer into its pixels array.
         *   myBuffer.loadPixels() must be called before
         *   reading from or writing to myBuffer.pixels.
         */
        loadPixels(): void;

        /**
         *   Gets a pixel or a region of pixels from the
         *   framebuffer. myBuffer.get() is easy to use but
         *   it's not as fast as myBuffer.pixels. Use
         *   myBuffer.pixels to read many pixel values.
         *
         *   The version of myBuffer.get() with no parameters
         *   returns the entire framebuffer as a a p5.Image
         *   object.
         *
         *   The version of myBuffer.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of myBuffer.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the framebuffer as a
         *   p5.Image object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *   @param x x-coordinate of the pixel. Defaults to 0.
         *   @param y y-coordinate of the pixel. Defaults to 0.
         *   @param w width of the subsection to be returned.
         *   @param h height of the subsection to be returned.
         *   @return subsection as a p5.Image object.
         */
        get(x: number, y: number, w: number, h: number): Image;

        /**
         *   Gets a pixel or a region of pixels from the
         *   framebuffer. myBuffer.get() is easy to use but
         *   it's not as fast as myBuffer.pixels. Use
         *   myBuffer.pixels to read many pixel values.
         *
         *   The version of myBuffer.get() with no parameters
         *   returns the entire framebuffer as a a p5.Image
         *   object.
         *
         *   The version of myBuffer.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of myBuffer.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the framebuffer as a
         *   p5.Image object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *   @return entire framebuffer as a p5.Image object.
         */
        get(): Image;

        /**
         *   Gets a pixel or a region of pixels from the
         *   framebuffer. myBuffer.get() is easy to use but
         *   it's not as fast as myBuffer.pixels. Use
         *   myBuffer.pixels to read many pixel values.
         *
         *   The version of myBuffer.get() with no parameters
         *   returns the entire framebuffer as a a p5.Image
         *   object.
         *
         *   The version of myBuffer.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of myBuffer.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the framebuffer as a
         *   p5.Image object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *   @param x x-coordinate of the pixel. Defaults to 0.
         *   @param y y-coordinate of the pixel. Defaults to 0.
         *   @return color of the pixel at `(x, y)` as an array
         *   of color values `[R, G, B, A]`.
         */
        get(x: number, y: number): number[];

        /**
         *   Updates the framebuffer with the RGBA values in
         *   the pixels array. myBuffer.updatePixels() only
         *   needs to be called after changing values in the
         *   myBuffer.pixels array. Such changes can be made
         *   directly after calling myBuffer.loadPixels().
         */
        updatePixels(): void;

        /**
         *   An array containing the color of each pixel in the
         *   framebuffer. myBuffer.loadPixels() must be called
         *   before accessing the myBuffer.pixels array.
         *   myBuffer.updatePixels() must be called after any
         *   changes are made.
         *
         *   Note: Updating pixels via this property is slower
         *   than drawing to the framebuffer directly. Consider
         *   using a p5.Shader object instead of looping over
         *   myBuffer.pixels.
         */
        pixels: number[];

        /**
         *   An object that stores the framebuffer's color
         *   data. Each framebuffer uses a WebGLTexture object
         *   internally to store its color data. The
         *   myBuffer.color property makes it possible to pass
         *   this data directly to other functions. For
         *   example, calling texture(myBuffer.color) or
         *   myShader.setUniform('colorTexture',
         *   myBuffer.color) may be helpful for advanced use
         *   cases.
         *
         *   Note: By default, a framebuffer's y-coordinates
         *   are flipped compared to images and videos. It's
         *   easy to flip a framebuffer's y-coordinates as
         *   needed when applying it as a texture. For example,
         *   calling plane(myBuffer.width, -myBuffer.height)
         *   will flip the framebuffer.
         */
        color: any;

        /**
         *   An object that stores the framebuffer's depth
         *   data. Each framebuffer uses a WebGLTexture object
         *   internally to store its depth data. The
         *   myBuffer.depth property makes it possible to pass
         *   this data directly to other functions. For
         *   example, calling texture(myBuffer.depth) or
         *   myShader.setUniform('depthTexture',
         *   myBuffer.depth) may be helpful for advanced use
         *   cases.
         *
         *   Note: By default, a framebuffer's y-coordinates
         *   are flipped compared to images and videos. It's
         *   easy to flip a framebuffer's y-coordinates as
         *   needed when applying it as a texture. For example,
         *   calling plane(myBuffer.width, -myBuffer.height)
         *   will flip the framebuffer.
         */
        depth: any;
    }
}
