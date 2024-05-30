// <순열(permutation) 구하기>
// 10 이하의 n개의 자연수가 주어지면 이 중 m개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// 입력 :
// n = 3, m = 2
// 3 6 9
// 출력 :
// 3 6
// 3 9
// 6 3
// 6 9
// 9 3
// 9 6

//           0 1 2
// 배열 arr [ 3 6 9 ]

//          0 1
// 배열 tmp [ _ _ ]  (순열 permutation)
//          3 6,9
//          6 3,9
//          9 3,6

//          0 1 2
// 배열 ch [ 0 0 0 ]  (arr[i]가 쓰였다면 ch[i]를 1로 변경. 백트래킹할땐 0으로 변경)

// D(L)  -> L은 tmp배열의 인덱스번호
// tmp[L] = arr[i]
//                                  DFS(0)
//                        0           1            2                -> 사용하는 arr의 인덱스
//                 DFS(1)           DFS(1)           DFS(1)
//                1      2         0      2         0      1        -> 사용하는 arr의 인덱스
//              DFS(2) DFS(2)    DFS(2) DFS(2)    DFS(2) DFS(2)
//              [3 6]  [3 9]     [6 3]  [6 9]     [9 3]  [9 6]

function solution(m, arr) {
    let answer = [];
    n = arr.length;
    let ch = Array.from({ length: n }, () => 0); // 배열의 각 원소가 사용되었는지 체크하는 배열
    let tmp = Array.from({ length: m }, () => 0); // 현재 순열을 저장할 배열

    function DFS(L) {
        if (L === m) { // 순열의 길이가 m이 되면
            answer.push(tmp.slice()); // 현재 순열의 복사본을 추가
        } else {
            for (let i = 0; i < n; i++) { // arr을 탐색
                if (ch[i] === 0) { // 아직 사용되지 않은 원소라면
                    ch[i] = 1; // 현재 원소를 사용 중으로 표시
                    tmp[L] = arr[i]; // 현재 위치에 원소를 배치
                    DFS(L + 1); // 다음 위치로 이동하여 재귀 호출
                    ch[i] = 0; // 백트래킹: 현재 원소 사용 표시를 해제
                }
            }
        }
    }

    DFS(0); // DFS 탐색 시작
    return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr)); // [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]