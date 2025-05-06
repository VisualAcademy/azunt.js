// azunt.js - JavaScript Utility Library

// Define the Azunt namespace globally (if it doesn't already exist)
window.Azunt = window.Azunt || {};

// Create the Azunt.TimeZone domain and register the function
window.Azunt.TimeZone = {
    // Returns the local timezone offset in minutes
    // Example: -540 for Korea Standard Time (UTC+9)
    getLocalOffsetMinutes: function () {
        return new Date().getTimezoneOffset();
    }
};
