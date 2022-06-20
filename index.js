// creating portfolio tabbed component

const folio_btns=document.querySelector('.folio-btns');
const folio_btn=document.querySelectorAll('.folio-btn');
const folio_imgs=document.querySelectorAll('.img-overlay');

folio_btns.addEventListener('click',(e)=>{
    const folio_btn_clicked=e.target;
    console.log(folio_btn_clicked)
   
    folio_btn.forEach(curElm=> curElm.classList.remove('folio-btn-active'))
    folio_btn_clicked.classList.add('folio-btn-active')

    // find the number in data attribute
    const btn_num=folio_btn_clicked.dataset.btnNum;
    console.log(btn_num)

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)
    folio_imgs.forEach((curElm)=>curElm.classList.add('p-img-not-active'))
    img_active.forEach((curElm)=>{
        curElm.classList.remove('p-img-not-active')
    })

})