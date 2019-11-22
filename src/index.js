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
// import './style.css';
// import counter from './counter';
// counter();
// class Button {
//   constructor() {
//     this.createButton
//   }
//   handleClick(event) {
//     console.log('handleClick:', this, event);
//   }
//   createButton() {
//     var btn = document.createElement('button');
//     btn.innerHTML = 'add125';
//     document.body.appendChild(btn);
//     btn.onclick = this.handleClick;
//   }
// }
// const button = new Button();
// button.createButton();
// function createButton() {
//   function handleClick() {

//   }
// }



function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

// console.log(hw.next());

// function Car(name) {
//   this.name = name;
// }
// Car.prototype.run = function() {
//   console.log('car is running');
// }

// var car = new Object();
// car.__proto__ = Car.prototype;
// Car.call(car, 'zzy');
// console.log('car:', car.name);
// car.run();

class Father {
  constructor() {
    this.name = 'zzy'
  }
}

class Child extends Father {
  constructor() {
    super();
    console.log(this.name);
  }
}

const child = new Child();