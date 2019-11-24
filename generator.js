function* loadUI() {
  showLoadingScreen();
  const res = yield loadUIDataAsynchronously();
  console.log(res);
  hideLoadingScreen();
}
function showLoadingScreen() {
  console.log('do loading scree');
}
function loadUIDataAsynchronously() {
  setTimeout(function() {
    console.log('loadUIDataAsynchronously');
    loader.next({data: 'zzy'});
  }, 3000)
}
function hideLoadingScreen() {
  console.log('hideLoadingScreen');
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
// loader.next()