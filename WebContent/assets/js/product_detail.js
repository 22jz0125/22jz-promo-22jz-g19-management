(function(){
    'use strict';
    let url = new URL(window.location.href);
    let params = url.searchParams;
    const id = params.get('id');

    const elName = document.querySelector('#name'); 
    const elPrice = document.querySelector('#price');
    const elCategory = document.querySelector('#category');
    const elDescription = document.querySelector('#description');


    window.addEventListener('load', () => {
        fetch(`/22jz-promo-22jz-g19-management/ItemList?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data[0].name);
            let category;
            if(data[0].category_id == 1) {
                category = 'バッグ';
            }
            else if(data[0].category_id == 2) {
                category = '財布'
            }
            else if(data[0].category_id == 3) {
                category = 'スマホケース'
            }
            else if(data[0].category_id == 4) {
                category = '小物'
            }
            else if(data[0].category_id == 5) {
                category = '衣類'
            }
            else if(data[0].category_id == 6) {
                category = 'ベルト'
            }
            else {
                category = '該当なし';
            }

            elName.value = data[0].name;
            elPrice.value = data[0].price;
            elCategory.value = category;
            elDescription.value = data[0].description;
        });
    });

})();