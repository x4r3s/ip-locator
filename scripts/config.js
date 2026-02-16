const MAPBOX_TILES_BASE_URL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';

export const APP_CONFIG = {
    geoApi: {
        baseUrl: 'https://geo.ipify.org/api/v1',
        apiKey: process.env.GEO_IPIFY_API_KEY || '',
    },
    map: {
        tilesUrl: `${MAPBOX_TILES_BASE_URL}${process.env.MAPBOX_ACCESS_TOKEN || ''}`,
        styleId: 'mapbox/streets-v11',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
        attribution:
            'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Mikhail Nepomnyashchii</a>.',
    },
};

export function buildGeoLookupUrl(ip) {
    const query = `apiKey=${APP_CONFIG.geoApi.apiKey}`;
    return ip
        ? `${APP_CONFIG.geoApi.baseUrl}?${query}&ipAddress=${ip}`
        : `${APP_CONFIG.geoApi.baseUrl}?${query}`;
}

