import libs from './libs/fn.js';
import kkb from './data/kkb.txt';
import logo from './imags/111.png';
import  "./css/index.css";
import num from "./fn.js";

// libs.fn();
// console.log('kkb',kkb);
console.log("num",num)
let image =new Image();
image.src = logo;
document.body.appendChild(image);
console.log('logo',logo);