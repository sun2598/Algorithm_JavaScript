// <조합의 경우 수(메모이제이션)>
// Memoization = memory + optimization
// 메모이제이션(Memoization)은 컴퓨터 프로그램을 최적화하는 기법 중 하나로, 계산된 값을 저장해 두고, 
// 필요할 때 저장된 값을 재사용함으로써 동일한 계산을 반복하지 않도록 하는 기술입니다. 
// 이는 특히 재귀 호출이 많은 동적 프로그래밍(dynamic programming) 문제에서 유용하게 사용됩니다.

// 원래 조합은 다음 공식으로 계산합니다.
// nCr = n! / (n-r)!r!
// 하지만 이 공식을 쓰지않고 다음 공식을 사용하여 재귀를 이용해 조합 수를 구해주는 프로그램을 작성하세요.
// nCr = n-1Cr-1 + n-1Cr
// (nCr : 조합 combination. n개 중에서 r개를 순서없이 뽑는 경우의 수)
// (nPr : 순열 permutation. n개 중에서 r개를 순서대로 뽑는 경우의 수)

// 입력 : n(3<=n<=33) = 5, r(0<=r<=n) = 3

//                           5C3
//                      O           X
//                 4C2                 4C3
//             O        X            0        x
//          3C1        3C2          3C2      3C3
//         O   X      O   X        O   X    O   X
//       2C0   2C1  2C1   2C2
//            O   x
//          1C0   1C1

//      0  1  2  3  4  5        => 계산한 적 있는 조합의 값을 저장해놓는 2차원 배열
//     ------------------
//  0 |
//  1 |
//  2 |    2
//  3 |       3
//  4 |
//  5 |

function solution(n, r) {
    let answer = [];
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    // dy는 메모이제이션을 위한 2차원 배열로, 35x35 크기로 초기화. 중복 계산을 피하기 위해 이미 계산된 조합의 값을 저장

    function DFS(n, r) {
        if (dy[n][r] > 0) { // 이미 값이 구해져 있다면 더 이상 뻗지 말고 구해진 값을 써라.
            return dy[n][r];
        }

        if (n == r || r == 0) { // nCr 값이 1이 되는 경우
            return 1;
        } else {
            dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r); // 조합 공식에 따라 값을 계산하고 메모이제이션 배열에 저장
            return dy[n][r]; // 계산된 값을 반환
        }
    }

    answer = DFS(n, r);
    return answer;
}

console.log(solution(5, 3)); // 10