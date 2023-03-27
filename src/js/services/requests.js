async function postData(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await res.text();
}

async function getData(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.staus} `);
    }

    return await res.json();
}

export {postData, getData};
