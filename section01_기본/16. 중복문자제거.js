// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

function solution(s) {
    let answer = '';

    // indexOf() : searchValue의 첫 번째 등장 인덱스. 찾을 수 없으면 -1.

    // 강의 풀이
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i], i, s.indexOf(s[i]));
        if (s.indexOf(s[i]) === i) {
            answer += s[i];
        }
    }

    return answer;
}
console.log(solution('ksekkset'));
