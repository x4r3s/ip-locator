import { setMapLocation } from './map';

export function renderAddressInfo(mapData, dom, mapState) {
    const { lat, lng, country, region, timezone } = mapData.location;

    dom.ipInfo.innerText = mapData.ip;
    dom.locationInfo.innerText = country + ' ' + region;
    dom.timezoneInfo.innerText = timezone;
    dom.ispInfo.innerText = mapData.isp;

    setMapLocation(mapState.map, mapState.marker, lat, lng);
}
