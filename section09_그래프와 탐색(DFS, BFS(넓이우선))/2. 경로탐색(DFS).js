// <경로 탐색> (인접행렬) : DFS
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하세요.
// 아래 그래프에서 1번에서 5번 정점으로 가는 가지 수는 총 6가지입니다.

// [1]<->[2]-->[5]      먼저 ch배열로 들린 노드 체크            D(1)
//  | \ / ↑    ↗        0 1 2 3 4 5                   1  2  3  4  5
//  ↓ ↙ ↘ |  /                                          D(2)
// [3]-->[4]                                       1  2  3  4  5
//                                                      D(3)
// 1 2 3 4 5                                       1  2  3  4  5        -> 여기서 5를 안들렀으니까 여기로 백트래킹해서 D(5)로
// 1 2 5                                                   D(4)             (백트래킹하면서 이전의 4,5는 체크 풀어줘야함)
// 1 3 4 2 5                                          1  2  3  4  5
// 1 3 4 5                                                       D(5)   -> answer++; 해주고 백트래킹.
// 1 4 2 5
// 1 4 5

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    path = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    
    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }

    path.push(1);
    ch[1] = 1;
    DFS(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr)); // 정점의 수 N(1<=N<=20)