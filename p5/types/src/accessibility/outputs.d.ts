// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a screen reader-accessible description of
         *   shapes on the canvas. textOutput() adds a general
         *   description, list of shapes, and table of shapes
         *   to the web page. The general description includes
         *   the canvas size, canvas color, and number of
         *   shapes. For example, Your output is a, 100 by 100
         *   pixels, gray canvas containing the following 2
         *   shapes:.
         *
         *   A list of shapes follows the general description.
         *   The list describes the color, location, and area
         *   of each shape. For example, a red circle at middle
         *   covering 3% of the canvas. Each shape can be
         *   selected to get more details.
         *
         *   textOutput() uses its table of shapes as a list.
         *   The table describes the shape, color, location,
         *   coordinates and area. For example, red circle
         *   location = middle area = 3%. This is different
         *   from gridOutput(), which uses its table as a grid.
         *
         *   The display parameter is optional. It determines
         *   how the description is displayed. If LABEL is
         *   passed, as in textOutput(LABEL), the description
         *   will be visible in a div element next to the
         *   canvas. Using LABEL creates unhelpful duplicates
         *   for screen readers. Only use LABEL during
         *   development. If FALLBACK is passed, as in
         *   textOutput(FALLBACK), the description will only be
         *   visible to screen readers. This is the default
         *   mode.
         *
         *   Read Writing accessible canvas descriptions to
         *   learn more about making sketches accessible.
         *   @param [display] either FALLBACK or LABEL.
         */
        textOutput(display?: TEXT_DISPLAY): void;

        /**
         *   Creates a screen reader-accessible description of
         *   shapes on the canvas. gridOutput() adds a general
         *   description, table of shapes, and list of shapes
         *   to the web page. The general description includes
         *   the canvas size, canvas color, and number of
         *   shapes. For example, gray canvas, 100 by 100
         *   pixels, contains 2 shapes: 1 circle 1 square.
         *
         *   gridOutput() uses its table of shapes as a grid.
         *   Each shape in the grid is placed in a cell whose
         *   row and column correspond to the shape's location
         *   on the canvas. The grid cells describe the color
         *   and type of shape at that location. For example,
         *   red circle. These descriptions can be selected
         *   individually to get more details. This is
         *   different from textOutput(), which uses its table
         *   as a list.
         *
         *   A list of shapes follows the table. The list
         *   describes the color, type, location, and area of
         *   each shape. For example, red circle, location =
         *   middle, area = 3 %.
         *
         *   The display parameter is optional. It determines
         *   how the description is displayed. If LABEL is
         *   passed, as in gridOutput(LABEL), the description
         *   will be visible in a div element next to the
         *   canvas. Using LABEL creates unhelpful duplicates
         *   for screen readers. Only use LABEL during
         *   development. If FALLBACK is passed, as in
         *   gridOutput(FALLBACK), the description will only be
         *   visible to screen readers. This is the default
         *   mode.
         *
         *   Read Writing accessible canvas descriptions to
         *   learn more about making sketches accessible.
         *   @param [display] either FALLBACK or LABEL.
         */
        gridOutput(display?: GRID_DISPLAY): void;
    }
}
