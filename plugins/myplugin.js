function MyPlugin(options) {
  this.options = options;
}
MyPlugin.prototype.apply = function(compiler) {
  console.log('this:', this);
  compiler.hooks.entryOption.tap('MyPluginfdfdf', (context, entry) => {
    console.log('context:', context);
    console.log('=================');
    console.log('entry:', entry);
  });
}

module.exports = MyPlugin;