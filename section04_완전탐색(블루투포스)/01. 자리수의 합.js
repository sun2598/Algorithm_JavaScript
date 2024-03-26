// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

// 나의 풀이
function solution(n, arr) {
    let answer = 0;

    let maxSum = 0; // 자릿수의 합
    let maxNum = 0; // 자릿수의 합이 최대인 자연수
    for (x of arr) {
        let sum = x.toString().split('').reduce(function (acc, value) {
            return acc + parseInt(value);
        }, 0);
        if (sum > maxSum) {
            maxNum = x;
            maxSum = sum;
        } else if (sum == maxSum) {
            maxNum = (x > maxNum) ? x : maxNum;
        }
    }
    answer = maxNum;
    return answer;
}
// 강의 풀이
function solution2(n, arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = 0;
        let tmp = x;
        while (tmp) { // 이렇게 while문으로 각 자리수의 합 구하기
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) {
                answer = x;
            }
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr));
