// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads a 3D model to create a p5.Geometry object.
         *   loadModel() can load 3D models from OBJ and STL
         *   files. Once the model is loaded, it can be
         *   displayed with the model() function, as in
         *   model(shape).
         *
         *   There are three ways to call loadModel() with
         *   optional parameters to help process the model.
         *
         *   The first parameter, path, is always a String with
         *   the path to the file. Paths to local files should
         *   be relative, as in loadModel('assets/model.obj').
         *   URLs such as 'https://example.com/model.obj' may
         *   be blocked due to browser security.
         *
         *   Note: When loading a .obj file that references
         *   materials stored in .mtl files, p5.js will attempt
         *   to load and apply those materials. To ensure that
         *   the .obj file reads the .mtl file correctly
         *   include the .mtl file alongside it.
         *
         *   The first way to call loadModel() has three
         *   optional parameters after the file path. The first
         *   optional parameter, successCallback, is a function
         *   to call once the model loads. For example,
         *   loadModel('assets/model.obj', handleModel) will
         *   call the handleModel() function once the model
         *   loads. The second optional parameter,
         *   failureCallback, is a function to call if the
         *   model fails to load. For example,
         *   loadModel('assets/model.obj', handleModel,
         *   handleFailure) will call the handleFailure()
         *   function if an error occurs while loading. The
         *   third optional parameter, fileType, is the model’s
         *   file extension as a string. For example,
         *   loadModel('assets/model', handleModel,
         *   handleFailure, '.obj') will try to load the file
         *   model as a .obj file.
         *
         *   The second way to call loadModel() has four
         *   optional parameters after the file path. The first
         *   optional parameter is a Boolean value. If true is
         *   passed, as in loadModel('assets/model.obj', true),
         *   then the model will be resized to ensure it fits
         *   the canvas. The next three parameters are
         *   successCallback, failureCallback, and fileType as
         *   described above.
         *
         *   The third way to call loadModel() has one optional
         *   parameter after the file path. The optional
         *   parameter, options, is an Object with options, as
         *   in loadModel('assets/model.obj', options). The
         *   options object can have the following properties:
         *
         *   let options = { // Enables standardized size
         *   scaling during loading if set to true. normalize:
         *   true, // Function to call once the model loads.
         *   successCallback: handleModel, // Function to call
         *   if an error occurs while loading. failureCallback:
         *   handleError, // Model's file extension. fileType:
         *   '.stl', // Flips the U texture coordinates of the
         *   model. flipU: false, // Flips the V texture
         *   coordinates of the model. flipV: false }; // Pass
         *   the options object to loadModel().
         *   loadModel('assets/model.obj', options);
         *
         *   Models can take time to load. Calling loadModel()
         *   in preload() ensures models load before they're
         *   used in setup() or draw().
         *
         *   Note: There’s no support for colored STL files.
         *   STL files with color will be rendered without
         *   color.
         *   @param path path of the model to be loaded.
         *   @param normalize if true, scale the model to fit
         *   the canvas.
         *   @param [successCallback] function to call once the
         *   model is loaded. Will be passed the p5.Geometry
         *   object.
         *   @param [failureCallback] function to call if the
         *   model fails to load. Will be passed an Error event
         *   object.
         *   @param [fileType] model’s file extension. Either
         *   '.obj' or '.stl'.
         *   @return the p5.Geometry object
         */
        loadModel(
            path: string,
            normalize: boolean,
            successCallback?: (p1: Geometry) => any,
            failureCallback?: (p1: Event) => any,
            fileType?: string
        ): Geometry;

        /**
         *   Loads a 3D model to create a p5.Geometry object.
         *   loadModel() can load 3D models from OBJ and STL
         *   files. Once the model is loaded, it can be
         *   displayed with the model() function, as in
         *   model(shape).
         *
         *   There are three ways to call loadModel() with
         *   optional parameters to help process the model.
         *
         *   The first parameter, path, is always a String with
         *   the path to the file. Paths to local files should
         *   be relative, as in loadModel('assets/model.obj').
         *   URLs such as 'https://example.com/model.obj' may
         *   be blocked due to browser security.
         *
         *   Note: When loading a .obj file that references
         *   materials stored in .mtl files, p5.js will attempt
         *   to load and apply those materials. To ensure that
         *   the .obj file reads the .mtl file correctly
         *   include the .mtl file alongside it.
         *
         *   The first way to call loadModel() has three
         *   optional parameters after the file path. The first
         *   optional parameter, successCallback, is a function
         *   to call once the model loads. For example,
         *   loadModel('assets/model.obj', handleModel) will
         *   call the handleModel() function once the model
         *   loads. The second optional parameter,
         *   failureCallback, is a function to call if the
         *   model fails to load. For example,
         *   loadModel('assets/model.obj', handleModel,
         *   handleFailure) will call the handleFailure()
         *   function if an error occurs while loading. The
         *   third optional parameter, fileType, is the model’s
         *   file extension as a string. For example,
         *   loadModel('assets/model', handleModel,
         *   handleFailure, '.obj') will try to load the file
         *   model as a .obj file.
         *
         *   The second way to call loadModel() has four
         *   optional parameters after the file path. The first
         *   optional parameter is a Boolean value. If true is
         *   passed, as in loadModel('assets/model.obj', true),
         *   then the model will be resized to ensure it fits
         *   the canvas. The next three parameters are
         *   successCallback, failureCallback, and fileType as
         *   described above.
         *
         *   The third way to call loadModel() has one optional
         *   parameter after the file path. The optional
         *   parameter, options, is an Object with options, as
         *   in loadModel('assets/model.obj', options). The
         *   options object can have the following properties:
         *
         *   let options = { // Enables standardized size
         *   scaling during loading if set to true. normalize:
         *   true, // Function to call once the model loads.
         *   successCallback: handleModel, // Function to call
         *   if an error occurs while loading. failureCallback:
         *   handleError, // Model's file extension. fileType:
         *   '.stl', // Flips the U texture coordinates of the
         *   model. flipU: false, // Flips the V texture
         *   coordinates of the model. flipV: false }; // Pass
         *   the options object to loadModel().
         *   loadModel('assets/model.obj', options);
         *
         *   Models can take time to load. Calling loadModel()
         *   in preload() ensures models load before they're
         *   used in setup() or draw().
         *
         *   Note: There’s no support for colored STL files.
         *   STL files with color will be rendered without
         *   color.
         *   @param path path of the model to be loaded.
         *   @param [successCallback] function to call once the
         *   model is loaded. Will be passed the p5.Geometry
         *   object.
         *   @param [failureCallback] function to call if the
         *   model fails to load. Will be passed an Error event
         *   object.
         *   @param [fileType] model’s file extension. Either
         *   '.obj' or '.stl'.
         *   @return new p5.Geometry object.
         */
        loadModel(
            path: string,
            successCallback?: (p1: Geometry) => any,
            failureCallback?: (p1: Event) => any,
            fileType?: string
        ): Geometry;

        /**
         *   Loads a 3D model to create a p5.Geometry object.
         *   loadModel() can load 3D models from OBJ and STL
         *   files. Once the model is loaded, it can be
         *   displayed with the model() function, as in
         *   model(shape).
         *
         *   There are three ways to call loadModel() with
         *   optional parameters to help process the model.
         *
         *   The first parameter, path, is always a String with
         *   the path to the file. Paths to local files should
         *   be relative, as in loadModel('assets/model.obj').
         *   URLs such as 'https://example.com/model.obj' may
         *   be blocked due to browser security.
         *
         *   Note: When loading a .obj file that references
         *   materials stored in .mtl files, p5.js will attempt
         *   to load and apply those materials. To ensure that
         *   the .obj file reads the .mtl file correctly
         *   include the .mtl file alongside it.
         *
         *   The first way to call loadModel() has three
         *   optional parameters after the file path. The first
         *   optional parameter, successCallback, is a function
         *   to call once the model loads. For example,
         *   loadModel('assets/model.obj', handleModel) will
         *   call the handleModel() function once the model
         *   loads. The second optional parameter,
         *   failureCallback, is a function to call if the
         *   model fails to load. For example,
         *   loadModel('assets/model.obj', handleModel,
         *   handleFailure) will call the handleFailure()
         *   function if an error occurs while loading. The
         *   third optional parameter, fileType, is the model’s
         *   file extension as a string. For example,
         *   loadModel('assets/model', handleModel,
         *   handleFailure, '.obj') will try to load the file
         *   model as a .obj file.
         *
         *   The second way to call loadModel() has four
         *   optional parameters after the file path. The first
         *   optional parameter is a Boolean value. If true is
         *   passed, as in loadModel('assets/model.obj', true),
         *   then the model will be resized to ensure it fits
         *   the canvas. The next three parameters are
         *   successCallback, failureCallback, and fileType as
         *   described above.
         *
         *   The third way to call loadModel() has one optional
         *   parameter after the file path. The optional
         *   parameter, options, is an Object with options, as
         *   in loadModel('assets/model.obj', options). The
         *   options object can have the following properties:
         *
         *   let options = { // Enables standardized size
         *   scaling during loading if set to true. normalize:
         *   true, // Function to call once the model loads.
         *   successCallback: handleModel, // Function to call
         *   if an error occurs while loading. failureCallback:
         *   handleError, // Model's file extension. fileType:
         *   '.stl', // Flips the U texture coordinates of the
         *   model. flipU: false, // Flips the V texture
         *   coordinates of the model. flipV: false }; // Pass
         *   the options object to loadModel().
         *   loadModel('assets/model.obj', options);
         *
         *   Models can take time to load. Calling loadModel()
         *   in preload() ensures models load before they're
         *   used in setup() or draw().
         *
         *   Note: There’s no support for colored STL files.
         *   STL files with color will be rendered without
         *   color.
         *   @param path path of the model to be loaded.
         *   @param [options] loading options.
         *   @return new p5.Geometry object.
         */
        loadModel(path: string, options?: object): Geometry;

        /**
         *   Draws a p5.Geometry object to the canvas. The
         *   parameter, model, is the p5.Geometry object to
         *   draw. p5.Geometry objects can be built with
         *   buildGeometry(), or beginGeometry() and
         *   endGeometry(). They can also be loaded from a file
         *   with loadGeometry().
         *
         *   Note: model() can only be used in WebGL mode.
         *   @param model 3D shape to be drawn.
         */
        model(model: Geometry): void;

        // TODO: Fix createModel() errors in src/webgl/loading.js, line 1134:
        //
        //    required param "normalize" follows an optional param
        //
        // createModel(modelString: string, fileType?: string, normalize: boolean, successCallback?: (p1: Geometry) => any, failureCallback?: (p1: Event) => any): Geometry

        /**
         *   Load a 3d model from an OBJ or STL string. OBJ and
         *   STL files lack a built-in sense of scale, causing
         *   models exported from different programs to vary in
         *   size. If your model doesn't display correctly,
         *   consider using loadModel() with normalize set to
         *   true to standardize its size. Further adjustments
         *   can be made using the scale() function.
         *
         *   Also, the support for colored STL files is not
         *   present. STL files with color will be rendered
         *   without color properties.
         *
         *   - Options can include:
         *
         *   - modelString: Specifies the plain text string of
         *   either an stl or obj file to be loaded.
         *   - fileType: Defines the file extension of the
         *   model.
         *   - normalize: Enables standardized size scaling
         *   during loading if set to true.
         *   - successCallback: Callback for post-loading
         *   actions with the 3D model object.
         *   - failureCallback: Handles errors if model loading
         *   fails, receiving an event error.
         *   - flipU: Flips the U texture coordinates of the
         *   model.
         *   - flipV: Flips the V texture coordinates of the
         *   model.
         *   @param modelString String of the object to be
         *   loaded
         *   @param [fileType] The file extension of the model
         *   (.stl, .obj).
         *   @param [successCallback] Function to be called
         *   once the model is loaded. Will be passed the 3D
         *   model object.
         *   @param [failureCallback] called with event error
         *   if the model fails to load.
         *   @return the p5.Geometry object
         */
        createModel(
            modelString: string,
            fileType?: string,
            successCallback?: (p1: Geometry) => any,
            failureCallback?: (p1: Event) => any
        ): Geometry;

        /**
         *   Load a 3d model from an OBJ or STL string. OBJ and
         *   STL files lack a built-in sense of scale, causing
         *   models exported from different programs to vary in
         *   size. If your model doesn't display correctly,
         *   consider using loadModel() with normalize set to
         *   true to standardize its size. Further adjustments
         *   can be made using the scale() function.
         *
         *   Also, the support for colored STL files is not
         *   present. STL files with color will be rendered
         *   without color properties.
         *
         *   - Options can include:
         *
         *   - modelString: Specifies the plain text string of
         *   either an stl or obj file to be loaded.
         *   - fileType: Defines the file extension of the
         *   model.
         *   - normalize: Enables standardized size scaling
         *   during loading if set to true.
         *   - successCallback: Callback for post-loading
         *   actions with the 3D model object.
         *   - failureCallback: Handles errors if model loading
         *   fails, receiving an event error.
         *   - flipU: Flips the U texture coordinates of the
         *   model.
         *   - flipV: Flips the V texture coordinates of the
         *   model.
         *   @param modelString String of the object to be
         *   loaded
         *   @param [fileType] The file extension of the model
         *   (.stl, .obj).
         *   @return the p5.Geometry object
         */
        createModel(modelString: string, fileType?: string, options?: object): Geometry;
    }
}
