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

(function() {
	setInterval(checkLabels, 30000); // Required for change task colors after ajax changes on page.
    setTimeout(checkLabels, 1000);
})();

function checkLabels() {
    document.getElementsByClassName('ghx-issue').forEach(issue => {
        const extraFields = issue.getElementsByClassName('ghx-extra-field');
        extraFields.forEach(extrafield => {
			const labels = extrafield.getAttribute('data-tooltip').replace('Labels:', '');
            if (labels.match(/CD/)) return issue.style['background-color'] = '#FFB589'; // orange
			if (labels.match(/Reestimated/)) return issue.style['background-color'] = '#A2FCBD'; // green
        });
    });
}
