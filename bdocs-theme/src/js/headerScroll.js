const headerScroll = () => {

    const header = document.querySelector('.site-header');
    const headerModifier = 'site-header--scroll';

    window.addEventListener('scroll', () => {

        if ( window.scrollY > 100 ) {
            header.classList.add(headerModifier)
        } else {
            header.classList.remove(headerModifier)
        }

    })

}

headerScroll()