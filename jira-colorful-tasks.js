// ==UserScript==
// @name         Colorful tasks by label
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds color on tasks depending on label added.
// @author       You
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// @homepageURL  https://github.com/jordivador/tampermonkey/
// @supportURL   https://github.com/jordivador/tampermonkey/issues
// @updateURL    https://raw.githubusercontent.com/jordivador/tampermonkey/master/jira-colorful-tasks.js
// ==/UserScript==

const color = "orange";
const label = "cd";
const interval = 30000; // Required for change task colors after ajax changes on page.

setInterval(function() {
    'use strict';
    console.log("executed tamper");

    const issues = document.getElementsByClassName('ghx-issue');
    for (let i = 0; i < issues.length; i++) {
        const extraFields = issues[i].getElementsByClassName('ghx-extra-field ');
        for (let j = 0; j < extraFields.length; j++) {
            if (extraFields[j].getAttribute('data-tooltip').match(/tested/)) {
                issues[i].style['background-color'] = "orange";
            }
        }
    }
}, interval);
