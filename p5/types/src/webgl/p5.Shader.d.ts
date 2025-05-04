// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Shader {
        // TODO: Fix p5.Shader() errors in src/webgl/p5.Shader.js, line 11:
        //
        //    param "renderer" has invalid type: p5.RendererGL
        //
        // constructor(renderer: RendererGL, vertSrc: string, fragSrc: string, options?: object);

        /**
         *   Logs the hooks available in this shader, and their
         *   current implementation. Each shader may let you
         *   override bits of its behavior. Each bit is called
         *   a hook. A hook is either for the vertex shader, if
         *   it affects the position of vertices, or in the
         *   fragment shader, if it affects the pixel color.
         *   This method logs those values to the console,
         *   letting you know what you are able to use in a
         *   call to modify().
         *
         *   For example, this shader will produce the
         *   following output:
         *
         *   myShader = baseMaterialShader().modify({
         *   declarations: 'uniform float time;', 'vec3
         *   getWorldPosition': `(vec3 pos) { pos.y += 20. *
         *   sin(time * 0.001 + pos.x * 0.05); return pos; }`
         *   }); myShader.inspectHooks();
         *
         *   ==== Vertex shader hooks: ==== void beforeVertex()
         *   {} vec3 getLocalPosition(vec3 position) { return
         *   position; } [MODIFIED] vec3 getWorldPosition(vec3
         *   pos) { pos.y += 20. * sin(time * 0.001 + pos.x *
         *   0.05); return pos; } vec3 getLocalNormal(vec3
         *   normal) { return normal; } vec3
         *   getWorldNormal(vec3 normal) { return normal; }
         *   vec2 getUV(vec2 uv) { return uv; } vec4
         *   getVertexColor(vec4 color) { return color; } void
         *   afterVertex() {} ==== Fragment shader hooks: ====
         *   void beforeFragment() {} Inputs
         *   getPixelInputs(Inputs inputs) { return inputs; }
         *   vec4 combineColors(ColorComponents components) {
         *   vec4 color = vec4(0.); color.rgb +=
         *   components.diffuse * components.baseColor;
         *   color.rgb += components.ambient *
         *   components.ambientColor; color.rgb +=
         *   components.specular * components.specularColor;
         *   color.rgb += components.emissive; color.a =
         *   components.opacity; return color; } vec4
         *   getFinalColor(vec4 color) { return color; } void
         *   afterFragment() {}
         */
        inspectHooks(): void;

        /**
         *   Returns a new shader, based on the original, but
         *   with custom snippets of shader code replacing
         *   default behaviour. Each shader may let you
         *   override bits of its behavior. Each bit is called
         *   a hook. A hook is either for the vertex shader, if
         *   it affects the position of vertices, or in the
         *   fragment shader, if it affects the pixel color.
         *   You can inspect the different hooks available by
         *   calling yourShader.inspectHooks(). You can also
         *   read the reference for the default material,
         *   normal material, color, line, and point shaders to
         *   see what hooks they have available.
         *
         *   modify() takes one parameter, hooks, an object
         *   with the hooks you want to override. Each key of
         *   the hooks object is the name of a hook, and the
         *   value is a string with the GLSL code for your
         *   hook.
         *
         *   If you supply functions that aren't existing
         *   hooks, they will get added at the start of the
         *   shader as helper functions so that you can use
         *   them in your hooks.
         *
         *   To add new uniforms to your shader, you can pass
         *   in a uniforms object containing the type and name
         *   of the uniform as the key, and a default value or
         *   function returning a default value as its value.
         *   These will be automatically set when the shader is
         *   set with shader(yourShader).
         *
         *   You can also add a declarations key, where the
         *   value is a GLSL string declaring custom uniform
         *   variables, globals, and functions shared between
         *   hooks. To add declarations just in a vertex or
         *   fragment shader, add vertexDeclarations and
         *   fragmentDeclarations keys.
         *   @param [hooks] The hooks in the shader to replace.
         */
        modify(hooks?: object): Shader;

        /**
         *   Copies the shader from one drawing context to
         *   another. Each p5.Shader object must be compiled by
         *   calling shader() before it can run. Compilation
         *   happens in a drawing context which is usually the
         *   main canvas or an instance of p5.Graphics. A
         *   shader can only be used in the context where it
         *   was compiled. The copyToContext() method compiles
         *   the shader again and copies it to another drawing
         *   context where it can be reused.
         *
         *   The parameter, context, is the drawing context
         *   where the shader will be used. The shader can be
         *   copied to an instance of p5.Graphics, as in
         *   myShader.copyToContext(pg). The shader can also be
         *   copied from a p5.Graphics object to the main
         *   canvas using the window variable, as in
         *   myShader.copyToContext(window).
         *
         *   Note: A p5.Shader object created with
         *   createShader(), createFilterShader(), or
         *   loadShader() can be used directly with a
         *   p5.Framebuffer object created with
         *   createFramebuffer(). Both objects have the same
         *   context as the main canvas.
         *   @param context WebGL context for the copied
         *   shader.
         *   @return new shader compiled for the target
         *   context.
         */
        copyToContext(context: Graphics): Shader;

        /**
         *   Sets the shader’s uniform (global) variables.
         *   Shader programs run on the computer’s graphics
         *   processing unit (GPU). They live in part of the
         *   computer’s memory that’s completely separate from
         *   the sketch that runs them. Uniforms are global
         *   variables within a shader program. They provide a
         *   way to pass values from a sketch running on the
         *   CPU to a shader program running on the GPU.
         *
         *   The first parameter, uniformName, is a string with
         *   the uniform’s name. For the shader above,
         *   uniformName would be 'r'.
         *
         *   The second parameter, data, is the value that
         *   should be used to set the uniform. For example,
         *   calling myShader.setUniform('r', 0.5) would set
         *   the r uniform in the shader above to 0.5. data
         *   should match the uniform’s type. Numbers, strings,
         *   booleans, arrays, and many types of images can all
         *   be passed to a shader with setUniform().
         *   @param uniformName name of the uniform. Must match
         *   the name used in the vertex and fragment shaders.
         *   @param data value to assign to the uniform. Must
         *   match the uniform’s data type.
         *   @chainable
         */
        setUniform(uniformName: string, data: boolean | number | number[] | Image | Graphics | MediaElement): Shader;
    }
}
