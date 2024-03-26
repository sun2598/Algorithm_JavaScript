// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우,
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.

function solution(s) {
    let answer = '';

    let count = 1;
    let current = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== current) { // 새로운문자
            if (count > 1) {
                answer += count + '';
            }
            answer += s[i];
            current = s[i];
            count = 1;
        } else { // 연속문자
            count++;
        }
    }
    return answer;
}
// 강의 풀이
function solution2(s) {
    let answer = '';

    let cnt = 1;
    s = s + ' ';
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) { // 연속문자
            cnt++;
        } else { // 새로운문자
            answer += s[i];
            if (cnt > 1) {
                answer += String(cnt); // String(n) : number -> string 변환
            }
            cnt = 1;
        }
    }
    return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution2(str));