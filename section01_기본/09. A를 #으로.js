// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

function solution(s) {
    let answer = "";

    // 방법 1
    answer = s.replaceAll(/A/, "#"); // 정규표현식 사용
    // replace() 메소드는 처음 문자만 바뀜!

    // 방법 2
    // for (let x of s) { // for of 반복문은 문자열에도 사용 가능!
    //     if (x === "A") {
    //         answer += "#";
    //     } else {
    //         answer += x;
    //     }
    // }

    return answer;
}

let str = "BANANA";
console.log(solution(str));