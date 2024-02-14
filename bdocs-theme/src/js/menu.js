const responsiveMenu = () => {

    const overlay = document.querySelector('.overlay')
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.menu-responsive')
    const closeButton = document.querySelector('.menu-responsive__close')

    const menuModifier = 'menu-responsive--open'
    const overlayModifier = 'overlay--open'

    const toggleMenu = () => {
        menu.classList.toggle(menuModifier)
        overlay.classList.toggle(overlayModifier)
    }

    menuButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)

}

responsiveMenu()