const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");
 console.log('syncHook:', SyncHook);

 class Car {
	constructor() {
		this.hooks = {
			accelerate: new SyncHook(["newSpeed"]),
			brake: new SyncHook(['data', 'data1']),
			calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
		};
  }
  
  setSpeed(newSpeed) {
		// following call returns undefined even when you returned values
		this.hooks.accelerate.call(newSpeed);
  }
  
  stop(data, data1) {
    this.hooks.brake.call(data, data1);
  }

  useNavigationSystemPromise(source, target) {
		// const routesList = new List();
		return this.hooks.calculateRoutes.promise(source, target).then((res) => {
      // res is undefined for AsyncParallelHook
      console.log('useNavigationSystemPromise:', res);
			// return routesList.getRoutes();
		});
	}

	useNavigationSystemAsync(source, target, callback) {
		const routesList = new List();
		this.hooks.calculateRoutes.callAsync(source, target, routesList, err => {
			if(err) return callback(err);
			callback(null, routesList.getRoutes());
		});
	}
}

const myCar = new Car();

myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
myCar.hooks.brake.tap('my car stop:', (data, data1) => console.log(`my car stops ${data} ${data1}`));

// async tap
myCar.hooks.calculateRoutes.tapPromise("GoogleMapsPlugin", (source, target, routesList) => {
  // return a promise
  console.log('tapPromise:', source, target, routesList);
  return Promise.resolve('this is a result');
});
// myCar.hooks.calculateRoutes.tapAsync("BingMapsPlugin", (source, target, routesList, callback) => {
// 	bing.findRoute(source, target, (err, route) => {
// 		if(err) return callback(err);
// 		routesList.add(route);
// 		// call the callback
// 		callback();
// 	});
// });
// You can still use sync plugins
// myCar.hooks.calculateRoutes.tap("CachedRoutesPlugin", (source, target, routesList) => {
// 	const cachedRoute = cache.get(source, target);
// 	if(cachedRoute)
// 		routesList.add(cachedRoute);
// })

myCar.setSpeed('10m/s');
myCar.stop(0, 1);

myCar.useNavigationSystemPromise('a', 'b').then((response) => {
  console.log('response:', response);
});