//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//when the window start to scroll
window.onscroll = () => {
    //loop to call each element in the section
    sections.forEach(sec => {
        //TOP = the scroll position of the window
        let top = window.scrollY;
        //offeset = the distance of the section from the top of the document
        let offset = sec.offsetTop -100;
        //height = the height of the section
        let height = sec.offsetHeight;
        //id = the id of the each section
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar Links
            //the links in the () is used to declare and use in => {}
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toddle icon and navbar whne click navbar links(scroll) 
    menuIcon.classList.remove('bx_x');
    navbar.classList.remove('active');
}

/*=========================Show Scroll Up===================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add show-scroll class to the tag with the scroll up class
    //it is the shorthand way to write [if...else]
    //this.scroolY is check if the current scroll position is > 350px
    //it execute the first expression after ? which is add 'show-scroll'(already declare in css)
    //':' is the the second expression when the statement is false
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          :scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)

/*=========================DARK LIGHT THEME==================*/
const themeButton = document.getElementById('theme-button')
//in CSS, it is body.dark-theme
const darktheme = 'dark-theme'
//it already link to the boxicon, so it just need the name of the class
//in box icon to change
const icontheme = 'bx-sun'

//We obtain the current theme that the onterface has by validating the dark theme class
//document.body is use to declare the body in the CSS
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
//ThemeButton was declare in the CSS line 53
const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'bx bx-moon' : 'bx bx-sun'

//Previously selected topic (if user selected)
//LocalStorage = use to store the data on user's browser
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled we ask what the issue was to know if we activated or deal
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](icontheme)
}

//Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(icontheme)
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selectedIcon',getCurrentIcon())
})

