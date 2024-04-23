function solution(need, plan) {
    let answer = "YES";

    let queue = need.split(''); // ['C', 'B', 'A']
    for (let x of plan) {
        if (queue.includes(x)) { // 현재 수업이 필수 과목 리스트에 포함되어 있는지 확인
            if (x !== queue.shift()) {
                return "NO"; // 포함되어 있다면 맨 앞 순서가 맞는지 확인
            }
        }
    }
    if (queue.length > 0) {
        return "NO";
    }

    return answer;
}

let a = "CBA"; // 필수과목 순서
let b = "CBDAGE"; // 현수가 설계한 필수과목 순서
console.log(solution(a, b));