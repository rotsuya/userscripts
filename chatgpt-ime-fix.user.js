// ==UserScript==
// @name         chatgpt-ime-fix
// @namespace    otsuya.co
// @version      1.0.0
// @description  Prevent message sending while using IME. This aims to improve the user experience when using ChatGPT with Mac Safari and Japanese IME.
// @author       rotsuya
// @match        https://chat.openai.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/rotsuya/userscripts/main/chatgpt-ime-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/rotsuya/userscripts/main/chatgpt-ime-fix.user.js
// @supportURL   https://github.com/rotsuya/userscripts/
// ==/UserScript==

(function() {
    'use strict';

    function handleEnterWithIME(event) {
        if (
            event.target.tagName === 'TEXTAREA' &&
            event.code === 'Enter' &&
            (event.isComposing || event.key === 'Process' || event.keyCode === 229)
        ) {
            event.stopPropagation();
        }
    }

    function enableIMEAwareSending() {
        document.addEventListener('keydown', handleEnterWithIME, {capture: true});
        console.log('addEventListener');
    }

    enableIMEAwareSending();
})();
