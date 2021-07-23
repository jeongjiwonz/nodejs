
const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch()); // process.arch()와 동일 - 프로세스의 아키텍쳐 정보
console.log('os.platform():', os.platform()); // process.platform()와 동일 - 운영체제의 플랫폼 정보
console.log('os.type():', os.type()); // 운영체제의 종류
console.log('os.uptime():', os.uptime()); // 운영체제 부팅 이후 흐른 시간(초)를 보여줍니다. process.uptime()은 노드의 실행시간이었습니다.
console.log('os.hostname():', os.hostname()); // 컴퓨터의 이름을 보여줍니다.
console.log('os.release():', os.release()); // 운영체제의 버전을 보여줍니다.

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉터리의 경로를 보여줍니다.
console.log('os.tmpdir():', os.tmpdir()); // 임시파일 저장경로를 보여줍니다.

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus()); // 컴퓨터 코어 정보를 보여줍니다.
console.log('os.cpus().length:', os.cpus().length); // 컴퓨터 코어 갯수

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); // 사용가능한 메모리(RAM)를 보여줍니다.
console.log('os.totalmem():', os.totalmem()); //  전체 메모리 용량을 보여줍니다.
