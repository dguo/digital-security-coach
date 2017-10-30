const API = 'https://haveibeenpwned.com/api/v2';
export const RATE_LIMIT_MS = 1510;

export async function checkForBreaches(email) {
    const response = await fetch(
        `${API}/breachedaccount/${encodeURIComponent(email)}`
    );
    if (response.status === 200) {
        const json = await response.json();
        return json;
    } else if (response.status === 404) {
        return [];
    } else {
        return Promise.reject({responseCode: response.status});
    }
}

export async function checkForPastes(email) {
    const response = await fetch(
        `${API}/pasteaccount/${encodeURIComponent(email)}`
    );
    if (response.status === 200) {
        const json = await response.json();
        return json;
    } else if (response.status === 404) {
        return [];
    } else {
        return Promise.reject({responseCode: response.status});
    }
}

export function getPasteUrl(source, id) {
    switch (source) {
        case 'Pastebin':
            return `https://pastebin.com/${id}`;
        case 'Slexy':
            return `https://slexy.org/view/${id}`;
        case 'Ghostbin':
            return `https://ghostbin.com/paste/${id}`;
        case 'JustPaste':
            return `https://justpaste.it/${id}`;
        case 'AdHocUrl':
        case 'OptOut':
        case 'Pastie':
        case 'QuickLeak':
        default:
            return '';
    }
}

export async function pwnedPassword(password) {
    const response = await fetch(
        `${API}/pwnedpassword/${encodeURIComponent(password)}`
    );
    if (response.status === 200) {
        return true;
    } else if (response.status === 404) {
        return false;
    } else {
        return Promise.reject({responseCode: response.status});
    }
}
