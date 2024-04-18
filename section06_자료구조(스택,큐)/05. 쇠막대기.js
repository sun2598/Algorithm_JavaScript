function solution(s) {
    let answer = 0;  // 잘려진 쇠막대기 조각의 총 개수를 저장할 변수
    
    let stack = [];  // 여는 괄호를 추적하기 위한 스택
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (s[i - 1] === '(') {
                // 이전 문자도 확인하여, 이전 문자가 여는 괄호인 경우 현재 닫는 괄호와 함께 레이저를 형성
                answer += stack.length;  // 스택의 크기만큼 쇠막대기 조각이 추가됨 (레이저가 막대기를 자름)
            } else {
                // 이전 문자가 닫는 괄호이면 현재 닫는 괄호는 쇠막대기의 끝을 나타냄
                answer++;  // 막대기의 끝이므로 조각 하나 추가
            }
        }
    }
    return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a)); // 17