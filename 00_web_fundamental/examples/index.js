var say = (name) => {
  console.log('Hello, ' + name);
}
var sayAsync = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 1000)
}

//say('nol')
//say('satu')
//sayAsync('dua', (name) => {
//  console.log('Hello async in callback, ' + name);
//})
//say('tiga');

//var kalikan = (param1, param2, callback) => {
//  if (param1 > 10 || param2 > 10) {
//		return callback('Angka di atas 10, tidak bisa diproses');	
//	}
//	let result = param1 * param2;
//	return callback(null, result);
//}

//kalikan(3,12, (err, result) => {
//	if (err) {
//    console.log(err);
//		return;
//	}
//	console.log(result);	
//})
var kalikan = (param1, param2) => {
  return new Promise((resolve, reject) => {
    if (param1 > 10 || param2 > 10) {
  		reject('Angka di atas 10, tidak bisa diproses');	
      return
  	}
  	let result = param1 * param2;
  	resolve(result);
	})
}

kalikan(3,11)
.then((result) => {
  console.log(result);
  return kalikan(4, 5)
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
})

