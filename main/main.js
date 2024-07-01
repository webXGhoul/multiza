document.addEventListener(`DOMContentLoaded`, () => {
    const allElemAnim = document.querySelectorAll(`.anim-block`);

    if(allElemAnim.length > 0){
        window.addEventListener(`scroll`,AnimOnScroll)
        function AnimOnScroll(){
            for (let index = 0; index < allElemAnim.length; index++) {
                const animItem = allElemAnim[index];
                const animHeight = animItem.offsetHeight;
                const animTop = offset(animItem).top;
    
                const animStart = 4;
    
                let animItemPoint = window.innerHeight - animHeight / animStart;
    
                if(animItemPoint > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if((pageYOffset > animTop - animItemPoint) && pageYOffset < (animTop + animHeight)){
                    animItem.classList.add(`active`)
                }else{
                    animItem.classList.remove(`active`)
                }
            }
        }
        function offset(el){
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        AnimOnScroll()
    }
    
    const toTop = document.querySelector(`.toTop`);
    const toTopPosition = document.querySelector(`.toTop__position`)
    
    if(toTop){
        window.addEventListener(`scroll`, toTopSection);
    
    function toTopSection(){
        if(window.scrollY > 1){
            toTopPosition.classList.add(`active`);
        }else{
            toTopPosition.classList.remove(`active`);
    
        }
    }
    const link = document.querySelector(`.toTop__link`);
    link.addEventListener(`click`, (e) => {
        e.preventDefault()
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })
    }
})


let images = document.querySelectorAll(`img`),
    images_total_count = images.length,
    images_loaded_count = 0,
    preloader = document.querySelector(`.preloader`),
    perc_display = document.querySelector(`.preloader__percent`);


for(var i = 0; i < images_total_count; i++){
    images_clone = new Image();
    images_clone.onload = image_loaded;
    images_clone.onerror = image_loaded;
    images_clone.src = images[i].src;
}

function image_loaded(){
    images_loaded_count++;
    console.log(images_loaded_count);
    console.log(images_total_count);
    perc_display.innerHTML = ((( 100 / images_total_count) * images_loaded_count) << 0) + `%`;

    if(images_loaded_count >= images_total_count){
   
            if(!preloader.classList.contains(`done`)){
                preloader.classList.add(`done`);
            }
      
    }
}


