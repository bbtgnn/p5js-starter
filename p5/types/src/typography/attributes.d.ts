// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        textAlign(horizAlign: HORIZ_ALIGN, vertAlign?: VERT_ALIGN): p5;

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
        textAlign(): object;

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
        textLeading(leading: number): p5;

        /**
         *   Sets the spacing between lines of text when text()
         *   is called. Note: Spacing is measured in pixels.
         *
         *   Calling textLeading() without an argument returns
         *   the current spacing.
         */
        textLeading(): number;

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
        textSize(size: number): p5;

        /**
         *   Sets the font size when text() is called. Note:
         *   Font size is measured in pixels.
         *
         *   Calling textSize() without an argument returns the
         *   current size.
         */
        textSize(): number;

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
        textStyle(style: TEXT_STYLE): p5;

        /**
         *   Sets the style for system fonts when text() is
         *   called. The parameter, style, can be either
         *   NORMAL, ITALIC, BOLD, or BOLDITALIC.
         *
         *   textStyle() may be overridden by CSS styling. This
         *   function doesn't affect fonts loaded with
         *   loadFont().
         */
        textStyle(): string;

        /**
         *   Calculates the maximum width of a string of text
         *   drawn when text() is called.
         *   @param str string of text to measure.
         *   @return width measured in units of pixels.
         */
        textWidth(str: string): number;

        /**
         *   Calculates the ascent of the current font at its
         *   current size. The ascent represents the distance,
         *   in pixels, of the tallest character above the
         *   baseline.
         *   @return ascent measured in units of pixels.
         */
        textAscent(): number;

        /**
         *   Calculates the descent of the current font at its
         *   current size. The descent represents the distance,
         *   in pixels, of the character with the longest
         *   descender below the baseline.
         *   @return descent measured in units of pixels.
         */
        textDescent(): number;

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
        textWrap(style: TEXT_STYLE): string;
    }
}
