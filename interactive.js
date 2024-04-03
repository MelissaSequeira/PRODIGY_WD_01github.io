function changecolor(){
    var navbar=document.getElementsByClassName('navbar')[0];
    var navtitle=document.getElementsByClassName('nav-title')[0];
    var navlinktext=document.querySelectorAll('a');
    
    var scrollele=window.scrollY;
    if(scrollele <350 ){
        navbar.classList.remove('bgcolor');
        navtitle.classList.remove('bgcolortext1');
        navlinktext.classList.remove('bgcolor a');
    }
    else{
        navbar.classList.add('bgcolor');
        navtitle.classList.add('bgcolortext1');
        navlinktext.classList.add('bgcolor a');
    }
}
window.addEventListener('scroll',changecolor)