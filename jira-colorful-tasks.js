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
    { "label": "tested", "color": "#A2FCBD"}
];

function checkLabels() {
    const issues = document.getElementsByClassName('ghx-issue');
    if (!issues.length) console.log("No issues found!");
    for (let i = 0; i < issues.length; i++) {
       const extraFields = issues[i].getElementsByClassName('ghx-extra-field');
       for (let j = 0; j < extraFields.length; j++) {
           const labels = extraFields[j].getAttribute('data-tooltip').replace('Labels:', '');
           configurations.forEach(config => {
               if (labels.match(config.label)) {
                   issues[i].style['background-color'] = config.color;
                   return;
               }
           });
       }
   }
}
