// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class XML {
        /**
         *   A class to describe an XML object. Each p5.XML
         *   object provides an easy way to interact with XML
         *   data. Extensible Markup Language (XML) is a
         *   standard format for sending data between
         *   applications. Like HTML, the XML format is based
         *   on tags and attributes, as in <time
         *   units="s">1234</time>.
         *
         *   Note: Use loadXML() to load external XML files.
         *
         */
        constructor();

        /**
         *   Returns the element's parent element as a new
         *   p5.XML object.
         *   @return parent element.
         */
        getParent(): XML;

        /**
         *   Returns the element's name as a String. An XML
         *   element's name is given by its tag. For example,
         *   the element <language>JavaScript</language> has
         *   the name language.
         *   @return name of the element.
         */
        getName(): string;

        /**
         *   Sets the element's tag name. An XML element's name
         *   is given by its tag. For example, the element
         *   <language>JavaScript</language> has the name
         *   language.
         *
         *   The parameter, name, is the element's new name as
         *   a string. For example, calling
         *   myXML.setName('planet') will make the element's
         *   new tag name <planet></planet>.
         *   @param name new tag name of the element.
         */
        setName(name: string): void;

        /**
         *   Returns true if the element has child elements and
         *   false if not.
         *   @return whether the element has children.
         */
        hasChildren(): boolean;

        /**
         *   Returns an array with the names of the element's
         *   child elements as Strings.
         *   @return names of the child elements.
         */
        listChildren(): string[];

        /**
         *   Returns an array with the element's child elements
         *   as new p5.XML objects. The parameter, name, is
         *   optional. If a string is passed, as in
         *   myXML.getChildren('cat'), then the method will
         *   only return child elements with the tag <cat>.
         *   @param [name] name of the elements to return.
         *   @return child elements.
         */
        getChildren(name?: string): XML[];

        /**
         *   Returns the first matching child element as a new
         *   p5.XML object. The parameter, name, is optional.
         *   If a string is passed, as in
         *   myXML.getChild('cat'), then the first child
         *   element with the tag <cat> will be returned. If a
         *   number is passed, as in myXML.getChild(1), then
         *   the child element at that index will be returned.
         *   @param name element name or index.
         *   @return child element.
         */
        getChild(name: string | number): XML;

        /**
         *   Adds a new child element and returns a reference
         *   to it. The parameter, child, is the p5.XML object
         *   to add as a child element. For example, calling
         *   myXML.addChild(otherXML) inserts otherXML as a
         *   child element of myXML.
         *   @param child child element to add.
         *   @return added child element.
         */
        addChild(child: XML): XML;

        /**
         *   Removes the first matching child element. The
         *   parameter, name, is the child element to remove.
         *   If a string is passed, as in
         *   myXML.removeChild('cat'), then the first child
         *   element with the tag <cat> will be removed. If a
         *   number is passed, as in myXML.removeChild(1), then
         *   the child element at that index will be removed.
         *   @param name name or index of the child element to
         *   remove.
         */
        removeChild(name: string | number): void;

        /**
         *   Returns the number of attributes the element has.
         *   @return number of attributes.
         */
        getAttributeCount(): number;

        /**
         *   Returns an Array with the names of the element's
         *   attributes. Note: Use myXML.getString() or
         *   myXML.getNum() to return an attribute's value.
         *   @return attribute names.
         */
        listAttributes(): string[];

        /**
         *   Returns true if the element has a given attribute
         *   and false if not. The parameter, name, is a string
         *   with the name of the attribute being checked.
         *
         *   Note: Use myXML.getString() or myXML.getNum() to
         *   return an attribute's value.
         *   @param name name of the attribute to be checked.
         *   @return whether the element has the attribute.
         */
        hasAttribute(name: string): boolean;

        /**
         *   Return an attribute's value as a Number. The first
         *   parameter, name, is a string with the name of the
         *   attribute being checked. For example, calling
         *   myXML.getNum('id') returns the element's id
         *   attribute as a number.
         *
         *   The second parameter, defaultValue, is optional.
         *   If a number is passed, as in myXML.getNum('id',
         *   -1), it will be returned if the attribute doesn't
         *   exist or can't be converted to a number.
         *
         *   Note: Use myXML.getString() or myXML.getNum() to
         *   return an attribute's value.
         *   @param name name of the attribute to be checked.
         *   @param [defaultValue] value to return if the
         *   attribute doesn't exist.
         *   @return attribute value as a number.
         */
        getNum(name: string, defaultValue?: number): number;

        /**
         *   Return an attribute's value as a string. The first
         *   parameter, name, is a string with the name of the
         *   attribute being checked. For example, calling
         *   myXML.getString('color') returns the element's id
         *   attribute as a string.
         *
         *   The second parameter, defaultValue, is optional.
         *   If a string is passed, as in
         *   myXML.getString('color', 'deeppink'), it will be
         *   returned if the attribute doesn't exist.
         *
         *   Note: Use myXML.getString() or myXML.getNum() to
         *   return an attribute's value.
         *   @param name name of the attribute to be checked.
         *   @param [defaultValue] value to return if the
         *   attribute doesn't exist.
         *   @return attribute value as a string.
         */
        getString(name: string, defaultValue?: number): string;

        /**
         *   Sets an attribute to a given value. The first
         *   parameter, name, is a string with the name of the
         *   attribute being set.
         *
         *   The second parameter, value, is the attribute's
         *   new value. For example, calling
         *   myXML.setAttribute('id', 123) sets the id
         *   attribute to the value 123.
         *   @param name name of the attribute to be set.
         *   @param value attribute's new value.
         */
        setAttribute(name: string, value: number | string | boolean): void;

        /**
         *   Returns the element's content as a String. The
         *   parameter, defaultValue, is optional. If a string
         *   is passed, as in myXML.getContent('???'), it will
         *   be returned if the element has no content.
         *   @param [defaultValue] value to return if the
         *   element has no content.
         *   @return element's content as a string.
         */
        getContent(defaultValue?: string): string;

        /**
         *   Sets the element's content. An element's content
         *   is the text between its tags. For example, the
         *   element <language>JavaScript</language> has the
         *   content JavaScript.
         *
         *   The parameter, content, is a string with the
         *   element's new content.
         *   @param content new content for the element.
         */
        setContent(content: string): void;

        /**
         *   Returns the element as a String. myXML.serialize()
         *   is useful for sending the element over the network
         *   or saving it to a file.
         *   @return element as a string.
         */
        serialize(): string;
    }
}
