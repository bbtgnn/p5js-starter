// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        describe(text: string, display?: DESCRIBE_DISPLAY): void;

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
        describeElement(name: string, text: string, display?: DESCRIBE_DISPLAY): void;
    }
}
