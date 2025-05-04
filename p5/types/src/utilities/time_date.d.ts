// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Returns the current day as a number from 1–31.
         *   @return current day between 1 and 31.
         */
        day(): number;

        /**
         *   Returns the current hour as a number from 0–23.
         *   @return current hour between 0 and 23.
         */
        hour(): number;

        /**
         *   Returns the current minute as a number from 0–59.
         *   @return current minute between 0 and 59.
         */
        minute(): number;

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
        millis(): number;

        /**
         *   Returns the current month as a number from 1–12.
         *   @return current month between 1 and 12.
         */
        month(): number;

        /**
         *   Returns the current second as a number from 0–59.
         *   @return current second between 0 and 59.
         */
        second(): number;

        /**
         *   Returns the current year as a number such as 1999.
         *   @return current year.
         */
        year(): number;
    }
}
