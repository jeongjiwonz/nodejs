const fs = require('fs').promises;
fs.readFile('./writeme.txt')
	.then((data) =>{
		console.log('1번',data.toString());
		return  fs.readfile('./writeme.txt');
	})
	.then((data) =>{
		console.log('2번',data.toString());
		return fs.readfile('./writeme.txt');
	})
	.then((data) =>{
		console.log('3번',data.toString());
		return fs.readfile('./writeme.txt');
	})
	.then((data) =>{
		console.log('4번',data.toString());
		return fs.readfile('./writeme.txt');
	})
	.then((data) =>{
		console.log('5번',data.toString());
		return fs.readfile('./writeme.txt');
	})
	.catch((err)=>{
		console.log(err);
	})