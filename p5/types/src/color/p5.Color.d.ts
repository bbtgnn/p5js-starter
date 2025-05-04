// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Color {
        // TODO: Fix p5.Color() errors in src/color/p5.Color.js, line 318:
        //
        //    required param "vals" follows an optional param
        //
        // constructor(pInst?: p5, vals: number[]|string);

        /**
         *   Returns the color formatted as a String. Calling
         *   myColor.toString() can be useful for debugging, as
         *   in print(myColor.toString()). It's also helpful
         *   for using p5.js with other libraries.
         *
         *   The parameter, format, is optional. If a format
         *   string is passed, as in
         *   myColor.toString('#rrggbb'), it will determine how
         *   the color string is formatted. By default, color
         *   strings are formatted as 'rgba(r, g, b, a)'.
         *   @param [format] how the color string will be
         *   formatted. Leaving this empty formats the string
         *   as rgba(r, g, b, a). '#rgb' '#rgba' '#rrggbb' and
         *   '#rrggbbaa' format as hexadecimal color codes.
         *   'rgb' 'hsb' and 'hsl' return the color formatted
         *   in the specified color mode. 'rgba' 'hsba' and
         *   'hsla' are the same as above but with alpha
         *   channels. 'rgb%' 'hsb%' 'hsl%' 'rgba%' 'hsba%' and
         *   'hsla%' format as percentages.
         *   @return the formatted string.
         */
        toString(format?: string): string;

        /**
         *   Sets the red component of a color. The range
         *   depends on the colorMode(). In the default RGB
         *   mode it's between 0 and 255.
         *   @param red the new red value.
         */
        setRed(red: number): void;

        /**
         *   Sets the green component of a color. The range
         *   depends on the colorMode(). In the default RGB
         *   mode it's between 0 and 255.
         *   @param green the new green value.
         */
        setGreen(green: number): void;

        /**
         *   Sets the blue component of a color. The range
         *   depends on the colorMode(). In the default RGB
         *   mode it's between 0 and 255.
         *   @param blue the new blue value.
         */
        setBlue(blue: number): void;

        /**
         *   Sets the alpha (transparency) value of a color.
         *   The range depends on the colorMode(). In the
         *   default RGB mode it's between 0 and 255.
         *   @param alpha the new alpha value.
         */
        setAlpha(alpha: number): void;
    }
}
