// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Version of this p5.js.
         */
        readonly VERSION: VERSION;

        /**
         *   The default, two-dimensional renderer.
         */
        readonly P2D: P2D;

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
        readonly WEBGL: WEBGL;

        /**
         *   One of the two possible values of a WebGL canvas
         *   (either WEBGL or WEBGL2), which can be used to
         *   determine what capabilities the rendering
         *   environment has.
         */
        readonly WEBGL2: WEBGL2;
        readonly ARROW: ARROW;
        readonly CROSS: CROSS;
        readonly HAND: HAND;
        readonly MOVE: MOVE;
        readonly TEXT: TEXT;
        readonly WAIT: WAIT;

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
        readonly HALF_PI: number;

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
        readonly PI: number;

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
        readonly QUARTER_PI: number;

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
        readonly TAU: number;

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
        readonly TWO_PI: number;

        /**
         *   A String constant that's used to set the
         *   angleMode(). By default, functions such as
         *   rotate() and sin() expect angles measured in units
         *   of radians. Calling angleMode(DEGREES) ensures
         *   that angles are measured in units of degrees.
         *
         *   Note: TWO_PI radians equals 360˚.
         */
        readonly DEGREES: DEGREES;

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
        readonly RADIANS: RADIANS;
        readonly CORNER: CORNER;
        readonly CORNERS: CORNERS;
        readonly RADIUS: RADIUS;
        readonly RIGHT: RIGHT;
        readonly LEFT: LEFT;
        readonly CENTER: CENTER;
        readonly TOP: TOP;
        readonly BOTTOM: BOTTOM;
        readonly BASELINE: BASELINE;
        readonly POINTS: POINTS;
        readonly LINES: LINES;
        readonly LINE_STRIP: LINE_STRIP;
        readonly LINE_LOOP: LINE_LOOP;
        readonly TRIANGLES: TRIANGLES;
        readonly TRIANGLE_FAN: TRIANGLE_FAN;
        readonly TRIANGLE_STRIP: TRIANGLE_STRIP;
        readonly QUADS: QUADS;
        readonly QUAD_STRIP: QUAD_STRIP;
        readonly TESS: TESS;
        readonly CLOSE: CLOSE;
        readonly OPEN: OPEN;
        readonly CHORD: CHORD;
        readonly PIE: PIE;
        readonly PROJECT: PROJECT;
        readonly SQUARE: SQUARE;
        readonly ROUND: ROUND;
        readonly BEVEL: BEVEL;
        readonly MITER: MITER;
        readonly RGB: RGB;

        /**
         *   HSB (hue, saturation, brightness) is a type of
         *   color model. You can learn more about it at HSB.
         */
        readonly HSB: HSB;
        readonly HSL: HSL;

        /**
         *   AUTO allows us to automatically set the width or
         *   height of an element (but not both), based on the
         *   current height and width of the element. Only one
         *   parameter can be passed to the size function as
         *   AUTO, at a time.
         */
        readonly AUTO: AUTO;
        readonly ALT: number;
        readonly BACKSPACE: number;
        readonly CONTROL: number;
        readonly DELETE: number;
        readonly DOWN_ARROW: number;
        readonly ENTER: number;
        readonly ESCAPE: number;
        readonly LEFT_ARROW: number;
        readonly OPTION: number;
        readonly RETURN: number;
        readonly RIGHT_ARROW: number;
        readonly SHIFT: number;
        readonly TAB: number;
        readonly UP_ARROW: number;
        readonly BLEND: BLEND;
        readonly REMOVE: REMOVE;
        readonly ADD: ADD;
        readonly DARKEST: DARKEST;
        readonly LIGHTEST: LIGHTEST;
        readonly DIFFERENCE: DIFFERENCE;
        readonly SUBTRACT: SUBTRACT;
        readonly EXCLUSION: EXCLUSION;
        readonly MULTIPLY: MULTIPLY;
        readonly SCREEN: SCREEN;
        readonly REPLACE: REPLACE;
        readonly OVERLAY: OVERLAY;
        readonly HARD_LIGHT: HARD_LIGHT;
        readonly SOFT_LIGHT: SOFT_LIGHT;
        readonly DODGE: DODGE;
        readonly BURN: BURN;
        readonly THRESHOLD: THRESHOLD;
        readonly GRAY: GRAY;
        readonly OPAQUE: OPAQUE;
        readonly INVERT: INVERT;
        readonly POSTERIZE: POSTERIZE;
        readonly DILATE: DILATE;
        readonly ERODE: ERODE;
        readonly BLUR: BLUR;
        readonly NORMAL: NORMAL;
        readonly ITALIC: ITALIC;
        readonly BOLD: BOLD;
        readonly BOLDITALIC: BOLDITALIC;
        readonly CHAR: CHAR;
        readonly WORD: WORD;
        readonly LINEAR: LINEAR;
        readonly QUADRATIC: QUADRATIC;
        readonly BEZIER: BEZIER;
        readonly CURVE: CURVE;
        readonly STROKE: STROKE;
        readonly FILL: FILL;
        readonly TEXTURE: TEXTURE;
        readonly IMMEDIATE: IMMEDIATE;
        readonly IMAGE: IMAGE;
        readonly NEAREST: NEAREST;
        readonly REPEAT: REPEAT;
        readonly CLAMP: CLAMP;
        readonly MIRROR: MIRROR;
        readonly FLAT: FLAT;
        readonly SMOOTH: SMOOTH;
        readonly LANDSCAPE: LANDSCAPE;
        readonly PORTRAIT: PORTRAIT;
        readonly GRID: GRID;
        readonly AXES: AXES;
        readonly LABEL: LABEL;
        readonly FALLBACK: FALLBACK;
        readonly CONTAIN: CONTAIN;
        readonly COVER: COVER;
        readonly UNSIGNED_BYTE: UNSIGNED_BYTE;
        readonly UNSIGNED_INT: UNSIGNED_INT;
        readonly FLOAT: FLOAT;
        readonly HALF_FLOAT: HALF_FLOAT;
        readonly RGBA: RGBA;
    }
}
