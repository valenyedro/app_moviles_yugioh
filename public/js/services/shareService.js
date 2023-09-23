export  function saveShareContent(item){

    sessionStorage.setItem("share",JSON.stringify(item));
}

export  function getShareContent(){
    let item = sessionStorage.getItem('share');
    return JSON.parse(item);
}