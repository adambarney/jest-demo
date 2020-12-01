const $ = require('jquery');

export function validateZip(zip) {
    if (zip.length !== 5) {
        // disable submit button
        document.getElementById('submit-button').disabled = true
        // $('#submit-button').attr('disabled', true)
        return false;
    } else {
        return true;
    }
}