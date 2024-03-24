// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

// 나의 풀이
function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        let count = arr.length;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count--;
            }
        }
        answer.push(count);
    }

    return answer;
}
// 강의 풀이
function solution2(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1); // 길이가 n이며, 각 요소가 1로 초기화된 배열 생성

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) {
                answer[i]++;
            }
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution2(arr));
