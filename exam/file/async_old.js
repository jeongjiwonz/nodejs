const fs = require('fs');
// 비동기 순서 처리
fs.readFile('./writeme.txt', (err,data) => {
	console.log('1번',data.toString());
	
	fs.readFile('./writeme.txt',(err,data)=>{
		console.log('2번',data.toString());
		
		fs.readFile('./writeme.txt',(err,data)=>{
			console.log('3번',data.toString());
			
			fs.readFile('./writeme.txt',(err,data)=>{
				console.log('4번',data.toString());
				
				fs.readFile('./writeme.txt',(err,data)=>{
					console.log('5번',data.toString());
		
				});
			});
		});
	});
});
/* 비동기 - 시작 1,2,3,4,5 -> 결과 순서 유지 X
fs.readFile('./writeme.txt', (err,data) =>{
	console.log('1번',data.toString());
});
fs.readFile('./writeme.txt', (err,data) =>{
	console.log('2번',data.toString());
});
fs.readFile('./writeme.txt', (err,data) =>{
	console.log('3번',data.toString());
});
fs.readFile('./writeme.txt', (err,data) =>{
	console.log('4번',data.toString());
});
fs.readFile('./writeme.txt', (err,data) =>{
	console.log('5번',data.toString());
});
*/