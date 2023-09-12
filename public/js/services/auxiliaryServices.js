export const GetParametro = () => {
    let urlParam = window.location.href;
    urlParam = urlParam.substring(31, urlParam.length);
    return urlParam;
}