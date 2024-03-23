// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명의 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// <Math 객체>
// 각종 수학 계산을 도와줌
// 1. Math.floor(값), Math.ceil(값), Math.round(값) -> 내림, 올림, 반올림
// 2. Math.random() -> 0~1 사이의 랜덤값
// 3. Math.max(값, 값, ...), Math.min(값, 값, ...) -> 최대값, 최소값
// 4. Math.abs(값) -> 절대값
// 5. Math.sqrt(값) -> 제곱근 (Math.sqrt(16)은 4)

function solution(n) {
    let answer;

    answer = Math.ceil(n / 12);

    // if (n % 12 === 0) {
    //     answer = Math.floor(n / 12);
    // } else {
    //     answer = Math.floor(n / 12) + 1;
    // }
    
    return answer;
}

console.log(solution(178));