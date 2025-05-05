// azunt.js - JavaScript Utility Library

window.azunt = window.azunt || {};

/**
 * Returns the local timezone offset in minutes.
 * Example: -540 for Korea Standard Time (UTC+9).
 */
azunt.getLocalOffsetMinutes = function () {
    return new Date().getTimezoneOffset();
};
