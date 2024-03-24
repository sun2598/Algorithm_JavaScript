// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

function solution(s) {
    let answer = [];

    // 나의 풀이
    // for (let i = 0; i < s.length; i++) {
    //     if (s.indexOf(s[i]) == i) {
    //         answer.push(s[i]);
    //     }
    // }

    // 강의 풀이 : array니까 filter 사용 (true를 리턴한 값들로만 새로운 배열 생성)
    answer = s.filter(function(value, index) {
        return s.indexOf(value) === index;
    });

    return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));