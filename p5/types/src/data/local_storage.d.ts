// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Stores a value in the web browser's local storage.
         *   Web browsers can save small amounts of data using
         *   the built-in localStorage object. Data stored in
         *   localStorage can be retrieved at any point, even
         *   after refreshing a page or restarting the browser.
         *   Data are stored as key-value pairs.
         *
         *   storeItem() makes it easy to store values in
         *   localStorage and getItem() makes it easy to
         *   retrieve them.
         *
         *   The first parameter, key, is the name of the value
         *   to be stored as a string.
         *
         *   The second parameter, value, is the value to be
         *   stored. Values can have any type.
         *
         *   Note: Sensitive data such as passwords or personal
         *   information shouldn't be stored in localStorage.
         *   @param key name of the value.
         *   @param value value to be stored.
         */
        storeItem(key: string, value: string | number | boolean | object | any[]): void;

        /**
         *   Returns a value in the web browser's local
         *   storage. Web browsers can save small amounts of
         *   data using the built-in localStorage object. Data
         *   stored in localStorage can be retrieved at any
         *   point, even after refreshing a page or restarting
         *   the browser. Data are stored as key-value pairs.
         *
         *   storeItem() makes it easy to store values in
         *   localStorage and getItem() makes it easy to
         *   retrieve them.
         *
         *   The first parameter, key, is the name of the value
         *   to be stored as a string.
         *
         *   The second parameter, value, is the value to be
         *   retrieved a string. For example, calling
         *   getItem('size') retrieves the value with the key
         *   size.
         *
         *   Note: Sensitive data such as passwords or personal
         *   information shouldn't be stored in localStorage.
         *   @param key name of the value.
         *   @return stored item.
         */
        getItem(key: string): string | number | boolean | object | any[];

        /**
         *   Removes all items in the web browser's local
         *   storage. Web browsers can save small amounts of
         *   data using the built-in localStorage object. Data
         *   stored in localStorage can be retrieved at any
         *   point, even after refreshing a page or restarting
         *   the browser. Data are stored as key-value pairs.
         *   Calling clearStorage() removes all data from
         *   localStorage.
         *
         *   Note: Sensitive data such as passwords or personal
         *   information shouldn't be stored in localStorage.
         */
        clearStorage(): void;

        /**
         *   Removes an item from the web browser's local
         *   storage. Web browsers can save small amounts of
         *   data using the built-in localStorage object. Data
         *   stored in localStorage can be retrieved at any
         *   point, even after refreshing a page or restarting
         *   the browser. Data are stored as key-value pairs.
         *
         *   storeItem() makes it easy to store values in
         *   localStorage and removeItem() makes it easy to
         *   delete them.
         *
         *   The parameter, key, is the name of the value to
         *   remove as a string. For example, calling
         *   removeItem('size') removes the item with the key
         *   size.
         *
         *   Note: Sensitive data such as passwords or personal
         *   information shouldn't be stored in localStorage.
         *   @param key name of the value to remove.
         */
        removeItem(key: string): void;
    }
}
