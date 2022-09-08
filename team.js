


Array.from(document.getElementsByClassName('member-tab')).forEach(tab =>{
    tab.addEventListener('mouseover', () => {
        tab.children[0].style.opacity = 0.0
        tab.children[1].style.opacity = 1.0

    })

    tab.addEventListener('mouseout', () =>{
        tab.children[0].style.opacity = 1.0
        tab.children[1].style.opacity = 0.0
    })
})


const member_tab_height = window.outerHeight - 100

console.log(window.innerHeight, member_tab_height)

Array.from(document.getElementsByClassName('member-tab')).forEach(tab =>{
    tab.style.height = member_tab_height + "px"
})