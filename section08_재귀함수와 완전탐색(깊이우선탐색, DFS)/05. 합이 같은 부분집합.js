// 합이 같은 부분집합(DFS : 아마존 인터뷰)
// N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고, 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.
// 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
// 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

// D(L, sum)  -> L은 앞에서부터 몇개를 부분집합으로 만드는지, sum은 그 합
//                         DFS(0,0)
//                       o         x
//                  DFS(1,1)      DFS(1,0)
//                o          x
//          DFS(2,4)         DFS(2,1)
//         o        x
//   DFS(3,9)       DFS(3,4)                        => 요 depth가 종착점. 부분집합 완성
//  { 1 3 5 }        { 1 3 }

// 전체의 합 total : 32
// 앞에서부터 부분집합의 합 sum : 16
// total - sum == sum 일때까지 돌리기

function solution(arr) {
    let answer = "NO";
    let flag = 0;
    let total = arr.reduce((acc, value) => acc + value, 0);

    function DFS(L, sum) { // L은 앞에서부터 몇 개를 부분집합으로 만드는지, sum은 그 합

        if (flag) {
            return; // 이미 답을 찾은 경우 더 이상 탐색하지 않음
        }
        if (L === arr.length) { // 부분집합 하나가 완성된 상태
            if (total - sum === sum) { // 부분집합의 합이 같은 경우
                answer = "YES";
                flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]); // 현재 원소 L을 부분집합에 포함하는 경우
            DFS(L + 1, sum); // 현재 원소 L을 부분집합에 포함하지 않는 경우
        }
    }

    DFS(0, 0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // YES