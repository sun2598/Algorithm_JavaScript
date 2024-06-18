// <경로 탐색> (인접행렬) : DFS
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
// 아래 그래프에서 1번에서 5번 정점으로 가는 가지 수는 총 6가지입니다.

// '인접행렬"은, 노드의 개수가 적을 때 사용할 수 있는 방법. 만약 노드의 개수가 많다면 '인접그래프' 방식을 이용 (다음문제 참고)

// [1]<->[2]-->[5]      먼저 ch배열로 들린 노드 체크
//  | \ / ↑    ↗        0 1 2 3 4 5
//  ↓ ↙ ↘ |  /
// [3]-->[4]
//
// 1 2 3 4 5
// 1 2 5
// 1 3 4 2 5
// 1 3 4 5
// 1 4 2 5
// 1 4 5

// graph[v][i] === 1의 의미는 v에서 i로 이동할 수 있다는 뜻
//     1  2  3  4  5   -> graph 배열
//    --------------
// 1 | 0  1  1  1  0
// 2 | 1  0  1  0  1
// 3 | 0  0  0  1  0
// 4 | 0  1  0  0  1
// 5 | 0  0  0  0  0


// n: 정점 갯수, arr: 간선 정보
function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 인접행렬을 만들 2차원 배열 -> 인덱스 1번부터 사용 (0번 비워둠)
    let ch = Array.from({ length: n + 1 }, () => 0); // 행과 열의 개수를 n+1으로 설정 -> 인덱스 1번부터 사용 (0번 비워둠)
    path = []; // 테스트 코드 path(경로)
    
    for (let [a, b] of arr) {
        graph[a][b] = 1; // 방향그래프
    }

    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) { // 가지뻗기
                // v->i로 이동할 수 있고 ~
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    DFS(i); // 2를 넣었으면, D(2)가 됨(출발을 2부터 함)
                    ch[i] = 0;
                    path.pop(); // back 할 때
                }
            }
        }
    }
    
    path.push(1); //출발점 1은 무조건 처음에 push
    ch[1] = 1; //출발점은 무조건 1 처리해주기(안하면 오류남. 없애보기)
    DFS(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr)); // 정점의 수 N(1<=N<=20)