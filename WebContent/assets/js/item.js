(function(){
  'use strict';
  const elItemList = document.querySelector('#first_item');
    console.log(elItemList);

  window.addEventListener('load', () =>{
    fetch(`/22jz-promo-22jz-g19-management/ItemList`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
      for (const oneData of data) {
        let category;
        if(oneData.category_id == 1) {
            category = 'バッグ';
        }
        else if(oneData.category_id == 2) {
            category = '財布'
        }
        else if(oneData.category_id == 3) {
            category = 'スマホケース'
        }
        else if(oneData.category_id == 4) {
            category = '小物'
        }
        else if(oneData.category_id == 5) {
            category = '衣類'
        }
        else if(oneData.category_id == 6) {
            category = 'ベルト'
        }
        else {
            category = '該当なし';
        }
        let li = `
            <li>
				<a href="../product_detail/?id=${oneData.id}">
					<ul>
						<li>${category}</li>
						<li>${oneData.name}</li>
						<li>${oneData.price}</li>
						<li>purchase_expected_date</li>
					</ul>
				</a>
			</li>
		`;

        // let li = document.createElement('li');
        // let a = document.createElement('a');
        // a.href = `../product_detail/?id=${oneData.id}`;
        // li.appendChild(a);
        // let ul = document.createElement('ul');

        // elItemList.innerHTML += li;
        elItemList.insertAdjacentHTML('beforeend', li);
      }
    });
  });
})();