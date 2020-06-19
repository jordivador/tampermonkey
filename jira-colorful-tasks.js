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

(function () {
    setInterval(checkLabels, 30000); // Required for change task colors after ajax changes on page.
    setTimeout(checkLabels, 1000);
})();

const configurations = [
    { "label": "CD", "color": "#FFB589" },
    { "label": "Reestimated", "color": "#A2FCBD" }
];

function checkLabels() {
    document.getElementsByClassName('ghx-issue').forEach(issue => {
        const extraFields = issue.getElementsByClassName('ghx-extra-field');
        extraFields.forEach(extrafield => {
            const labels = extrafield.getAttribute('data-tooltip').replace('Labels:', '');
            configurations.forEach(config => {
                if (labels.match(config.label)) return issue.style['background-color'] = config.color; // orange
            });
        });
    });
}
