// Global mode type definitions for p5

// This file was auto-generated. Please do not edit it.

/// <reference path="./lib/addons/p5.sound.d.ts" />
import * as p5 from './index';
declare global {
    /**
     *   Creates a screen reader-accessible description of
     *   the canvas. The first parameter, text, is the
     *   description of the canvas.
     *
     *   The second parameter, display, is optional. It
     *   determines how the description is displayed. If
     *   LABEL is passed, as in describe('A description.',
     *   LABEL), the description will be visible in a div
     *   element next to the canvas. If FALLBACK is passed,
     *   as in describe('A description.', FALLBACK), the
     *   description will only be visible to screen
     *   readers. This is the default mode.
     *
     *   Read Writing accessible canvas descriptions to
     *   learn more about making sketches accessible.
     *   @param text description of the canvas.
     *   @param [display] either LABEL or FALLBACK.
     */
    function describe(text: string, display?: p5.DESCRIBE_DISPLAY): void;

    /**
     *   Creates a screen reader-accessible description of
     *   elements in the canvas. Elements are shapes or
     *   groups of shapes that create meaning together. For
     *   example, a few overlapping circles could make an
     *   "eye" element.
     *
     *   The first parameter, name, is the name of the
     *   element.
     *
     *   The second parameter, text, is the description of
     *   the element.
     *
     *   The third parameter, display, is optional. It
     *   determines how the description is displayed. If
     *   LABEL is passed, as in describe('A description.',
     *   LABEL), the description will be visible in a div
     *   element next to the canvas. Using LABEL creates
     *   unhelpful duplicates for screen readers. Only use
     *   LABEL during development. If FALLBACK is passed,
     *   as in describe('A description.', FALLBACK), the
     *   description will only be visible to screen
     *   readers. This is the default mode.
     *
     *   Read Writing accessible canvas descriptions to
     *   learn more about making sketches accessible.
     *   @param name name of the element.
     *   @param text description of the element.
     *   @param [display] either LABEL or FALLBACK.
     */
    function describeElement(name: string, text: string, display?: p5.DESCRIBE_DISPLAY): void;

    /**
     *   Creates a screen reader-accessible description of
     *   shapes on the canvas. textOutput() adds a general
     *   description, list of shapes, and table of shapes
     *   to the web page. The general description includes
     *   the canvas size, canvas color, and number of
     *   shapes. For example, Your output is a, 100 by 100
     *   pixels, gray canvas containing the following 2
     *   shapes:.
     *
     *   A list of shapes follows the general description.
     *   The list describes the color, location, and area
     *   of each shape. For example, a red circle at middle
     *   covering 3% of the canvas. Each shape can be
     *   selected to get more details.
     *
     *   textOutput() uses its table of shapes as a list.
     *   The table describes the shape, color, location,
     *   coordinates and area. For example, red circle
     *   location = middle area = 3%. This is different
     *   from gridOutput(), which uses its table as a grid.
     *
     *   The display parameter is optional. It determines
     *   how the description is displayed. If LABEL is
     *   passed, as in textOutput(LABEL), the description
     *   will be visible in a div element next to the
     *   canvas. Using LABEL creates unhelpful duplicates
     *   for screen readers. Only use LABEL during
     *   development. If FALLBACK is passed, as in
     *   textOutput(FALLBACK), the description will only be
     *   visible to screen readers. This is the default
     *   mode.
     *
     *   Read Writing accessible canvas descriptions to
     *   learn more about making sketches accessible.
     *   @param [display] either FALLBACK or LABEL.
     */
    function textOutput(display?: p5.TEXT_DISPLAY): void;

    /**
     *   Creates a screen reader-accessible description of
     *   shapes on the canvas. gridOutput() adds a general
     *   description, table of shapes, and list of shapes
     *   to the web page. The general description includes
     *   the canvas size, canvas color, and number of
     *   shapes. For example, gray canvas, 100 by 100
     *   pixels, contains 2 shapes: 1 circle 1 square.
     *
     *   gridOutput() uses its table of shapes as a grid.
     *   Each shape in the grid is placed in a cell whose
     *   row and column correspond to the shape's location
     *   on the canvas. The grid cells describe the color
     *   and type of shape at that location. For example,
     *   red circle. These descriptions can be selected
     *   individually to get more details. This is
     *   different from textOutput(), which uses its table
     *   as a list.
     *
     *   A list of shapes follows the table. The list
     *   describes the color, type, location, and area of
     *   each shape. For example, red circle, location =
     *   middle, area = 3 %.
     *
     *   The display parameter is optional. It determines
     *   how the description is displayed. If LABEL is
     *   passed, as in gridOutput(LABEL), the description
     *   will be visible in a div element next to the
     *   canvas. Using LABEL creates unhelpful duplicates
     *   for screen readers. Only use LABEL during
     *   development. If FALLBACK is passed, as in
     *   gridOutput(FALLBACK), the description will only be
     *   visible to screen readers. This is the default
     *   mode.
     *
     *   Read Writing accessible canvas descriptions to
     *   learn more about making sketches accessible.
     *   @param [display] either FALLBACK or LABEL.
     */
    function gridOutput(display?: p5.GRID_DISPLAY): void;

    /**
     *   Gets the alpha (transparency) value of a color.
     *   alpha() extracts the alpha value from a p5.Color
     *   object, an array of color components, or a CSS
     *   color string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the alpha value.
     */
    function alpha(color: p5.Color | number[] | string): number;

    /**
     *   Gets the blue value of a color. blue() extracts
     *   the blue value from a p5.Color object, an array of
     *   color components, or a CSS color string.
     *
     *   By default, blue() returns a color's blue value in
     *   the range 0 to 255. If the colorMode() is set to
     *   RGB, it returns the blue value in the given range.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the blue value.
     */
    function blue(color: p5.Color | number[] | string): number;

    /**
     *   Gets the brightness value of a color. brightness()
     *   extracts the HSB brightness value from a p5.Color
     *   object, an array of color components, or a CSS
     *   color string.
     *
     *   By default, brightness() returns a color's HSB
     *   brightness in the range 0 to 100. If the
     *   colorMode() is set to HSB, it returns the
     *   brightness value in the given range.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the brightness value.
     */
    function brightness(color: p5.Color | number[] | string): number;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of color() with one parameter
     *   interprets the value one of two ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param gray number specifying value between white
     *   and black.
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255).
     *   @return resulting color.
     */
    function color(gray: number, alpha?: number): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of color() with one parameter
     *   interprets the value one of two ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param v1 red or hue value relative to the current
     *   color range.
     *   @param v2 green or saturation value relative to
     *   the current color range.
     *   @param v3 blue or brightness value relative to the
     *   current color range.
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255).
     */
    function color(v1: number, v2: number, v3: number, alpha?: number): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of color() with one parameter
     *   interprets the value one of two ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param value a color string.
     */
    function color(value: string): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of color() with one parameter
     *   interprets the value one of two ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param values an array containing the red, green,
     *   blue, and alpha components of the color.
     */
    function color(values: number[]): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of color() with one parameter
     *   interprets the value one of two ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     */
    function color(color: p5.Color): p5.Color;

    /**
     *   Gets the green value of a color. green() extracts
     *   the green value from a p5.Color object, an array
     *   of color components, or a CSS color string.
     *
     *   By default, green() returns a color's green value
     *   in the range 0 to 255. If the colorMode() is set
     *   to RGB, it returns the green value in the given
     *   range.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the green value.
     */
    function green(color: p5.Color | number[] | string): number;

    /**
     *   Gets the hue value of a color. hue() extracts the
     *   hue value from a p5.Color object, an array of
     *   color components, or a CSS color string.
     *
     *   Hue describes a color's position on the color
     *   wheel. By default, hue() returns a color's HSL hue
     *   in the range 0 to 360. If the colorMode() is set
     *   to HSB or HSL, it returns the hue value in the
     *   given mode.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the hue value.
     */
    function hue(color: p5.Color | number[] | string): number;

    /**
     *   Blends two colors to find a third color between
     *   them. The amt parameter specifies the amount to
     *   interpolate between the two values. 0 is equal to
     *   the first color, 0.1 is very near the first color,
     *   0.5 is halfway between the two colors, and so on.
     *   Negative numbers are set to 0. Numbers greater
     *   than 1 are set to 1. This differs from the
     *   behavior of lerp. It's necessary because numbers
     *   outside of the interval [0, 1] will produce
     *   strange and unexpected colors.
     *
     *   The way that colors are interpolated depends on
     *   the current colorMode().
     *   @param c1 interpolate from this color (any value
     *   created by the color() function).
     *   @param c2 interpolate to this color (any value
     *   created by the color() function).
     *   @param amt number between 0 and 1.
     *   @return interpolated color.
     */
    function lerpColor(c1: p5.Color, c2: p5.Color, amt: number): p5.Color;

    /**
     *   Blends multiple colors to find a color between
     *   them. The amt parameter specifies the amount to
     *   interpolate between the color stops which are
     *   colors at each amt value "location" with amt
     *   values that are between 2 color stops
     *   interpolating between them based on its relative
     *   distance to both.
     *
     *   The way that colors are interpolated depends on
     *   the current colorMode().
     *   @param colors_stops color stops to interpolate
     *   from
     *   @param amt number to use to interpolate relative
     *   to color stops
     *   @return interpolated color.
     */
    function paletteLerp(colors_stops: [], amt: number): p5.Color;

    /**
     *   Gets the lightness value of a color. lightness()
     *   extracts the HSL lightness value from a p5.Color
     *   object, an array of color components, or a CSS
     *   color string.
     *
     *   By default, lightness() returns a color's HSL
     *   lightness in the range 0 to 100. If the
     *   colorMode() is set to HSL, it returns the
     *   lightness value in the given range.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the lightness value.
     */
    function lightness(color: p5.Color | number[] | string): number;

    /**
     *   Gets the red value of a color. red() extracts the
     *   red value from a p5.Color object, an array of
     *   color components, or a CSS color string.
     *
     *   By default, red() returns a color's red value in
     *   the range 0 to 255. If the colorMode() is set to
     *   RGB, it returns the red value in the given range.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the red value.
     */
    function red(color: p5.Color | number[] | string): number;

    /**
     *   Gets the saturation value of a color. saturation()
     *   extracts the saturation value from a p5.Color
     *   object, an array of color components, or a CSS
     *   color string.
     *
     *   Saturation is scaled differently in HSB and HSL.
     *   By default, saturation() returns a color's HSL
     *   saturation in the range 0 to 100. If the
     *   colorMode() is set to HSB or HSL, it returns the
     *   saturation value in the given mode.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the saturation value
     */
    function saturation(color: p5.Color | number[] | string): number;

    /**
     *   Starts defining a shape that will mask any shapes
     *   drawn afterward. Any shapes drawn between
     *   beginClip() and endClip() will add to the mask
     *   shape. The mask will apply to anything drawn after
     *   endClip().
     *
     *   The parameter, options, is optional. If an object
     *   with an invert property is passed, as in
     *   beginClip({ invert: true }), it will be used to
     *   set the masking mode. { invert: true } inverts the
     *   mask, creating holes in shapes that are masked.
     *   invert is false by default.
     *
     *   Masks can be contained between the push() and
     *   pop() functions. Doing so allows unmasked shapes
     *   to be drawn after masked shapes.
     *
     *   Masks can also be defined in a callback function
     *   that's passed to clip().
     *   @param [options] an object containing clip
     *   settings.
     */
    function beginClip(options?: object): void;

    /**
     *   Ends defining a mask that was started with
     *   beginClip().
     */
    function endClip(): void;

    /**
     *   Defines a shape that will mask any shapes drawn
     *   afterward. The first parameter, callback, is a
     *   function that defines the mask. Any shapes drawn
     *   in callback will add to the mask shape. The mask
     *   will apply to anything drawn after clip() is
     *   called.
     *
     *   The second parameter, options, is optional. If an
     *   object with an invert property is passed, as in
     *   beginClip({ invert: true }), it will be used to
     *   set the masking mode. { invert: true } inverts the
     *   mask, creating holes in shapes that are masked.
     *   invert is false by default.
     *
     *   Masks can be contained between the push() and
     *   pop() functions. Doing so allows unmasked shapes
     *   to be drawn after masked shapes.
     *
     *   Masks can also be defined with beginClip() and
     *   endClip().
     *   @param callback a function that draws the mask
     *   shape.
     *   @param [options] an object containing clip
     *   settings.
     */
    function clip(callback: (...args: any[]) => any, options?: object): void;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param color any value created by the color()
     *   function
     *   @chainable
     */
    function background(color: p5.Color): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param colorstring color string, possible formats
     *   include: integer rgb() or rgba(), percentage rgb()
     *   or rgba(), 3-digit hex, 6-digit hex.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(colorstring: string, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param gray specifies a value between white and
     *   black.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(gray: number, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param v1 red value if color mode is RGB, or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB, or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB, or
     *   brightness value if color mode is HSB.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(v1: number, v2: number, v3: number, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param values an array containing the red, green,
     *   blue and alpha components of the color.
     *   @chainable
     */
    function background(values: number[]): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   background() is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param image image created with loadImage() or
     *   createImage(), to set as background. (must be same
     *   size as the sketch window).
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(image: p5.Image, a?: number): p5;

    /**
     *   Clears the pixels on the canvas. clear() makes
     *   every pixel 100% transparent. Calling clear()
     *   doesn't clear objects created by createX()
     *   functions such as createGraphics(), createVideo(),
     *   and createImg(). These objects will remain
     *   unchanged after calling clear() and can be
     *   redrawn.
     *
     *   In WebGL mode, this function can clear the screen
     *   to a specific color. It interprets four numeric
     *   parameters as normalized RGBA color values. It
     *   also clears the depth buffer. If you are not using
     *   the WebGL renderer, these parameters will have no
     *   effect.
     *   @param [r] normalized red value.
     *   @param [g] normalized green value.
     *   @param [b] normalized blue value.
     *   @param [a] normalized alpha value.
     *   @chainable
     */
    function clear(r?: number, g?: number, b?: number, a?: number): p5;

    /**
     *   Changes the way color values are interpreted. By
     *   default, the Number parameters for fill(),
     *   stroke(), background(), and color() are defined by
     *   values between 0 and 255 using the RGB color
     *   model. This is equivalent to calling
     *   colorMode(RGB, 255). Pure red is color(255, 0, 0)
     *   in this model.
     *
     *   Calling colorMode(RGB, 100) sets colors to use RGB
     *   color values between 0 and 100. Pure red is
     *   color(100, 0, 0) in this model.
     *
     *   Calling colorMode(HSB) or colorMode(HSL) changes
     *   to HSB or HSL system instead of RGB. Pure red is
     *   color(0, 100, 100) in HSB and color(0, 100, 50) in
     *   HSL.
     *
     *   p5.Color objects remember the mode that they were
     *   created in. Changing modes doesn't affect their
     *   appearance.
     *   @param mode either RGB, HSB or HSL, corresponding
     *   to Red/Green/Blue and Hue/Saturation/Brightness
     *   (or Lightness).
     *   @param [max] range for all values.
     *   @chainable
     */
    function colorMode(mode: p5.COLOR_MODE, max?: number): p5;

    /**
     *   Changes the way color values are interpreted. By
     *   default, the Number parameters for fill(),
     *   stroke(), background(), and color() are defined by
     *   values between 0 and 255 using the RGB color
     *   model. This is equivalent to calling
     *   colorMode(RGB, 255). Pure red is color(255, 0, 0)
     *   in this model.
     *
     *   Calling colorMode(RGB, 100) sets colors to use RGB
     *   color values between 0 and 100. Pure red is
     *   color(100, 0, 0) in this model.
     *
     *   Calling colorMode(HSB) or colorMode(HSL) changes
     *   to HSB or HSL system instead of RGB. Pure red is
     *   color(0, 100, 100) in HSB and color(0, 100, 50) in
     *   HSL.
     *
     *   p5.Color objects remember the mode that they were
     *   created in. Changing modes doesn't affect their
     *   appearance.
     *   @param mode either RGB, HSB or HSL, corresponding
     *   to Red/Green/Blue and Hue/Saturation/Brightness
     *   (or Lightness).
     *   @param max1 range for the red or hue depending on
     *   the current color mode.
     *   @param max2 range for the green or saturation
     *   depending on the current color mode.
     *   @param max3 range for the blue or
     *   brightness/lightness depending on the current
     *   color mode.
     *   @param [maxA] range for the alpha.
     *   @chainable
     */
    function colorMode(mode: p5.UNKNOWN_P5_CONSTANT, max1: number, max2: number, max3: number, maxA?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange.
     *
     *   The version of fill() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param v1 red value if color mode is RGB or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB or
     *   brightness value if color mode is HSB.
     *   @param [alpha] alpha value, controls transparency
     *   (0 - transparent, 255 - opaque).
     *   @chainable
     */
    function fill(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange.
     *
     *   The version of fill() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param value a color string.
     *   @chainable
     */
    function fill(value: string): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange.
     *
     *   The version of fill() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param gray a grayscale value.
     *   @param [alpha] alpha value, controls transparency
     *   (0 - transparent, 255 - opaque).
     *   @chainable
     */
    function fill(gray: number, alpha?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange.
     *
     *   The version of fill() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param values an array containing the red, green,
     *   blue & and alpha components of the color.
     *   @chainable
     */
    function fill(values: number[]): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange.
     *
     *   The version of fill() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param color the fill color.
     *   @chainable
     */
    function fill(color: p5.Color): p5;

    /**
     *   Disables setting the fill color for shapes.
     *   Calling noFill() is the same as making the fill
     *   completely transparent, as in fill(0, 0). If both
     *   noStroke() and noFill() are called, nothing will
     *   be drawn to the screen.
     *   @chainable
     */
    function noFill(): p5;

    /**
     *   Disables drawing points, lines, and the outlines
     *   of shapes. Calling noStroke() is the same as
     *   making the stroke completely transparent, as in
     *   stroke(0, 0). If both noStroke() and noFill() are
     *   called, nothing will be drawn to the screen.
     *   @chainable
     */
    function noStroke(): p5;

    /**
     *   Sets the color used to draw points, lines, and the
     *   outlines of shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after
     *   calling stroke() will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of stroke() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the stroke
     *   color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param v1 red value if color mode is RGB or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB or
     *   brightness value if color mode is HSB.
     *   @param [alpha] alpha value, controls transparency
     *   (0 - transparent, 255 - opaque).
     *   @chainable
     */
    function stroke(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the color used to draw points, lines, and the
     *   outlines of shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after
     *   calling stroke() will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of stroke() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the stroke
     *   color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param value a color string.
     *   @chainable
     */
    function stroke(value: string): p5;

    /**
     *   Sets the color used to draw points, lines, and the
     *   outlines of shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after
     *   calling stroke() will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of stroke() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the stroke
     *   color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param gray a grayscale value.
     *   @param [alpha] alpha value, controls transparency
     *   (0 - transparent, 255 - opaque).
     *   @chainable
     */
    function stroke(gray: number, alpha?: number): p5;

    /**
     *   Sets the color used to draw points, lines, and the
     *   outlines of shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after
     *   calling stroke() will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of stroke() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the stroke
     *   color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param values an array containing the red, green,
     *   blue, and alpha components of the color.
     *   @chainable
     */
    function stroke(values: number[]): p5;

    /**
     *   Sets the color used to draw points, lines, and the
     *   outlines of shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after
     *   calling stroke() will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function.
     *
     *   The version of stroke() with one parameter
     *   interprets the value one of three ways. If the
     *   parameter is a Number, it's interpreted as a
     *   grayscale value. If the parameter is a String,
     *   it's interpreted as a CSS color string. A p5.Color
     *   object can also be provided to set the stroke
     *   color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param color the stroke color.
     *   @chainable
     */
    function stroke(color: p5.Color): p5;

    /**
     *   Starts using shapes to erase parts of the canvas.
     *   All drawing that follows erase() will subtract
     *   from the canvas, revealing the web page
     *   underneath. The erased areas will become
     *   transparent, allowing the content behind the
     *   canvas to show through. The fill(), stroke(), and
     *   blendMode() have no effect once erase() is called.
     *
     *   The erase() function has two optional parameters.
     *   The first parameter sets the strength of erasing
     *   by the shape's interior. A value of 0 means that
     *   no erasing will occur. A value of 255 means that
     *   the shape's interior will fully erase the content
     *   underneath. The default value is 255 (full
     *   strength).
     *
     *   The second parameter sets the strength of erasing
     *   by the shape's edge. A value of 0 means that no
     *   erasing will occur. A value of 255 means that the
     *   shape's edge will fully erase the content
     *   underneath. The default value is 255 (full
     *   strength).
     *
     *   To cancel the erasing effect, use the noErase()
     *   function.
     *
     *   erase() has no effect on drawing done with the
     *   image() and background() functions.
     *   @param [strengthFill] a number (0-255) for the
     *   strength of erasing under a shape's interior.
     *   Defaults to 255, which is full strength.
     *   @param [strengthStroke] a number (0-255) for the
     *   strength of erasing under a shape's edge. Defaults
     *   to 255, which is full strength.
     *   @chainable
     */
    function erase(strengthFill?: number, strengthStroke?: number): p5;

    /**
     *   Ends erasing that was started with erase(). The
     *   fill(), stroke(), and blendMode() settings will
     *   return to what they were prior to calling erase().
     *   @chainable
     */
    function noErase(): p5;

    /**
     *   Draws an arc. An arc is a section of an ellipse
     *   defined by the x, y, w, and h parameters. x and y
     *   set the location of the arc's center. w and h set
     *   the arc's width and height. See ellipse() and
     *   ellipseMode() for more details.
     *
     *   The fifth and sixth parameters, start and stop,
     *   set the angles between which to draw the arc. Arcs
     *   are always drawn clockwise from start to stop. The
     *   fifth and sixth parameters, start and stop, set
     *   the angles between which to draw the arc. Arcs are
     *   always drawn clockwise from start to stop. By
     *   default, angles are given in radians, but if
     *   angleMode (DEGREES) is set, the function
     *   interprets the values in degrees.
     *
     *   The seventh parameter, mode, is optional. It
     *   determines the arc's fill style. The fill modes
     *   are a semi-circle (OPEN), a closed semi-circle
     *   (CHORD), or a closed pie segment (PIE).
     *
     *   The eighth parameter, detail, is also optional. It
     *   determines how many vertices are used to draw the
     *   arc in WebGL mode. The default value is 25.
     *   @param x x-coordinate of the arc's ellipse.
     *   @param y y-coordinate of the arc's ellipse.
     *   @param w width of the arc's ellipse by default.
     *   @param h height of the arc's ellipse by default.
     *   @param start angle to start the arc, specified in
     *   radians.
     *   @param stop angle to stop the arc, specified in
     *   radians.
     *   @param [mode] optional parameter to determine the
     *   way of drawing the arc. either CHORD, PIE, or
     *   OPEN.
     *   @param [detail] optional parameter for WebGL mode
     *   only. This is to specify the number of vertices
     *   that makes up the perimeter of the arc. Default
     *   value is 25. Won't draw a stroke for a detail of
     *   more than 50.
     *   @chainable
     */
    function arc(
        x: number,
        y: number,
        w: number,
        h: number,
        start: number,
        stop: number,
        mode?: p5.ARC_MODE,
        detail?: number
    ): p5;

    /**
     *   Draws an ellipse (oval). An ellipse is a round
     *   shape defined by the x, y, w, and h parameters. x
     *   and y set the location of its center. w and h set
     *   its width and height. See ellipseMode() for other
     *   ways to set its position.
     *
     *   If no height is set, the value of width is used
     *   for both the width and height. If a negative
     *   height or width is specified, the absolute value
     *   is taken.
     *
     *   The fifth parameter, detail, is also optional. It
     *   determines how many vertices are used to draw the
     *   ellipse in WebGL mode. The default value is 25.
     *   @param x x-coordinate of the center of the
     *   ellipse.
     *   @param y y-coordinate of the center of the
     *   ellipse.
     *   @param w width of the ellipse.
     *   @param [h] height of the ellipse.
     *   @chainable
     */
    function ellipse(x: number, y: number, w: number, h?: number): p5;

    /**
     *   Draws an ellipse (oval). An ellipse is a round
     *   shape defined by the x, y, w, and h parameters. x
     *   and y set the location of its center. w and h set
     *   its width and height. See ellipseMode() for other
     *   ways to set its position.
     *
     *   If no height is set, the value of width is used
     *   for both the width and height. If a negative
     *   height or width is specified, the absolute value
     *   is taken.
     *
     *   The fifth parameter, detail, is also optional. It
     *   determines how many vertices are used to draw the
     *   ellipse in WebGL mode. The default value is 25.
     *   @param x x-coordinate of the center of the
     *   ellipse.
     *   @param y y-coordinate of the center of the
     *   ellipse.
     *   @param w width of the ellipse.
     *   @param h height of the ellipse.
     *   @param [detail] optional parameter for WebGL mode
     *   only. This is to specify the number of vertices
     *   that makes up the perimeter of the ellipse.
     *   Default value is 25. Won't draw a stroke for a
     *   detail of more than 50.
     */
    function ellipse(x: number, y: number, w: number, h: number, detail?: number): void;

    /**
     *   Draws a circle. A circle is a round shape defined
     *   by the x, y, and d parameters. x and y set the
     *   location of its center. d sets its width and
     *   height (diameter). Every point on the circle's
     *   edge is the same distance, 0.5 * d, from its
     *   center. 0.5 * d (half the diameter) is the
     *   circle's radius. See ellipseMode() for other ways
     *   to set its position.
     *   @param x x-coordinate of the center of the circle.
     *   @param y y-coordinate of the center of the circle.
     *   @param d diameter of the circle.
     *   @chainable
     */
    function circle(x: number, y: number, d: number): p5;

    /**
     *   Draws a straight line between two points. A line's
     *   default width is one pixel. The version of line()
     *   with four parameters draws the line in 2D. To
     *   color a line, use the stroke() function. To change
     *   its width, use the strokeWeight() function. A line
     *   can't be filled, so the fill() function won't
     *   affect the line's color.
     *
     *   The version of line() with six parameters allows
     *   the line to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @chainable
     */
    function line(x1: number, y1: number, x2: number, y2: number): p5;

    /**
     *   Draws a straight line between two points. A line's
     *   default width is one pixel. The version of line()
     *   with four parameters draws the line in 2D. To
     *   color a line, use the stroke() function. To change
     *   its width, use the strokeWeight() function. A line
     *   can't be filled, so the fill() function won't
     *   affect the line's color.
     *
     *   The version of line() with six parameters allows
     *   the line to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param z1 the z-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param z2 the z-coordinate of the second point.
     *   @chainable
     */
    function line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): p5;

    /**
     *   Draws a single point in space. A point's default
     *   width is one pixel. To color a point, use the
     *   stroke() function. To change its width, use the
     *   strokeWeight() function. A point can't be filled,
     *   so the fill() function won't affect the point's
     *   color.
     *
     *   The version of point() with two parameters allows
     *   the point's location to be set with its x- and
     *   y-coordinates, as in point(10, 20).
     *
     *   The version of point() with three parameters
     *   allows the point to be drawn in 3D space with x-,
     *   y-, and z-coordinates, as in point(10, 20, 30).
     *   Doing so requires adding the WEBGL argument to
     *   createCanvas().
     *
     *   The version of point() with one parameter allows
     *   the point's location to be set with a p5.Vector
     *   object.
     *   @param x the x-coordinate.
     *   @param y the y-coordinate.
     *   @param [z] the z-coordinate (for WebGL mode).
     *   @chainable
     */
    function point(x: number, y: number, z?: number): p5;

    /**
     *   Draws a single point in space. A point's default
     *   width is one pixel. To color a point, use the
     *   stroke() function. To change its width, use the
     *   strokeWeight() function. A point can't be filled,
     *   so the fill() function won't affect the point's
     *   color.
     *
     *   The version of point() with two parameters allows
     *   the point's location to be set with its x- and
     *   y-coordinates, as in point(10, 20).
     *
     *   The version of point() with three parameters
     *   allows the point to be drawn in 3D space with x-,
     *   y-, and z-coordinates, as in point(10, 20, 30).
     *   Doing so requires adding the WEBGL argument to
     *   createCanvas().
     *
     *   The version of point() with one parameter allows
     *   the point's location to be set with a p5.Vector
     *   object.
     *   @param coordinateVector the coordinate vector.
     *   @chainable
     */
    function point(coordinateVector: p5.Vector): p5;

    /**
     *   Draws a quadrilateral (four-sided shape).
     *   Quadrilaterals include rectangles, squares,
     *   rhombuses, and trapezoids. The first pair of
     *   parameters (x1, y1) sets the quad's first point.
     *   The next three pairs of parameters set the
     *   coordinates for its next three points (x2, y2),
     *   (x3, y3), and (x4, y4). Points should be added in
     *   either clockwise or counter-clockwise order.
     *
     *   The version of quad() with twelve parameters
     *   allows the quad to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *
     *   The thirteenth and fourteenth parameters are
     *   optional. In WebGL mode, they set the number of
     *   segments used to draw the quadrilateral in the x-
     *   and y-directions. They're both 2 by default.
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param x3 the x-coordinate of the third point.
     *   @param y3 the y-coordinate of the third point.
     *   @param x4 the x-coordinate of the fourth point.
     *   @param y4 the y-coordinate of the fourth point.
     *   @param [detailX] number of segments in the
     *   x-direction.
     *   @param [detailY] number of segments in the
     *   y-direction.
     *   @chainable
     */
    function quad(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
        detailX?: number,
        detailY?: number
    ): p5;

    /**
     *   Draws a quadrilateral (four-sided shape).
     *   Quadrilaterals include rectangles, squares,
     *   rhombuses, and trapezoids. The first pair of
     *   parameters (x1, y1) sets the quad's first point.
     *   The next three pairs of parameters set the
     *   coordinates for its next three points (x2, y2),
     *   (x3, y3), and (x4, y4). Points should be added in
     *   either clockwise or counter-clockwise order.
     *
     *   The version of quad() with twelve parameters
     *   allows the quad to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *
     *   The thirteenth and fourteenth parameters are
     *   optional. In WebGL mode, they set the number of
     *   segments used to draw the quadrilateral in the x-
     *   and y-directions. They're both 2 by default.
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param z1 the z-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param z2 the z-coordinate of the second point.
     *   @param x3 the x-coordinate of the third point.
     *   @param y3 the y-coordinate of the third point.
     *   @param z3 the z-coordinate of the third point.
     *   @param x4 the x-coordinate of the fourth point.
     *   @param y4 the y-coordinate of the fourth point.
     *   @param z4 the z-coordinate of the fourth point.
     *   @param [detailX] number of segments in the
     *   x-direction.
     *   @param [detailY] number of segments in the
     *   y-direction.
     *   @chainable
     */
    function quad(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number,
        detailX?: number,
        detailY?: number
    ): p5;

    /**
     *   Draws a rectangle. A rectangle is a four-sided
     *   shape defined by the x, y, w, and h parameters. x
     *   and y set the location of its top-left corner. w
     *   sets its width and h sets its height. Every angle
     *   in the rectangle measures 90˚. See rectMode() for
     *   other ways to define rectangles.
     *
     *   The version of rect() with five parameters creates
     *   a rounded rectangle. The fifth parameter sets the
     *   radius for all four corners.
     *
     *   The version of rect() with eight parameters also
     *   creates a rounded rectangle. Each of the last four
     *   parameters set the radius of a corner. The radii
     *   start with the top-left corner and move clockwise
     *   around the rectangle. If any of these parameters
     *   are omitted, they are set to the value of the last
     *   radius that was set.
     *   @param x x-coordinate of the rectangle.
     *   @param y y-coordinate of the rectangle.
     *   @param w width of the rectangle.
     *   @param [h] height of the rectangle.
     *   @param [tl] optional radius of top-left corner.
     *   @param [tr] optional radius of top-right corner.
     *   @param [br] optional radius of bottom-right
     *   corner.
     *   @param [bl] optional radius of bottom-left corner.
     *   @chainable
     */
    function rect(x: number, y: number, w: number, h?: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

    /**
     *   Draws a rectangle. A rectangle is a four-sided
     *   shape defined by the x, y, w, and h parameters. x
     *   and y set the location of its top-left corner. w
     *   sets its width and h sets its height. Every angle
     *   in the rectangle measures 90˚. See rectMode() for
     *   other ways to define rectangles.
     *
     *   The version of rect() with five parameters creates
     *   a rounded rectangle. The fifth parameter sets the
     *   radius for all four corners.
     *
     *   The version of rect() with eight parameters also
     *   creates a rounded rectangle. Each of the last four
     *   parameters set the radius of a corner. The radii
     *   start with the top-left corner and move clockwise
     *   around the rectangle. If any of these parameters
     *   are omitted, they are set to the value of the last
     *   radius that was set.
     *   @param x x-coordinate of the rectangle.
     *   @param y y-coordinate of the rectangle.
     *   @param w width of the rectangle.
     *   @param h height of the rectangle.
     *   @param [detailX] number of segments in the
     *   x-direction (for WebGL mode).
     *   @param [detailY] number of segments in the
     *   y-direction (for WebGL mode).
     *   @chainable
     */
    function rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draws a square. A square is a four-sided shape
     *   defined by the x, y, and s parameters. x and y set
     *   the location of its top-left corner. s sets its
     *   width and height. Every angle in the square
     *   measures 90˚ and all its sides are the same
     *   length. See rectMode() for other ways to define
     *   squares.
     *
     *   The version of square() with four parameters
     *   creates a rounded square. The fourth parameter
     *   sets the radius for all four corners.
     *
     *   The version of square() with seven parameters also
     *   creates a rounded square. Each of the last four
     *   parameters set the radius of a corner. The radii
     *   start with the top-left corner and move clockwise
     *   around the square. If any of these parameters are
     *   omitted, they are set to the value of the last
     *   radius that was set.
     *   @param x x-coordinate of the square.
     *   @param y y-coordinate of the square.
     *   @param s side size of the square.
     *   @param [tl] optional radius of top-left corner.
     *   @param [tr] optional radius of top-right corner.
     *   @param [br] optional radius of bottom-right
     *   corner.
     *   @param [bl] optional radius of bottom-left corner.
     *   @chainable
     */
    function square(x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

    /**
     *   Draws a triangle. A triangle is a three-sided
     *   shape defined by three points. The first two
     *   parameters specify the triangle's first point (x1,
     *   y1). The middle two parameters specify its second
     *   point (x2, y2). And the last two parameters
     *   specify its third point (x3, y3).
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @param x3 x-coordinate of the third point.
     *   @param y3 y-coordinate of the third point.
     *   @chainable
     */
    function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;

    /**
     *   Changes where ellipses, circles, and arcs are
     *   drawn. By default, the first two parameters of
     *   ellipse(), circle(), and arc() are the x- and
     *   y-coordinates of the shape's center. The next
     *   parameters set the shape's width and height. This
     *   is the same as calling ellipseMode(CENTER).
     *
     *   ellipseMode(RADIUS) also uses the first two
     *   parameters to set the x- and y-coordinates of the
     *   shape's center. The next parameters are half of
     *   the shapes's width and height. Calling ellipse(0,
     *   0, 10, 15) draws a shape with a width of 20 and
     *   height of 30.
     *
     *   ellipseMode(CORNER) uses the first two parameters
     *   as the upper-left corner of the shape. The next
     *   parameters are its width and height.
     *
     *   ellipseMode(CORNERS) uses the first two parameters
     *   as the location of one corner of the ellipse's
     *   bounding box. The next parameters are the location
     *   of the opposite corner.
     *
     *   The argument passed to ellipseMode() must be
     *   written in ALL CAPS because the constants CENTER,
     *   RADIUS, CORNER, and CORNERS are defined this way.
     *   JavaScript is a case-sensitive language.
     *   @param mode either CENTER, RADIUS, CORNER, or
     *   CORNERS
     *   @chainable
     */
    function ellipseMode(mode: p5.ELLIPSE_MODE): p5;

    /**
     *   Draws certain features with jagged (aliased)
     *   edges. smooth() is active by default. In 2D mode,
     *   noSmooth() is helpful for scaling up images
     *   without blurring. The functions don't affect
     *   shapes or fonts.
     *
     *   In WebGL mode, noSmooth() causes all shapes to be
     *   drawn with jagged (aliased) edges. The functions
     *   don't affect images or fonts.
     *   @chainable
     */
    function noSmooth(): p5;

    /**
     *   Changes where rectangles and squares are drawn. By
     *   default, the first two parameters of rect() and
     *   square(), are the x- and y-coordinates of the
     *   shape's upper left corner. The next parameters set
     *   the shape's width and height. This is the same as
     *   calling rectMode(CORNER).
     *
     *   rectMode(CORNERS) also uses the first two
     *   parameters as the location of one of the corners.
     *   The next parameters are the location of the
     *   opposite corner. This mode only works for rect().
     *
     *   rectMode(CENTER) uses the first two parameters as
     *   the x- and y-coordinates of the shape's center.
     *   The next parameters are its width and height.
     *
     *   rectMode(RADIUS) also uses the first two
     *   parameters as the x- and y-coordinates of the
     *   shape's center. The next parameters are half of
     *   the shape's width and height.
     *
     *   The argument passed to rectMode() must be written
     *   in ALL CAPS because the constants CENTER, RADIUS,
     *   CORNER, and CORNERS are defined this way.
     *   JavaScript is a case-sensitive language.
     *   @param mode either CORNER, CORNERS, CENTER, or
     *   RADIUS
     *   @chainable
     */
    function rectMode(mode: p5.RECT_MODE): p5;

    /**
     *   Draws certain features with smooth (antialiased)
     *   edges. smooth() is active by default. In 2D mode,
     *   noSmooth() is helpful for scaling up images
     *   without blurring. The functions don't affect
     *   shapes or fonts.
     *
     *   In WebGL mode, noSmooth() causes all shapes to be
     *   drawn with jagged (aliased) edges. The functions
     *   don't affect images or fonts.
     *   @chainable
     */
    function smooth(): p5;

    /**
     *   Sets the style for rendering the ends of lines.
     *   The caps for line endings are either rounded
     *   (ROUND), squared (SQUARE), or extended (PROJECT).
     *   The default cap is ROUND.
     *
     *   The argument passed to strokeCap() must be written
     *   in ALL CAPS because the constants ROUND, SQUARE,
     *   and PROJECT are defined this way. JavaScript is a
     *   case-sensitive language.
     *   @param cap either ROUND, SQUARE, or PROJECT
     *   @chainable
     */
    function strokeCap(cap: p5.STROKE_CAP): p5;

    /**
     *   Sets the style of the joints that connect line
     *   segments. Joints are either mitered (MITER),
     *   beveled (BEVEL), or rounded (ROUND). The default
     *   joint is MITER in 2D mode and ROUND in WebGL mode.
     *
     *   The argument passed to strokeJoin() must be
     *   written in ALL CAPS because the constants MITER,
     *   BEVEL, and ROUND are defined this way. JavaScript
     *   is a case-sensitive language.
     *   @param join either MITER, BEVEL, or ROUND
     *   @chainable
     */
    function strokeJoin(join: p5.STROKE_JOIN): p5;

    /**
     *   Sets the width of the stroke used for points,
     *   lines, and the outlines of shapes. Note:
     *   strokeWeight() is affected by transformations,
     *   especially calls to scale().
     *   @param weight the weight of the stroke (in
     *   pixels).
     *   @chainable
     */
    function strokeWeight(weight: number): p5;

    /**
     *   Draws a Bézier curve. Bézier curves can form
     *   shapes and curves that slope gently. They're
     *   defined by two anchor points and two control
     *   points. Bézier curves provide more control than
     *   the spline curves created with the curve()
     *   function.
     *
     *   The first two parameters, x1 and y1, set the first
     *   anchor point. The first anchor point is where the
     *   curve starts.
     *
     *   The next four parameters, x2, y2, x3, and y3, set
     *   the two control points. The control points "pull"
     *   the curve towards them.
     *
     *   The seventh and eighth parameters, x4 and y4, set
     *   the last anchor point. The last anchor point is
     *   where the curve ends.
     *
     *   Bézier curves can also be drawn in 3D using WebGL
     *   mode. The 3D version of bezier() has twelve
     *   arguments because each point has x-, y-, and
     *   z-coordinates.
     *   @param x1 x-coordinate of the first anchor point.
     *   @param y1 y-coordinate of the first anchor point.
     *   @param x2 x-coordinate of the first control point.
     *   @param y2 y-coordinate of the first control point.
     *   @param x3 x-coordinate of the second control
     *   point.
     *   @param y3 y-coordinate of the second control
     *   point.
     *   @param x4 x-coordinate of the second anchor point.
     *   @param y4 y-coordinate of the second anchor point.
     *   @chainable
     */
    function bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

    /**
     *   Draws a Bézier curve. Bézier curves can form
     *   shapes and curves that slope gently. They're
     *   defined by two anchor points and two control
     *   points. Bézier curves provide more control than
     *   the spline curves created with the curve()
     *   function.
     *
     *   The first two parameters, x1 and y1, set the first
     *   anchor point. The first anchor point is where the
     *   curve starts.
     *
     *   The next four parameters, x2, y2, x3, and y3, set
     *   the two control points. The control points "pull"
     *   the curve towards them.
     *
     *   The seventh and eighth parameters, x4 and y4, set
     *   the last anchor point. The last anchor point is
     *   where the curve ends.
     *
     *   Bézier curves can also be drawn in 3D using WebGL
     *   mode. The 3D version of bezier() has twelve
     *   arguments because each point has x-, y-, and
     *   z-coordinates.
     *   @param x1 x-coordinate of the first anchor point.
     *   @param y1 y-coordinate of the first anchor point.
     *   @param z1 z-coordinate of the first anchor point.
     *   @param x2 x-coordinate of the first control point.
     *   @param y2 y-coordinate of the first control point.
     *   @param z2 z-coordinate of the first control point.
     *   @param x3 x-coordinate of the second control
     *   point.
     *   @param y3 y-coordinate of the second control
     *   point.
     *   @param z3 z-coordinate of the second control
     *   point.
     *   @param x4 x-coordinate of the second anchor point.
     *   @param y4 y-coordinate of the second anchor point.
     *   @param z4 z-coordinate of the second anchor point.
     *   @chainable
     */
    function bezier(
        x1: number,
        y1: number,
        z1: number,
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
     *   Sets the number of segments used to draw Bézier
     *   curves in WebGL mode. In WebGL mode, smooth shapes
     *   are drawn using many flat segments. Adding more
     *   flat segments makes shapes appear smoother.
     *
     *   The parameter, detail, is the number of segments
     *   to use while drawing a Bézier curve. For example,
     *   calling bezierDetail(5) will use 5 segments to
     *   draw curves with the bezier() function. By
     *   default,detail is 20.
     *
     *   Note: bezierDetail() has no effect in 2D mode.
     *   @param detail number of segments to use. Defaults
     *   to 20.
     *   @chainable
     */
    function bezierDetail(detail: number): p5;

    /**
     *   Calculates coordinates along a Bézier curve using
     *   interpolation. bezierPoint() calculates
     *   coordinates along a Bézier curve using the anchor
     *   and control points. It expects points in the same
     *   order as the bezier() function. bezierPoint()
     *   works one axis at a time. Passing the anchor and
     *   control points' x-coordinates will calculate the
     *   x-coordinate of a point on the curve. Passing the
     *   anchor and control points' y-coordinates will
     *   calculate the y-coordinate of a point on the
     *   curve.
     *
     *   The first parameter, a, is the coordinate of the
     *   first anchor point.
     *
     *   The second and third parameters, b and c, are the
     *   coordinates of the control points.
     *
     *   The fourth parameter, d, is the coordinate of the
     *   last anchor point.
     *
     *   The fifth parameter, t, is the amount to
     *   interpolate along the curve. 0 is the first anchor
     *   point, 1 is the second anchor point, and 0.5 is
     *   halfway between them.
     *   @param a coordinate of first control point.
     *   @param b coordinate of first anchor point.
     *   @param c coordinate of second anchor point.
     *   @param d coordinate of second control point.
     *   @param t amount to interpolate between 0 and 1.
     *   @return coordinate of the point on the curve.
     */
    function bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Calculates coordinates along a line that's tangent
     *   to a Bézier curve. Tangent lines skim the surface
     *   of a curve. A tangent line's slope equals the
     *   curve's slope at the point where it intersects.
     *
     *   bezierTangent() calculates coordinates along a
     *   tangent line using the Bézier curve's anchor and
     *   control points. It expects points in the same
     *   order as the bezier() function. bezierTangent()
     *   works one axis at a time. Passing the anchor and
     *   control points' x-coordinates will calculate the
     *   x-coordinate of a point on the tangent line.
     *   Passing the anchor and control points'
     *   y-coordinates will calculate the y-coordinate of a
     *   point on the tangent line.
     *
     *   The first parameter, a, is the coordinate of the
     *   first anchor point.
     *
     *   The second and third parameters, b and c, are the
     *   coordinates of the control points.
     *
     *   The fourth parameter, d, is the coordinate of the
     *   last anchor point.
     *
     *   The fifth parameter, t, is the amount to
     *   interpolate along the curve. 0 is the first anchor
     *   point, 1 is the second anchor point, and 0.5 is
     *   halfway between them.
     *   @param a coordinate of first anchor point.
     *   @param b coordinate of first control point.
     *   @param c coordinate of second control point.
     *   @param d coordinate of second anchor point.
     *   @param t amount to interpolate between 0 and 1.
     *   @return coordinate of a point on the tangent line.
     */
    function bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Draws a curve using a Catmull-Rom spline. Spline
     *   curves can form shapes and curves that slope
     *   gently. They’re like cables that are attached to a
     *   set of points. Splines are defined by two anchor
     *   points and two control points.
     *
     *   The first two parameters, x1 and y1, set the first
     *   control point. This point isn’t drawn and can be
     *   thought of as the curve’s starting point.
     *
     *   The next four parameters, x2, y2, x3, and y3, set
     *   the two anchor points. The anchor points are the
     *   start and end points of the curve’s visible
     *   segment.
     *
     *   The seventh and eighth parameters, x4 and y4, set
     *   the last control point. This point isn’t drawn and
     *   can be thought of as the curve’s ending point.
     *
     *   Spline curves can also be drawn in 3D using WebGL
     *   mode. The 3D version of curve() has twelve
     *   arguments because each point has x-, y-, and
     *   z-coordinates.
     *   @param x1 x-coordinate of the first control point.
     *   @param y1 y-coordinate of the first control point.
     *   @param x2 x-coordinate of the first anchor point.
     *   @param y2 y-coordinate of the first anchor point.
     *   @param x3 x-coordinate of the second anchor point.
     *   @param y3 y-coordinate of the second anchor point.
     *   @param x4 x-coordinate of the second control
     *   point.
     *   @param y4 y-coordinate of the second control
     *   point.
     *   @chainable
     */
    function curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

    /**
     *   Draws a curve using a Catmull-Rom spline. Spline
     *   curves can form shapes and curves that slope
     *   gently. They’re like cables that are attached to a
     *   set of points. Splines are defined by two anchor
     *   points and two control points.
     *
     *   The first two parameters, x1 and y1, set the first
     *   control point. This point isn’t drawn and can be
     *   thought of as the curve’s starting point.
     *
     *   The next four parameters, x2, y2, x3, and y3, set
     *   the two anchor points. The anchor points are the
     *   start and end points of the curve’s visible
     *   segment.
     *
     *   The seventh and eighth parameters, x4 and y4, set
     *   the last control point. This point isn’t drawn and
     *   can be thought of as the curve’s ending point.
     *
     *   Spline curves can also be drawn in 3D using WebGL
     *   mode. The 3D version of curve() has twelve
     *   arguments because each point has x-, y-, and
     *   z-coordinates.
     *   @param x1 x-coordinate of the first control point.
     *   @param y1 y-coordinate of the first control point.
     *   @param z1 z-coordinate of the first control point.
     *   @param x2 x-coordinate of the first anchor point.
     *   @param y2 y-coordinate of the first anchor point.
     *   @param z2 z-coordinate of the first anchor point.
     *   @param x3 x-coordinate of the second anchor point.
     *   @param y3 y-coordinate of the second anchor point.
     *   @param z3 z-coordinate of the second anchor point.
     *   @param x4 x-coordinate of the second control
     *   point.
     *   @param y4 y-coordinate of the second control
     *   point.
     *   @param z4 z-coordinate of the second control
     *   point.
     *   @chainable
     */
    function curve(
        x1: number,
        y1: number,
        z1: number,
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
     *   Sets the number of segments used to draw spline
     *   curves in WebGL mode. In WebGL mode, smooth shapes
     *   are drawn using many flat segments. Adding more
     *   flat segments makes shapes appear smoother.
     *
     *   The parameter, detail, is the number of segments
     *   to use while drawing a spline curve. For example,
     *   calling curveDetail(5) will use 5 segments to draw
     *   curves with the curve() function. By
     *   default,detail is 20.
     *
     *   Note: curveDetail() has no effect in 2D mode.
     *   @param resolution number of segments to use.
     *   Defaults to 20.
     *   @chainable
     */
    function curveDetail(resolution: number): p5;

    /**
     *   Adjusts the way curve() and curveVertex() draw.
     *   Spline curves are like cables that are attached to
     *   a set of points. curveTightness() adjusts how
     *   tightly the cable is attached to the points.
     *
     *   The parameter, tightness, determines how the curve
     *   fits to the vertex points. By default, tightness
     *   is set to 0. Setting tightness to 1, as in
     *   curveTightness(1), connects the curve's points
     *   using straight lines. Values in the range from –5
     *   to 5 deform curves while leaving them
     *   recognizable.
     *   @param amount amount of tightness.
     *   @chainable
     */
    function curveTightness(amount: number): p5;

    /**
     *   Calculates coordinates along a spline curve using
     *   interpolation. curvePoint() calculates coordinates
     *   along a spline curve using the anchor and control
     *   points. It expects points in the same order as the
     *   curve() function. curvePoint() works one axis at a
     *   time. Passing the anchor and control points'
     *   x-coordinates will calculate the x-coordinate of a
     *   point on the curve. Passing the anchor and control
     *   points' y-coordinates will calculate the
     *   y-coordinate of a point on the curve.
     *
     *   The first parameter, a, is the coordinate of the
     *   first control point.
     *
     *   The second and third parameters, b and c, are the
     *   coordinates of the anchor points.
     *
     *   The fourth parameter, d, is the coordinate of the
     *   last control point.
     *
     *   The fifth parameter, t, is the amount to
     *   interpolate along the curve. 0 is the first anchor
     *   point, 1 is the second anchor point, and 0.5 is
     *   halfway between them.
     *   @param a coordinate of first anchor point.
     *   @param b coordinate of first control point.
     *   @param c coordinate of second control point.
     *   @param d coordinate of second anchor point.
     *   @param t amount to interpolate between 0 and 1.
     *   @return coordinate of a point on the curve.
     */
    function curvePoint(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Calculates coordinates along a line that's tangent
     *   to a spline curve. Tangent lines skim the surface
     *   of a curve. A tangent line's slope equals the
     *   curve's slope at the point where it intersects.
     *
     *   curveTangent() calculates coordinates along a
     *   tangent line using the spline curve's anchor and
     *   control points. It expects points in the same
     *   order as the curve() function. curveTangent()
     *   works one axis at a time. Passing the anchor and
     *   control points' x-coordinates will calculate the
     *   x-coordinate of a point on the tangent line.
     *   Passing the anchor and control points'
     *   y-coordinates will calculate the y-coordinate of a
     *   point on the tangent line.
     *
     *   The first parameter, a, is the coordinate of the
     *   first control point.
     *
     *   The second and third parameters, b and c, are the
     *   coordinates of the anchor points.
     *
     *   The fourth parameter, d, is the coordinate of the
     *   last control point.
     *
     *   The fifth parameter, t, is the amount to
     *   interpolate along the curve. 0 is the first anchor
     *   point, 1 is the second anchor point, and 0.5 is
     *   halfway between them.
     *   @param a coordinate of first control point.
     *   @param b coordinate of first anchor point.
     *   @param c coordinate of second anchor point.
     *   @param d coordinate of second control point.
     *   @param t amount to interpolate between 0 and 1.
     *   @return coordinate of a point on the tangent line.
     */
    function curveTangent(a: number, b: number, c: number, d: number, t: number): number;

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
    function beginContour(): p5;

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
    function beginShape(kind?: p5.BEGIN_KIND): p5;

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
    function bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

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
    function bezierVertex(
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
    function curveVertex(x: number, y: number): p5;

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
    function curveVertex(x: number, y: number, z?: number): p5;

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
    function endContour(): p5;

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
    function endShape(mode?: p5.END_MODE, count?: number): p5;

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
    function quadraticVertex(cx: number, cy: number, x3: number, y3: number): p5;

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
    function quadraticVertex(cx: number, cy: number, cz: number, x3: number, y3: number, z3: number): void;

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
    function vertex(x: number, y: number): p5;

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
    function vertex(x: number, y: number, z?: number): p5;

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
    function vertex(x: number, y: number, z?: number, u?: number, v?: number): p5;

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
    function normal(vector: p5.Vector): p5;

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
    function normal(x: number, y: number, z: number): p5;

    /**
     *   Version of this p5.js.
     */
    const VERSION: p5.VERSION;

    /**
     *   The default, two-dimensional renderer.
     */
    const P2D: p5.P2D;

    /**
     *   One of the two render modes in p5.js, used for
     *   computationally intensive tasks like 3D rendering
     *   and shaders. WEBGL differs from the default P2D
     *   renderer in the following ways:
     *
     *   - Coordinate System - When drawing in WEBGL mode,
     *   the origin point (0,0,0) is located at the center
     *   of the screen, not the top-left corner. See the
     *   tutorial page about coordinates and
     *   transformations.
     *   - 3D Shapes - WEBGL mode can be used to draw
     *   3-dimensional shapes like box(), sphere(), cone(),
     *   and more. See the tutorial page about custom
     *   geometry to make more complex objects.
     *   - Shape Detail - When drawing in WEBGL mode, you
     *   can specify how smooth curves should be drawn by
     *   using a detail parameter. See the wiki section
     *   about shapes for a more information and an
     *   example.
     *   - Textures - A texture is like a skin that wraps
     *   onto a shape. See the wiki section about textures
     *   for examples of mapping images onto surfaces with
     *   textures.
     *   - Materials and Lighting - WEBGL offers different
     *   types of lights like ambientLight() to place
     *   around a scene. Materials like specularMaterial()
     *   reflect the lighting to convey shape and depth.
     *   See the tutorial page for styling and appearance
     *   to experiment with different combinations.
     *   - Camera - The viewport of a WEBGL sketch can be
     *   adjusted by changing camera attributes. See the
     *   tutorial page section about cameras for an
     *   explanation of camera controls.
     *   - Text - WEBGL requires opentype/truetype font
     *   files to be preloaded using loadFont(). See the
     *   wiki section about text for details, along with a
     *   workaround.
     *   - Shaders - Shaders are hardware accelerated
     *   programs that can be used for a variety of effects
     *   and graphics. See the introduction to shaders to
     *   get started with shaders in p5.js.
     *   - Graphics Acceleration - WEBGL mode uses the
     *   graphics card instead of the CPU, so it may help
     *   boost the performance of your sketch (example:
     *   drawing more shapes on the screen at once).
     *
     *   To learn more about WEBGL mode, check out all the
     *   interactive WEBGL tutorials in the "Tutorials"
     *   section of this website, or read the wiki article
     *   "Getting started with WebGL in p5".
     */
    const WEBGL: p5.WEBGL;

    /**
     *   One of the two possible values of a WebGL canvas
     *   (either WEBGL or WEBGL2), which can be used to
     *   determine what capabilities the rendering
     *   environment has.
     */
    const WEBGL2: p5.WEBGL2;
    const ARROW: p5.ARROW;
    const CROSS: p5.CROSS;
    const HAND: p5.HAND;
    const MOVE: p5.MOVE;
    const TEXT: p5.TEXT;
    const WAIT: p5.WAIT;

    /**
     *   A Number constant that's approximately 1.5708.
     *   HALF_PI is half the value of the mathematical
     *   constant π. It's useful for many tasks that
     *   involve rotation and oscillation. For example,
     *   calling rotate(HALF_PI) rotates the coordinate
     *   system HALF_PI radians, which is a quarter turn
     *   (90˚).
     *
     *   Note: TWO_PI radians equals 360˚, PI radians
     *   equals 180˚, HALF_PI radians equals 90˚, and
     *   QUARTER_PI radians equals 45˚.
     */
    const HALF_PI: number;

    /**
     *   A Number constant that's approximately 3.1416. PI
     *   is the mathematical constant π. It's useful for
     *   many tasks that involve rotation and oscillation.
     *   For example, calling rotate(PI) rotates the
     *   coordinate system PI radians, which is a half turn
     *   (180˚).
     *
     *   Note: TWO_PI radians equals 360˚, PI radians
     *   equals 180˚, HALF_PI radians equals 90˚, and
     *   QUARTER_PI radians equals 45˚.
     */
    const PI: number;

    /**
     *   A Number constant that's approximately 0.7854.
     *   QUARTER_PI is one-fourth the value of the
     *   mathematical constant π. It's useful for many
     *   tasks that involve rotation and oscillation. For
     *   example, calling rotate(QUARTER_PI) rotates the
     *   coordinate system QUARTER_PI radians, which is an
     *   eighth of a turn (45˚).
     *
     *   Note: TWO_PI radians equals 360˚, PI radians
     *   equals 180˚, HALF_PI radians equals 90˚, and
     *   QUARTER_PI radians equals 45˚.
     */
    const QUARTER_PI: number;

    /**
     *   A Number constant that's approximately 6.2382. TAU
     *   is twice the value of the mathematical constant π.
     *   It's useful for many tasks that involve rotation
     *   and oscillation. For example, calling rotate(TAU)
     *   rotates the coordinate system TAU radians, which
     *   is one full turn (360˚). TAU and TWO_PI are equal.
     *
     *   Note: TAU radians equals 360˚, PI radians equals
     *   180˚, HALF_PI radians equals 90˚, and QUARTER_PI
     *   radians equals 45˚.
     */
    const TAU: number;

    /**
     *   A Number constant that's approximately 6.2382.
     *   TWO_PI is twice the value of the mathematical
     *   constant π. It's useful for many tasks that
     *   involve rotation and oscillation. For example,
     *   calling rotate(TWO_PI) rotates the coordinate
     *   system TWO_PI radians, which is one full turn
     *   (360˚). TWO_PI and TAU are equal.
     *
     *   Note: TWO_PI radians equals 360˚, PI radians
     *   equals 180˚, HALF_PI radians equals 90˚, and
     *   QUARTER_PI radians equals 45˚.
     */
    const TWO_PI: number;

    /**
     *   A String constant that's used to set the
     *   angleMode(). By default, functions such as
     *   rotate() and sin() expect angles measured in units
     *   of radians. Calling angleMode(DEGREES) ensures
     *   that angles are measured in units of degrees.
     *
     *   Note: TWO_PI radians equals 360˚.
     */
    const DEGREES: p5.DEGREES;

    /**
     *   A String constant that's used to set the
     *   angleMode(). By default, functions such as
     *   rotate() and sin() expect angles measured in units
     *   of radians. Calling angleMode(RADIANS) ensures
     *   that angles are measured in units of radians.
     *   Doing so can be useful if the angleMode() has been
     *   set to DEGREES.
     *
     *   Note: TWO_PI radians equals 360˚.
     */
    const RADIANS: p5.RADIANS;
    const CORNER: p5.CORNER;
    const CORNERS: p5.CORNERS;
    const RADIUS: p5.RADIUS;
    const RIGHT: p5.RIGHT;
    const LEFT: p5.LEFT;
    const CENTER: p5.CENTER;
    const TOP: p5.TOP;
    const BOTTOM: p5.BOTTOM;
    const BASELINE: p5.BASELINE;
    const POINTS: p5.POINTS;
    const LINES: p5.LINES;
    const LINE_STRIP: p5.LINE_STRIP;
    const LINE_LOOP: p5.LINE_LOOP;
    const TRIANGLES: p5.TRIANGLES;
    const TRIANGLE_FAN: p5.TRIANGLE_FAN;
    const TRIANGLE_STRIP: p5.TRIANGLE_STRIP;
    const QUADS: p5.QUADS;
    const QUAD_STRIP: p5.QUAD_STRIP;
    const TESS: p5.TESS;
    const CLOSE: p5.CLOSE;
    const OPEN: p5.OPEN;
    const CHORD: p5.CHORD;
    const PIE: p5.PIE;
    const PROJECT: p5.PROJECT;
    const SQUARE: p5.SQUARE;
    const ROUND: p5.ROUND;
    const BEVEL: p5.BEVEL;
    const MITER: p5.MITER;
    const RGB: p5.RGB;

    /**
     *   HSB (hue, saturation, brightness) is a type of
     *   color model. You can learn more about it at HSB.
     */
    const HSB: p5.HSB;
    const HSL: p5.HSL;

    /**
     *   AUTO allows us to automatically set the width or
     *   height of an element (but not both), based on the
     *   current height and width of the element. Only one
     *   parameter can be passed to the size function as
     *   AUTO, at a time.
     */
    const AUTO: p5.AUTO;
    const ALT: number;
    const BACKSPACE: number;
    const CONTROL: number;
    const DELETE: number;
    const DOWN_ARROW: number;
    const ENTER: number;
    const ESCAPE: number;
    const LEFT_ARROW: number;
    const OPTION: number;
    const RETURN: number;
    const RIGHT_ARROW: number;
    const SHIFT: number;
    const TAB: number;
    const UP_ARROW: number;
    const BLEND: p5.BLEND;
    const REMOVE: p5.REMOVE;
    const ADD: p5.ADD;
    const DARKEST: p5.DARKEST;
    const LIGHTEST: p5.LIGHTEST;
    const DIFFERENCE: p5.DIFFERENCE;
    const SUBTRACT: p5.SUBTRACT;
    const EXCLUSION: p5.EXCLUSION;
    const MULTIPLY: p5.MULTIPLY;
    const SCREEN: p5.SCREEN;
    const REPLACE: p5.REPLACE;
    const OVERLAY: p5.OVERLAY;
    const HARD_LIGHT: p5.HARD_LIGHT;
    const SOFT_LIGHT: p5.SOFT_LIGHT;
    const DODGE: p5.DODGE;
    const BURN: p5.BURN;
    const THRESHOLD: p5.THRESHOLD;
    const GRAY: p5.GRAY;
    const OPAQUE: p5.OPAQUE;
    const INVERT: p5.INVERT;
    const POSTERIZE: p5.POSTERIZE;
    const DILATE: p5.DILATE;
    const ERODE: p5.ERODE;
    const BLUR: p5.BLUR;
    const NORMAL: p5.NORMAL;
    const ITALIC: p5.ITALIC;
    const BOLD: p5.BOLD;
    const BOLDITALIC: p5.BOLDITALIC;
    const CHAR: p5.CHAR;
    const WORD: p5.WORD;
    const LINEAR: p5.LINEAR;
    const QUADRATIC: p5.QUADRATIC;
    const BEZIER: p5.BEZIER;
    const CURVE: p5.CURVE;
    const STROKE: p5.STROKE;
    const FILL: p5.FILL;
    const TEXTURE: p5.TEXTURE;
    const IMMEDIATE: p5.IMMEDIATE;
    const IMAGE: p5.IMAGE;
    const NEAREST: p5.NEAREST;
    const REPEAT: p5.REPEAT;
    const CLAMP: p5.CLAMP;
    const MIRROR: p5.MIRROR;
    const FLAT: p5.FLAT;
    const SMOOTH: p5.SMOOTH;
    const LANDSCAPE: p5.LANDSCAPE;
    const PORTRAIT: p5.PORTRAIT;
    const GRID: p5.GRID;
    const AXES: p5.AXES;
    const LABEL: p5.LABEL;
    const FALLBACK: p5.FALLBACK;
    const CONTAIN: p5.CONTAIN;
    const COVER: p5.COVER;
    const UNSIGNED_BYTE: p5.UNSIGNED_BYTE;
    const UNSIGNED_INT: p5.UNSIGNED_INT;
    const FLOAT: p5.FLOAT;
    const HALF_FLOAT: p5.HALF_FLOAT;
    const RGBA: p5.RGBA;

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
    function print(contents: any): void;

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
    function cursor(type: string | p5.CURSOR_TYPE, x?: number, y?: number): void;

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
    function frameRate(fps: number): p5;

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
    function frameRate(): number;

    /**
     *   Returns the target frame rate. The value is either
     *   the system frame rate or the last value passed to
     *   frameRate().
     *   @return _targetFrameRate
     */
    function getTargetFrameRate(): number;

    /**
     *   Hides the cursor from view.
     */
    function noCursor(): void;

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
    function windowResized(event?: UIEvent): void;

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
    function fullscreen(val?: boolean): boolean;

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
    function pixelDensity(val?: number): p5;

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
    function pixelDensity(): number;

    /**
     *   Returns the display's current pixel density.
     *   @return current pixel density of the display.
     */
    function displayDensity(): number;

    /**
     *   Returns the sketch's current URL as a String.
     *   @return url
     */
    function getURL(): string;

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
    function getURLPath(): string[];

    /**
     *   Returns the current URL parameters in an Object.
     *   For example, calling getURLParams() in a sketch
     *   hosted at the URL
     *   https://p5js.org?year=2014&month=May&day=15
     *   returns { year: 2014, month: 'May', day: 15 }.
     *   @return URL params
     */
    function getURLParams(): object;

    /**
     *   A Number variable that tracks the number of frames
     *   drawn since the sketch started. frameCount's value
     *   is 0 inside setup(). It increments by 1 each time
     *   the code in draw() finishes executing.
     */
    let frameCount: number;

    /**
     *   A Number variable that tracks the number of
     *   milliseconds it took to draw the last frame.
     *   deltaTime contains the amount of time it took
     *   draw() to execute during the previous frame. It's
     *   useful for simulating physics.
     */
    let deltaTime: number;

    /**
     *   A Boolean variable that's true if the browser is
     *   focused and false if not. Note: The browser window
     *   can only receive input if it's focused.
     */
    let focused: boolean;

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
    let webglVersion: string;

    /**
     *   A Number variable that stores the width of the
     *   screen display. displayWidth is useful for running
     *   full-screen programs. Its value depends on the
     *   current pixelDensity().
     *
     *   Note: The actual screen width can be computed as
     *   displayWidth * pixelDensity().
     */
    let displayWidth: number;

    /**
     *   A Number variable that stores the height of the
     *   screen display. displayHeight is useful for
     *   running full-screen programs. Its value depends on
     *   the current pixelDensity().
     *
     *   Note: The actual screen height can be computed as
     *   displayHeight * pixelDensity().
     */
    let displayHeight: number;

    /**
     *   A Number variable that stores the width of the
     *   browser's viewport. The layout viewport is the
     *   area within the browser that's available for
     *   drawing.
     */
    let windowWidth: number;

    /**
     *   A Number variable that stores the height of the
     *   browser's viewport. The layout viewport is the
     *   area within the browser that's available for
     *   drawing.
     */
    let windowHeight: number;

    /**
     *   A Number variable that stores the width of the
     *   canvas in pixels. width's default value is 100.
     *   Calling createCanvas() or resizeCanvas() changes
     *   the value of width. Calling noCanvas() sets its
     *   value to 0.
     */
    let width: number;

    /**
     *   A Number variable that stores the height of the
     *   canvas in pixels. height's default value is 100.
     *   Calling createCanvas() or resizeCanvas() changes
     *   the value of height. Calling noCanvas() sets its
     *   value to 0.
     */
    let height: number;

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
    function createCanvas(
        width?: number,
        height?: number,
        renderer?: p5.RENDERER,
        canvas?: HTMLCanvasElement
    ): p5.Renderer;

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
    function createCanvas(width?: number, height?: number, canvas?: HTMLCanvasElement): p5.Renderer;

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
    function resizeCanvas(width: number, height: number, noRedraw?: boolean): void;

    /**
     *   Removes the default canvas. By default, a 100×100
     *   pixels canvas is created without needing to call
     *   createCanvas(). noCanvas() removes the default
     *   canvas for sketches that don't need it.
     */
    function noCanvas(): void;

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
    function createGraphics(
        width: number,
        height: number,
        renderer?: p5.RENDERER,
        canvas?: HTMLCanvasElement
    ): p5.Graphics;

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
    function createGraphics(width: number, height: number, canvas?: HTMLCanvasElement): p5.Graphics;

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
    function createFramebuffer(options?: object): p5.Framebuffer;

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
    function clearDepth(depth?: number): void;

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
    function blendMode(mode: p5.BLEND_MODE): void;

    /**
     *   A system variable that provides direct access to
     *   the sketch's <canvas> element. The <canvas>
     *   element provides many specialized features that
     *   aren't included in the p5.js library. The
     *   drawingContext system variable provides access to
     *   these features by exposing the sketch's
     *   CanvasRenderingContext2D object.
     */
    let drawingContext: any;

    /**
     *   Stops the code in draw() from running repeatedly.
     *   By default, draw() tries to run 60 times per
     *   second. Calling noLoop() stops draw() from
     *   repeating. The draw loop can be restarted by
     *   calling loop(). draw() can be run once by calling
     *   redraw().
     *
     *   The isLooping() function can be used to check
     *   whether a sketch is looping, as in isLooping() ===
     *   true.
     */
    function noLoop(): void;

    /**
     *   Resumes the draw loop after noLoop() has been
     *   called. By default, draw() tries to run 60 times
     *   per second. Calling noLoop() stops draw() from
     *   repeating. The draw loop can be restarted by
     *   calling loop().
     *
     *   The isLooping() function can be used to check
     *   whether a sketch is looping, as in isLooping() ===
     *   true.
     */
    function loop(): void;

    /**
     *   Returns true if the draw loop is running and false
     *   if not. By default, draw() tries to run 60 times
     *   per second. Calling noLoop() stops draw() from
     *   repeating. The draw loop can be restarted by
     *   calling loop().
     *
     *   The isLooping() function can be used to check
     *   whether a sketch is looping, as in isLooping() ===
     *   true.
     */
    function isLooping(): boolean;

    /**
     *   Begins a drawing group that contains its own
     *   styles and transformations. By default, styles
     *   such as fill() and transformations such as
     *   rotate() are applied to all drawing that follows.
     *   The push() and pop() functions can limit the
     *   effect of styles and transformations to a specific
     *   group of shapes, images, and text. For example, a
     *   group of shapes could be translated to follow the
     *   mouse without affecting the rest of the sketch:
     *
     *   // Begin the drawing group. push(); // Translate
     *   the origin to the mouse's position.
     *   translate(mouseX, mouseY); // Style the face.
     *   noStroke(); fill('green'); // Draw the face.
     *   circle(0, 0, 60); // Style the eyes.
     *   fill('white'); // Draw the left eye. ellipse(-20,
     *   -20, 30, 20); // Draw the right eye. ellipse(20,
     *   -20, 30, 20); // End the drawing group. pop(); //
     *   Draw a bug. let x = random(0, 100); let y =
     *   random(0, 100); text('🦟', x, y);
     *
     *   In the code snippet above, the bug's position
     *   isn't affected by translate(mouseX, mouseY)
     *   because that transformation is contained between
     *   push() and pop(). The bug moves around the entire
     *   canvas as expected.
     *
     *   Note: push() and pop() are always called as a
     *   pair. Both functions are required to begin and end
     *   a drawing group.
     *
     *   push() and pop() can also be nested to create
     *   subgroups. For example, the code snippet above
     *   could be changed to give more detail to the frog’s
     *   eyes:
     *
     *   // Begin the drawing group. push(); // Translate
     *   the origin to the mouse's position.
     *   translate(mouseX, mouseY); // Style the face.
     *   noStroke(); fill('green'); // Draw a face.
     *   circle(0, 0, 60); // Style the eyes.
     *   fill('white'); // Draw the left eye. push();
     *   translate(-20, -20); ellipse(0, 0, 30, 20);
     *   fill('black'); circle(0, 0, 8); pop(); // Draw the
     *   right eye. push(); translate(20, -20); ellipse(0,
     *   0, 30, 20); fill('black'); circle(0, 0, 8); pop();
     *   // End the drawing group. pop(); // Draw a bug.
     *   let x = random(0, 100); let y = random(0, 100);
     *   text('🦟', x, y);
     *
     *   In this version, the code to draw each eye is
     *   contained between its own push() and pop()
     *   functions. Doing so makes it easier to add details
     *   in the correct part of a drawing.
     *
     *   push() and pop() contain the effects of the
     *   following functions:
     *
     *   - fill()
     *   - noFill()
     *   - noStroke()
     *   - stroke()
     *   - tint()
     *   - noTint()
     *   - strokeWeight()
     *   - strokeCap()
     *   - strokeJoin()
     *   - imageMode()
     *   - rectMode()
     *   - ellipseMode()
     *   - colorMode()
     *   - textAlign()
     *   - textFont()
     *   - textSize()
     *   - textLeading()
     *   - applyMatrix()
     *   - resetMatrix()
     *   - rotate()
     *   - scale()
     *   - shearX()
     *   - shearY()
     *   - translate()
     *
     *   In WebGL mode, push() and pop() contain the
     *   effects of a few additional styles:
     *
     *   - setCamera()
     *   - ambientLight()
     *   - directionalLight()
     *   - pointLight() texture()
     *   - specularMaterial()
     *   - shininess()
     *   - normalMaterial()
     *   - shader()
     */
    function push(): void;

    /**
     *   Ends a drawing group that contains its own styles
     *   and transformations. By default, styles such as
     *   fill() and transformations such as rotate() are
     *   applied to all drawing that follows. The push()
     *   and pop() functions can limit the effect of styles
     *   and transformations to a specific group of shapes,
     *   images, and text. For example, a group of shapes
     *   could be translated to follow the mouse without
     *   affecting the rest of the sketch:
     *
     *   // Begin the drawing group. push(); // Translate
     *   the origin to the mouse's position.
     *   translate(mouseX, mouseY); // Style the face.
     *   noStroke(); fill('green'); // Draw the face.
     *   circle(0, 0, 60); // Style the eyes.
     *   fill('white'); // Draw the left eye. ellipse(-20,
     *   -20, 30, 20); // Draw the right eye. ellipse(20,
     *   -20, 30, 20); // End the drawing group. pop(); //
     *   Draw a bug. let x = random(0, 100); let y =
     *   random(0, 100); text('🦟', x, y);
     *
     *   In the code snippet above, the bug's position
     *   isn't affected by translate(mouseX, mouseY)
     *   because that transformation is contained between
     *   push() and pop(). The bug moves around the entire
     *   canvas as expected.
     *
     *   Note: push() and pop() are always called as a
     *   pair. Both functions are required to begin and end
     *   a drawing group.
     *
     *   push() and pop() can also be nested to create
     *   subgroups. For example, the code snippet above
     *   could be changed to give more detail to the frog’s
     *   eyes:
     *
     *   // Begin the drawing group. push(); // Translate
     *   the origin to the mouse's position.
     *   translate(mouseX, mouseY); // Style the face.
     *   noStroke(); fill('green'); // Draw a face.
     *   circle(0, 0, 60); // Style the eyes.
     *   fill('white'); // Draw the left eye. push();
     *   translate(-20, -20); ellipse(0, 0, 30, 20);
     *   fill('black'); circle(0, 0, 8); pop(); // Draw the
     *   right eye. push(); translate(20, -20); ellipse(0,
     *   0, 30, 20); fill('black'); circle(0, 0, 8); pop();
     *   // End the drawing group. pop(); // Draw a bug.
     *   let x = random(0, 100); let y = random(0, 100);
     *   text('🦟', x, y);
     *
     *   In this version, the code to draw each eye is
     *   contained between its own push() and pop()
     *   functions. Doing so makes it easier to add details
     *   in the correct part of a drawing.
     *
     *   push() and pop() contain the effects of the
     *   following functions:
     *
     *   - fill()
     *   - noFill()
     *   - noStroke()
     *   - stroke()
     *   - tint()
     *   - noTint()
     *   - strokeWeight()
     *   - strokeCap()
     *   - strokeJoin()
     *   - imageMode()
     *   - rectMode()
     *   - ellipseMode()
     *   - colorMode()
     *   - textAlign()
     *   - textFont()
     *   - textSize()
     *   - textLeading()
     *   - applyMatrix()
     *   - resetMatrix()
     *   - rotate()
     *   - scale()
     *   - shearX()
     *   - shearY()
     *   - translate()
     *
     *   In WebGL mode, push() and pop() contain the
     *   effects of a few additional styles:
     *
     *   - setCamera()
     *   - ambientLight()
     *   - directionalLight()
     *   - pointLight() texture()
     *   - specularMaterial()
     *   - shininess()
     *   - normalMaterial()
     *   - shader()
     */
    function pop(): void;

    /**
     *   Runs the code in draw() once. By default, draw()
     *   tries to run 60 times per second. Calling noLoop()
     *   stops draw() from repeating. Calling redraw() will
     *   execute the code in the draw() function a set
     *   number of times.
     *
     *   The parameter, n, is optional. If a number is
     *   passed, as in redraw(5), then the draw loop will
     *   run the given number of times. By default, n is 1.
     *   @param [n] number of times to run draw(). Defaults
     *   to 1.
     */
    function redraw(n?: number): void;

    /**
     *   Creates a new sketch in "instance" mode. All p5.js
     *   sketches are instances of the p5 class. Put
     *   another way, all p5.js sketches are objects with
     *   methods including pInst.setup(), pInst.draw(),
     *   pInst.circle(), and pInst.fill(). By default,
     *   sketches run in "global mode" to hide some of this
     *   complexity.
     *
     *   In global mode, a default instance of the p5 class
     *   is created automatically. The default p5 instance
     *   searches the web page's source code for
     *   declarations of system functions such as setup(),
     *   draw(), and mousePressed(), then attaches those
     *   functions to itself as methods. Calling a function
     *   such as circle() in global mode actually calls the
     *   default p5 object's pInst.circle() method.
     *
     *   It's often helpful to isolate the code within
     *   sketches from the rest of the code on a web page.
     *   Two common use cases are web pages that use other
     *   JavaScript libraries and web pages with multiple
     *   sketches. "Instance mode" makes it easy to support
     *   both of these scenarios.
     *
     *   Instance mode sketches support the same API as
     *   global mode sketches. They use a function to
     *   bundle, or encapsulate, an entire sketch. The
     *   function containing the sketch is then passed to
     *   the p5() constructor.
     *
     *   The first parameter, sketch, is a function that
     *   contains the sketch. For example, the statement
     *   new p5(mySketch) would create a new instance mode
     *   sketch from a function named mySketch. The
     *   function should have one parameter, p, that's a p5
     *   object.
     *
     *   The second parameter, node, is optional. If a
     *   string is passed, as in new p5(mySketch,
     *   'sketch-one') the new instance mode sketch will
     *   become a child of the HTML element with the id
     *   sketch-one. If an HTML element is passed, as in
     *   new p5(mySketch, myElement), then the new instance
     *   mode sketch will become a child of the Element
     *   object called myElement.
     *   @param sketch function containing the sketch.
     *   @param node ID or reference to the HTML element
     *   that will contain the sketch.
     */
    function p5(sketch: object, node: string | HTMLElement): void;

    /**
     *   Applies a transformation matrix to the coordinate
     *   system. Transformations such as translate(),
     *   rotate(), and scale() use matrix-vector
     *   multiplication behind the scenes. A table of
     *   numbers, called a matrix, encodes each
     *   transformation. The values in the matrix then
     *   multiply each point on the canvas, which is
     *   represented by a vector.
     *
     *   applyMatrix() allows for many transformations to
     *   be applied at once. See Wikipedia and MDN for more
     *   details about transformations.
     *
     *   There are two ways to call applyMatrix() in two
     *   and three dimensions.
     *
     *   In 2D mode, the parameters a, b, c, d, e, and f,
     *   correspond to elements in the following
     *   transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
     *   passed in an array, as in applyMatrix([2, 0, 0, 0,
     *   2, 0]).
     *
     *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
     *   i, j, k, l, m, n, o, and p correspond to elements
     *   in the following transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
     *   0, 0, 1). They can also be passed in an array, as
     *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
     *   0, 0, 0, 0, 1]).
     *
     *   By default, transformations accumulate. The push()
     *   and pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling applyMatrix() inside the
     *   draw() function won't cause shapes to transform
     *   continuously.
     *   @param arr an array containing the elements of the
     *   transformation matrix. Its length should be either
     *   6 (2D) or 16 (3D).
     *   @chainable
     */
    function applyMatrix(arr: any[]): p5;

    /**
     *   Applies a transformation matrix to the coordinate
     *   system. Transformations such as translate(),
     *   rotate(), and scale() use matrix-vector
     *   multiplication behind the scenes. A table of
     *   numbers, called a matrix, encodes each
     *   transformation. The values in the matrix then
     *   multiply each point on the canvas, which is
     *   represented by a vector.
     *
     *   applyMatrix() allows for many transformations to
     *   be applied at once. See Wikipedia and MDN for more
     *   details about transformations.
     *
     *   There are two ways to call applyMatrix() in two
     *   and three dimensions.
     *
     *   In 2D mode, the parameters a, b, c, d, e, and f,
     *   correspond to elements in the following
     *   transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
     *   passed in an array, as in applyMatrix([2, 0, 0, 0,
     *   2, 0]).
     *
     *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
     *   i, j, k, l, m, n, o, and p correspond to elements
     *   in the following transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
     *   0, 0, 1). They can also be passed in an array, as
     *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
     *   0, 0, 0, 0, 1]).
     *
     *   By default, transformations accumulate. The push()
     *   and pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling applyMatrix() inside the
     *   draw() function won't cause shapes to transform
     *   continuously.
     *   @param a an element of the transformation matrix.
     *   @param b an element of the transformation matrix.
     *   @param c an element of the transformation matrix.
     *   @param d an element of the transformation matrix.
     *   @param e an element of the transformation matrix.
     *   @param f an element of the transformation matrix.
     *   @chainable
     */
    function applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): p5;

    /**
     *   Applies a transformation matrix to the coordinate
     *   system. Transformations such as translate(),
     *   rotate(), and scale() use matrix-vector
     *   multiplication behind the scenes. A table of
     *   numbers, called a matrix, encodes each
     *   transformation. The values in the matrix then
     *   multiply each point on the canvas, which is
     *   represented by a vector.
     *
     *   applyMatrix() allows for many transformations to
     *   be applied at once. See Wikipedia and MDN for more
     *   details about transformations.
     *
     *   There are two ways to call applyMatrix() in two
     *   and three dimensions.
     *
     *   In 2D mode, the parameters a, b, c, d, e, and f,
     *   correspond to elements in the following
     *   transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 2, 0). They can also be
     *   passed in an array, as in applyMatrix([2, 0, 0, 0,
     *   2, 0]).
     *
     *   In 3D mode, the parameters a, b, c, d, e, f, g, h,
     *   i, j, k, l, m, n, o, and p correspond to elements
     *   in the following transformation matrix:
     *
     *
     *
     *   The numbers can be passed individually, as in
     *   applyMatrix(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0,
     *   0, 0, 1). They can also be passed in an array, as
     *   in applyMatrix([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2,
     *   0, 0, 0, 0, 1]).
     *
     *   By default, transformations accumulate. The push()
     *   and pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling applyMatrix() inside the
     *   draw() function won't cause shapes to transform
     *   continuously.
     *   @param a an element of the transformation matrix.
     *   @param b an element of the transformation matrix.
     *   @param c an element of the transformation matrix.
     *   @param d an element of the transformation matrix.
     *   @param e an element of the transformation matrix.
     *   @param f an element of the transformation matrix.
     *   @param g an element of the transformation matrix.
     *   @param h an element of the transformation matrix.
     *   @param i an element of the transformation matrix.
     *   @param j an element of the transformation matrix.
     *   @param k an element of the transformation matrix.
     *   @param l an element of the transformation matrix.
     *   @param m an element of the transformation matrix.
     *   @param n an element of the transformation matrix.
     *   @param o an element of the transformation matrix.
     *   @param p an element of the transformation matrix.
     *   @chainable
     */
    function applyMatrix(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
        i: number,
        j: number,
        k: number,
        l: number,
        m: number,
        n: number,
        o: number,
        p: number
    ): p5;

    /**
     *   Clears all transformations applied to the
     *   coordinate system.
     *   @chainable
     */
    function resetMatrix(): p5;

    /**
     *   Rotates the coordinate system. By default, the
     *   positive x-axis points to the right and the
     *   positive y-axis points downward. The rotate()
     *   function changes this orientation by rotating the
     *   coordinate system about the origin. Everything
     *   drawn after rotate() is called will appear to be
     *   rotated.
     *
     *   The first parameter, angle, is the amount to
     *   rotate. For example, calling rotate(1) rotates the
     *   coordinate system clockwise 1 radian which is
     *   nearly 57˚. rotate() interprets angle values using
     *   the current angleMode().
     *
     *   The second parameter, axis, is optional. It's used
     *   to orient 3D rotations in WebGL mode. If a
     *   p5.Vector is passed, as in rotate(QUARTER_PI,
     *   myVector), then the coordinate system will rotate
     *   QUARTER_PI radians about myVector. If an array of
     *   vector components is passed, as in
     *   rotate(QUARTER_PI, [1, 0, 0]), then the coordinate
     *   system will rotate QUARTER_PI radians about a
     *   vector with the components [1, 0, 0].
     *
     *   By default, transformations accumulate. For
     *   example, calling rotate(1) twice has the same
     *   effect as calling rotate(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling rotate(1) inside the
     *   draw() function won't cause shapes to spin.
     *   @param angle angle of rotation in the current
     *   angleMode().
     *   @param [axis] axis to rotate about in 3D.
     *   @chainable
     */
    function rotate(angle: number, axis?: p5.Vector | number[]): p5;

    /**
     *   Rotates the coordinate system about the x-axis in
     *   WebGL mode. The parameter, angle, is the amount to
     *   rotate. For example, calling rotateX(1) rotates
     *   the coordinate system about the x-axis by 1
     *   radian. rotateX() interprets angle values using
     *   the current angleMode().
     *
     *   By default, transformations accumulate. For
     *   example, calling rotateX(1) twice has the same
     *   effect as calling rotateX(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling rotateX(1) inside the
     *   draw() function won't cause shapes to spin.
     *   @param angle angle of rotation in the current
     *   angleMode().
     *   @chainable
     */
    function rotateX(angle: number): p5;

    /**
     *   Rotates the coordinate system about the y-axis in
     *   WebGL mode. The parameter, angle, is the amount to
     *   rotate. For example, calling rotateY(1) rotates
     *   the coordinate system about the y-axis by 1
     *   radian. rotateY() interprets angle values using
     *   the current angleMode().
     *
     *   By default, transformations accumulate. For
     *   example, calling rotateY(1) twice has the same
     *   effect as calling rotateY(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling rotateY(1) inside the
     *   draw() function won't cause shapes to spin.
     *   @param angle angle of rotation in the current
     *   angleMode().
     *   @chainable
     */
    function rotateY(angle: number): p5;

    /**
     *   Rotates the coordinate system about the z-axis in
     *   WebGL mode. The parameter, angle, is the amount to
     *   rotate. For example, calling rotateZ(1) rotates
     *   the coordinate system about the z-axis by 1
     *   radian. rotateZ() interprets angle values using
     *   the current angleMode().
     *
     *   By default, transformations accumulate. For
     *   example, calling rotateZ(1) twice has the same
     *   effect as calling rotateZ(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling rotateZ(1) inside the
     *   draw() function won't cause shapes to spin.
     *   @param angle angle of rotation in the current
     *   angleMode().
     *   @chainable
     */
    function rotateZ(angle: number): p5;

    /**
     *   Scales the coordinate system. By default, shapes
     *   are drawn at their original scale. A rectangle
     *   that's 50 pixels wide appears to take up half the
     *   width of a 100 pixel-wide canvas. The scale()
     *   function can shrink or stretch the coordinate
     *   system so that shapes appear at different sizes.
     *   There are two ways to call scale() with parameters
     *   that set the scale factor(s).
     *
     *   The first way to call scale() uses numbers to set
     *   the amount of scaling. The first parameter, s,
     *   sets the amount to scale each axis. For example,
     *   calling scale(2) stretches the x-, y-, and z-axes
     *   by a factor of 2. The next two parameters, y and
     *   z, are optional. They set the amount to scale the
     *   y- and z-axes. For example, calling scale(2, 0.5,
     *   1) stretches the x-axis by a factor of 2, shrinks
     *   the y-axis by a factor of 0.5, and leaves the
     *   z-axis unchanged.
     *
     *   The second way to call scale() uses a p5.Vector
     *   object to set the scale factors. For example,
     *   calling scale(myVector) uses the x-, y-, and
     *   z-components of myVector to set the amount of
     *   scaling along the x-, y-, and z-axes. Doing so is
     *   the same as calling scale(myVector.x, myVector.y,
     *   myVector.z).
     *
     *   By default, transformations accumulate. For
     *   example, calling scale(1) twice has the same
     *   effect as calling scale(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling scale(2) inside the
     *   draw() function won't cause shapes to grow
     *   continuously.
     *   @param s amount to scale along the positive
     *   x-axis.
     *   @param [y] amount to scale along the positive
     *   y-axis. Defaults to s.
     *   @param [z] amount to scale along the positive
     *   z-axis. Defaults to y.
     *   @chainable
     */
    function scale(s: number | p5.Vector | number[], y?: number, z?: number): p5;

    /**
     *   Scales the coordinate system. By default, shapes
     *   are drawn at their original scale. A rectangle
     *   that's 50 pixels wide appears to take up half the
     *   width of a 100 pixel-wide canvas. The scale()
     *   function can shrink or stretch the coordinate
     *   system so that shapes appear at different sizes.
     *   There are two ways to call scale() with parameters
     *   that set the scale factor(s).
     *
     *   The first way to call scale() uses numbers to set
     *   the amount of scaling. The first parameter, s,
     *   sets the amount to scale each axis. For example,
     *   calling scale(2) stretches the x-, y-, and z-axes
     *   by a factor of 2. The next two parameters, y and
     *   z, are optional. They set the amount to scale the
     *   y- and z-axes. For example, calling scale(2, 0.5,
     *   1) stretches the x-axis by a factor of 2, shrinks
     *   the y-axis by a factor of 0.5, and leaves the
     *   z-axis unchanged.
     *
     *   The second way to call scale() uses a p5.Vector
     *   object to set the scale factors. For example,
     *   calling scale(myVector) uses the x-, y-, and
     *   z-components of myVector to set the amount of
     *   scaling along the x-, y-, and z-axes. Doing so is
     *   the same as calling scale(myVector.x, myVector.y,
     *   myVector.z).
     *
     *   By default, transformations accumulate. For
     *   example, calling scale(1) twice has the same
     *   effect as calling scale(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling scale(2) inside the
     *   draw() function won't cause shapes to grow
     *   continuously.
     *   @param scales vector whose components should be
     *   used to scale.
     *   @chainable
     */
    function scale(scales: p5.Vector | number[]): p5;

    /**
     *   Shears the x-axis so that shapes appear skewed. By
     *   default, the x- and y-axes are perpendicular. The
     *   shearX() function transforms the coordinate system
     *   so that x-coordinates are translated while
     *   y-coordinates are fixed.
     *
     *   The first parameter, angle, is the amount to
     *   shear. For example, calling shearX(1) transforms
     *   all x-coordinates using the formula x = x + y *
     *   tan(angle). shearX() interprets angle values using
     *   the current angleMode().
     *
     *   By default, transformations accumulate. For
     *   example, calling shearX(1) twice has the same
     *   effect as calling shearX(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling shearX(1) inside the
     *   draw() function won't cause shapes to shear
     *   continuously.
     *   @param angle angle to shear by in the current
     *   angleMode().
     *   @chainable
     */
    function shearX(angle: number): p5;

    /**
     *   Shears the y-axis so that shapes appear skewed. By
     *   default, the x- and y-axes are perpendicular. The
     *   shearY() function transforms the coordinate system
     *   so that y-coordinates are translated while
     *   x-coordinates are fixed.
     *
     *   The first parameter, angle, is the amount to
     *   shear. For example, calling shearY(1) transforms
     *   all y-coordinates using the formula y = y + x *
     *   tan(angle). shearY() interprets angle values using
     *   the current angleMode().
     *
     *   By default, transformations accumulate. For
     *   example, calling shearY(1) twice has the same
     *   effect as calling shearY(2) once. The push() and
     *   pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling shearY(1) inside the
     *   draw() function won't cause shapes to shear
     *   continuously.
     *   @param angle angle to shear by in the current
     *   angleMode().
     *   @chainable
     */
    function shearY(angle: number): p5;

    /**
     *   Translates the coordinate system. By default, the
     *   origin (0, 0) is at the sketch's top-left corner
     *   in 2D mode and center in WebGL mode. The
     *   translate() function shifts the origin to a
     *   different position. Everything drawn after
     *   translate() is called will appear to be shifted.
     *   There are two ways to call translate() with
     *   parameters that set the origin's position.
     *
     *   The first way to call translate() uses numbers to
     *   set the amount of translation. The first two
     *   parameters, x and y, set the amount to translate
     *   along the positive x- and y-axes. For example,
     *   calling translate(20, 30) translates the origin 20
     *   pixels along the x-axis and 30 pixels along the
     *   y-axis. The third parameter, z, is optional. It
     *   sets the amount to translate along the positive
     *   z-axis. For example, calling translate(20, 30, 40)
     *   translates the origin 20 pixels along the x-axis,
     *   30 pixels along the y-axis, and 40 pixels along
     *   the z-axis.
     *
     *   The second way to call translate() uses a
     *   p5.Vector object to set the amount of translation.
     *   For example, calling translate(myVector) uses the
     *   x-, y-, and z-components of myVector to set the
     *   amount to translate along the x-, y-, and z-axes.
     *   Doing so is the same as calling
     *   translate(myVector.x, myVector.y, myVector.z).
     *
     *   By default, transformations accumulate. For
     *   example, calling translate(10, 0) twice has the
     *   same effect as calling translate(20, 0) once. The
     *   push() and pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling translate(10, 0) inside
     *   the draw() function won't cause shapes to move
     *   continuously.
     *   @param x amount to translate along the positive
     *   x-axis.
     *   @param y amount to translate along the positive
     *   y-axis.
     *   @param [z] amount to translate along the positive
     *   z-axis.
     *   @chainable
     */
    function translate(x: number, y: number, z?: number): p5;

    /**
     *   Translates the coordinate system. By default, the
     *   origin (0, 0) is at the sketch's top-left corner
     *   in 2D mode and center in WebGL mode. The
     *   translate() function shifts the origin to a
     *   different position. Everything drawn after
     *   translate() is called will appear to be shifted.
     *   There are two ways to call translate() with
     *   parameters that set the origin's position.
     *
     *   The first way to call translate() uses numbers to
     *   set the amount of translation. The first two
     *   parameters, x and y, set the amount to translate
     *   along the positive x- and y-axes. For example,
     *   calling translate(20, 30) translates the origin 20
     *   pixels along the x-axis and 30 pixels along the
     *   y-axis. The third parameter, z, is optional. It
     *   sets the amount to translate along the positive
     *   z-axis. For example, calling translate(20, 30, 40)
     *   translates the origin 20 pixels along the x-axis,
     *   30 pixels along the y-axis, and 40 pixels along
     *   the z-axis.
     *
     *   The second way to call translate() uses a
     *   p5.Vector object to set the amount of translation.
     *   For example, calling translate(myVector) uses the
     *   x-, y-, and z-components of myVector to set the
     *   amount to translate along the x-, y-, and z-axes.
     *   Doing so is the same as calling
     *   translate(myVector.x, myVector.y, myVector.z).
     *
     *   By default, transformations accumulate. For
     *   example, calling translate(10, 0) twice has the
     *   same effect as calling translate(20, 0) once. The
     *   push() and pop() functions can be used to isolate
     *   transformations within distinct drawing groups.
     *
     *   Note: Transformations are reset at the beginning
     *   of the draw loop. Calling translate(10, 0) inside
     *   the draw() function won't cause shapes to move
     *   continuously.
     *   @param vector vector by which to translate.
     *   @chainable
     */
    function translate(vector: p5.Vector): p5;

    /**
     *   Stores a value in the web browser's local storage.
     *   Web browsers can save small amounts of data using
     *   the built-in localStorage object. Data stored in
     *   localStorage can be retrieved at any point, even
     *   after refreshing a page or restarting the browser.
     *   Data are stored as key-value pairs.
     *
     *   storeItem() makes it easy to store values in
     *   localStorage and getItem() makes it easy to
     *   retrieve them.
     *
     *   The first parameter, key, is the name of the value
     *   to be stored as a string.
     *
     *   The second parameter, value, is the value to be
     *   stored. Values can have any type.
     *
     *   Note: Sensitive data such as passwords or personal
     *   information shouldn't be stored in localStorage.
     *   @param key name of the value.
     *   @param value value to be stored.
     */
    function storeItem(key: string, value: string | number | boolean | object | any[]): void;

    /**
     *   Returns a value in the web browser's local
     *   storage. Web browsers can save small amounts of
     *   data using the built-in localStorage object. Data
     *   stored in localStorage can be retrieved at any
     *   point, even after refreshing a page or restarting
     *   the browser. Data are stored as key-value pairs.
     *
     *   storeItem() makes it easy to store values in
     *   localStorage and getItem() makes it easy to
     *   retrieve them.
     *
     *   The first parameter, key, is the name of the value
     *   to be stored as a string.
     *
     *   The second parameter, value, is the value to be
     *   retrieved a string. For example, calling
     *   getItem('size') retrieves the value with the key
     *   size.
     *
     *   Note: Sensitive data such as passwords or personal
     *   information shouldn't be stored in localStorage.
     *   @param key name of the value.
     *   @return stored item.
     */
    function getItem(key: string): string | number | boolean | object | any[];

    /**
     *   Removes all items in the web browser's local
     *   storage. Web browsers can save small amounts of
     *   data using the built-in localStorage object. Data
     *   stored in localStorage can be retrieved at any
     *   point, even after refreshing a page or restarting
     *   the browser. Data are stored as key-value pairs.
     *   Calling clearStorage() removes all data from
     *   localStorage.
     *
     *   Note: Sensitive data such as passwords or personal
     *   information shouldn't be stored in localStorage.
     */
    function clearStorage(): void;

    /**
     *   Removes an item from the web browser's local
     *   storage. Web browsers can save small amounts of
     *   data using the built-in localStorage object. Data
     *   stored in localStorage can be retrieved at any
     *   point, even after refreshing a page or restarting
     *   the browser. Data are stored as key-value pairs.
     *
     *   storeItem() makes it easy to store values in
     *   localStorage and removeItem() makes it easy to
     *   delete them.
     *
     *   The parameter, key, is the name of the value to
     *   remove as a string. For example, calling
     *   removeItem('size') removes the item with the key
     *   size.
     *
     *   Note: Sensitive data such as passwords or personal
     *   information shouldn't be stored in localStorage.
     *   @param key name of the value to remove.
     */
    function removeItem(key: string): void;

    /**
     *   Creates a new instance of p5.StringDict using the
     *   key-value pair or the object you provide.
     */
    function createStringDict(key: string, value: string): p5.StringDict;

    /**
     *   Creates a new instance of p5.StringDict using the
     *   key-value pair or the object you provide.
     *   @param object object
     */
    function createStringDict(object: object): p5.StringDict;

    /**
     *   Creates a new instance of p5.NumberDict using the
     *   key-value pair or object you provide.
     */
    function createNumberDict(key: number, value: number): p5.NumberDict;

    /**
     *   Creates a new instance of p5.NumberDict using the
     *   key-value pair or object you provide.
     *   @param object object
     */
    function createNumberDict(object: object): p5.NumberDict;

    /**
     *   Searches the page for the first element that
     *   matches the given CSS selector string. The
     *   selector string can be an ID, class, tag name, or
     *   a combination. select() returns a p5.Element
     *   object if it finds a match and null if not.
     *
     *   The second parameter, container, is optional. It
     *   specifies a container to search within. container
     *   can be CSS selector string, a p5.Element object,
     *   or an HTMLElement object.
     *   @param selectors CSS selector string of element to
     *   search for.
     *   @param [container] CSS selector string,
     *   p5.Element, or HTMLElement to search within.
     *   @return p5.Element containing the element.
     */
    function select(selectors: string, container?: string | p5.Element | HTMLElement): p5.Element | null;

    /**
     *   Searches the page for all elements that matches
     *   the given CSS selector string. The selector string
     *   can be an ID, class, tag name, or a combination.
     *   selectAll() returns an array of p5.Element objects
     *   if it finds any matches and an empty array if none
     *   are found.
     *
     *   The second parameter, container, is optional. It
     *   specifies a container to search within. container
     *   can be CSS selector string, a p5.Element object,
     *   or an HTMLElement object.
     *   @param selectors CSS selector string of element to
     *   search for.
     *   @param [container] CSS selector string,
     *   p5.Element, or HTMLElement to search within.
     *   @return array of p5.Elements containing any
     *   elements found.
     */
    function selectAll(selectors: string, container?: string | p5.Element | HTMLElement): p5.Element[];

    /**
     *   Removes all elements created by p5.js, including
     *   any event handlers. There are two exceptions:
     *   canvas elements created by createCanvas() and
     *   p5.Render objects created by createGraphics().
     */
    function removeElements(): void;

    /**
     *   Calls a function when the element changes. Calling
     *   myElement.changed(false) disables the function.
     *   @param fxn function to call when the element
     *   changes. false disables the function.
     *   @chainable
     */
    function changed(fxn: ((...args: any[]) => any) | boolean): p5;

    /**
     *   Calls a function when the element receives input.
     *   myElement.input() is often used to with text
     *   inputs and sliders. Calling myElement.input(false)
     *   disables the function.
     *   @param fxn function to call when input is detected
     *   within the element. false disables the function.
     *   @chainable
     */
    function input(fxn: ((...args: any[]) => any) | boolean): p5;

    /**
     *   Creates a <div></div> element. <div></div>
     *   elements are commonly used as containers for other
     *   elements.
     *
     *   The parameter html is optional. It accepts a
     *   string that sets the inner HTML of the new
     *   <div></div>.
     *   @param [html] inner HTML for the new <div></div>
     *   element.
     *   @return new p5.Element object.
     */
    function createDiv(html?: string): p5.Element;

    /**
     *   Creates a paragraph element. <p></p> elements are
     *   commonly used for paragraph-length text.
     *
     *   The parameter html is optional. It accepts a
     *   string that sets the inner HTML of the new
     *   <p></p>.
     *   @param [html] inner HTML for the new <p></p>
     *   element.
     *   @return new p5.Element object.
     */
    function createP(html?: string): p5.Element;

    /**
     *   Creates a <span></span> element. <span></span>
     *   elements are commonly used as containers for
     *   inline elements. For example, a <span></span> can
     *   hold part of a sentence that's a different style.
     *
     *   The parameter html is optional. It accepts a
     *   string that sets the inner HTML of the new
     *   <span></span>.
     *   @param [html] inner HTML for the new <span></span>
     *   element.
     *   @return new p5.Element object.
     */
    function createSpan(html?: string): p5.Element;

    /**
     *   Creates an <img> element that can appear outside
     *   of the canvas. The first parameter, src, is a
     *   string with the path to the image file. src should
     *   be a relative path, as in 'assets/image.png', or a
     *   URL, as in 'https://example.com/image.png'.
     *
     *   The second parameter, alt, is a string with the
     *   alternate text for the image. An empty string ''
     *   can be used for images that aren't displayed.
     *
     *   The third parameter, crossOrigin, is optional.
     *   It's a string that sets the crossOrigin property
     *   of the image. Use 'anonymous' or 'use-credentials'
     *   to fetch the image with cross-origin access.
     *
     *   The fourth parameter, callback, is also optional.
     *   It sets a function to call after the image loads.
     *   The new image is passed to the callback function
     *   as a p5.Element object.
     *   @param src relative path or URL for the image.
     *   @param alt alternate text for the image.
     *   @return new p5.Element object.
     */
    function createImg(src: string, alt: string): p5.Element;

    /**
     *   Creates an <img> element that can appear outside
     *   of the canvas. The first parameter, src, is a
     *   string with the path to the image file. src should
     *   be a relative path, as in 'assets/image.png', or a
     *   URL, as in 'https://example.com/image.png'.
     *
     *   The second parameter, alt, is a string with the
     *   alternate text for the image. An empty string ''
     *   can be used for images that aren't displayed.
     *
     *   The third parameter, crossOrigin, is optional.
     *   It's a string that sets the crossOrigin property
     *   of the image. Use 'anonymous' or 'use-credentials'
     *   to fetch the image with cross-origin access.
     *
     *   The fourth parameter, callback, is also optional.
     *   It sets a function to call after the image loads.
     *   The new image is passed to the callback function
     *   as a p5.Element object.
     *   @param src relative path or URL for the image.
     *   @param alt alternate text for the image.
     *   @param [crossOrigin] crossOrigin property to use
     *   when fetching the image.
     *   @param [successCallback] function to call once the
     *   image loads. The new image will be passed to the
     *   function as a p5.Element object.
     *   @return new p5.Element object.
     */
    function createImg(
        src: string,
        alt: string,
        crossOrigin?: string,
        successCallback?: (...args: any[]) => any
    ): p5.Element;

    /**
     *   Creates an <a></a> element that links to another
     *   web page. The first parmeter, href, is a string
     *   that sets the URL of the linked page.
     *
     *   The second parameter, html, is a string that sets
     *   the inner HTML of the link. It's common to use
     *   text, images, or buttons as links.
     *
     *   The third parameter, target, is optional. It's a
     *   string that tells the web browser where to open
     *   the link. By default, links open in the current
     *   browser tab. Passing '_blank' will cause the link
     *   to open in a new browser tab. MDN describes a few
     *   other options.
     *   @param href URL of linked page.
     *   @param html inner HTML of link element to display.
     *   @param [target] target where the new link should
     *   open, either '_blank', '_self', '_parent', or
     *   '_top'.
     *   @return new p5.Element object.
     */
    function createA(href: string, html: string, target?: string): p5.Element;

    /**
     *   Creates a slider <input></input> element. Range
     *   sliders are useful for quickly selecting numbers
     *   from a given range.
     *
     *   The first two parameters, min and max, are numbers
     *   that set the slider's minimum and maximum.
     *
     *   The third parameter, value, is optional. It's a
     *   number that sets the slider's default value.
     *
     *   The fourth parameter, step, is also optional. It's
     *   a number that sets the spacing between each value
     *   in the slider's range. Setting step to 0 allows
     *   the slider to move smoothly from min to max.
     *   @param min minimum value of the slider.
     *   @param max maximum value of the slider.
     *   @param [value] default value of the slider.
     *   @param [step] size for each step in the slider's
     *   range.
     *   @return new p5.Element object.
     */
    function createSlider(min: number, max: number, value?: number, step?: number): p5.Element;

    /**
     *   Creates a <button></button> element. The first
     *   parameter, label, is a string that sets the label
     *   displayed on the button.
     *
     *   The second parameter, value, is optional. It's a
     *   string that sets the button's value. See MDN for
     *   more details.
     *   @param label label displayed on the button.
     *   @param [value] value of the button.
     *   @return new p5.Element object.
     */
    function createButton(label: string, value?: string): p5.Element;

    /**
     *   Creates a checkbox <input></input> element.
     *   Checkboxes extend the p5.Element class with a
     *   checked() method. Calling myBox.checked() returns
     *   true if it the box is checked and false if not.
     *
     *   The first parameter, label, is optional. It's a
     *   string that sets the label to display next to the
     *   checkbox.
     *
     *   The second parameter, value, is also optional.
     *   It's a boolean that sets the checkbox's value.
     *   @param [label] label displayed after the checkbox.
     *   @param [value] value of the checkbox. Checked is
     *   true and unchecked is false.
     *   @return new p5.Element object.
     */
    function createCheckbox(label?: string, value?: boolean): p5.Element;

    /**
     *   Creates a dropdown menu <select></select> element.
     *   The parameter is optional. If true is passed, as
     *   in let mySelect = createSelect(true), then the
     *   dropdown will support multiple selections. If an
     *   existing <select></select> element is passed, as
     *   in let mySelect = createSelect(otherSelect), the
     *   existing element will be wrapped in a new
     *   p5.Element object.
     *
     *   Dropdowns extend the p5.Element class with a few
     *   helpful methods for managing options:
     *
     *   - mySelect.option(name, [value]) adds an option to
     *   the menu. The first paremeter, name, is a string
     *   that sets the option's name and value. The second
     *   parameter, value, is optional. If provided, it
     *   sets the value that corresponds to the key name.
     *   If an option with name already exists, its value
     *   is changed to value.
     *   - mySelect.value() returns the currently-selected
     *   option's value.
     *   - mySelect.selected() returns the
     *   currently-selected option.
     *   - mySelect.selected(option) selects the given
     *   option by default.
     *   - mySelect.disable() marks the whole dropdown
     *   element as disabled.
     *   - mySelect.disable(option) marks a given option as
     *   disabled.
     *   - mySelect.enable() marks the whole dropdown
     *   element as enabled.
     *   - mySelect.enable(option) marks a given option as
     *   enabled.
     *   @param [multiple] support multiple selections.
     *   @return new p5.Element object.
     */
    function createSelect(multiple?: boolean): p5.Element;

    /**
     *   Creates a dropdown menu <select></select> element.
     *   The parameter is optional. If true is passed, as
     *   in let mySelect = createSelect(true), then the
     *   dropdown will support multiple selections. If an
     *   existing <select></select> element is passed, as
     *   in let mySelect = createSelect(otherSelect), the
     *   existing element will be wrapped in a new
     *   p5.Element object.
     *
     *   Dropdowns extend the p5.Element class with a few
     *   helpful methods for managing options:
     *
     *   - mySelect.option(name, [value]) adds an option to
     *   the menu. The first paremeter, name, is a string
     *   that sets the option's name and value. The second
     *   parameter, value, is optional. If provided, it
     *   sets the value that corresponds to the key name.
     *   If an option with name already exists, its value
     *   is changed to value.
     *   - mySelect.value() returns the currently-selected
     *   option's value.
     *   - mySelect.selected() returns the
     *   currently-selected option.
     *   - mySelect.selected(option) selects the given
     *   option by default.
     *   - mySelect.disable() marks the whole dropdown
     *   element as disabled.
     *   - mySelect.disable(option) marks a given option as
     *   disabled.
     *   - mySelect.enable() marks the whole dropdown
     *   element as enabled.
     *   - mySelect.enable(option) marks a given option as
     *   enabled.
     *   @param existing select element to wrap, either as
     *   a p5.Element or a HTMLSelectElement.
     */
    function createSelect(existing: object): p5.Element;

    /**
     *   Creates a radio button element. The parameter is
     *   optional. If a string is passed, as in let myRadio
     *   = createSelect('food'), then each radio option
     *   will have "food" as its name parameter: <input
     *   name="food">. If an existing <div></div> or
     *   <span></span> element is passed, as in let myRadio
     *   = createSelect(container), it will become the
     *   radio button's parent element.
     *
     *   Radio buttons extend the p5.Element class with a
     *   few helpful methods for managing options:
     *
     *   - myRadio.option(value, [label]) adds an option to
     *   the menu. The first parameter, value, is a string
     *   that sets the option's value and label. The second
     *   parameter, label, is optional. If provided, it
     *   sets the label displayed for the value. If an
     *   option with value already exists, its label is
     *   changed and its value is returned.
     *   - myRadio.value() returns the currently-selected
     *   option's value.
     *   - myRadio.selected() returns the
     *   currently-selected option.
     *   - myRadio.selected(value) selects the given option
     *   and returns it as an HTMLInputElement.
     *   - myRadio.disable(shouldDisable) Disables the
     *   radio button if true is passed, and enables it if
     *   false is passed.
     *   @param [containerElement] container HTML Element,
     *   either a <div></div> or <span></span>.
     *   @return new p5.Element object.
     */
    function createRadio(containerElement?: object): p5.Element;

    /**
     *   Creates a radio button element. The parameter is
     *   optional. If a string is passed, as in let myRadio
     *   = createSelect('food'), then each radio option
     *   will have "food" as its name parameter: <input
     *   name="food">. If an existing <div></div> or
     *   <span></span> element is passed, as in let myRadio
     *   = createSelect(container), it will become the
     *   radio button's parent element.
     *
     *   Radio buttons extend the p5.Element class with a
     *   few helpful methods for managing options:
     *
     *   - myRadio.option(value, [label]) adds an option to
     *   the menu. The first parameter, value, is a string
     *   that sets the option's value and label. The second
     *   parameter, label, is optional. If provided, it
     *   sets the label displayed for the value. If an
     *   option with value already exists, its label is
     *   changed and its value is returned.
     *   - myRadio.value() returns the currently-selected
     *   option's value.
     *   - myRadio.selected() returns the
     *   currently-selected option.
     *   - myRadio.selected(value) selects the given option
     *   and returns it as an HTMLInputElement.
     *   - myRadio.disable(shouldDisable) Disables the
     *   radio button if true is passed, and enables it if
     *   false is passed.
     *   @param [name] name parameter assigned to each
     *   option's <input></input> element.
     *   @return new p5.Element object.
     */
    function createRadio(name?: string): p5.Element;

    /**
     *   Creates a radio button element. The parameter is
     *   optional. If a string is passed, as in let myRadio
     *   = createSelect('food'), then each radio option
     *   will have "food" as its name parameter: <input
     *   name="food">. If an existing <div></div> or
     *   <span></span> element is passed, as in let myRadio
     *   = createSelect(container), it will become the
     *   radio button's parent element.
     *
     *   Radio buttons extend the p5.Element class with a
     *   few helpful methods for managing options:
     *
     *   - myRadio.option(value, [label]) adds an option to
     *   the menu. The first parameter, value, is a string
     *   that sets the option's value and label. The second
     *   parameter, label, is optional. If provided, it
     *   sets the label displayed for the value. If an
     *   option with value already exists, its label is
     *   changed and its value is returned.
     *   - myRadio.value() returns the currently-selected
     *   option's value.
     *   - myRadio.selected() returns the
     *   currently-selected option.
     *   - myRadio.selected(value) selects the given option
     *   and returns it as an HTMLInputElement.
     *   - myRadio.disable(shouldDisable) Disables the
     *   radio button if true is passed, and enables it if
     *   false is passed.
     *   @return new p5.Element object.
     */
    function createRadio(): p5.Element;

    /**
     *   Creates a color picker element. The parameter,
     *   value, is optional. If a color string or p5.Color
     *   object is passed, it will set the default color.
     *
     *   Color pickers extend the p5.Element class with a
     *   couple of helpful methods for managing colors:
     *
     *   - myPicker.value() returns the current color as a
     *   hex string in the format '#rrggbb'.
     *   - myPicker.color() returns the current color as a
     *   p5.Color object.
     *   @param [value] default color as a CSS color
     *   string.
     *   @return new p5.Element object.
     */
    function createColorPicker(value?: string | p5.Color): p5.Element;

    /**
     *   Creates a text <input></input> element. Call
     *   myInput.size() to set the length of the text box.
     *
     *   The first parameter, value, is optional. It's a
     *   string that sets the input's default value. The
     *   input is blank by default.
     *
     *   The second parameter, type, is also optional. It's
     *   a string that specifies the type of text being
     *   input. See MDN for a full list of options. The
     *   default is 'text'.
     *   @param [value] default value of the input box.
     *   Defaults to an empty string ''.
     *   @param [type] type of input. Defaults to 'text'.
     *   @return new p5.Element object.
     */
    function createInput(value?: string, type?: string): p5.Element;

    /**
     *   Creates a text <input></input> element. Call
     *   myInput.size() to set the length of the text box.
     *
     *   The first parameter, value, is optional. It's a
     *   string that sets the input's default value. The
     *   input is blank by default.
     *
     *   The second parameter, type, is also optional. It's
     *   a string that specifies the type of text being
     *   input. See MDN for a full list of options. The
     *   default is 'text'.
     *   @param [value] default value of the input box.
     *   Defaults to an empty string ''.
     */
    function createInput(value?: string): p5.Element;

    /**
     *   Creates an <input></input> element of type 'file'.
     *   createFileInput() allows users to select local
     *   files for use in a sketch. It returns a p5.File
     *   object.
     *
     *   The first parameter, callback, is a function
     *   that's called when the file loads. The callback
     *   function should have one parameter, file, that's a
     *   p5.File object.
     *
     *   The second parameter, multiple, is optional. It's
     *   a boolean value that allows loading multiple files
     *   if set to true. If true, callback will be called
     *   once per file.
     *   @param callback function to call once the file
     *   loads.
     *   @param [multiple] allow multiple files to be
     *   selected.
     *   @return new p5.File object.
     */
    function createFileInput(callback: (...args: any[]) => any, multiple?: boolean): p5.File;

    /**
     *   Creates a <video> element for simple audio/video
     *   playback. createVideo() returns a new
     *   p5.MediaElement object. Videos are shown by
     *   default. They can be hidden by calling
     *   video.hide() and drawn to the canvas using
     *   image().
     *
     *   The first parameter, src, is the path the video.
     *   If a single string is passed, as in
     *   'assets/topsecret.mp4', a single video is loaded.
     *   An array of strings can be used to load the same
     *   video in different formats. For example,
     *   ['assets/topsecret.mp4', 'assets/topsecret.ogv',
     *   'assets/topsecret.webm']. This is useful for
     *   ensuring that the video can play across different
     *   browsers with different capabilities. See MDN for
     *   more information about supported formats.
     *
     *   The second parameter, callback, is optional. It's
     *   a function to call once the video is ready to
     *   play.
     *   @param src path to a video file, or an array of
     *   paths for supporting different browsers.
     *   @param [callback] function to call once the video
     *   is ready to play.
     *   @return new p5.MediaElement object.
     */
    function createVideo(src: string | string[], callback?: (...args: any[]) => any): p5.MediaElement;

    /**
     *   Creates a hidden <audio> element for simple audio
     *   playback. createAudio() returns a new
     *   p5.MediaElement object.
     *
     *   The first parameter, src, is the path the video.
     *   If a single string is passed, as in
     *   'assets/video.mp4', a single video is loaded. An
     *   array of strings can be used to load the same
     *   video in different formats. For example,
     *   ['assets/video.mp4', 'assets/video.ogv',
     *   'assets/video.webm']. This is useful for ensuring
     *   that the video can play across different browsers
     *   with different capabilities. See MDN for more
     *   information about supported formats.
     *
     *   The second parameter, callback, is optional. It's
     *   a function to call once the audio is ready to
     *   play.
     *   @param [src] path to an audio file, or an array of
     *   paths for supporting different browsers.
     *   @param [callback] function to call once the audio
     *   is ready to play.
     *   @return new p5.MediaElement object.
     */
    function createAudio(src?: string | string[], callback?: (...args: any[]) => any): p5.MediaElement;

    /**
     *   Creates a <video> element that "captures" the
     *   audio/video stream from the webcam and microphone.
     *   createCapture() returns a new p5.MediaElement
     *   object. Videos are shown by default. They can be
     *   hidden by calling capture.hide() and drawn to the
     *   canvas using image().
     *
     *   The first parameter, type, is optional. It sets
     *   the type of capture to use. By default,
     *   createCapture() captures both audio and video. If
     *   VIDEO is passed, as in createCapture(VIDEO), only
     *   video will be captured. If AUDIO is passed, as in
     *   createCapture(AUDIO), only audio will be captured.
     *   A constraints object can also be passed to
     *   customize the stream. See the  W3C documentation
     *   for possible properties. Different browsers
     *   support different properties.
     *
     *   The 'flipped' property is an optional property
     *   which can be set to {flipped:true} to mirror the
     *   video output.If it is true then it means that
     *   video will be mirrored or flipped and if nothing
     *   is mentioned then by default it will be false.
     *
     *   The second parameter,callback, is optional. It's a
     *   function to call once the capture is ready for
     *   use. The callback function should have one
     *   parameter, stream, that's a MediaStream object.
     *
     *   Note: createCapture() only works when running a
     *   sketch locally or using HTTPS. Learn more here and
     *   here.
     *   @param [type] type of capture, either AUDIO or
     *   VIDEO, or a constraints object. Both video and
     *   audio audio streams are captured by default.
     *   @param [flipped] flip the capturing video and
     *   mirror the output with {flipped:true}. By default
     *   it is false.
     *   @param [callback] function to call once the stream
     *   has loaded.
     *   @return new p5.MediaElement object.
     */
    function createCapture(
        type?: string | p5.TYPE | object,
        flipped?: object,
        callback?: (...args: any[]) => any
    ): p5.MediaElement;

    /**
     *   Creates a new p5.Element object. The first
     *   parameter, tag, is a string an HTML tag such as
     *   'h5'.
     *
     *   The second parameter, content, is optional. It's a
     *   string that sets the HTML content to insert into
     *   the new element. New elements have no content by
     *   default.
     *   @param tag tag for the new element.
     *   @param [content] HTML content to insert into the
     *   element.
     *   @return new p5.Element object.
     */
    function createElement(tag: string, content?: string): p5.Element;

    /**
     *   The setMoveThreshold() function is used to set the
     *   movement threshold for the deviceMoved() function.
     *   The default threshold is set to 0.5.
     *   @param value The threshold value
     */
    function setMoveThreshold(value: number): void;

    /**
     *   The setShakeThreshold() function is used to set
     *   the movement threshold for the deviceShaken()
     *   function. The default threshold is set to 30.
     *   @param value The threshold value
     */
    function setShakeThreshold(value: number): void;

    /**
     *   The deviceMoved() function is called when the
     *   device is moved by more than the threshold value
     *   along X, Y or Z axis. The default threshold is set
     *   to 0.5. The threshold value can be changed using
     *   setMoveThreshold().
     */
    function deviceMoved(): void;

    /**
     *   The deviceTurned() function is called when the
     *   device rotates by more than 90 degrees
     *   continuously. The axis that triggers the
     *   deviceTurned() method is stored in the turnAxis
     *   variable. The deviceTurned() method can be locked
     *   to trigger on any axis: X, Y or Z by comparing the
     *   turnAxis variable to 'X', 'Y' or 'Z'.
     */
    function deviceTurned(): void;

    /**
     *   The deviceShaken() function is called when the
     *   device total acceleration changes of accelerationX
     *   and accelerationY values is more than the
     *   threshold value. The default threshold is set to
     *   30. The threshold value can be changed using
     *   setShakeThreshold().
     */
    function deviceShaken(): void;

    /**
     *   The system variable deviceOrientation always
     *   contains the orientation of the device. The value
     *   of this variable will either be set 'landscape' or
     *   'portrait'. If no data is available it will be set
     *   to 'undefined'. either LANDSCAPE or PORTRAIT.
     */
    let deviceOrientation: p5.UNKNOWN_P5_CONSTANT;

    /**
     *   The system variable accelerationX always contains
     *   the acceleration of the device along the x axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationX: number;

    /**
     *   The system variable accelerationY always contains
     *   the acceleration of the device along the y axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationY: number;

    /**
     *   The system variable accelerationZ always contains
     *   the acceleration of the device along the z axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationZ: number;

    /**
     *   The system variable pAccelerationX always contains
     *   the acceleration of the device along the x axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationX: number;

    /**
     *   The system variable pAccelerationY always contains
     *   the acceleration of the device along the y axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationY: number;

    /**
     *   The system variable pAccelerationZ always contains
     *   the acceleration of the device along the z axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationZ: number;

    /**
     *   The system variable rotationX always contains the
     *   rotation of the device along the x axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be -180 to 180. If it is set to RADIANS, the
     *   value will be -PI to PI. Note: The order the
     *   rotations are called is important, ie. if used
     *   together, it must be called in the order Z-X-Y or
     *   there might be unexpected behaviour.
     */
    let rotationX: number;

    /**
     *   The system variable rotationY always contains the
     *   rotation of the device along the y axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be -90 to 90. If it is set to RADIANS, the
     *   value will be -PI/2 to PI/2. Note: The order the
     *   rotations are called is important, ie. if used
     *   together, it must be called in the order Z-X-Y or
     *   there might be unexpected behaviour.
     */
    let rotationY: number;

    /**
     *   The system variable rotationZ always contains the
     *   rotation of the device along the z axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be 0 to 360. If it is set to RADIANS, the
     *   value will be 0 to 2*PI. Unlike rotationX and
     *   rotationY, this variable is available for devices
     *   with a built-in compass only.
     *
     *   Note: The order the rotations are called is
     *   important, ie. if used together, it must be called
     *   in the order Z-X-Y or there might be unexpected
     *   behaviour.
     */
    let rotationZ: number;

    /**
     *   The system variable pRotationX always contains the
     *   rotation of the device along the x axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be
     *   -180 to 180. If it is set to RADIANS, the value
     *   will be -PI to PI. pRotationX can also be used
     *   with rotationX to determine the rotate direction
     *   of the device along the X-axis.
     */
    let pRotationX: number;

    /**
     *   The system variable pRotationY always contains the
     *   rotation of the device along the y axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be
     *   -90 to 90. If it is set to RADIANS, the value will
     *   be -PI/2 to PI/2. pRotationY can also be used with
     *   rotationY to determine the rotate direction of the
     *   device along the Y-axis.
     */
    let pRotationY: number;

    /**
     *   The system variable pRotationZ always contains the
     *   rotation of the device along the z axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be 0
     *   to 360. If it is set to RADIANS, the value will be
     *   0 to 2*PI. pRotationZ can also be used with
     *   rotationZ to determine the rotate direction of the
     *   device along the Z-axis.
     */
    let pRotationZ: number;

    /**
     *   When a device is rotated, the axis that triggers
     *   the deviceTurned() method is stored in the
     *   turnAxis variable. The turnAxis variable is only
     *   defined within the scope of deviceTurned().
     */
    let turnAxis: string;

    /**
     *   A function that's called once when any key is
     *   pressed. Declaring the function keyPressed() sets
     *   a code block to run once automatically when the
     *   user presses any key:
     *
     *   function keyPressed() { // Code to run. }
     *
     *   The key and keyCode variables will be updated with
     *   the most recently typed value when keyPressed() is
     *   called by p5.js:
     *
     *   function keyPressed() { if (key === 'c') { // Code
     *   to run. } if (keyCode === ENTER) { // Code to run.
     *   } }
     *
     *   The parameter, event, is optional. keyPressed() is
     *   always passed a KeyboardEvent object with
     *   properties that describe the key press event:
     *
     *   function keyPressed(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   Browsers may have default behaviors attached to
     *   various key events. For example, some browsers may
     *   jump to the bottom of a web page when the SPACE
     *   key is pressed. To prevent any default behavior
     *   for this event, add return false; to the end of
     *   the function.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyPressed(event?: KeyboardEvent): void;

    /**
     *   A function that's called once when any key is
     *   released. Declaring the function keyReleased()
     *   sets a code block to run once automatically when
     *   the user releases any key:
     *
     *   function keyReleased() { // Code to run. }
     *
     *   The key and keyCode variables will be updated with
     *   the most recently released value when
     *   keyReleased() is called by p5.js:
     *
     *   function keyReleased() { if (key === 'c') { //
     *   Code to run. } if (keyCode === ENTER) { // Code to
     *   run. } }
     *
     *   The parameter, event, is optional. keyReleased()
     *   is always passed a KeyboardEvent object with
     *   properties that describe the key press event:
     *
     *   function keyReleased(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   Browsers may have default behaviors attached to
     *   various key events. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyReleased(event?: KeyboardEvent): void;

    /**
     *   A function that's called once when keys with
     *   printable characters are pressed. Declaring the
     *   function keyTyped() sets a code block to run once
     *   automatically when the user presses any key with a
     *   printable character such as a or 1. Modifier keys
     *   such as SHIFT, CONTROL, and the arrow keys will be
     *   ignored:
     *
     *   function keyTyped() { // Code to run. }
     *
     *   The key and keyCode variables will be updated with
     *   the most recently released value when keyTyped()
     *   is called by p5.js:
     *
     *   function keyTyped() { // Check for the "c"
     *   character using key. if (key === 'c') { // Code to
     *   run. } // Check for "c" using keyCode. if (keyCode
     *   === 67) { // Code to run. } }
     *
     *   The parameter, event, is optional. keyTyped() is
     *   always passed a KeyboardEvent object with
     *   properties that describe the key press event:
     *
     *   function keyReleased(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   Note: Use the keyPressed() function and keyCode
     *   system variable to respond to modifier keys such
     *   as ALT.
     *
     *   Browsers may have default behaviors attached to
     *   various key events. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyTyped(event?: KeyboardEvent): void;

    /**
     *   Returns true if the key it’s checking is pressed
     *   and false if not. keyIsDown() is helpful when
     *   checking for multiple different key presses. For
     *   example, keyIsDown() can be used to check if both
     *   LEFT_ARROW and UP_ARROW are pressed:
     *
     *   if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW))
     *   { // Move diagonally. }
     *
     *   keyIsDown() can check for key presses using
     *   keyCode values, as in keyIsDown(37) or
     *   keyIsDown(LEFT_ARROW). Key codes can be found on
     *   websites such as keycode.info.
     *   @param code key to check.
     *   @return whether the key is down or not.
     */
    function keyIsDown(code: number): boolean;

    /**
     *   A Boolean system variable that's true if any key
     *   is currently pressed and false if not.
     */
    let keyIsPressed: boolean;

    /**
     *   A String system variable that contains the value
     *   of the last key typed. The key variable is helpful
     *   for checking whether an ASCII key has been typed.
     *   For example, the expression key === "a" evaluates
     *   to true if the a key was typed and false if not.
     *   key doesn’t update for special keys such as
     *   LEFT_ARROW and ENTER. Use keyCode instead for
     *   special keys. The keyIsDown() function should be
     *   used to check for multiple different key presses
     *   at the same time.
     */
    let key: string;

    /**
     *   A Number system variable that contains the code of
     *   the last key typed. All keys have a keyCode. For
     *   example, the a key has the keyCode 65. The keyCode
     *   variable is helpful for checking whether a special
     *   key has been typed. For example, the following
     *   conditional checks whether the enter key has been
     *   typed:
     *
     *   if (keyCode === 13) { // Code to run if the enter
     *   key was pressed. }
     *
     *   The same code can be written more clearly using
     *   the system variable ENTER which has a value of 13:
     *
     *   if (keyCode === ENTER) { // Code to run if the
     *   enter key was pressed. }
     *
     *   The system variables BACKSPACE, DELETE, ENTER,
     *   RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT,
     *   UP_ARROW, DOWN_ARROW, LEFT_ARROW, and RIGHT_ARROW
     *   are all helpful shorthands the key codes of
     *   special keys. Key codes can be found on websites
     *   such as keycode.info.
     */
    let keyCode: number;

    /**
     *   A function that's called when the mouse moves.
     *   Declaring the function mouseMoved() sets a code
     *   block to run automatically when the user moves the
     *   mouse without clicking any mouse buttons:
     *
     *   function mouseMoved() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mouseMoved() is called by p5.js:
     *
     *   function mouseMoved() { if (mouseX < 50) { // Code
     *   to run if the mouse is on the left. } if (mouseY >
     *   50) { // Code to run if the mouse is near the
     *   bottom. } }
     *
     *   The parameter, event, is optional. mouseMoved() is
     *   always passed a MouseEvent object with properties
     *   that describe the mouse move event:
     *
     *   function mouseMoved(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *   @param [event] optional MouseEvent argument.
     */
    function mouseMoved(event?: MouseEvent): void;

    /**
     *   A function that's called when the mouse moves
     *   while a button is pressed. Declaring the function
     *   mouseDragged() sets a code block to run
     *   automatically when the user clicks and drags the
     *   mouse:
     *
     *   function mouseDragged() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mouseDragged() is called by p5.js:
     *
     *   function mouseDragged() { if (mouseX < 50) { //
     *   Code to run if the mouse is on the left. } if
     *   (mouseY > 50) { // Code to run if the mouse is
     *   near the bottom. } }
     *
     *   The parameter, event, is optional. mouseDragged()
     *   is always passed a MouseEvent object with
     *   properties that describe the mouse drag event:
     *
     *   function mouseDragged(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mouseDragged() will run
     *   when a user moves a touch point if touchMoved()
     *   isn’t declared. If touchMoved() is declared, then
     *   touchMoved() will run when a user moves a touch
     *   point and mouseDragged() won’t.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *   @param [event] optional MouseEvent argument.
     */
    function mouseDragged(event?: MouseEvent): void;

    /**
     *   A function that's called once when a mouse button
     *   is pressed. Declaring the function mousePressed()
     *   sets a code block to run automatically when the
     *   user presses a mouse button:
     *
     *   function mousePressed() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mousePressed() is called by p5.js:
     *
     *   function mousePressed() { if (mouseX < 50) { //
     *   Code to run if the mouse is on the left. } if
     *   (mouseY > 50) { // Code to run if the mouse is
     *   near the bottom. } }
     *
     *   The parameter, event, is optional. mousePressed()
     *   is always passed a MouseEvent object with
     *   properties that describe the mouse press event:
     *
     *   function mousePressed(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mousePressed() will run
     *   when a user’s touch begins if touchStarted() isn’t
     *   declared. If touchStarted() is declared, then
     *   touchStarted() will run when a user’s touch begins
     *   and mousePressed() won’t.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *
     *   Note: mousePressed(), mouseReleased(), and
     *   mouseClicked() are all related. mousePressed()
     *   runs as soon as the user clicks the mouse.
     *   mouseReleased() runs as soon as the user releases
     *   the mouse click. mouseClicked() runs immediately
     *   after mouseReleased().
     *   @param [event] optional MouseEvent argument.
     */
    function mousePressed(event?: MouseEvent): void;

    /**
     *   A function that's called once when a mouse button
     *   is released. Declaring the function
     *   mouseReleased() sets a code block to run
     *   automatically when the user releases a mouse
     *   button after having pressed it:
     *
     *   function mouseReleased() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mouseReleased() is called by p5.js:
     *
     *   function mouseReleased() { if (mouseX < 50) { //
     *   Code to run if the mouse is on the left. } if
     *   (mouseY > 50) { // Code to run if the mouse is
     *   near the bottom. } }
     *
     *   The parameter, event, is optional. mouseReleased()
     *   is always passed a MouseEvent object with
     *   properties that describe the mouse release event:
     *
     *   function mouseReleased(event) { // Code to run
     *   that uses the event. console.log(event); }
     *
     *   On touchscreen devices, mouseReleased() will run
     *   when a user’s touch ends if touchEnded() isn’t
     *   declared. If touchEnded() is declared, then
     *   touchEnded() will run when a user’s touch ends and
     *   mouseReleased() won’t.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *
     *   Note: mousePressed(), mouseReleased(), and
     *   mouseClicked() are all related. mousePressed()
     *   runs as soon as the user clicks the mouse.
     *   mouseReleased() runs as soon as the user releases
     *   the mouse click. mouseClicked() runs immediately
     *   after mouseReleased().
     *   @param [event] optional MouseEvent argument.
     */
    function mouseReleased(event?: MouseEvent): void;

    /**
     *   A function that's called once after a mouse button
     *   is pressed and released. Declaring the function
     *   mouseClicked() sets a code block to run
     *   automatically when the user releases a mouse
     *   button after having pressed it:
     *
     *   function mouseClicked() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mouseClicked() is called by p5.js:
     *
     *   function mouseClicked() { if (mouseX < 50) { //
     *   Code to run if the mouse is on the left. } if
     *   (mouseY > 50) { // Code to run if the mouse is
     *   near the bottom. } }
     *
     *   The parameter, event, is optional. mouseClicked()
     *   is always passed a MouseEvent object with
     *   properties that describe the mouse click event:
     *
     *   function mouseClicked(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mouseClicked() will run
     *   when a user’s touch ends if touchEnded() isn’t
     *   declared. If touchEnded() is declared, then
     *   touchEnded() will run when a user’s touch ends and
     *   mouseClicked() won’t.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *
     *   Note: mousePressed(), mouseReleased(), and
     *   mouseClicked() are all related. mousePressed()
     *   runs as soon as the user clicks the mouse.
     *   mouseReleased() runs as soon as the user releases
     *   the mouse click. mouseClicked() runs immediately
     *   after mouseReleased().
     *   @param [event] optional MouseEvent argument.
     */
    function mouseClicked(event?: MouseEvent): void;

    /**
     *   A function that's called once when a mouse button
     *   is clicked twice quickly. Declaring the function
     *   doubleClicked() sets a code block to run
     *   automatically when the user presses and releases
     *   the mouse button twice quickly:
     *
     *   function doubleClicked() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when doubleClicked() is called by p5.js:
     *
     *   function doubleClicked() { if (mouseX < 50) { //
     *   Code to run if the mouse is on the left. } if
     *   (mouseY > 50) { // Code to run if the mouse is
     *   near the bottom. } }
     *
     *   The parameter, event, is optional. doubleClicked()
     *   is always passed a MouseEvent object with
     *   properties that describe the double-click event:
     *
     *   function doubleClicked(event) { // Code to run
     *   that uses the event. console.log(event); }
     *
     *   On touchscreen devices, code placed in
     *   doubleClicked() will run after two touches that
     *   occur within a short time.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *   @param [event] optional MouseEvent argument.
     */
    function doubleClicked(event?: MouseEvent): void;

    /**
     *   A function that's called once when the mouse wheel
     *   moves. Declaring the function mouseWheel() sets a
     *   code block to run automatically when the user
     *   scrolls with the mouse wheel:
     *
     *   function mouseWheel() { // Code to run. }
     *
     *   The mouse system variables, such as mouseX and
     *   mouseY, will be updated with their most recent
     *   value when mouseWheel() is called by p5.js:
     *
     *   function mouseWheel() { if (mouseX < 50) { // Code
     *   to run if the mouse is on the left. } if (mouseY >
     *   50) { // Code to run if the mouse is near the
     *   bottom. } }
     *
     *   The parameter, event, is optional. mouseWheel() is
     *   always passed a MouseEvent object with properties
     *   that describe the mouse scroll event:
     *
     *   function mouseWheel(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   The event object has many properties including
     *   delta, a Number containing the distance that the
     *   user scrolled. For example, event.delta might have
     *   the value 5 when the user scrolls up. event.delta
     *   is positive if the user scrolls up and negative if
     *   they scroll down. The signs are opposite on macOS
     *   with "natural" scrolling enabled.
     *
     *   Browsers may have default behaviors attached to
     *   various mouse events. For example, some browsers
     *   highlight text when the user moves the mouse while
     *   pressing a mouse button. To prevent any default
     *   behavior for this event, add return false; to the
     *   end of the function.
     *
     *   Note: On Safari, mouseWheel() may only work as
     *   expected if return false; is added at the end of
     *   the function.
     *   @param [event] optional WheelEvent argument.
     */
    function mouseWheel(event?: WheelEvent): void;

    /**
     *   Locks the mouse pointer to its current position
     *   and makes it invisible. requestPointerLock()
     *   allows the mouse to move forever without leaving
     *   the screen. Calling requestPointerLock() locks the
     *   values of mouseX, mouseY, pmouseX, and pmouseY.
     *   movedX and movedY continue updating and can be
     *   used to get the distance the mouse moved since the
     *   last frame was drawn. Calling exitPointerLock()
     *   resumes updating the mouse system variables.
     *
     *   Note: Most browsers require an input, such as a
     *   click, before calling requestPointerLock(). It’s
     *   recommended to call requestPointerLock() in an
     *   event function such as doubleClicked().
     */
    function requestPointerLock(): void;

    /**
     *   Exits a pointer lock started with
     *   requestPointerLock. Calling requestPointerLock()
     *   locks the values of mouseX, mouseY, pmouseX, and
     *   pmouseY. Calling exitPointerLock() resumes
     *   updating the mouse system variables.
     *
     *   Note: Most browsers require an input, such as a
     *   click, before calling requestPointerLock(). It’s
     *   recommended to call requestPointerLock() in an
     *   event function such as doubleClicked().
     */
    function exitPointerLock(): void;

    /**
     *   A Number system variable that tracks the mouse's
     *   horizontal movement. movedX tracks how many pixels
     *   the mouse moves left or right between frames.
     *   movedX will have a negative value if the mouse
     *   moves left between frames and a positive value if
     *   it moves right. movedX can be calculated as mouseX
     *   - pmouseX.
     *
     *   Note: movedX continues updating even when
     *   requestPointerLock() is active.
     */
    let movedX: number;

    /**
     *   A Number system variable that tracks the mouse's
     *   vertical movement. movedY tracks how many pixels
     *   the mouse moves up or down between frames. movedY
     *   will have a negative value if the mouse moves up
     *   between frames and a positive value if it moves
     *   down. movedY can be calculated as mouseY -
     *   pmouseY.
     *
     *   Note: movedY continues updating even when
     *   requestPointerLock() is active.
     */
    let movedY: number;

    /**
     *   A Number system variable that tracks the mouse's
     *   horizontal position. In 2D mode, mouseX keeps
     *   track of the mouse's position relative to the
     *   top-left corner of the canvas. For example, if the
     *   mouse is 50 pixels from the left edge of the
     *   canvas, then mouseX will be 50.
     *
     *   In WebGL mode, mouseX keeps track of the mouse's
     *   position relative to the center of the canvas. For
     *   example, if the mouse is 50 pixels to the right of
     *   the canvas' center, then mouseX will be 50.
     *
     *   If touch is used instead of the mouse, then mouseX
     *   will hold the x-coordinate of the most recent
     *   touch point.
     */
    let mouseX: number;

    /**
     *   A Number system variable that tracks the mouse's
     *   vertical position. In 2D mode, mouseY keeps track
     *   of the mouse's position relative to the top-left
     *   corner of the canvas. For example, if the mouse is
     *   50 pixels from the top edge of the canvas, then
     *   mouseY will be 50.
     *
     *   In WebGL mode, mouseY keeps track of the mouse's
     *   position relative to the center of the canvas. For
     *   example, if the mouse is 50 pixels below the
     *   canvas' center, then mouseY will be 50.
     *
     *   If touch is used instead of the mouse, then mouseY
     *   will hold the y-coordinate of the most recent
     *   touch point.
     */
    let mouseY: number;

    /**
     *   A Number system variable that tracks the mouse's
     *   previous horizontal position. In 2D mode, pmouseX
     *   keeps track of the mouse's position relative to
     *   the top-left corner of the canvas. Its value is
     *   mouseX from the previous frame. For example, if
     *   the mouse was 50 pixels from the left edge of the
     *   canvas during the last frame, then pmouseX will be
     *   50.
     *
     *   In WebGL mode, pmouseX keeps track of the mouse's
     *   position relative to the center of the canvas. For
     *   example, if the mouse was 50 pixels to the right
     *   of the canvas' center during the last frame, then
     *   pmouseX will be 50.
     *
     *   If touch is used instead of the mouse, then
     *   pmouseX will hold the x-coordinate of the last
     *   touch point.
     *
     *   Note: pmouseX is reset to the current mouseX value
     *   at the start of each touch event.
     */
    let pmouseX: number;

    /**
     *   A Number system variable that tracks the mouse's
     *   previous vertical position. In 2D mode, pmouseY
     *   keeps track of the mouse's position relative to
     *   the top-left corner of the canvas. Its value is
     *   mouseY from the previous frame. For example, if
     *   the mouse was 50 pixels from the top edge of the
     *   canvas during the last frame, then pmouseY will be
     *   50.
     *
     *   In WebGL mode, pmouseY keeps track of the mouse's
     *   position relative to the center of the canvas. For
     *   example, if the mouse was 50 pixels below the
     *   canvas' center during the last frame, then pmouseY
     *   will be 50.
     *
     *   If touch is used instead of the mouse, then
     *   pmouseY will hold the y-coordinate of the last
     *   touch point.
     *
     *   Note: pmouseY is reset to the current mouseY value
     *   at the start of each touch event.
     */
    let pmouseY: number;

    /**
     *   A Number variable that tracks the mouse's
     *   horizontal position within the browser. winMouseX
     *   keeps track of the mouse's position relative to
     *   the top-left corner of the browser window. For
     *   example, if the mouse is 50 pixels from the left
     *   edge of the browser, then winMouseX will be 50.
     *
     *   On a touchscreen device, winMouseX will hold the
     *   x-coordinate of the most recent touch point.
     *
     *   Note: Use mouseX to track the mouse’s x-coordinate
     *   within the canvas.
     */
    let winMouseX: number;

    /**
     *   A Number variable that tracks the mouse's vertical
     *   position within the browser. winMouseY keeps track
     *   of the mouse's position relative to the top-left
     *   corner of the browser window. For example, if the
     *   mouse is 50 pixels from the top edge of the
     *   browser, then winMouseY will be 50.
     *
     *   On a touchscreen device, winMouseY will hold the
     *   y-coordinate of the most recent touch point.
     *
     *   Note: Use mouseY to track the mouse’s y-coordinate
     *   within the canvas.
     */
    let winMouseY: number;

    /**
     *   A Number variable that tracks the mouse's previous
     *   horizontal position within the browser. pwinMouseX
     *   keeps track of the mouse's position relative to
     *   the top-left corner of the browser window. Its
     *   value is winMouseX from the previous frame. For
     *   example, if the mouse was 50 pixels from the left
     *   edge of the browser during the last frame, then
     *   pwinMouseX will be 50.
     *
     *   On a touchscreen device, pwinMouseX will hold the
     *   x-coordinate of the most recent touch point.
     *   pwinMouseX is reset to the current winMouseX value
     *   at the start of each touch event.
     *
     *   Note: Use pmouseX to track the mouse’s previous
     *   x-coordinate within the canvas.
     */
    let pwinMouseX: number;

    /**
     *   A Number variable that tracks the mouse's previous
     *   vertical position within the browser. pwinMouseY
     *   keeps track of the mouse's position relative to
     *   the top-left corner of the browser window. Its
     *   value is winMouseY from the previous frame. For
     *   example, if the mouse was 50 pixels from the top
     *   edge of the browser during the last frame, then
     *   pwinMouseY will be 50.
     *
     *   On a touchscreen device, pwinMouseY will hold the
     *   y-coordinate of the most recent touch point.
     *   pwinMouseY is reset to the current winMouseY value
     *   at the start of each touch event.
     *
     *   Note: Use pmouseY to track the mouse’s previous
     *   y-coordinate within the canvas.
     */
    let pwinMouseY: number;

    /**
     *   A String system variable that contains the value
     *   of the last mouse button pressed. The mouseButton
     *   variable is either LEFT, RIGHT, or CENTER,
     *   depending on which button was pressed last.
     *
     *   Note: Different browsers may track mouseButton
     *   differently. See MDN for more information.
     */
    let mouseButton: p5.UNKNOWN_P5_CONSTANT;

    /**
     *   A Boolean system variable that's true if the mouse
     *   is pressed and false if not.
     */
    let mouseIsPressed: boolean;

    /**
     *   A function that's called once each time the user
     *   touches the screen. Declaring a function called
     *   touchStarted() sets a code block to run
     *   automatically each time the user begins touching a
     *   touchscreen device:
     *
     *   function touchStarted() { // Code to run. }
     *
     *   The touches array will be updated with the most
     *   recent touch points when touchStarted() is called
     *   by p5.js:
     *
     *   function touchStarted() { // Paint over the
     *   background. background(200); // Mark each touch
     *   point once with a circle. for (let touch of
     *   touches) { circle(touch.x, touch.y, 40); } }
     *
     *   The parameter, event, is optional. touchStarted()
     *   will be passed a TouchEvent object with properties
     *   that describe the touch event:
     *
     *   function touchStarted(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mousePressed() will run
     *   when a user’s touch starts if touchStarted() isn’t
     *   declared. If touchStarted() is declared, then
     *   touchStarted() will run when a user’s touch starts
     *   and mousePressed() won’t.
     *
     *   Note: touchStarted(), touchEnded(), and
     *   touchMoved() are all related. touchStarted() runs
     *   as soon as the user touches a touchscreen device.
     *   touchEnded() runs as soon as the user ends a
     *   touch. touchMoved() runs repeatedly as the user
     *   moves any touch points.
     *   @param [event] optional TouchEvent argument.
     */
    function touchStarted(event?: TouchEvent): void;

    /**
     *   A function that's called when the user touches the
     *   screen and moves. Declaring the function
     *   touchMoved() sets a code block to run
     *   automatically when the user touches a touchscreen
     *   device and moves:
     *
     *   function touchMoved() { // Code to run. }
     *
     *   The touches array will be updated with the most
     *   recent touch points when touchMoved() is called by
     *   p5.js:
     *
     *   function touchMoved() { // Paint over the
     *   background. background(200); // Mark each touch
     *   point while the user moves. for (let touch of
     *   touches) { circle(touch.x, touch.y, 40); } }
     *
     *   The parameter, event, is optional. touchMoved()
     *   will be passed a TouchEvent object with properties
     *   that describe the touch event:
     *
     *   function touchMoved(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mouseDragged() will run
     *   when the user’s touch points move if touchMoved()
     *   isn’t declared. If touchMoved() is declared, then
     *   touchMoved() will run when a user’s touch points
     *   move and mouseDragged() won’t.
     *
     *   Note: touchStarted(), touchEnded(), and
     *   touchMoved() are all related. touchStarted() runs
     *   as soon as the user touches a touchscreen device.
     *   touchEnded() runs as soon as the user ends a
     *   touch. touchMoved() runs repeatedly as the user
     *   moves any touch points.
     *   @param [event] optional TouchEvent argument.
     */
    function touchMoved(event?: TouchEvent): void;

    /**
     *   A function that's called once each time a screen
     *   touch ends. Declaring the function touchEnded()
     *   sets a code block to run automatically when the
     *   user stops touching a touchscreen device:
     *
     *   function touchEnded() { // Code to run. }
     *
     *   The touches array will be updated with the most
     *   recent touch points when touchEnded() is called by
     *   p5.js:
     *
     *   function touchEnded() { // Paint over the
     *   background. background(200); // Mark each
     *   remaining touch point when the user stops // a
     *   touch. for (let touch of touches) {
     *   circle(touch.x, touch.y, 40); } }
     *
     *   The parameter, event, is optional. touchEnded()
     *   will be passed a TouchEvent object with properties
     *   that describe the touch event:
     *
     *   function touchEnded(event) { // Code to run that
     *   uses the event. console.log(event); }
     *
     *   On touchscreen devices, mouseReleased() will run
     *   when the user’s touch ends if touchEnded() isn’t
     *   declared. If touchEnded() is declared, then
     *   touchEnded() will run when a user’s touch ends and
     *   mouseReleased() won’t.
     *
     *   Note: touchStarted(), touchEnded(), and
     *   touchMoved() are all related. touchStarted() runs
     *   as soon as the user touches a touchscreen device.
     *   touchEnded() runs as soon as the user ends a
     *   touch. touchMoved() runs repeatedly as the user
     *   moves any touch points.
     *   @param [event] optional TouchEvent argument.
     */
    function touchEnded(event?: TouchEvent): void;

    /**
     *   An Array of all the current touch points on a
     *   touchscreen device. The touches array is empty by
     *   default. When the user touches their screen, a new
     *   touch point is tracked and added to the array.
     *   Touch points are Objects with the following
     *   properties:
     *
     *   // Iterate over the touches array. for (let touch
     *   of touches) { // x-coordinate relative to the
     *   top-left // corner of the canvas.
     *   console.log(touch.x); // y-coordinate relative to
     *   the top-left // corner of the canvas.
     *   console.log(touch.y); // x-coordinate relative to
     *   the top-left // corner of the browser.
     *   console.log(touch.winX); // y-coordinate relative
     *   to the top-left // corner of the browser.
     *   console.log(touch.winY); // ID number
     *   console.log(touch.id); }
     */
    let touches: object[];

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
    function createImage(width: number, height: number): p5.Image;

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
    function saveCanvas(
        selectedCanvas: p5.Framebuffer | p5.Element | HTMLCanvasElement,
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
    function saveCanvas(filename?: string, extension?: string): void;

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
    function saveFrames(
        filename: string,
        extension: string,
        duration: number,
        framerate: number,
        callback?: (p1: any[]) => any
    ): void;

    /**
     *   Loads an image to create a p5.Image object.
     *   loadImage() interprets the first parameter one of
     *   three ways. If the path to an image file is
     *   provided, loadImage() will load it. Paths to local
     *   files should be relative, such as
     *   'assets/thundercat.jpg'. URLs such as
     *   'https://example.com/thundercat.jpg' may be
     *   blocked due to browser security. Raw image data
     *   can also be passed as a base64 encoded image in
     *   the form
     *   'data:image/png;base64,arandomsequenceofcharacters'.
     *
     *   The second parameter is optional. If a function is
     *   passed, it will be called once the image has
     *   loaded. The callback function can optionally use
     *   the new p5.Image object.
     *
     *   The third parameter is also optional. If a
     *   function is passed, it will be called if the image
     *   fails to load. The callback function can
     *   optionally use the event error.
     *
     *   Images can take time to load. Calling loadImage()
     *   in preload() ensures images load before they're
     *   used in setup() or draw().
     *   @param path path of the image to be loaded or
     *   base64 encoded image.
     *   @param [successCallback] function called with
     *   p5.Image once it loads.
     *   @param [failureCallback] function called with
     *   event error if the image fails to load.
     *   @return the p5.Image object.
     */
    function loadImage(
        path: string,
        successCallback?: (p1: p5.Image) => any,
        failureCallback?: (p1: Event) => any
    ): p5.Image;

    /**
     *   Generates a gif from a sketch and saves it to a
     *   file. saveGif() may be called in setup() or at any
     *   point while a sketch is running.
     *
     *   The first parameter, fileName, sets the gif's file
     *   name.
     *
     *   The second parameter, duration, sets the gif's
     *   duration in seconds.
     *
     *   The third parameter, options, is optional. If an
     *   object is passed, saveGif() will use its
     *   properties to customize the gif. saveGif()
     *   recognizes the properties delay, units, silent,
     *   notificationDuration, and notificationID.
     *   @param filename file name of gif.
     *   @param duration duration in seconds to capture
     *   from the sketch.
     *   @param [options] an object that can contain five
     *   more properties: delay, a Number specifying how
     *   much time to wait before recording; units, a
     *   String that can be either 'seconds' or 'frames'.
     *   By default it's 'seconds’; silent, a Boolean that
     *   defines presence of progress notifications. By
     *   default it’s false; notificationDuration, a Number
     *   that defines how long in seconds the final
     *   notification will live. By default it's 0, meaning
     *   the notification will never be removed;
     *   notificationID, a String that specifies the id of
     *   the notification's DOM element. By default it’s
     *   'progressBar’.
     */
    function saveGif(filename: string, duration: number, options?: object): void;

    /**
     *   Draws an image to the canvas. The first parameter,
     *   img, is the source image to be drawn. img can be
     *   any of the following objects:
     *
     *   - p5.Image
     *   - p5.Element
     *   - p5.Texture
     *   - p5.Framebuffer
     *   - p5.FramebufferTexture
     *
     *   The second and third parameters, dx and dy, set
     *   the coordinates of the destination image's top
     *   left corner. See imageMode() for other ways to
     *   position images.
     *
     *   Here's a diagram that explains how optional
     *   parameters work in image():
     *
     *
     *
     *   The fourth and fifth parameters, dw and dh, are
     *   optional. They set the the width and height to
     *   draw the destination image. By default, image()
     *   draws the full source image at its original size.
     *
     *   The sixth and seventh parameters, sx and sy, are
     *   also optional. These coordinates define the top
     *   left corner of a subsection to draw from the
     *   source image.
     *
     *   The eighth and ninth parameters, sw and sh, are
     *   also optional. They define the width and height of
     *   a subsection to draw from the source image. By
     *   default, image() draws the full subsection that
     *   begins at (sx, sy) and extends to the edges of the
     *   source image.
     *
     *   The ninth parameter, fit, is also optional. It
     *   enables a subsection of the source image to be
     *   drawn without affecting its aspect ratio. If
     *   CONTAIN is passed, the full subsection will appear
     *   within the destination rectangle. If COVER is
     *   passed, the subsection will completely cover the
     *   destination rectangle. This may have the effect of
     *   zooming into the subsection.
     *
     *   The tenth and eleventh paremeters, xAlign and
     *   yAlign, are also optional. They determine how to
     *   align the fitted subsection. xAlign can be set to
     *   either LEFT, RIGHT, or CENTER. yAlign can be set
     *   to either TOP, BOTTOM, or CENTER. By default, both
     *   xAlign and yAlign are set to CENTER.
     *   @param img image to display.
     *   @param x x-coordinate of the top-left corner of
     *   the image.
     *   @param y y-coordinate of the top-left corner of
     *   the image.
     *   @param [width] width to draw the image.
     *   @param [height] height to draw the image.
     */
    function image(
        img: p5.Image | p5.Element | p5.Framebuffer,
        x: number,
        y: number,
        width?: number,
        height?: number
    ): void;

    /**
     *   Draws an image to the canvas. The first parameter,
     *   img, is the source image to be drawn. img can be
     *   any of the following objects:
     *
     *   - p5.Image
     *   - p5.Element
     *   - p5.Texture
     *   - p5.Framebuffer
     *   - p5.FramebufferTexture
     *
     *   The second and third parameters, dx and dy, set
     *   the coordinates of the destination image's top
     *   left corner. See imageMode() for other ways to
     *   position images.
     *
     *   Here's a diagram that explains how optional
     *   parameters work in image():
     *
     *
     *
     *   The fourth and fifth parameters, dw and dh, are
     *   optional. They set the the width and height to
     *   draw the destination image. By default, image()
     *   draws the full source image at its original size.
     *
     *   The sixth and seventh parameters, sx and sy, are
     *   also optional. These coordinates define the top
     *   left corner of a subsection to draw from the
     *   source image.
     *
     *   The eighth and ninth parameters, sw and sh, are
     *   also optional. They define the width and height of
     *   a subsection to draw from the source image. By
     *   default, image() draws the full subsection that
     *   begins at (sx, sy) and extends to the edges of the
     *   source image.
     *
     *   The ninth parameter, fit, is also optional. It
     *   enables a subsection of the source image to be
     *   drawn without affecting its aspect ratio. If
     *   CONTAIN is passed, the full subsection will appear
     *   within the destination rectangle. If COVER is
     *   passed, the subsection will completely cover the
     *   destination rectangle. This may have the effect of
     *   zooming into the subsection.
     *
     *   The tenth and eleventh paremeters, xAlign and
     *   yAlign, are also optional. They determine how to
     *   align the fitted subsection. xAlign can be set to
     *   either LEFT, RIGHT, or CENTER. yAlign can be set
     *   to either TOP, BOTTOM, or CENTER. By default, both
     *   xAlign and yAlign are set to CENTER.
     *   @param img image to display.
     *   @param dx the x-coordinate of the destination
     *   rectangle in which to draw the source image
     *   @param dy the y-coordinate of the destination
     *   rectangle in which to draw the source image
     *   @param dWidth the width of the destination
     *   rectangle
     *   @param dHeight the height of the destination
     *   rectangle
     *   @param sx the x-coordinate of the subsection of
     *   the source image to draw into the destination
     *   rectangle
     *   @param sy the y-coordinate of the subsection of
     *   the source image to draw into the destination
     *   rectangle
     *   @param [sWidth] the width of the subsection of the
     *   source image to draw into the destination
     *   rectangle
     *   @param [sHeight] the height of the subsection of
     *   the source image to draw into the destination
     *   rectangle
     *   @param [fit] either CONTAIN or COVER
     *   @param [xAlign] either LEFT, RIGHT or CENTER
     *   default is CENTER
     *   @param [yAlign] either TOP, BOTTOM or CENTER
     *   default is CENTER
     */
    function image(
        img: p5.Image | p5.Element | p5.Framebuffer,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
        sx: number,
        sy: number,
        sWidth?: number,
        sHeight?: number,
        fit?: p5.IMAGE_FIT,
        xAlign?: p5.X_ALIGN,
        yAlign?: p5.Y_ALIGN
    ): void;

    /**
     *   Tints images using a color. The version of tint()
     *   with one parameter interprets it one of four ways.
     *   If the parameter is a number, it's interpreted as
     *   a grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. An array
     *   of [R, G, B, A] values or a p5.Color object can
     *   also be used to set the tint color.
     *
     *   The version of tint() with two parameters uses the
     *   first one as a grayscale value and the second as
     *   an alpha value. For example, calling tint(255,
     *   128) will make an image 50% transparent.
     *
     *   The version of tint() with three parameters
     *   interprets them as RGB or HSB values, depending on
     *   the current colorMode(). The optional fourth
     *   parameter sets the alpha value. For example,
     *   tint(255, 0, 0, 100) will give images a red tint
     *   and make them transparent.
     *   @param v1 red or hue value.
     *   @param v2 green or saturation value.
     *   @param v3 blue or brightness.
     */
    function tint(v1: number, v2: number, v3: number, alpha?: number): void;

    /**
     *   Tints images using a color. The version of tint()
     *   with one parameter interprets it one of four ways.
     *   If the parameter is a number, it's interpreted as
     *   a grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. An array
     *   of [R, G, B, A] values or a p5.Color object can
     *   also be used to set the tint color.
     *
     *   The version of tint() with two parameters uses the
     *   first one as a grayscale value and the second as
     *   an alpha value. For example, calling tint(255,
     *   128) will make an image 50% transparent.
     *
     *   The version of tint() with three parameters
     *   interprets them as RGB or HSB values, depending on
     *   the current colorMode(). The optional fourth
     *   parameter sets the alpha value. For example,
     *   tint(255, 0, 0, 100) will give images a red tint
     *   and make them transparent.
     *   @param value CSS color string.
     */
    function tint(value: string): void;

    /**
     *   Tints images using a color. The version of tint()
     *   with one parameter interprets it one of four ways.
     *   If the parameter is a number, it's interpreted as
     *   a grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. An array
     *   of [R, G, B, A] values or a p5.Color object can
     *   also be used to set the tint color.
     *
     *   The version of tint() with two parameters uses the
     *   first one as a grayscale value and the second as
     *   an alpha value. For example, calling tint(255,
     *   128) will make an image 50% transparent.
     *
     *   The version of tint() with three parameters
     *   interprets them as RGB or HSB values, depending on
     *   the current colorMode(). The optional fourth
     *   parameter sets the alpha value. For example,
     *   tint(255, 0, 0, 100) will give images a red tint
     *   and make them transparent.
     *   @param gray grayscale value.
     */
    function tint(gray: number, alpha?: number): void;

    /**
     *   Tints images using a color. The version of tint()
     *   with one parameter interprets it one of four ways.
     *   If the parameter is a number, it's interpreted as
     *   a grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. An array
     *   of [R, G, B, A] values or a p5.Color object can
     *   also be used to set the tint color.
     *
     *   The version of tint() with two parameters uses the
     *   first one as a grayscale value and the second as
     *   an alpha value. For example, calling tint(255,
     *   128) will make an image 50% transparent.
     *
     *   The version of tint() with three parameters
     *   interprets them as RGB or HSB values, depending on
     *   the current colorMode(). The optional fourth
     *   parameter sets the alpha value. For example,
     *   tint(255, 0, 0, 100) will give images a red tint
     *   and make them transparent.
     *   @param values array containing the red, green,
     *   blue & alpha components of the color.
     */
    function tint(values: number[]): void;

    /**
     *   Tints images using a color. The version of tint()
     *   with one parameter interprets it one of four ways.
     *   If the parameter is a number, it's interpreted as
     *   a grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. An array
     *   of [R, G, B, A] values or a p5.Color object can
     *   also be used to set the tint color.
     *
     *   The version of tint() with two parameters uses the
     *   first one as a grayscale value and the second as
     *   an alpha value. For example, calling tint(255,
     *   128) will make an image 50% transparent.
     *
     *   The version of tint() with three parameters
     *   interprets them as RGB or HSB values, depending on
     *   the current colorMode(). The optional fourth
     *   parameter sets the alpha value. For example,
     *   tint(255, 0, 0, 100) will give images a red tint
     *   and make them transparent.
     *   @param color the tint color
     */
    function tint(color: p5.Color): void;

    /**
     *   Removes the current tint set by tint(). noTint()
     *   restores images to their original colors.
     */
    function noTint(): void;

    /**
     *   Changes the location from which images are drawn
     *   when image() is called. By default, the first two
     *   parameters of image() are the x- and y-coordinates
     *   of the image's upper-left corner. The next
     *   parameters are its width and height. This is the
     *   same as calling imageMode(CORNER).
     *
     *   imageMode(CORNERS) also uses the first two
     *   parameters of image() as the x- and y-coordinates
     *   of the image's top-left corner. The third and
     *   fourth parameters are the coordinates of its
     *   bottom-right corner.
     *
     *   imageMode(CENTER) uses the first two parameters of
     *   image() as the x- and y-coordinates of the image's
     *   center. The next parameters are its width and
     *   height.
     *   @param mode either CORNER, CORNERS, or CENTER.
     */
    function imageMode(mode: p5.IMAGE_MODE): void;

    /**
     *   Copies a region of pixels from one image to
     *   another. The first parameter, srcImage, is the
     *   p5.Image object to blend.
     *
     *   The next four parameters, sx, sy, sw, and sh
     *   determine the region to blend from the source
     *   image. (sx, sy) is the top-left corner of the
     *   region. sw and sh are the regions width and
     *   height.
     *
     *   The next four parameters, dx, dy, dw, and dh
     *   determine the region of the canvas to blend into.
     *   (dx, dy) is the top-left corner of the region. dw
     *   and dh are the regions width and height.
     *
     *   The tenth parameter, blendMode, sets the effect
     *   used to blend the images' colors. The options are
     *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD, or NORMAL
     *   @param srcImage source image.
     *   @param sx x-coordinate of the source's upper-left
     *   corner.
     *   @param sy y-coordinate of the source's upper-left
     *   corner.
     *   @param sw source image width.
     *   @param sh source image height.
     *   @param dx x-coordinate of the destination's
     *   upper-left corner.
     *   @param dy y-coordinate of the destination's
     *   upper-left corner.
     *   @param dw destination image width.
     *   @param dh destination image height.
     *   @param blendMode the blend mode. either BLEND,
     *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.
     */
    function blend(
        srcImage: p5.Image,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
        blendMode: p5.BLEND_MODE
    ): void;

    /**
     *   Copies a region of pixels from one image to
     *   another. The first parameter, srcImage, is the
     *   p5.Image object to blend.
     *
     *   The next four parameters, sx, sy, sw, and sh
     *   determine the region to blend from the source
     *   image. (sx, sy) is the top-left corner of the
     *   region. sw and sh are the regions width and
     *   height.
     *
     *   The next four parameters, dx, dy, dw, and dh
     *   determine the region of the canvas to blend into.
     *   (dx, dy) is the top-left corner of the region. dw
     *   and dh are the regions width and height.
     *
     *   The tenth parameter, blendMode, sets the effect
     *   used to blend the images' colors. The options are
     *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD, or NORMAL
     *   @param sx x-coordinate of the source's upper-left
     *   corner.
     *   @param sy y-coordinate of the source's upper-left
     *   corner.
     *   @param sw source image width.
     *   @param sh source image height.
     *   @param dx x-coordinate of the destination's
     *   upper-left corner.
     *   @param dy y-coordinate of the destination's
     *   upper-left corner.
     *   @param dw destination image width.
     *   @param dh destination image height.
     *   @param blendMode the blend mode. either BLEND,
     *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.
     */
    function blend(
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
        blendMode: p5.UNKNOWN_P5_CONSTANT
    ): void;

    /**
     *   Copies pixels from a source image to a region of
     *   the canvas. The first parameter, srcImage, is the
     *   p5.Image object to blend. The source image can be
     *   the canvas itself or a p5.Image object. copy()
     *   will scale pixels from the source region if it
     *   isn't the same size as the destination region.
     *
     *   The next four parameters, sx, sy, sw, and sh
     *   determine the region to copy from the source
     *   image. (sx, sy) is the top-left corner of the
     *   region. sw and sh are the region's width and
     *   height.
     *
     *   The next four parameters, dx, dy, dw, and dh
     *   determine the region of the canvas to copy into.
     *   (dx, dy) is the top-left corner of the region. dw
     *   and dh are the region's width and height.
     *   @param srcImage source image.
     *   @param sx x-coordinate of the source's upper-left
     *   corner.
     *   @param sy y-coordinate of the source's upper-left
     *   corner.
     *   @param sw source image width.
     *   @param sh source image height.
     *   @param dx x-coordinate of the destination's
     *   upper-left corner.
     *   @param dy y-coordinate of the destination's
     *   upper-left corner.
     *   @param dw destination image width.
     *   @param dh destination image height.
     */
    function copy(
        srcImage: p5.Image | p5.Element,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number
    ): void;

    /**
     *   Copies pixels from a source image to a region of
     *   the canvas. The first parameter, srcImage, is the
     *   p5.Image object to blend. The source image can be
     *   the canvas itself or a p5.Image object. copy()
     *   will scale pixels from the source region if it
     *   isn't the same size as the destination region.
     *
     *   The next four parameters, sx, sy, sw, and sh
     *   determine the region to copy from the source
     *   image. (sx, sy) is the top-left corner of the
     *   region. sw and sh are the region's width and
     *   height.
     *
     *   The next four parameters, dx, dy, dw, and dh
     *   determine the region of the canvas to copy into.
     *   (dx, dy) is the top-left corner of the region. dw
     *   and dh are the region's width and height.
     *   @param sx x-coordinate of the source's upper-left
     *   corner.
     *   @param sy y-coordinate of the source's upper-left
     *   corner.
     *   @param sw source image width.
     *   @param sh source image height.
     *   @param dx x-coordinate of the destination's
     *   upper-left corner.
     *   @param dy y-coordinate of the destination's
     *   upper-left corner.
     *   @param dw destination image width.
     *   @param dh destination image height.
     */
    function copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are:
     *
     *   INVERT Inverts the colors in the image. No
     *   parameter is used.
     *
     *   GRAY Converts the image to grayscale. No parameter
     *   is used.
     *
     *   THRESHOLD Converts the image to black and white.
     *   Pixels with a grayscale value above a given
     *   threshold are converted to white. The rest are
     *   converted to black. The threshold must be between
     *   0.0 (black) and 1.0 (white). If no value is
     *   specified, 0.5 is used.
     *
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
     *
     *   POSTERIZE Limits the number of colors in the
     *   image. Each color channel is limited to the number
     *   of colors specified. Values between 2 and 255 are
     *   valid, but results are most noticeable with lower
     *   values. The default value is 4.
     *
     *   BLUR Blurs the image. The level of blurring is
     *   specified by a blur radius. Larger values increase
     *   the blur. The default value is 4. A gaussian blur
     *   is used in P2D mode. A box blur is used in WEBGL
     *   mode.
     *
     *   ERODE Reduces the light areas. No parameter is
     *   used.
     *
     *   DILATE Increases the light areas. No parameter is
     *   used.
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WebgL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param filterType either THRESHOLD, GRAY, OPAQUE,
     *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
     *   @param [filterParam] parameter unique to each
     *   filter.
     *   @param [useWebGL] flag to control whether to use
     *   fast WebGL filters (GPU) or original image filters
     *   (CPU); defaults to true.
     */
    function filter(filterType: p5.FILTER_TYPE, filterParam?: number, useWebGL?: boolean): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are:
     *
     *   INVERT Inverts the colors in the image. No
     *   parameter is used.
     *
     *   GRAY Converts the image to grayscale. No parameter
     *   is used.
     *
     *   THRESHOLD Converts the image to black and white.
     *   Pixels with a grayscale value above a given
     *   threshold are converted to white. The rest are
     *   converted to black. The threshold must be between
     *   0.0 (black) and 1.0 (white). If no value is
     *   specified, 0.5 is used.
     *
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
     *
     *   POSTERIZE Limits the number of colors in the
     *   image. Each color channel is limited to the number
     *   of colors specified. Values between 2 and 255 are
     *   valid, but results are most noticeable with lower
     *   values. The default value is 4.
     *
     *   BLUR Blurs the image. The level of blurring is
     *   specified by a blur radius. Larger values increase
     *   the blur. The default value is 4. A gaussian blur
     *   is used in P2D mode. A box blur is used in WEBGL
     *   mode.
     *
     *   ERODE Reduces the light areas. No parameter is
     *   used.
     *
     *   DILATE Increases the light areas. No parameter is
     *   used.
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WebgL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param filterType either THRESHOLD, GRAY, OPAQUE,
     *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
     *   @param [useWebGL] flag to control whether to use
     *   fast WebGL filters (GPU) or original image filters
     *   (CPU); defaults to true.
     */
    function filter(filterType: p5.UNKNOWN_P5_CONSTANT, useWebGL?: boolean): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are:
     *
     *   INVERT Inverts the colors in the image. No
     *   parameter is used.
     *
     *   GRAY Converts the image to grayscale. No parameter
     *   is used.
     *
     *   THRESHOLD Converts the image to black and white.
     *   Pixels with a grayscale value above a given
     *   threshold are converted to white. The rest are
     *   converted to black. The threshold must be between
     *   0.0 (black) and 1.0 (white). If no value is
     *   specified, 0.5 is used.
     *
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
     *
     *   POSTERIZE Limits the number of colors in the
     *   image. Each color channel is limited to the number
     *   of colors specified. Values between 2 and 255 are
     *   valid, but results are most noticeable with lower
     *   values. The default value is 4.
     *
     *   BLUR Blurs the image. The level of blurring is
     *   specified by a blur radius. Larger values increase
     *   the blur. The default value is 4. A gaussian blur
     *   is used in P2D mode. A box blur is used in WEBGL
     *   mode.
     *
     *   ERODE Reduces the light areas. No parameter is
     *   used.
     *
     *   DILATE Increases the light areas. No parameter is
     *   used.
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WebgL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param shaderFilter shader that's been loaded,
     *   with the frag shader using a tex0 uniform.
     */
    function filter(shaderFilter: p5.Shader): void;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @param w width of the subsection to be returned.
     *   @param h height of the subsection to be returned.
     *   @return subsection as a p5.Image object.
     */
    function get(x: number, y: number, w: number, h: number): p5.Image;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @return whole canvas as a p5.Image.
     */
    function get(): p5.Image;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @return color of the pixel at (x, y) in array
     *   format `[R, G, B, A]`.
     */
    function get(x: number, y: number): number[];

    /**
     *   Loads the current value of each pixel on the
     *   canvas into the pixels array. loadPixels() must be
     *   called before reading from or writing to pixels.
     */
    function loadPixels(): void;

    /**
     *   Sets the color of a pixel or draws an image to the
     *   canvas. set() is easy to use but it's not as fast
     *   as pixels. Use pixels to set many pixel values.
     *
     *   set() interprets the first two parameters as x-
     *   and y-coordinates. It interprets the last
     *   parameter as a grayscale value, a [R, G, B, A]
     *   pixel array, a p5.Color object, or a p5.Image
     *   object. If an image is passed, the first two
     *   parameters set the coordinates for the image's
     *   upper-left corner, regardless of the current
     *   imageMode().
     *
     *   updatePixels() must be called after using set()
     *   for changes to appear.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @param c grayscale value | pixel array | p5.Color
     *   object | p5.Image to copy.
     */
    function set(x: number, y: number, c: number | number[] | object): void;

    /**
     *   Updates the canvas with the RGBA values in the
     *   pixels array. updatePixels() only needs to be
     *   called after changing values in the pixels array.
     *   Such changes can be made directly after calling
     *   loadPixels() or by calling set().
     *   @param [x] x-coordinate of the upper-left corner
     *   of region to update.
     *   @param [y] y-coordinate of the upper-left corner
     *   of region to update.
     *   @param [w] width of region to update.
     *   @param [h] height of region to update.
     */
    function updatePixels(x?: number, y?: number, w?: number, h?: number): void;

    /**
     *   An array containing the color of each pixel on the
     *   canvas. Colors are stored as numbers representing
     *   red, green, blue, and alpha (RGBA) values. pixels
     *   is a one-dimensional array for performance
     *   reasons.
     *
     *   Each pixel occupies four elements in the pixels
     *   array, one for each RGBA value. For example, the
     *   pixel at coordinates (0, 0) stores its RGBA values
     *   at pixels[0], pixels[1], pixels[2], and pixels[3],
     *   respectively. The next pixel at coordinates (1, 0)
     *   stores its RGBA values at pixels[4], pixels[5],
     *   pixels[6], and pixels[7]. And so on. The pixels
     *   array for a 100×100 canvas has 100 × 100 × 4 =
     *   40,000 elements.
     *
     *   Some displays use several smaller pixels to set
     *   the color at a single point. The pixelDensity()
     *   function returns the pixel density of the canvas.
     *   High density displays often have a pixelDensity()
     *   of 2. On such a display, the pixels array for a
     *   100×100 canvas has 200 × 200 × 4 = 160,000
     *   elements.
     *
     *   Accessing the RGBA values for a point on the
     *   canvas requires a little math as shown below. The
     *   loadPixels() function must be called before
     *   accessing the pixels array. The updatePixels()
     *   function must be called after any changes are
     *   made.
     */
    let pixels: number[];

    /**
     *   Loads a JSON file to create an Object. JavaScript
     *   Object Notation (JSON) is a standard format for
     *   sending data between applications. The format is
     *   based on JavaScript objects which have keys and
     *   values. JSON files store data in an object with
     *   strings as keys. Values can be strings, numbers,
     *   Booleans, arrays, null, or other objects.
     *
     *   The first parameter, path, is always a string with
     *   the path to the file. Paths to local files should
     *   be relative, as in loadJSON('assets/data.json').
     *   URLs such as 'https://example.com/data.json' may
     *   be blocked due to browser security.
     *
     *   The second parameter, successCallback, is
     *   optional. If a function is passed, as in
     *   loadJSON('assets/data.json', handleData), then the
     *   handleData() function will be called once the data
     *   loads. The object created from the JSON data will
     *   be passed to handleData() as its only argument.
     *
     *   The third parameter, failureCallback, is also
     *   optional. If a function is passed, as in
     *   loadJSON('assets/data.json', handleData,
     *   handleFailure), then the handleFailure() function
     *   will be called if an error occurs while loading.
     *   The Error object will be passed to handleFailure()
     *   as its only argument.
     *
     *   Note: Data can take time to load. Calling
     *   loadJSON() within preload() ensures data loads
     *   before it's used in setup() or draw().
     *   @param path path of the JSON file to be loaded.
     *   @param [successCallback] function to call once the
     *   data is loaded. Will be passed the object.
     *   @param [errorCallback] function to call if the
     *   data fails to load. Will be passed an Error event
     *   object.
     *   @return object containing the loaded data.
     */
    function loadJSON(
        path: string,
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   Loads a text file to create an Array. The first
     *   parameter, path, is always a string with the path
     *   to the file. Paths to local files should be
     *   relative, as in loadStrings('assets/data.txt').
     *   URLs such as 'https://example.com/data.txt' may be
     *   blocked due to browser security.
     *
     *   The second parameter, successCallback, is
     *   optional. If a function is passed, as in
     *   loadStrings('assets/data.txt', handleData), then
     *   the handleData() function will be called once the
     *   data loads. The array created from the text data
     *   will be passed to handleData() as its only
     *   argument.
     *
     *   The third parameter, failureCallback, is also
     *   optional. If a function is passed, as in
     *   loadStrings('assets/data.txt', handleData,
     *   handleFailure), then the handleFailure() function
     *   will be called if an error occurs while loading.
     *   The Error object will be passed to handleFailure()
     *   as its only argument.
     *
     *   Note: Data can take time to load. Calling
     *   loadStrings() within preload() ensures data loads
     *   before it's used in setup() or draw().
     *   @param path path of the text file to be loaded.
     *   @param [successCallback] function to call once the
     *   data is loaded. Will be passed the array.
     *   @param [errorCallback] function to call if the
     *   data fails to load. Will be passed an Error event
     *   object.
     *   @return new array containing the loaded text.
     */
    function loadStrings(
        path: string,
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): string[];

    /**
     *   Reads the contents of a file or URL and creates a
     *   p5.Table object with its values. If a file is
     *   specified, it must be located in the sketch's
     *   "data" folder. The filename parameter can also be
     *   a URL to a file found online. By default, the file
     *   is assumed to be comma-separated (in CSV format).
     *   Table only looks for a header row if the 'header'
     *   option is included. This method is asynchronous,
     *   meaning it may not finish before the next line in
     *   your sketch is executed. Calling loadTable()
     *   inside preload() guarantees to complete the
     *   operation before setup() and draw() are called.
     *   Outside of preload(), you may supply a callback
     *   function to handle the object:
     *
     *   All files loaded and saved use UTF-8 encoding.
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param filename name of the file or URL to load
     *   @param [extension] parse the table by
     *   comma-separated values "csv", semicolon-separated
     *   values "ssv", or tab-separated values "tsv"
     *   @param [header] "header" to indicate table has
     *   header row
     *   @param [callback] function to be executed after
     *   loadTable() completes. On success, the Table
     *   object is passed in as the first argument.
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return Table object containing data
     */
    function loadTable(
        filename: string,
        extension?: string,
        header?: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   Loads an XML file to create a p5.XML object.
     *   Extensible Markup Language (XML) is a standard
     *   format for sending data between applications. Like
     *   HTML, the XML format is based on tags and
     *   attributes, as in <time units="s">1234</time>.
     *
     *   The first parameter, path, is always a string with
     *   the path to the file. Paths to local files should
     *   be relative, as in loadXML('assets/data.xml').
     *   URLs such as 'https://example.com/data.xml' may be
     *   blocked due to browser security.
     *
     *   The second parameter, successCallback, is
     *   optional. If a function is passed, as in
     *   loadXML('assets/data.xml', handleData), then the
     *   handleData() function will be called once the data
     *   loads. The p5.XML object created from the data
     *   will be passed to handleData() as its only
     *   argument.
     *
     *   The third parameter, failureCallback, is also
     *   optional. If a function is passed, as in
     *   loadXML('assets/data.xml', handleData,
     *   handleFailure), then the handleFailure() function
     *   will be called if an error occurs while loading.
     *   The Error object will be passed to handleFailure()
     *   as its only argument.
     *
     *   Note: Data can take time to load. Calling
     *   loadXML() within preload() ensures data loads
     *   before it's used in setup() or draw().
     *   @param path path of the XML file to be loaded.
     *   @param [successCallback] function to call once the
     *   data is loaded. Will be passed the p5.XML object.
     *   @param [errorCallback] function to call if the
     *   data fails to load. Will be passed an Error event
     *   object.
     *   @return XML data loaded into a p5.XML object.
     */
    function loadXML(
        path: string,
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): p5.XML;

    /**
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param file name of the file or URL to load
     *   @param [callback] function to be executed after
     *   loadBytes() completes
     *   @param [errorCallback] function to be executed if
     *   there is an error
     *   @return an object whose 'bytes' property will be
     *   the loaded buffer
     */
    function loadBytes(
        file: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param [datatype] "json", "jsonp", "binary",
     *   "arrayBuffer", "xml", or "text"
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpGet(
        path: string,
        datatype?: string,
        data?: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param data param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpGet(
        path: string,
        data: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param callback function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpGet(
        path: string,
        callback: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param [datatype] "json", "jsonp", "xml", or
     *   "text". If omitted, httpPost() will guess.
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpPost(
        path: string,
        datatype?: string,
        data?: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param data param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpPost(
        path: string,
        data: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param callback function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpPost(
        path: string,
        callback: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP request. If data type
     *   is not specified, p5 will try to guess based on
     *   the URL, defaulting to text. For more advanced
     *   use, you may also pass in the path as the first
     *   argument and a object as the second argument, the
     *   signature follows the one specified in the Fetch
     *   API specification. This method is suitable for
     *   fetching files up to size of 64MB when "GET" is
     *   used.
     *   @param path name of the file or url to load
     *   @param [method] either "GET", "POST", or "PUT",
     *   defaults to "GET"
     *   @param [datatype] "json", "jsonp", "xml", or
     *   "text"
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpDo(
        path: string,
        method?: string,
        datatype?: string,
        data?: object,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP request. If data type
     *   is not specified, p5 will try to guess based on
     *   the URL, defaulting to text. For more advanced
     *   use, you may also pass in the path as the first
     *   argument and a object as the second argument, the
     *   signature follows the one specified in the Fetch
     *   API specification. This method is suitable for
     *   fetching files up to size of 64MB when "GET" is
     *   used.
     *   @param path name of the file or url to load
     *   @param options Request object options as
     *   documented in the "fetch" API reference
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpDo(
        path: string,
        options: object,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Creates a new p5.PrintWriter object.
     *   p5.PrintWriter objects provide a way to save a
     *   sequence of text data, called the print stream, to
     *   the user's computer. They're low-level objects
     *   that enable precise control of text output.
     *   Functions such as saveStrings() and saveJSON() are
     *   easier to use for simple file saving.
     *
     *   The first parameter, filename, is the name of the
     *   file to be written. If a string is passed, as in
     *   createWriter('words.txt'), a new p5.PrintWriter
     *   object will be created that writes to a file named
     *   words.txt.
     *
     *   The second parameter, extension, is optional. If a
     *   string is passed, as in createWriter('words',
     *   'csv'), the first parameter will be interpreted as
     *   the file name and the second parameter as the
     *   extension.
     *   @param name name of the file to create.
     *   @param [extension] format to use for the file.
     *   @return stream for writing data.
     */
    function createWriter(name: string, extension?: string): p5.PrintWriter;

    /**
     *   Saves a given element(image, text, json, csv, wav,
     *   or html) to the client's computer. The first
     *   parameter can be a pointer to element we want to
     *   save. The element can be one of p5.Element,an
     *   Array of Strings, an Array of JSON, a JSON object,
     *   a p5.Table , a p5.Image, or a p5.SoundFile
     *   (requires p5.sound). The second parameter is a
     *   filename (including extension).The third parameter
     *   is for options specific to this type of object.
     *   This method will save a file that fits the given
     *   parameters. If it is called without specifying an
     *   element, by default it will save the whole canvas
     *   as an image file. You can optionally specify a
     *   filename as the first parameter in such a case.
     *   Note that it is not recommended to call this
     *   method within draw, as it will open a new save
     *   dialog on every render.
     *   @param [objectOrFilename] If filename is provided,
     *   will save canvas as an image with either png or
     *   jpg extension depending on the filename. If object
     *   is provided, will save depending on the object and
     *   filename (see examples above).
     *   @param [filename] If an object is provided as the
     *   first parameter, then the second parameter
     *   indicates the filename, and should include an
     *   appropriate file extension (see examples above).
     *   @param [options] Additional options depend on
     *   filetype. For example, when saving JSON, true
     *   indicates that the output will be optimized for
     *   filesize, rather than readability.
     */
    function save(objectOrFilename?: object | string, filename?: string, options?: boolean | string): void;

    /**
     *   Saves an Object or Array to a JSON file.
     *   JavaScript Object Notation (JSON) is a standard
     *   format for sending data between applications. The
     *   format is based on JavaScript objects which have
     *   keys and values. JSON files store data in an
     *   object with strings as keys. Values can be
     *   strings, numbers, Booleans, arrays, null, or other
     *   objects.
     *
     *   The first parameter, json, is the data to save.
     *   The data can be an array, as in [1, 2, 3], or an
     *   object, as in { x: 50, y: 50, color: 'deeppink' }.
     *
     *   The second parameter, filename, is a string that
     *   sets the file's name. For example, calling
     *   saveJSON([1, 2, 3], 'data.json') saves the array
     *   [1, 2, 3] to a file called data.json on the user's
     *   computer.
     *
     *   The third parameter, optimize, is optional. If
     *   true is passed, as in saveJSON([1, 2, 3],
     *   'data.json', true), then all unneeded whitespace
     *   will be removed to reduce the file size.
     *
     *   Note: The browser will either save the file
     *   immediately or prompt the user with a dialogue
     *   window.
     *   @param json data to save.
     *   @param filename name of the file to be saved.
     *   @param [optimize] whether to trim unneeded
     *   whitespace. Defaults to true.
     */
    function saveJSON(json: any[] | object, filename: string, optimize?: boolean): void;

    /**
     *   Saves an Array of Strings to a file, one per line.
     *   The first parameter, list, is an array with the
     *   strings to save.
     *
     *   The second parameter, filename, is a string that
     *   sets the file's name. For example, calling
     *   saveStrings(['0', '01', '011'], 'data.txt') saves
     *   the array ['0', '01', '011'] to a file called
     *   data.txt on the user's computer.
     *
     *   The third parameter, extension, is optional. If a
     *   string is passed, as in saveStrings(['0', '01',
     *   '01'], 'data', 'txt')`, the second parameter will
     *   be interpreted as the file name and the third
     *   parameter as the extension.
     *
     *   The fourth parameter, isCRLF, is also optional, If
     *   true is passed, as in saveStrings(['0', '01',
     *   '011'], 'data', 'txt', true), then two characters,
     *   \r\n , will be added to the end of each string to
     *   create new lines in the saved file. \r is a
     *   carriage return (CR) and \n is a line feed (LF).
     *   By default, only \n (line feed) is added to each
     *   string in order to create new lines.
     *
     *   Note: The browser will either save the file
     *   immediately or prompt the user with a dialogue
     *   window.
     *   @param list data to save.
     *   @param filename name of file to be saved.
     *   @param [extension] format to use for the file.
     *   @param [isCRLF] whether to add \r\n to the end of
     *   each string. Defaults to false.
     */
    function saveStrings(list: string[], filename: string, extension?: string, isCRLF?: boolean): void;

    /**
     *   Writes the contents of a Table object to a file.
     *   Defaults to a text file with
     *   comma-separated-values ('csv') but can also use
     *   tab separation ('tsv'), or generate an HTML table
     *   ('html'). The file saving process and location of
     *   the saved file will vary between web browsers.
     *   @param Table the Table object to save to a file
     *   @param filename the filename to which the Table
     *   should be saved
     *   @param [options] can be one of "tsv", "csv", or
     *   "html"
     */
    function saveTable(Table: p5.Table, filename: string, options?: string): void;

    /**
     *   Calculates the absolute value of a number. A
     *   number's absolute value is its distance from zero
     *   on the number line. -5 and 5 are both five units
     *   away from zero, so calling abs(-5) and abs(5) both
     *   return 5. The absolute value of a number is always
     *   positive.
     *   @param n number to compute.
     *   @return absolute value of given number.
     */
    function abs(n: number): number;

    /**
     *   Calculates the closest integer value that is
     *   greater than or equal to a number. For example,
     *   calling ceil(9.03) and ceil(9.97) both return the
     *   value 10.
     *   @param n number to round up.
     *   @return rounded up number.
     */
    function ceil(n: number): number;

    /**
     *   Constrains a number between a minimum and maximum
     *   value.
     *   @param n number to constrain.
     *   @param low minimum limit.
     *   @param high maximum limit.
     *   @return constrained number.
     */
    function constrain(n: number, low: number, high: number): number;

    /**
     *   Calculates the distance between two points. The
     *   version of dist() with four parameters calculates
     *   distance in two dimensions.
     *
     *   The version of dist() with six parameters
     *   calculates distance in three dimensions.
     *
     *   Use p5.Vector.dist() to calculate the distance
     *   between two p5.Vector objects.
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @return distance between the two points.
     */
    function dist(x1: number, y1: number, x2: number, y2: number): number;

    /**
     *   Calculates the distance between two points. The
     *   version of dist() with four parameters calculates
     *   distance in two dimensions.
     *
     *   The version of dist() with six parameters
     *   calculates distance in three dimensions.
     *
     *   Use p5.Vector.dist() to calculate the distance
     *   between two p5.Vector objects.
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param z1 z-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @param z2 z-coordinate of the second point.
     *   @return distance between the two points.
     */
    function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

    /**
     *   Calculates the value of Euler's number e
     *   (2.71828...) raised to the power of a number.
     *   @param n exponent to raise.
     *   @return e^n
     */
    function exp(n: number): number;

    /**
     *   Calculates the closest integer value that is less
     *   than or equal to the value of a number.
     *   @param n number to round down.
     *   @return rounded down number.
     */
    function floor(n: number): number;

    /**
     *   Calculates a number between two numbers at a
     *   specific increment. The amt parameter is the
     *   amount to interpolate between the two numbers. 0.0
     *   is equal to the first number, 0.1 is very near the
     *   first number, 0.5 is half-way in between, and 1.0
     *   is equal to the second number. The lerp() function
     *   is convenient for creating motion along a straight
     *   path and for drawing dotted lines.
     *
     *   If the value of amt is less than 0 or more than 1,
     *   lerp() will return a number outside of the
     *   original interval. For example, calling lerp(0,
     *   10, 1.5) will return 15.
     *   @param start first value.
     *   @param stop second value.
     *   @param amt number.
     *   @return lerped value.
     */
    function lerp(start: number, stop: number, amt: number): number;

    /**
     *   Calculates the natural logarithm (the base-e
     *   logarithm) of a number. log() expects the n
     *   parameter to be a value greater than 0 because the
     *   natural logarithm is defined that way.
     *   @param n number greater than 0.
     *   @return natural logarithm of n.
     */
    function log(n: number): number;

    /**
     *   Calculates the magnitude, or length, of a vector.
     *   A vector can be thought of in different ways. In
     *   one view, a vector is a point in space. The
     *   vector's components, x and y, are the point's
     *   coordinates (x, y). A vector's magnitude is the
     *   distance from the origin (0, 0) to (x, y). mag(x,
     *   y) is a shortcut for calling dist(0, 0, x, y).
     *
     *   A vector can also be thought of as an arrow
     *   pointing in space. This view is helpful for
     *   programming motion. See p5.Vector for more
     *   details.
     *
     *   Use p5.Vector.mag() to calculate the magnitude of
     *   a p5.Vector object.
     *   @param x first component.
     *   @param y second component.
     *   @return magnitude of vector.
     */
    function mag(x: number, y: number): number;

    /**
     *   Re-maps a number from one range to another. For
     *   example, calling map(2, 0, 10, 0, 100) returns 20.
     *   The first three arguments set the original value
     *   to 2 and the original range from 0 to 10. The last
     *   two arguments set the target range from 0 to 100.
     *   20's position in the target range [0, 100] is
     *   proportional to 2's position in the original range
     *   [0, 10].
     *
     *   The sixth parameter, withinBounds, is optional. By
     *   default, map() can return values outside of the
     *   target range. For example, map(11, 0, 10, 0, 100)
     *   returns 110. Passing true as the sixth parameter
     *   constrains the remapped value to the target range.
     *   For example, map(11, 0, 10, 0, 100, true) returns
     *   100.
     *   @param value the value to be remapped.
     *   @param start1 lower bound of the value's current
     *   range.
     *   @param stop1 upper bound of the value's current
     *   range.
     *   @param start2 lower bound of the value's target
     *   range.
     *   @param stop2 upper bound of the value's target
     *   range.
     *   @param [withinBounds] constrain the value to the
     *   newly mapped range.
     *   @return remapped number.
     */
    function map(
        value: number,
        start1: number,
        stop1: number,
        start2: number,
        stop2: number,
        withinBounds?: boolean
    ): number;

    /**
     *   Returns the largest value in a sequence of
     *   numbers. The version of max() with one parameter
     *   interprets it as an array of numbers and returns
     *   the largest number.
     *
     *   The version of max() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the largest number.
     *   @param n0 first number to compare.
     *   @param n1 second number to compare.
     *   @return maximum number.
     */
    function max(n0: number, n1: number): number;

    /**
     *   Returns the largest value in a sequence of
     *   numbers. The version of max() with one parameter
     *   interprets it as an array of numbers and returns
     *   the largest number.
     *
     *   The version of max() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the largest number.
     *   @param nums numbers to compare.
     */
    function max(nums: number[]): number;

    /**
     *   Returns the smallest value in a sequence of
     *   numbers. The version of min() with one parameter
     *   interprets it as an array of numbers and returns
     *   the smallest number.
     *
     *   The version of min() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the smallest number.
     *   @param n0 first number to compare.
     *   @param n1 second number to compare.
     *   @return minimum number.
     */
    function min(n0: number, n1: number): number;

    /**
     *   Returns the smallest value in a sequence of
     *   numbers. The version of min() with one parameter
     *   interprets it as an array of numbers and returns
     *   the smallest number.
     *
     *   The version of min() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the smallest number.
     *   @param nums numbers to compare.
     */
    function min(nums: number[]): number;

    /**
     *   Maps a number from one range to a value between 0
     *   and 1. For example, norm(2, 0, 10) returns 0.2.
     *   2's position in the original range [0, 10] is
     *   proportional to 0.2's position in the range [0,
     *   1]. This is the same as calling map(2, 0, 10, 0,
     *   1).
     *
     *   Numbers outside of the original range are not
     *   constrained between 0 and 1. Out-of-range values
     *   are often intentional and useful.
     *   @param value incoming value to be normalized.
     *   @param start lower bound of the value's current
     *   range.
     *   @param stop upper bound of the value's current
     *   range.
     *   @return normalized number.
     */
    function norm(value: number, start: number, stop: number): number;

    /**
     *   Calculates exponential expressions such as 23. For
     *   example, pow(2, 3) evaluates the expression 2 × 2
     *   × 2. pow(2, -3) evaluates 1 ÷ (2 × 2 × 2).
     *   @param n base of the exponential expression.
     *   @param e power by which to raise the base.
     *   @return n^e.
     */
    function pow(n: number, e: number): number;

    /**
     *   Calculates the integer closest to a number. For
     *   example, round(133.8) returns the value 134.
     *
     *   The second parameter, decimals, is optional. It
     *   sets the number of decimal places to use when
     *   rounding. For example, round(12.34, 1) returns
     *   12.3. decimals is 0 by default.
     *   @param n number to round.
     *   @param [decimals] number of decimal places to
     *   round to, default is 0.
     *   @return rounded number.
     */
    function round(n: number, decimals?: number): number;

    /**
     *   Calculates the square of a number. Squaring a
     *   number means multiplying the number by itself. For
     *   example, sq(3) evaluates 3 × 3 which is 9. sq(-3)
     *   evaluates -3 × -3 which is also 9. Multiplying two
     *   negative numbers produces a positive number. The
     *   value returned by sq() is always positive.
     *   @param n number to square.
     *   @return squared number.
     */
    function sq(n: number): number;

    /**
     *   Calculates the square root of a number. A number's
     *   square root can be multiplied by itself to produce
     *   the original number. For example, sqrt(9) returns
     *   3 because 3 × 3 = 9. sqrt() always returns a
     *   positive value. sqrt() doesn't work with negative
     *   arguments such as sqrt(-9).
     *   @param n non-negative number to square root.
     *   @return square root of number.
     */
    function sqrt(n: number): number;

    /**
     *   Calculates the fractional part of a number. A
     *   number's fractional part includes its decimal
     *   values. For example, fract(12.34) returns 0.34.
     *   @param n number whose fractional part will be
     *   found.
     *   @return fractional part of n.
     */
    function fract(n: number): number;

    /**
     *   Creates a new p5.Vector object. A vector can be
     *   thought of in different ways. In one view, a
     *   vector is like an arrow pointing in space. Vectors
     *   have both magnitude (length) and direction. This
     *   view is helpful for programming motion.
     *
     *   A vector's components determine its magnitude and
     *   direction. For example, calling createVector(3, 4)
     *   creates a new p5.Vector object with an x-component
     *   of 3 and a y-component of 4. From the origin, this
     *   vector's tip is 3 units to the right and 4 units
     *   down.
     *
     *   p5.Vector objects are often used to program motion
     *   because they simplify the math. For example, a
     *   moving ball has a position and a velocity.
     *   Position describes where the ball is in space. The
     *   ball's position vector extends from the origin to
     *   the ball's center. Velocity describes the ball's
     *   speed and the direction it's moving. If the ball
     *   is moving straight up, its velocity vector points
     *   straight up. Adding the ball's velocity vector to
     *   its position vector moves it, as in pos.add(vel).
     *   Vector math relies on methods inside the p5.Vector
     *   class.
     *   @param [x] x component of the vector.
     *   @param [y] y component of the vector.
     *   @param [z] z component of the vector.
     *   @return new p5.Vector object.
     */
    function createVector(x?: number, y?: number, z?: number): p5.Vector;

    /**
     *   Returns random numbers that can be tuned to feel
     *   organic. Values returned by random() and
     *   randomGaussian() can change by large amounts
     *   between function calls. By contrast, values
     *   returned by noise() can be made "smooth". Calls to
     *   noise() with similar inputs will produce similar
     *   outputs. noise() is used to create textures,
     *   motion, shapes, terrains, and so on. Ken Perlin
     *   invented noise() while animating the original Tron
     *   film in the 1980s.
     *
     *   noise() always returns values between 0 and 1. It
     *   returns the same value for a given input while a
     *   sketch is running. noise() produces different
     *   results each time a sketch runs. The noiseSeed()
     *   function can be used to generate the same sequence
     *   of Perlin noise values each time a sketch runs.
     *
     *   The character of the noise can be adjusted in two
     *   ways. The first way is to scale the inputs.
     *   noise() interprets inputs as coordinates. The
     *   sequence of noise values will be smoother when the
     *   input coordinates are closer. The second way is to
     *   use the noiseDetail() function.
     *
     *   The version of noise() with one parameter computes
     *   noise values in one dimension. This dimension can
     *   be thought of as space, as in noise(x), or time,
     *   as in noise(t).
     *
     *   The version of noise() with two parameters
     *   computes noise values in two dimensions. These
     *   dimensions can be thought of as space, as in
     *   noise(x, y), or space and time, as in noise(x, t).
     *
     *   The version of noise() with three parameters
     *   computes noise values in three dimensions. These
     *   dimensions can be thought of as space, as in
     *   noise(x, y, z), or space and time, as in noise(x,
     *   y, t).
     *   @param x x-coordinate in noise space.
     *   @param [y] y-coordinate in noise space.
     *   @param [z] z-coordinate in noise space.
     *   @return Perlin noise value at specified
     *   coordinates.
     */
    function noise(x: number, y?: number, z?: number): number;

    /**
     *   Adjusts the character of the noise produced by the
     *   noise() function. Perlin noise values are created
     *   by adding layers of noise together. The noise
     *   layers, called octaves, are similar to harmonics
     *   in music. Lower octaves contribute more to the
     *   output signal. They define the overall intensity
     *   of the noise. Higher octaves create finer-grained
     *   details.
     *
     *   By default, noise values are created by combining
     *   four octaves. Each higher octave contributes half
     *   as much (50% less) compared to its predecessor.
     *   noiseDetail() changes the number of octaves and
     *   the falloff amount. For example, calling
     *   noiseDetail(6, 0.25) ensures that noise() will use
     *   six octaves. Each higher octave will contribute
     *   25% as much (75% less) compared to its
     *   predecessor. Falloff values between 0 and 1 are
     *   valid. However, falloff values greater than 0.5
     *   might result in noise values greater than 1.
     *   @param lod number of octaves to be used by the
     *   noise.
     *   @param falloff falloff factor for each octave.
     */
    function noiseDetail(lod: number, falloff: number): void;

    /**
     *   Sets the seed value for the noise() function. By
     *   default, noise() produces different results each
     *   time a sketch is run. Calling noiseSeed() with a
     *   constant argument, such as noiseSeed(99), makes
     *   noise() produce the same results each time a
     *   sketch is run.
     *   @param seed seed value.
     */
    function noiseSeed(seed: number): void;

    /**
     *   Sets the seed value for the random() and
     *   randomGaussian() functions. By default, random()
     *   and randomGaussian() produce different results
     *   each time a sketch is run. Calling randomSeed()
     *   with a constant argument, such as randomSeed(99),
     *   makes these functions produce the same results
     *   each time a sketch is run.
     *   @param seed seed value.
     */
    function randomSeed(seed: number): void;

    /**
     *   Returns a random number or a random element from
     *   an array. random() follows uniform distribution,
     *   which means that all outcomes are equally likely.
     *   When random() is used to generate numbers, all
     *   numbers in the output range are equally likely to
     *   be returned. When random() is used to select
     *   elements from an array, all elements are equally
     *   likely to be chosen.
     *
     *   By default, random() produces different results
     *   each time a sketch runs. The randomSeed() function
     *   can be used to generate the same sequence of
     *   numbers or choices each time a sketch runs.
     *
     *   The version of random() with no parameters returns
     *   a random number from 0 up to but not including 1.
     *
     *   The version of random() with one parameter works
     *   one of two ways. If the argument passed is a
     *   number, random() returns a random number from 0 up
     *   to but not including the number. For example,
     *   calling random(5) returns values between 0 and 5.
     *   If the argument passed is an array, random()
     *   returns a random element from that array. For
     *   example, calling random(['🦁', '🐯', '🐻'])
     *   returns either a lion, tiger, or bear emoji.
     *
     *   The version of random() with two parameters
     *   returns a random number from a given range. The
     *   arguments passed set the range's lower and upper
     *   bounds. For example, calling random(-5, 10.2)
     *   returns values from -5 up to but not including
     *   10.2.
     *   @param [min] lower bound (inclusive).
     *   @param [max] upper bound (exclusive).
     *   @return random number.
     */
    function random(min?: number, max?: number): number;

    /**
     *   Returns a random number or a random element from
     *   an array. random() follows uniform distribution,
     *   which means that all outcomes are equally likely.
     *   When random() is used to generate numbers, all
     *   numbers in the output range are equally likely to
     *   be returned. When random() is used to select
     *   elements from an array, all elements are equally
     *   likely to be chosen.
     *
     *   By default, random() produces different results
     *   each time a sketch runs. The randomSeed() function
     *   can be used to generate the same sequence of
     *   numbers or choices each time a sketch runs.
     *
     *   The version of random() with no parameters returns
     *   a random number from 0 up to but not including 1.
     *
     *   The version of random() with one parameter works
     *   one of two ways. If the argument passed is a
     *   number, random() returns a random number from 0 up
     *   to but not including the number. For example,
     *   calling random(5) returns values between 0 and 5.
     *   If the argument passed is an array, random()
     *   returns a random element from that array. For
     *   example, calling random(['🦁', '🐯', '🐻'])
     *   returns either a lion, tiger, or bear emoji.
     *
     *   The version of random() with two parameters
     *   returns a random number from a given range. The
     *   arguments passed set the range's lower and upper
     *   bounds. For example, calling random(-5, 10.2)
     *   returns values from -5 up to but not including
     *   10.2.
     *   @param choices array to choose from.
     *   @return random element from the array.
     */
    function random(choices: any[]): any;

    /**
     *   Returns a random number fitting a Gaussian, or
     *   normal, distribution. Normal distributions look
     *   like bell curves when plotted. Values from a
     *   normal distribution cluster around a central value
     *   called the mean. The cluster's standard deviation
     *   describes its spread.
     *
     *   By default, randomGaussian() produces different
     *   results each time a sketch runs. The randomSeed()
     *   function can be used to generate the same sequence
     *   of numbers each time a sketch runs.
     *
     *   There's no minimum or maximum value that
     *   randomGaussian() might return. Values far from the
     *   mean are very unlikely and values near the mean
     *   are very likely.
     *
     *   The version of randomGaussian() with no parameters
     *   returns values with a mean of 0 and standard
     *   deviation of 1.
     *
     *   The version of randomGaussian() with one parameter
     *   interprets the argument passed as the mean. The
     *   standard deviation is 1.
     *
     *   The version of randomGaussian() with two
     *   parameters interprets the first argument passed as
     *   the mean and the second as the standard deviation.
     *   @param [mean] mean.
     *   @param [sd] standard deviation.
     *   @return random number.
     */
    function randomGaussian(mean?: number, sd?: number): number;

    /**
     *   Calculates the arc cosine of a number. acos() is
     *   the inverse of cos(). It expects arguments in the
     *   range -1 to 1. By default, acos() returns values
     *   in the range 0 to π (about 3.14). If the
     *   angleMode() is DEGREES, then values are returned
     *   in the range 0 to 180.
     *   @param value value whose arc cosine is to be
     *   returned.
     *   @return arc cosine of the given value.
     */
    function acos(value: number): number;

    /**
     *   Calculates the arc sine of a number. asin() is the
     *   inverse of sin(). It expects input values in the
     *   range of -1 to 1. By default, asin() returns
     *   values in the range -π ÷ 2 (about -1.57) to π ÷ 2
     *   (about 1.57). If the angleMode() is DEGREES then
     *   values are returned in the range -90 to 90.
     *   @param value value whose arc sine is to be
     *   returned.
     *   @return arc sine of the given value.
     */
    function asin(value: number): number;

    /**
     *   Calculates the arc tangent of a number. atan() is
     *   the inverse of tan(). It expects input values in
     *   the range of -Infinity to Infinity. By default,
     *   atan() returns values in the range -π ÷ 2 (about
     *   -1.57) to π ÷ 2 (about 1.57). If the angleMode()
     *   is DEGREES then values are returned in the range
     *   -90 to 90.
     *   @param value value whose arc tangent is to be
     *   returned.
     *   @return arc tangent of the given value.
     */
    function atan(value: number): number;

    /**
     *   Calculates the angle formed by a point, the
     *   origin, and the positive x-axis. atan2() is most
     *   often used for orienting geometry to the mouse's
     *   position, as in atan2(mouseY, mouseX). The first
     *   parameter is the point's y-coordinate and the
     *   second parameter is its x-coordinate.
     *
     *   By default, atan2() returns values in the range -π
     *   (about -3.14) to π (3.14). If the angleMode() is
     *   DEGREES, then values are returned in the range
     *   -180 to 180.
     *   @param y y-coordinate of the point.
     *   @param x x-coordinate of the point.
     *   @return arc tangent of the given point.
     */
    function atan2(y: number, x: number): number;

    /**
     *   Calculates the cosine of an angle. cos() is useful
     *   for many geometric tasks in creative coding. The
     *   values returned oscillate between -1 and 1 as the
     *   input angle increases. cos() calculates the cosine
     *   of an angle, using radians by default, or
     *   according to if angleMode() setting (RADIANS or
     *   DEGREES).
     *   @param angle the angle, in radians by default, or
     *   according to if angleMode() setting (RADIANS or
     *   DEGREES).
     *   @return cosine of the angle.
     */
    function cos(angle: number): number;

    /**
     *   Calculates the sine of an angle. sin() is useful
     *   for many geometric tasks in creative coding. The
     *   values returned oscillate between -1 and 1 as the
     *   input angle increases. sin() calculates the sine
     *   of an angle, using radians by default, or
     *   according to if angleMode() setting (RADIANS or
     *   DEGREES).
     *   @param angle the angle, in radians by default, or
     *   according to if angleMode() setting (RADIANS or
     *   DEGREES).
     *   @return sine of the angle.
     */
    function sin(angle: number): number;

    /**
     *   Calculates the tangent of an angle. tan() is
     *   useful for many geometric tasks in creative
     *   coding. The values returned range from -Infinity
     *   to Infinity and repeat periodically as the input
     *   angle increases. tan() calculates the tan of an
     *   angle, using radians by default, or according to
     *   if angleMode() setting (RADIANS or DEGREES).
     *   @param angle the angle, in radians by default, or
     *   according to if angleMode() setting (RADIANS or
     *   DEGREES).
     *   @return tangent of the angle.
     */
    function tan(angle: number): number;

    /**
     *   Converts an angle measured in radians to its value
     *   in degrees. Degrees and radians are both units for
     *   measuring angles. There are 360˚ in one full
     *   rotation. A full rotation is 2 × π (about 6.28)
     *   radians.
     *
     *   The same angle can be expressed in with either
     *   unit. For example, 90° is a quarter of a full
     *   rotation. The same angle is 2 × π ÷ 4 (about 1.57)
     *   radians.
     *   @param radians radians value to convert to
     *   degrees.
     *   @return converted angle.
     */
    function degrees(radians: number): number;

    /**
     *   Converts an angle measured in degrees to its value
     *   in radians. Degrees and radians are both units for
     *   measuring angles. There are 360˚ in one full
     *   rotation. A full rotation is 2 × π (about 6.28)
     *   radians.
     *
     *   The same angle can be expressed in with either
     *   unit. For example, 90° is a quarter of a full
     *   rotation. The same angle is 2 × π ÷ 4 (about 1.57)
     *   radians.
     *   @param degrees degree value to convert to radians.
     *   @return converted angle.
     */
    function radians(degrees: number): number;

    /**
     *   Changes the unit system used to measure angles.
     *   Degrees and radians are both units for measuring
     *   angles. There are 360˚ in one full rotation. A
     *   full rotation is 2 × π (about 6.28) radians.
     *
     *   Functions such as rotate() and sin() expect angles
     *   measured radians by default. Calling
     *   angleMode(DEGREES) switches to degrees. Calling
     *   angleMode(RADIANS) switches back to radians.
     *
     *   Calling angleMode() with no arguments returns
     *   current angle mode, which is either RADIANS or
     *   DEGREES.
     *   @param mode either RADIANS or DEGREES.
     */
    function angleMode(mode: p5.ANGLE_MODE): void;

    /**
     *   Changes the unit system used to measure angles.
     *   Degrees and radians are both units for measuring
     *   angles. There are 360˚ in one full rotation. A
     *   full rotation is 2 × π (about 6.28) radians.
     *
     *   Functions such as rotate() and sin() expect angles
     *   measured radians by default. Calling
     *   angleMode(DEGREES) switches to degrees. Calling
     *   angleMode(RADIANS) switches back to radians.
     *
     *   Calling angleMode() with no arguments returns
     *   current angle mode, which is either RADIANS or
     *   DEGREES.
     *   @return mode either RADIANS or DEGREES
     */
    function angleMode(): p5.UNKNOWN_P5_CONSTANT;

    /**
     *   Sets the way text is aligned when text() is
     *   called. By default, calling text('hi', 10, 20)
     *   places the bottom-left corner of the text's
     *   bounding box at (10, 20).
     *
     *   The first parameter, horizAlign, changes the way
     *   text() interprets x-coordinates. By default, the
     *   x-coordinate sets the left edge of the bounding
     *   box. textAlign() accepts the following values for
     *   horizAlign: LEFT, CENTER, or RIGHT.
     *
     *   The second parameter, vertAlign, is optional. It
     *   changes the way text() interprets y-coordinates.
     *   By default, the y-coordinate sets the bottom edge
     *   of the bounding box. textAlign() accepts the
     *   following values for vertAlign: TOP, BOTTOM,
     *   CENTER, or BASELINE.
     *   @param horizAlign horizontal alignment, either
     *   LEFT, CENTER, or RIGHT.
     *   @param [vertAlign] vertical alignment, either TOP,
     *   BOTTOM, CENTER, or BASELINE.
     *   @chainable
     */
    function textAlign(horizAlign: p5.HORIZ_ALIGN, vertAlign?: p5.VERT_ALIGN): p5;

    /**
     *   Sets the way text is aligned when text() is
     *   called. By default, calling text('hi', 10, 20)
     *   places the bottom-left corner of the text's
     *   bounding box at (10, 20).
     *
     *   The first parameter, horizAlign, changes the way
     *   text() interprets x-coordinates. By default, the
     *   x-coordinate sets the left edge of the bounding
     *   box. textAlign() accepts the following values for
     *   horizAlign: LEFT, CENTER, or RIGHT.
     *
     *   The second parameter, vertAlign, is optional. It
     *   changes the way text() interprets y-coordinates.
     *   By default, the y-coordinate sets the bottom edge
     *   of the bounding box. textAlign() accepts the
     *   following values for vertAlign: TOP, BOTTOM,
     *   CENTER, or BASELINE.
     */
    function textAlign(): object;

    /**
     *   Sets the spacing between lines of text when text()
     *   is called. Note: Spacing is measured in pixels.
     *
     *   Calling textLeading() without an argument returns
     *   the current spacing.
     *   @param leading spacing between lines of text in
     *   units of pixels.
     *   @chainable
     */
    function textLeading(leading: number): p5;

    /**
     *   Sets the spacing between lines of text when text()
     *   is called. Note: Spacing is measured in pixels.
     *
     *   Calling textLeading() without an argument returns
     *   the current spacing.
     */
    function textLeading(): number;

    /**
     *   Sets the font size when text() is called. Note:
     *   Font size is measured in pixels.
     *
     *   Calling textSize() without an argument returns the
     *   current size.
     *   @param size size of the letters in units of
     *   pixels.
     *   @chainable
     */
    function textSize(size: number): p5;

    /**
     *   Sets the font size when text() is called. Note:
     *   Font size is measured in pixels.
     *
     *   Calling textSize() without an argument returns the
     *   current size.
     */
    function textSize(): number;

    /**
     *   Sets the style for system fonts when text() is
     *   called. The parameter, style, can be either
     *   NORMAL, ITALIC, BOLD, or BOLDITALIC.
     *
     *   textStyle() may be overridden by CSS styling. This
     *   function doesn't affect fonts loaded with
     *   loadFont().
     *   @param style styling for text, either NORMAL,
     *   ITALIC, BOLD or BOLDITALIC.
     *   @chainable
     */
    function textStyle(style: p5.TEXT_STYLE): p5;

    /**
     *   Sets the style for system fonts when text() is
     *   called. The parameter, style, can be either
     *   NORMAL, ITALIC, BOLD, or BOLDITALIC.
     *
     *   textStyle() may be overridden by CSS styling. This
     *   function doesn't affect fonts loaded with
     *   loadFont().
     */
    function textStyle(): string;

    /**
     *   Calculates the maximum width of a string of text
     *   drawn when text() is called.
     *   @param str string of text to measure.
     *   @return width measured in units of pixels.
     */
    function textWidth(str: string): number;

    /**
     *   Calculates the ascent of the current font at its
     *   current size. The ascent represents the distance,
     *   in pixels, of the tallest character above the
     *   baseline.
     *   @return ascent measured in units of pixels.
     */
    function textAscent(): number;

    /**
     *   Calculates the descent of the current font at its
     *   current size. The descent represents the distance,
     *   in pixels, of the character with the longest
     *   descender below the baseline.
     *   @return descent measured in units of pixels.
     */
    function textDescent(): number;

    /**
     *   Sets the style for wrapping text when text() is
     *   called. The parameter, style, can be one of the
     *   following values:
     *
     *   WORD starts new lines of text at spaces. If a
     *   string of text doesn't have spaces, it may
     *   overflow the text box and the canvas. This is the
     *   default style.
     *
     *   CHAR starts new lines as needed to stay within the
     *   text box.
     *
     *   textWrap() only works when the maximum width is
     *   set for a text box. For example, calling
     *   text('Have a wonderful day', 0, 10, 100) sets the
     *   maximum width to 100 pixels.
     *
     *   Calling textWrap() without an argument returns the
     *   current style.
     *   @param style text wrapping style, either WORD or
     *   CHAR.
     *   @return style
     */
    function textWrap(style: p5.TEXT_STYLE): string;

    /**
     *   Loads a font and creates a p5.Font object.
     *   loadFont() can load fonts in either .otf or .ttf
     *   format. Loaded fonts can be used to style text on
     *   the canvas and in HTML elements. The first
     *   parameter, path, is the path to a font file. Paths
     *   to local files should be relative. For example,
     *   'assets/inconsolata.otf'. The Inconsolata font
     *   used in the following examples can be downloaded
     *   for free here. Paths to remote files should be
     *   URLs. For example,
     *   'https://example.com/inconsolata.otf'. URLs may be
     *   blocked due to browser security.
     *
     *   The second parameter, successCallback, is
     *   optional. If a function is passed, it will be
     *   called once the font has loaded. The callback
     *   function may use the new p5.Font object if needed.
     *
     *   The third parameter, failureCallback, is also
     *   optional. If a function is passed, it will be
     *   called if the font fails to load. The callback
     *   function may use the error Event object if needed.
     *
     *   Fonts can take time to load. Calling loadFont() in
     *   preload() ensures fonts load before they're used
     *   in setup() or draw().
     *   @param path path of the font to be loaded.
     *   @param [successCallback] function called with the
     *   p5.Font object after it loads.
     *   @param [failureCallback] function called with the
     *   error Event object if the font fails to load.
     *   @return p5.Font object.
     */
    function loadFont(
        path: string,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any
    ): p5.Font;

    /**
     *   Draws text to the canvas. The first parameter,
     *   str, is the text to be drawn. The second and third
     *   parameters, x and y, set the coordinates of the
     *   text's bottom-left corner. See textAlign() for
     *   other ways to align text.
     *
     *   The fourth and fifth parameters, maxWidth and
     *   maxHeight, are optional. They set the dimensions
     *   of the invisible rectangle containing the text. By
     *   default, they set its maximum width and height.
     *   See rectMode() for other ways to define the
     *   rectangular text box. Text will wrap to fit within
     *   the text box. Text outside of the box won't be
     *   drawn.
     *
     *   Text can be styled a few ways. Call the fill()
     *   function to set the text's fill color. Call
     *   stroke() and strokeWeight() to set the text's
     *   outline. Call textSize() and textFont() to set the
     *   text's size and font, respectively.
     *
     *   Note: WEBGL mode only supports fonts loaded with
     *   loadFont(). Calling stroke() has no effect in
     *   WEBGL mode.
     *   @param str text to be displayed.
     *   @param x x-coordinate of the text box.
     *   @param y y-coordinate of the text box.
     *   @param [maxWidth] maximum width of the text box.
     *   See rectMode() for other options.
     *   @param [maxHeight] maximum height of the text box.
     *   See rectMode() for other options.
     *   @chainable
     */
    function text(
        str: string | object | any[] | number | boolean,
        x: number,
        y: number,
        maxWidth?: number,
        maxHeight?: number
    ): p5;

    /**
     *   Sets the font used by the text() function. The
     *   first parameter, font, sets the font. textFont()
     *   recognizes either a p5.Font object or a string
     *   with the name of a system font. For example,
     *   'Courier New'.
     *
     *   The second parameter, size, is optional. It sets
     *   the font size in pixels. This has the same effect
     *   as calling textSize().
     *
     *   Note: WEBGL mode only supports fonts loaded with
     *   loadFont().
     *   @return current font or p5 Object.
     */
    function textFont(): object;

    /**
     *   Sets the font used by the text() function. The
     *   first parameter, font, sets the font. textFont()
     *   recognizes either a p5.Font object or a string
     *   with the name of a system font. For example,
     *   'Courier New'.
     *
     *   The second parameter, size, is optional. It sets
     *   the font size in pixels. This has the same effect
     *   as calling textSize().
     *
     *   Note: WEBGL mode only supports fonts loaded with
     *   loadFont().
     *   @param font font as a p5.Font object or a string.
     *   @param [size] font size in pixels.
     *   @chainable
     */
    function textFont(font: object | string, size?: number): p5;

    /**
     *   Adds a value to the end of an array. Extends the
     *   length of the array by one. Maps to Array.push().
     *   @param array Array to append
     *   @param value to be added to the Array
     *   @return the array that was appended to
     */
    function append(array: any[], value: any): any[];

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat(). The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param srcPosition starting position in the source
     *   Array
     *   @param dst the destination Array
     *   @param dstPosition starting position in the
     *   destination Array
     *   @param length number of Array elements to be
     *   copied
     */
    function arrayCopy(src: any[], srcPosition: number, dst: any[], dstPosition: number, length: number): void;

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat(). The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param dst the destination Array
     *   @param [length] number of Array elements to be
     *   copied
     */
    function arrayCopy(src: any[], dst: any[], length?: number): void;

    /**
     *   Concatenates two arrays, maps to Array.concat().
     *   Does not modify the input arrays.
     *   @param a first Array to concatenate
     *   @param b second Array to concatenate
     *   @return concatenated array
     */
    function concat(a: any[], b: any[]): any[];

    /**
     *   Reverses the order of an array, maps to
     *   Array.reverse()
     *   @param list Array to reverse
     *   @return the reversed list
     */
    function reverse(list: any[]): any[];

    /**
     *   Decreases an array by one element and returns the
     *   shortened array, maps to Array.pop().
     *   @param list Array to shorten
     *   @return shortened Array
     */
    function shorten(list: any[]): any[];

    /**
     *   Shuffles the elements of an array. The first
     *   parameter, array, is the array to be shuffled. For
     *   example, calling shuffle(myArray) will shuffle the
     *   elements of myArray. By default, the original
     *   array won’t be modified. Instead, a copy will be
     *   created, shuffled, and returned.
     *
     *   The second parameter, modify, is optional. If true
     *   is passed, as in shuffle(myArray, true), then the
     *   array will be shuffled in place without making a
     *   copy.
     *   @param array array to shuffle.
     *   @param [bool] if true, shuffle the original array
     *   in place. Defaults to false.
     *   @return shuffled array.
     */
    function shuffle(array: any[], bool?: boolean): any[];

    /**
     *   Sorts an array of numbers from smallest to
     *   largest, or puts an array of words in alphabetical
     *   order. The original array is not modified; a
     *   re-ordered array is returned. The count parameter
     *   states the number of elements to sort. For
     *   example, if there are 12 elements in an array and
     *   count is set to 5, only the first 5 elements in
     *   the array will be sorted.
     *   @param list Array to sort
     *   @param [count] number of elements to sort,
     *   starting from 0
     *   @return the sorted list
     */
    function sort(list: any[], count?: number): any[];

    /**
     *   Inserts a value or an array of values into an
     *   existing array. The first parameter specifies the
     *   initial array to be modified, and the second
     *   parameter defines the data to be inserted. The
     *   third parameter is an index value which specifies
     *   the array position from which to insert data.
     *   (Remember that array index numbering starts at
     *   zero, so the first position is 0, the second
     *   position is 1, and so on.)
     *   @param list Array to splice into
     *   @param value value to be spliced in
     *   @param position in the array from which to insert
     *   data
     *   @return the list
     */
    function splice(list: any[], value: any, position: number): any[];

    /**
     *   Extracts an array of elements from an existing
     *   array. The list parameter defines the array from
     *   which the elements will be copied, and the start
     *   and count parameters specify which elements to
     *   extract. If no count is given, elements will be
     *   extracted from the start to the end of the array.
     *   When specifying the start, remember that the first
     *   array element is 0. This function does not change
     *   the source array.
     *   @param list Array to extract from
     *   @param start position to begin
     *   @param [count] number of values to extract
     *   @return Array of extracted elements
     */
    function subset(list: any[], start: number, count?: number): any[];

    /**
     *   Converts a String to a floating point (decimal)
     *   Number. float() converts strings that resemble
     *   numbers, such as '12.34', into numbers.
     *
     *   The parameter, str, is the string value to
     *   convert. For example, calling float('12.34')
     *   returns the number 12.34. If an array of strings
     *   is passed, as in float(['12.34', '56.78']), then
     *   an array of numbers will be returned.
     *
     *   Note: If a string can't be converted to a number,
     *   as in float('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param str string to convert.
     *   @return converted number.
     */
    function float(str: string): number;

    /**
     *   Converts a String to a floating point (decimal)
     *   Number. float() converts strings that resemble
     *   numbers, such as '12.34', into numbers.
     *
     *   The parameter, str, is the string value to
     *   convert. For example, calling float('12.34')
     *   returns the number 12.34. If an array of strings
     *   is passed, as in float(['12.34', '56.78']), then
     *   an array of numbers will be returned.
     *
     *   Note: If a string can't be converted to a number,
     *   as in float('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param ns array of strings to convert.
     *   @return converted numbers.
     */
    function float(ns: string[]): number[];

    /**
     *   Converts a Boolean, String, or decimal Number to
     *   an integer. int() converts values to integers.
     *   Integers are positive or negative numbers without
     *   decimals. If the original value has decimals, as
     *   in -34.56, they're removed to produce an integer
     *   such as -34.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a Boolean, as in int(false) or int(true), then the
     *   number 0 (false) or 1 (true) will be returned. If
     *   n is a string or number, as in int('45') or
     *   int(67.89), then an integer will be returned. If
     *   an array is passed, as in int([12.34, 56.78]),
     *   then an array of integers will be returned.
     *
     *   Note: If a value can't be converted to a number,
     *   as in int('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param n value to convert.
     *   @return converted number.
     */
    function int(n: string | boolean | number): number;

    /**
     *   Converts a Boolean, String, or decimal Number to
     *   an integer. int() converts values to integers.
     *   Integers are positive or negative numbers without
     *   decimals. If the original value has decimals, as
     *   in -34.56, they're removed to produce an integer
     *   such as -34.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a Boolean, as in int(false) or int(true), then the
     *   number 0 (false) or 1 (true) will be returned. If
     *   n is a string or number, as in int('45') or
     *   int(67.89), then an integer will be returned. If
     *   an array is passed, as in int([12.34, 56.78]),
     *   then an array of integers will be returned.
     *
     *   Note: If a value can't be converted to a number,
     *   as in int('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param ns values to convert.
     *   @return converted numbers.
     */
    function int(ns: any[]): number[];

    /**
     *   Converts a Boolean or Number to String. str()
     *   converts values to strings. See the String
     *   reference page for guidance on using template
     *   literals instead.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a Boolean, as in str(false) or str(true), then the
     *   value will be returned as a string, as in 'false'
     *   or 'true'. If n is a number, as in str(123), then
     *   its value will be returned as a string, as in
     *   '123'. If an array is passed, as in str([12.34,
     *   56.78]), then an array of strings will be
     *   returned.
     *   @param n value to convert.
     *   @return converted string.
     */
    function str(n: string | boolean | number): string;

    /**
     *   Converts a String or Number to a Boolean.
     *   boolean() converts values to true or false.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a string, then boolean('true') will return true
     *   and every other string value will return false. If
     *   n is a number, then boolean(0) will return false
     *   and every other numeric value will return true. If
     *   an array is passed, as in boolean([0, 1, 'true',
     *   'blue']), then an array of Boolean values will be
     *   returned.
     *   @param n value to convert.
     *   @return converted Boolean value.
     */
    function boolean(n: string | boolean | number): boolean;

    /**
     *   Converts a String or Number to a Boolean.
     *   boolean() converts values to true or false.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a string, then boolean('true') will return true
     *   and every other string value will return false. If
     *   n is a number, then boolean(0) will return false
     *   and every other numeric value will return true. If
     *   an array is passed, as in boolean([0, 1, 'true',
     *   'blue']), then an array of Boolean values will be
     *   returned.
     *   @param ns values to convert.
     *   @return converted Boolean values.
     */
    function boolean(ns: any[]): boolean[];

    /**
     *   Converts a Boolean, String, or Number to its byte
     *   value. byte() converts a value to an integer
     *   (whole number) between -128 and 127. Values
     *   greater than 127 wrap around while negative values
     *   are unchanged. For example, 128 becomes -128 and
     *   -129 remains the same.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a Boolean, as in byte(false) or byte(true), the
     *   number 0 (false) or 1 (true) will be returned. If
     *   n is a string or number, as in byte('256') or
     *   byte(256), then the byte value will be returned.
     *   Decimal values are ignored. If an array is passed,
     *   as in byte([true, 123, '456']), then an array of
     *   byte values will be returned.
     *
     *   Note: If a value can't be converted to a number,
     *   as in byte('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param n value to convert.
     *   @return converted byte value.
     */
    function byte(n: string | boolean | number): number;

    /**
     *   Converts a Boolean, String, or Number to its byte
     *   value. byte() converts a value to an integer
     *   (whole number) between -128 and 127. Values
     *   greater than 127 wrap around while negative values
     *   are unchanged. For example, 128 becomes -128 and
     *   -129 remains the same.
     *
     *   The parameter, n, is the value to convert. If n is
     *   a Boolean, as in byte(false) or byte(true), the
     *   number 0 (false) or 1 (true) will be returned. If
     *   n is a string or number, as in byte('256') or
     *   byte(256), then the byte value will be returned.
     *   Decimal values are ignored. If an array is passed,
     *   as in byte([true, 123, '456']), then an array of
     *   byte values will be returned.
     *
     *   Note: If a value can't be converted to a number,
     *   as in byte('giraffe'), then the value NaN (not a
     *   number) will be returned.
     *   @param ns values to convert.
     *   @return converted byte values.
     */
    function byte(ns: any[]): number[];

    /**
     *   Converts a Number or String to a single-character
     *   String. char() converts numbers to their
     *   single-character string representations.
     *
     *   The parameter, n, is the value to convert. If a
     *   number is passed, as in char(65), the
     *   corresponding single-character string is returned.
     *   If a string is passed, as in char('65'), the
     *   string is converted to an integer (whole number)
     *   and the corresponding single-character string is
     *   returned. If an array is passed, as in char([65,
     *   66, 67]), an array of single-character strings is
     *   returned.
     *
     *   See MDN for more information about conversions.
     *   @param n value to convert.
     *   @return converted single-character string.
     */
    function char(n: string | number): string;

    /**
     *   Converts a Number or String to a single-character
     *   String. char() converts numbers to their
     *   single-character string representations.
     *
     *   The parameter, n, is the value to convert. If a
     *   number is passed, as in char(65), the
     *   corresponding single-character string is returned.
     *   If a string is passed, as in char('65'), the
     *   string is converted to an integer (whole number)
     *   and the corresponding single-character string is
     *   returned. If an array is passed, as in char([65,
     *   66, 67]), an array of single-character strings is
     *   returned.
     *
     *   See MDN for more information about conversions.
     *   @param ns values to convert.
     *   @return converted single-character strings.
     */
    function char(ns: any[]): string[];

    /**
     *   Converts a single-character String to a Number.
     *   unchar() converts single-character strings to
     *   their corresponding integer (whole number).
     *
     *   The parameter, n, is the character to convert. For
     *   example, unchar('A'), returns the number 65. If an
     *   array is passed, as in unchar(['A', 'B', 'C']), an
     *   array of integers is returned.
     *   @param n value to convert.
     *   @return converted number.
     */
    function unchar(n: string): number;

    /**
     *   Converts a single-character String to a Number.
     *   unchar() converts single-character strings to
     *   their corresponding integer (whole number).
     *
     *   The parameter, n, is the character to convert. For
     *   example, unchar('A'), returns the number 65. If an
     *   array is passed, as in unchar(['A', 'B', 'C']), an
     *   array of integers is returned.
     *   @param ns values to convert.
     *   @return converted numbers.
     */
    function unchar(ns: string[]): number[];

    /**
     *   Converts a Number to a String with its hexadecimal
     *   value. hex() converts a number to a string with
     *   its hexadecimal number value. Hexadecimal (hex)
     *   numbers are base-16, which means there are 16
     *   unique digits. Hex extends the numbers 0–9 with
     *   the letters A–F. For example, the number 11
     *   (eleven) in base-10 is written as the letter B in
     *   hex.
     *
     *   The first parameter, n, is the number to convert.
     *   For example, hex(20), returns the string
     *   '00000014'. If an array is passed, as in hex([1,
     *   10, 100]), an array of hexadecimal strings is
     *   returned.
     *
     *   The second parameter, digits, is optional. If a
     *   number is passed, as in hex(20, 2), it sets the
     *   number of hexadecimal digits to display. For
     *   example, calling hex(20, 2) returns the string
     *   '14'.
     *   @param n value to convert.
     *   @param [digits] number of digits to include.
     *   @return converted hexadecimal value.
     */
    function hex(n: number, digits?: number): string;

    /**
     *   Converts a Number to a String with its hexadecimal
     *   value. hex() converts a number to a string with
     *   its hexadecimal number value. Hexadecimal (hex)
     *   numbers are base-16, which means there are 16
     *   unique digits. Hex extends the numbers 0–9 with
     *   the letters A–F. For example, the number 11
     *   (eleven) in base-10 is written as the letter B in
     *   hex.
     *
     *   The first parameter, n, is the number to convert.
     *   For example, hex(20), returns the string
     *   '00000014'. If an array is passed, as in hex([1,
     *   10, 100]), an array of hexadecimal strings is
     *   returned.
     *
     *   The second parameter, digits, is optional. If a
     *   number is passed, as in hex(20, 2), it sets the
     *   number of hexadecimal digits to display. For
     *   example, calling hex(20, 2) returns the string
     *   '14'.
     *   @param ns values to convert.
     *   @param [digits] number of digits to include.
     *   @return converted hexadecimal values.
     */
    function hex(ns: number[], digits?: number): string[];

    /**
     *   Converts a String with a hexadecimal value to a
     *   Number. unhex() converts a string with its
     *   hexadecimal number value to a number. Hexadecimal
     *   (hex) numbers are base-16, which means there are
     *   16 unique digits. Hex extends the numbers 0–9 with
     *   the letters A–F. For example, the number 11
     *   (eleven) in base-10 is written as the letter B in
     *   hex.
     *
     *   The first parameter, n, is the hex string to
     *   convert. For example, unhex('FF'), returns the
     *   number 255. If an array is passed, as in
     *   unhex(['00', '80', 'FF']), an array of numbers is
     *   returned.
     *   @param n value to convert.
     *   @return converted number.
     */
    function unhex(n: string): number;

    /**
     *   Converts a String with a hexadecimal value to a
     *   Number. unhex() converts a string with its
     *   hexadecimal number value to a number. Hexadecimal
     *   (hex) numbers are base-16, which means there are
     *   16 unique digits. Hex extends the numbers 0–9 with
     *   the letters A–F. For example, the number 11
     *   (eleven) in base-10 is written as the letter B in
     *   hex.
     *
     *   The first parameter, n, is the hex string to
     *   convert. For example, unhex('FF'), returns the
     *   number 255. If an array is passed, as in
     *   unhex(['00', '80', 'FF']), an array of numbers is
     *   returned.
     *   @param ns values to convert.
     *   @return converted numbers.
     */
    function unhex(ns: string[]): number[];

    /**
     *   Combines an array of strings into one string. The
     *   first parameter, list, is the array of strings to
     *   join.
     *
     *   The second parameter, separator, is the
     *   character(s) that should be used to separate the
     *   combined strings. For example, calling
     *   join(myWords, ' : ') would return a string of
     *   words each separated by a colon and spaces.
     *   @param list array of strings to combine.
     *   @param separator character(s) to place between
     *   strings when they're combined.
     *   @return combined string.
     */
    function join(list: any[], separator: string): string;

    /**
     *   Applies a regular expression to a string and
     *   returns an array with the first match. match()
     *   uses regular expressions (regex) to match patterns
     *   in text. For example, the regex abc can be used to
     *   search a string for the exact sequence of
     *   characters abc. See MDN. for more information
     *   about regexes.
     *
     *   The first parameter, str, is the string to search.
     *
     *   The second parameter, regex, is a string with the
     *   regular expression to apply. For example, calling
     *   match('Hello, p5*js!', '[a-z][0-9]') would return
     *   the array ['p5'].
     *
     *   Note: If no matches are found, null is returned.
     *   @param str string to search.
     *   @param regexp regular expression to match.
     *   @return match if found.
     */
    function match(str: string, regexp: string): string[];

    /**
     *   Applies a regular expression to a string and
     *   returns an array of matches. match() uses regular
     *   expressions (regex) to match patterns in text. For
     *   example, the regex abc can be used to search a
     *   string for the exact sequence of characters abc.
     *   See MDN. for more information about regexes.
     *   matchAll() is different from match() because it
     *   returns every match, not just the first.
     *
     *   The first parameter, str, is the string to search.
     *
     *   The second parameter, regex, is a string with the
     *   regular expression to apply. For example, calling
     *   matchAll('p5*js is easier than abc123',
     *   '[a-z][0-9]') would return the 2D array [['p5'],
     *   ['c1']].
     *
     *   Note: If no matches are found, an empty array []
     *   is returned.
     *   @param str string to search.
     *   @param regexp regular expression to match.
     *   @return matches found.
     */
    function matchAll(str: string, regexp: string): string[];

    /**
     *   Converts a Number into a String with a given
     *   number of digits. nf() converts numbers such as
     *   123.45 into strings formatted with a set number of
     *   digits, as in '123.4500'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nf(123.45)
     *   returns the string '123.45'. If an array of
     *   numbers is passed, as in nf([123.45, 67.89]), an
     *   array of formatted strings will be returned.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nf(123.45, 4), it sets the
     *   minimum number of digits to include to the left of
     *   the decimal place. If left is larger than the
     *   number of digits in num, then unused digits will
     *   be set to 0. For example, calling nf(123.45, 4)
     *   returns the string '0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nf(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nf(123.45, 4, 1)
     *   returns the string '0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nf(123.45, 4, 3) returns the
     *   string '0123.450'.
     *
     *   When the number is negative, for example, calling
     *   nf(-123.45, 5, 2) returns the string '-00123.45'.
     *   @param num number to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted string.
     */
    function nf(num: number | string, left?: number | string, right?: number | string): string;

    /**
     *   Converts a Number into a String with a given
     *   number of digits. nf() converts numbers such as
     *   123.45 into strings formatted with a set number of
     *   digits, as in '123.4500'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nf(123.45)
     *   returns the string '123.45'. If an array of
     *   numbers is passed, as in nf([123.45, 67.89]), an
     *   array of formatted strings will be returned.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nf(123.45, 4), it sets the
     *   minimum number of digits to include to the left of
     *   the decimal place. If left is larger than the
     *   number of digits in num, then unused digits will
     *   be set to 0. For example, calling nf(123.45, 4)
     *   returns the string '0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nf(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nf(123.45, 4, 1)
     *   returns the string '0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nf(123.45, 4, 3) returns the
     *   string '0123.450'.
     *
     *   When the number is negative, for example, calling
     *   nf(-123.45, 5, 2) returns the string '-00123.45'.
     *   @param nums numbers to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted strings.
     */
    function nf(nums: number[], left?: number | string, right?: number | string): string[];

    /**
     *   Converts a Number into a String with commas to
     *   mark units of 1,000. nfc() converts numbers such
     *   as 12345 into strings formatted with commas to
     *   mark the thousands place, as in '12,345'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfc(12345)
     *   returns the string '12,345'.
     *
     *   The second parameter, right, is optional. If a
     *   number is passed, as in nfc(12345, 1), it sets the
     *   minimum number of digits to include to the right
     *   of the decimal place. If right is smaller than the
     *   number of decimal places in num, then num will be
     *   rounded to the given number of decimal places. For
     *   example, calling nfc(12345.67, 1) returns the
     *   string '12,345.7'. If right is larger than the
     *   number of decimal places in num, then unused
     *   decimal places will be set to 0. For example,
     *   calling nfc(12345.67, 3) returns the string
     *   '12,345.670'.
     *   @param num number to format.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted string.
     */
    function nfc(num: number | string, right?: number | string): string;

    /**
     *   Converts a Number into a String with commas to
     *   mark units of 1,000. nfc() converts numbers such
     *   as 12345 into strings formatted with commas to
     *   mark the thousands place, as in '12,345'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfc(12345)
     *   returns the string '12,345'.
     *
     *   The second parameter, right, is optional. If a
     *   number is passed, as in nfc(12345, 1), it sets the
     *   minimum number of digits to include to the right
     *   of the decimal place. If right is smaller than the
     *   number of decimal places in num, then num will be
     *   rounded to the given number of decimal places. For
     *   example, calling nfc(12345.67, 1) returns the
     *   string '12,345.7'. If right is larger than the
     *   number of decimal places in num, then unused
     *   decimal places will be set to 0. For example,
     *   calling nfc(12345.67, 3) returns the string
     *   '12,345.670'.
     *   @param nums numbers to format.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted strings.
     */
    function nfc(nums: number[], right?: number | string): string[];

    /**
     *   Converts a Number into a String with a plus or
     *   minus sign. nfp() converts numbers such as 123
     *   into strings formatted with a + or - symbol to
     *   mark whether they're positive or negative, as in
     *   '+123'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfp(123.45)
     *   returns the string '+123.45'. If an array of
     *   numbers is passed, as in nfp([123.45, -6.78]), an
     *   array of formatted strings will be returned.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nfp(123.45, 4), it sets
     *   the minimum number of digits to include to the
     *   left of the decimal place. If left is larger than
     *   the number of digits in num, then unused digits
     *   will be set to 0. For example, calling nfp(123.45,
     *   4) returns the string '+0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nfp(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nfp(123.45, 4, 1)
     *   returns the string '+0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nfp(123.45, 4, 3) returns the
     *   string '+0123.450'.
     *   @param num number to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted string.
     */
    function nfp(num: number, left?: number, right?: number): string;

    /**
     *   Converts a Number into a String with a plus or
     *   minus sign. nfp() converts numbers such as 123
     *   into strings formatted with a + or - symbol to
     *   mark whether they're positive or negative, as in
     *   '+123'.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfp(123.45)
     *   returns the string '+123.45'. If an array of
     *   numbers is passed, as in nfp([123.45, -6.78]), an
     *   array of formatted strings will be returned.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nfp(123.45, 4), it sets
     *   the minimum number of digits to include to the
     *   left of the decimal place. If left is larger than
     *   the number of digits in num, then unused digits
     *   will be set to 0. For example, calling nfp(123.45,
     *   4) returns the string '+0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nfp(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nfp(123.45, 4, 1)
     *   returns the string '+0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nfp(123.45, 4, 3) returns the
     *   string '+0123.450'.
     *   @param nums numbers to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted strings.
     */
    function nfp(nums: number[], left?: number, right?: number): string[];

    /**
     *   Converts a positive Number into a String with an
     *   extra space in front. nfs() converts positive
     *   numbers such as 123.45 into strings formatted with
     *   an extra space in front, as in ' 123.45'. Doing so
     *   can be helpful for aligning positive and negative
     *   numbers.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfs(123.45)
     *   returns the string ' 123.45'.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nfs(123.45, 4), it sets
     *   the minimum number of digits to include to the
     *   left of the decimal place. If left is larger than
     *   the number of digits in num, then unused digits
     *   will be set to 0. For example, calling nfs(123.45,
     *   4) returns the string ' 0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nfs(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nfs(123.45, 4, 1)
     *   returns the string ' 0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nfs(123.45, 4, 3) returns the
     *   string ' 0123.450'.
     *   @param num number to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted string.
     */
    function nfs(num: number, left?: number, right?: number): string;

    /**
     *   Converts a positive Number into a String with an
     *   extra space in front. nfs() converts positive
     *   numbers such as 123.45 into strings formatted with
     *   an extra space in front, as in ' 123.45'. Doing so
     *   can be helpful for aligning positive and negative
     *   numbers.
     *
     *   The first parameter, num, is the number to convert
     *   to a string. For example, calling nfs(123.45)
     *   returns the string ' 123.45'.
     *
     *   The second parameter, left, is optional. If a
     *   number is passed, as in nfs(123.45, 4), it sets
     *   the minimum number of digits to include to the
     *   left of the decimal place. If left is larger than
     *   the number of digits in num, then unused digits
     *   will be set to 0. For example, calling nfs(123.45,
     *   4) returns the string ' 0123.45'.
     *
     *   The third parameter, right, is also optional. If a
     *   number is passed, as in nfs(123.45, 4, 1), it sets
     *   the minimum number of digits to include to the
     *   right of the decimal place. If right is smaller
     *   than the number of decimal places in num, then num
     *   will be rounded to the given number of decimal
     *   places. For example, calling nfs(123.45, 4, 1)
     *   returns the string ' 0123.5'. If right is larger
     *   than the number of decimal places in num, then
     *   unused decimal places will be set to 0. For
     *   example, calling nfs(123.45, 4, 3) returns the
     *   string ' 0123.450'.
     *   @param nums numbers to format.
     *   @param [left] number of digits to include to the
     *   left of the decimal point.
     *   @param [right] number of digits to include to the
     *   right of the decimal point.
     *   @return formatted strings.
     */
    function nfs(nums: any[], left?: number, right?: number): string[];

    /**
     *   Splits a String into pieces and returns an array
     *   containing the pieces. The first parameter, value,
     *   is the string to split.
     *
     *   The second parameter, delim, is the character(s)
     *   that should be used to split the string. For
     *   example, calling split('rock...paper...scissors',
     *   '...') would return the array ['rock', 'paper',
     *   'scissors'] because there are three periods ...
     *   between each word.
     *   @param value the String to be split
     *   @param delim the String used to separate the data
     *   @return Array of Strings
     */
    function split(value: string, delim: string): string[];

    /**
     *   Splits a String into pieces and returns an array
     *   containing the pieces. splitTokens() is an
     *   enhanced version of split(). It can split a string
     *   when any characters from a list are detected.
     *
     *   The first parameter, value, is the string to
     *   split.
     *
     *   The second parameter, delim, is optional. It sets
     *   the character(s) that should be used to split the
     *   string. delim can be a single string, as in
     *   splitTokens('rock...paper...scissors...shoot',
     *   '...'), or an array of strings, as in
     *   splitTokens('rock;paper,scissors...shoot, [';',
     *   ',', '...']). By default, if no delim characters
     *   are specified, then any whitespace character is
     *   used to split. Whitespace characters include tab
     *   (\t), line feed (\n), carriage return (\r), form
     *   feed (\f), and space.
     *   @param value string to split.
     *   @param [delim] character(s) to use for splitting
     *   the string.
     *   @return separated strings.
     */
    function splitTokens(value: string, delim?: string): string[];

    /**
     *   Removes whitespace from the start and end of a
     *   String without changing the middle. trim() trims
     *   whitespace characters such as spaces, carriage
     *   returns, tabs, Unicode "nbsp" character.
     *
     *   The parameter, str, is the string to trim. If a
     *   single string is passed, as in trim(' pad '), a
     *   single string is returned. If an array of strings
     *   is passed, as in trim([' pad ', '\n space \n']),
     *   an array of strings is returned.
     *   @param str string to trim.
     *   @return trimmed string.
     */
    function trim(str: string): string;

    /**
     *   Removes whitespace from the start and end of a
     *   String without changing the middle. trim() trims
     *   whitespace characters such as spaces, carriage
     *   returns, tabs, Unicode "nbsp" character.
     *
     *   The parameter, str, is the string to trim. If a
     *   single string is passed, as in trim(' pad '), a
     *   single string is returned. If an array of strings
     *   is passed, as in trim([' pad ', '\n space \n']),
     *   an array of strings is returned.
     *   @param strs strings to trim.
     *   @return trimmed strings.
     */
    function trim(strs: string[]): string[];

    /**
     *   Returns the current day as a number from 1–31.
     *   @return current day between 1 and 31.
     */
    function day(): number;

    /**
     *   Returns the current hour as a number from 0–23.
     *   @return current hour between 0 and 23.
     */
    function hour(): number;

    /**
     *   Returns the current minute as a number from 0–59.
     *   @return current minute between 0 and 59.
     */
    function minute(): number;

    /**
     *   Returns the number of milliseconds since a sketch
     *   started running. millis() keeps track of how long
     *   a sketch has been running in milliseconds
     *   (thousandths of a second). This information is
     *   often helpful for timing events and animations.
     *
     *   If a sketch has a setup() function, then millis()
     *   begins tracking time before the code in setup()
     *   runs. If a sketch includes a preload() function,
     *   then millis() begins tracking time as soon as the
     *   code in preload() starts running.
     *   @return number of milliseconds since starting the
     *   sketch.
     */
    function millis(): number;

    /**
     *   Returns the current month as a number from 1–12.
     *   @return current month between 1 and 12.
     */
    function month(): number;

    /**
     *   Returns the current second as a number from 0–59.
     *   @return current second between 0 and 59.
     */
    function second(): number;

    /**
     *   Returns the current year as a number such as 1999.
     *   @return current year.
     */
    function year(): number;

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
    function beginGeometry(): void;

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
    function endGeometry(): p5.Geometry;

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
    function buildGeometry(callback: (...args: any[]) => any): p5.Geometry;

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
    function freeGeometry(geometry: p5.Geometry): void;

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
    function plane(width?: number, height?: number, detailX?: number, detailY?: number): p5;

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
    function box(width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): p5;

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
    function sphere(radius?: number, detailX?: number, detailY?: number): p5;

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
    function cylinder(
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
    function cone(radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): p5;

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
    function ellipsoid(radiusX?: number, radiusY?: number, radiusZ?: number, detailX?: number, detailY?: number): p5;

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
    function torus(radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): p5;

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
    function orbitControl(sensitivityX?: number, sensitivityY?: number, sensitivityZ?: number, options?: object): p5;

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
    function debugMode(): void;

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
    function debugMode(mode: p5.DEBUG_MODE): void;

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
    function debugMode(
        mode: p5.UNKNOWN_P5_CONSTANT,
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
    function debugMode(
        mode: p5.UNKNOWN_P5_CONSTANT,
        axesSize?: number,
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
    function debugMode(
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
    function noDebugMode(): void;

    /**
     *   Creates a light that shines from all directions.
     *   Ambient light does not come from one direction.
     *   Instead, 3D shapes are lit evenly from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   There are three ways to call ambientLight() with
     *   optional parameters to set the light’s color.
     *
     *   The first way to call ambientLight() has two
     *   parameters, gray and alpha. alpha is optional.
     *   Grayscale and alpha values between 0 and 255 can
     *   be passed to set the ambient light’s color, as in
     *   ambientLight(50) or ambientLight(50, 30).
     *
     *   The second way to call ambientLight() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientLight('magenta'), can be passed to set the
     *   ambient light’s color.
     *
     *   The third way to call ambientLight() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the ambient light’s colors, as in
     *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
     *   30). Color values will be interpreted using the
     *   current colorMode().
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param [alpha] alpha (transparency) value in the
     *   current colorMode().
     *   @chainable
     */
    function ambientLight(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Creates a light that shines from all directions.
     *   Ambient light does not come from one direction.
     *   Instead, 3D shapes are lit evenly from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   There are three ways to call ambientLight() with
     *   optional parameters to set the light’s color.
     *
     *   The first way to call ambientLight() has two
     *   parameters, gray and alpha. alpha is optional.
     *   Grayscale and alpha values between 0 and 255 can
     *   be passed to set the ambient light’s color, as in
     *   ambientLight(50) or ambientLight(50, 30).
     *
     *   The second way to call ambientLight() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientLight('magenta'), can be passed to set the
     *   ambient light’s color.
     *
     *   The third way to call ambientLight() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the ambient light’s colors, as in
     *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
     *   30). Color values will be interpreted using the
     *   current colorMode().
     *   @param gray grayscale value between 0 and 255.
     *   @param [alpha] alpha (transparency) value in the
     *   current colorMode().
     *   @chainable
     */
    function ambientLight(gray: number, alpha?: number): p5;

    /**
     *   Creates a light that shines from all directions.
     *   Ambient light does not come from one direction.
     *   Instead, 3D shapes are lit evenly from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   There are three ways to call ambientLight() with
     *   optional parameters to set the light’s color.
     *
     *   The first way to call ambientLight() has two
     *   parameters, gray and alpha. alpha is optional.
     *   Grayscale and alpha values between 0 and 255 can
     *   be passed to set the ambient light’s color, as in
     *   ambientLight(50) or ambientLight(50, 30).
     *
     *   The second way to call ambientLight() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientLight('magenta'), can be passed to set the
     *   ambient light’s color.
     *
     *   The third way to call ambientLight() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the ambient light’s colors, as in
     *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
     *   30). Color values will be interpreted using the
     *   current colorMode().
     *   @param value color as a CSS string.
     *   @chainable
     */
    function ambientLight(value: string): p5;

    /**
     *   Creates a light that shines from all directions.
     *   Ambient light does not come from one direction.
     *   Instead, 3D shapes are lit evenly from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   There are three ways to call ambientLight() with
     *   optional parameters to set the light’s color.
     *
     *   The first way to call ambientLight() has two
     *   parameters, gray and alpha. alpha is optional.
     *   Grayscale and alpha values between 0 and 255 can
     *   be passed to set the ambient light’s color, as in
     *   ambientLight(50) or ambientLight(50, 30).
     *
     *   The second way to call ambientLight() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientLight('magenta'), can be passed to set the
     *   ambient light’s color.
     *
     *   The third way to call ambientLight() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the ambient light’s colors, as in
     *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
     *   30). Color values will be interpreted using the
     *   current colorMode().
     *   @param values color as an array of RGBA, HSBA, or
     *   HSLA values.
     *   @chainable
     */
    function ambientLight(values: number[]): p5;

    /**
     *   Creates a light that shines from all directions.
     *   Ambient light does not come from one direction.
     *   Instead, 3D shapes are lit evenly from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   There are three ways to call ambientLight() with
     *   optional parameters to set the light’s color.
     *
     *   The first way to call ambientLight() has two
     *   parameters, gray and alpha. alpha is optional.
     *   Grayscale and alpha values between 0 and 255 can
     *   be passed to set the ambient light’s color, as in
     *   ambientLight(50) or ambientLight(50, 30).
     *
     *   The second way to call ambientLight() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientLight('magenta'), can be passed to set the
     *   ambient light’s color.
     *
     *   The third way to call ambientLight() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the ambient light’s colors, as in
     *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
     *   30). Color values will be interpreted using the
     *   current colorMode().
     *   @param color color as a p5.Color object.
     *   @chainable
     */
    function ambientLight(color: p5.Color): p5;

    /**
     *   Sets the specular color for lights.
     *   specularColor() affects lights that bounce off a
     *   surface in a preferred direction. These lights
     *   include directionalLight(), pointLight(), and
     *   spotLight(). The function helps to create
     *   highlights on p5.Geometry objects that are styled
     *   with specularMaterial(). If a geometry does not
     *   use specularMaterial(), then specularColor() will
     *   have no effect.
     *
     *   Note: specularColor() doesn’t affect lights that
     *   bounce in all directions, including ambientLight()
     *   and imageLight().
     *
     *   There are three ways to call specularColor() with
     *   optional parameters to set the specular highlight
     *   color.
     *
     *   The first way to call specularColor() has two
     *   optional parameters, gray and alpha. Grayscale and
     *   alpha values between 0 and 255, as in
     *   specularColor(50) or specularColor(50, 80), can be
     *   passed to set the specular highlight color.
     *
     *   The second way to call specularColor() has one
     *   optional parameter, color. A p5.Color object, an
     *   array of color values, or a CSS color string can
     *   be passed to set the specular highlight color.
     *
     *   The third way to call specularColor() has four
     *   optional parameters, v1, v2, v3, and alpha. RGBA,
     *   HSBA, or HSLA values, as in specularColor(255, 0,
     *   0, 80), can be passed to set the specular
     *   highlight color. Color values will be interpreted
     *   using the current colorMode().
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @chainable
     */
    function specularColor(v1: number, v2: number, v3: number): p5;

    /**
     *   Sets the specular color for lights.
     *   specularColor() affects lights that bounce off a
     *   surface in a preferred direction. These lights
     *   include directionalLight(), pointLight(), and
     *   spotLight(). The function helps to create
     *   highlights on p5.Geometry objects that are styled
     *   with specularMaterial(). If a geometry does not
     *   use specularMaterial(), then specularColor() will
     *   have no effect.
     *
     *   Note: specularColor() doesn’t affect lights that
     *   bounce in all directions, including ambientLight()
     *   and imageLight().
     *
     *   There are three ways to call specularColor() with
     *   optional parameters to set the specular highlight
     *   color.
     *
     *   The first way to call specularColor() has two
     *   optional parameters, gray and alpha. Grayscale and
     *   alpha values between 0 and 255, as in
     *   specularColor(50) or specularColor(50, 80), can be
     *   passed to set the specular highlight color.
     *
     *   The second way to call specularColor() has one
     *   optional parameter, color. A p5.Color object, an
     *   array of color values, or a CSS color string can
     *   be passed to set the specular highlight color.
     *
     *   The third way to call specularColor() has four
     *   optional parameters, v1, v2, v3, and alpha. RGBA,
     *   HSBA, or HSLA values, as in specularColor(255, 0,
     *   0, 80), can be passed to set the specular
     *   highlight color. Color values will be interpreted
     *   using the current colorMode().
     *   @param gray grayscale value between 0 and 255.
     *   @chainable
     */
    function specularColor(gray: number): p5;

    /**
     *   Sets the specular color for lights.
     *   specularColor() affects lights that bounce off a
     *   surface in a preferred direction. These lights
     *   include directionalLight(), pointLight(), and
     *   spotLight(). The function helps to create
     *   highlights on p5.Geometry objects that are styled
     *   with specularMaterial(). If a geometry does not
     *   use specularMaterial(), then specularColor() will
     *   have no effect.
     *
     *   Note: specularColor() doesn’t affect lights that
     *   bounce in all directions, including ambientLight()
     *   and imageLight().
     *
     *   There are three ways to call specularColor() with
     *   optional parameters to set the specular highlight
     *   color.
     *
     *   The first way to call specularColor() has two
     *   optional parameters, gray and alpha. Grayscale and
     *   alpha values between 0 and 255, as in
     *   specularColor(50) or specularColor(50, 80), can be
     *   passed to set the specular highlight color.
     *
     *   The second way to call specularColor() has one
     *   optional parameter, color. A p5.Color object, an
     *   array of color values, or a CSS color string can
     *   be passed to set the specular highlight color.
     *
     *   The third way to call specularColor() has four
     *   optional parameters, v1, v2, v3, and alpha. RGBA,
     *   HSBA, or HSLA values, as in specularColor(255, 0,
     *   0, 80), can be passed to set the specular
     *   highlight color. Color values will be interpreted
     *   using the current colorMode().
     *   @param value color as a CSS string.
     *   @chainable
     */
    function specularColor(value: string): p5;

    /**
     *   Sets the specular color for lights.
     *   specularColor() affects lights that bounce off a
     *   surface in a preferred direction. These lights
     *   include directionalLight(), pointLight(), and
     *   spotLight(). The function helps to create
     *   highlights on p5.Geometry objects that are styled
     *   with specularMaterial(). If a geometry does not
     *   use specularMaterial(), then specularColor() will
     *   have no effect.
     *
     *   Note: specularColor() doesn’t affect lights that
     *   bounce in all directions, including ambientLight()
     *   and imageLight().
     *
     *   There are three ways to call specularColor() with
     *   optional parameters to set the specular highlight
     *   color.
     *
     *   The first way to call specularColor() has two
     *   optional parameters, gray and alpha. Grayscale and
     *   alpha values between 0 and 255, as in
     *   specularColor(50) or specularColor(50, 80), can be
     *   passed to set the specular highlight color.
     *
     *   The second way to call specularColor() has one
     *   optional parameter, color. A p5.Color object, an
     *   array of color values, or a CSS color string can
     *   be passed to set the specular highlight color.
     *
     *   The third way to call specularColor() has four
     *   optional parameters, v1, v2, v3, and alpha. RGBA,
     *   HSBA, or HSLA values, as in specularColor(255, 0,
     *   0, 80), can be passed to set the specular
     *   highlight color. Color values will be interpreted
     *   using the current colorMode().
     *   @param values color as an array of RGBA, HSBA, or
     *   HSLA values.
     *   @chainable
     */
    function specularColor(values: number[]): p5;

    /**
     *   Sets the specular color for lights.
     *   specularColor() affects lights that bounce off a
     *   surface in a preferred direction. These lights
     *   include directionalLight(), pointLight(), and
     *   spotLight(). The function helps to create
     *   highlights on p5.Geometry objects that are styled
     *   with specularMaterial(). If a geometry does not
     *   use specularMaterial(), then specularColor() will
     *   have no effect.
     *
     *   Note: specularColor() doesn’t affect lights that
     *   bounce in all directions, including ambientLight()
     *   and imageLight().
     *
     *   There are three ways to call specularColor() with
     *   optional parameters to set the specular highlight
     *   color.
     *
     *   The first way to call specularColor() has two
     *   optional parameters, gray and alpha. Grayscale and
     *   alpha values between 0 and 255, as in
     *   specularColor(50) or specularColor(50, 80), can be
     *   passed to set the specular highlight color.
     *
     *   The second way to call specularColor() has one
     *   optional parameter, color. A p5.Color object, an
     *   array of color values, or a CSS color string can
     *   be passed to set the specular highlight color.
     *
     *   The third way to call specularColor() has four
     *   optional parameters, v1, v2, v3, and alpha. RGBA,
     *   HSBA, or HSLA values, as in specularColor(255, 0,
     *   0, 80), can be passed to set the specular
     *   highlight color. Color values will be interpreted
     *   using the current colorMode().
     *   @param color color as a p5.Color object.
     *   @chainable
     */
    function specularColor(color: p5.Color): p5;

    /**
     *   Creates a light that shines in one direction.
     *   Directional lights don’t shine from a specific
     *   point. They’re like a sun that shines from
     *   somewhere offscreen. The light’s direction is set
     *   using three (x, y, z) values between -1 and 1. For
     *   example, setting a light’s direction as (1, 0, 0)
     *   will light p5.Geometry objects from the left since
     *   the light faces directly to the right. A maximum
     *   of 5 directional lights can be active at once.
     *
     *   There are four ways to call directionalLight()
     *   with parameters to set the light’s color and
     *   direction.
     *
     *   The first way to call directionalLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s direction. For example,
     *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
     *   (255, 0, 0) light that shines to the right (1, 0,
     *   0).
     *
     *   The second way to call directionalLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, direction sets
     *   the light’s direction using a p5.Geometry object.
     *   For example, directionalLight(255, 0, 0, lightDir)
     *   creates a red (255, 0, 0) light that shines in the
     *   direction the lightDir vector points.
     *
     *   The third way to call directionalLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s direction. For example,
     *   directionalLight(myColor, 1, 0, 0) creates a light
     *   that shines to the right (1, 0, 0) with the color
     *   value of myColor.
     *
     *   The fourth way to call directionalLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, direction,
     *   sets the light’s direction using a p5.Color
     *   object. For example, directionalLight(myColor,
     *   lightDir) creates a light that shines in the
     *   direction the lightDir vector points with the
     *   color value of myColor.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param x x-component of the light's direction
     *   between -1 and 1.
     *   @param y y-component of the light's direction
     *   between -1 and 1.
     *   @param z z-component of the light's direction
     *   between -1 and 1.
     *   @chainable
     */
    function directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

    /**
     *   Creates a light that shines in one direction.
     *   Directional lights don’t shine from a specific
     *   point. They’re like a sun that shines from
     *   somewhere offscreen. The light’s direction is set
     *   using three (x, y, z) values between -1 and 1. For
     *   example, setting a light’s direction as (1, 0, 0)
     *   will light p5.Geometry objects from the left since
     *   the light faces directly to the right. A maximum
     *   of 5 directional lights can be active at once.
     *
     *   There are four ways to call directionalLight()
     *   with parameters to set the light’s color and
     *   direction.
     *
     *   The first way to call directionalLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s direction. For example,
     *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
     *   (255, 0, 0) light that shines to the right (1, 0,
     *   0).
     *
     *   The second way to call directionalLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, direction sets
     *   the light’s direction using a p5.Geometry object.
     *   For example, directionalLight(255, 0, 0, lightDir)
     *   creates a red (255, 0, 0) light that shines in the
     *   direction the lightDir vector points.
     *
     *   The third way to call directionalLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s direction. For example,
     *   directionalLight(myColor, 1, 0, 0) creates a light
     *   that shines to the right (1, 0, 0) with the color
     *   value of myColor.
     *
     *   The fourth way to call directionalLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, direction,
     *   sets the light’s direction using a p5.Color
     *   object. For example, directionalLight(myColor,
     *   lightDir) creates a light that shines in the
     *   direction the lightDir vector points with the
     *   color value of myColor.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param direction direction of the light as a
     *   p5.Vector object.
     *   @chainable
     */
    function directionalLight(v1: number, v2: number, v3: number, direction: p5.Vector): p5;

    /**
     *   Creates a light that shines in one direction.
     *   Directional lights don’t shine from a specific
     *   point. They’re like a sun that shines from
     *   somewhere offscreen. The light’s direction is set
     *   using three (x, y, z) values between -1 and 1. For
     *   example, setting a light’s direction as (1, 0, 0)
     *   will light p5.Geometry objects from the left since
     *   the light faces directly to the right. A maximum
     *   of 5 directional lights can be active at once.
     *
     *   There are four ways to call directionalLight()
     *   with parameters to set the light’s color and
     *   direction.
     *
     *   The first way to call directionalLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s direction. For example,
     *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
     *   (255, 0, 0) light that shines to the right (1, 0,
     *   0).
     *
     *   The second way to call directionalLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, direction sets
     *   the light’s direction using a p5.Geometry object.
     *   For example, directionalLight(255, 0, 0, lightDir)
     *   creates a red (255, 0, 0) light that shines in the
     *   direction the lightDir vector points.
     *
     *   The third way to call directionalLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s direction. For example,
     *   directionalLight(myColor, 1, 0, 0) creates a light
     *   that shines to the right (1, 0, 0) with the color
     *   value of myColor.
     *
     *   The fourth way to call directionalLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, direction,
     *   sets the light’s direction using a p5.Color
     *   object. For example, directionalLight(myColor,
     *   lightDir) creates a light that shines in the
     *   direction the lightDir vector points with the
     *   color value of myColor.
     *   @param color color as a p5.Color object, an array
     *   of color values, or as a CSS string.
     *   @param x x-component of the light's direction
     *   between -1 and 1.
     *   @param y y-component of the light's direction
     *   between -1 and 1.
     *   @param z z-component of the light's direction
     *   between -1 and 1.
     *   @chainable
     */
    function directionalLight(color: p5.Color | number[] | string, x: number, y: number, z: number): p5;

    /**
     *   Creates a light that shines in one direction.
     *   Directional lights don’t shine from a specific
     *   point. They’re like a sun that shines from
     *   somewhere offscreen. The light’s direction is set
     *   using three (x, y, z) values between -1 and 1. For
     *   example, setting a light’s direction as (1, 0, 0)
     *   will light p5.Geometry objects from the left since
     *   the light faces directly to the right. A maximum
     *   of 5 directional lights can be active at once.
     *
     *   There are four ways to call directionalLight()
     *   with parameters to set the light’s color and
     *   direction.
     *
     *   The first way to call directionalLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s direction. For example,
     *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
     *   (255, 0, 0) light that shines to the right (1, 0,
     *   0).
     *
     *   The second way to call directionalLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, direction sets
     *   the light’s direction using a p5.Geometry object.
     *   For example, directionalLight(255, 0, 0, lightDir)
     *   creates a red (255, 0, 0) light that shines in the
     *   direction the lightDir vector points.
     *
     *   The third way to call directionalLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s direction. For example,
     *   directionalLight(myColor, 1, 0, 0) creates a light
     *   that shines to the right (1, 0, 0) with the color
     *   value of myColor.
     *
     *   The fourth way to call directionalLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, direction,
     *   sets the light’s direction using a p5.Color
     *   object. For example, directionalLight(myColor,
     *   lightDir) creates a light that shines in the
     *   direction the lightDir vector points with the
     *   color value of myColor.
     *   @param color color as a p5.Color object, an array
     *   of color values, or as a CSS string.
     *   @param direction direction of the light as a
     *   p5.Vector object.
     *   @chainable
     */
    function directionalLight(color: p5.Color | number[] | string, direction: p5.Vector): p5;

    /**
     *   Creates a light that shines from a point in all
     *   directions. Point lights are like light bulbs that
     *   shine in all directions. They can be placed at
     *   different positions to achieve different lighting
     *   effects. A maximum of 5 point lights can be active
     *   at once.
     *
     *   There are four ways to call pointLight() with
     *   parameters to set the light’s color and position.
     *
     *   The first way to call pointLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s position. For example,
     *   pointLight(255, 0, 0, 50, 0, 0) creates a red
     *   (255, 0, 0) light that shines from the coordinates
     *   (50, 0, 0).
     *
     *   The second way to call pointLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, position sets the
     *   light’s position using a p5.Vector object. For
     *   example, pointLight(255, 0, 0, lightPos) creates a
     *   red (255, 0, 0) light that shines from the
     *   position set by the lightPos vector.
     *
     *   The third way to call pointLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s position. For example,
     *   directionalLight(myColor, 50, 0, 0) creates a
     *   light that shines from the coordinates (50, 0, 0)
     *   with the color value of myColor.
     *
     *   The fourth way to call pointLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, position,
     *   sets the light’s position using a p5.Vector
     *   object. For example, directionalLight(myColor,
     *   lightPos) creates a light that shines from the
     *   position set by the lightPos vector with the color
     *   value of myColor.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @chainable
     */
    function pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

    /**
     *   Creates a light that shines from a point in all
     *   directions. Point lights are like light bulbs that
     *   shine in all directions. They can be placed at
     *   different positions to achieve different lighting
     *   effects. A maximum of 5 point lights can be active
     *   at once.
     *
     *   There are four ways to call pointLight() with
     *   parameters to set the light’s color and position.
     *
     *   The first way to call pointLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s position. For example,
     *   pointLight(255, 0, 0, 50, 0, 0) creates a red
     *   (255, 0, 0) light that shines from the coordinates
     *   (50, 0, 0).
     *
     *   The second way to call pointLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, position sets the
     *   light’s position using a p5.Vector object. For
     *   example, pointLight(255, 0, 0, lightPos) creates a
     *   red (255, 0, 0) light that shines from the
     *   position set by the lightPos vector.
     *
     *   The third way to call pointLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s position. For example,
     *   directionalLight(myColor, 50, 0, 0) creates a
     *   light that shines from the coordinates (50, 0, 0)
     *   with the color value of myColor.
     *
     *   The fourth way to call pointLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, position,
     *   sets the light’s position using a p5.Vector
     *   object. For example, directionalLight(myColor,
     *   lightPos) creates a light that shines from the
     *   position set by the lightPos vector with the color
     *   value of myColor.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @chainable
     */
    function pointLight(v1: number, v2: number, v3: number, position: p5.Vector): p5;

    /**
     *   Creates a light that shines from a point in all
     *   directions. Point lights are like light bulbs that
     *   shine in all directions. They can be placed at
     *   different positions to achieve different lighting
     *   effects. A maximum of 5 point lights can be active
     *   at once.
     *
     *   There are four ways to call pointLight() with
     *   parameters to set the light’s color and position.
     *
     *   The first way to call pointLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s position. For example,
     *   pointLight(255, 0, 0, 50, 0, 0) creates a red
     *   (255, 0, 0) light that shines from the coordinates
     *   (50, 0, 0).
     *
     *   The second way to call pointLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, position sets the
     *   light’s position using a p5.Vector object. For
     *   example, pointLight(255, 0, 0, lightPos) creates a
     *   red (255, 0, 0) light that shines from the
     *   position set by the lightPos vector.
     *
     *   The third way to call pointLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s position. For example,
     *   directionalLight(myColor, 50, 0, 0) creates a
     *   light that shines from the coordinates (50, 0, 0)
     *   with the color value of myColor.
     *
     *   The fourth way to call pointLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, position,
     *   sets the light’s position using a p5.Vector
     *   object. For example, directionalLight(myColor,
     *   lightPos) creates a light that shines from the
     *   position set by the lightPos vector with the color
     *   value of myColor.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @chainable
     */
    function pointLight(color: p5.Color | number[] | string, x: number, y: number, z: number): p5;

    /**
     *   Creates a light that shines from a point in all
     *   directions. Point lights are like light bulbs that
     *   shine in all directions. They can be placed at
     *   different positions to achieve different lighting
     *   effects. A maximum of 5 point lights can be active
     *   at once.
     *
     *   There are four ways to call pointLight() with
     *   parameters to set the light’s color and position.
     *
     *   The first way to call pointLight() has six
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last three parameters, x, y, and
     *   z, set the light’s position. For example,
     *   pointLight(255, 0, 0, 50, 0, 0) creates a red
     *   (255, 0, 0) light that shines from the coordinates
     *   (50, 0, 0).
     *
     *   The second way to call pointLight() has four
     *   parameters. The first three parameters, v1, v2,
     *   and v3, set the light’s color using the current
     *   colorMode(). The last parameter, position sets the
     *   light’s position using a p5.Vector object. For
     *   example, pointLight(255, 0, 0, lightPos) creates a
     *   red (255, 0, 0) light that shines from the
     *   position set by the lightPos vector.
     *
     *   The third way to call pointLight() has four
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The last three parameters, x, y,
     *   and z, set the light’s position. For example,
     *   directionalLight(myColor, 50, 0, 0) creates a
     *   light that shines from the coordinates (50, 0, 0)
     *   with the color value of myColor.
     *
     *   The fourth way to call pointLight() has two
     *   parameters. The first parameter, color, sets the
     *   light’s color using a p5.Color object or an array
     *   of color values. The second parameter, position,
     *   sets the light’s position using a p5.Vector
     *   object. For example, directionalLight(myColor,
     *   lightPos) creates a light that shines from the
     *   position set by the lightPos vector with the color
     *   value of myColor.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @chainable
     */
    function pointLight(color: p5.Color | number[] | string, position: p5.Vector): p5;

    // TODO: Fix imageLight() errors in src/webgl/light.js, line 956:
    //
    //    param "img" has invalid type: p5.image
    //
    // function imageLight(img: p5.image): void

    /**
     *   Creates an immersive 3D background. panorama()
     *   transforms images containing 360˚ content, such as
     *   maps or HDRIs, into immersive 3D backgrounds that
     *   surround a sketch. Exploring the space requires
     *   changing the camera's perspective with functions
     *   such as orbitControl() or camera().
     *   @param img 360˚ image to use as the background.
     */
    function panorama(img: p5.Image): void;

    /**
     *   Places an ambient and directional light in the
     *   scene. The lights are set to ambientLight(128,
     *   128, 128) and directionalLight(128, 128, 128, 0,
     *   0, -1). Note: lights need to be called (whether
     *   directly or indirectly) within draw() to remain
     *   persistent in a looping program. Placing them in
     *   setup() will cause them to only have an effect the
     *   first time through the loop.
     *   @chainable
     */
    function lights(): p5;

    /**
     *   Sets the falloff rate for pointLight() and
     *   spotLight(). A light’s falloff describes the
     *   intensity of its beam at a distance. For example,
     *   a lantern has a slow falloff, a flashlight has a
     *   medium falloff, and a laser pointer has a sharp
     *   falloff.
     *
     *   lightFalloff() has three parameters, constant,
     *   linear, and quadratic. They’re numbers used to
     *   calculate falloff at a distance, d, as follows:
     *
     *   falloff = 1 / (constant + d * linear + (d * d) *
     *   quadratic)
     *
     *   Note: constant, linear, and quadratic should
     *   always be set to values greater than 0.
     *   @param constant constant value for calculating
     *   falloff.
     *   @param linear linear value for calculating
     *   falloff.
     *   @param quadratic quadratic value for calculating
     *   falloff.
     *   @chainable
     */
    function lightFalloff(constant: number, linear: number, quadratic: number): p5;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @param rx x-component of light direction between
     *   -1 and 1.
     *   @param ry y-component of light direction between
     *   -1 and 1.
     *   @param rz z-component of light direction between
     *   -1 and 1.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     *   @chainable
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        x: number,
        y: number,
        z: number,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): p5;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @param direction direction of light as a p5.Vector
     *   object.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        color: p5.Color | number[] | string,
        position: p5.Vector,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @param direction direction of light as a p5.Vector
     *   object.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        position: p5.Vector,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @param direction direction of light as a p5.Vector
     *   object.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        color: p5.Color | number[] | string,
        x: number,
        y: number,
        z: number,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @param rx x-component of light direction between
     *   -1 and 1.
     *   @param ry y-component of light direction between
     *   -1 and 1.
     *   @param rz z-component of light direction between
     *   -1 and 1.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        color: p5.Color | number[] | string,
        position: p5.Vector,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @param direction direction of light as a p5.Vector
     *   object.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        x: number,
        y: number,
        z: number,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param position position of the light as a
     *   p5.Vector object.
     *   @param rx x-component of light direction between
     *   -1 and 1.
     *   @param ry y-component of light direction between
     *   -1 and 1.
     *   @param rz z-component of light direction between
     *   -1 and 1.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        position: p5.Vector,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a light that shines from a point in one
     *   direction. Spot lights are like flashlights that
     *   shine in one direction creating a cone of light.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters. A maximum of 5
     *   spot lights can be active at once.
     *
     *   There are eight ways to call spotLight() with
     *   parameters to set the light’s color, position,
     *   direction. For example, spotLight(255, 0, 0, 0, 0,
     *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
     *   origin (0, 0, 0) that points to the right (1, 0,
     *   0).
     *
     *   The angle parameter is optional. It sets the
     *   radius of the light cone. For example,
     *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
     *   creates a red (255, 0, 0) light at the origin (0,
     *   0, 0) that points to the right (1, 0, 0) with an
     *   angle of PI / 16 radians. By default, angle is PI
     *   / 3 radians.
     *
     *   The concentration parameter is also optional. It
     *   focuses the light towards the center of the light
     *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
     *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
     *   light at the origin (0, 0, 0) that points to the
     *   right (1, 0, 0) with an angle of PI / 16 radians
     *   at concentration of 50. By default, concentration
     *   is 100.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @param x x-coordinate of the light.
     *   @param y y-coordinate of the light.
     *   @param z z-coordinate of the light.
     *   @param rx x-component of light direction between
     *   -1 and 1.
     *   @param ry y-component of light direction between
     *   -1 and 1.
     *   @param rz z-component of light direction between
     *   -1 and 1.
     *   @param [angle] angle of the light cone. Defaults
     *   to PI / 3.
     *   @param [concentration] concentration of the light.
     *   Defaults to 100.
     */
    function spotLight(
        color: p5.Color | number[] | string,
        x: number,
        y: number,
        z: number,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Removes all lights from the sketch. Calling
     *   noLights() removes any lights created with
     *   lights(), ambientLight(), directionalLight(),
     *   pointLight(), or spotLight(). These functions may
     *   be called after noLights() to create a new
     *   lighting scheme.
     *   @chainable
     */
    function noLights(): p5;

    /**
     *   Loads a 3D model to create a p5.Geometry object.
     *   loadModel() can load 3D models from OBJ and STL
     *   files. Once the model is loaded, it can be
     *   displayed with the model() function, as in
     *   model(shape).
     *
     *   There are three ways to call loadModel() with
     *   optional parameters to help process the model.
     *
     *   The first parameter, path, is always a String with
     *   the path to the file. Paths to local files should
     *   be relative, as in loadModel('assets/model.obj').
     *   URLs such as 'https://example.com/model.obj' may
     *   be blocked due to browser security.
     *
     *   Note: When loading a .obj file that references
     *   materials stored in .mtl files, p5.js will attempt
     *   to load and apply those materials. To ensure that
     *   the .obj file reads the .mtl file correctly
     *   include the .mtl file alongside it.
     *
     *   The first way to call loadModel() has three
     *   optional parameters after the file path. The first
     *   optional parameter, successCallback, is a function
     *   to call once the model loads. For example,
     *   loadModel('assets/model.obj', handleModel) will
     *   call the handleModel() function once the model
     *   loads. The second optional parameter,
     *   failureCallback, is a function to call if the
     *   model fails to load. For example,
     *   loadModel('assets/model.obj', handleModel,
     *   handleFailure) will call the handleFailure()
     *   function if an error occurs while loading. The
     *   third optional parameter, fileType, is the model’s
     *   file extension as a string. For example,
     *   loadModel('assets/model', handleModel,
     *   handleFailure, '.obj') will try to load the file
     *   model as a .obj file.
     *
     *   The second way to call loadModel() has four
     *   optional parameters after the file path. The first
     *   optional parameter is a Boolean value. If true is
     *   passed, as in loadModel('assets/model.obj', true),
     *   then the model will be resized to ensure it fits
     *   the canvas. The next three parameters are
     *   successCallback, failureCallback, and fileType as
     *   described above.
     *
     *   The third way to call loadModel() has one optional
     *   parameter after the file path. The optional
     *   parameter, options, is an Object with options, as
     *   in loadModel('assets/model.obj', options). The
     *   options object can have the following properties:
     *
     *   let options = { // Enables standardized size
     *   scaling during loading if set to true. normalize:
     *   true, // Function to call once the model loads.
     *   successCallback: handleModel, // Function to call
     *   if an error occurs while loading. failureCallback:
     *   handleError, // Model's file extension. fileType:
     *   '.stl', // Flips the U texture coordinates of the
     *   model. flipU: false, // Flips the V texture
     *   coordinates of the model. flipV: false }; // Pass
     *   the options object to loadModel().
     *   loadModel('assets/model.obj', options);
     *
     *   Models can take time to load. Calling loadModel()
     *   in preload() ensures models load before they're
     *   used in setup() or draw().
     *
     *   Note: There’s no support for colored STL files.
     *   STL files with color will be rendered without
     *   color.
     *   @param path path of the model to be loaded.
     *   @param normalize if true, scale the model to fit
     *   the canvas.
     *   @param [successCallback] function to call once the
     *   model is loaded. Will be passed the p5.Geometry
     *   object.
     *   @param [failureCallback] function to call if the
     *   model fails to load. Will be passed an Error event
     *   object.
     *   @param [fileType] model’s file extension. Either
     *   '.obj' or '.stl'.
     *   @return the p5.Geometry object
     */
    function loadModel(
        path: string,
        normalize: boolean,
        successCallback?: (p1: p5.Geometry) => any,
        failureCallback?: (p1: Event) => any,
        fileType?: string
    ): p5.Geometry;

    /**
     *   Loads a 3D model to create a p5.Geometry object.
     *   loadModel() can load 3D models from OBJ and STL
     *   files. Once the model is loaded, it can be
     *   displayed with the model() function, as in
     *   model(shape).
     *
     *   There are three ways to call loadModel() with
     *   optional parameters to help process the model.
     *
     *   The first parameter, path, is always a String with
     *   the path to the file. Paths to local files should
     *   be relative, as in loadModel('assets/model.obj').
     *   URLs such as 'https://example.com/model.obj' may
     *   be blocked due to browser security.
     *
     *   Note: When loading a .obj file that references
     *   materials stored in .mtl files, p5.js will attempt
     *   to load and apply those materials. To ensure that
     *   the .obj file reads the .mtl file correctly
     *   include the .mtl file alongside it.
     *
     *   The first way to call loadModel() has three
     *   optional parameters after the file path. The first
     *   optional parameter, successCallback, is a function
     *   to call once the model loads. For example,
     *   loadModel('assets/model.obj', handleModel) will
     *   call the handleModel() function once the model
     *   loads. The second optional parameter,
     *   failureCallback, is a function to call if the
     *   model fails to load. For example,
     *   loadModel('assets/model.obj', handleModel,
     *   handleFailure) will call the handleFailure()
     *   function if an error occurs while loading. The
     *   third optional parameter, fileType, is the model’s
     *   file extension as a string. For example,
     *   loadModel('assets/model', handleModel,
     *   handleFailure, '.obj') will try to load the file
     *   model as a .obj file.
     *
     *   The second way to call loadModel() has four
     *   optional parameters after the file path. The first
     *   optional parameter is a Boolean value. If true is
     *   passed, as in loadModel('assets/model.obj', true),
     *   then the model will be resized to ensure it fits
     *   the canvas. The next three parameters are
     *   successCallback, failureCallback, and fileType as
     *   described above.
     *
     *   The third way to call loadModel() has one optional
     *   parameter after the file path. The optional
     *   parameter, options, is an Object with options, as
     *   in loadModel('assets/model.obj', options). The
     *   options object can have the following properties:
     *
     *   let options = { // Enables standardized size
     *   scaling during loading if set to true. normalize:
     *   true, // Function to call once the model loads.
     *   successCallback: handleModel, // Function to call
     *   if an error occurs while loading. failureCallback:
     *   handleError, // Model's file extension. fileType:
     *   '.stl', // Flips the U texture coordinates of the
     *   model. flipU: false, // Flips the V texture
     *   coordinates of the model. flipV: false }; // Pass
     *   the options object to loadModel().
     *   loadModel('assets/model.obj', options);
     *
     *   Models can take time to load. Calling loadModel()
     *   in preload() ensures models load before they're
     *   used in setup() or draw().
     *
     *   Note: There’s no support for colored STL files.
     *   STL files with color will be rendered without
     *   color.
     *   @param path path of the model to be loaded.
     *   @param [successCallback] function to call once the
     *   model is loaded. Will be passed the p5.Geometry
     *   object.
     *   @param [failureCallback] function to call if the
     *   model fails to load. Will be passed an Error event
     *   object.
     *   @param [fileType] model’s file extension. Either
     *   '.obj' or '.stl'.
     *   @return new p5.Geometry object.
     */
    function loadModel(
        path: string,
        successCallback?: (p1: p5.Geometry) => any,
        failureCallback?: (p1: Event) => any,
        fileType?: string
    ): p5.Geometry;

    /**
     *   Loads a 3D model to create a p5.Geometry object.
     *   loadModel() can load 3D models from OBJ and STL
     *   files. Once the model is loaded, it can be
     *   displayed with the model() function, as in
     *   model(shape).
     *
     *   There are three ways to call loadModel() with
     *   optional parameters to help process the model.
     *
     *   The first parameter, path, is always a String with
     *   the path to the file. Paths to local files should
     *   be relative, as in loadModel('assets/model.obj').
     *   URLs such as 'https://example.com/model.obj' may
     *   be blocked due to browser security.
     *
     *   Note: When loading a .obj file that references
     *   materials stored in .mtl files, p5.js will attempt
     *   to load and apply those materials. To ensure that
     *   the .obj file reads the .mtl file correctly
     *   include the .mtl file alongside it.
     *
     *   The first way to call loadModel() has three
     *   optional parameters after the file path. The first
     *   optional parameter, successCallback, is a function
     *   to call once the model loads. For example,
     *   loadModel('assets/model.obj', handleModel) will
     *   call the handleModel() function once the model
     *   loads. The second optional parameter,
     *   failureCallback, is a function to call if the
     *   model fails to load. For example,
     *   loadModel('assets/model.obj', handleModel,
     *   handleFailure) will call the handleFailure()
     *   function if an error occurs while loading. The
     *   third optional parameter, fileType, is the model’s
     *   file extension as a string. For example,
     *   loadModel('assets/model', handleModel,
     *   handleFailure, '.obj') will try to load the file
     *   model as a .obj file.
     *
     *   The second way to call loadModel() has four
     *   optional parameters after the file path. The first
     *   optional parameter is a Boolean value. If true is
     *   passed, as in loadModel('assets/model.obj', true),
     *   then the model will be resized to ensure it fits
     *   the canvas. The next three parameters are
     *   successCallback, failureCallback, and fileType as
     *   described above.
     *
     *   The third way to call loadModel() has one optional
     *   parameter after the file path. The optional
     *   parameter, options, is an Object with options, as
     *   in loadModel('assets/model.obj', options). The
     *   options object can have the following properties:
     *
     *   let options = { // Enables standardized size
     *   scaling during loading if set to true. normalize:
     *   true, // Function to call once the model loads.
     *   successCallback: handleModel, // Function to call
     *   if an error occurs while loading. failureCallback:
     *   handleError, // Model's file extension. fileType:
     *   '.stl', // Flips the U texture coordinates of the
     *   model. flipU: false, // Flips the V texture
     *   coordinates of the model. flipV: false }; // Pass
     *   the options object to loadModel().
     *   loadModel('assets/model.obj', options);
     *
     *   Models can take time to load. Calling loadModel()
     *   in preload() ensures models load before they're
     *   used in setup() or draw().
     *
     *   Note: There’s no support for colored STL files.
     *   STL files with color will be rendered without
     *   color.
     *   @param path path of the model to be loaded.
     *   @param [options] loading options.
     *   @return new p5.Geometry object.
     */
    function loadModel(path: string, options?: object): p5.Geometry;

    /**
     *   Draws a p5.Geometry object to the canvas. The
     *   parameter, model, is the p5.Geometry object to
     *   draw. p5.Geometry objects can be built with
     *   buildGeometry(), or beginGeometry() and
     *   endGeometry(). They can also be loaded from a file
     *   with loadGeometry().
     *
     *   Note: model() can only be used in WebGL mode.
     *   @param model 3D shape to be drawn.
     */
    function model(model: p5.Geometry): void;

    // TODO: Fix createModel() errors in src/webgl/loading.js, line 1134:
    //
    //    required param "normalize" follows an optional param
    //
    // function createModel(modelString: string, fileType?: string, normalize: boolean, successCallback?: (p1: p5.Geometry) => any, failureCallback?: (p1: Event) => any): p5.Geometry

    /**
     *   Load a 3d model from an OBJ or STL string. OBJ and
     *   STL files lack a built-in sense of scale, causing
     *   models exported from different programs to vary in
     *   size. If your model doesn't display correctly,
     *   consider using loadModel() with normalize set to
     *   true to standardize its size. Further adjustments
     *   can be made using the scale() function.
     *
     *   Also, the support for colored STL files is not
     *   present. STL files with color will be rendered
     *   without color properties.
     *
     *   - Options can include:
     *
     *   - modelString: Specifies the plain text string of
     *   either an stl or obj file to be loaded.
     *   - fileType: Defines the file extension of the
     *   model.
     *   - normalize: Enables standardized size scaling
     *   during loading if set to true.
     *   - successCallback: Callback for post-loading
     *   actions with the 3D model object.
     *   - failureCallback: Handles errors if model loading
     *   fails, receiving an event error.
     *   - flipU: Flips the U texture coordinates of the
     *   model.
     *   - flipV: Flips the V texture coordinates of the
     *   model.
     *   @param modelString String of the object to be
     *   loaded
     *   @param [fileType] The file extension of the model
     *   (.stl, .obj).
     *   @param [successCallback] Function to be called
     *   once the model is loaded. Will be passed the 3D
     *   model object.
     *   @param [failureCallback] called with event error
     *   if the model fails to load.
     *   @return the p5.Geometry object
     */
    function createModel(
        modelString: string,
        fileType?: string,
        successCallback?: (p1: p5.Geometry) => any,
        failureCallback?: (p1: Event) => any
    ): p5.Geometry;

    /**
     *   Load a 3d model from an OBJ or STL string. OBJ and
     *   STL files lack a built-in sense of scale, causing
     *   models exported from different programs to vary in
     *   size. If your model doesn't display correctly,
     *   consider using loadModel() with normalize set to
     *   true to standardize its size. Further adjustments
     *   can be made using the scale() function.
     *
     *   Also, the support for colored STL files is not
     *   present. STL files with color will be rendered
     *   without color properties.
     *
     *   - Options can include:
     *
     *   - modelString: Specifies the plain text string of
     *   either an stl or obj file to be loaded.
     *   - fileType: Defines the file extension of the
     *   model.
     *   - normalize: Enables standardized size scaling
     *   during loading if set to true.
     *   - successCallback: Callback for post-loading
     *   actions with the 3D model object.
     *   - failureCallback: Handles errors if model loading
     *   fails, receiving an event error.
     *   - flipU: Flips the U texture coordinates of the
     *   model.
     *   - flipV: Flips the V texture coordinates of the
     *   model.
     *   @param modelString String of the object to be
     *   loaded
     *   @param [fileType] The file extension of the model
     *   (.stl, .obj).
     *   @return the p5.Geometry object
     */
    function createModel(modelString: string, fileType?: string, options?: object): p5.Geometry;

    /**
     *   Loads vertex and fragment shaders to create a
     *   p5.Shader object. Shaders are programs that run on
     *   the graphics processing unit (GPU). They can
     *   process many pixels at the same time, making them
     *   fast for many graphics tasks. They’re written in a
     *   language called GLSL and run along with the rest
     *   of the code in a sketch.
     *
     *   Once the p5.Shader object is created, it can be
     *   used with the shader() function, as in
     *   shader(myShader). A shader program consists of two
     *   files, a vertex shader and a fragment shader. The
     *   vertex shader affects where 3D geometry is drawn
     *   on the screen and the fragment shader affects
     *   color.
     *
     *   loadShader() loads the vertex and fragment shaders
     *   from their .vert and .frag files. For example,
     *   calling loadShader('assets/shader.vert',
     *   'assets/shader.frag') loads both required shaders
     *   and returns a p5.Shader object.
     *
     *   The third parameter, successCallback, is optional.
     *   If a function is passed, it will be called once
     *   the shader has loaded. The callback function can
     *   use the new p5.Shader object as its parameter.
     *
     *   The fourth parameter, failureCallback, is also
     *   optional. If a function is passed, it will be
     *   called if the shader fails to load. The callback
     *   function can use the event error as its parameter.
     *
     *   Shaders can take time to load. Calling
     *   loadShader() in preload() ensures shaders load
     *   before they're used in setup() or draw().
     *
     *   Note: Shaders can only be used in WebGL mode.
     *   @param vertFilename path of the vertex shader to
     *   be loaded.
     *   @param fragFilename path of the fragment shader to
     *   be loaded.
     *   @param [successCallback] function to call once the
     *   shader is loaded. Can be passed the p5.Shader
     *   object.
     *   @param [failureCallback] function to call if the
     *   shader fails to load. Can be passed an Error event
     *   object.
     *   @return new shader created from the vertex and
     *   fragment shader files.
     */
    function loadShader(
        vertFilename: string,
        fragFilename: string,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any
    ): p5.Shader;

    /**
     *   Creates a new p5.Shader object. Shaders are
     *   programs that run on the graphics processing unit
     *   (GPU). They can process many pixels at the same
     *   time, making them fast for many graphics tasks.
     *   They’re written in a language called GLSL and run
     *   along with the rest of the code in a sketch.
     *
     *   Once the p5.Shader object is created, it can be
     *   used with the shader() function, as in
     *   shader(myShader). A shader program consists of two
     *   parts, a vertex shader and a fragment shader. The
     *   vertex shader affects where 3D geometry is drawn
     *   on the screen and the fragment shader affects
     *   color.
     *
     *   The first parameter, vertSrc, sets the vertex
     *   shader. It’s a string that contains the vertex
     *   shader program written in GLSL.
     *
     *   The second parameter, fragSrc, sets the fragment
     *   shader. It’s a string that contains the fragment
     *   shader program written in GLSL.
     *
     *   A shader can optionally describe hooks, which are
     *   functions in GLSL that users may choose to provide
     *   to customize the behavior of the shader using the
     *   modify() method of p5.Shader. These are added by
     *   describing the hooks in a third parameter,
     *   options, and referencing the hooks in your vertSrc
     *   or fragSrc. Hooks for the vertex or fragment
     *   shader are described under the vertex and fragment
     *   keys of options. Each one is an object. where each
     *   key is the type and name of a hook function, and
     *   each value is a string with the parameter list and
     *   default implementation of the hook. For example,
     *   to let users optionally run code at the start of
     *   the vertex shader, the options object could
     *   include:
     *
     *   { vertex: { 'void beforeVertex': '() {}' } }
     *
     *   Then, in your vertex shader source, you can run a
     *   hook by calling a function with the same name
     *   prefixed by HOOK_. If you want to check if the
     *   default hook has been replaced, maybe to avoid
     *   extra overhead, you can check if the same name
     *   prefixed by AUGMENTED_HOOK_ has been defined:
     *
     *   void main() { // In most cases, just calling the
     *   hook is fine: HOOK_beforeVertex(); //
     *   Alternatively, for more efficiency: #ifdef
     *   AUGMENTED_HOOK_beforeVertex HOOK_beforeVertex();
     *   #endif // Add the rest of your shader code here! }
     *
     *   Note: Only filter shaders can be used in 2D mode.
     *   All shaders can be used in WebGL mode.
     *   @param vertSrc source code for the vertex shader.
     *   @param fragSrc source code for the fragment
     *   shader.
     *   @param [options] An optional object describing how
     *   this shader can be augmented with hooks. It can
     *   include:
     *
     *   - vertex: An object describing the available
     *   vertex shader hooks.
     *   - fragment: An object describing the available
     *   frament shader hooks.
     *   @return new shader object created from the vertex
     *   and fragment shaders.
     */
    function createShader(vertSrc: string, fragSrc: string, options?: object): p5.Shader;

    /**
     *   Creates a p5.Shader object to be used with the
     *   filter() function. createFilterShader() works like
     *   createShader() but has a default vertex shader
     *   included. createFilterShader() is intended to be
     *   used along with filter() for filtering the
     *   contents of a canvas. A filter shader will be
     *   applied to the whole canvas instead of just
     *   p5.Geometry objects.
     *
     *   The parameter, fragSrc, sets the fragment shader.
     *   It’s a string that contains the fragment shader
     *   program written in GLSL.
     *
     *   The p5.Shader object that's created has some
     *   uniforms that can be set:
     *
     *   - sampler2D tex0, which contains the canvas
     *   contents as a texture.
     *   - vec2 canvasSize, which is the width and height
     *   of the canvas, not including pixel density.
     *   - vec2 texelSize, which is the size of a physical
     *   pixel including pixel density. This is calculated
     *   as 1.0 / (width * density) for the pixel width and
     *   1.0 / (height * density) for the pixel height.
     *
     *   The p5.Shader that's created also provides varying
     *   vec2 vTexCoord, a coordinate with values between 0
     *   and 1. vTexCoord describes where on the canvas the
     *   pixel will be drawn.
     *
     *   For more info about filters and shaders, see Adam
     *   Ferriss' repo of shader examples or the
     *   Introduction to Shaders tutorial.
     *   @param fragSrc source code for the fragment
     *   shader.
     *   @return new shader object created from the
     *   fragment shader.
     */
    function createFilterShader(fragSrc: string): p5.Shader;

    /**
     *   Sets the p5.Shader object to apply while drawing.
     *   Shaders are programs that run on the graphics
     *   processing unit (GPU). They can process many
     *   pixels or vertices at the same time, making them
     *   fast for many graphics tasks. They’re written in a
     *   language called GLSL and run along with the rest
     *   of the code in a sketch. p5.Shader objects can be
     *   created using the createShader() and loadShader()
     *   functions.
     *
     *   The parameter, s, is the p5.Shader object to
     *   apply. For example, calling shader(myShader)
     *   applies myShader to process each pixel on the
     *   canvas. The shader will be used for:
     *
     *   - Fills when a texture is enabled if it includes a
     *   uniform sampler2D.
     *   - Fills when lights are enabled if it includes the
     *   attribute aNormal, or if it has any of the
     *   following uniforms: uUseLighting,
     *   uAmbientLightCount, uDirectionalLightCount,
     *   uPointLightCount, uAmbientColor,
     *   uDirectionalDiffuseColors,
     *   uDirectionalSpecularColors, uPointLightLocation,
     *   uPointLightDiffuseColors,
     *   uPointLightSpecularColors, uLightingDirection, or
     *   uSpecular.
     *   - Fills whenever there are no lights or textures.
     *   - Strokes if it includes the uniform
     *   uStrokeWeight.
     *
     *   The source code from a p5.Shader object's fragment
     *   and vertex shaders will be compiled the first time
     *   it's passed to shader(). See MDN for more
     *   information about compiling shaders.
     *
     *   Calling resetShader() restores a sketch’s default
     *   shaders.
     *
     *   Note: Shaders can only be used in WebGL mode.
     *   @param s p5.Shader object to apply.
     *   @chainable
     */
    function shader(s: p5.Shader): p5;

    /**
     *   Get the default shader used with lights,
     *   materials, and textures. You can call
     *   baseMaterialShader().modify() and change any of
     *   the following hooks:  HookDescription
     *
     *   void beforeVertex
     *
     *   Called at the start of the vertex shader.
     *
     *   vec3 getLocalPosition
     *
     *   Update the position of vertices before transforms
     *   are applied. It takes in vec3 position and must
     *   return a modified version.
     *
     *   vec3 getWorldPosition
     *
     *   Update the position of vertices after transforms
     *   are applied. It takes in vec3 position and pust
     *   return a modified version.
     *
     *   vec3 getLocalNormal
     *
     *   Update the normal before transforms are applied.
     *   It takes in vec3 normal and must return a modified
     *   version.
     *
     *   vec3 getWorldNormal
     *
     *   Update the normal after transforms are applied. It
     *   takes in vec3 normal and must return a modified
     *   version.
     *
     *   vec2 getUV
     *
     *   Update the texture coordinates. It takes in vec2
     *   uv and must return a modified version.
     *
     *   vec4 getVertexColor
     *
     *   Update the color of each vertex. It takes in a
     *   vec4 color and must return a modified version.
     *
     *   void afterVertex
     *
     *   Called at the end of the vertex shader.
     *
     *   void beforeFragment
     *
     *   Called at the start of the fragment shader.
     *
     *   Inputs getPixelInputs
     *
     *   Update the per-pixel inputs of the material. It
     *   takes in an Inputs struct, which includes:
     *
     *   - vec3 normal, the direction pointing out of the
     *   surface
     *   - vec2 texCoord, a vector where x and y are
     *   between 0 and 1 describing the spot on a texture
     *   the pixel is mapped to, as a fraction of the
     *   texture size
     *   - vec3 ambientLight, the ambient light color on
     *   the vertex
     *   - vec4 color, the base material color of the pixel
     *   - vec3 ambientMaterial, the color of the pixel
     *   when affected by ambient light
     *   - vec3 specularMaterial, the color of the pixel
     *   when reflecting specular highlights
     *   - vec3 emissiveMaterial, the light color emitted
     *   by the pixel
     *   - float shininess, a number representing how sharp
     *   specular reflections should be, from 1 to infinity
     *   - float metalness, a number representing how
     *   mirrorlike the material should be, between 0 and 1
     *   The struct can be modified and returned.
     *
     *   vec4 combineColors
     *
     *   Take in a ColorComponents struct containing all
     *   the different components of light, and combining
     *   them into a single final color. The struct
     *   contains:
     *
     *   - vec3 baseColor, the base color of the pixel
     *   - float opacity, the opacity between 0 and 1 that
     *   it should be drawn at
     *   - vec3 ambientColor, the color of the pixel when
     *   affected by ambient light
     *   - vec3 specularColor, the color of the pixel when
     *   affected by specular reflections
     *   - vec3 diffuse, the amount of diffused light
     *   hitting the pixel
     *   - vec3 ambient, the amount of ambient light
     *   hitting the pixel
     *   - vec3 specular, the amount of specular reflection
     *   hitting the pixel
     *   - vec3 emissive, the amount of light emitted by
     *   the pixel
     *
     *   vec4 getFinalColor
     *
     *   Update the final color after mixing. It takes in a
     *   vec4 color and must return a modified version.
     *
     *   void afterFragment
     *
     *   Called at the end of the fragment shader.
     *
     *   Most of the time, you will need to write your
     *   hooks in GLSL ES version 300. If you are using
     *   WebGL 1 instead of 2, write your hooks in GLSL ES
     *   100 instead.
     *
     *   Call baseMaterialShader().inspectHooks() to see
     *   all the possible hooks and their default
     *   implementations.
     *   @return The material shader
     */
    function baseMaterialShader(): p5.Shader;

    /**
     *   Get the shader used by normalMaterial(). You can
     *   call baseNormalShader().modify() and change any of
     *   the following hooks:    Hook Description    void
     *   beforeVertex Called at the start of the vertex
     *   shader.   vec3 getLocalPosition Update the
     *   position of vertices before transforms are
     *   applied. It takes in vec3 position and must return
     *   a modified version.   vec3 getWorldPosition Update
     *   the position of vertices after transforms are
     *   applied. It takes in vec3 position and pust return
     *   a modified version.   vec3 getLocalNormal Update
     *   the normal before transforms are applied. It takes
     *   in vec3 normal and must return a modified version.
     *   vec3 getWorldNormal Update the normal after
     *   transforms are applied. It takes in vec3 normal
     *   and must return a modified version.   vec2 getUV
     *   Update the texture coordinates. It takes in vec2
     *   uv and must return a modified version.   vec4
     *   getVertexColor Update the color of each vertex. It
     *   takes in a vec4 color and must return a modified
     *   version.   void afterVertex Called at the end of
     *   the vertex shader.   void beforeFragment Called at
     *   the start of the fragment shader.   vec4
     *   getFinalColor Update the final color after mixing.
     *   It takes in a vec4 color and must return a
     *   modified version.   void afterFragment Called at
     *   the end of the fragment shader.
     *
     *   Most of the time, you will need to write your
     *   hooks in GLSL ES version 300. If you are using
     *   WebGL 1 instead of 2, write your hooks in GLSL ES
     *   100 instead.
     *
     *   Call baseNormalShader().inspectHooks() to see all
     *   the possible hooks and their default
     *   implementations.
     *   @return The `normalMaterial` shader
     */
    function baseNormalShader(): p5.Shader;

    /**
     *   Get the shader used when no lights or materials
     *   are applied. You can call
     *   baseColorShader().modify() and change any of the
     *   following hooks:    Hook Description    void
     *   beforeVertex Called at the start of the vertex
     *   shader.   vec3 getLocalPosition Update the
     *   position of vertices before transforms are
     *   applied. It takes in vec3 position and must return
     *   a modified version.   vec3 getWorldPosition Update
     *   the position of vertices after transforms are
     *   applied. It takes in vec3 position and pust return
     *   a modified version.   vec3 getLocalNormal Update
     *   the normal before transforms are applied. It takes
     *   in vec3 normal and must return a modified version.
     *   vec3 getWorldNormal Update the normal after
     *   transforms are applied. It takes in vec3 normal
     *   and must return a modified version.   vec2 getUV
     *   Update the texture coordinates. It takes in vec2
     *   uv and must return a modified version.   vec4
     *   getVertexColor Update the color of each vertex. It
     *   takes in a vec4 color and must return a modified
     *   version.   void afterVertex Called at the end of
     *   the vertex shader.   void beforeFragment Called at
     *   the start of the fragment shader.   vec4
     *   getFinalColor Update the final color after mixing.
     *   It takes in a vec4 color and must return a
     *   modified version.   void afterFragment Called at
     *   the end of the fragment shader.
     *
     *   Most of the time, you will need to write your
     *   hooks in GLSL ES version 300. If you are using
     *   WebGL 1 instead of 2, write your hooks in GLSL ES
     *   100 instead.
     *
     *   Call baseColorShader().inspectHooks() to see all
     *   the possible hooks and their default
     *   implementations.
     *   @return The color shader
     */
    function baseColorShader(): p5.Shader;

    /**
     *   Get the shader used when drawing the strokes of
     *   shapes. You can call baseStrokeShader().modify()
     *   and change any of the following hooks:
     *   HookDescription
     *
     *   void beforeVertex
     *
     *   Called at the start of the vertex shader.
     *
     *   vec3 getLocalPosition
     *
     *   Update the position of vertices before transforms
     *   are applied. It takes in vec3 position and must
     *   return a modified version.
     *
     *   vec3 getWorldPosition
     *
     *   Update the position of vertices after transforms
     *   are applied. It takes in vec3 position and pust
     *   return a modified version.
     *
     *   float getStrokeWeight
     *
     *   Update the stroke weight. It takes in float weight
     *   and pust return a modified version.
     *
     *   vec2 getLineCenter
     *
     *   Update the center of the line. It takes in vec2
     *   center and must return a modified version.
     *
     *   vec2 getLinePosition
     *
     *   Update the position of each vertex on the edge of
     *   the line. It takes in vec2 position and must
     *   return a modified version.
     *
     *   vec4 getVertexColor
     *
     *   Update the color of each vertex. It takes in a
     *   vec4 color and must return a modified version.
     *
     *   void afterVertex
     *
     *   Called at the end of the vertex shader.
     *
     *   void beforeFragment
     *
     *   Called at the start of the fragment shader.
     *
     *   Inputs getPixelInputs
     *
     *   Update the inputs to the shader. It takes in a
     *   struct Inputs inputs, which includes:
     *
     *   - vec4 color, the color of the stroke
     *   - vec2 tangent, the direction of the stroke in
     *   screen space
     *   - vec2 center, the coordinate of the center of the
     *   stroke in screen space p5.js pixels
     *   - vec2 position, the coordinate of the current
     *   pixel in screen space p5.js pixels
     *   - float strokeWeight, the thickness of the stroke
     *   in p5.js pixels
     *
     *   bool shouldDiscard
     *
     *   Caps and joins are made by discarded pixels in the
     *   fragment shader to carve away unwanted areas. Use
     *   this to change this logic. It takes in a bool
     *   willDiscard and must return a modified version.
     *
     *   vec4 getFinalColor
     *
     *   Update the final color after mixing. It takes in a
     *   vec4 color and must return a modified version.
     *
     *   void afterFragment
     *
     *   Called at the end of the fragment shader.
     *
     *   Most of the time, you will need to write your
     *   hooks in GLSL ES version 300. If you are using
     *   WebGL 1 instead of 2, write your hooks in GLSL ES
     *   100 instead.
     *
     *   Call baseStrokeShader().inspectHooks() to see all
     *   the possible hooks and their default
     *   implementations.
     *   @return The stroke shader
     */
    function baseStrokeShader(): p5.Shader;

    /**
     *   Restores the default shaders. resetShader()
     *   deactivates any shaders previously applied by
     *   shader().
     *
     *   Note: Shaders can only be used in WebGL mode.
     *   @chainable
     */
    function resetShader(): p5;

    /**
     *   Sets the texture that will be used on shapes. A
     *   texture is like a skin that wraps around a shape.
     *   texture() works with built-in shapes, such as
     *   square() and sphere(), and custom shapes created
     *   with functions such as buildGeometry(). To texture
     *   a geometry created with beginShape(), uv
     *   coordinates must be passed to each vertex() call.
     *
     *   The parameter, tex, is the texture to apply.
     *   texture() can use a range of sources including
     *   images, videos, and offscreen renderers such as
     *   p5.Graphics and p5.Framebuffer objects.
     *
     *   To texture a geometry created with beginShape(),
     *   you will need to specify uv coordinates in
     *   vertex().
     *
     *   Note: texture() can only be used in WebGL mode.
     *   @param tex media to use as the texture.
     *   @chainable
     */
    function texture(tex: p5.Image | p5.MediaElement | p5.Graphics | p5.Framebuffer): p5;

    /**
     *   Changes the coordinate system used for textures
     *   when they’re applied to custom shapes. In order
     *   for texture() to work, a shape needs a way to map
     *   the points on its surface to the pixels in an
     *   image. Built-in shapes such as rect() and box()
     *   already have these texture mappings based on their
     *   vertices. Custom shapes created with vertex()
     *   require texture mappings to be passed as uv
     *   coordinates.
     *
     *   Each call to vertex() must include 5 arguments, as
     *   in vertex(x, y, z, u, v), to map the vertex at
     *   coordinates (x, y, z) to the pixel at coordinates
     *   (u, v) within an image. For example, the corners
     *   of a rectangular image are mapped to the corners
     *   of a rectangle by default:  // Apply the image as
     *   a texture. texture(img);
     *
     *   // Draw the rectangle. rect(0, 0, 30, 50);
     *
     *   If the image in the code snippet above has
     *   dimensions of 300 x 500 pixels, the same result
     *   could be achieved as follows:  // Apply the image
     *   as a texture. texture(img);
     *
     *   // Draw the rectangle. beginShape();
     *
     *   // Top-left. // u: 0, v: 0 vertex(0, 0, 0, 0, 0);
     *
     *   // Top-right. // u: 300, v: 0 vertex(30, 0, 0,
     *   300, 0);
     *
     *   // Bottom-right. // u: 300, v: 500 vertex(30, 50,
     *   0, 300, 500);
     *
     *   // Bottom-left. // u: 0, v: 500 vertex(0, 50, 0,
     *   0, 500);
     *
     *   endShape();
     *
     *   textureMode() changes the coordinate system for uv
     *   coordinates.
     *
     *   The parameter, mode, accepts two possible
     *   constants. If NORMAL is passed, as in
     *   textureMode(NORMAL), then the texture’s uv
     *   coordinates can be provided in the range 0 to 1
     *   instead of the image’s dimensions. This can be
     *   helpful for using the same code for multiple
     *   images of different sizes. For example, the code
     *   snippet above could be rewritten as follows:  //
     *   Set the texture mode to use normalized
     *   coordinates. textureMode(NORMAL);
     *
     *   // Apply the image as a texture. texture(img);
     *
     *   // Draw the rectangle. beginShape();
     *
     *   // Top-left. // u: 0, v: 0 vertex(0, 0, 0, 0, 0);
     *
     *   // Top-right. // u: 1, v: 0 vertex(30, 0, 0, 1,
     *   0);
     *
     *   // Bottom-right. // u: 1, v: 1 vertex(30, 50, 0,
     *   1, 1);
     *
     *   // Bottom-left. // u: 0, v: 1 vertex(0, 50, 0, 0,
     *   1);
     *
     *   endShape();
     *
     *   By default, mode is IMAGE, which scales uv
     *   coordinates to the dimensions of the image.
     *   Calling textureMode(IMAGE) applies the default.
     *
     *   Note: textureMode() can only be used in WebGL
     *   mode.
     *   @param mode either IMAGE or NORMAL.
     */
    function textureMode(mode: p5.TEXTURE_MODE): void;

    /**
     *   Changes the way textures behave when a shape’s uv
     *   coordinates go beyond the texture. In order for
     *   texture() to work, a shape needs a way to map the
     *   points on its surface to the pixels in an image.
     *   Built-in shapes such as rect() and box() already
     *   have these texture mappings based on their
     *   vertices. Custom shapes created with vertex()
     *   require texture mappings to be passed as uv
     *   coordinates.
     *
     *   Each call to vertex() must include 5 arguments, as
     *   in vertex(x, y, z, u, v), to map the vertex at
     *   coordinates (x, y, z) to the pixel at coordinates
     *   (u, v) within an image. For example, the corners
     *   of a rectangular image are mapped to the corners
     *   of a rectangle by default:
     *
     *   // Apply the image as a texture. texture(img); //
     *   Draw the rectangle. rect(0, 0, 30, 50);
     *
     *   If the image in the code snippet above has
     *   dimensions of 300 x 500 pixels, the same result
     *   could be achieved as follows:
     *
     *   // Apply the image as a texture. texture(img); //
     *   Draw the rectangle. beginShape(); // Top-left. //
     *   u: 0, v: 0 vertex(0, 0, 0, 0, 0); // Top-right. //
     *   u: 300, v: 0 vertex(30, 0, 0, 300, 0); //
     *   Bottom-right. // u: 300, v: 500 vertex(30, 50, 0,
     *   300, 500); // Bottom-left. // u: 0, v: 500
     *   vertex(0, 50, 0, 0, 500); endShape();
     *
     *   textureWrap() controls how textures behave when
     *   their uv's go beyond the texture. Doing so can
     *   produce interesting visual effects such as tiling.
     *   For example, the custom shape above could have
     *   u-coordinates are greater than the image’s width:
     *
     *   // Apply the image as a texture. texture(img); //
     *   Draw the rectangle. beginShape(); vertex(0, 0, 0,
     *   0, 0); // Top-right. // u: 600 vertex(30, 0, 0,
     *   600, 0); // Bottom-right. // u: 600 vertex(30, 50,
     *   0, 600, 500); vertex(0, 50, 0, 0, 500);
     *   endShape();
     *
     *   The u-coordinates of 600 are greater than the
     *   texture image’s width of 300. This creates
     *   interesting possibilities.
     *
     *   The first parameter, wrapX, accepts three possible
     *   constants. If CLAMP is passed, as in
     *   textureWrap(CLAMP), the pixels at the edge of the
     *   texture will extend to the shape’s edges. If
     *   REPEAT is passed, as in textureWrap(REPEAT), the
     *   texture will tile repeatedly until reaching the
     *   shape’s edges. If MIRROR is passed, as in
     *   textureWrap(MIRROR), the texture will tile
     *   repeatedly until reaching the shape’s edges,
     *   flipping its orientation between tiles. By
     *   default, textures CLAMP.
     *
     *   The second parameter, wrapY, is optional. It
     *   accepts the same three constants, CLAMP, REPEAT,
     *   and MIRROR. If one of these constants is passed,
     *   as in textureWRAP(MIRROR, REPEAT), then the
     *   texture will MIRROR horizontally and REPEAT
     *   vertically. By default, wrapY will be set to the
     *   same value as wrapX.
     *
     *   Note: textureWrap() can only be used in WebGL
     *   mode.
     *   @param wrapX either CLAMP, REPEAT, or MIRROR
     *   @param [wrapY] either CLAMP, REPEAT, or MIRROR
     */
    function textureWrap(wrapX: p5.WRAP_X, wrapY?: p5.WRAP_Y): void;

    /**
     *   Sets the current material as a normal material. A
     *   normal material sets surfaces facing the x-axis to
     *   red, those facing the y-axis to green, and those
     *   facing the z-axis to blue. Normal material isn't
     *   affected by light. It’s often used as a
     *   placeholder material when debugging.
     *
     *   Note: normalMaterial() can only be used in WebGL
     *   mode.
     *   @chainable
     */
    function normalMaterial(): p5;

    /**
     *   Sets the ambient color of shapes’ surface
     *   material. The ambientMaterial() color sets the
     *   components of the ambientLight() color that shapes
     *   will reflect. For example, calling
     *   ambientMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   ambientMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call ambientMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in ambientMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call ambientMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call ambientMaterial() has three
     *   parameters, v1, v2, and v3. RGB, HSB, or HSL
     *   values, as in ambientMaterial(255, 0, 0), can be
     *   passed to set the material’s colors. Color values
     *   will be interpreted using the current colorMode().
     *
     *   Note: ambientMaterial() can only be used in WebGL
     *   mode.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @chainable
     */
    function ambientMaterial(v1: number, v2: number, v3: number): p5;

    /**
     *   Sets the ambient color of shapes’ surface
     *   material. The ambientMaterial() color sets the
     *   components of the ambientLight() color that shapes
     *   will reflect. For example, calling
     *   ambientMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   ambientMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call ambientMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in ambientMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call ambientMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call ambientMaterial() has three
     *   parameters, v1, v2, and v3. RGB, HSB, or HSL
     *   values, as in ambientMaterial(255, 0, 0), can be
     *   passed to set the material’s colors. Color values
     *   will be interpreted using the current colorMode().
     *
     *   Note: ambientMaterial() can only be used in WebGL
     *   mode.
     *   @param gray grayscale value between 0 (black) and
     *   255 (white).
     *   @chainable
     */
    function ambientMaterial(gray: number): p5;

    /**
     *   Sets the ambient color of shapes’ surface
     *   material. The ambientMaterial() color sets the
     *   components of the ambientLight() color that shapes
     *   will reflect. For example, calling
     *   ambientMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   ambientMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call ambientMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in ambientMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call ambientMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   ambientMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call ambientMaterial() has three
     *   parameters, v1, v2, and v3. RGB, HSB, or HSL
     *   values, as in ambientMaterial(255, 0, 0), can be
     *   passed to set the material’s colors. Color values
     *   will be interpreted using the current colorMode().
     *
     *   Note: ambientMaterial() can only be used in WebGL
     *   mode.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @chainable
     */
    function ambientMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the emissive color of shapes’ surface
     *   material. The emissiveMaterial() color sets a
     *   color shapes display at full strength, regardless
     *   of lighting. This can give the appearance that a
     *   shape is glowing. However, emissive materials
     *   don’t actually emit light that can affect
     *   surrounding objects.
     *
     *   emissiveMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call emissiveMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in emissiveMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call emissiveMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   emissiveMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call emissiveMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   emissiveMaterial(255, 0, 0) or
     *   emissiveMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *
     *   Note: emissiveMaterial() can only be used in WebGL
     *   mode.
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param [alpha] alpha value in the current
     *   colorMode().
     *   @chainable
     */
    function emissiveMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the emissive color of shapes’ surface
     *   material. The emissiveMaterial() color sets a
     *   color shapes display at full strength, regardless
     *   of lighting. This can give the appearance that a
     *   shape is glowing. However, emissive materials
     *   don’t actually emit light that can affect
     *   surrounding objects.
     *
     *   emissiveMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call emissiveMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in emissiveMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call emissiveMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   emissiveMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call emissiveMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   emissiveMaterial(255, 0, 0) or
     *   emissiveMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *
     *   Note: emissiveMaterial() can only be used in WebGL
     *   mode.
     *   @param gray grayscale value between 0 (black) and
     *   255 (white).
     *   @chainable
     */
    function emissiveMaterial(gray: number): p5;

    /**
     *   Sets the emissive color of shapes’ surface
     *   material. The emissiveMaterial() color sets a
     *   color shapes display at full strength, regardless
     *   of lighting. This can give the appearance that a
     *   shape is glowing. However, emissive materials
     *   don’t actually emit light that can affect
     *   surrounding objects.
     *
     *   emissiveMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call emissiveMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in emissiveMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call emissiveMaterial() has one
     *   parameter, color. A p5.Color object, an array of
     *   color values, or a CSS color string, as in
     *   emissiveMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call emissiveMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   emissiveMaterial(255, 0, 0) or
     *   emissiveMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *
     *   Note: emissiveMaterial() can only be used in WebGL
     *   mode.
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @chainable
     */
    function emissiveMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the specular color of shapes’ surface
     *   material. The specularMaterial() color sets the
     *   components of light color that glossy coats on
     *   shapes will reflect. For example, calling
     *   specularMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   Unlike ambientMaterial(), specularMaterial() will
     *   reflect the full color of light sources including
     *   directionalLight(), pointLight(), and spotLight().
     *   This is what gives it shapes their "shiny"
     *   appearance. The material’s shininess can be
     *   controlled by the shininess() function.
     *
     *   specularMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call specularMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in specularMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call specularMaterial() has one
     *   parameter, color. A p5.Color> object, an array of
     *   color values, or a CSS color string, as in
     *   specularMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call specularMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   specularMaterial(255, 0, 0) or
     *   specularMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *   @param gray grayscale value between 0 (black) and
     *   255 (white).
     *   @param [alpha] alpha value in the current current
     *   colorMode().
     *   @chainable
     */
    function specularMaterial(gray: number, alpha?: number): p5;

    /**
     *   Sets the specular color of shapes’ surface
     *   material. The specularMaterial() color sets the
     *   components of light color that glossy coats on
     *   shapes will reflect. For example, calling
     *   specularMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   Unlike ambientMaterial(), specularMaterial() will
     *   reflect the full color of light sources including
     *   directionalLight(), pointLight(), and spotLight().
     *   This is what gives it shapes their "shiny"
     *   appearance. The material’s shininess can be
     *   controlled by the shininess() function.
     *
     *   specularMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call specularMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in specularMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call specularMaterial() has one
     *   parameter, color. A p5.Color> object, an array of
     *   color values, or a CSS color string, as in
     *   specularMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call specularMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   specularMaterial(255, 0, 0) or
     *   specularMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *   @param v1 red or hue value in the current
     *   colorMode().
     *   @param v2 green or saturation value in the current
     *   colorMode().
     *   @param v3 blue, brightness, or lightness value in
     *   the current colorMode().
     *   @param [alpha] alpha value in the current current
     *   colorMode().
     *   @chainable
     */
    function specularMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the specular color of shapes’ surface
     *   material. The specularMaterial() color sets the
     *   components of light color that glossy coats on
     *   shapes will reflect. For example, calling
     *   specularMaterial(255, 255, 0) would cause a shape
     *   to reflect red and green light, but not blue
     *   light.
     *
     *   Unlike ambientMaterial(), specularMaterial() will
     *   reflect the full color of light sources including
     *   directionalLight(), pointLight(), and spotLight().
     *   This is what gives it shapes their "shiny"
     *   appearance. The material’s shininess can be
     *   controlled by the shininess() function.
     *
     *   specularMaterial() can be called three ways with
     *   different parameters to set the material’s color.
     *
     *   The first way to call specularMaterial() has one
     *   parameter, gray. Grayscale values between 0 and
     *   255, as in specularMaterial(50), can be passed to
     *   set the material’s color. Higher grayscale values
     *   make shapes appear brighter.
     *
     *   The second way to call specularMaterial() has one
     *   parameter, color. A p5.Color> object, an array of
     *   color values, or a CSS color string, as in
     *   specularMaterial('magenta'), can be passed to set
     *   the material’s color.
     *
     *   The third way to call specularMaterial() has four
     *   parameters, v1, v2, v3, and alpha. alpha is
     *   optional. RGBA, HSBA, or HSLA values can be passed
     *   to set the material’s colors, as in
     *   specularMaterial(255, 0, 0) or
     *   specularMaterial(255, 0, 0, 30). Color values will
     *   be interpreted using the current colorMode().
     *   @param color color as a p5.Color object, an array
     *   of color values, or a CSS string.
     *   @chainable
     */
    function specularMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the amount of gloss ("shininess") of a
     *   specularMaterial(). Shiny materials focus
     *   reflected light more than dull materials.
     *   shininess() affects the way materials reflect
     *   light sources including directionalLight(),
     *   pointLight(), and spotLight().
     *
     *   The parameter, shine, is a number that sets the
     *   amount of shininess. shine must be greater than 1,
     *   which is its default value.
     *   @param shine amount of shine.
     *   @chainable
     */
    function shininess(shine: number): p5;

    /**
     *   Sets the amount of "metalness" of a
     *   specularMaterial(). metalness() can make materials
     *   appear more metallic. It affects the way materials
     *   reflect light sources including affects the way
     *   materials reflect light sources including
     *   directionalLight(), pointLight(), spotLight(), and
     *   imageLight().
     *
     *   The parameter, metallic, is a number that sets the
     *   amount of metalness. metallic must be greater than
     *   1, which is its default value. Higher values, such
     *   as metalness(100), make specular materials appear
     *   more metallic.
     *   @param metallic amount of metalness.
     */
    function metalness(metallic: number): void;

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
    function camera(
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
    function perspective(fovy?: number, aspect?: number, near?: number, far?: number): p5;

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
    function linePerspective(enable: boolean): void;

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
    function linePerspective(): boolean;

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
    function ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

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
    function frustum(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

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
    function createCamera(): p5.Camera;

    /**
     *   Sets the current (active) camera of a 3D sketch.
     *   setCamera() allows for switching between multiple
     *   cameras created with createCamera().
     *
     *   Note: setCamera() can only be used in WebGL mode.
     *   @param cam camera that should be made active.
     */
    function setCamera(cam: p5.Camera): void;

    /**
     *   Set attributes for the WebGL Drawing context. This
     *   is a way of adjusting how the WebGL renderer works
     *   to fine-tune the display and performance. Note
     *   that this will reinitialize the drawing context if
     *   called after the WebGL canvas is made.
     *
     *   If an object is passed as the parameter, all
     *   attributes not declared in the object will be set
     *   to defaults.
     *
     *   The available attributes are:
     *
     *   alpha - indicates if the canvas contains an alpha
     *   buffer default is true
     *
     *   depth - indicates whether the drawing buffer has a
     *   depth buffer of at least 16 bits - default is true
     *
     *   stencil - indicates whether the drawing buffer has
     *   a stencil buffer of at least 8 bits
     *
     *   antialias - indicates whether or not to perform
     *   anti-aliasing default is false (true in Safari)
     *
     *   premultipliedAlpha - indicates that the page
     *   compositor will assume the drawing buffer contains
     *   colors with pre-multiplied alpha default is true
     *
     *   preserveDrawingBuffer - if true the buffers will
     *   not be cleared and and will preserve their values
     *   until cleared or overwritten by author (note that
     *   p5 clears automatically on draw loop) default is
     *   true
     *
     *   perPixelLighting - if true, per-pixel lighting
     *   will be used in the lighting shader otherwise
     *   per-vertex lighting is used. default is true.
     *
     *   version - either 1 or 2, to specify which WebGL
     *   version to ask for. By default, WebGL 2 will be
     *   requested. If WebGL2 is not available, it will
     *   fall back to WebGL 1. You can check what version
     *   is used with by looking at the global webglVersion
     *   property.
     *   @param key Name of attribute
     *   @param value New value of named attribute
     */
    function setAttributes(key: string, value: boolean): void;

    /**
     *   Set attributes for the WebGL Drawing context. This
     *   is a way of adjusting how the WebGL renderer works
     *   to fine-tune the display and performance. Note
     *   that this will reinitialize the drawing context if
     *   called after the WebGL canvas is made.
     *
     *   If an object is passed as the parameter, all
     *   attributes not declared in the object will be set
     *   to defaults.
     *
     *   The available attributes are:
     *
     *   alpha - indicates if the canvas contains an alpha
     *   buffer default is true
     *
     *   depth - indicates whether the drawing buffer has a
     *   depth buffer of at least 16 bits - default is true
     *
     *   stencil - indicates whether the drawing buffer has
     *   a stencil buffer of at least 8 bits
     *
     *   antialias - indicates whether or not to perform
     *   anti-aliasing default is false (true in Safari)
     *
     *   premultipliedAlpha - indicates that the page
     *   compositor will assume the drawing buffer contains
     *   colors with pre-multiplied alpha default is true
     *
     *   preserveDrawingBuffer - if true the buffers will
     *   not be cleared and and will preserve their values
     *   until cleared or overwritten by author (note that
     *   p5 clears automatically on draw loop) default is
     *   true
     *
     *   perPixelLighting - if true, per-pixel lighting
     *   will be used in the lighting shader otherwise
     *   per-vertex lighting is used. default is true.
     *
     *   version - either 1 or 2, to specify which WebGL
     *   version to ask for. By default, WebGL 2 will be
     *   requested. If WebGL2 is not available, it will
     *   fall back to WebGL 1. You can check what version
     *   is used with by looking at the global webglVersion
     *   property.
     *   @param obj object with key-value pairs
     */
    function setAttributes(obj: object): void;

    /**
     *   Returns the Audio Context for this sketch. Useful
     *   for users who would like to dig deeper into the
     *   Web Audio API . Some browsers require users to
     *   startAudioContext with a user gesture, such as
     *   touchStarted in the example below.
     *   @return AudioContext for this sketch
     */
    function getAudioContext(): object;

    /**
     *   It is not only a good practice to give users
     *   control over starting audio. This policy is
     *   enforced by many web browsers, including iOS and
     *   Google Chrome, which create the Web Audio API's
     *   Audio Context in a suspended state. In these
     *   browser-specific policies, sound will not play
     *   until a user interaction event (i.e.
     *   mousePressed()) explicitly resumes the
     *   AudioContext, or starts an audio node. This can be
     *   accomplished by calling start() on a
     *   p5.Oscillator,  play() on a p5.SoundFile, or
     *   simply userStartAudio().
     *
     *   userStartAudio() starts the AudioContext on a user
     *   gesture. The default behavior will enable audio on
     *   any mouseUp or touchEnd event. It can also be
     *   placed in a specific interaction function, such as
     *   mousePressed() as in the example below. This
     *   method utilizes StartAudioContext , a library by
     *   Yotam Mann (MIT Licence, 2016).
     *   @param [elements] This argument can be an Element,
     *   Selector String, NodeList, p5.Element, jQuery
     *   Element, or an Array of any of those.
     *   @param [callback] Callback to invoke when the
     *   AudioContext has started
     *   @return Returns a Promise that resolves when the
     *   AudioContext state is 'running'
     */
    function userStartAudio(elements?: Element | any[], callback?: (...args: any[]) => any): Promise<any>;

    /**
     *   Returns a number representing the output volume
     *   for sound in this sketch.
     *   @return Output volume for sound in this sketch.
     *   Should be between 0.0 (silence) and 1.0.
     */
    function getOutputVolume(): number;

    /**
     *   Scale the output of all sound in this sketch
     *   Scaled between 0.0 (silence) and 1.0 (full
     *   volume). 1.0 is the maximum amplitude of a digital
     *   sound, so multiplying by greater than 1.0 may
     *   cause digital distortion. To fade, provide a
     *   rampTime parameter. For more complex fades, see
     *   the Envelope class. Alternately, you can pass in a
     *   signal source such as an oscillator to modulate
     *   the amplitude with an audio signal.
     *
     *   How This Works: When you load the p5.sound module,
     *   it creates a single instance of p5sound. All sound
     *   objects in this module output to p5sound before
     *   reaching your computer's output. So if you change
     *   the amplitude of p5sound, it impacts all of the
     *   sound in this module.
     *
     *   If no value is provided, returns a Web Audio API
     *   Gain Node
     *   @param volume Volume (amplitude) between 0.0 and
     *   1.0 or modulating signal/oscillator
     *   @param [rampTime] Fade for t seconds
     *   @param [timeFromNow] Schedule this event to happen
     *   at t seconds in the future
     */
    function outputVolume(volume: number | object, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Returns a number representing the sample rate, in
     *   samples per second, of all sound objects in this
     *   audio context. It is determined by the sampling
     *   rate of your operating system's sound card, and it
     *   is not currently possile to change. It is often
     *   44100, or twice the range of human hearing.
     *   @return samplerate samples per second
     */
    function sampleRate(): number;

    /**
     *   Returns the closest MIDI note value for a given
     *   frequency.
     *   @param frequency A freqeuncy, for example, the "A"
     *   above Middle C is 440Hz
     *   @return MIDI note value
     */
    function freqToMidi(frequency: number): number;

    /**
     *   Returns the frequency value of a MIDI note value.
     *   General MIDI treats notes as integers where middle
     *   C is 60, C# is 61, D is 62 etc. Useful for
     *   generating musical frequencies with oscillators.
     *   @param midiNote The number of a MIDI note
     *   @return Frequency value of the given MIDI note
     */
    function midiToFreq(midiNote: number): number;

    /**
     *   List the SoundFile formats that you will include.
     *   LoadSound will search your directory for these
     *   extensions, and will pick a format that is
     *   compatable with the client's web browser. Here is
     *   a free online file converter.
     *   @param [formats] i.e. 'mp3', 'wav', 'ogg'
     */
    function soundFormats(formats?: string): void;

    /**
     *   Save a p5.SoundFile as a .wav file. The browser
     *   will prompt the user to download the file to their
     *   device. For uploading audio to a server, use
     *   p5.SoundFile.saveBlob.
     *   @param soundFile p5.SoundFile that you wish to
     *   save
     *   @param fileName name of the resulting .wav file.
     */
    function saveSound(soundFile: p5.SoundFile, fileName: string): void;

    /**
     *   loadSound() returns a new p5.SoundFile from a
     *   specified path. If called during preload(), the
     *   p5.SoundFile will be ready to play in time for
     *   setup() and draw(). If called outside of preload,
     *   the p5.SoundFile will not be ready immediately, so
     *   loadSound accepts a callback as the second
     *   parameter. Using a  local server is recommended
     *   when loading external files.
     *   @param path Path to the sound file, or an array
     *   with paths to soundfiles in multiple formats i.e.
     *   ['sound.ogg', 'sound.mp3']. Alternately, accepts
     *   an object: either from the HTML5 File API, or a
     *   p5.File.
     *   @param [successCallback] Name of a function to
     *   call once file loads
     *   @param [errorCallback] Name of a function to call
     *   if there is an error loading the file.
     *   @param [whileLoading] Name of a function to call
     *   while file is loading. This function will receive
     *   the percentage loaded so far, from 0.0 to 1.0.
     *   @return Returns a p5.SoundFile
     */
    function loadSound(
        path: string | any[],
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any,
        whileLoading?: (...args: any[]) => any
    ): SoundFile;

    /**
     *   Create a p5.Convolver. Accepts a path to a
     *   soundfile that will be used to generate an impulse
     *   response.
     *   @param path path to a sound file
     *   @param [callback] function to call if loading is
     *   successful. The object will be passed in as the
     *   argument to the callback function.
     *   @param [errorCallback] function to call if loading
     *   is not successful. A custom error will be passed
     *   in as the argument to the callback function.
     */
    function createConvolver(
        path: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): p5.Convolver;

    /**
     *   Set the global tempo, in beats per minute, for all
     *   p5.Parts. This method will impact all active
     *   p5.Parts.
     *   @param BPM Beats Per Minute
     *   @param rampTime Seconds from now
     */
    function setBPM(BPM: number, rampTime: number): void;

    /**
     *   p5.soundOut is the p5.sound final output bus. It
     *   sends output to the destination of this window's
     *   web audio context. It contains Web Audio API nodes
     *   including a dyanmicsCompressor (.limiter), and
     *   Gain Nodes for .input and .output.
     */
    let soundOut: object;
}
