import { getAddress } from './api';
import { getDomElements } from './dom';
import { createMap, syncMapSize } from './map';
import { renderAddressInfo } from './ui';
import { validateIp } from './validation';

const MAP_RESIZE_DELAY_MS = 180;

export function initApp() {
    const dom = getDomElements();
    const mapState = createMap();

    function fetchAndRender(ip) {
        return getAddress(ip).then((mapData) => renderAddressInfo(mapData, dom, mapState));
    }

    function handleSearch() {
        const enteredIp = dom.ipInput.value.trim();

        if (validateIp(enteredIp)) {
            fetchAndRender(enteredIp);
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    dom.submitButton.addEventListener('click', handleSearch);
    dom.ipInput.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', () => syncMapSize(mapState.map));

    document.addEventListener('DOMContentLoaded', () => {
        requestAnimationFrame(() => syncMapSize(mapState.map));
        setTimeout(() => syncMapSize(mapState.map), MAP_RESIZE_DELAY_MS);
        fetchAndRender();
    });
}

