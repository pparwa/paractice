const bar = document.querySelector("#myicon");
const menue = document.querySelector('.menue');
function change(){
    if(bar.classList.contains('fa-bars'))
    {
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-close');
        document.querySelector('.menue').style.visibility = "visible";
        }
    else if(bar.classList.contains('fa-close'))
    {
        bar.classList.remove('fa-close'); 
        bar.classList.add('fa-bars');
        document.querySelector('.menue').style.visibility = "hidden";
    }

}
bar.addEventListener('click',change);
const slide = document.querySelector('.slider').children;
let slider_counter = 0;

slide[2].classList.add('active');

setInterval(() => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active')
    }
    slide[slider_counter].classList.add('active')
    slider_counter++;
    if (slider_counter == slide.length) {
        slider_counter = 0;
    }
}, 3000);
text = ['WORD PRESS','HTML/LCSS','JS']
let i = 0;
let end =1;
setInterval(() =>{
 document.querySelector('.auto').innerHTML = text[i];
 i++;
 if(i == text.length -1 )
 {
    i = 0;
 }

},3000)