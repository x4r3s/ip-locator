import { buildGeoLookupUrl } from './config';

export async function getAddress(ip) {
    const response = await fetch(buildGeoLookupUrl(ip));
    return await response.json();
}
