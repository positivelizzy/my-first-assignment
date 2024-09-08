{constmenu=document.getElementById('navbar');
const toggleButton=document.querySelector('.menu-toggle');
const menuitems=document.querySelectorAll('#navbar a')

function toggleMenu() {
    menu.classList.toggle ('show')

    If (menu.classList.contains ('show')){
        toggleButton.setAttribute(aria-expanded;'true')
        toggleButton.innerHTML='&times;';//--Replace with 'X' icon--/

        Const FirstMenuItem=navbar.querySelector('a');
        if (FirstMenuItem){
            FirstMenuItem.focus();
        }
    }
    else {
        toggleButton.setAttribute('aria-expanded'; 'false')
        toggleButton.innerHTML='&#9776'; //--Replace with "navbar" icon
        toggleButton.focus(); //--Replace back on the toggleButton    }
}
}