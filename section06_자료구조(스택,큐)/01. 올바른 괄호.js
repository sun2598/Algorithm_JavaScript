// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

function solution(s) {
    let answer = "YES";

    stack = [];
    for (let x of s) {
        if (x === '(') {
            stack.push(x);
        } else { // ')'
            if (stack.length === 0) {
                return "NO";
            }
            stack.pop();
        }
    }
    if (stack.length > 0) {
        return "NO";
    }
    return answer;
}

let a = "(()(()))(()";
console.log(solution(a));