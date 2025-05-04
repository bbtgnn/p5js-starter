// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        mouseMoved(event?: MouseEvent): void;

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
        mouseDragged(event?: MouseEvent): void;

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
        mousePressed(event?: MouseEvent): void;

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
        mouseReleased(event?: MouseEvent): void;

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
        mouseClicked(event?: MouseEvent): void;

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
        doubleClicked(event?: MouseEvent): void;

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
        mouseWheel(event?: WheelEvent): void;

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
        requestPointerLock(): void;

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
        exitPointerLock(): void;

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
        movedX: number;

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
        movedY: number;

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
        mouseX: number;

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
        mouseY: number;

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
        pmouseX: number;

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
        pmouseY: number;

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
        winMouseX: number;

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
        winMouseY: number;

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
        pwinMouseX: number;

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
        pwinMouseY: number;

        /**
         *   A String system variable that contains the value
         *   of the last mouse button pressed. The mouseButton
         *   variable is either LEFT, RIGHT, or CENTER,
         *   depending on which button was pressed last.
         *
         *   Note: Different browsers may track mouseButton
         *   differently. See MDN for more information.
         */
        mouseButton: UNKNOWN_P5_CONSTANT;

        /**
         *   A Boolean system variable that's true if the mouse
         *   is pressed and false if not.
         */
        mouseIsPressed: boolean;
    }
}
