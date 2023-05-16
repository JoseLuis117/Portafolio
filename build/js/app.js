const nav = document.querySelector(".header__div");
const image = document.querySelector('img[src="build/img/logo.png"]');

window.addEventListener("scroll",function(){
    const bodyWidth = document.body.offsetWidth;
    if(bodyWidth >= 768){
        if(window.scrollY > 0){
            if (image) {
                let currentSrc = image.getAttribute('src');
                let newSrc = currentSrc.replace('/logo.png', '/logo2.png');
                setTimeout(() => {
                    image.setAttribute('src', newSrc);
                }, 1);
            }
        }else{
            let currentSrc = image.getAttribute('src');
            let newSrc = currentSrc.replace('/logo2.png', '/logo.png');
            setTimeout(() => {
                image.setAttribute('src', newSrc);
            }, 1);
        }
        nav.classList.toggle('fijar',window.scrollY > 0);
    }
});


window.addEventListener("load",function(){
    
})