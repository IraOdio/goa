window.onload = function () {
    main();
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        //document.body.classList.remove('loaded_hiding');
    }, 1500);
};
function main(){

}
function onclickCompare(e){
    let userId = e.getAttribute('data-us');
    let nickname = e.textContent;
    let CompareNicknameResultJs = document.getElementById('CompareNicknameResultJs');
    CompareNicknameResultJs.textContent = nickname;
    ajaxSend(userId);
}

function ajaxSend(userId) {
    var domEl = document.getElementById('ProfileCompare-Result');
    var ajaxFile = 'AjaxCompareResult.php';
    var request = new XMLHttpRequest();
    var strParams = 'us='+userId;
    request.open('POST',ajaxFile,true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener("readystatechange", () => {

        if(request.readyState === 4 && request.status === 200) {
            //console.log(request.responseText);
            domEl.innerHTML=request.responseText;
            //domEl.prepend(request.responseText);
            //alert(request.responseText);
        }
    });


    request.send(strParams);
}