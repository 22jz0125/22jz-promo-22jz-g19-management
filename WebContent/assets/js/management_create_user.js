(function(){
  'use strict';

  const name = document.querySelector("#name");
  const email = document.querySelector("#email"); // IDセレクタを使用
  const password = document.querySelector("#password"); // IDセレクタを使用
  const create = document.querySelector('#create_btn');

  create.addEventListener('click', (e) => {
    sendData();
  });

  function transition() {
    // console.log('sessionStorage : ' + sessionStorage.getItem('user_id'));
    location.href = `/22jz-promo-22jz-g19-management/index.html`;
  }

  function sendData() {
    const xhr = new XMLHttpRequest();
    const data = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    console.log(data);
    // xhr.open('POST', '/claft-lether/Login', true);
    xhr.open('POST', '/22jz-promo-22jz-g19-management/M_Create_User', true);
    xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          if (response >= 0) {
            console.log('user_id : ' + response);
            // sessionStorage.setItem('user_id', response);
            transition();
          } else {
            console.log('登録できないお');
          }
        } else {
          console.error('通信エラーが発生しました。');
        }
      }
    };
  }
})();