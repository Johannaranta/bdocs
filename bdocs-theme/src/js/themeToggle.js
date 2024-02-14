const themeToggle = () => {

    // Element from DOM (HTML)
    const themeButton = document.querySelector('.darkmode__button')
    const themeList = document.querySelector('.darkmode__list')
    const themeSelectors = document.querySelectorAll('.darkmode__theme')
    const themeItems = document.querySelectorAll('.darkmode__item')
    const body = document.querySelector('body')

    // Modifiers
    const themeListModifier = 'darkmode__list--visible'
    const themeItemModifier = 'darkmode__item--active'
    const themeButtonModifier = 'darkmode__button--active'

    // Toggle visibility on Theme list
    const toggleList = () => {
        themeList.classList.toggle(themeListModifier)
    }

    // Change Theme
    const themeChange = (event) => {
        
        // Get clicked targets data attribute named theme
        const theme = event.currentTarget.dataset.theme

        // Get clicked targets parents (li)
        const themeParent = event.currentTarget.parentNode

        // Get clicked targets icon
        const themeIcon = event.currentTarget.querySelector('.darkmode__icon')

        // Get Icon svg code
        const themeIconSVG = themeIcon.innerHTML

        // Set theme button to contain chosen themes icon
        themeButton.innerHTML = themeIconSVG

        // Set active class on theme Button
        themeButton.classList.add(themeButtonModifier)

        // Remove active class from all list items
        themeItems.forEach( item => item.classList.remove(themeItemModifier) )

        // Add active class to current clicked parent
        themeParent.classList.add(themeItemModifier)

        // If light add class for light and remove dark
        if ( theme == 'light') {
            body.classList.remove('theme-dark')
            body.classList.add('theme-light')
        }

        // If dark add class for dark and remove light
        if ( theme == 'dark') {
            body.classList.remove('theme-light')
            body.classList.add('theme-dark')
        }

        // If system remove both light and dark
        if ( theme == 'system') {
            body.classList.remove('theme-light')
            body.classList.remove('theme-dark')
            themeButton.classList.remove(themeButtonModifier)
        }

        // Close list
        toggleList()
    }

    // Events
    themeButton.addEventListener('click', toggleList)

    // For each theme button run function
    themeSelectors.forEach( button => button.addEventListener('click', themeChange))

}

themeToggle()



const themeToggleSelect = () => {

    const themeSelect = document.querySelector('#theme-select')
    const body = document.querySelector('body')
    const themeIcon = document.querySelector('.theme__icon')

    const changeTheme = (event) => {

        const theme = event.currentTarget.value

        const themeButtonIcon = document.querySelector(`.darkmode__theme[data-theme="${theme}"] .darkmode__icon`).innerHTML

        themeIcon.innerHTML = themeButtonIcon
        
        // If light add class for light and remove dark
        if ( theme == 'light') {
            body.classList.remove('theme-dark')
            body.classList.add('theme-light')
        }

        // If dark add class for dark and remove light
        if ( theme == 'dark') {
            body.classList.remove('theme-light')
            body.classList.add('theme-dark')
        }

        // If system remove both light and dark
        if ( theme == 'system') {
            body.classList.remove('theme-light')
            body.classList.remove('theme-dark')
        }

    }

    themeSelect.addEventListener('change', changeTheme)

}

themeToggleSelect()