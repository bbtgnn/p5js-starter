// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a new p5.Image object. createImage() uses
         *   the width and height parameters to set the new
         *   p5.Image object's dimensions in pixels. The new
         *   p5.Image can be modified by updating its pixels
         *   array or by calling its get() and set() methods.
         *   The loadPixels() method must be called before
         *   reading or modifying pixel values. The
         *   updatePixels() method must be called for updates
         *   to take effect.
         *
         *   Note: The new p5.Image object is transparent by
         *   default.
         *   @param width width in pixels.
         *   @param height height in pixels.
         *   @return new p5.Image object.
         */
        createImage(width: number, height: number): Image;

        /**
         *   Saves the current canvas as an image. By default,
         *   saveCanvas() saves the canvas as a PNG image
         *   called untitled.png.
         *
         *   The first parameter, filename, is optional. It's a
         *   string that sets the file's name. If a file
         *   extension is included, as in
         *   saveCanvas('drawing.png'), then the image will be
         *   saved using that format.
         *
         *   The second parameter, extension, is also optional.
         *   It sets the files format. Either 'png', 'webp', or
         *   'jpg' can be used. For example,
         *   saveCanvas('drawing', 'jpg') saves the canvas to a
         *   file called drawing.jpg.
         *
         *   Note: The browser will either save the file
         *   immediately or prompt the user with a dialogue
         *   window.
         *   @param selectedCanvas reference to a specific
         *   HTML5 canvas element.
         *   @param [filename] file name. Defaults to
         *   'untitled'.
         *   @param [extension] file extension, either 'png',
         *   'webp', or 'jpg'. Defaults to 'png'.
         */
        saveCanvas(
            selectedCanvas: Framebuffer | Element | HTMLCanvasElement,
            filename?: string,
            extension?: string
        ): void;

        /**
         *   Saves the current canvas as an image. By default,
         *   saveCanvas() saves the canvas as a PNG image
         *   called untitled.png.
         *
         *   The first parameter, filename, is optional. It's a
         *   string that sets the file's name. If a file
         *   extension is included, as in
         *   saveCanvas('drawing.png'), then the image will be
         *   saved using that format.
         *
         *   The second parameter, extension, is also optional.
         *   It sets the files format. Either 'png', 'webp', or
         *   'jpg' can be used. For example,
         *   saveCanvas('drawing', 'jpg') saves the canvas to a
         *   file called drawing.jpg.
         *
         *   Note: The browser will either save the file
         *   immediately or prompt the user with a dialogue
         *   window.
         *   @param [filename] file name. Defaults to
         *   'untitled'.
         *   @param [extension] file extension, either 'png',
         *   'webp', or 'jpg'. Defaults to 'png'.
         */
        saveCanvas(filename?: string, extension?: string): void;

        /**
         *   Captures a sequence of frames from the canvas that
         *   can be saved as images. saveFrames() creates an
         *   array of frame objects. Each frame is stored as an
         *   object with its file type, file name, and image
         *   data as a string. For example, the first saved
         *   frame might have the following properties:
         *
         *   { ext: 'png', filename: 'frame0', imageData:
         *   'data:image/octet-stream;base64, abc123' }.
         *
         *   The first parameter, filename, sets the prefix for
         *   the file names. For example, setting the prefix to
         *   'frame' would generate the image files frame0.png,
         *   frame1.png, and so on.
         *
         *   The second parameter, extension, sets the file
         *   type to either 'png' or 'jpg'.
         *
         *   The third parameter, duration, sets the duration
         *   to record in seconds. The maximum duration is 15
         *   seconds.
         *
         *   The fourth parameter, framerate, sets the number
         *   of frames to record per second. The maximum frame
         *   rate value is 22. Limits are placed on duration
         *   and framerate to avoid using too much memory.
         *   Recording large canvases can easily crash sketches
         *   or even web browsers.
         *
         *   The fifth parameter, callback, is optional. If a
         *   function is passed, image files won't be saved by
         *   default. The callback function can be used to
         *   process an array containing the data for each
         *   captured frame. The array of image data contains a
         *   sequence of objects with three properties for each
         *   frame: imageData, filename, and extension.
         *
         *   Note: Frames are downloaded as individual image
         *   files by default.
         *   @param filename prefix of file name.
         *   @param extension file extension, either 'jpg' or
         *   'png'.
         *   @param duration duration in seconds to record.
         *   This parameter will be constrained to be less or
         *   equal to 15.
         *   @param framerate number of frames to save per
         *   second. This parameter will be constrained to be
         *   less or equal to 22.
         *   @param [callback] callback function that will be
         *   executed to handle the image data. This function
         *   should accept an array as argument. The array will
         *   contain the specified number of frames of objects.
         *   Each object has three properties: imageData,
         *   filename, and extension.
         */
        saveFrames(
            filename: string,
            extension: string,
            duration: number,
            framerate: number,
            callback?: (p1: any[]) => any
        ): void;
    }
}
