const IPV4_REGEX = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

export function validateIp(ip) {
    if (IPV4_REGEX.test(ip)) {
        return true;
    }

    alert('You have to enter a valid IP address');
    return false;
}

