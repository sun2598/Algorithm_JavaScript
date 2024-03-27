// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 
// 첫 자리부터의 연속된 0은 무시한다.

function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (i = 2; i <= parseInt(Math.sqrt(num)); i++) { // 제곱근을 사용하는 것이 효율적!
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// 나의 풀이
function solution(arr) {
    let answer = [];

    answer = arr.map(function(value) {
        let num = parseInt(value.toString().split('').reverse().join(''));
        if (isPrime(num)) {
            return num; // [23, undefined, undefined, 2, undefined, 73, 2, 3, undefined]
        }
    }).filter(function(value) { 
        // filter : 요소의 값을 가공하지 않음. 오직 특정 조건에 맞는 요소들만을 새 배열로 반환 → 가공하고 싶으면 map 사용)
        return value; // [23, 2, 73, 2, 3]
    });

    return answer;
}
// 강의 풀이
function solution2(arr) {
    let answer = [];

    for (let x of arr) {
        let res = 0; // 뒤집힌 수
        while (x) { // 이렇게 while문 써서 숫자 뒤집기!
            let tmp = x % 10;
            res = res * 10 + tmp;
            x = parseInt(x / 10);
        }
        if (isPrime(res)) {
            answer.push(res);
        }
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));