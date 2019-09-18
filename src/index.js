import _ from 'lodash';
import printMe from './print.js';
import {cube} from './math.js';
import './style.css';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click';
  btn.onclick = printMe;
  element.appendChild(btn);
  console.log(cube(3));
  return element;
}

document.body.appendChild(component());

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('uodate pritn module');
    printMe();
  })
}