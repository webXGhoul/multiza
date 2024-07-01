document.addEventListener(`DOMContentLoaded`,() => {
    const toTop = document.querySelector(`.toTop`);
    const toTopPosition = document.querySelector(`.toTop__position`);

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

const wrapper = document.querySelector(`.wrapper`)
const header = document.querySelector(`.header`);

const marginforWrapper = header.clientHeight;
wrapper.style.marginTop = `${marginforWrapper}px`;

})


