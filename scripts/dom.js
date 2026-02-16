export function getDomElements() {
    return {
        ipInput: document.querySelector('.search-bar__input'),
        submitButton: document.querySelector('button'),
        ipInfo: document.querySelector('#ip'),
        locationInfo: document.querySelector('#location'),
        timezoneInfo: document.querySelector('#timezone'),
        ispInfo: document.querySelector('#isp'),
    };
}

