// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

// 나의 풀이
function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    // 행의 합, 열의 합
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        let sum1 = 0;
        let sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        arr1.push(sum1);
        arr2.push(sum2);
    }
    // 대각선의 합
    let arr3 = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - 1 - i];
    }
    arr3.push(sum1);
    arr3.push(sum2);

    answer = Math.max(...arr1, ...arr2, ...arr3);

    return answer;
}

// 강의 풀이
function solution2(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    // 행의 합, 열의 합
    let sum1 = (sum2 = 0);
    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }
    // 대각선의 합
    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution2(arr));