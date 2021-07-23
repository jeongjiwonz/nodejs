const fs = require('fs').promises;
const path = require('path'); 
// extname(절대경로) - 확장자 가져올때 사용
//.join(기준경로, '상대경로'...) -> 절대경로
//

const dirpath = path.join(__dirname, 'logs');
fs.readdir("./logs")
	.then((data)=>{
		/*
			1. 디렉토리 삭제 -> rmdir
			2. 파일 삭제 -> unlink
		*/
		data.forEach(async(file)=>{
			try{
			const filePath = dirpath + "/" + file;
			const ext = path.extname(filePath);
			console.log(filePath, ext);
			if(ext){ // 파일
				await fs.unlink(filePath);
			}else{ // 디렉토리
				await fs.remdir(filePath);
			}
			}catch(err){
				console.error(err);
			}
		});
	})
	.catch((err)=>{
		console.error(err);
	});