// <수들의 조합>
// N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12 2+4+12로 2가지가 있습니다.

// DFS(0, 0, 0)
//   |
//   |-- DFS(1, 1, 2)  // 선택: 2
//   |    |
//   |    |-- DFS(2, 2, 6)  // 선택: 2, 4
//   |    |    |
//   |    |    |-- DFS(3, 3, 11)  // 선택: 2, 4, 5  (합: 11, 배수 아님)
//   |    |    |
//   |    |    |-- DFS(3, 4, 14)  // 선택: 2, 4, 8  (합: 14, 배수 아님)
//   |    |    |
//   |    |    |-- DFS(3, 5, 18)  // 선택: 2, 4, 12 (합: 18, 6의 배수)
//   |    |
//   |    |-- DFS(2, 3, 7)  // 선택: 2, 5
//   |    |    |
//   |    |    |-- DFS(3, 4, 15)  // 선택: 2, 5, 8  (합: 15, 배수 아님)
//   |    |    |
//   |    |    |-- DFS(3, 5, 19)  // 선택: 2, 5, 12 (합: 19, 배수 아님)

function solution(n, k, arr, m) {
    let answer = 0;

    function DFS(L, s, sum) { // L: 현재 선택된 숫자의 개수, s: 선택을 시작할 인덱스, sum: 현재까지 선택된 숫자들의 합
        if (L === k) { // k개의 숫자를 모두 선택한 경우
            if (sum % m === 0) { // 조합의 합이 m의 배수인 경우
                answer++;
            }
        } else {
            for (let i = s; i < n; i++) { // s부터 n-1까지 반복
                DFS(L + 1, i + 1, sum + arr[i]); // 다음 숫자를 선택하기 위해 재귀 호출
            }
        }
    }

    DFS(0, 0, 0); // 초기 호출: 0개의 숫자를 선택한 상태에서 0번 인덱스부터 선택 시작
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6)); // 2
// 첫 인자에 정수의 개수 N(3<=N<=20), 두번째 인자에 임의의 정수 K(2<=K<=N)가 주어지고, 
// 세번째 인자에 N개의 정수가 주어진다.
// 네번째 인자에 M이 주어진다.