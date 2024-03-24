// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85 이므로 그 합은
// 77 + 41 + 53 + 85 = 256 이 되고,
// 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

function solution(arr) {
    let answer = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let x of arr) {
        if (x % 2 === 1) { // 홀수
            sum += x;
            if (x < min) {
                min = x;
            }
        }
    }
    answer.push(sum); // push : 맨 뒤에 추가 / pop : 맨 뒤 제거
    answer.push(min); // unshift : 맨 앞에 추가 (성능느림) / shift : 맨 앞 제거

    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));