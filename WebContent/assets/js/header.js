(function(){
    'use strict';

    let elOpen = null;
    let elClose = null;
    let elBtn = null;
    let elSub = null;
    let elLogout = null;
    const elBody = document.querySelector('body');


    fetch('/22jz-promo-22jz-g19-management/header/index.html')
    .then(response => response.text())
    .then(data => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = data;
        const headerElement = tempElement;
        elBody.insertBefore(headerElement, elBody.firstChild);

        elOpen = headerElement.querySelector('.menu_open');
        elClose = headerElement.querySelector('.menu_close');
        elBtn = headerElement.querySelector('#menu_btn');
        elSub = headerElement.querySelector('.sub_menu');
        elLogout = headerElement.querySelector('#logout');

        elBtn.addEventListener('click', handerClick);
        elLogout.addEventListener('click', logoutClick);
    });

    function handerClick(){
        elOpen.classList.toggle('active');
        elClose.classList.toggle('active'); 
        elSub.classList.toggle('active');
    };

    function logoutClick() {
        sessionStorage.removeItem('user_id');
        location.href = '/22jz-promo-22jz-g19-management/';
    };
})();