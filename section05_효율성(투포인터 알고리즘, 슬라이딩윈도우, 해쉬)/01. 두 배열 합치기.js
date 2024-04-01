// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

function solution(arr1, arr2) {
    let answer = [];

    // 나의 풀이 -> 정렬 함수 : O(n log n)
    // answer = arr1.concat(arr2);
    // answer = answer.sort((a, b) => a - b);

    // 강의 풀이 -> 투포인터 알고리즘 : O(n) -> 두 배열이 '이미 정렬되어 있다'는 사실을 활용
    let n = arr1.length;
    let m = arr2.length;

    let p1 = 0;
    let p2 = 0; // 두 배열을 탐색할 포인터 초기화

    // [1, 3, 5]
    // p1

    // [2, 3, 6, 7, 9]
    // p2

    while (p1 < n && p2 < m) { // 두 배열을 모두 탐색할 때까지 반복
        if (arr1[p1] <= arr2[p2]) { // arr1의 현재 요소가 arr2의 현재 요소보다 작거나 같으면
            answer.push(arr1[p1++]); // arr1의 요소를 결과 배열에 추가하고 포인터 이동
        } else {
            answer.push(arr2[p2++]); // 그렇지 않으면 arr2의 요소를 결과 배열에 추가하고 포인터 이동
        }
    }
    while (p1 < n) { // arr1에 남은 요소가 있다면 결과 배열에 추가
        answer.push(arr1[p1++]); // (후위연산자는 연산을 수행한 후에 값을 증가)
    }
    while (p2 < m) { // arr2에 남은 요소가 있다면 결과 배열에 추가
        answer.push(arr2[p2++]);
    }
    
    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));