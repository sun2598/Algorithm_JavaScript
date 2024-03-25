// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

function solution(s) {
    let answer = "YES";

    s = s.toLowerCase(); // 대소문자 구분 없이 비교하기 위해 전체 문자열을 소문자로 변환

    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (s[i] !== s[n - 1 - i]) { // - 1 잊지말기!
            answer = "NO";
            break;
        }
    }

    return answer;
}

let str = "goooG"; // YES 출력
console.log(solution(str));