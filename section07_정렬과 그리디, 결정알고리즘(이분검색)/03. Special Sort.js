// N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

// 나의풀이
function solution(arr) {
    let answer = arr;

    let positive = [];
    let negative = [];
    for (let x of arr) {
        if (x == Math.abs(x)) { // 양수
            positive.push(x);
        } else { // 음수
            negative.push(x);
        }
    }
    answer = negative.concat(positive);

    return answer;
}
// 강의풀이
function solution2(arr) {
    let answer = arr;

    // <버블정렬>

    // [1, 2, 3, -3, -2, 5, 6, -6]

    // [1, 2, -3, -2, 3, 5, -6, 6] (1회전)
    // [1, -3, -2, 2, 3, -6, 5, 6] (2회전)
    // [-3, -2, 1, 2, -6, 3, 5, 6] (3회전)
    // [-3, -2, 1, -6, 2, 3, 5, 6]
    // [-3, -2, -6, 1, 2, 3, 5, 6]
    // [-3, -2, -6, 1, 2, 3, 5, 6]
    // [-3, -2, -6, 1, 2, 3, 5, 6]
    // [-3, -2, -6, 1, 2, 3, 5, 6]

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        console.log(arr)
    } 

    return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr)); // -3 -2 -6 1 2 3 5 6