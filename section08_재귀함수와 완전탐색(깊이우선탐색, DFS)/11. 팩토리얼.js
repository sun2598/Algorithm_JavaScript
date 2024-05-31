// <팩토리얼>
// 자연수 N이 입력되면 N!을 구하는 프로그램을 작성하세요.
// 예를 들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.

// | DFS(1) = 1      |
// | DFS(2) = 2 * 1  |
// | DFS(3) = 3 * 2  |
// | DFS(4) = 4 * 6  |
// | DFS(5) = 5 * 24 |
// |_________________|

function solution(n) {
    let answer;

    function DFS(n) {
        if (n == 1) {
            return 1; // DFS(1)이 된다면 1 리턴
        } else {
            return n * DFS(n - 1);
        }
    }

    answer = DFS(n); // 초기 호출: 주어진 n의 팩토리얼을 계산
    return answer;
}

console.log(solution(5)); // 120