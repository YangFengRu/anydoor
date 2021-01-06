import logo from './images/logo.png';
import fn from './fn.js';
import css from './css/css.css';


console.log('logo',logo);
console.log('fn',fn);
console.log('css',css);

//看一下图片效果
let logoImage = new Image();
logoImage.src = logo;
document.body.appendChild(logoImage);

let btn = document.querySelector('button');
btn.onclick=function() {
    var name="杨凤如"
    console.log(`开课吧-${name}`);
}
