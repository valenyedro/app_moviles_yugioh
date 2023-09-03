const UrlBase = 'https://db.ygoprodeck.com/api/v7'

export const GetAllProductos = (callback, errorCallback) => {
    let success = false;
    fetch(`${UrlBase}/cardinfo.php`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        callback(body);
        success = true
    })
    if (!success)
        errorCallback();
}

export const GetRandomProduct = (callback, errorCallback) => {
    let success = false;
    fetch(`${UrlBase}/randomcard.php`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        callback(body);
        success = true
    })
    if (!success)
        errorCallback();
}