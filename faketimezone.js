// ==UserScript==
// @name         Fake TimeZone
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Подмена часового пояса
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// Подмена Intl API
Object.defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
    value: function() {
      const original = Intl.DateTimeFormat.prototype.resolvedOptions.apply(this);
      return { ...original, timeZone: 'Europe/Riga' }; // Меняем на нужный
    }
  });
  
  // Подмена Date.getTimezoneOffset
  const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;
  Date.prototype.getTimezoneOffset = function() {
    return -300; // Например, -300 минут = UTC+5
  };