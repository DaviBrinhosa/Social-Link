const parentItemList =  document.querySelector('.center__menu');

parentItemList.addEventListener('click', event=>{

    const currentText = event.target.parentNode.querySelector('.text');
    const currentImg = event.target.parentNode.querySelector('.img_section')

    if (currentText.style.display === "none") {
        currentText.style.display = "block";
        currentImg.style.display = "flex";
    } else {
        currentText.style.display = "none";
        currentImg.style.display = "none";
    }

})