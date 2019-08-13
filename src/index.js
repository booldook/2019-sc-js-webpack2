const _ = require('lodash');		//commonJS Spec(규격)/Standard(표준)

import {area, diameter} from './js/circle';
import box from './js/box';

import './sample.scss';
import './style.css';

console.log(area(200));
console.log(diameter(8));
console.log(box(16));
const div = document.createElement('div');
div.innerHTML = "웹팩을 실행해 보자";
document.body.appendChild(div);