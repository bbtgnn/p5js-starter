// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Stops the code in draw() from running repeatedly.
         *   By default, draw() tries to run 60 times per
         *   second. Calling noLoop() stops draw() from
         *   repeating. The draw loop can be restarted by
         *   calling loop(). draw() can be run once by calling
         *   redraw().
         *
         *   The isLooping() function can be used to check
         *   whether a sketch is looping, as in isLooping() ===
         *   true.
         */
        noLoop(): void;

        /**
         *   Resumes the draw loop after noLoop() has been
         *   called. By default, draw() tries to run 60 times
         *   per second. Calling noLoop() stops draw() from
         *   repeating. The draw loop can be restarted by
         *   calling loop().
         *
         *   The isLooping() function can be used to check
         *   whether a sketch is looping, as in isLooping() ===
         *   true.
         */
        loop(): void;

        /**
         *   Returns true if the draw loop is running and false
         *   if not. By default, draw() tries to run 60 times
         *   per second. Calling noLoop() stops draw() from
         *   repeating. The draw loop can be restarted by
         *   calling loop().
         *
         *   The isLooping() function can be used to check
         *   whether a sketch is looping, as in isLooping() ===
         *   true.
         */
        isLooping(): boolean;

        /**
         *   Begins a drawing group that contains its own
         *   styles and transformations. By default, styles
         *   such as fill() and transformations such as
         *   rotate() are applied to all drawing that follows.
         *   The push() and pop() functions can limit the
         *   effect of styles and transformations to a specific
         *   group of shapes, images, and text. For example, a
         *   group of shapes could be translated to follow the
         *   mouse without affecting the rest of the sketch:
         *
         *   // Begin the drawing group. push(); // Translate
         *   the origin to the mouse's position.
         *   translate(mouseX, mouseY); // Style the face.
         *   noStroke(); fill('green'); // Draw the face.
         *   circle(0, 0, 60); // Style the eyes.
         *   fill('white'); // Draw the left eye. ellipse(-20,
         *   -20, 30, 20); // Draw the right eye. ellipse(20,
         *   -20, 30, 20); // End the drawing group. pop(); //
         *   Draw a bug. let x = random(0, 100); let y =
         *   random(0, 100); text('🦟', x, y);
         *
         *   In the code snippet above, the bug's position
         *   isn't affected by translate(mouseX, mouseY)
         *   because that transformation is contained between
         *   push() and pop(). The bug moves around the entire
         *   canvas as expected.
         *
         *   Note: push() and pop() are always called as a
         *   pair. Both functions are required to begin and end
         *   a drawing group.
         *
         *   push() and pop() can also be nested to create
         *   subgroups. For example, the code snippet above
         *   could be changed to give more detail to the frog’s
         *   eyes:
         *
         *   // Begin the drawing group. push(); // Translate
         *   the origin to the mouse's position.
         *   translate(mouseX, mouseY); // Style the face.
         *   noStroke(); fill('green'); // Draw a face.
         *   circle(0, 0, 60); // Style the eyes.
         *   fill('white'); // Draw the left eye. push();
         *   translate(-20, -20); ellipse(0, 0, 30, 20);
         *   fill('black'); circle(0, 0, 8); pop(); // Draw the
         *   right eye. push(); translate(20, -20); ellipse(0,
         *   0, 30, 20); fill('black'); circle(0, 0, 8); pop();
         *   // End the drawing group. pop(); // Draw a bug.
         *   let x = random(0, 100); let y = random(0, 100);
         *   text('🦟', x, y);
         *
         *   In this version, the code to draw each eye is
         *   contained between its own push() and pop()
         *   functions. Doing so makes it easier to add details
         *   in the correct part of a drawing.
         *
         *   push() and pop() contain the effects of the
         *   following functions:
         *
         *   - fill()
         *   - noFill()
         *   - noStroke()
         *   - stroke()
         *   - tint()
         *   - noTint()
         *   - strokeWeight()
         *   - strokeCap()
         *   - strokeJoin()
         *   - imageMode()
         *   - rectMode()
         *   - ellipseMode()
         *   - colorMode()
         *   - textAlign()
         *   - textFont()
         *   - textSize()
         *   - textLeading()
         *   - applyMatrix()
         *   - resetMatrix()
         *   - rotate()
         *   - scale()
         *   - shearX()
         *   - shearY()
         *   - translate()
         *
         *   In WebGL mode, push() and pop() contain the
         *   effects of a few additional styles:
         *
         *   - setCamera()
         *   - ambientLight()
         *   - directionalLight()
         *   - pointLight() texture()
         *   - specularMaterial()
         *   - shininess()
         *   - normalMaterial()
         *   - shader()
         */
        push(): void;

        /**
         *   Ends a drawing group that contains its own styles
         *   and transformations. By default, styles such as
         *   fill() and transformations such as rotate() are
         *   applied to all drawing that follows. The push()
         *   and pop() functions can limit the effect of styles
         *   and transformations to a specific group of shapes,
         *   images, and text. For example, a group of shapes
         *   could be translated to follow the mouse without
         *   affecting the rest of the sketch:
         *
         *   // Begin the drawing group. push(); // Translate
         *   the origin to the mouse's position.
         *   translate(mouseX, mouseY); // Style the face.
         *   noStroke(); fill('green'); // Draw the face.
         *   circle(0, 0, 60); // Style the eyes.
         *   fill('white'); // Draw the left eye. ellipse(-20,
         *   -20, 30, 20); // Draw the right eye. ellipse(20,
         *   -20, 30, 20); // End the drawing group. pop(); //
         *   Draw a bug. let x = random(0, 100); let y =
         *   random(0, 100); text('🦟', x, y);
         *
         *   In the code snippet above, the bug's position
         *   isn't affected by translate(mouseX, mouseY)
         *   because that transformation is contained between
         *   push() and pop(). The bug moves around the entire
         *   canvas as expected.
         *
         *   Note: push() and pop() are always called as a
         *   pair. Both functions are required to begin and end
         *   a drawing group.
         *
         *   push() and pop() can also be nested to create
         *   subgroups. For example, the code snippet above
         *   could be changed to give more detail to the frog’s
         *   eyes:
         *
         *   // Begin the drawing group. push(); // Translate
         *   the origin to the mouse's position.
         *   translate(mouseX, mouseY); // Style the face.
         *   noStroke(); fill('green'); // Draw a face.
         *   circle(0, 0, 60); // Style the eyes.
         *   fill('white'); // Draw the left eye. push();
         *   translate(-20, -20); ellipse(0, 0, 30, 20);
         *   fill('black'); circle(0, 0, 8); pop(); // Draw the
         *   right eye. push(); translate(20, -20); ellipse(0,
         *   0, 30, 20); fill('black'); circle(0, 0, 8); pop();
         *   // End the drawing group. pop(); // Draw a bug.
         *   let x = random(0, 100); let y = random(0, 100);
         *   text('🦟', x, y);
         *
         *   In this version, the code to draw each eye is
         *   contained between its own push() and pop()
         *   functions. Doing so makes it easier to add details
         *   in the correct part of a drawing.
         *
         *   push() and pop() contain the effects of the
         *   following functions:
         *
         *   - fill()
         *   - noFill()
         *   - noStroke()
         *   - stroke()
         *   - tint()
         *   - noTint()
         *   - strokeWeight()
         *   - strokeCap()
         *   - strokeJoin()
         *   - imageMode()
         *   - rectMode()
         *   - ellipseMode()
         *   - colorMode()
         *   - textAlign()
         *   - textFont()
         *   - textSize()
         *   - textLeading()
         *   - applyMatrix()
         *   - resetMatrix()
         *   - rotate()
         *   - scale()
         *   - shearX()
         *   - shearY()
         *   - translate()
         *
         *   In WebGL mode, push() and pop() contain the
         *   effects of a few additional styles:
         *
         *   - setCamera()
         *   - ambientLight()
         *   - directionalLight()
         *   - pointLight() texture()
         *   - specularMaterial()
         *   - shininess()
         *   - normalMaterial()
         *   - shader()
         */
        pop(): void;

        /**
         *   Runs the code in draw() once. By default, draw()
         *   tries to run 60 times per second. Calling noLoop()
         *   stops draw() from repeating. Calling redraw() will
         *   execute the code in the draw() function a set
         *   number of times.
         *
         *   The parameter, n, is optional. If a number is
         *   passed, as in redraw(5), then the draw loop will
         *   run the given number of times. By default, n is 1.
         *   @param [n] number of times to run draw(). Defaults
         *   to 1.
         */
        redraw(n?: number): void;

        /**
         *   Creates a new sketch in "instance" mode. All p5.js
         *   sketches are instances of the p5 class. Put
         *   another way, all p5.js sketches are objects with
         *   methods including pInst.setup(), pInst.draw(),
         *   pInst.circle(), and pInst.fill(). By default,
         *   sketches run in "global mode" to hide some of this
         *   complexity.
         *
         *   In global mode, a default instance of the p5 class
         *   is created automatically. The default p5 instance
         *   searches the web page's source code for
         *   declarations of system functions such as setup(),
         *   draw(), and mousePressed(), then attaches those
         *   functions to itself as methods. Calling a function
         *   such as circle() in global mode actually calls the
         *   default p5 object's pInst.circle() method.
         *
         *   It's often helpful to isolate the code within
         *   sketches from the rest of the code on a web page.
         *   Two common use cases are web pages that use other
         *   JavaScript libraries and web pages with multiple
         *   sketches. "Instance mode" makes it easy to support
         *   both of these scenarios.
         *
         *   Instance mode sketches support the same API as
         *   global mode sketches. They use a function to
         *   bundle, or encapsulate, an entire sketch. The
         *   function containing the sketch is then passed to
         *   the p5() constructor.
         *
         *   The first parameter, sketch, is a function that
         *   contains the sketch. For example, the statement
         *   new p5(mySketch) would create a new instance mode
         *   sketch from a function named mySketch. The
         *   function should have one parameter, p, that's a p5
         *   object.
         *
         *   The second parameter, node, is optional. If a
         *   string is passed, as in new p5(mySketch,
         *   'sketch-one') the new instance mode sketch will
         *   become a child of the HTML element with the id
         *   sketch-one. If an HTML element is passed, as in
         *   new p5(mySketch, myElement), then the new instance
         *   mode sketch will become a child of the Element
         *   object called myElement.
         *   @param sketch function containing the sketch.
         *   @param node ID or reference to the HTML element
         *   that will contain the sketch.
         */
        p5(sketch: object, node: string | HTMLElement): void;
    }
}
