// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

function solution(s) {         
    let answer = "";

    // 나의 풀이
    // s = s.split('').map(x => { // String은 map 쓰려면 split(‘’) 하고 사용
    //     return x = x.toUpperCase();
    // })
    // answer = s.join(''); // 구분자 '' 로 join

    // 강의 풀이
    for (let x of s) {
        
        // 방법1
        // let num = x.charCodeAt();
        // if (num >= 97 && num <= 122) {
        //     answer += String.fromCharCode(num - 32); // 대문자: 65~90 / 소문자: 97~122 => 32 차이
        // } else {
        //     answer += x;
        // }

        // 방법2
        if (x === x.toLowerCase()) {
            answer += x.toUpperCase();
        } else {
            answer += x;
        }
    }

    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));