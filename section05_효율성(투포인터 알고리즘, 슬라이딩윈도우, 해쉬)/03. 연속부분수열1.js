// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 1 2 1 3 1 1 1 2
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

function solution(m, arr) {
    let answer = 0; // 합이 M인 연속부분수열의 개수를 저장할 변수

    // [1, 2, 1, 3, 1, 1, 1, 2]
    // lt
    // rt

    let lt = 0; // 연속 부분 수열의 시작 인덱스
    let sum = 0; // 현재 연속 부분 수열의 합
    for (let rt = 0; rt < arr.length; rt++) { // rt는 연속 부분 수열의 끝 인덱스
        sum += arr[rt]; // 현재 요소를 sum에 추가
        if (sum === m) { // 합이 M과 같다면
            answer++; // 정답 카운트를 증가
        }
        while (sum >= m) { // 합이 M 이상인 경우, 시작 인덱스(lt)를 하나씩 증가시키면서 합을 조정
            sum -= arr[lt++]; // 시작 인덱스의 요소를 빼고, lt를 1 증가
            if (sum === m) { // 조정한 합이 M과 같다면
                answer++; // 정답 카운트를 증가
            }
        }
    }
    return answer; // 계산된 연속 부분 수열의 개수 반환
}


let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));