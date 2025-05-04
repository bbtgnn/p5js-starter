// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Converts a String to a floating point (decimal)
         *   Number. float() converts strings that resemble
         *   numbers, such as '12.34', into numbers.
         *
         *   The parameter, str, is the string value to
         *   convert. For example, calling float('12.34')
         *   returns the number 12.34. If an array of strings
         *   is passed, as in float(['12.34', '56.78']), then
         *   an array of numbers will be returned.
         *
         *   Note: If a string can't be converted to a number,
         *   as in float('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param str string to convert.
         *   @return converted number.
         */
        float(str: string): number;

        /**
         *   Converts a String to a floating point (decimal)
         *   Number. float() converts strings that resemble
         *   numbers, such as '12.34', into numbers.
         *
         *   The parameter, str, is the string value to
         *   convert. For example, calling float('12.34')
         *   returns the number 12.34. If an array of strings
         *   is passed, as in float(['12.34', '56.78']), then
         *   an array of numbers will be returned.
         *
         *   Note: If a string can't be converted to a number,
         *   as in float('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param ns array of strings to convert.
         *   @return converted numbers.
         */
        float(ns: string[]): number[];

        /**
         *   Converts a Boolean, String, or decimal Number to
         *   an integer. int() converts values to integers.
         *   Integers are positive or negative numbers without
         *   decimals. If the original value has decimals, as
         *   in -34.56, they're removed to produce an integer
         *   such as -34.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a Boolean, as in int(false) or int(true), then the
         *   number 0 (false) or 1 (true) will be returned. If
         *   n is a string or number, as in int('45') or
         *   int(67.89), then an integer will be returned. If
         *   an array is passed, as in int([12.34, 56.78]),
         *   then an array of integers will be returned.
         *
         *   Note: If a value can't be converted to a number,
         *   as in int('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param n value to convert.
         *   @return converted number.
         */
        int(n: string | boolean | number): number;

        /**
         *   Converts a Boolean, String, or decimal Number to
         *   an integer. int() converts values to integers.
         *   Integers are positive or negative numbers without
         *   decimals. If the original value has decimals, as
         *   in -34.56, they're removed to produce an integer
         *   such as -34.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a Boolean, as in int(false) or int(true), then the
         *   number 0 (false) or 1 (true) will be returned. If
         *   n is a string or number, as in int('45') or
         *   int(67.89), then an integer will be returned. If
         *   an array is passed, as in int([12.34, 56.78]),
         *   then an array of integers will be returned.
         *
         *   Note: If a value can't be converted to a number,
         *   as in int('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param ns values to convert.
         *   @return converted numbers.
         */
        int(ns: any[]): number[];

        /**
         *   Converts a Boolean or Number to String. str()
         *   converts values to strings. See the String
         *   reference page for guidance on using template
         *   literals instead.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a Boolean, as in str(false) or str(true), then the
         *   value will be returned as a string, as in 'false'
         *   or 'true'. If n is a number, as in str(123), then
         *   its value will be returned as a string, as in
         *   '123'. If an array is passed, as in str([12.34,
         *   56.78]), then an array of strings will be
         *   returned.
         *   @param n value to convert.
         *   @return converted string.
         */
        str(n: string | boolean | number): string;

        /**
         *   Converts a String or Number to a Boolean.
         *   boolean() converts values to true or false.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a string, then boolean('true') will return true
         *   and every other string value will return false. If
         *   n is a number, then boolean(0) will return false
         *   and every other numeric value will return true. If
         *   an array is passed, as in boolean([0, 1, 'true',
         *   'blue']), then an array of Boolean values will be
         *   returned.
         *   @param n value to convert.
         *   @return converted Boolean value.
         */
        boolean(n: string | boolean | number): boolean;

        /**
         *   Converts a String or Number to a Boolean.
         *   boolean() converts values to true or false.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a string, then boolean('true') will return true
         *   and every other string value will return false. If
         *   n is a number, then boolean(0) will return false
         *   and every other numeric value will return true. If
         *   an array is passed, as in boolean([0, 1, 'true',
         *   'blue']), then an array of Boolean values will be
         *   returned.
         *   @param ns values to convert.
         *   @return converted Boolean values.
         */
        boolean(ns: any[]): boolean[];

        /**
         *   Converts a Boolean, String, or Number to its byte
         *   value. byte() converts a value to an integer
         *   (whole number) between -128 and 127. Values
         *   greater than 127 wrap around while negative values
         *   are unchanged. For example, 128 becomes -128 and
         *   -129 remains the same.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a Boolean, as in byte(false) or byte(true), the
         *   number 0 (false) or 1 (true) will be returned. If
         *   n is a string or number, as in byte('256') or
         *   byte(256), then the byte value will be returned.
         *   Decimal values are ignored. If an array is passed,
         *   as in byte([true, 123, '456']), then an array of
         *   byte values will be returned.
         *
         *   Note: If a value can't be converted to a number,
         *   as in byte('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param n value to convert.
         *   @return converted byte value.
         */
        byte(n: string | boolean | number): number;

        /**
         *   Converts a Boolean, String, or Number to its byte
         *   value. byte() converts a value to an integer
         *   (whole number) between -128 and 127. Values
         *   greater than 127 wrap around while negative values
         *   are unchanged. For example, 128 becomes -128 and
         *   -129 remains the same.
         *
         *   The parameter, n, is the value to convert. If n is
         *   a Boolean, as in byte(false) or byte(true), the
         *   number 0 (false) or 1 (true) will be returned. If
         *   n is a string or number, as in byte('256') or
         *   byte(256), then the byte value will be returned.
         *   Decimal values are ignored. If an array is passed,
         *   as in byte([true, 123, '456']), then an array of
         *   byte values will be returned.
         *
         *   Note: If a value can't be converted to a number,
         *   as in byte('giraffe'), then the value NaN (not a
         *   number) will be returned.
         *   @param ns values to convert.
         *   @return converted byte values.
         */
        byte(ns: any[]): number[];

        /**
         *   Converts a Number or String to a single-character
         *   String. char() converts numbers to their
         *   single-character string representations.
         *
         *   The parameter, n, is the value to convert. If a
         *   number is passed, as in char(65), the
         *   corresponding single-character string is returned.
         *   If a string is passed, as in char('65'), the
         *   string is converted to an integer (whole number)
         *   and the corresponding single-character string is
         *   returned. If an array is passed, as in char([65,
         *   66, 67]), an array of single-character strings is
         *   returned.
         *
         *   See MDN for more information about conversions.
         *   @param n value to convert.
         *   @return converted single-character string.
         */
        char(n: string | number): string;

        /**
         *   Converts a Number or String to a single-character
         *   String. char() converts numbers to their
         *   single-character string representations.
         *
         *   The parameter, n, is the value to convert. If a
         *   number is passed, as in char(65), the
         *   corresponding single-character string is returned.
         *   If a string is passed, as in char('65'), the
         *   string is converted to an integer (whole number)
         *   and the corresponding single-character string is
         *   returned. If an array is passed, as in char([65,
         *   66, 67]), an array of single-character strings is
         *   returned.
         *
         *   See MDN for more information about conversions.
         *   @param ns values to convert.
         *   @return converted single-character strings.
         */
        char(ns: any[]): string[];

        /**
         *   Converts a single-character String to a Number.
         *   unchar() converts single-character strings to
         *   their corresponding integer (whole number).
         *
         *   The parameter, n, is the character to convert. For
         *   example, unchar('A'), returns the number 65. If an
         *   array is passed, as in unchar(['A', 'B', 'C']), an
         *   array of integers is returned.
         *   @param n value to convert.
         *   @return converted number.
         */
        unchar(n: string): number;

        /**
         *   Converts a single-character String to a Number.
         *   unchar() converts single-character strings to
         *   their corresponding integer (whole number).
         *
         *   The parameter, n, is the character to convert. For
         *   example, unchar('A'), returns the number 65. If an
         *   array is passed, as in unchar(['A', 'B', 'C']), an
         *   array of integers is returned.
         *   @param ns values to convert.
         *   @return converted numbers.
         */
        unchar(ns: string[]): number[];

        /**
         *   Converts a Number to a String with its hexadecimal
         *   value. hex() converts a number to a string with
         *   its hexadecimal number value. Hexadecimal (hex)
         *   numbers are base-16, which means there are 16
         *   unique digits. Hex extends the numbers 0–9 with
         *   the letters A–F. For example, the number 11
         *   (eleven) in base-10 is written as the letter B in
         *   hex.
         *
         *   The first parameter, n, is the number to convert.
         *   For example, hex(20), returns the string
         *   '00000014'. If an array is passed, as in hex([1,
         *   10, 100]), an array of hexadecimal strings is
         *   returned.
         *
         *   The second parameter, digits, is optional. If a
         *   number is passed, as in hex(20, 2), it sets the
         *   number of hexadecimal digits to display. For
         *   example, calling hex(20, 2) returns the string
         *   '14'.
         *   @param n value to convert.
         *   @param [digits] number of digits to include.
         *   @return converted hexadecimal value.
         */
        hex(n: number, digits?: number): string;

        /**
         *   Converts a Number to a String with its hexadecimal
         *   value. hex() converts a number to a string with
         *   its hexadecimal number value. Hexadecimal (hex)
         *   numbers are base-16, which means there are 16
         *   unique digits. Hex extends the numbers 0–9 with
         *   the letters A–F. For example, the number 11
         *   (eleven) in base-10 is written as the letter B in
         *   hex.
         *
         *   The first parameter, n, is the number to convert.
         *   For example, hex(20), returns the string
         *   '00000014'. If an array is passed, as in hex([1,
         *   10, 100]), an array of hexadecimal strings is
         *   returned.
         *
         *   The second parameter, digits, is optional. If a
         *   number is passed, as in hex(20, 2), it sets the
         *   number of hexadecimal digits to display. For
         *   example, calling hex(20, 2) returns the string
         *   '14'.
         *   @param ns values to convert.
         *   @param [digits] number of digits to include.
         *   @return converted hexadecimal values.
         */
        hex(ns: number[], digits?: number): string[];

        /**
         *   Converts a String with a hexadecimal value to a
         *   Number. unhex() converts a string with its
         *   hexadecimal number value to a number. Hexadecimal
         *   (hex) numbers are base-16, which means there are
         *   16 unique digits. Hex extends the numbers 0–9 with
         *   the letters A–F. For example, the number 11
         *   (eleven) in base-10 is written as the letter B in
         *   hex.
         *
         *   The first parameter, n, is the hex string to
         *   convert. For example, unhex('FF'), returns the
         *   number 255. If an array is passed, as in
         *   unhex(['00', '80', 'FF']), an array of numbers is
         *   returned.
         *   @param n value to convert.
         *   @return converted number.
         */
        unhex(n: string): number;

        /**
         *   Converts a String with a hexadecimal value to a
         *   Number. unhex() converts a string with its
         *   hexadecimal number value to a number. Hexadecimal
         *   (hex) numbers are base-16, which means there are
         *   16 unique digits. Hex extends the numbers 0–9 with
         *   the letters A–F. For example, the number 11
         *   (eleven) in base-10 is written as the letter B in
         *   hex.
         *
         *   The first parameter, n, is the hex string to
         *   convert. For example, unhex('FF'), returns the
         *   number 255. If an array is passed, as in
         *   unhex(['00', '80', 'FF']), an array of numbers is
         *   returned.
         *   @param ns values to convert.
         *   @return converted numbers.
         */
        unhex(ns: string[]): number[];
    }
}
