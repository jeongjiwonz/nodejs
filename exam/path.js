// path 내장 모듈 - 파일 경로, 디렉토리 경로와 관련된 모듈
const path = require('path');
// path.js의 전체 경로

const fileName = __filename;
console.log('현재 파일의 디렉토리 경로',path.dirname(fileName));
console.log('파일의 확장자 정보', path.extname(fileName));
console.log('파일의 이름', path.basename(fileName));
console.log('파일의 이름(확장자 없는)', path.basename(fileName,path.extname(fimeName)));

// path.join -> 상대 경로 작성법으로 절대 경로를 만들어주는 메서드
// .. -> 상위 디렉토리로 이동

const userpath = path.join(__dirname,'..','..',"/test_folder","/test.js");
console.log("__dirname",__dirname);
console.log('userpath',userPath);

// path.parse - root, dir, name, ext, base
const parse = path.parse(fileName);
console.log("parse",parse); // 파일 경로 분해
console.log('format'path.parmat(parse)); // 분해된 경로를 문자열로 결합하여 반환


// path.normalize --> 비정상 경로 -> (os에 맞는) 정상 경로 변경
const wrongPath = "d://test\\\\text.js";
console.log('normalize', path.normalize(worngPath));

path
	.dirname
	.basename
	.extname
	
	.join(기준경로, 상대경로, ...) -> 절대 경로