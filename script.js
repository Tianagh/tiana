// making the website responsive
function makeResponsive() {
    const elements = document.querySelectorAll('.responsive');  
    elements.forEach(element => {
        if (window.innerWidth < 600) {
            element.style.fontSize = '12px';
            element.style.padding = '5px';
        } else {
            element.style.fontSize = '16px';
            element.style.padding = '10px';
        } 
    });
}

window.addEventListener('resize', makeResponsive);
window.addEventListener('load', makeResponsive);
makeResponsive();
