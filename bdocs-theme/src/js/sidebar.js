const sidebarToggle = () => {

    const sidebarButton = document.querySelector('.sidebar-button')
    const sidebar = document.querySelector('.site-sidebar')
    const sidebarCloseButton = document.querySelector('.site-sidebar__close')

    const sidebarModifier = 'site-sidebar--open'

    const toggleSidebar = () => {
        sidebar.classList.toggle(sidebarModifier)
        document.body.classList.toggle('menu-opened')
    }

    sidebarButton.addEventListener('click', toggleSidebar)
    sidebarCloseButton.addEventListener('click', toggleSidebar)

}

sidebarToggle()