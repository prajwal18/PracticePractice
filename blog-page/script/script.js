const modal = document.querySelector('img.modulo');
const closeModal = document.querySelector('img.close');

modal.addEventListener('click', () => {
    document.querySelector('nav.nav-bar').setAttribute('style', 'display: block;');
});
closeModal.addEventListener('click', () => {
    document.querySelector('nav.nav-bar').setAttribute('style', 'display: none;');
});


//Every time screen size changes
const onResize = () => {
    const screenSizeOk = window.matchMedia("(max-width: 576px)");
    if(screenSizeOk.matches){
        document.querySelector('nav').setAttribute('style', 'display: none;');
    }
    else{
        document.querySelector('nav').setAttribute('style', 'display: block;');
    }
};

window.onresize = onResize;