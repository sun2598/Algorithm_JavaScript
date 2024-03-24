// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(s) {  
    let answer;
    let mid = Math.floor(s.length / 2);

    // 방법1 : substring 사용 -> begin부터 end '전'까지 문자열 잘라서 리턴
    if (s.length % 2 === 1) { // 홀수
        answer = s.substring(mid, mid + 1);
    } else { // 짝수
        answer = s.substring(mid - 1, mid + 1);
    }

    // 방법2 : substr 사용 -> begin부터 원하는 길이만큼 잘라서 문자열로 리턴
    // if (s.length % 2 === 1) {
    //     answer = s.substr(mid, 1);
    // } else {
    //     answer = s.substr(mid - 1, 2);
    // }

    return answer;
}

console.log(solution("study"));