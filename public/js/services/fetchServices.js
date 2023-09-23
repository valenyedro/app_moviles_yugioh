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

export const GetProductoById = (id,callback, errorCallback) => {
    let success = false;
    fetch(`${UrlBase}/cardinfo.php?id=${id}`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        callback(body);
        success = true;
    })
    if (!success)
        errorCallback();
}

export const GetProductoByType = async (type,callback, errorCallback) => {
    let success = false;
    fetch(`${UrlBase}/cardinfo.php?type=${type}`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        callback(body);
        success = true;
    })
    if (!success)
        errorCallback();
}

export const GetProductosFiltrados = (name, type, atk, atkFilter, def, defFilter, level, callback, errorCallback) => {
    let UrlFinal = '/cardinfo.php?';
    UrlFinal += name !== '' ? `fname=${name}&` : '';
    UrlFinal += type !== '' ? `type=${type}&` : '';
    UrlFinal += atk !== '' && atkFilter === 'desde' ? `atk=gte${atk}&` : '';
    UrlFinal += atk !== '' && atkFilter === 'hasta' ? `atk=lte${atk}&` : '';
    UrlFinal += def !== '' && defFilter === 'desde' ? `def=gte${def}&` : '';
    UrlFinal += def !== '' && defFilter === 'hasta' ? `def=lte${def}&` : '';
    UrlFinal += level !== '' ? `level=${level}&` : '';
    fetch(`${UrlBase}${UrlFinal}`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        if (body === undefined)
            errorCallback();
        else
            callback(body);
    })
}

export const GetProductosByName = (names, callback, errorCallback) => {
    let UrlFinal = '/cardinfo.php?name=';
    for(let i=0; i<names.length; i++){
        UrlFinal += `${names[i]}|`
    }
    fetch(`${UrlBase}${UrlFinal}`)
    .then((httpResponse) => {
        if (httpResponse.ok)
            return httpResponse.json()
    })
    .then((body) => {
        if (body === undefined)
            errorCallback();
        else
            callback(body);
    })
}

export const GetPage = (offset, callback, errorCallback) => {
    let success = false;
    fetch(`${UrlBase}/cardinfo.php?num=12&offset=${offset}`)
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