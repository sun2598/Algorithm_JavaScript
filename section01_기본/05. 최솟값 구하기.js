// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution1(arr) {         
    let answer = Number.MAX_SAFE_INTEGER; // 아주 큰 값으로 초기화
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < answer) {
            answer = arr[i];
        }
    }
    return answer;
}

function solution2(arr) {         
    let answer = Number.MAX_SAFE_INTEGER; // 아주 큰 값으로 초기화

    // ... : 전개연산자(spread operator) -> 사용하면 배열이 하나하나 펼쳐져서 인자값으로 들어감
    answer = Math.min(...arr); 
    // -> Math.min(arr[0], arr[1], arr[2], ..., arr[6])

    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr));