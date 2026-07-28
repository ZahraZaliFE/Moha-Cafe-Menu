const sideBarBtn = document.querySelectorAll('.sidebar-link')

function resetAll() {
    sideBarBtn.forEach(function (link) {
        link.classList.remove('style-btn')
    })
}

sideBarBtn.forEach(function (link) {
    link.addEventListener('click', function (event) {

        resetAll() //first
        this.classList.add('style-btn') //next

        const targetId = this.getAttribute('data-target').substring(1)
        const targetSection = document.getElementById(targetId)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
        }
    })
})