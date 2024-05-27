// <최대점수 구하기(DFS)>
// 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
// 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
// 제한시간 M 안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
// (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

// D(L, score, time)  -> L은 앞에서부터 몇개를 부분집합으로 만드는지, score는 점수의 합, time은 시간의 합
//                                 DFS(0,0,0)
//                              o             x
//                  DFS(1,10,5)                 DFS(1,0,0)
//                  o        x                  o        x
//        DFS(2,35,17)    DFS(2,10,5)    DFS(2,25,12)   DFS(2,0,0)
//          o      x        o      x       o      x       o      x
// DFS(3,50,25) DFS(3,35,17)

function solution(m, ps, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ps.length; // 문제의 개수

    function DFS(L, score, time) {
        if (time > m) { // 시간이 제한시간을 넘어버리면 리턴
            return;
        }
        if (L == n) { // 부분집합 하나가 완성된 상태
            answer = Math.max(answer, score);
        } else {
            DFS(L + 1, score + ps[L], time + pt[L]); // L번째 원소를 사용하는 경우
            DFS(L + 1, score, time); // L번째 원소를 사용하지 않는 경우
        }
    }

    DFS(0, 0, 0); // DFS 탐색 시작
    return answer;
}

let ps = [10, 25, 15, 6, 7]; // 각 문제의 점수
let pt = [5, 12, 8, 3, 4]; // 각 문제를 푸는 데 걸리는 시간
console.log(solution(20, ps, pt)); // 제한시간: 20, 결과: 41