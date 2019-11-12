import picture from './image.png';
console.log('picture:', picture);
export default function() {
  var img = new Image();
  img.src = picture;
  img.classList.add('banner');
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(img);
}