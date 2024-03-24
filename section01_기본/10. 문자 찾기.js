// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

function solution(s, t){
    let answer = 0;

    // 1) for of 문: iterable 순회 전용 (iterable에는 String, Array, Map, Set, DOM컬렉션(HTMLColletion, NodeList) 등)
    // 2) for in 문: 객체의 프로퍼티 키 열거 전용

    for (let x of s) { // for in 문은 안됨!
        if (x == t) answer++;
    }

    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));