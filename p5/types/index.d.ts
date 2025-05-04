// Type definitions for p5 1.11
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.9

// This file was auto-generated. Please do not edit it.
/// <reference path="src/accessibility/describe.d.ts" />
/// <reference path="src/accessibility/outputs.d.ts" />
/// <reference path="src/color/creating_reading.d.ts" />
/// <reference path="src/color/setting.d.ts" />
/// <reference path="src/core/shape/2d_primitives.d.ts" />
/// <reference path="src/core/shape/attributes.d.ts" />
/// <reference path="src/core/shape/curves.d.ts" />
/// <reference path="src/core/shape/vertex.d.ts" />
/// <reference path="src/core/constants.d.ts" />
/// <reference path="src/core/environment.d.ts" />
/// <reference path="src/core/rendering.d.ts" />
/// <reference path="src/core/structure.d.ts" />
/// <reference path="src/core/transform.d.ts" />
/// <reference path="src/data/local_storage.d.ts" />
/// <reference path="src/data/p5.TypedDict.d.ts" />
/// <reference path="src/dom/dom.d.ts" />
/// <reference path="src/events/acceleration.d.ts" />
/// <reference path="src/events/keyboard.d.ts" />
/// <reference path="src/events/mouse.d.ts" />
/// <reference path="src/events/touch.d.ts" />
/// <reference path="src/image/image.d.ts" />
/// <reference path="src/image/loading_displaying.d.ts" />
/// <reference path="src/image/pixels.d.ts" />
/// <reference path="src/io/files.d.ts" />
/// <reference path="src/math/calculation.d.ts" />
/// <reference path="src/math/math.d.ts" />
/// <reference path="src/math/noise.d.ts" />
/// <reference path="src/math/random.d.ts" />
/// <reference path="src/math/trigonometry.d.ts" />
/// <reference path="src/typography/attributes.d.ts" />
/// <reference path="src/typography/loading_displaying.d.ts" />
/// <reference path="src/utilities/array_functions.d.ts" />
/// <reference path="src/utilities/conversion.d.ts" />
/// <reference path="src/utilities/string_functions.d.ts" />
/// <reference path="src/utilities/time_date.d.ts" />
/// <reference path="src/webgl/3d_primitives.d.ts" />
/// <reference path="src/webgl/interaction.d.ts" />
/// <reference path="src/webgl/light.d.ts" />
/// <reference path="src/webgl/loading.d.ts" />
/// <reference path="src/webgl/material.d.ts" />
/// <reference path="src/webgl/p5.Camera.d.ts" />
/// <reference path="src/webgl/p5.RendererGL.d.ts" />
/// <reference path="src/color/p5.Color.d.ts" />
/// <reference path="src/core/p5.Element.d.ts" />
/// <reference path="src/core/p5.Graphics.d.ts" />
/// <reference path="src/image/p5.Image.d.ts" />
/// <reference path="src/io/p5.Table.d.ts" />
/// <reference path="src/io/p5.TableRow.d.ts" />
/// <reference path="src/io/p5.XML.d.ts" />
/// <reference path="src/math/p5.Vector.d.ts" />
/// <reference path="src/typography/p5.Font.d.ts" />
/// <reference path="src/webgl/p5.Framebuffer.d.ts" />
/// <reference path="src/webgl/p5.Geometry.d.ts" />
/// <reference path="src/webgl/p5.Shader.d.ts" />
/// <reference path="src/core/p5.Renderer.d.ts" />
/// <reference path="./literals.d.ts" />
/// <reference path="./constants.d.ts" />
export = p5;
declare class p5 {
    /**
     *   This is the p5 instance constructor. A p5 instance
     *   holds all the properties and methods related to a
     *   p5 sketch. It expects an incoming sketch closure
     *   and it can also take an optional node parameter
     *   for attaching the generated p5 canvas to a node.
     *   The sketch closure takes the newly created p5
     *   instance as its sole argument and may optionally
     *   set preload(), setup(), and/or draw() properties
     *   on it for running a sketch.
     *
     *   A p5 sketch can run in "global" or "instance"
     *   mode: "global" - all properties and methods are
     *   attached to the window "instance" - all properties
     *   and methods are bound to this p5 object
     *
     *   @param sketch a closure that can set optional
     *   preload(), setup(), and/or draw() properties on
     *   the given p5 instance
     *   @param [node] element to attach canvas to
     *   @return a p5 instance
     */
    constructor(sketch: (p1: any) => any, node?: HTMLElement);

    /**
     *   A function that's called once to load assets
     *   before the sketch runs. Declaring the function
     *   preload() sets a code block to run once
     *   automatically before setup() or draw(). It's used
     *   to load assets including multimedia files, fonts,
     *   data, and 3D models:
     *
     *   function preload() { // Code to run before the
     *   rest of the sketch. }
     *
     *   Functions such as loadImage(), loadFont(),
     *   loadJSON(), and loadModel() are guaranteed to
     *   either finish loading or raise an error if they're
     *   called within preload(). Doing so ensures that
     *   assets are available when the sketch begins
     *   running.
     */
    preload(): void;

    /**
     *   A function that's called once when the sketch
     *   begins running. Declaring the function setup()
     *   sets a code block to run once automatically when
     *   the sketch starts running. It's used to perform
     *   setup tasks such as creating the canvas and
     *   initializing variables:
     *
     *   function setup() { // Code to run once at the
     *   start of the sketch. }
     *
     *   Code placed in setup() will run once before code
     *   placed in draw() begins looping. If the preload()
     *   is declared, then setup() will run immediately
     *   after preload() finishes loading assets.
     *
     *   Note: setup() doesn’t have to be declared, but
     *   it’s common practice to do so.
     */
    setup(): void;

    /**
     *   A function that's called repeatedly while the
     *   sketch runs. Declaring the function draw() sets a
     *   code block to run repeatedly once the sketch
     *   starts. It’s used to create animations and respond
     *   to user inputs:
     *
     *   function draw() { // Code to run repeatedly. }
     *
     *   This is often called the "draw loop" because p5.js
     *   calls the code in draw() in a loop behind the
     *   scenes. By default, draw() tries to run 60 times
     *   per second. The actual rate depends on many
     *   factors. The drawing rate, called the "frame
     *   rate", can be controlled by calling frameRate().
     *   The number of times draw() has run is stored in
     *   the system variable frameCount().
     *
     *   Code placed within draw() begins looping after
     *   setup() runs. draw() will run until the user
     *   closes the sketch. draw() can be stopped by
     *   calling the noLoop() function. draw() can be
     *   resumed by calling the loop() function.
     */
    draw(): void;

    /**
     *   Removes the sketch from the web page. Calling
     *   remove() stops the draw loop and removes any HTML
     *   elements created by the sketch, including the
     *   canvas. A new sketch can be created by using the
     *   p5() constructor, as in new p5().
     */
    remove(): void;

    /**
     *   Turns off the parts of the Friendly Error System
     *   (FES) that impact performance. The FES can cause
     *   sketches to draw slowly because it does extra work
     *   behind the scenes. For example, the FES checks the
     *   arguments passed to functions, which takes time to
     *   process. Disabling the FES can significantly
     *   improve performance by turning off these checks.
     */
    disableFriendlyErrors: boolean;
}

// tslint:disable-next-line:no-empty-interface
interface p5 extends p5.p5InstanceExtensions {}

declare namespace p5 {
    type UNKNOWN_P5_CONSTANT = any;
    // tslint:disable-next-line:no-empty-interface
    interface p5InstanceExtensions {}
}
