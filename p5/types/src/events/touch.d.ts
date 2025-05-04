// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        touchStarted(event?: TouchEvent): void;

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
        touchMoved(event?: TouchEvent): void;

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
        touchEnded(event?: TouchEvent): void;

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
        touches: object[];
    }
}
