import sha1 from 'sha1';

export async function pwnedPassword(password) {
    const targetHash = sha1(password).toUpperCase();

    const response = await fetch(
        `https://api.pwnedpasswords.com/range/${targetHash.substr(0, 5)}`
    );

    if (response.status !== 200) {
        return Promise.reject({responseCode: response.status});
    }

    const body = await response.text();
    const targetSuffix = targetHash.substring(5);

    for (const line of body.split(/\r?\n/)) {
        const [suffix, count] = line.split(':');
        if (suffix === targetSuffix) {
            return count;
        }
    }

    return 0;
}
