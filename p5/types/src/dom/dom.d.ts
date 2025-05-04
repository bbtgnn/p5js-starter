// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class MediaElement extends Element {
        /**
         *   A class to handle audio and video. p5.MediaElement
         *   extends p5.Element with methods to handle audio
         *   and video. p5.MediaElement objects are created by
         *   calling createVideo, createAudio, and
         *   createCapture.
         *
         *   @param elt DOM node that is wrapped
         */
        constructor(elt: string);

        /**
         *   Plays audio or video from a media element.
         *   @chainable
         */
        play(): MediaElement;

        /**
         *   Stops a media element and sets its current time to
         *   0. Calling media.play() will restart playing
         *   audio/video from the beginning.
         *   @chainable
         */
        stop(): MediaElement;

        /**
         *   Pauses a media element. Calling media.play() will
         *   resume playing audio/video from the moment it
         *   paused.
         *   @chainable
         */
        pause(): MediaElement;

        /**
         *   Plays the audio/video repeatedly in a loop.
         *   @chainable
         */
        loop(): MediaElement;

        /**
         *   Stops the audio/video from playing in a loop. The
         *   media will stop when it finishes playing.
         *   @chainable
         */
        noLoop(): MediaElement;

        /**
         *   Sets the audio/video to play once it's loaded. The
         *   parameter, shouldAutoplay, is optional. Calling
         *   media.autoplay() without an argument causes the
         *   media to play automatically. If true is passed, as
         *   in media.autoplay(true), the media will
         *   automatically play. If false is passed, as in
         *   media.autoPlay(false), it won't play
         *   automatically.
         *   @param [shouldAutoplay] whether the element should
         *   autoplay.
         *   @chainable
         */
        autoplay(shouldAutoplay?: boolean): MediaElement;

        /**
         *   Sets the audio/video volume. Calling
         *   media.volume() without an argument returns the
         *   current volume as a number in the range 0 (off) to
         *   1 (maximum).
         *
         *   The parameter, val, is optional. It's a number
         *   that sets the volume from 0 (off) to 1 (maximum).
         *   For example, calling media.volume(0.5) sets the
         *   volume to half of its maximum.
         *   @return current volume.
         */
        volume(): number;

        /**
         *   Sets the audio/video volume. Calling
         *   media.volume() without an argument returns the
         *   current volume as a number in the range 0 (off) to
         *   1 (maximum).
         *
         *   The parameter, val, is optional. It's a number
         *   that sets the volume from 0 (off) to 1 (maximum).
         *   For example, calling media.volume(0.5) sets the
         *   volume to half of its maximum.
         *   @param val volume between 0.0 and 1.0.
         *   @chainable
         */
        volume(val: number): MediaElement;

        /**
         *   Sets the audio/video playback speed. The
         *   parameter, val, is optional. It's a number that
         *   sets the playback speed. 1 plays the media at
         *   normal speed, 0.5 plays it at half speed, 2 plays
         *   it at double speed, and so on. -1 plays the media
         *   at normal speed in reverse.
         *
         *   Calling media.speed() returns the current speed as
         *   a number.
         *
         *   Note: Not all browsers support backward playback.
         *   Even if they do, playback might not be smooth.
         *   @return current playback speed.
         */
        speed(): number;

        /**
         *   Sets the audio/video playback speed. The
         *   parameter, val, is optional. It's a number that
         *   sets the playback speed. 1 plays the media at
         *   normal speed, 0.5 plays it at half speed, 2 plays
         *   it at double speed, and so on. -1 plays the media
         *   at normal speed in reverse.
         *
         *   Calling media.speed() returns the current speed as
         *   a number.
         *
         *   Note: Not all browsers support backward playback.
         *   Even if they do, playback might not be smooth.
         *   @param speed speed multiplier for playback.
         *   @chainable
         */
        speed(speed: number): MediaElement;

        /**
         *   Sets the media element's playback time. The
         *   parameter, time, is optional. It's a number that
         *   specifies the time, in seconds, to jump to when
         *   playback begins.
         *
         *   Calling media.time() without an argument returns
         *   the number of seconds the audio/video has played.
         *
         *   Note: Time resets to 0 when looping media
         *   restarts.
         *   @return current time (in seconds).
         */
        time(): number;

        /**
         *   Sets the media element's playback time. The
         *   parameter, time, is optional. It's a number that
         *   specifies the time, in seconds, to jump to when
         *   playback begins.
         *
         *   Calling media.time() without an argument returns
         *   the number of seconds the audio/video has played.
         *
         *   Note: Time resets to 0 when looping media
         *   restarts.
         *   @param time time to jump to (in seconds).
         *   @chainable
         */
        time(time: number): MediaElement;

        /**
         *   Returns the audio/video's duration in seconds.
         *   @return duration (in seconds).
         */
        duration(): number;

        /**
         *   Calls a function when the audio/video reaches the
         *   end of its playback. The element is passed as an
         *   argument to the callback function.
         *
         *   Note: The function won't be called if the media is
         *   looping.
         *   @param callback function to call when playback
         *   ends. The p5.MediaElement is passed as the
         *   argument.
         *   @chainable
         */
        onended(callback: (...args: any[]) => any): MediaElement;

        /**
         *   Sends the element's audio to an output. The
         *   parameter, audioNode, can be an AudioNode or an
         *   object from the p5.sound library.
         *
         *   If no element is provided, as in
         *   myElement.connect(), the element connects to the
         *   main output. All connections are removed by the
         *   .disconnect() method.
         *
         *   Note: This method is meant to be used with the
         *   p5.sound.js addon library.
         *   @param audioNode AudioNode from the Web Audio API,
         *   or an object from the p5.sound library
         */
        connect(audioNode: AudioNode | object): void;

        /**
         *   Disconnect all Web Audio routing, including to the
         *   main output. This is useful if you want to
         *   re-route the output through audio effects, for
         *   example.
         */
        disconnect(): void;

        /**
         *   Show the default HTMLMediaElement controls. Note:
         *   The controls vary between web browsers.
         */
        showControls(): void;

        /**
         *   Hide the default HTMLMediaElement controls.
         */
        hideControls(): void;

        /**
         *   Schedules a function to call when the audio/video
         *   reaches a specific time during its playback. The
         *   first parameter, time, is the time, in seconds,
         *   when the function should run. This value is passed
         *   to callback as its first argument.
         *
         *   The second parameter, callback, is the function to
         *   call at the specified cue time.
         *
         *   The third parameter, value, is optional and can be
         *   any type of value. value is passed to callback.
         *
         *   Calling media.addCue() returns an ID as a string.
         *   This is useful for removing the cue later.
         *   @param time cue time to run the callback function.
         *   @param callback function to call at the cue time.
         *   @param [value] object to pass as the argument to
         *   callback.
         *   @return id ID of this cue, useful for
         *   `media.removeCue(id)`.
         */
        addCue(time: number, callback: (...args: any[]) => any, value?: object): number;

        /**
         *   Removes a callback based on its ID.
         *   @param id ID of the cue, created by
         *   media.addCue().
         */
        removeCue(id: number): void;

        /**
         *   Removes all functions scheduled with
         *   media.addCue().
         */
        clearCues(): void;

        /**
         *   Path to the media element's source as a string.
         */
        src: any;
    }
    class File {
        /**
         *   A class to describe a file. p5.File objects are
         *   used by myElement.drop() and created by
         *   createFileInput.
         *
         *   @param file wrapped file.
         */
        constructor(file: File);

        /**
         *   Underlying File object. All File properties and
         *   methods are accessible.
         */
        file: any;

        /**
         *   The file MIME type as a string. For example,
         *   'image' and 'text' are both MIME types.
         */
        type: any;

        /**
         *   The file subtype as a string. For example, a file
         *   with an 'image' MIME type may have a subtype such
         *   as png or jpeg.
         */
        subtype: any;

        /**
         *   The file name as a string.
         */
        name: any;

        /**
         *   The number of bytes in the file.
         */
        size: any;

        /**
         *   A string containing the file's data. Data can be
         *   either image data, text contents, or a parsed
         *   object in the case of JSON and p5.XML objects.
         */
        data: any;
    }
    interface p5InstanceExtensions {
        /**
         *   Searches the page for the first element that
         *   matches the given CSS selector string. The
         *   selector string can be an ID, class, tag name, or
         *   a combination. select() returns a p5.Element
         *   object if it finds a match and null if not.
         *
         *   The second parameter, container, is optional. It
         *   specifies a container to search within. container
         *   can be CSS selector string, a p5.Element object,
         *   or an HTMLElement object.
         *   @param selectors CSS selector string of element to
         *   search for.
         *   @param [container] CSS selector string,
         *   p5.Element, or HTMLElement to search within.
         *   @return p5.Element containing the element.
         */
        select(selectors: string, container?: string | Element | HTMLElement): Element | null;

        /**
         *   Searches the page for all elements that matches
         *   the given CSS selector string. The selector string
         *   can be an ID, class, tag name, or a combination.
         *   selectAll() returns an array of p5.Element objects
         *   if it finds any matches and an empty array if none
         *   are found.
         *
         *   The second parameter, container, is optional. It
         *   specifies a container to search within. container
         *   can be CSS selector string, a p5.Element object,
         *   or an HTMLElement object.
         *   @param selectors CSS selector string of element to
         *   search for.
         *   @param [container] CSS selector string,
         *   p5.Element, or HTMLElement to search within.
         *   @return array of p5.Elements containing any
         *   elements found.
         */
        selectAll(selectors: string, container?: string | Element | HTMLElement): Element[];

        /**
         *   Removes all elements created by p5.js, including
         *   any event handlers. There are two exceptions:
         *   canvas elements created by createCanvas() and
         *   p5.Render objects created by createGraphics().
         */
        removeElements(): void;

        /**
         *   Calls a function when the element changes. Calling
         *   myElement.changed(false) disables the function.
         *   @param fxn function to call when the element
         *   changes. false disables the function.
         *   @chainable
         */
        changed(fxn: ((...args: any[]) => any) | boolean): p5;

        /**
         *   Calls a function when the element receives input.
         *   myElement.input() is often used to with text
         *   inputs and sliders. Calling myElement.input(false)
         *   disables the function.
         *   @param fxn function to call when input is detected
         *   within the element. false disables the function.
         *   @chainable
         */
        input(fxn: ((...args: any[]) => any) | boolean): p5;

        /**
         *   Creates a <div></div> element. <div></div>
         *   elements are commonly used as containers for other
         *   elements.
         *
         *   The parameter html is optional. It accepts a
         *   string that sets the inner HTML of the new
         *   <div></div>.
         *   @param [html] inner HTML for the new <div></div>
         *   element.
         *   @return new p5.Element object.
         */
        createDiv(html?: string): Element;

        /**
         *   Creates a paragraph element. <p></p> elements are
         *   commonly used for paragraph-length text.
         *
         *   The parameter html is optional. It accepts a
         *   string that sets the inner HTML of the new
         *   <p></p>.
         *   @param [html] inner HTML for the new <p></p>
         *   element.
         *   @return new p5.Element object.
         */
        createP(html?: string): Element;

        /**
         *   Creates a <span></span> element. <span></span>
         *   elements are commonly used as containers for
         *   inline elements. For example, a <span></span> can
         *   hold part of a sentence that's a different style.
         *
         *   The parameter html is optional. It accepts a
         *   string that sets the inner HTML of the new
         *   <span></span>.
         *   @param [html] inner HTML for the new <span></span>
         *   element.
         *   @return new p5.Element object.
         */
        createSpan(html?: string): Element;

        /**
         *   Creates an <img> element that can appear outside
         *   of the canvas. The first parameter, src, is a
         *   string with the path to the image file. src should
         *   be a relative path, as in 'assets/image.png', or a
         *   URL, as in 'https://example.com/image.png'.
         *
         *   The second parameter, alt, is a string with the
         *   alternate text for the image. An empty string ''
         *   can be used for images that aren't displayed.
         *
         *   The third parameter, crossOrigin, is optional.
         *   It's a string that sets the crossOrigin property
         *   of the image. Use 'anonymous' or 'use-credentials'
         *   to fetch the image with cross-origin access.
         *
         *   The fourth parameter, callback, is also optional.
         *   It sets a function to call after the image loads.
         *   The new image is passed to the callback function
         *   as a p5.Element object.
         *   @param src relative path or URL for the image.
         *   @param alt alternate text for the image.
         *   @return new p5.Element object.
         */
        createImg(src: string, alt: string): Element;

        /**
         *   Creates an <img> element that can appear outside
         *   of the canvas. The first parameter, src, is a
         *   string with the path to the image file. src should
         *   be a relative path, as in 'assets/image.png', or a
         *   URL, as in 'https://example.com/image.png'.
         *
         *   The second parameter, alt, is a string with the
         *   alternate text for the image. An empty string ''
         *   can be used for images that aren't displayed.
         *
         *   The third parameter, crossOrigin, is optional.
         *   It's a string that sets the crossOrigin property
         *   of the image. Use 'anonymous' or 'use-credentials'
         *   to fetch the image with cross-origin access.
         *
         *   The fourth parameter, callback, is also optional.
         *   It sets a function to call after the image loads.
         *   The new image is passed to the callback function
         *   as a p5.Element object.
         *   @param src relative path or URL for the image.
         *   @param alt alternate text for the image.
         *   @param [crossOrigin] crossOrigin property to use
         *   when fetching the image.
         *   @param [successCallback] function to call once the
         *   image loads. The new image will be passed to the
         *   function as a p5.Element object.
         *   @return new p5.Element object.
         */
        createImg(src: string, alt: string, crossOrigin?: string, successCallback?: (...args: any[]) => any): Element;

        /**
         *   Creates an <a></a> element that links to another
         *   web page. The first parmeter, href, is a string
         *   that sets the URL of the linked page.
         *
         *   The second parameter, html, is a string that sets
         *   the inner HTML of the link. It's common to use
         *   text, images, or buttons as links.
         *
         *   The third parameter, target, is optional. It's a
         *   string that tells the web browser where to open
         *   the link. By default, links open in the current
         *   browser tab. Passing '_blank' will cause the link
         *   to open in a new browser tab. MDN describes a few
         *   other options.
         *   @param href URL of linked page.
         *   @param html inner HTML of link element to display.
         *   @param [target] target where the new link should
         *   open, either '_blank', '_self', '_parent', or
         *   '_top'.
         *   @return new p5.Element object.
         */
        createA(href: string, html: string, target?: string): Element;

        /**
         *   Creates a slider <input></input> element. Range
         *   sliders are useful for quickly selecting numbers
         *   from a given range.
         *
         *   The first two parameters, min and max, are numbers
         *   that set the slider's minimum and maximum.
         *
         *   The third parameter, value, is optional. It's a
         *   number that sets the slider's default value.
         *
         *   The fourth parameter, step, is also optional. It's
         *   a number that sets the spacing between each value
         *   in the slider's range. Setting step to 0 allows
         *   the slider to move smoothly from min to max.
         *   @param min minimum value of the slider.
         *   @param max maximum value of the slider.
         *   @param [value] default value of the slider.
         *   @param [step] size for each step in the slider's
         *   range.
         *   @return new p5.Element object.
         */
        createSlider(min: number, max: number, value?: number, step?: number): Element;

        /**
         *   Creates a <button></button> element. The first
         *   parameter, label, is a string that sets the label
         *   displayed on the button.
         *
         *   The second parameter, value, is optional. It's a
         *   string that sets the button's value. See MDN for
         *   more details.
         *   @param label label displayed on the button.
         *   @param [value] value of the button.
         *   @return new p5.Element object.
         */
        createButton(label: string, value?: string): Element;

        /**
         *   Creates a checkbox <input></input> element.
         *   Checkboxes extend the p5.Element class with a
         *   checked() method. Calling myBox.checked() returns
         *   true if it the box is checked and false if not.
         *
         *   The first parameter, label, is optional. It's a
         *   string that sets the label to display next to the
         *   checkbox.
         *
         *   The second parameter, value, is also optional.
         *   It's a boolean that sets the checkbox's value.
         *   @param [label] label displayed after the checkbox.
         *   @param [value] value of the checkbox. Checked is
         *   true and unchecked is false.
         *   @return new p5.Element object.
         */
        createCheckbox(label?: string, value?: boolean): Element;

        /**
         *   Creates a dropdown menu <select></select> element.
         *   The parameter is optional. If true is passed, as
         *   in let mySelect = createSelect(true), then the
         *   dropdown will support multiple selections. If an
         *   existing <select></select> element is passed, as
         *   in let mySelect = createSelect(otherSelect), the
         *   existing element will be wrapped in a new
         *   p5.Element object.
         *
         *   Dropdowns extend the p5.Element class with a few
         *   helpful methods for managing options:
         *
         *   - mySelect.option(name, [value]) adds an option to
         *   the menu. The first paremeter, name, is a string
         *   that sets the option's name and value. The second
         *   parameter, value, is optional. If provided, it
         *   sets the value that corresponds to the key name.
         *   If an option with name already exists, its value
         *   is changed to value.
         *   - mySelect.value() returns the currently-selected
         *   option's value.
         *   - mySelect.selected() returns the
         *   currently-selected option.
         *   - mySelect.selected(option) selects the given
         *   option by default.
         *   - mySelect.disable() marks the whole dropdown
         *   element as disabled.
         *   - mySelect.disable(option) marks a given option as
         *   disabled.
         *   - mySelect.enable() marks the whole dropdown
         *   element as enabled.
         *   - mySelect.enable(option) marks a given option as
         *   enabled.
         *   @param [multiple] support multiple selections.
         *   @return new p5.Element object.
         */
        createSelect(multiple?: boolean): Element;

        /**
         *   Creates a dropdown menu <select></select> element.
         *   The parameter is optional. If true is passed, as
         *   in let mySelect = createSelect(true), then the
         *   dropdown will support multiple selections. If an
         *   existing <select></select> element is passed, as
         *   in let mySelect = createSelect(otherSelect), the
         *   existing element will be wrapped in a new
         *   p5.Element object.
         *
         *   Dropdowns extend the p5.Element class with a few
         *   helpful methods for managing options:
         *
         *   - mySelect.option(name, [value]) adds an option to
         *   the menu. The first paremeter, name, is a string
         *   that sets the option's name and value. The second
         *   parameter, value, is optional. If provided, it
         *   sets the value that corresponds to the key name.
         *   If an option with name already exists, its value
         *   is changed to value.
         *   - mySelect.value() returns the currently-selected
         *   option's value.
         *   - mySelect.selected() returns the
         *   currently-selected option.
         *   - mySelect.selected(option) selects the given
         *   option by default.
         *   - mySelect.disable() marks the whole dropdown
         *   element as disabled.
         *   - mySelect.disable(option) marks a given option as
         *   disabled.
         *   - mySelect.enable() marks the whole dropdown
         *   element as enabled.
         *   - mySelect.enable(option) marks a given option as
         *   enabled.
         *   @param existing select element to wrap, either as
         *   a p5.Element or a HTMLSelectElement.
         */
        createSelect(existing: object): Element;

        /**
         *   Creates a radio button element. The parameter is
         *   optional. If a string is passed, as in let myRadio
         *   = createSelect('food'), then each radio option
         *   will have "food" as its name parameter: <input
         *   name="food">. If an existing <div></div> or
         *   <span></span> element is passed, as in let myRadio
         *   = createSelect(container), it will become the
         *   radio button's parent element.
         *
         *   Radio buttons extend the p5.Element class with a
         *   few helpful methods for managing options:
         *
         *   - myRadio.option(value, [label]) adds an option to
         *   the menu. The first parameter, value, is a string
         *   that sets the option's value and label. The second
         *   parameter, label, is optional. If provided, it
         *   sets the label displayed for the value. If an
         *   option with value already exists, its label is
         *   changed and its value is returned.
         *   - myRadio.value() returns the currently-selected
         *   option's value.
         *   - myRadio.selected() returns the
         *   currently-selected option.
         *   - myRadio.selected(value) selects the given option
         *   and returns it as an HTMLInputElement.
         *   - myRadio.disable(shouldDisable) Disables the
         *   radio button if true is passed, and enables it if
         *   false is passed.
         *   @param [containerElement] container HTML Element,
         *   either a <div></div> or <span></span>.
         *   @return new p5.Element object.
         */
        createRadio(containerElement?: object): Element;

        /**
         *   Creates a radio button element. The parameter is
         *   optional. If a string is passed, as in let myRadio
         *   = createSelect('food'), then each radio option
         *   will have "food" as its name parameter: <input
         *   name="food">. If an existing <div></div> or
         *   <span></span> element is passed, as in let myRadio
         *   = createSelect(container), it will become the
         *   radio button's parent element.
         *
         *   Radio buttons extend the p5.Element class with a
         *   few helpful methods for managing options:
         *
         *   - myRadio.option(value, [label]) adds an option to
         *   the menu. The first parameter, value, is a string
         *   that sets the option's value and label. The second
         *   parameter, label, is optional. If provided, it
         *   sets the label displayed for the value. If an
         *   option with value already exists, its label is
         *   changed and its value is returned.
         *   - myRadio.value() returns the currently-selected
         *   option's value.
         *   - myRadio.selected() returns the
         *   currently-selected option.
         *   - myRadio.selected(value) selects the given option
         *   and returns it as an HTMLInputElement.
         *   - myRadio.disable(shouldDisable) Disables the
         *   radio button if true is passed, and enables it if
         *   false is passed.
         *   @param [name] name parameter assigned to each
         *   option's <input></input> element.
         *   @return new p5.Element object.
         */
        createRadio(name?: string): Element;

        /**
         *   Creates a radio button element. The parameter is
         *   optional. If a string is passed, as in let myRadio
         *   = createSelect('food'), then each radio option
         *   will have "food" as its name parameter: <input
         *   name="food">. If an existing <div></div> or
         *   <span></span> element is passed, as in let myRadio
         *   = createSelect(container), it will become the
         *   radio button's parent element.
         *
         *   Radio buttons extend the p5.Element class with a
         *   few helpful methods for managing options:
         *
         *   - myRadio.option(value, [label]) adds an option to
         *   the menu. The first parameter, value, is a string
         *   that sets the option's value and label. The second
         *   parameter, label, is optional. If provided, it
         *   sets the label displayed for the value. If an
         *   option with value already exists, its label is
         *   changed and its value is returned.
         *   - myRadio.value() returns the currently-selected
         *   option's value.
         *   - myRadio.selected() returns the
         *   currently-selected option.
         *   - myRadio.selected(value) selects the given option
         *   and returns it as an HTMLInputElement.
         *   - myRadio.disable(shouldDisable) Disables the
         *   radio button if true is passed, and enables it if
         *   false is passed.
         *   @return new p5.Element object.
         */
        createRadio(): Element;

        /**
         *   Creates a color picker element. The parameter,
         *   value, is optional. If a color string or p5.Color
         *   object is passed, it will set the default color.
         *
         *   Color pickers extend the p5.Element class with a
         *   couple of helpful methods for managing colors:
         *
         *   - myPicker.value() returns the current color as a
         *   hex string in the format '#rrggbb'.
         *   - myPicker.color() returns the current color as a
         *   p5.Color object.
         *   @param [value] default color as a CSS color
         *   string.
         *   @return new p5.Element object.
         */
        createColorPicker(value?: string | Color): Element;

        /**
         *   Creates a text <input></input> element. Call
         *   myInput.size() to set the length of the text box.
         *
         *   The first parameter, value, is optional. It's a
         *   string that sets the input's default value. The
         *   input is blank by default.
         *
         *   The second parameter, type, is also optional. It's
         *   a string that specifies the type of text being
         *   input. See MDN for a full list of options. The
         *   default is 'text'.
         *   @param [value] default value of the input box.
         *   Defaults to an empty string ''.
         *   @param [type] type of input. Defaults to 'text'.
         *   @return new p5.Element object.
         */
        createInput(value?: string, type?: string): Element;

        /**
         *   Creates a text <input></input> element. Call
         *   myInput.size() to set the length of the text box.
         *
         *   The first parameter, value, is optional. It's a
         *   string that sets the input's default value. The
         *   input is blank by default.
         *
         *   The second parameter, type, is also optional. It's
         *   a string that specifies the type of text being
         *   input. See MDN for a full list of options. The
         *   default is 'text'.
         *   @param [value] default value of the input box.
         *   Defaults to an empty string ''.
         */
        createInput(value?: string): Element;

        /**
         *   Creates an <input></input> element of type 'file'.
         *   createFileInput() allows users to select local
         *   files for use in a sketch. It returns a p5.File
         *   object.
         *
         *   The first parameter, callback, is a function
         *   that's called when the file loads. The callback
         *   function should have one parameter, file, that's a
         *   p5.File object.
         *
         *   The second parameter, multiple, is optional. It's
         *   a boolean value that allows loading multiple files
         *   if set to true. If true, callback will be called
         *   once per file.
         *   @param callback function to call once the file
         *   loads.
         *   @param [multiple] allow multiple files to be
         *   selected.
         *   @return new p5.File object.
         */
        createFileInput(callback: (...args: any[]) => any, multiple?: boolean): File;

        /**
         *   Creates a <video> element for simple audio/video
         *   playback. createVideo() returns a new
         *   p5.MediaElement object. Videos are shown by
         *   default. They can be hidden by calling
         *   video.hide() and drawn to the canvas using
         *   image().
         *
         *   The first parameter, src, is the path the video.
         *   If a single string is passed, as in
         *   'assets/topsecret.mp4', a single video is loaded.
         *   An array of strings can be used to load the same
         *   video in different formats. For example,
         *   ['assets/topsecret.mp4', 'assets/topsecret.ogv',
         *   'assets/topsecret.webm']. This is useful for
         *   ensuring that the video can play across different
         *   browsers with different capabilities. See MDN for
         *   more information about supported formats.
         *
         *   The second parameter, callback, is optional. It's
         *   a function to call once the video is ready to
         *   play.
         *   @param src path to a video file, or an array of
         *   paths for supporting different browsers.
         *   @param [callback] function to call once the video
         *   is ready to play.
         *   @return new p5.MediaElement object.
         */
        createVideo(src: string | string[], callback?: (...args: any[]) => any): MediaElement;

        /**
         *   Creates a hidden <audio> element for simple audio
         *   playback. createAudio() returns a new
         *   p5.MediaElement object.
         *
         *   The first parameter, src, is the path the video.
         *   If a single string is passed, as in
         *   'assets/video.mp4', a single video is loaded. An
         *   array of strings can be used to load the same
         *   video in different formats. For example,
         *   ['assets/video.mp4', 'assets/video.ogv',
         *   'assets/video.webm']. This is useful for ensuring
         *   that the video can play across different browsers
         *   with different capabilities. See MDN for more
         *   information about supported formats.
         *
         *   The second parameter, callback, is optional. It's
         *   a function to call once the audio is ready to
         *   play.
         *   @param [src] path to an audio file, or an array of
         *   paths for supporting different browsers.
         *   @param [callback] function to call once the audio
         *   is ready to play.
         *   @return new p5.MediaElement object.
         */
        createAudio(src?: string | string[], callback?: (...args: any[]) => any): MediaElement;

        /**
         *   Creates a <video> element that "captures" the
         *   audio/video stream from the webcam and microphone.
         *   createCapture() returns a new p5.MediaElement
         *   object. Videos are shown by default. They can be
         *   hidden by calling capture.hide() and drawn to the
         *   canvas using image().
         *
         *   The first parameter, type, is optional. It sets
         *   the type of capture to use. By default,
         *   createCapture() captures both audio and video. If
         *   VIDEO is passed, as in createCapture(VIDEO), only
         *   video will be captured. If AUDIO is passed, as in
         *   createCapture(AUDIO), only audio will be captured.
         *   A constraints object can also be passed to
         *   customize the stream. See the  W3C documentation
         *   for possible properties. Different browsers
         *   support different properties.
         *
         *   The 'flipped' property is an optional property
         *   which can be set to {flipped:true} to mirror the
         *   video output.If it is true then it means that
         *   video will be mirrored or flipped and if nothing
         *   is mentioned then by default it will be false.
         *
         *   The second parameter,callback, is optional. It's a
         *   function to call once the capture is ready for
         *   use. The callback function should have one
         *   parameter, stream, that's a MediaStream object.
         *
         *   Note: createCapture() only works when running a
         *   sketch locally or using HTTPS. Learn more here and
         *   here.
         *   @param [type] type of capture, either AUDIO or
         *   VIDEO, or a constraints object. Both video and
         *   audio audio streams are captured by default.
         *   @param [flipped] flip the capturing video and
         *   mirror the output with {flipped:true}. By default
         *   it is false.
         *   @param [callback] function to call once the stream
         *   has loaded.
         *   @return new p5.MediaElement object.
         */
        createCapture(
            type?: string | TYPE | object,
            flipped?: object,
            callback?: (...args: any[]) => any
        ): MediaElement;

        /**
         *   Creates a new p5.Element object. The first
         *   parameter, tag, is a string an HTML tag such as
         *   'h5'.
         *
         *   The second parameter, content, is optional. It's a
         *   string that sets the HTML content to insert into
         *   the new element. New elements have no content by
         *   default.
         *   @param tag tag for the new element.
         *   @param [content] HTML content to insert into the
         *   element.
         *   @return new p5.Element object.
         */
        createElement(tag: string, content?: string): Element;
    }
    interface Element {
        /**
         *   Adds a class to the element.
         *   @param class name of class to add.
         *   @chainable
         */
        addClass(theClass: string): Element;

        /**
         *   Removes a class from the element.
         *   @param class name of class to remove.
         *   @chainable
         */
        removeClass(theClass: string): Element;

        /**
         *   Checks if a class is already applied to element.
         *   @param c name of class to check.
         *   @return a boolean value if element has specified
         *   class.
         */
        hasClass(c: string): boolean;

        /**
         *   Toggles whether a class is applied to the element.
         *   @param c class name to toggle.
         *   @chainable
         */
        toggleClass(c: string): Element;

        /**
         *   Attaches the element as a child of another
         *   element. myElement.child() accepts either a string
         *   ID, DOM node, or p5.Element. For example,
         *   myElement.child(otherElement). If no argument is
         *   provided, an array of children DOM nodes is
         *   returned.
         *   @return an array of child nodes.
         */
        child(): Node[];

        /**
         *   Attaches the element as a child of another
         *   element. myElement.child() accepts either a string
         *   ID, DOM node, or p5.Element. For example,
         *   myElement.child(otherElement). If no argument is
         *   provided, an array of children DOM nodes is
         *   returned.
         *   @param [child] the ID, DOM node, or p5.Element to
         *   add to the current element
         *   @chainable
         */
        child(child?: string | Element): Element;

        /**
         *   Centers the element either vertically,
         *   horizontally, or both. center() will center the
         *   element relative to its parent or according to the
         *   page's body if the element has no parent.
         *
         *   If no argument is passed, as in myElement.center()
         *   the element is aligned both vertically and
         *   horizontally.
         *   @param [align] passing 'vertical', 'horizontal'
         *   aligns element accordingly
         *   @chainable
         */
        center(align?: string): Element;

        /**
         *   Sets the inner HTML of the element, replacing any
         *   existing HTML. The second parameter, append, is
         *   optional. If true is passed, as in
         *   myElement.html('hi', true), the HTML is appended
         *   instead of replacing existing HTML.
         *
         *   If no arguments are passed, as in
         *   myElement.html(), the element's inner HTML is
         *   returned.
         *   @return the inner HTML of the element
         */
        html(): string;

        /**
         *   Sets the inner HTML of the element, replacing any
         *   existing HTML. The second parameter, append, is
         *   optional. If true is passed, as in
         *   myElement.html('hi', true), the HTML is appended
         *   instead of replacing existing HTML.
         *
         *   If no arguments are passed, as in
         *   myElement.html(), the element's inner HTML is
         *   returned.
         *   @param [html] the HTML to be placed inside the
         *   element
         *   @param [append] whether to append HTML to existing
         *   @chainable
         */
        html(html?: string, append?: boolean): Element;

        /**
         *   Sets the element's position. The first two
         *   parameters, x and y, set the element's position
         *   relative to the top-left corner of the web page.
         *
         *   The third parameter, positionType, is optional. It
         *   sets the element's positioning scheme.
         *   positionType is a string that can be either
         *   'static', 'fixed', 'relative', 'sticky',
         *   'initial', or 'inherit'.
         *
         *   If no arguments passed, as in
         *   myElement.position(), the method returns the
         *   element's position in an object, as in { x: 0, y:
         *   0 }.
         *   @return object of form `{ x: 0, y: 0 }` containing
         *   the element's position.
         */
        position(): object;

        /**
         *   Sets the element's position. The first two
         *   parameters, x and y, set the element's position
         *   relative to the top-left corner of the web page.
         *
         *   The third parameter, positionType, is optional. It
         *   sets the element's positioning scheme.
         *   positionType is a string that can be either
         *   'static', 'fixed', 'relative', 'sticky',
         *   'initial', or 'inherit'.
         *
         *   If no arguments passed, as in
         *   myElement.position(), the method returns the
         *   element's position in an object, as in { x: 0, y:
         *   0 }.
         *   @param [x] x-position relative to top-left of
         *   window (optional)
         *   @param [y] y-position relative to top-left of
         *   window (optional)
         *   @param [positionType] it can be static, fixed,
         *   relative, sticky, initial or inherit (optional)
         *   @chainable
         */
        position(x?: number, y?: number, positionType?: string): Element;

        /**
         *   Applies a style to the element by adding a CSS
         *   declaration. The first parameter, property, is a
         *   string. If the name of a style property is passed,
         *   as in myElement.style('color'), the method returns
         *   the current value as a string or null if it hasn't
         *   been set. If a property:style string is passed, as
         *   in myElement.style('color:deeppink'), the method
         *   sets the style property to value.
         *
         *   The second parameter, value, is optional. It sets
         *   the property's value. value can be a string, as in
         *   myElement.style('color', 'deeppink'), or a
         *   p5.Color object, as in myElement.style('color',
         *   myColor).
         *   @param property style property to set.
         *   @return value of the property.
         */
        style(property: string): string;

        /**
         *   Applies a style to the element by adding a CSS
         *   declaration. The first parameter, property, is a
         *   string. If the name of a style property is passed,
         *   as in myElement.style('color'), the method returns
         *   the current value as a string or null if it hasn't
         *   been set. If a property:style string is passed, as
         *   in myElement.style('color:deeppink'), the method
         *   sets the style property to value.
         *
         *   The second parameter, value, is optional. It sets
         *   the property's value. value can be a string, as in
         *   myElement.style('color', 'deeppink'), or a
         *   p5.Color object, as in myElement.style('color',
         *   myColor).
         *   @param property style property to set.
         *   @param value value to assign to the property.
         *   @chainable
         */
        style(property: string, value: string | Color): Element;

        /**
         *   Adds an attribute to the element. This method is
         *   useful for advanced tasks. Most commonly-used
         *   attributes, such as id, can be set with their
         *   dedicated methods. For example,
         *   nextButton.id('next') sets an element's id
         *   attribute. Calling nextButton.attribute('id',
         *   'next') has the same effect.
         *
         *   The first parameter, attr, is the attribute's name
         *   as a string. Calling myElement.attribute('align')
         *   returns the attribute's current value as a string
         *   or null if it hasn't been set.
         *
         *   The second parameter, value, is optional. It's a
         *   string used to set the attribute's value. For
         *   example, calling myElement.attribute('align',
         *   'center') sets the element's horizontal alignment
         *   to center.
         *   @return value of the attribute.
         */
        attribute(): string;

        /**
         *   Adds an attribute to the element. This method is
         *   useful for advanced tasks. Most commonly-used
         *   attributes, such as id, can be set with their
         *   dedicated methods. For example,
         *   nextButton.id('next') sets an element's id
         *   attribute. Calling nextButton.attribute('id',
         *   'next') has the same effect.
         *
         *   The first parameter, attr, is the attribute's name
         *   as a string. Calling myElement.attribute('align')
         *   returns the attribute's current value as a string
         *   or null if it hasn't been set.
         *
         *   The second parameter, value, is optional. It's a
         *   string used to set the attribute's value. For
         *   example, calling myElement.attribute('align',
         *   'center') sets the element's horizontal alignment
         *   to center.
         *   @param attr attribute to set.
         *   @param value value to assign to the attribute.
         *   @chainable
         */
        attribute(attr: string, value: string): Element;

        /**
         *   Removes an attribute from the element. The
         *   parameter attr is the attribute's name as a
         *   string. For example, calling
         *   myElement.removeAttribute('align') removes its
         *   align attribute if it's been set.
         *   @param attr attribute to remove.
         *   @chainable
         */
        removeAttribute(attr: string): Element;

        /**
         *   Returns or sets the element's value. Calling
         *   myElement.value() returns the element's current
         *   value.
         *
         *   The parameter, value, is an optional number or
         *   string. If provided, as in myElement.value(123),
         *   it's used to set the element's value.
         *   @return value of the element.
         */
        value(): string | number;

        /**
         *   Returns or sets the element's value. Calling
         *   myElement.value() returns the element's current
         *   value.
         *
         *   The parameter, value, is an optional number or
         *   string. If provided, as in myElement.value(123),
         *   it's used to set the element's value.
         *   @chainable
         */
        value(value: string | number): Element;

        /**
         *   Shows the current element.
         *   @chainable
         */
        show(): Element;

        /**
         *   Hides the current element.
         *   @chainable
         */
        hide(): Element;

        /**
         *   Sets the element's width and height. Calling
         *   myElement.size() without an argument returns the
         *   element's size as an object with the properties
         *   width and height. For example, { width: 20,
         *   height: 10 }.
         *
         *   The first parameter, width, is optional. It's a
         *   number used to set the element's width. Calling
         *   myElement.size(10)
         *
         *   The second parameter, 'height, is also optional.
         *   It's a number used to set the element's height.
         *   For example, calling myElement.size(20, 10)` sets
         *   the element's width to 20 pixels and height to 10
         *   pixels.
         *
         *   The constant AUTO can be used to adjust one
         *   dimension at a time while maintaining the aspect
         *   ratio, which is width / height. For example,
         *   consider an element that's 200 pixels wide and 100
         *   pixels tall. Calling myElement.size(20, AUTO) sets
         *   the width to 20 pixels and height to 10 pixels.
         *
         *   Note: In the case of elements that need to load
         *   data, such as images, wait to call
         *   myElement.size() until after the data loads.
         *   @return width and height of the element in an
         *   object.
         */
        size(): object;

        /**
         *   Sets the element's width and height. Calling
         *   myElement.size() without an argument returns the
         *   element's size as an object with the properties
         *   width and height. For example, { width: 20,
         *   height: 10 }.
         *
         *   The first parameter, width, is optional. It's a
         *   number used to set the element's width. Calling
         *   myElement.size(10)
         *
         *   The second parameter, 'height, is also optional.
         *   It's a number used to set the element's height.
         *   For example, calling myElement.size(20, 10)` sets
         *   the element's width to 20 pixels and height to 10
         *   pixels.
         *
         *   The constant AUTO can be used to adjust one
         *   dimension at a time while maintaining the aspect
         *   ratio, which is width / height. For example,
         *   consider an element that's 200 pixels wide and 100
         *   pixels tall. Calling myElement.size(20, AUTO) sets
         *   the width to 20 pixels and height to 10 pixels.
         *
         *   Note: In the case of elements that need to load
         *   data, such as images, wait to call
         *   myElement.size() until after the data loads.
         *   @param [w] width of the element, either AUTO, or a
         *   number.
         *   @param [h] height of the element, either AUTO, or
         *   a number.
         *   @chainable
         */
        size(w?: number | SIZE_W, h?: number | SIZE_H): Element;

        /**
         *   Removes the element, stops all audio/video
         *   streams, and removes all callback functions.
         */
        remove(): void;

        /**
         *   Calls a function when the user drops a file on the
         *   element. The first parameter, callback, is a
         *   function to call once the file loads. The callback
         *   function should have one parameter, file, that's a
         *   p5.File object. If the user drops multiple files
         *   on the element, callback, is called once for each
         *   file.
         *
         *   The second parameter, fxn, is a function to call
         *   when the browser detects one or more dropped
         *   files. The callback function should have one
         *   parameter, event, that's a DragEvent.
         *   @param callback called when a file loads. Called
         *   once for each file dropped.
         *   @param [fxn] called once when any files are
         *   dropped.
         *   @chainable
         */
        drop(callback: (...args: any[]) => any, fxn?: (...args: any[]) => any): Element;

        /**
         *   Makes the element draggable. The parameter, elmnt,
         *   is optional. If another p5.Element object is
         *   passed, as in myElement.draggable(otherElement),
         *   the other element will become draggable.
         *   @param [elmnt] another p5.Element.
         *   @chainable
         */
        draggable(elmnt?: Element): Element;
    }
}
