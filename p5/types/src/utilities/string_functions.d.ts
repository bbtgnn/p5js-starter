// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Combines an array of strings into one string. The
         *   first parameter, list, is the array of strings to
         *   join.
         *
         *   The second parameter, separator, is the
         *   character(s) that should be used to separate the
         *   combined strings. For example, calling
         *   join(myWords, ' : ') would return a string of
         *   words each separated by a colon and spaces.
         *   @param list array of strings to combine.
         *   @param separator character(s) to place between
         *   strings when they're combined.
         *   @return combined string.
         */
        join(list: any[], separator: string): string;

        /**
         *   Applies a regular expression to a string and
         *   returns an array with the first match. match()
         *   uses regular expressions (regex) to match patterns
         *   in text. For example, the regex abc can be used to
         *   search a string for the exact sequence of
         *   characters abc. See MDN. for more information
         *   about regexes.
         *
         *   The first parameter, str, is the string to search.
         *
         *   The second parameter, regex, is a string with the
         *   regular expression to apply. For example, calling
         *   match('Hello, p5*js!', '[a-z][0-9]') would return
         *   the array ['p5'].
         *
         *   Note: If no matches are found, null is returned.
         *   @param str string to search.
         *   @param regexp regular expression to match.
         *   @return match if found.
         */
        match(str: string, regexp: string): string[];

        /**
         *   Applies a regular expression to a string and
         *   returns an array of matches. match() uses regular
         *   expressions (regex) to match patterns in text. For
         *   example, the regex abc can be used to search a
         *   string for the exact sequence of characters abc.
         *   See MDN. for more information about regexes.
         *   matchAll() is different from match() because it
         *   returns every match, not just the first.
         *
         *   The first parameter, str, is the string to search.
         *
         *   The second parameter, regex, is a string with the
         *   regular expression to apply. For example, calling
         *   matchAll('p5*js is easier than abc123',
         *   '[a-z][0-9]') would return the 2D array [['p5'],
         *   ['c1']].
         *
         *   Note: If no matches are found, an empty array []
         *   is returned.
         *   @param str string to search.
         *   @param regexp regular expression to match.
         *   @return matches found.
         */
        matchAll(str: string, regexp: string): string[];

        /**
         *   Converts a Number into a String with a given
         *   number of digits. nf() converts numbers such as
         *   123.45 into strings formatted with a set number of
         *   digits, as in '123.4500'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nf(123.45)
         *   returns the string '123.45'. If an array of
         *   numbers is passed, as in nf([123.45, 67.89]), an
         *   array of formatted strings will be returned.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nf(123.45, 4), it sets the
         *   minimum number of digits to include to the left of
         *   the decimal place. If left is larger than the
         *   number of digits in num, then unused digits will
         *   be set to 0. For example, calling nf(123.45, 4)
         *   returns the string '0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nf(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nf(123.45, 4, 1)
         *   returns the string '0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nf(123.45, 4, 3) returns the
         *   string '0123.450'.
         *
         *   When the number is negative, for example, calling
         *   nf(-123.45, 5, 2) returns the string '-00123.45'.
         *   @param num number to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted string.
         */
        nf(num: number | string, left?: number | string, right?: number | string): string;

        /**
         *   Converts a Number into a String with a given
         *   number of digits. nf() converts numbers such as
         *   123.45 into strings formatted with a set number of
         *   digits, as in '123.4500'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nf(123.45)
         *   returns the string '123.45'. If an array of
         *   numbers is passed, as in nf([123.45, 67.89]), an
         *   array of formatted strings will be returned.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nf(123.45, 4), it sets the
         *   minimum number of digits to include to the left of
         *   the decimal place. If left is larger than the
         *   number of digits in num, then unused digits will
         *   be set to 0. For example, calling nf(123.45, 4)
         *   returns the string '0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nf(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nf(123.45, 4, 1)
         *   returns the string '0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nf(123.45, 4, 3) returns the
         *   string '0123.450'.
         *
         *   When the number is negative, for example, calling
         *   nf(-123.45, 5, 2) returns the string '-00123.45'.
         *   @param nums numbers to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted strings.
         */
        nf(nums: number[], left?: number | string, right?: number | string): string[];

        /**
         *   Converts a Number into a String with commas to
         *   mark units of 1,000. nfc() converts numbers such
         *   as 12345 into strings formatted with commas to
         *   mark the thousands place, as in '12,345'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfc(12345)
         *   returns the string '12,345'.
         *
         *   The second parameter, right, is optional. If a
         *   number is passed, as in nfc(12345, 1), it sets the
         *   minimum number of digits to include to the right
         *   of the decimal place. If right is smaller than the
         *   number of decimal places in num, then num will be
         *   rounded to the given number of decimal places. For
         *   example, calling nfc(12345.67, 1) returns the
         *   string '12,345.7'. If right is larger than the
         *   number of decimal places in num, then unused
         *   decimal places will be set to 0. For example,
         *   calling nfc(12345.67, 3) returns the string
         *   '12,345.670'.
         *   @param num number to format.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted string.
         */
        nfc(num: number | string, right?: number | string): string;

        /**
         *   Converts a Number into a String with commas to
         *   mark units of 1,000. nfc() converts numbers such
         *   as 12345 into strings formatted with commas to
         *   mark the thousands place, as in '12,345'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfc(12345)
         *   returns the string '12,345'.
         *
         *   The second parameter, right, is optional. If a
         *   number is passed, as in nfc(12345, 1), it sets the
         *   minimum number of digits to include to the right
         *   of the decimal place. If right is smaller than the
         *   number of decimal places in num, then num will be
         *   rounded to the given number of decimal places. For
         *   example, calling nfc(12345.67, 1) returns the
         *   string '12,345.7'. If right is larger than the
         *   number of decimal places in num, then unused
         *   decimal places will be set to 0. For example,
         *   calling nfc(12345.67, 3) returns the string
         *   '12,345.670'.
         *   @param nums numbers to format.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted strings.
         */
        nfc(nums: number[], right?: number | string): string[];

        /**
         *   Converts a Number into a String with a plus or
         *   minus sign. nfp() converts numbers such as 123
         *   into strings formatted with a + or - symbol to
         *   mark whether they're positive or negative, as in
         *   '+123'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfp(123.45)
         *   returns the string '+123.45'. If an array of
         *   numbers is passed, as in nfp([123.45, -6.78]), an
         *   array of formatted strings will be returned.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nfp(123.45, 4), it sets
         *   the minimum number of digits to include to the
         *   left of the decimal place. If left is larger than
         *   the number of digits in num, then unused digits
         *   will be set to 0. For example, calling nfp(123.45,
         *   4) returns the string '+0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nfp(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nfp(123.45, 4, 1)
         *   returns the string '+0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nfp(123.45, 4, 3) returns the
         *   string '+0123.450'.
         *   @param num number to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted string.
         */
        nfp(num: number, left?: number, right?: number): string;

        /**
         *   Converts a Number into a String with a plus or
         *   minus sign. nfp() converts numbers such as 123
         *   into strings formatted with a + or - symbol to
         *   mark whether they're positive or negative, as in
         *   '+123'.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfp(123.45)
         *   returns the string '+123.45'. If an array of
         *   numbers is passed, as in nfp([123.45, -6.78]), an
         *   array of formatted strings will be returned.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nfp(123.45, 4), it sets
         *   the minimum number of digits to include to the
         *   left of the decimal place. If left is larger than
         *   the number of digits in num, then unused digits
         *   will be set to 0. For example, calling nfp(123.45,
         *   4) returns the string '+0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nfp(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nfp(123.45, 4, 1)
         *   returns the string '+0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nfp(123.45, 4, 3) returns the
         *   string '+0123.450'.
         *   @param nums numbers to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted strings.
         */
        nfp(nums: number[], left?: number, right?: number): string[];

        /**
         *   Converts a positive Number into a String with an
         *   extra space in front. nfs() converts positive
         *   numbers such as 123.45 into strings formatted with
         *   an extra space in front, as in ' 123.45'. Doing so
         *   can be helpful for aligning positive and negative
         *   numbers.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfs(123.45)
         *   returns the string ' 123.45'.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nfs(123.45, 4), it sets
         *   the minimum number of digits to include to the
         *   left of the decimal place. If left is larger than
         *   the number of digits in num, then unused digits
         *   will be set to 0. For example, calling nfs(123.45,
         *   4) returns the string ' 0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nfs(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nfs(123.45, 4, 1)
         *   returns the string ' 0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nfs(123.45, 4, 3) returns the
         *   string ' 0123.450'.
         *   @param num number to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted string.
         */
        nfs(num: number, left?: number, right?: number): string;

        /**
         *   Converts a positive Number into a String with an
         *   extra space in front. nfs() converts positive
         *   numbers such as 123.45 into strings formatted with
         *   an extra space in front, as in ' 123.45'. Doing so
         *   can be helpful for aligning positive and negative
         *   numbers.
         *
         *   The first parameter, num, is the number to convert
         *   to a string. For example, calling nfs(123.45)
         *   returns the string ' 123.45'.
         *
         *   The second parameter, left, is optional. If a
         *   number is passed, as in nfs(123.45, 4), it sets
         *   the minimum number of digits to include to the
         *   left of the decimal place. If left is larger than
         *   the number of digits in num, then unused digits
         *   will be set to 0. For example, calling nfs(123.45,
         *   4) returns the string ' 0123.45'.
         *
         *   The third parameter, right, is also optional. If a
         *   number is passed, as in nfs(123.45, 4, 1), it sets
         *   the minimum number of digits to include to the
         *   right of the decimal place. If right is smaller
         *   than the number of decimal places in num, then num
         *   will be rounded to the given number of decimal
         *   places. For example, calling nfs(123.45, 4, 1)
         *   returns the string ' 0123.5'. If right is larger
         *   than the number of decimal places in num, then
         *   unused decimal places will be set to 0. For
         *   example, calling nfs(123.45, 4, 3) returns the
         *   string ' 0123.450'.
         *   @param nums numbers to format.
         *   @param [left] number of digits to include to the
         *   left of the decimal point.
         *   @param [right] number of digits to include to the
         *   right of the decimal point.
         *   @return formatted strings.
         */
        nfs(nums: any[], left?: number, right?: number): string[];

        /**
         *   Splits a String into pieces and returns an array
         *   containing the pieces. The first parameter, value,
         *   is the string to split.
         *
         *   The second parameter, delim, is the character(s)
         *   that should be used to split the string. For
         *   example, calling split('rock...paper...scissors',
         *   '...') would return the array ['rock', 'paper',
         *   'scissors'] because there are three periods ...
         *   between each word.
         *   @param value the String to be split
         *   @param delim the String used to separate the data
         *   @return Array of Strings
         */
        split(value: string, delim: string): string[];

        /**
         *   Splits a String into pieces and returns an array
         *   containing the pieces. splitTokens() is an
         *   enhanced version of split(). It can split a string
         *   when any characters from a list are detected.
         *
         *   The first parameter, value, is the string to
         *   split.
         *
         *   The second parameter, delim, is optional. It sets
         *   the character(s) that should be used to split the
         *   string. delim can be a single string, as in
         *   splitTokens('rock...paper...scissors...shoot',
         *   '...'), or an array of strings, as in
         *   splitTokens('rock;paper,scissors...shoot, [';',
         *   ',', '...']). By default, if no delim characters
         *   are specified, then any whitespace character is
         *   used to split. Whitespace characters include tab
         *   (\t), line feed (\n), carriage return (\r), form
         *   feed (\f), and space.
         *   @param value string to split.
         *   @param [delim] character(s) to use for splitting
         *   the string.
         *   @return separated strings.
         */
        splitTokens(value: string, delim?: string): string[];

        /**
         *   Removes whitespace from the start and end of a
         *   String without changing the middle. trim() trims
         *   whitespace characters such as spaces, carriage
         *   returns, tabs, Unicode "nbsp" character.
         *
         *   The parameter, str, is the string to trim. If a
         *   single string is passed, as in trim(' pad '), a
         *   single string is returned. If an array of strings
         *   is passed, as in trim([' pad ', '\n space \n']),
         *   an array of strings is returned.
         *   @param str string to trim.
         *   @return trimmed string.
         */
        trim(str: string): string;

        /**
         *   Removes whitespace from the start and end of a
         *   String without changing the middle. trim() trims
         *   whitespace characters such as spaces, carriage
         *   returns, tabs, Unicode "nbsp" character.
         *
         *   The parameter, str, is the string to trim. If a
         *   single string is passed, as in trim(' pad '), a
         *   single string is returned. If an array of strings
         *   is passed, as in trim([' pad ', '\n space \n']),
         *   an array of strings is returned.
         *   @param strs strings to trim.
         *   @return trimmed strings.
         */
        trim(strs: string[]): string[];
    }
}
