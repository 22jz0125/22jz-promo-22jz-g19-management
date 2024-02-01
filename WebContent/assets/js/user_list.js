(function () {
  'use strict';
  const elUserList = document.querySelector('#first_user');
  const elLogout = document.querySelector('#logout');
  const user_id = sessionStorage.getItem('user_id');

  if(user_id == null) {
    location.href = `/22jz-promo-22jz-g19-management/index.html`;
  }

  // elLogout.addEventListener('click', () =>{
  //   sessionStorage.removeItem('user_id');
  //   location.href = `/22jz-promo-22jz-g19-management/`;
  // });

  fetch(`/22jz-promo-22jz-g19-management/M_UserList`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      for(const onedata of data) {
        let ul = `
          <li>
            <a href="../product_detail/?user_id=${onedata.id}">
              <ul>
                <li>${onedata.id}</li>
                <li>${onedata.name}</li>
                <li>${onedata.email}</li>
                <li>${onedata.created_at}</li>
              </ul>
            </a>
          </li>
        `;
        elUserList.insertAdjacentHTML('beforeend', ul);
        // elUserList.appendChild(ul);
      }
  });
})();