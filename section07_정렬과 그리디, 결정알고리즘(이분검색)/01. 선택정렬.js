// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

function solution(arr) {
    let answer = arr;

    // (방법1) .sort() 사용 -> 시간복잡도 O(n log n) -> 내부 최적화로 인해 빠름
    // answer = arr.sort(function(a, b) {
    //     return a - b;
    // });

    // (방법2) 선택정렬 사용 -> 시간복잡도 O(n^2) -> 간단하지만 비효율적
    //               [13, 5, 11, 7, 23, 15]

    // i = 0 인 경우 : [5, 13, 11, 7, 23, 15]
    // i = 1 인 경우 : [5, 7, 11, 13, 23, 15] -> 이런식으로 최소값을 맨 앞으로 보내주고, 최소값이 있던 자리에 들어가는 로직
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i; // 최소값의 인덱스를 저장
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j; // 더 작은 값이 발견되면, 그 인덱스를 저장
            }
        }
        // 최소값을 찾은 후, i번째 값과 최소값을 교환

        // (두 원소의 위치 교환 방법1) -> JavaScript의 구조 분해 할당 사용
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        
        // (두 원소의 위치 교환 방법2) -> 임시 변수를 사용하는 전통적인 방법
        // let temp = arr[i];
        // arr[i] = arr[minIdx];
        // arr[minIdx] = temp;
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));