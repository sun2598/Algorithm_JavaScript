// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

// 나의 풀이
function solution(s) {
    let answer = '';

    let stack = [];
    for (let x of s) {
        if (x == '(') {
            stack.push('(');
        } else if (x == ')') {
            stack.pop();
        } else {
            if (stack.length == 0) {
                answer += x; // 스택이 비어있는 경우에만 문자를 결과 문자열에 추가
            }
        }
    }
    return answer;
}
// 강의 풀이
function solution2(s) {
    let answer;

    let stack = [];
    for (let x of s) {
        if (x === ')') {
            while (stack.pop() !== '('); // 필요 없는 문자(괄호 안의 문자)는 제거
        } else {
            stack.push(x); // 모든 문자를 스택에 푸시
        }
    }
    answer = stack.join('');
    return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution2(str));