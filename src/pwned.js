const API = 'https://haveibeenpwned.com/api/v2';

export async function checkForBreaches(email) {
    try {
        const response = await fetch(`${API}/breachedaccount/${email}`);
        const json = await response.json();
        console.log('breaches:', json);
    } catch (error) {
        console.error(error);
    }
}

export async function checkForPastes(email) {
    try {
        const response = await fetch(`${API}/pasteaccount/${email}`);
        const json = await response.json();
        console.log('pastes:', json);
    } catch (error) {
        console.error(error);
    }
}

export async function checkPassword(password) {
    try {
        const response = await fetch(`${API}/pwnedpassword/${password}`);
        if (response.status === 200) {
            return true;
        } else if (response.status === 404) {
            return false;
        }

        throw new Error('Bad response');
    } catch (error) {
        console.error(error);
    }
}
