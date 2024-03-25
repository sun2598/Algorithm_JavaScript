// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

// 나의 풀이 -> 시간 복잡도 O(n^2)
function solution(s, t) {
    let answer = [];

    let n = s.length;
    for (let i = 0; i < n; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (s[i] == t) {
                // 본인이 그 문자열일때
                min = 0;
                break;
            } else if (s[j] == t) {
                count = i > j ? i - j : j - i;
                min = Math.min(min, count);
            }
        }
        answer.push(min);
    }

    return answer;
}

// 강의 풀이 -> 시간 복잡도 O(n)
function solution2(s, t) {
    let answer = [];

    let p = 1000; // `t` 문자로부터의 거리를 측정할 변수 (충분히 큰 값으로 초기화)
    // 왼쪽에서 오른쪽으로 탐색
    for (let x of s) {
        if (x === t) { // 현재 문자가 `t`와 같으면 거리를 0으로 설정
            p = 0;
            answer.push(p);
        } else { // 현재 문자가 `t`와 다르면 거리를 1 증가
            p++;
            answer.push(p);
        }
    }

    p = 1000;
    // 오른쪽에서 왼쪽으로 탐색
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            p = 0; // 0은 이미 최소값이므로 Math.min() 안해도 됨
        } else {
            p++;
            // 이미 계산된 값(왼쪽에서 오른쪽으로 탐색한 결과)과 비교하여 최소값을 선택
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let str = 'teachermode';
console.log(solution2(str, 'e'));