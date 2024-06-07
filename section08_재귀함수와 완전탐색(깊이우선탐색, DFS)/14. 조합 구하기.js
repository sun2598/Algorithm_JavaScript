// <조합 구하기>
// 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

function solution(n, m) {
    let answer = []; // 결과를 저장할 배열
    let tmp = Array.from({ length: m }, () => 0); // 현재 조합을 저장할 배열

    // DFS(L, s) 함수: L은 현재 선택한 구슬의 개수, s는 선택할 구슬의 시작 번호
    function DFS(L, s) {
        if (L === m) { // m개의 구슬을 모두 선택한 경우
            answer.push(tmp.slice()); // 현재 조합을 결과 배열에 추가
        } else {
            for (let i = s; i <= n; i++) { // s부터 n까지 반복
                tmp[L] = i; // 현재 위치에 구슬 번호를 저장
                DFS(L + 1, i + 1); // 다음 구슬 선택을 위해 재귀 호출 (i+1을 시작 번호로)
            }
        }
    }

    DFS(0, 1); // 초기 호출: 0개의 구슬을 선택한 상태에서 1번 구슬부터 선택 시작
    return answer;
}

console.log(solution(4, 2));
// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
// 총 경우의 수: 6