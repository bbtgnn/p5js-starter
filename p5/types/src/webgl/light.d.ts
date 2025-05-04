// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a light that shines from all directions.
         *   Ambient light does not come from one direction.
         *   Instead, 3D shapes are lit evenly from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   There are three ways to call ambientLight() with
         *   optional parameters to set the light’s color.
         *
         *   The first way to call ambientLight() has two
         *   parameters, gray and alpha. alpha is optional.
         *   Grayscale and alpha values between 0 and 255 can
         *   be passed to set the ambient light’s color, as in
         *   ambientLight(50) or ambientLight(50, 30).
         *
         *   The second way to call ambientLight() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientLight('magenta'), can be passed to set the
         *   ambient light’s color.
         *
         *   The third way to call ambientLight() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the ambient light’s colors, as in
         *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
         *   30). Color values will be interpreted using the
         *   current colorMode().
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param [alpha] alpha (transparency) value in the
         *   current colorMode().
         *   @chainable
         */
        ambientLight(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Creates a light that shines from all directions.
         *   Ambient light does not come from one direction.
         *   Instead, 3D shapes are lit evenly from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   There are three ways to call ambientLight() with
         *   optional parameters to set the light’s color.
         *
         *   The first way to call ambientLight() has two
         *   parameters, gray and alpha. alpha is optional.
         *   Grayscale and alpha values between 0 and 255 can
         *   be passed to set the ambient light’s color, as in
         *   ambientLight(50) or ambientLight(50, 30).
         *
         *   The second way to call ambientLight() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientLight('magenta'), can be passed to set the
         *   ambient light’s color.
         *
         *   The third way to call ambientLight() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the ambient light’s colors, as in
         *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
         *   30). Color values will be interpreted using the
         *   current colorMode().
         *   @param gray grayscale value between 0 and 255.
         *   @param [alpha] alpha (transparency) value in the
         *   current colorMode().
         *   @chainable
         */
        ambientLight(gray: number, alpha?: number): p5;

        /**
         *   Creates a light that shines from all directions.
         *   Ambient light does not come from one direction.
         *   Instead, 3D shapes are lit evenly from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   There are three ways to call ambientLight() with
         *   optional parameters to set the light’s color.
         *
         *   The first way to call ambientLight() has two
         *   parameters, gray and alpha. alpha is optional.
         *   Grayscale and alpha values between 0 and 255 can
         *   be passed to set the ambient light’s color, as in
         *   ambientLight(50) or ambientLight(50, 30).
         *
         *   The second way to call ambientLight() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientLight('magenta'), can be passed to set the
         *   ambient light’s color.
         *
         *   The third way to call ambientLight() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the ambient light’s colors, as in
         *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
         *   30). Color values will be interpreted using the
         *   current colorMode().
         *   @param value color as a CSS string.
         *   @chainable
         */
        ambientLight(value: string): p5;

        /**
         *   Creates a light that shines from all directions.
         *   Ambient light does not come from one direction.
         *   Instead, 3D shapes are lit evenly from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   There are three ways to call ambientLight() with
         *   optional parameters to set the light’s color.
         *
         *   The first way to call ambientLight() has two
         *   parameters, gray and alpha. alpha is optional.
         *   Grayscale and alpha values between 0 and 255 can
         *   be passed to set the ambient light’s color, as in
         *   ambientLight(50) or ambientLight(50, 30).
         *
         *   The second way to call ambientLight() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientLight('magenta'), can be passed to set the
         *   ambient light’s color.
         *
         *   The third way to call ambientLight() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the ambient light’s colors, as in
         *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
         *   30). Color values will be interpreted using the
         *   current colorMode().
         *   @param values color as an array of RGBA, HSBA, or
         *   HSLA values.
         *   @chainable
         */
        ambientLight(values: number[]): p5;

        /**
         *   Creates a light that shines from all directions.
         *   Ambient light does not come from one direction.
         *   Instead, 3D shapes are lit evenly from all sides.
         *   Ambient lights are almost always used in
         *   combination with other types of lights.
         *
         *   There are three ways to call ambientLight() with
         *   optional parameters to set the light’s color.
         *
         *   The first way to call ambientLight() has two
         *   parameters, gray and alpha. alpha is optional.
         *   Grayscale and alpha values between 0 and 255 can
         *   be passed to set the ambient light’s color, as in
         *   ambientLight(50) or ambientLight(50, 30).
         *
         *   The second way to call ambientLight() has one
         *   parameter, color. A p5.Color object, an array of
         *   color values, or a CSS color string, as in
         *   ambientLight('magenta'), can be passed to set the
         *   ambient light’s color.
         *
         *   The third way to call ambientLight() has four
         *   parameters, v1, v2, v3, and alpha. alpha is
         *   optional. RGBA, HSBA, or HSLA values can be passed
         *   to set the ambient light’s colors, as in
         *   ambientLight(255, 0, 0) or ambientLight(255, 0, 0,
         *   30). Color values will be interpreted using the
         *   current colorMode().
         *   @param color color as a p5.Color object.
         *   @chainable
         */
        ambientLight(color: Color): p5;

        /**
         *   Sets the specular color for lights.
         *   specularColor() affects lights that bounce off a
         *   surface in a preferred direction. These lights
         *   include directionalLight(), pointLight(), and
         *   spotLight(). The function helps to create
         *   highlights on p5.Geometry objects that are styled
         *   with specularMaterial(). If a geometry does not
         *   use specularMaterial(), then specularColor() will
         *   have no effect.
         *
         *   Note: specularColor() doesn’t affect lights that
         *   bounce in all directions, including ambientLight()
         *   and imageLight().
         *
         *   There are three ways to call specularColor() with
         *   optional parameters to set the specular highlight
         *   color.
         *
         *   The first way to call specularColor() has two
         *   optional parameters, gray and alpha. Grayscale and
         *   alpha values between 0 and 255, as in
         *   specularColor(50) or specularColor(50, 80), can be
         *   passed to set the specular highlight color.
         *
         *   The second way to call specularColor() has one
         *   optional parameter, color. A p5.Color object, an
         *   array of color values, or a CSS color string can
         *   be passed to set the specular highlight color.
         *
         *   The third way to call specularColor() has four
         *   optional parameters, v1, v2, v3, and alpha. RGBA,
         *   HSBA, or HSLA values, as in specularColor(255, 0,
         *   0, 80), can be passed to set the specular
         *   highlight color. Color values will be interpreted
         *   using the current colorMode().
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @chainable
         */
        specularColor(v1: number, v2: number, v3: number): p5;

        /**
         *   Sets the specular color for lights.
         *   specularColor() affects lights that bounce off a
         *   surface in a preferred direction. These lights
         *   include directionalLight(), pointLight(), and
         *   spotLight(). The function helps to create
         *   highlights on p5.Geometry objects that are styled
         *   with specularMaterial(). If a geometry does not
         *   use specularMaterial(), then specularColor() will
         *   have no effect.
         *
         *   Note: specularColor() doesn’t affect lights that
         *   bounce in all directions, including ambientLight()
         *   and imageLight().
         *
         *   There are three ways to call specularColor() with
         *   optional parameters to set the specular highlight
         *   color.
         *
         *   The first way to call specularColor() has two
         *   optional parameters, gray and alpha. Grayscale and
         *   alpha values between 0 and 255, as in
         *   specularColor(50) or specularColor(50, 80), can be
         *   passed to set the specular highlight color.
         *
         *   The second way to call specularColor() has one
         *   optional parameter, color. A p5.Color object, an
         *   array of color values, or a CSS color string can
         *   be passed to set the specular highlight color.
         *
         *   The third way to call specularColor() has four
         *   optional parameters, v1, v2, v3, and alpha. RGBA,
         *   HSBA, or HSLA values, as in specularColor(255, 0,
         *   0, 80), can be passed to set the specular
         *   highlight color. Color values will be interpreted
         *   using the current colorMode().
         *   @param gray grayscale value between 0 and 255.
         *   @chainable
         */
        specularColor(gray: number): p5;

        /**
         *   Sets the specular color for lights.
         *   specularColor() affects lights that bounce off a
         *   surface in a preferred direction. These lights
         *   include directionalLight(), pointLight(), and
         *   spotLight(). The function helps to create
         *   highlights on p5.Geometry objects that are styled
         *   with specularMaterial(). If a geometry does not
         *   use specularMaterial(), then specularColor() will
         *   have no effect.
         *
         *   Note: specularColor() doesn’t affect lights that
         *   bounce in all directions, including ambientLight()
         *   and imageLight().
         *
         *   There are three ways to call specularColor() with
         *   optional parameters to set the specular highlight
         *   color.
         *
         *   The first way to call specularColor() has two
         *   optional parameters, gray and alpha. Grayscale and
         *   alpha values between 0 and 255, as in
         *   specularColor(50) or specularColor(50, 80), can be
         *   passed to set the specular highlight color.
         *
         *   The second way to call specularColor() has one
         *   optional parameter, color. A p5.Color object, an
         *   array of color values, or a CSS color string can
         *   be passed to set the specular highlight color.
         *
         *   The third way to call specularColor() has four
         *   optional parameters, v1, v2, v3, and alpha. RGBA,
         *   HSBA, or HSLA values, as in specularColor(255, 0,
         *   0, 80), can be passed to set the specular
         *   highlight color. Color values will be interpreted
         *   using the current colorMode().
         *   @param value color as a CSS string.
         *   @chainable
         */
        specularColor(value: string): p5;

        /**
         *   Sets the specular color for lights.
         *   specularColor() affects lights that bounce off a
         *   surface in a preferred direction. These lights
         *   include directionalLight(), pointLight(), and
         *   spotLight(). The function helps to create
         *   highlights on p5.Geometry objects that are styled
         *   with specularMaterial(). If a geometry does not
         *   use specularMaterial(), then specularColor() will
         *   have no effect.
         *
         *   Note: specularColor() doesn’t affect lights that
         *   bounce in all directions, including ambientLight()
         *   and imageLight().
         *
         *   There are three ways to call specularColor() with
         *   optional parameters to set the specular highlight
         *   color.
         *
         *   The first way to call specularColor() has two
         *   optional parameters, gray and alpha. Grayscale and
         *   alpha values between 0 and 255, as in
         *   specularColor(50) or specularColor(50, 80), can be
         *   passed to set the specular highlight color.
         *
         *   The second way to call specularColor() has one
         *   optional parameter, color. A p5.Color object, an
         *   array of color values, or a CSS color string can
         *   be passed to set the specular highlight color.
         *
         *   The third way to call specularColor() has four
         *   optional parameters, v1, v2, v3, and alpha. RGBA,
         *   HSBA, or HSLA values, as in specularColor(255, 0,
         *   0, 80), can be passed to set the specular
         *   highlight color. Color values will be interpreted
         *   using the current colorMode().
         *   @param values color as an array of RGBA, HSBA, or
         *   HSLA values.
         *   @chainable
         */
        specularColor(values: number[]): p5;

        /**
         *   Sets the specular color for lights.
         *   specularColor() affects lights that bounce off a
         *   surface in a preferred direction. These lights
         *   include directionalLight(), pointLight(), and
         *   spotLight(). The function helps to create
         *   highlights on p5.Geometry objects that are styled
         *   with specularMaterial(). If a geometry does not
         *   use specularMaterial(), then specularColor() will
         *   have no effect.
         *
         *   Note: specularColor() doesn’t affect lights that
         *   bounce in all directions, including ambientLight()
         *   and imageLight().
         *
         *   There are three ways to call specularColor() with
         *   optional parameters to set the specular highlight
         *   color.
         *
         *   The first way to call specularColor() has two
         *   optional parameters, gray and alpha. Grayscale and
         *   alpha values between 0 and 255, as in
         *   specularColor(50) or specularColor(50, 80), can be
         *   passed to set the specular highlight color.
         *
         *   The second way to call specularColor() has one
         *   optional parameter, color. A p5.Color object, an
         *   array of color values, or a CSS color string can
         *   be passed to set the specular highlight color.
         *
         *   The third way to call specularColor() has four
         *   optional parameters, v1, v2, v3, and alpha. RGBA,
         *   HSBA, or HSLA values, as in specularColor(255, 0,
         *   0, 80), can be passed to set the specular
         *   highlight color. Color values will be interpreted
         *   using the current colorMode().
         *   @param color color as a p5.Color object.
         *   @chainable
         */
        specularColor(color: Color): p5;

        /**
         *   Creates a light that shines in one direction.
         *   Directional lights don’t shine from a specific
         *   point. They’re like a sun that shines from
         *   somewhere offscreen. The light’s direction is set
         *   using three (x, y, z) values between -1 and 1. For
         *   example, setting a light’s direction as (1, 0, 0)
         *   will light p5.Geometry objects from the left since
         *   the light faces directly to the right. A maximum
         *   of 5 directional lights can be active at once.
         *
         *   There are four ways to call directionalLight()
         *   with parameters to set the light’s color and
         *   direction.
         *
         *   The first way to call directionalLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s direction. For example,
         *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
         *   (255, 0, 0) light that shines to the right (1, 0,
         *   0).
         *
         *   The second way to call directionalLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, direction sets
         *   the light’s direction using a p5.Geometry object.
         *   For example, directionalLight(255, 0, 0, lightDir)
         *   creates a red (255, 0, 0) light that shines in the
         *   direction the lightDir vector points.
         *
         *   The third way to call directionalLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s direction. For example,
         *   directionalLight(myColor, 1, 0, 0) creates a light
         *   that shines to the right (1, 0, 0) with the color
         *   value of myColor.
         *
         *   The fourth way to call directionalLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, direction,
         *   sets the light’s direction using a p5.Color
         *   object. For example, directionalLight(myColor,
         *   lightDir) creates a light that shines in the
         *   direction the lightDir vector points with the
         *   color value of myColor.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param x x-component of the light's direction
         *   between -1 and 1.
         *   @param y y-component of the light's direction
         *   between -1 and 1.
         *   @param z z-component of the light's direction
         *   between -1 and 1.
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a light that shines in one direction.
         *   Directional lights don’t shine from a specific
         *   point. They’re like a sun that shines from
         *   somewhere offscreen. The light’s direction is set
         *   using three (x, y, z) values between -1 and 1. For
         *   example, setting a light’s direction as (1, 0, 0)
         *   will light p5.Geometry objects from the left since
         *   the light faces directly to the right. A maximum
         *   of 5 directional lights can be active at once.
         *
         *   There are four ways to call directionalLight()
         *   with parameters to set the light’s color and
         *   direction.
         *
         *   The first way to call directionalLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s direction. For example,
         *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
         *   (255, 0, 0) light that shines to the right (1, 0,
         *   0).
         *
         *   The second way to call directionalLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, direction sets
         *   the light’s direction using a p5.Geometry object.
         *   For example, directionalLight(255, 0, 0, lightDir)
         *   creates a red (255, 0, 0) light that shines in the
         *   direction the lightDir vector points.
         *
         *   The third way to call directionalLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s direction. For example,
         *   directionalLight(myColor, 1, 0, 0) creates a light
         *   that shines to the right (1, 0, 0) with the color
         *   value of myColor.
         *
         *   The fourth way to call directionalLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, direction,
         *   sets the light’s direction using a p5.Color
         *   object. For example, directionalLight(myColor,
         *   lightDir) creates a light that shines in the
         *   direction the lightDir vector points with the
         *   color value of myColor.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param direction direction of the light as a
         *   p5.Vector object.
         *   @chainable
         */
        directionalLight(v1: number, v2: number, v3: number, direction: Vector): p5;

        /**
         *   Creates a light that shines in one direction.
         *   Directional lights don’t shine from a specific
         *   point. They’re like a sun that shines from
         *   somewhere offscreen. The light’s direction is set
         *   using three (x, y, z) values between -1 and 1. For
         *   example, setting a light’s direction as (1, 0, 0)
         *   will light p5.Geometry objects from the left since
         *   the light faces directly to the right. A maximum
         *   of 5 directional lights can be active at once.
         *
         *   There are four ways to call directionalLight()
         *   with parameters to set the light’s color and
         *   direction.
         *
         *   The first way to call directionalLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s direction. For example,
         *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
         *   (255, 0, 0) light that shines to the right (1, 0,
         *   0).
         *
         *   The second way to call directionalLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, direction sets
         *   the light’s direction using a p5.Geometry object.
         *   For example, directionalLight(255, 0, 0, lightDir)
         *   creates a red (255, 0, 0) light that shines in the
         *   direction the lightDir vector points.
         *
         *   The third way to call directionalLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s direction. For example,
         *   directionalLight(myColor, 1, 0, 0) creates a light
         *   that shines to the right (1, 0, 0) with the color
         *   value of myColor.
         *
         *   The fourth way to call directionalLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, direction,
         *   sets the light’s direction using a p5.Color
         *   object. For example, directionalLight(myColor,
         *   lightDir) creates a light that shines in the
         *   direction the lightDir vector points with the
         *   color value of myColor.
         *   @param color color as a p5.Color object, an array
         *   of color values, or as a CSS string.
         *   @param x x-component of the light's direction
         *   between -1 and 1.
         *   @param y y-component of the light's direction
         *   between -1 and 1.
         *   @param z z-component of the light's direction
         *   between -1 and 1.
         *   @chainable
         */
        directionalLight(color: Color | number[] | string, x: number, y: number, z: number): p5;

        /**
         *   Creates a light that shines in one direction.
         *   Directional lights don’t shine from a specific
         *   point. They’re like a sun that shines from
         *   somewhere offscreen. The light’s direction is set
         *   using three (x, y, z) values between -1 and 1. For
         *   example, setting a light’s direction as (1, 0, 0)
         *   will light p5.Geometry objects from the left since
         *   the light faces directly to the right. A maximum
         *   of 5 directional lights can be active at once.
         *
         *   There are four ways to call directionalLight()
         *   with parameters to set the light’s color and
         *   direction.
         *
         *   The first way to call directionalLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s direction. For example,
         *   directionalLight(255, 0, 0, 1, 0, 0) creates a red
         *   (255, 0, 0) light that shines to the right (1, 0,
         *   0).
         *
         *   The second way to call directionalLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, direction sets
         *   the light’s direction using a p5.Geometry object.
         *   For example, directionalLight(255, 0, 0, lightDir)
         *   creates a red (255, 0, 0) light that shines in the
         *   direction the lightDir vector points.
         *
         *   The third way to call directionalLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s direction. For example,
         *   directionalLight(myColor, 1, 0, 0) creates a light
         *   that shines to the right (1, 0, 0) with the color
         *   value of myColor.
         *
         *   The fourth way to call directionalLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, direction,
         *   sets the light’s direction using a p5.Color
         *   object. For example, directionalLight(myColor,
         *   lightDir) creates a light that shines in the
         *   direction the lightDir vector points with the
         *   color value of myColor.
         *   @param color color as a p5.Color object, an array
         *   of color values, or as a CSS string.
         *   @param direction direction of the light as a
         *   p5.Vector object.
         *   @chainable
         */
        directionalLight(color: Color | number[] | string, direction: Vector): p5;

        /**
         *   Creates a light that shines from a point in all
         *   directions. Point lights are like light bulbs that
         *   shine in all directions. They can be placed at
         *   different positions to achieve different lighting
         *   effects. A maximum of 5 point lights can be active
         *   at once.
         *
         *   There are four ways to call pointLight() with
         *   parameters to set the light’s color and position.
         *
         *   The first way to call pointLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s position. For example,
         *   pointLight(255, 0, 0, 50, 0, 0) creates a red
         *   (255, 0, 0) light that shines from the coordinates
         *   (50, 0, 0).
         *
         *   The second way to call pointLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, position sets the
         *   light’s position using a p5.Vector object. For
         *   example, pointLight(255, 0, 0, lightPos) creates a
         *   red (255, 0, 0) light that shines from the
         *   position set by the lightPos vector.
         *
         *   The third way to call pointLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s position. For example,
         *   directionalLight(myColor, 50, 0, 0) creates a
         *   light that shines from the coordinates (50, 0, 0)
         *   with the color value of myColor.
         *
         *   The fourth way to call pointLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, position,
         *   sets the light’s position using a p5.Vector
         *   object. For example, directionalLight(myColor,
         *   lightPos) creates a light that shines from the
         *   position set by the lightPos vector with the color
         *   value of myColor.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

        /**
         *   Creates a light that shines from a point in all
         *   directions. Point lights are like light bulbs that
         *   shine in all directions. They can be placed at
         *   different positions to achieve different lighting
         *   effects. A maximum of 5 point lights can be active
         *   at once.
         *
         *   There are four ways to call pointLight() with
         *   parameters to set the light’s color and position.
         *
         *   The first way to call pointLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s position. For example,
         *   pointLight(255, 0, 0, 50, 0, 0) creates a red
         *   (255, 0, 0) light that shines from the coordinates
         *   (50, 0, 0).
         *
         *   The second way to call pointLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, position sets the
         *   light’s position using a p5.Vector object. For
         *   example, pointLight(255, 0, 0, lightPos) creates a
         *   red (255, 0, 0) light that shines from the
         *   position set by the lightPos vector.
         *
         *   The third way to call pointLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s position. For example,
         *   directionalLight(myColor, 50, 0, 0) creates a
         *   light that shines from the coordinates (50, 0, 0)
         *   with the color value of myColor.
         *
         *   The fourth way to call pointLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, position,
         *   sets the light’s position using a p5.Vector
         *   object. For example, directionalLight(myColor,
         *   lightPos) creates a light that shines from the
         *   position set by the lightPos vector with the color
         *   value of myColor.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @chainable
         */
        pointLight(v1: number, v2: number, v3: number, position: Vector): p5;

        /**
         *   Creates a light that shines from a point in all
         *   directions. Point lights are like light bulbs that
         *   shine in all directions. They can be placed at
         *   different positions to achieve different lighting
         *   effects. A maximum of 5 point lights can be active
         *   at once.
         *
         *   There are four ways to call pointLight() with
         *   parameters to set the light’s color and position.
         *
         *   The first way to call pointLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s position. For example,
         *   pointLight(255, 0, 0, 50, 0, 0) creates a red
         *   (255, 0, 0) light that shines from the coordinates
         *   (50, 0, 0).
         *
         *   The second way to call pointLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, position sets the
         *   light’s position using a p5.Vector object. For
         *   example, pointLight(255, 0, 0, lightPos) creates a
         *   red (255, 0, 0) light that shines from the
         *   position set by the lightPos vector.
         *
         *   The third way to call pointLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s position. For example,
         *   directionalLight(myColor, 50, 0, 0) creates a
         *   light that shines from the coordinates (50, 0, 0)
         *   with the color value of myColor.
         *
         *   The fourth way to call pointLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, position,
         *   sets the light’s position using a p5.Vector
         *   object. For example, directionalLight(myColor,
         *   lightPos) creates a light that shines from the
         *   position set by the lightPos vector with the color
         *   value of myColor.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @chainable
         */
        pointLight(color: Color | number[] | string, x: number, y: number, z: number): p5;

        /**
         *   Creates a light that shines from a point in all
         *   directions. Point lights are like light bulbs that
         *   shine in all directions. They can be placed at
         *   different positions to achieve different lighting
         *   effects. A maximum of 5 point lights can be active
         *   at once.
         *
         *   There are four ways to call pointLight() with
         *   parameters to set the light’s color and position.
         *
         *   The first way to call pointLight() has six
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last three parameters, x, y, and
         *   z, set the light’s position. For example,
         *   pointLight(255, 0, 0, 50, 0, 0) creates a red
         *   (255, 0, 0) light that shines from the coordinates
         *   (50, 0, 0).
         *
         *   The second way to call pointLight() has four
         *   parameters. The first three parameters, v1, v2,
         *   and v3, set the light’s color using the current
         *   colorMode(). The last parameter, position sets the
         *   light’s position using a p5.Vector object. For
         *   example, pointLight(255, 0, 0, lightPos) creates a
         *   red (255, 0, 0) light that shines from the
         *   position set by the lightPos vector.
         *
         *   The third way to call pointLight() has four
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The last three parameters, x, y,
         *   and z, set the light’s position. For example,
         *   directionalLight(myColor, 50, 0, 0) creates a
         *   light that shines from the coordinates (50, 0, 0)
         *   with the color value of myColor.
         *
         *   The fourth way to call pointLight() has two
         *   parameters. The first parameter, color, sets the
         *   light’s color using a p5.Color object or an array
         *   of color values. The second parameter, position,
         *   sets the light’s position using a p5.Vector
         *   object. For example, directionalLight(myColor,
         *   lightPos) creates a light that shines from the
         *   position set by the lightPos vector with the color
         *   value of myColor.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @chainable
         */
        pointLight(color: Color | number[] | string, position: Vector): p5;

        // TODO: Fix imageLight() errors in src/webgl/light.js, line 956:
        //
        //    param "img" has invalid type: p5.image
        //
        // imageLight(img: image): void

        /**
         *   Creates an immersive 3D background. panorama()
         *   transforms images containing 360˚ content, such as
         *   maps or HDRIs, into immersive 3D backgrounds that
         *   surround a sketch. Exploring the space requires
         *   changing the camera's perspective with functions
         *   such as orbitControl() or camera().
         *   @param img 360˚ image to use as the background.
         */
        panorama(img: Image): void;

        /**
         *   Places an ambient and directional light in the
         *   scene. The lights are set to ambientLight(128,
         *   128, 128) and directionalLight(128, 128, 128, 0,
         *   0, -1). Note: lights need to be called (whether
         *   directly or indirectly) within draw() to remain
         *   persistent in a looping program. Placing them in
         *   setup() will cause them to only have an effect the
         *   first time through the loop.
         *   @chainable
         */
        lights(): p5;

        /**
         *   Sets the falloff rate for pointLight() and
         *   spotLight(). A light’s falloff describes the
         *   intensity of its beam at a distance. For example,
         *   a lantern has a slow falloff, a flashlight has a
         *   medium falloff, and a laser pointer has a sharp
         *   falloff.
         *
         *   lightFalloff() has three parameters, constant,
         *   linear, and quadratic. They’re numbers used to
         *   calculate falloff at a distance, d, as follows:
         *
         *   falloff = 1 / (constant + d * linear + (d * d) *
         *   quadratic)
         *
         *   Note: constant, linear, and quadratic should
         *   always be set to values greater than 0.
         *   @param constant constant value for calculating
         *   falloff.
         *   @param linear linear value for calculating
         *   falloff.
         *   @param quadratic quadratic value for calculating
         *   falloff.
         *   @chainable
         */
        lightFalloff(constant: number, linear: number, quadratic: number): p5;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @param rx x-component of light direction between
         *   -1 and 1.
         *   @param ry y-component of light direction between
         *   -1 and 1.
         *   @param rz z-component of light direction between
         *   -1 and 1.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         *   @chainable
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            x: number,
            y: number,
            z: number,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): p5;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @param direction direction of light as a p5.Vector
         *   object.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            color: Color | number[] | string,
            position: Vector,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @param direction direction of light as a p5.Vector
         *   object.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            position: Vector,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @param direction direction of light as a p5.Vector
         *   object.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            color: Color | number[] | string,
            x: number,
            y: number,
            z: number,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @param rx x-component of light direction between
         *   -1 and 1.
         *   @param ry y-component of light direction between
         *   -1 and 1.
         *   @param rz z-component of light direction between
         *   -1 and 1.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            color: Color | number[] | string,
            position: Vector,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @param direction direction of light as a p5.Vector
         *   object.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            x: number,
            y: number,
            z: number,
            direction: Vector,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param v1 red or hue value in the current
         *   colorMode().
         *   @param v2 green or saturation value in the current
         *   colorMode().
         *   @param v3 blue, brightness, or lightness value in
         *   the current colorMode().
         *   @param position position of the light as a
         *   p5.Vector object.
         *   @param rx x-component of light direction between
         *   -1 and 1.
         *   @param ry y-component of light direction between
         *   -1 and 1.
         *   @param rz z-component of light direction between
         *   -1 and 1.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            v1: number,
            v2: number,
            v3: number,
            position: Vector,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Creates a light that shines from a point in one
         *   direction. Spot lights are like flashlights that
         *   shine in one direction creating a cone of light.
         *   The shape of the cone can be controlled using the
         *   angle and concentration parameters. A maximum of 5
         *   spot lights can be active at once.
         *
         *   There are eight ways to call spotLight() with
         *   parameters to set the light’s color, position,
         *   direction. For example, spotLight(255, 0, 0, 0, 0,
         *   0, 1, 0, 0) creates a red (255, 0, 0) light at the
         *   origin (0, 0, 0) that points to the right (1, 0,
         *   0).
         *
         *   The angle parameter is optional. It sets the
         *   radius of the light cone. For example,
         *   spotLight(255, 0, 0, 0, 0, 0, 1, 0, 0, PI / 16)
         *   creates a red (255, 0, 0) light at the origin (0,
         *   0, 0) that points to the right (1, 0, 0) with an
         *   angle of PI / 16 radians. By default, angle is PI
         *   / 3 radians.
         *
         *   The concentration parameter is also optional. It
         *   focuses the light towards the center of the light
         *   cone. For example, spotLight(255, 0, 0, 0, 0, 0,
         *   1, 0, 0, PI / 16, 50) creates a red (255, 0, 0)
         *   light at the origin (0, 0, 0) that points to the
         *   right (1, 0, 0) with an angle of PI / 16 radians
         *   at concentration of 50. By default, concentration
         *   is 100.
         *   @param color color as a p5.Color object, an array
         *   of color values, or a CSS string.
         *   @param x x-coordinate of the light.
         *   @param y y-coordinate of the light.
         *   @param z z-coordinate of the light.
         *   @param rx x-component of light direction between
         *   -1 and 1.
         *   @param ry y-component of light direction between
         *   -1 and 1.
         *   @param rz z-component of light direction between
         *   -1 and 1.
         *   @param [angle] angle of the light cone. Defaults
         *   to PI / 3.
         *   @param [concentration] concentration of the light.
         *   Defaults to 100.
         */
        spotLight(
            color: Color | number[] | string,
            x: number,
            y: number,
            z: number,
            rx: number,
            ry: number,
            rz: number,
            angle?: number,
            concentration?: number
        ): void;

        /**
         *   Removes all lights from the sketch. Calling
         *   noLights() removes any lights created with
         *   lights(), ambientLight(), directionalLight(),
         *   pointLight(), or spotLight(). These functions may
         *   be called after noLights() to create a new
         *   lighting scheme.
         *   @chainable
         */
        noLights(): p5;
    }
}
