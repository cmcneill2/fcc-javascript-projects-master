const sidebar = document.querySelector(".sidebar")
const sidebarToggle = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")

sidebarToggle.addEventListener('click', function () {
    /*     if (sidebar.className == "sidebar") {
            sidebar.classList.add('show-sidebar')
        }
        else {
            sidebar.className = "sidebar"
        } */
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})