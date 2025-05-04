// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        keyPressed(event?: KeyboardEvent): void;

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
        keyReleased(event?: KeyboardEvent): void;

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
        keyTyped(event?: KeyboardEvent): void;

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
        keyIsDown(code: number): boolean;

        /**
         *   A Boolean system variable that's true if any key
         *   is currently pressed and false if not.
         */
        keyIsPressed: boolean;

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
        key: string;

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
        keyCode: number;
    }
}
