// azunt.js - JavaScript Utility Library

// Define the Azunt namespace globally (if it doesn't already exist)
window.Azunt = window.Azunt || {};

// Azunt.TimeZone: Time-related utilities
window.Azunt.TimeZone = {
    /**
     * Returns the local timezone offset in minutes.
     * Example: -540 for Korea Standard Time (UTC+9)
     * @returns {number}
     */
    getLocalOffsetMinutes: function () {
        return new Date().getTimezoneOffset();
    }
};

// Azunt.Text: Text-related utilities
window.Azunt.Text = {
    /**
     * Safely truncates a string containing emojis or surrogate pairs.
     * @param {string} str - The input string to truncate.
     * @param {number} maxLength - The number of visible characters to keep.
     * @param {string} suffix - The suffix to append if truncated (default is "...").
     * @returns {string} The safely truncated string.
     */
    truncateSafe: function (str, maxLength, suffix = "...") {
        if (typeof str !== "string" || maxLength <= 0) return "";

        const chars = Array.from(str); // Handles surrogate pairs
        return chars.length <= maxLength
            ? str
            : chars.slice(0, maxLength).join("") + suffix;
    }
};
