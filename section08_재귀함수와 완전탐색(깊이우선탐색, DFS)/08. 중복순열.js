// <중복순열 구하기>
// 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
// 입력 : n = 3, m = 2
// 출력 :
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3
//          0 1
// 배열 pm [ _ _ ]   (pm은 permutation, 순열)
//          1 1
//          2 2     => 총 3*3 = 9개의 경우의 수
//          3 3
// D(L)  -> L은 pm배열의 인덱스번호
//                                  DFS(0)
//                        1           2          3
//                 DFS(1)           DFS(1)          DFS(1)
//             1   2   3          1   2   3         1   2   3
//        DFS(2)DFS(2)DFS(2)  DFS(2)DFS(2)DFS(2)  DFS(2)DFS(2)DFS(2)
//        [1 1] [1 2] [1 3]   [2 1] [2 2] [2 3]   [3 1] [3 2] [3 3]

function solution(n, m) {
    let answer = [];
    let tmp = [];

    function DFS(L) {
        if (L == m) { // 부분집합 완성
            answer.push(tmp.slice()); // tmp 배열의 복사본을 추가
            // JavaScript에서 배열은 참조 타입이기 때문에 tmp를 바로 answer에 추가하면 tmp의 변경 사항이 answer에 반영됨
            // -> 마지막 tmp인 [3, 3] 만 여러번 들어가게됨
        } else {
            // 두 가닥이 아니라 n가닥씩 뿌리내림 -> 하나당 n번 재귀호출
            for (let i = 1; i <= n; i++) {
                tmp[L] = i; // tmp[0]에 1,2,3 대입, tmp[1]에 1,2,3 대입
                DFS(L + 1);
            }
        }
    }

    DFS(0);
    return answer;
}

console.log(solution(3, 2));
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3