import L from 'leaflet';
import { APP_CONFIG } from './config';
import icon from '../images/location.svg';

const DEFAULT_CENTER = [61.663860, 50.816010];

export function createMap(selector = '.map') {
    const mapArea = document.querySelector(selector);

    const map = L.map(mapArea, {
        center: DEFAULT_CENTER,
        zoom: 13,
        zoomControl: false,
    });

    addTileLayer(map);

    const markerIcon = L.icon({
        iconUrl: icon,
        iconSize: [30, 40],
    });

    const marker = L.marker(DEFAULT_CENTER, { icon: markerIcon }).addTo(map);

    return { map, marker };
}

export function setMapLocation(map, marker, lat, lng) {
    map.setView([lat, lng]);
    marker.setLatLng([lat, lng]);

    if (matchMedia('(max-width: 1023px)').matches) {
        addOffset(map);
    }
}

export function syncMapSize(map) {
    map.invalidateSize();
}

function addTileLayer(map) {
    L.tileLayer(APP_CONFIG.map.tilesUrl, {
        attribution: APP_CONFIG.map.attribution,
        maxZoom: APP_CONFIG.map.maxZoom,
        id: APP_CONFIG.map.styleId,
        tileSize: APP_CONFIG.map.tileSize,
        zoomOffset: APP_CONFIG.map.zoomOffset,
    }).addTo(map);
}

function addOffset(map) {
    const offsetY = map.getSize().y * 0.1;
    map.panBy([0, -offsetY], { animate: false });
}
