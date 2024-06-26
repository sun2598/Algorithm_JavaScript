// 봉우리 (4방향 탐색)

// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
// 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

function solution(arr) {
    let answer = 0;

    let n = arr.length;
    // 12시 3시 6시 9시
    let dx = [-1, 0, 1, 0]; // 행 (dx: direction x)
    let dy = [0, 1, 0, -1]; // 열 (dy: direction y)

    // 3중 for문
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) { // (12시, 3시, 6시, 9시) -> 4개 방향 탐색
                let nx = i + dx[k]; // nx는 행의 좌표
                let ny = j + dy[k]; // ny는 열의 좌표
                // nx >= 0 : 좌표가 0보다 작아지면, 격자판의 범위를 벗어나게 됨 (격자판의 범위 안에서만 탐색하도록 함)
                // nx < n : 좌표가 격자판의 크기 n보다 작은지를 확인 (격자판의 범위 안에서만 탐색하도록 함)
                // arr[nx][ny] >= arr[i][j] : 봉우리인지 탐색
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
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

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
];
console.log(solution(arr));