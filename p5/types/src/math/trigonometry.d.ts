// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        acos(value: number): number;

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
        asin(value: number): number;

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
        atan(value: number): number;

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
        atan2(y: number, x: number): number;

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
        cos(angle: number): number;

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
        sin(angle: number): number;

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
        tan(angle: number): number;

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
        degrees(radians: number): number;

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
        radians(degrees: number): number;

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
        angleMode(mode: ANGLE_MODE): void;

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
        angleMode(): UNKNOWN_P5_CONSTANT;
    }
}
