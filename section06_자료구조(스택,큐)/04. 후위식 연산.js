// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(s) {
    let answer;

    // 데이터 데이터 연산자
    // 352+*9-
    // 3(5+2)*9-
    // (3*7)9-
    // 21-9

    let stack = []; // 숫자만 담을 곳
    for (let x of s) {
        // if (x.charCodeAt() >= 48 && x.charCodeAt() <= 57) { // 방법2) 아스키 코드에서 숫자!
        if (!isNaN(x)) { // 방법1) isNan(x) -> true/false 반환
            stack.push(parseInt(x));
        } else { // 연산자
            let rt = stack.pop(); // 스택에서 먼저 꺼낸 값
            let lt = stack.pop(); // 스택에서 나중에 꺼낸 값
            let result = 0;
            switch (x) {
                case "+":
                    result = lt + rt;
                    break;
                case "-":
                    result = lt - rt;
                    break;
                case "*":
                    result = lt * rt;
                    break;
                case "/":
                    result = lt / rt;
                    break;
            }
            stack.push(result);
        }
    }
    answer = stack.pop(); // 최종적으로 스택에 남은 값이 결과

    return answer;
}

let str = '352+*9-';
console.log(solution(str));