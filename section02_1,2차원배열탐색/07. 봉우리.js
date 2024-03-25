function solution(arr) {
    let answer = 0;

    let n = arr.length;
    let dx = [-1, 0, 1, 0]; // 좌 상 우 하
    let dy = [0, 1, 0, -1];

    // 3중 for문
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) { // 가장자리에 대해서는 검증 안함
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                answer++;
            }
        }
    }

    return answer;
}
// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44
let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
];
console.log(solution(arr));