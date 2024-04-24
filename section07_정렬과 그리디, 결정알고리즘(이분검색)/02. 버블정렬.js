function solution(arr) {
    let answer = arr;

    // <버블정렬>
    // 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿈 (swap)
    // 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿈 (swap)
    // 1, 2를 마지막까지 반복
    // 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려남

    // [13, 5, 11, 7, 23, 15]
    // [5, 11, 7, 13, 15, 23] (1회전)
    // [5, 7, 11, 13, 15, 23] (2회전)
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));