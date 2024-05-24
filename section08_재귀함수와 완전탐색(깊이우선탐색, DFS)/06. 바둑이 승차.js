// 바둑이 승차(DFS)
// 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다. 
// 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
// N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.

// c = 259, n = 5
// { 81 58 42 33 61 }

// D(L, sum)  -> L은 앞에서부터 몇개를 부분집합으로 만드는지, sum은 그 합
//                         DFS(0,0)
//                        o         x
//                  DFS(1,33)      DFS(1,0)
//                 o         x
//          DFS(2,75)        DFS(2,33)
//         o        x
//  DFS(3,133)      DFS(3,75)
// { 81 58 42 }     { 81 58 }
//             ...
// DFS(5,275)                                                => 요 depth가 종착점. 부분집합 완성
// { 81 58 42 33 61 }

// 앞에서부터 부분집합의 합 : sum

function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER; // 태울 수 있는 가장 무거운 무게

    function DFS(L, sum) {
        if (sum > c) { // sum이 c를 넘어버리면 리턴
            return;
        }
        if (L == arr.length) { // 부분집합 하나가 완성된 상태
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + arr[L]); // 현재 바둑이를 태운 경우
            DFS(L + 1, sum); // 현재 바둑이를 태우지 않은 경우
        }
    }

    DFS(0, 0);
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); // 242