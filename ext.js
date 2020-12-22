/**
 * Return skip ad movie button. It hiding 5 secs when movie begin, but clickable.
 *
 * @returns {Element} skip button
 */
function getSkipButton() {
    return document.getElementsByClassName("ytp-ad-skip-button")[0];
}

/**
 * Return close ad banner button.
 *
 * @returns {Element} close button
 */
function getCloseButton() {
    return document.getElementsByClassName("ytp-ad-overlay-close-button")[0];
}

/**
 * Check displayed skip button every 0.1 second. If displays - click them.
 *
 * @type {number}
 */
var skipMovieFinderInterval = setInterval(() => {
    var skipButton = getSkipButton();

    if (skipButton) {
        skipButton.click();
    }
}, 100);

/**
 * Check displayed close button every 0.1 second. If displays - click them.
 *
 * @type {number}
 */
var closeBannerFinderInterval = setInterval(() => {
    var closeButton = getCloseButton();

    if (closeButton) {
        closeButton.click();
    }
}, 100);
