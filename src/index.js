// import picture from './image.png';
// import style from './style.css';
// import createImage from './createImage';

// console.log('picture:', picture);
// var img = new Image();
// img.src = picture;
// img.classList.add(style.banner);
// var body = document.getElementsByTagName('body')[0];
// console.log(body);
// body.appendChild(img);
// createImage();

// import './style.css';
// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont iconcart-full">abc</div>';
import './style.css';
import counter from './counter';
counter();
var btn = document.createElement('button');
btn.innerHTML = 'add';
document.body.appendChild(btn);
btn.onclick = function() {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
}