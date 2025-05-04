// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads vertex and fragment shaders to create a
         *   p5.Shader object. Shaders are programs that run on
         *   the graphics processing unit (GPU). They can
         *   process many pixels at the same time, making them
         *   fast for many graphics tasks. They’re written in a
         *   language called GLSL and run along with the rest
         *   of the code in a sketch.
         *
         *   Once the p5.Shader object is created, it can be
         *   used with the shader() function, as in
         *   shader(myShader). A shader program consists of two
         *   files, a vertex shader and a fragment shader. The
         *   vertex shader affects where 3D geometry is drawn
         *   on the screen and the fragment shader affects
         *   color.
         *
         *   loadShader() loads the vertex and fragment shaders
         *   from their .vert and .frag files. For example,
         *   calling loadShader('assets/shader.vert',
         *   'assets/shader.frag') loads both required shaders
         *   and returns a p5.Shader object.
         *
         *   The third parameter, successCallback, is optional.
         *   If a function is passed, it will be called once
         *   the shader has loaded. The callback function can
         *   use the new p5.Shader object as its parameter.
         *
         *   The fourth parameter, failureCallback, is also
         *   optional. If a function is passed, it will be
         *   called if the shader fails to load. The callback
         *   function can use the event error as its parameter.
         *
         *   Shaders can take time to load. Calling
         *   loadShader() in preload() ensures shaders load
         *   before they're used in setup() or draw().
         *
         *   Note: Shaders can only be used in WebGL mode.
         *   @param vertFilename path of the vertex shader to
         *   be loaded.
         *   @param fragFilename path of the fragment shader to
         *   be loaded.
         *   @param [successCallback] function to call once the
         *   shader is loaded. Can be passed the p5.Shader
         *   object.
         *   @param [failureCallback] function to call if the
         *   shader fails to load. Can be passed an Error event
         *   object.
         *   @return new shader created from the vertex and
         *   fragment shader files.
         */
        loadShader(
            vertFilename: string,
            fragFilename: string,
            successCallback?: (...args: any[]) => any,
            failureCallback?: (...args: any[]) => any
        ): Shader;

        /**
         *   Creates a new p5.Shader object. Shaders are
         *   programs that run on the graphics processing unit
         *   (GPU). They can process many pixels at the same
         *   time, making them fast for many graphics tasks.
         *   They’re written in a language called GLSL and run
         *   along with the rest of the code in a sketch.
         *
         *   Once the p5.Shader object is created, it can be
         *   used with the shader() function, as in
         *   shader(myShader). A shader program consists of two
         *   parts, a vertex shader and a fragment shader. The
         *   vertex shader affects where 3D geometry is drawn
         *   on the screen and the fragment shader affects
         *   color.
         *
         *   The first parameter, vertSrc, sets the vertex
         *   shader. It’s a string that contains the vertex
         *   shader program written in GLSL.
         *
         *   The second parameter, fragSrc, sets the fragment
         *   shader. It’s a string that contains the fragment
         *   shader program written in GLSL.
         *
         *   A shader can optionally describe hooks, which are
         *   functions in GLSL that users may choose to provide
         *   to customize the behavior of the shader using the
         *   modify() method of p5.Shader. These are added by
         *   describing the hooks in a third parameter,
         *   options, and referencing the hooks in your vertSrc
         *   or fragSrc. Hooks for the vertex or fragment
         *   shader are described under the vertex and fragment
         *   keys of options. Each one is an object. where each
         *   key is the type and name of a hook function, and
         *   each value is a string with the parameter list and
         *   default implementation of the hook. For example,
         *   to let users optionally run code at the start of
         *   the vertex shader, the options object could
         *   include:
         *
         *   { vertex: { 'void beforeVertex': '() {}' } }
         *
         *   Then, in your vertex shader source, you can run a
         *   hook by calling a function with the same name
         *   prefixed by HOOK_. If you want to check if the
         *   default hook has been replaced, maybe to avoid
         *   extra overhead, you can check if the same name
         *   prefixed by AUGMENTED_HOOK_ has been defined:
         *
         *   void main() { // In most cases, just calling the
         *   hook is fine: HOOK_beforeVertex(); //
         *   Alternatively, for more efficiency: #ifdef
         *   AUGMENTED_HOOK_beforeVertex HOOK_beforeVertex();
         *   #endif // Add the rest of your shader code here! }
         *
         *   Note: Only filter shaders can be used in 2D mode.
         *   All shaders can be used in WebGL mode.
         *   @param vertSrc source code for the vertex shader.
         *   @param fragSrc source code for the fragment
         *   shader.
         *   @param [options] An optional object describing how
         *   this shader can be augmented with hooks. It can
         *   include:
         *
         *   - vertex: An object describing the available
         *   vertex shader hooks.
         *   - fragment: An object describing the available
         *   frament shader hooks.
         *   @return new shader object created from the vertex
         *   and fragment shaders.
         */
        createShader(vertSrc: string, fragSrc: string, options?: object): Shader;

        /**
         *   Creates a p5.Shader object to be used with the
         *   filter() function. createFilterShader() works like
         *   createShader() but has a default vertex shader
         *   included. createFilterShader() is intended to be
         *   used along with filter() for filtering the
         *   contents of a canvas. A filter shader will be
         *   applied to the whole canvas instead of just
         *   p5.Geometry objects.
         *
         *   The parameter, fragSrc, sets the fragment shader.
         *   It’s a string that contains the fragment shader
         *   program written in GLSL.
         *
         *   The p5.Shader object that's created has some
         *   uniforms that can be set:
         *
         *   - sampler2D tex0, which contains the canvas
         *   contents as a texture.
         *   - vec2 canvasSize, which is the width and height
         *   of the canvas, not including pixel density.
         *   - vec2 texelSize, which is the size of a physical
         *   pixel including pixel density. This is calculated
         *   as 1.0 / (width * density) for the pixel width and
         *   1.0 / (height * density) for the pixel height.
         *
         *   The p5.Shader that's created also provides varying
         *   vec2 vTexCoord, a coordinate with values between 0
         *   and 1. vTexCoord describes where on the canvas the
         *   pixel will be drawn.
         *
         *   For more info about filters and shaders, see Adam
         *   Ferriss' repo of shader examples or the
         *   Introduction to Shaders tutorial.
         *   @param fragSrc source code for the fragment
         *   shader.
         *   @return new shader object created from the
         *   fragment shader.
         */
        createFilterShader(fragSrc: string): Shader;

        /**
         *   Sets the p5.Shader object to apply while drawing.
         *   Shaders are programs that run on the graphics
         *   processing unit (GPU). They can process many
         *   pixels or vertices at the same time, making them
         *   fast for many graphics tasks. They’re written in a
         *   language called GLSL and run along with the rest
         *   of the code in a sketch. p5.Shader objects can be
         *   created using the createShader() and loadShader()
         *   functions.
         *
         *   The parameter, s, is the p5.Shader object to
         *   apply. For example, calling shader(myShader)
         *   applies myShader to process each pixel on the
         *   canvas. The shader will be used for:
         *
         *   - Fills when a texture is enabled if it includes a
         *   uniform sampler2D.
         *   - Fills when lights are enabled if it includes the
         *   attribute aNormal, or if it has any of the
         *   following uniforms: uUseLighting,
         *   uAmbientLightCount, uDirectionalLightCount,
         *   uPointLightCount, uAmbientColor,
         *   uDirectionalDiffuseColors,
         *   uDirectionalSpecularColors, uPointLightLocation,
         *   uPointLightDiffuseColors,
         *   uPointLightSpecularColors, uLightingDirection, or
         *   uSpecular.
         *   - Fills whenever there are no lights or textures.
         *   - Strokes if it includes the uniform
         *   uStrokeWeight.
         *
         *   The source code from a p5.Shader object's fragment
         *   and vertex shaders will be compiled the first time
         *   it's passed to shader(). See MDN for more
         *   information about compiling shaders.
         *
         *   Calling resetShader() restores a sketch’s default
         *   shaders.
         *
         *   Note: Shaders can only be used in WebGL mode.
         *   @param s p5.Shader object to apply.
         *   @chainable
         */
        shader(s: Shader): p5;

        /**
         *   Get the default shader used with lights,
         *   materials, and textures. You can call
         *   baseMaterialShader().modify() and change any of
         *   the following hooks:  HookDescription
         *
         *   void beforeVertex
         *
         *   Called at the start of the vertex shader.
         *
         *   vec3 getLocalPosition
         *
         *   Update the position of vertices before transforms
         *   are applied. It takes in vec3 position and must
         *   return a modified version.
         *
         *   vec3 getWorldPosition
         *
         *   Update the position of vertices after transforms
         *   are applied. It takes in vec3 position and pust
         *   return a modified version.
         *
         *   vec3 getLocalNormal
         *
         *   Update the normal before transforms are applied.
         *   It takes in vec3 normal and must return a modified
         *   version.
         *
         *   vec3 getWorldNormal
         *
         *   Update the normal after transforms are applied. It
         *   takes in vec3 normal and must return a modified
         *   version.
         *
         *   vec2 getUV
         *
         *   Update the texture coordinates. It takes in vec2
         *   uv and must return a modified version.
         *
         *   vec4 getVertexColor
         *
         *   Update the color of each vertex. It takes in a
         *   vec4 color and must return a modified version.
         *
         *   void afterVertex
         *
         *   Called at the end of the vertex shader.
         *
         *   void beforeFragment
         *
         *   Called at the start of the fragment shader.
         *
         *   Inputs getPixelInputs
         *
         *   Update the per-pixel inputs of the material. It
         *   takes in an Inputs struct, which includes:
         *
         *   - vec3 normal, the direction pointing out of the
         *   surface
         *   - vec2 texCoord, a vector where x and y are
         *   between 0 and 1 describing the spot on a texture
         *   the pixel is mapped to, as a fraction of the
         *   texture size
         *   - vec3 ambientLight, the ambient light color on
         *   the vertex
         *   - vec4 color, the base material color of the pixel
         *   - vec3 ambientMaterial, the color of the pixel
         *   when affected by ambient light
         *   - vec3 specularMaterial, the color of the pixel
         *   when reflecting specular highlights
         *   - vec3 emissiveMaterial, the light color emitted
         *   by the pixel
         *   - float shininess, a number representing how sharp
         *   specular reflections should be, from 1 to infinity
         *   - float metalness, a number representing how
         *   mirrorlike the material should be, between 0 and 1
         *   The struct can be modified and returned.
         *
         *   vec4 combineColors
         *
         *   Take in a ColorComponents struct containing all
         *   the different components of light, and combining
         *   them into a single final color. The struct
         *   contains:
         *
         *   - vec3 baseColor, the base color of the pixel
         *   - float opacity, the opacity between 0 and 1 that
         *   it should be drawn at
         *   - vec3 ambientColor, the color of the pixel when
         *   affected by ambient light
         *   - vec3 specularColor, the color of the pixel when
         *   affected by specular reflections
         *   - vec3 diffuse, the amount of diffused light
         *   hitting the pixel
         *   - vec3 ambient, the amount of ambient light
         *   hitting the pixel
         *   - vec3 specular, the amount of specular reflection
         *   hitting the pixel
         *   - vec3 emissive, the amount of light emitted by
         *   the pixel
         *
         *   vec4 getFinalColor
         *
         *   Update the final color after mixing. It takes in a
         *   vec4 color and must return a modified version.
         *
         *   void afterFragment
         *
         *   Called at the end of the fragment shader.
         *
         *   Most of the time, you will need to write your
         *   hooks in GLSL ES version 300. If you are using
         *   WebGL 1 instead of 2, write your hooks in GLSL ES
         *   100 instead.
         *
         *   Call baseMaterialShader().inspectHooks() to see
         *   all the possible hooks and their default
         *   implementations.
         *   @return The material shader
         */
        baseMaterialShader(): Shader;

        /**
         *   Get the shader used by normalMaterial(). You can
         *   call baseNormalShader().modify() and change any of
         *   the following hooks:    Hook Description    void
         *   beforeVertex Called at the start of the vertex
         *   shader.   vec3 getLocalPosition Update the
         *   position of vertices before transforms are
         *   applied. It takes in vec3 position and must return
         *   a modified version.   vec3 getWorldPosition Update
         *   the position of vertices after transforms are
         *   applied. It takes in vec3 position and pust return
         *   a modified version.   vec3 getLocalNormal Update
         *   the normal before transforms are applied. It takes
         *   in vec3 normal and must return a modified version.
         *   vec3 getWorldNormal Update the normal after
         *   transforms are applied. It takes in vec3 normal
         *   and must return a modified version.   vec2 getUV
         *   Update the texture coordinates. It takes in vec2
         *   uv and must return a modified version.   vec4
         *   getVertexColor Update the color of each vertex. It
         *   takes in a vec4 color and must return a modified
         *   version.   void afterVertex Called at the end of
         *   the vertex shader.   void beforeFragment Called at
         *   the start of the fragment shader.   vec4
         *   getFinalColor Update the final color after mixing.
         *   It takes in a vec4 color and must return a
         *   modified version.   void afterFragment Called at
         *   the end of the fragment shader.
         *
         *   Most of the time, you will need to write your
         *   hooks in GLSL ES version 300. If you are using
         *   WebGL 1 instead of 2, write your hooks in GLSL ES
         *   100 instead.
         *
         *   Call baseNormalShader().inspectHooks() to see all
         *   the possible hooks and their default
         *   implementations.
         *   @return The `normalMaterial` shader
         */
        baseNormalShader(): Shader;

        /**
         *   Get the shader used when no lights or materials
         *   are applied. You can call
         *   baseColorShader().modify() and change any of the
         *   following hooks:    Hook Description    void
         *   beforeVertex Called at the start of the vertex
         *   shader.   vec3 getLocalPosition Update the
         *   position of vertices before transforms are
         *   applied. It takes in vec3 position and must return
         *   a modified version.   vec3 getWorldPosition Update
         *   the position of vertices after transforms are
         *   applied. It takes in vec3 position and pust return
         *   a modified version.   vec3 getLocalNormal Update
         *   the normal before transforms are applied. It takes
         *   in vec3 normal and must return a modified version.
         *   vec3 getWorldNormal Update the normal after
         *   transforms are applied. It takes in vec3 normal
         *   and must return a modified version.   vec2 getUV
         *   Update the texture coordinates. It takes in vec2
         *   uv and must return a modified version.   vec4
         *   getVertexColor Update the color of each vertex. It
         *   takes in a vec4 color and must return a modified
         *   version.   void afterVertex Called at the end of
         *   the vertex shader.   void beforeFragment Called at
         *   the start of the fragment shader.   vec4
         *   getFinalColor Update the final color after mixing.
         *   It takes in a vec4 color and must return a
         *   modified version.   void afterFragment Called at
         *   the end of the fragment shader.
         *
         *   Most of the time, you will need to write your
         *   hooks in GLSL ES version 300. If you are using
         *   WebGL 1 instead of 2, write your hooks in GLSL ES
         *   100 instead.
         *
         *   Call baseColorShader().inspectHooks() to see all
         *   the possible hooks and their default
         *   implementations.
         *   @return The color shader
         */
        baseColorShader(): Shader;

        /**
         *   Get the shader used when drawing the strokes of
         *   shapes. You can call baseStrokeShader().modify()
         *   and change any of the following hooks:
         *   HookDescription
         *
         *   void beforeVertex
         *
         *   Called at the start of the vertex shader.
         *
         *   vec3 getLocalPosition
         *
         *   Update the position of vertices before transforms
         *   are applied. It takes in vec3 position and must
         *   return a modified version.
         *
         *   vec3 getWorldPosition
         *
         *   Update the position of vertices after transforms
         *   are applied. It takes in vec3 position and pust
         *   return a modified version.
         *
         *   float getStrokeWeight
         *
         *   Update the stroke weight. It takes in float weight
         *   and pust return a modified version.
         *
         *   vec2 getLineCenter
         *
         *   Update the center of the line. It takes in vec2
         *   center and must return a modified version.
         *
         *   vec2 getLinePosition
         *
         *   Update the position of each vertex on the edge of
         *   the line. It takes in vec2 position and must
         *   return a modified version.
         *
         *   vec4 getVertexColor
         *
         *   Update the color of each vertex. It takes in a
         *   vec4 color and must return a modified version.
         *
         *   void afterVertex
         *
         *   Called at the end of the vertex shader.
         *
         *   void beforeFragment
         *
         *   Called at the start of the fragment shader.
         *
         *   Inputs getPixelInputs
         *
         *   Update the inputs to the shader. It takes in a
         *   struct Inputs inputs, which includes:
         *
         *   - vec4 color, the color of the stroke
         *   - vec2 tangent, the direction of the stroke in
         *   screen space
         *   - vec2 center, the coordinate of the center of the
         *   stroke in screen space p5.js pixels
         *   - vec2 position, the coordinate of the current
         *   pixel in screen space p5.js pixels
         *   - float strokeWeight, the thickness of the stroke
         *   in p5.js pixels
         *
         *   bool shouldDiscard
         *
         *   Caps and joins are made by discarded pixels in the
         *   fragment shader to carve away unwanted areas. Use
         *   this to change this logic. It takes in a bool
         *   willDiscard and must return a modified version.
         *
         *   vec4 getFinalColor
         *
         *   Update the final color after mixing. It takes in a
         *   vec4 color and must return a modified version.
         *
         *   void afterFragment
         *
         *   Called at the end of the fragment shader.
         *
         *   Most of the time, you will need to write your
         *   hooks in GLSL ES version 300. If you are using
         *   WebGL 1 instead of 2, write your hooks in GLSL ES
         *   100 instead.
         *
         *   Call baseStrokeShader().inspectHooks() to see all
         *   the possible hooks and their default
         *   implementations.
         *   @return The stroke shader
         */
        baseStrokeShader(): Shader;

        /**
         *   Restores the default shaders. resetShader()
         *   deactivates any shaders previously applied by
         *   shader().
         *
         *   Note: Shaders can only be used in WebGL mode.
         *   @chainable
         */
        resetShader(): p5;

        /**
         *   Sets the texture that will be used on shapes. A
         *   texture is like a skin that wraps around a shape.
         *   texture() works with built-in shapes, such as
         *   square() and sphere(), and custom shapes created
         *   with functions such as buildGeometry(). To texture
         *   a geometry created with beginShape(), uv
         *   coordinates must be passed to each vertex() call.
         *
         *   The parameter, tex, is the texture to apply.
         *   texture() can use a range of sources including
         *   images, videos, and offscreen renderers such as
         *   p5.Graphics and p5.Framebuffer objects.
         *
         *   To texture a geometry created with beginShape(),
         *   you will need to specify uv coordinates in
         *   vertex().
         *
         *   Note: texture() can only be used in WebGL mode.
         *   @param tex media to use as the texture.
         *   @chainable
         */
        texture(tex: Image | MediaElement | Graphics | Framebuffer): p5;

        /**
         *   Changes the coordinate system used for textures
         *   when they’re applied to custom shapes. In order
         *   for texture() to work, a shape needs a way to map
         *   the points on its surface to the pixels in an
         *   image. Built-in shapes such as rect() and box()
         *   already have these texture mappings based on their
         *   vertices. Custom shapes created with vertex()
         *   require texture mappings to be passed as uv
         *   coordinates.
         *
         *   Each call to vertex() must include 5 arguments, as
         *   in vertex(x, y, z, u, v), to map the vertex at
         *   coordinates (x, y, z) to the pixel at coordinates
         *   (u, v) within an image. For example, the corners
         *   of a rectangular image are mapped to the corners
         *   of a rectangle by default:  // Apply the image as
         *   a texture. texture(img);
         *
         *   // Draw the rectangle. rect(0, 0, 30, 50);
         *
         *   If the image in the code snippet above has
         *   dimensions of 300 x 500 pixels, the same result
         *   could be achieved as follows:  // Apply the image
         *   as a texture. texture(img);
         *
         *   // Draw the rectangle. beginShape();
         *
         *   // Top-left. // u: 0, v: 0 vertex(0, 0, 0, 0, 0);
         *
         *   // Top-right. // u: 300, v: 0 vertex(30, 0, 0,
         *   300, 0);
         *
         *   // Bottom-right. // u: 300, v: 500 vertex(30, 50,
         *   0, 300, 500);
         *
         *   // Bottom-left. // u: 0, v: 500 vertex(0, 50, 0,
         *   0, 500);
         *
         *   endShape();
         *
         *   textureMode() changes the coordinate system for uv
         *   coordinates.
         *
         *   The parameter, mode, accepts two possible
         *   constants. If NORMAL is passed, as in
         *   textureMode(NORMAL), then the texture’s uv
         *   coordinates can be provided in the range 0 to 1
         *   instead of the image’s dimensions. This can be
         *   helpful for using the same code for multiple
         *   images of different sizes. For example, the code
         *   snippet above could be rewritten as follows:  //
         *   Set the texture mode to use normalized
         *   coordinates. textureMode(NORMAL);
         *
         *   // Apply the image as a texture. texture(img);
         *
         *   // Draw the rectangle. beginShape();
         *
         *   // Top-left. // u: 0, v: 0 vertex(0, 0, 0, 0, 0);
         *
         *   // Top-right. // u: 1, v: 0 vertex(30, 0, 0, 1,
         *   0);
         *
         *   // Bottom-right. // u: 1, v: 1 vertex(30, 50, 0,
         *   1, 1);
         *
         *   // Bottom-left. // u: 0, v: 1 vertex(0, 50, 0, 0,
         *   1);
         *
         *   endShape();
         *
         *   By default, mode is IMAGE, which scales uv
         *   coordinates to the dimensions of the image.
         *   Calling textureMode(IMAGE) applies the default.
         *
         *   Note: textureMode() can only be used in WebGL
         *   mode.
         *   @param mode either IMAGE or NORMAL.
         */
        textureMode(mode: TEXTURE_MODE): void;

        /**
         *   Changes the way textures behave when a shape’s uv
         *   coordinates go beyond the texture. In order for
         *   texture() to work, a shape needs a way to map the
         *   points on its surface to the pixels in an image.
         *   Built-in shapes such as rect() and box() already
         *   have these texture mappings based on their
         *   vertices. Custom shapes created with vertex()
         *   require texture mappings to be passed as uv
         *   coordinates.
         *
         *   Each call to vertex() must include 5 arguments, as
         *   in vertex(x, y, z, u, v), to map the vertex at
         *   coordinates (x, y, z) to the pixel at coordinates
         *   (u, v) within an image. For example, the corners
         *   of a rectangular image are mapped to the corners
         *   of a rectangle by default:
         *
         *   // Apply the image as a texture. texture(img); //
         *   Draw the rectangle. rect(0, 0, 30, 50);
         *
         *   If the image in the code snippet above has
         *   dimensions of 300 x 500 pixels, the same result
         *   could be achieved as follows:
         *
         *   // Apply the image as a texture. texture(img); //
         *   Draw the rectangle. beginShape(); // Top-left. //
         *   u: 0, v: 0 vertex(0, 0, 0, 0, 0); // Top-right. //
         *   u: 300, v: 0 vertex(30, 0, 0, 300, 0); //
         *   Bottom-right. // u: 300, v: 500 vertex(30, 50, 0,
         *   300, 500); // Bottom-left. // u: 0, v: 500
         *   vertex(0, 50, 0, 0, 500); endShape();
         *
         *   textureWrap() controls how textures behave when
         *   their uv's go beyond the texture. Doing so can
         *   produce interesting visual effects such as tiling.
         *   For example, the custom shape above could have
         *   u-coordinates are greater than the image’s width:
         *
         *   // Apply the image as a texture. texture(img); //
         *   Draw the rectangle. beginShape(); vertex(0, 0, 0,
         *   0, 0); // Top-right. // u: 600 vertex(30, 0, 0,
         *   600, 0); // Bottom-right. // u: 600 vertex(30, 50,
         *   0, 600, 500); vertex(0, 50, 0, 0, 500);
         *   endShape();
         *
         *   The u-coordinates of 600 are greater than the
         *   texture image’s width of 300. This creates
         *   interesting possibilities.
         *
         *   The first parameter, wrapX, accepts three possible
         *   constants. If CLAMP is passed, as in
         *   textureWrap(CLAMP), the pixels at the edge of the
         *   texture will extend to the shape’s edges. If
         *   REPEAT is passed, as in textureWrap(REPEAT), the
         *   texture will tile repeatedly until reaching the
         *   shape’s edges. If MIRROR is passed, as in
         *   textureWrap(MIRROR), the texture will tile
         *   repeatedly until reaching the shape’s edges,
         *   flipping its orientation between tiles. By
         *   default, textures CLAMP.
         *
         *   The second parameter, wrapY, is optional. It
         *   accepts the same three constants, CLAMP, REPEAT,
         *   and MIRROR. If one of these constants is passed,
         *   as in textureWRAP(MIRROR, REPEAT), then the
         *   texture will MIRROR horizontally and REPEAT
         *   vertically. By default, wrapY will be set to the
         *   same value as wrapX.
         *
         *   Note: textureWrap() can only be used in WebGL
         *   mode.
         *   @param wrapX either CLAMP, REPEAT, or MIRROR
         *   @param [wrapY] either CLAMP, REPEAT, or MIRROR
         */
        textureWrap(wrapX: WRAP_X, wrapY?: WRAP_Y): void;

        /**
         *   Sets the current material as a normal material. A
         *   normal material sets surfaces facing the x-axis to
         *   red, those facing the y-axis to green, and those
         *   facing the z-axis to blue. Normal material isn't
         *   affected by light. It’s often used as a
         *   placeholder material when debugging.
         *
         *   Note: normalMaterial() can only be used in WebGL
         *   mode.
         *   @chainable
         */
        normalMaterial(): p5;

        /**
         *   Sets the ambient color of shapes’ surface
         *   material. The ambientMaterial() color sets the
         *   components of the ambientLight() color that shapes
         *   will reflect. For example, calling
         *   ambientMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   ambientMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call ambientMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in ambientMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call ambientMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call ambientMaterial() has three
         *   parameters, v1, v2, and v3. RGB, HSB, or HSL
         *   values, as in ambientMaterial(255, 0, 0), can be
         *   passed to set the material’s colors. Color values
         *   will be interpreted using the current colorMode().
         *
         *   Note: ambientMaterial() can only be used in WebGL
         *   mode.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @chainable
         */
        ambientMaterial(v1: number, v2: number, v3: number): p5;

        /**
         *   Sets the ambient color of shapes’ surface
         *   material. The ambientMaterial() color sets the
         *   components of the ambientLight() color that shapes
         *   will reflect. For example, calling
         *   ambientMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   ambientMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call ambientMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in ambientMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call ambientMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call ambientMaterial() has three
         *   parameters, v1, v2, and v3. RGB, HSB, or HSL
         *   values, as in ambientMaterial(255, 0, 0), can be
         *   passed to set the material’s colors. Color values
         *   will be interpreted using the current colorMode().
         *
         *   Note: ambientMaterial() can only be used in WebGL
         *   mode.
         *   @param gray grayscale value between 0 (black) and
         *   255 (white).
         *   @chainable
         */
        ambientMaterial(gray: number): p5;

        /**
         *   Sets the ambient color of shapes’ surface
         *   material. The ambientMaterial() color sets the
         *   components of the ambientLight() color that shapes
         *   will reflect. For example, calling
         *   ambientMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   ambientMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call ambientMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in ambientMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call ambientMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call ambientMaterial() has three
         *   parameters, v1, v2, and v3. RGB, HSB, or HSL
         *   values, as in ambientMaterial(255, 0, 0), can be
         *   passed to set the material’s colors. Color values
         *   will be interpreted using the current colorMode().
         *
         *   Note: ambientMaterial() can only be used in WebGL
         *   mode.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @chainable
         */
        ambientMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the emissive color of shapes’ surface
         *   material. The emissiveMaterial() color sets a
         *   color shapes display at full strength, regardless
         *   of lighting. This can give the appearance that a
         *   shape is glowing. However, emissive materials
         *   don’t actually emit light that can affect
         *   surrounding objects.
         *
         *   emissiveMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call emissiveMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in emissiveMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call emissiveMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   emissiveMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call emissiveMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   emissiveMaterial(255, 0, 0) or
         *   emissiveMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *
         *   Note: emissiveMaterial() can only be used in WebGL
         *   mode.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param [alpha] alpha value in the current
         *   colorMode().
         *   @chainable
         */
        emissiveMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the emissive color of shapes’ surface
         *   material. The emissiveMaterial() color sets a
         *   color shapes display at full strength, regardless
         *   of lighting. This can give the appearance that a
         *   shape is glowing. However, emissive materials
         *   don’t actually emit light that can affect
         *   surrounding objects.
         *
         *   emissiveMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call emissiveMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in emissiveMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call emissiveMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   emissiveMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call emissiveMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   emissiveMaterial(255, 0, 0) or
         *   emissiveMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *
         *   Note: emissiveMaterial() can only be used in WebGL
         *   mode.
         *   @param gray grayscale value between 0 (black) and
         *   255 (white).
         *   @chainable
         */
        emissiveMaterial(gray: number): p5;

        /**
         *   Sets the emissive color of shapes’ surface
         *   material. The emissiveMaterial() color sets a
         *   color shapes display at full strength, regardless
         *   of lighting. This can give the appearance that a
         *   shape is glowing. However, emissive materials
         *   don’t actually emit light that can affect
         *   surrounding objects.
         *
         *   emissiveMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call emissiveMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in emissiveMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call emissiveMaterial() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   emissiveMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call emissiveMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   emissiveMaterial(255, 0, 0) or
         *   emissiveMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *
         *   Note: emissiveMaterial() can only be used in WebGL
         *   mode.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @chainable
         */
        emissiveMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the specular color of shapes’ surface
         *   material. The specularMaterial() color sets the
         *   components of light color that glossy coats on
         *   shapes will reflect. For example, calling
         *   specularMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   Unlike ambientMaterial(), specularMaterial() will
         *   reflect the full color of light sources including
         *   directionalLight(), pointLight(), and spotLight().
         *   This is what gives it shapes their "shiny"
         *   appearance. The material’s shininess can be
         *   controlled by the shininess() function.
         *
         *   specularMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call specularMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in specularMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call specularMaterial() has one
         *   parameter, color. A p5.Color> object, an array of
         *   color values, or a CSS color string, as in
         *   specularMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call specularMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   specularMaterial(255, 0, 0) or
         *   specularMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *   @param gray grayscale value between 0 (black) and
         *   255 (white).
         *   @param [alpha] alpha value in the current current
         *   colorMode().
         *   @chainable
         */
        specularMaterial(gray: number, alpha?: number): p5;

        /**
         *   Sets the specular color of shapes’ surface
         *   material. The specularMaterial() color sets the
         *   components of light color that glossy coats on
         *   shapes will reflect. For example, calling
         *   specularMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   Unlike ambientMaterial(), specularMaterial() will
         *   reflect the full color of light sources including
         *   directionalLight(), pointLight(), and spotLight().
         *   This is what gives it shapes their "shiny"
         *   appearance. The material’s shininess can be
         *   controlled by the shininess() function.
         *
         *   specularMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call specularMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in specularMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call specularMaterial() has one
         *   parameter, color. A p5.Color> object, an array of
         *   color values, or a CSS color string, as in
         *   specularMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call specularMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   specularMaterial(255, 0, 0) or
         *   specularMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param [alpha] alpha value in the current current
         *   colorMode().
         *   @chainable
         */
        specularMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the specular color of shapes’ surface
         *   material. The specularMaterial() color sets the
         *   components of light color that glossy coats on
         *   shapes will reflect. For example, calling
         *   specularMaterial(255, 255, 0) would cause a shape
         *   to reflect red and green light, but not blue
         *   light.
         *
         *   Unlike ambientMaterial(), specularMaterial() will
         *   reflect the full color of light sources including
         *   directionalLight(), pointLight(), and spotLight().
         *   This is what gives it shapes their "shiny"
         *   appearance. The material’s shininess can be
         *   controlled by the shininess() function.
         *
         *   specularMaterial() can be called three ways with
         *   different parameters to set the material’s color.
         *
         *   The first way to call specularMaterial() has one
         *   parameter, gray. Grayscale values between 0 and
         *   255, as in specularMaterial(50), can be passed to
         *   set the material’s color. Higher grayscale values
         *   make shapes appear brighter.
         *
         *   The second way to call specularMaterial() has one
         *   parameter, color. A p5.Color> object, an array of
         *   color values, or a CSS color string, as in
         *   specularMaterial('magenta'), can be passed to set
         *   the material’s color.
         *
         *   The third way to call specularMaterial() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the material’s colors, as in
         *   specularMaterial(255, 0, 0) or
         *   specularMaterial(255, 0, 0, 30). Color values will
         *   be interpreted using the current colorMode().
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @chainable
         */
        specularMaterial(color: Color | number[] | string): p5;

        /**
         *   Sets the amount of gloss ("shininess") of a
         *   specularMaterial(). Shiny materials focus
         *   reflected light more than dull materials.
         *   shininess() affects the way materials reflect
         *   light sources including directionalLight(),
         *   pointLight(), and spotLight().
         *
         *   The parameter, shine, is a number that sets the
         *   amount of shininess. shine must be greater than 1,
         *   which is its default value.
         *   @param shine amount of shine.
         *   @chainable
         */
        shininess(shine: number): p5;

        /**
         *   Sets the amount of "metalness" of a
         *   specularMaterial(). metalness() can make materials
         *   appear more metallic. It affects the way materials
         *   reflect light sources including affects the way
         *   materials reflect light sources including
         *   directionalLight(), pointLight(), spotLight(), and
         *   imageLight().
         *
         *   The parameter, metallic, is a number that sets the
         *   amount of metalness. metallic must be greater than
         *   1, which is its default value. Higher values, such
         *   as metalness(100), make specular materials appear
         *   more metallic.
         *   @param metallic amount of metalness.
         */
        metalness(metallic: number): void;
    }
}
