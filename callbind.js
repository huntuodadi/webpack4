
Function.prototype.myCall = function(context) {
  context = context || window;
  const sym = Symbol(this);
  console.log(sym);
  context[sym] = this;
  console.log('arguments:', [...arguments].slice(1));
  const args = [...arguments].slice(1);
  const res = context[sym](...args);
  delete context[sym];
  return res;
}

Function.prototype.myApply = function(context) {
  context = context || window;
  const sym = Symbol(this);
  console.log(sym);
  context[sym] = this;
  console.log('arguments:', [...arguments][1]);
  const args = [...arguments][1];
  const res = context[sym](...args);
  delete context[sym];
  return res;
}
const obj = {
  name: 'zzy',
  age: 10
};

Function.prototype.myBind = function(context) {
  context = context || window;
  const firstArguments = [...arguments].slice(1);
  const self = this;
  return function() {
    const secondArguments = [...arguments];
    return self.myApply(context, firstArguments.concat(secondArguments));
  }
}


const info = function(resValue1, resValue2, resValue3, resValue4) {
  console.log('info:', this.name, this.age, resValue1, resValue2, resValue3, resValue4);
  return resValue1;
}


const otherFun = info.myBind(obj, 'bbc');
const res = otherFun('aab');
console.log(res);