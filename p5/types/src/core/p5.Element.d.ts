// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Element {
        /**
         *   A class to describe an HTML element. Sketches can
         *   use many elements. Common elements include the
         *   drawing canvas, buttons, sliders, webcam feeds,
         *   and so on.
         *
         *   All elements share the methods of the p5.Element
         *   class. They're created with functions such as
         *   createCanvas() and createButton().
         *
         *   @param elt wrapped DOM element.
         *   @param [pInst] pointer to p5 instance.
         */
        constructor(elt: HTMLElement, pInst?: p5);

        /**
         *   Attaches the element to a parent element. For
         *   example, a <div></div> element may be used as a
         *   box to hold two pieces of text, a header and a
         *   paragraph. The <div></div> is the parent element
         *   of both the header and paragraph.
         *
         *   The parameter parent can have one of three types.
         *   parent can be a string with the parent element's
         *   ID, as in myElement.parent('container'). It can
         *   also be another p5.Element object, as in
         *   myElement.parent(myDiv). Finally, parent can be an
         *   HTMLElement object, as in
         *   myElement.parent(anotherElement).
         *
         *   Calling myElement.parent() without an argument
         *   returns the element's parent.
         *   @param parent ID, p5.Element, or HTMLElement of
         *   desired parent element.
         *   @chainable
         */
        parent(parent: string | Element | object): Element;

        /**
         *   Attaches the element to a parent element. For
         *   example, a <div></div> element may be used as a
         *   box to hold two pieces of text, a header and a
         *   paragraph. The <div></div> is the parent element
         *   of both the header and paragraph.
         *
         *   The parameter parent can have one of three types.
         *   parent can be a string with the parent element's
         *   ID, as in myElement.parent('container'). It can
         *   also be another p5.Element object, as in
         *   myElement.parent(myDiv). Finally, parent can be an
         *   HTMLElement object, as in
         *   myElement.parent(anotherElement).
         *
         *   Calling myElement.parent() without an argument
         *   returns the element's parent.
         */
        parent(): Element;

        /**
         *   Sets the element's ID using a given string.
         *   Calling myElement.id() without an argument returns
         *   its ID as a string.
         *   @param id ID of the element.
         *   @chainable
         */
        id(id: string): Element;

        /**
         *   Sets the element's ID using a given string.
         *   Calling myElement.id() without an argument returns
         *   its ID as a string.
         *   @return ID of the element.
         */
        id(): string;

        /**
         *   Adds a class attribute to the element using a
         *   given string. Calling myElement.class() without an
         *   argument returns a string with its current
         *   classes.
         *   @param class class to add.
         *   @chainable
         */
        class(theClass: string): Element;

        /**
         *   Adds a class attribute to the element using a
         *   given string. Calling myElement.class() without an
         *   argument returns a string with its current
         *   classes.
         *   @return element's classes, if any.
         */
        class(): string;

        /**
         *   Calls a function when the mouse is pressed over
         *   the element. Calling myElement.mousePressed(false)
         *   disables the function.
         *
         *   Note: Some mobile browsers may also trigger this
         *   event when the element receives a quick tap.
         *   @param fxn function to call when the mouse is
         *   pressed over the element. false disables the
         *   function.
         *   @chainable
         */
        mousePressed(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse is pressed twice
         *   over the element. Calling
         *   myElement.doubleClicked(false) disables the
         *   function.
         *   @param fxn function to call when the mouse is
         *   double clicked over the element. false disables
         *   the function.
         *   @chainable
         */
        doubleClicked(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse wheel scrolls over
         *   the element. The callback function, fxn, is passed
         *   an event object. event has two numeric properties,
         *   deltaY and deltaX. event.deltaY is negative if the
         *   mouse wheel rotates away from the user. It's
         *   positive if the mouse wheel rotates toward the
         *   user. event.deltaX is positive if the mouse wheel
         *   moves to the right. It's negative if the mouse
         *   wheel moves to the left.
         *
         *   Calling myElement.mouseWheel(false) disables the
         *   function.
         *   @param fxn function to call when the mouse wheel
         *   is scrolled over the element. false disables the
         *   function.
         *   @chainable
         */
        mouseWheel(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse is released over
         *   the element. Calling
         *   myElement.mouseReleased(false) disables the
         *   function.
         *
         *   Note: Some mobile browsers may also trigger this
         *   event when the element receives a quick tap.
         *   @param fxn function to call when the mouse is
         *   pressed over the element. false disables the
         *   function.
         *   @chainable
         */
        mouseReleased(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse is pressed and
         *   released over the element. Calling
         *   myElement.mouseReleased(false) disables the
         *   function.
         *
         *   Note: Some mobile browsers may also trigger this
         *   event when the element receives a quick tap.
         *   @param fxn function to call when the mouse is
         *   pressed and released over the element. false
         *   disables the function.
         *   @chainable
         */
        mouseClicked(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse moves over the
         *   element. Calling myElement.mouseMoved(false)
         *   disables the function.
         *   @param fxn function to call when the mouse moves
         *   over the element. false disables the function.
         *   @chainable
         */
        mouseMoved(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse moves onto the
         *   element. Calling myElement.mouseOver(false)
         *   disables the function.
         *   @param fxn function to call when the mouse moves
         *   onto the element. false disables the function.
         *   @chainable
         */
        mouseOver(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the mouse moves off the
         *   element. Calling myElement.mouseOut(false)
         *   disables the function.
         *   @param fxn function to call when the mouse moves
         *   off the element. false disables the function.
         *   @chainable
         */
        mouseOut(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the element is touched.
         *   Calling myElement.touchStarted(false) disables the
         *   function.
         *
         *   Note: Touch functions only work on mobile devices.
         *   @param fxn function to call when the touch starts.
         *   false disables the function.
         *   @chainable
         */
        touchStarted(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the user touches the element
         *   and moves. Calling myElement.touchMoved(false)
         *   disables the function.
         *
         *   Note: Touch functions only work on mobile devices.
         *   @param fxn function to call when the touch moves
         *   over the element. false disables the function.
         *   @chainable
         */
        touchMoved(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when the user stops touching the
         *   element. Calling myElement.touchMoved(false)
         *   disables the function.
         *
         *   Note: Touch functions only work on mobile devices.
         *   @param fxn function to call when the touch ends.
         *   false disables the function.
         *   @chainable
         */
        touchEnded(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when a file is dragged over the
         *   element. Calling myElement.dragOver(false)
         *   disables the function.
         *   @param fxn function to call when the file is
         *   dragged over the element. false disables the
         *   function.
         *   @chainable
         */
        dragOver(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Calls a function when a file is dragged off the
         *   element. Calling myElement.dragLeave(false)
         *   disables the function.
         *   @param fxn function to call when the file is
         *   dragged off the element. false disables the
         *   function.
         *   @chainable
         */
        dragLeave(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The element's underlying HTMLElement object. The
         *   HTMLElement object's properties and methods can be
         *   used directly.
         */
        elt: any;

        /**
         *   A Number property that stores the element's width.
         */
        width: any;

        /**
         *   A Number property that stores the element's
         *   height.
         */
        height: any;
    }
}
