// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class PrintWriter {
        /**
         *   Writes data to the print stream without adding new
         *   lines. The parameter, data, is the data to write.
         *   data can be a number or string, as in
         *   myWriter.write('hi'), or an array of numbers and
         *   strings, as in myWriter.write([1, 2, 3]). A comma
         *   will be inserted between array array elements when
         *   they're added to the print stream.
         *   @param data data to be written as a string,
         *   number, or array of strings and numbers.
         */
        write(data: string | number | any[]): void;

        /**
         *   Writes data to the print stream with new lines
         *   added. The parameter, data, is the data to write.
         *   data can be a number or string, as in
         *   myWriter.print('hi'), or an array of numbers and
         *   strings, as in myWriter.print([1, 2, 3]). A comma
         *   will be inserted between array array elements when
         *   they're added to the print stream.
         *   @param data data to be written as a string,
         *   number, or array of strings and numbers.
         */
        print(data: string | number | any[]): void;

        /**
         *   Clears all data from the print stream.
         */
        clear(): void;

        /**
         *   Saves the file and closes the print stream.
         */
        close(): void;
    }
    interface p5InstanceExtensions {
        /**
         *   Loads a JSON file to create an Object. JavaScript
         *   Object Notation (JSON) is a standard format for
         *   sending data between applications. The format is
         *   based on JavaScript objects which have keys and
         *   values. JSON files store data in an object with
         *   strings as keys. Values can be strings, numbers,
         *   Booleans, arrays, null, or other objects.
         *
         *   The first parameter, path, is always a string with
         *   the path to the file. Paths to local files should
         *   be relative, as in loadJSON('assets/data.json').
         *   URLs such as 'https://example.com/data.json' may
         *   be blocked due to browser security.
         *
         *   The second parameter, successCallback, is
         *   optional. If a function is passed, as in
         *   loadJSON('assets/data.json', handleData), then the
         *   handleData() function will be called once the data
         *   loads. The object created from the JSON data will
         *   be passed to handleData() as its only argument.
         *
         *   The third parameter, failureCallback, is also
         *   optional. If a function is passed, as in
         *   loadJSON('assets/data.json', handleData,
         *   handleFailure), then the handleFailure() function
         *   will be called if an error occurs while loading.
         *   The Error object will be passed to handleFailure()
         *   as its only argument.
         *
         *   Note: Data can take time to load. Calling
         *   loadJSON() within preload() ensures data loads
         *   before it's used in setup() or draw().
         *   @param path path of the JSON file to be loaded.
         *   @param [successCallback] function to call once the
         *   data is loaded. Will be passed the object.
         *   @param [errorCallback] function to call if the
         *   data fails to load. Will be passed an Error event
         *   object.
         *   @return object containing the loaded data.
         */
        loadJSON(
            path: string,
            successCallback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object;

        /**
         *   Loads a text file to create an Array. The first
         *   parameter, path, is always a string with the path
         *   to the file. Paths to local files should be
         *   relative, as in loadStrings('assets/data.txt').
         *   URLs such as 'https://example.com/data.txt' may be
         *   blocked due to browser security.
         *
         *   The second parameter, successCallback, is
         *   optional. If a function is passed, as in
         *   loadStrings('assets/data.txt', handleData), then
         *   the handleData() function will be called once the
         *   data loads. The array created from the text data
         *   will be passed to handleData() as its only
         *   argument.
         *
         *   The third parameter, failureCallback, is also
         *   optional. If a function is passed, as in
         *   loadStrings('assets/data.txt', handleData,
         *   handleFailure), then the handleFailure() function
         *   will be called if an error occurs while loading.
         *   The Error object will be passed to handleFailure()
         *   as its only argument.
         *
         *   Note: Data can take time to load. Calling
         *   loadStrings() within preload() ensures data loads
         *   before it's used in setup() or draw().
         *   @param path path of the text file to be loaded.
         *   @param [successCallback] function to call once the
         *   data is loaded. Will be passed the array.
         *   @param [errorCallback] function to call if the
         *   data fails to load. Will be passed an Error event
         *   object.
         *   @return new array containing the loaded text.
         */
        loadStrings(
            path: string,
            successCallback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): string[];

        /**
         *   Reads the contents of a file or URL and creates a
         *   p5.Table object with its values. If a file is
         *   specified, it must be located in the sketch's
         *   "data" folder. The filename parameter can also be
         *   a URL to a file found online. By default, the file
         *   is assumed to be comma-separated (in CSV format).
         *   Table only looks for a header row if the 'header'
         *   option is included. This method is asynchronous,
         *   meaning it may not finish before the next line in
         *   your sketch is executed. Calling loadTable()
         *   inside preload() guarantees to complete the
         *   operation before setup() and draw() are called.
         *   Outside of preload(), you may supply a callback
         *   function to handle the object:
         *
         *   All files loaded and saved use UTF-8 encoding.
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param filename name of the file or URL to load
         *   @param [extension] parse the table by
         *   comma-separated values "csv", semicolon-separated
         *   values "ssv", or tab-separated values "tsv"
         *   @param [header] "header" to indicate table has
         *   header row
         *   @param [callback] function to be executed after
         *   loadTable() completes. On success, the Table
         *   object is passed in as the first argument.
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return Table object containing data
         */
        loadTable(
            filename: string,
            extension?: string,
            header?: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object;

        /**
         *   Loads an XML file to create a p5.XML object.
         *   Extensible Markup Language (XML) is a standard
         *   format for sending data between applications. Like
         *   HTML, the XML format is based on tags and
         *   attributes, as in <time units="s">1234</time>.
         *
         *   The first parameter, path, is always a string with
         *   the path to the file. Paths to local files should
         *   be relative, as in loadXML('assets/data.xml').
         *   URLs such as 'https://example.com/data.xml' may be
         *   blocked due to browser security.
         *
         *   The second parameter, successCallback, is
         *   optional. If a function is passed, as in
         *   loadXML('assets/data.xml', handleData), then the
         *   handleData() function will be called once the data
         *   loads. The p5.XML object created from the data
         *   will be passed to handleData() as its only
         *   argument.
         *
         *   The third parameter, failureCallback, is also
         *   optional. If a function is passed, as in
         *   loadXML('assets/data.xml', handleData,
         *   handleFailure), then the handleFailure() function
         *   will be called if an error occurs while loading.
         *   The Error object will be passed to handleFailure()
         *   as its only argument.
         *
         *   Note: Data can take time to load. Calling
         *   loadXML() within preload() ensures data loads
         *   before it's used in setup() or draw().
         *   @param path path of the XML file to be loaded.
         *   @param [successCallback] function to call once the
         *   data is loaded. Will be passed the p5.XML object.
         *   @param [errorCallback] function to call if the
         *   data fails to load. Will be passed an Error event
         *   object.
         *   @return XML data loaded into a p5.XML object.
         */
        loadXML(path: string, successCallback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): XML;

        /**
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param file name of the file or URL to load
         *   @param [callback] function to be executed after
         *   loadBytes() completes
         *   @param [errorCallback] function to be executed if
         *   there is an error
         *   @return an object whose 'bytes' property will be
         *   the loaded buffer
         */
        loadBytes(file: string, callback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): object;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param [datatype] "json", "jsonp", "binary",
         *   "arrayBuffer", "xml", or "text"
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpGet(
            path: string,
            datatype?: string,
            data?: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param data param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpGet(
            path: string,
            data: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param callback function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpGet(path: string, callback: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param [datatype] "json", "jsonp", "xml", or
         *   "text". If omitted, httpPost() will guess.
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpPost(
            path: string,
            datatype?: string,
            data?: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param data param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpPost(
            path: string,
            data: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param callback function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpPost(
            path: string,
            callback: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP request. If data type
         *   is not specified, p5 will try to guess based on
         *   the URL, defaulting to text. For more advanced
         *   use, you may also pass in the path as the first
         *   argument and a object as the second argument, the
         *   signature follows the one specified in the Fetch
         *   API specification. This method is suitable for
         *   fetching files up to size of 64MB when "GET" is
         *   used.
         *   @param path name of the file or url to load
         *   @param [method] either "GET", "POST", or "PUT",
         *   defaults to "GET"
         *   @param [datatype] "json", "jsonp", "xml", or
         *   "text"
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpDo(
            path: string,
            method?: string,
            datatype?: string,
            data?: object,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP request. If data type
         *   is not specified, p5 will try to guess based on
         *   the URL, defaulting to text. For more advanced
         *   use, you may also pass in the path as the first
         *   argument and a object as the second argument, the
         *   signature follows the one specified in the Fetch
         *   API specification. This method is suitable for
         *   fetching files up to size of 64MB when "GET" is
         *   used.
         *   @param path name of the file or url to load
         *   @param options Request object options as
         *   documented in the "fetch" API reference
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpDo(
            path: string,
            options: object,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Creates a new p5.PrintWriter object.
         *   p5.PrintWriter objects provide a way to save a
         *   sequence of text data, called the print stream, to
         *   the user's computer. They're low-level objects
         *   that enable precise control of text output.
         *   Functions such as saveStrings() and saveJSON() are
         *   easier to use for simple file saving.
         *
         *   The first parameter, filename, is the name of the
         *   file to be written. If a string is passed, as in
         *   createWriter('words.txt'), a new p5.PrintWriter
         *   object will be created that writes to a file named
         *   words.txt.
         *
         *   The second parameter, extension, is optional. If a
         *   string is passed, as in createWriter('words',
         *   'csv'), the first parameter will be interpreted as
         *   the file name and the second parameter as the
         *   extension.
         *   @param name name of the file to create.
         *   @param [extension] format to use for the file.
         *   @return stream for writing data.
         */
        createWriter(name: string, extension?: string): PrintWriter;

        /**
         *   Saves a given element(image, text, json, csv, wav,
         *   or html) to the client's computer. The first
         *   parameter can be a pointer to element we want to
         *   save. The element can be one of p5.Element,an
         *   Array of Strings, an Array of JSON, a JSON object,
         *   a p5.Table , a p5.Image, or a p5.SoundFile
         *   (requires p5.sound). The second parameter is a
         *   filename (including extension).The third parameter
         *   is for options specific to this type of object.
         *   This method will save a file that fits the given
         *   parameters. If it is called without specifying an
         *   element, by default it will save the whole canvas
         *   as an image file. You can optionally specify a
         *   filename as the first parameter in such a case.
         *   Note that it is not recommended to call this
         *   method within draw, as it will open a new save
         *   dialog on every render.
         *   @param [objectOrFilename] If filename is provided,
         *   will save canvas as an image with either png or
         *   jpg extension depending on the filename. If object
         *   is provided, will save depending on the object and
         *   filename (see examples above).
         *   @param [filename] If an object is provided as the
         *   first parameter, then the second parameter
         *   indicates the filename, and should include an
         *   appropriate file extension (see examples above).
         *   @param [options] Additional options depend on
         *   filetype. For example, when saving JSON, true
         *   indicates that the output will be optimized for
         *   filesize, rather than readability.
         */
        save(objectOrFilename?: object | string, filename?: string, options?: boolean | string): void;

        /**
         *   Saves an Object or Array to a JSON file.
         *   JavaScript Object Notation (JSON) is a standard
         *   format for sending data between applications. The
         *   format is based on JavaScript objects which have
         *   keys and values. JSON files store data in an
         *   object with strings as keys. Values can be
         *   strings, numbers, Booleans, arrays, null, or other
         *   objects.
         *
         *   The first parameter, json, is the data to save.
         *   The data can be an array, as in [1, 2, 3], or an
         *   object, as in { x: 50, y: 50, color: 'deeppink' }.
         *
         *   The second parameter, filename, is a string that
         *   sets the file's name. For example, calling
         *   saveJSON([1, 2, 3], 'data.json') saves the array
         *   [1, 2, 3] to a file called data.json on the user's
         *   computer.
         *
         *   The third parameter, optimize, is optional. If
         *   true is passed, as in saveJSON([1, 2, 3],
         *   'data.json', true), then all unneeded whitespace
         *   will be removed to reduce the file size.
         *
         *   Note: The browser will either save the file
         *   immediately or prompt the user with a dialogue
         *   window.
         *   @param json data to save.
         *   @param filename name of the file to be saved.
         *   @param [optimize] whether to trim unneeded
         *   whitespace. Defaults to true.
         */
        saveJSON(json: any[] | object, filename: string, optimize?: boolean): void;

        /**
         *   Saves an Array of Strings to a file, one per line.
         *   The first parameter, list, is an array with the
         *   strings to save.
         *
         *   The second parameter, filename, is a string that
         *   sets the file's name. For example, calling
         *   saveStrings(['0', '01', '011'], 'data.txt') saves
         *   the array ['0', '01', '011'] to a file called
         *   data.txt on the user's computer.
         *
         *   The third parameter, extension, is optional. If a
         *   string is passed, as in saveStrings(['0', '01',
         *   '01'], 'data', 'txt')`, the second parameter will
         *   be interpreted as the file name and the third
         *   parameter as the extension.
         *
         *   The fourth parameter, isCRLF, is also optional, If
         *   true is passed, as in saveStrings(['0', '01',
         *   '011'], 'data', 'txt', true), then two characters,
         *   \r\n , will be added to the end of each string to
         *   create new lines in the saved file. \r is a
         *   carriage return (CR) and \n is a line feed (LF).
         *   By default, only \n (line feed) is added to each
         *   string in order to create new lines.
         *
         *   Note: The browser will either save the file
         *   immediately or prompt the user with a dialogue
         *   window.
         *   @param list data to save.
         *   @param filename name of file to be saved.
         *   @param [extension] format to use for the file.
         *   @param [isCRLF] whether to add \r\n to the end of
         *   each string. Defaults to false.
         */
        saveStrings(list: string[], filename: string, extension?: string, isCRLF?: boolean): void;

        /**
         *   Writes the contents of a Table object to a file.
         *   Defaults to a text file with
         *   comma-separated-values ('csv') but can also use
         *   tab separation ('tsv'), or generate an HTML table
         *   ('html'). The file saving process and location of
         *   the saved file will vary between web browsers.
         *   @param Table the Table object to save to a file
         *   @param filename the filename to which the Table
         *   should be saved
         *   @param [options] can be one of "tsv", "csv", or
         *   "html"
         */
        saveTable(Table: Table, filename: string, options?: string): void;
    }
}
